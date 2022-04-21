const require3 = require('require3');
const extend = require3('extend2');

let __commandsMap;
let __commandsAll;

module.exports = ctx => {
  // const moduleInfo = ctx.app.meta.mockUtil.parseInfoFromPackage(__dirname);
  class Cli {
    async meta({ context, user }) {
      const { argv } = context;
      const cliFullName = argv.cliFullName;
      const command = await this._findCliCommandAndCheckRight({ cliFullName, user });
      // command bean
      const beanCommand = ctx.bean._getBean(command.beanFullName);
      if (!beanCommand) throw new Error(`cli command bean not found: ${command.beanFullName}`);
      // meta
      return await beanCommand.meta({ command, context, user });
    }

    async execute({ context, user }) {
      // create progress
      const progressId = await ctx.bean.progress.create();
      // background
      ctx.runInBackground(async () => {
        await this._progressInBackground({ progressId, context, user });
      });
      // return progressId
      return { progressId };
    }

    async _progressInBackground({ progressId, context, user }) {
      try {
        const { argv } = context;
        const cliFullName = argv.cliFullName;
        const command = await this._findCliCommandAndCheckRight({ cliFullName, user });
        // command bean
        const beanCommand = ctx.bean._getBean(command.beanFullName);
        if (!beanCommand) throw new Error(`cli command bean not found: ${command.beanFullName}`);
        // execute
        await beanCommand.execute({ progressId, command, context, user });
        // progress done
        await ctx.bean.progress.done({ progressId, message: ctx.text('Well Done') });
      } catch (err) {
        // progress error
        await ctx.bean.progress.error({ progressId, message: err.message });
        // throw err
        throw err;
      }
    }

    async _findCliCommandAndCheckRight({ cliFullName, user }) {
      // command
      const command = this._findCliCommand({ cliFullName });
      // check right first
      const right = await ctx.bean.resource.checkRightResource({
        atomStaticKey: command.resource.atomStaticKey,
        user,
      });
      if (!right) ctx.throw(403);
      return command;
    }

    _findCliCommand({ cliFullName }) {
      if (!__commandsMap) {
        this._collectCommands();
      }
      const command = __commandsMap[cliFullName];
      if (!command) throw new Error(`cli command not found: ${cliFullName}`);
      return command;
    }

    _collectCommands() {
      const _commandsMap = {};
      const _commandsAll = {};
      for (const module of ctx.app.meta.modulesArray) {
        const moduleName = module.info.relativeName;
        const commands = module.main.meta && module.main.meta.cli && module.main.meta.cli.commands;
        if (!commands) continue;
        const _commandsModule = (_commandsAll[moduleName] = {});
        for (const groupName in commands) {
          const group = commands[groupName];
          const _commandsGroup = (_commandsModule[groupName] = {});
          for (const key in group) {
            const command = group[key];
            const fullKey = `${moduleName}:${groupName}:${key}`;
            // command
            const _command = extend(true, {}, command);
            // bean
            const beanName = command.bean;
            let beanFullName;
            if (typeof beanName === 'string') {
              beanFullName = `${moduleName}.cli.${beanName}`;
            } else {
              beanFullName = `${beanName.module || moduleName}.cli.${beanName.name}`;
            }
            _command.beanFullName = beanFullName;
            // resource
            let atomStaticKey = _command.resource && _command.resource.atomStaticKey;
            if (!atomStaticKey) throw new Error(`cli command resource.atomStaticKey not specified: ${fullKey}`);
            if (atomStaticKey.indexOf(':') === -1) {
              atomStaticKey = `${moduleName}:${atomStaticKey}`;
            }
            _command.resource.atomStaticKey = atomStaticKey;
            // ok
            _commandsMap[fullKey] = _commandsGroup[key] = _command;
          }
        }
      }
      // ok
      __commandsMap = _commandsMap;
      __commandsAll = _commandsAll;
    }
  }
  return Cli;
};