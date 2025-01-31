const require3 = require('require3');
const chalk = require3('chalk');
const boxen = require3('boxen');

const boxenOptions = { padding: 1, margin: 1, align: 'center', borderColor: 'yellow', borderStyle: 'round' };

module.exports = ctx => {
  const moduleInfo = ctx.app.meta.mockUtil.parseInfoFromPackage(__dirname);
  class Captcha {
    async verify(_context) {
      const { providerInstanceId, context, data, dataInput } = _context;
      // sms provider
      const { provider, config } = this.__createSMSProvider();
      // verify
      await provider.verify({ providerInstanceId, context, data, dataInput, config });
    }

    __createSMSProvider(options) {
      const providers = ctx.bean.smsProviderCache.getSmsProvidersConfigCache();
      // provider name
      let providerName = options && options.providerName;
      if (!providerName) {
        // current
        providerName = Object.keys(providers).find(providerName => providers[providerName].current);
        // test
        if (!providerName && (ctx.app.meta.isTest || ctx.app.meta.isLocal)) {
          providerName = 'test';
        }
        if (!providerName) {
          // prompt
          const message = chalk.keyword('orange')(ctx.text('smsProviderNonePrompt'));
          console.log('\n' + boxen(message, boxenOptions));
          ctx.throw.module(moduleInfo.relativeName, 1001);
        }
      }
      // provider
      const provider = ctx.bean._getBean(moduleInfo.relativeName, `sms.provider.${providerName}`);
      const config = providers[providerName];
      return { provider, config };
    }
  }
  return Captcha;
};
