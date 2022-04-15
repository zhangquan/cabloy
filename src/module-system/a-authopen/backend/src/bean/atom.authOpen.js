const require3 = require('require3');
const randomize = require3('randomatic');

module.exports = app => {
  class Atom extends app.meta.AtomBase {
    async create({ atomClass, item, options, user }) {
      // super
      const key = await super.create({ atomClass, item, options, user });
      const atomId = key.atomId;
      // clientID clientSecret
      const clientID = randomize('0a', 20);
      const clientSecret = randomize('0a', 40);
      // add authOpen
      const res = await this.ctx.model.authOpen.insert({
        atomId,
        userId: user.id,
        clientID,
        clientSecret,
      });
      const itemId = res.insertId;
      // return key
      return { atomId, itemId };
    }

    async read({ atomClass, options, key, user }) {
      // super
      const item = await super.read({ atomClass, options, key, user });
      if (!item) return null;
      // meta
      this._getMeta(item);
      // ok
      return item;
    }

    async select({ atomClass, options, items, user }) {
      // super
      await super.select({ atomClass, options, items, user });
      // meta
      for (const item of items) {
        this._getMeta(item);
      }
    }

    async write({ atomClass, target, key, item, options, user }) {
      // super
      await super.write({ atomClass, target, key, item, options, user });
      // update authOpen
      const data = await this.ctx.model.authOpen.prepareData(item);
      data.id = key.itemId;
      await this.ctx.model.authOpen.update(data);
    }

    async delete({ atomClass, key, user }) {
      // super
      await super.delete({ atomClass, key, user });
      // delete authOpen
      await this.ctx.model.authOpen.delete({
        id: key.itemId,
      });
    }

    _getMeta(item) {
      // clientSecretHidden
      if (item.clientSecretHidden) {
        item.clientSecret = '******';
      }
      // meta
      const meta = this._ensureItemMeta(item);
      // meta.flags
      // meta.summary
      meta.summary = item.description;
    }
  }

  return Atom;
};
