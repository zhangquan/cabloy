const require3 = require('require3');
const Strategy = require3('@zhennann/passport-wechat').Strategy;

module.exports = function (ctx) {
  const moduleInfo = ctx.app.meta.mockUtil.parseInfoFromPackage(__dirname);
  class Provider extends ctx.app.meta.IAuthProviderBase(ctx) {
    get configModule() {
      return ctx.config.module(moduleInfo.relativeName);
    }
    get cacheDb() {
      return ctx.cache.db.module(moduleInfo.relativeName);
    }
    get localHelper() {
      return ctx.bean.local.module(moduleInfo.relativeName).helper;
    }
    async getConfigDefault() {
      const configWechatmini = this.configModule.account.wechatmini;
      return {
        scenes: configWechatmini.scenes,
        locals: configWechatmini.locals,
      };
    }
    checkConfigValid(config) {
      return !!config.appID && !!config.appSecret;
    }
    async adjustConfig(config) {
      const configWechatmini = this.configModule.account.wechatmini;
      config.scope = configWechatmini.scope;
      return config;
    }
    getStrategy() {
      return Strategy;
    }
  }

  return Provider;
};