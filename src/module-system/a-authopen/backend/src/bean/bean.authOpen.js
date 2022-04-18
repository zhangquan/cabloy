module.exports = ctx => {
  const moduleInfo = ctx.app.meta.mockUtil.parseInfoFromPackage(__dirname);
  class AuthOpen {
    get modelAuthOpen() {
      return ctx.model.module(moduleInfo.relativeName).authOpen;
    }
    get modelResourceRole() {
      return ctx.model.module('a-base').resourceRole;
    }

    async verify({ clientID, clientSecret }) {
      // authOpen
      const authOpen = await this.modelAuthOpen.get({ clientID, clientSecret });
      if (!authOpen) return ctx.throw(403);
      // atomDisabled
      const atom = await ctx.bean.atom.modelAtom.get({ id: authOpen.atomId });
      if (atom.atomDisabled) return ctx.throw(403);
      // neverExpire/expireTime
      if (!authOpen.neverExpire && authOpen.expireTime <= Date.now()) {
        return ctx.throw.module(moduleInfo.relativeName, 1001);
      }
      // done
      return authOpen;
    }

    isAuthOpen() {
      const provider = ctx.bean.util.getProperty(ctx, 'state.user.provider');
      if (!provider) return false;
      return provider.module === 'a-authopen' && provider.providerName === 'authopen' ? provider : null;
    }

    async prepareAuthOpen() {
      const provider = this.isAuthOpen();
      if (!provider) return null; // not auth open provider
      const authOpen = await this.getAuthOpenByAuthId({ authId: provider.id });
      // check full
      if (authOpen.scopeRoleName === 'RoleScopeFull') return null;
      // ok
      return authOpen;
    }

    async checkRightResource({ resourceAtomId }) {
      // authOpen
      const authOpen = await this.prepareAuthOpen();
      if (!authOpen) return true;
      // check
      const right = await ctx.model.queryOne(
        `
          select * from aViewRoleRightResource a
            where a.iid=? and a.roleIdWho=? and a.atomId=?
        `,
        [ctx.instance.id, authOpen.scopeRoleId, resourceAtomId]
      );
      return !!right;
    }

    async checkRightAtomAction({ atomClass, action }) {
      // authOpen
      const authOpen = await this.prepareAuthOpen();
      if (!authOpen) return true;
      // parse action code
      action = ctx.bean.atomAction.parseActionCode({
        action,
        atomClass,
      });
      // check
      const right = await ctx.model.queryOne(
        `
        select * from aViewRoleRightAtomClass a
            where a.iid=? and a.roleIdWho=? and a.atomClassId=? and action=?
      `,
        [ctx.instance.id, authOpen.scopeRoleId, atomClass.id, action]
      );
      return !!right;
    }

    async getAuthOpenByAuthId({ authId }) {
      return await ctx.model.queryOne(
        `
          select a.* from aAuthOpenView a
            inner join aAuth b on a.id=b.profileId
              where a.iid=? and a.deleted=0 and b.id=? 
        `,
        [ctx.instance.id, authId]
      );
    }
  }
  return AuthOpen;
};