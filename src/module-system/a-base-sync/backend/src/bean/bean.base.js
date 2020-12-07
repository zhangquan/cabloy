const path = require('path');
const require3 = require('require3');
const fse = require3('fs-extra');

const _modulesLocales = {};
const _themesLocales = {};
const _locales = {};
const _resourceTypes = {};
const _atomClasses = {};
const _actions = {};
const _functions = {};
const _menus = {};
const _panels = {};
const _widgets = {};
const _sections = {};
const _buttons = {};
const _authProvidersLocales = {};

module.exports = ctx => {
  const moduleInfo = ctx.app.meta.mockUtil.parseInfoFromPackage(__dirname);
  class Base extends ctx.app.meta.BeanModuleBase {

    constructor(moduleName) {
      super(ctx, 'base');
      this.moduleName = moduleName || ctx.module.info.relativeName;
    }

    get host() {
      const config = ctx.config.module(moduleInfo.relativeName);
      return config.host || ctx.host;
    }

    get protocol() {
      const config = ctx.config.module(moduleInfo.relativeName);
      return config.protocol || ctx.protocol;
    }

    getAbsoluteUrl(path) {
      const prefix = this.host ? `${this.protocol}://${this.host}` : '';
      return `${prefix}${path}`;
    }

    // get forward url
    getForwardUrl(path) {
      const prefix = (ctx.app.meta.isTest || ctx.app.meta.isLocal) ? ctx.app.config.static.prefix + 'public/' : '/public/';
      return `${prefix}${ctx.instance.id}/${path}`;
    }

    // get root path
    async getRootPath() {
      if (ctx.app.meta.isTest || ctx.app.meta.isLocal) {
        return ctx.app.config.static.dir;
      }
      const dir = ctx.config.module(moduleInfo.relativeName).publicDir || path.join(require('os').homedir(), 'cabloy', ctx.app.name, 'public');
      await fse.ensureDir(dir);
      return dir;
    }

    // get path
    async getPath(subdir, ensure) {
      const rootPath = await this.getRootPath();
      const dir = path.join(rootPath, ctx.instance.id.toString(), subdir || '');
      if (ensure) {
        await fse.ensureDir(dir);
      }
      return dir;
    }

    // static
    getStaticUrl(path) {
      return this.getAbsoluteUrl(`/api/static${path}`);
    }

    // alert
    getAlertUrl({ data }) {
      return this.getAbsoluteUrl(`/#!/a/basefront/base/alert?data=${encodeURIComponent(JSON.stringify(data))}`);
    }

    modules() {
      if (!_modulesLocales[ctx.locale]) {
        _modulesLocales[ctx.locale] = this._prepareModules();
      }
      return _modulesLocales[ctx.locale];
    }

    themes() {
      if (!_themesLocales[ctx.locale]) {
        _themesLocales[ctx.locale] = this._prepareThemes();
      }
      return _themesLocales[ctx.locale];
    }

    locales() {
      if (!_locales[ctx.locale]) {
        _locales[ctx.locale] = this._prepareLocales();
      }
      return _locales[ctx.locale];
    }

    resourceTypes() {
      if (!_resourceTypes[ctx.locale]) {
        _resourceTypes[ctx.locale] = this._prepareResourceTypes();
      }
      return _resourceTypes[ctx.locale];
    }

    atomClasses() {
      if (!_atomClasses[ctx.locale]) {
        _atomClasses[ctx.locale] = this._prepareAtomClasses();
      }
      return _atomClasses[ctx.locale];
    }

    atomClass({ module, atomClassName }) {
      const _atomClasses = this.atomClasses();
      return _atomClasses[module] && _atomClasses[module][atomClassName];
    }

    actions() {
      if (!_actions[ctx.locale]) {
        _actions[ctx.locale] = this._prepareActions();
      }
      return _actions[ctx.locale];
    }

    action({ module, atomClassName, code, name }) {
      const _actions = this.actions();
      const actions = _actions[module][atomClassName];
      if (name) return actions[name];
      const key = Object.keys(actions).find(key => actions[key].code === code);
      return actions[key];
    }

    menus() {
      if (!_menus[ctx.locale]) {
        _menus[ctx.locale] = this._prepareMenus(1);
      }
      return _menus[ctx.locale];
    }

    panels() {
      if (!_panels[ctx.locale]) {
        _panels[ctx.locale] = this._prepareMenus(2);
      }
      return _panels[ctx.locale];
    }

    widgets() {
      if (!_widgets[ctx.locale]) {
        _widgets[ctx.locale] = this._prepareMenus(3);
      }
      return _widgets[ctx.locale];
    }

    sections() {
      if (!_sections[ctx.locale]) {
        _sections[ctx.locale] = this._prepareMenus(4);
      }
      return _sections[ctx.locale];
    }

    buttons() {
      if (!_buttons[ctx.locale]) {
        _buttons[ctx.locale] = this._prepareMenus(5);
      }
      return _buttons[ctx.locale];
    }

    functions() {
      if (!_functions[ctx.locale]) {
        _functions[ctx.locale] = this._prepareFunctions();
      }
      return _functions[ctx.locale];
    }

    function({ module, name }) {
      const _functions = this.functions();
      if (!_functions[module]) return null;
      return _functions[module][name];
    }

    functionsAutoRight({ module, atomClassName, action }) {
      const functions = {};
      const _functions = this.functions();
      for (const key in _functions[module]) {
        const _func = _functions[module][key];
        const _action = typeof action === 'string' ? _func.action : ctx.constant.module(moduleInfo.relativeName).atom.action[_func.action];
        if (_func.autoRight && _func.atomClassName === atomClassName && _action === action) {
          functions[key] = _func;
        }
      }
      return functions;
    }

    authProviders() {
      const subdomain = ctx.subdomain;
      if (!_authProvidersLocales[subdomain]) _authProvidersLocales[subdomain] = {};
      const authProvidersSubdomain = _authProvidersLocales[subdomain];
      if (!authProvidersSubdomain[ctx.locale]) {
        authProvidersSubdomain[ctx.locale] = this._prepareAuthProviders();
      }
      return authProvidersSubdomain[ctx.locale];
    }

    authProvidersReset() {
      const subdomain = ctx.subdomain;
      _authProvidersLocales[subdomain] = {};
    }

    // inner methods

    _prepareModules() {
      const modules = {};
      for (const relativeName in ctx.app.meta.modules) {
        const module = ctx.app.meta.modules[relativeName];
        const _module = {
          name: relativeName,
          title: module.package.title || module.info.name,
          description: ctx.text(module.package.description),
          info: module.info,
        };
        _module.titleLocale = ctx.text(_module.title);
        modules[relativeName] = _module;
      }
      return modules;
    }

    _prepareThemes() {
      const modules = {};
      for (const relativeName in ctx.app.meta.modules) {
        const module = ctx.app.meta.modules[relativeName];
        if (module.package.eggBornModule && module.package.eggBornModule.theme) {
          const _module = {
            name: relativeName,
            title: module.package.title || module.info.name,
            description: ctx.text(module.package.description),
            info: module.info,
          };
          _module.titleLocale = ctx.text(_module.title);
          modules[relativeName] = _module;
        }
      }
      return modules;
    }

    _prepareLocales() {
      const locales = [];
      const config = ctx.config.module(moduleInfo.relativeName);
      for (const locale in config.locales) {
        locales.push({
          title: ctx.text(config.locales[locale]),
          value: locale,
        });
      }
      return locales;
    }

    _prepareResourceTypes() {
      const resourceTypes = {};
      for (const module of ctx.app.meta.modulesArray) {
        const moduleName = module.info.relativeName;
        const resources = module.main.meta && module.main.meta.base && module.main.meta.base.resources;
        if (!resources) continue;
        for (const key in resources) {
          const resource = resources[key];
          const fullKey = `${moduleName}:${key}`;
          resourceTypes[fullKey] = {
            ...resource,
            titleLocale: ctx.text(resource.title),
          };
        }
      }
      return resourceTypes;
    }

    _prepareAtomClasses() {
      const atomClasses = {};
      for (const relativeName in ctx.app.meta.modules) {
        const module = ctx.app.meta.modules[relativeName];
        if (module.main.meta && module.main.meta.base && module.main.meta.base.atoms) {
          const res = this._prepareAtomClassesModule(module, module.main.meta.base.atoms);
          if (Object.keys(res).length > 0) {
            atomClasses[relativeName] = res;
          }
        }
      }
      return atomClasses;
    }

    _prepareAtomClassesModule(module, _atoms) {
      const atomClasses = {};
      for (const key in _atoms) {
        // info
        const atomClass = {
          name: key,
          ..._atoms[key].info,
        };
        // titleLocale
        atomClass.titleLocale = ctx.text(atomClass.title);
        // ok
        atomClasses[key] = atomClass;
      }
      return atomClasses;
    }

    _prepareActions() {
      const actions = {};
      for (const relativeName in ctx.app.meta.modules) {
        const module = ctx.app.meta.modules[relativeName];
        if (module.main.meta && module.main.meta.base && module.main.meta.base.atoms) {
          actions[relativeName] = {};
          for (const atomClassName in module.main.meta.base.atoms) {
            actions[relativeName][atomClassName] = this._prepareActionsAtomClass(module, module.main.meta.base.atoms[atomClassName]);
          }
        }
      }
      return actions;
    }

    _prepareActionsAtomClass(module, atomClass) {
      const actions = {};
      const _actions = atomClass.actions;
      const _actionsSystem = ctx.constant.module(moduleInfo.relativeName).atom.action;
      const _actionsSystemMeta = ctx.constant.module(moduleInfo.relativeName).atom.actionMeta;
      //  _actionsSystem
      for (const key in _actionsSystem) {
        if (key === 'custom') continue;
        const action = {
          code: _actionsSystem[key],
          name: key,
          title: _actionsSystemMeta[key].title,
          authorize: _actionsSystemMeta[key].authorize,
        };
        if (_actions && _actions[key]) {
          action.stage = _actions[key].stage;
          action.meta = _actions[key].meta;
          action.bulk = _actions[key].bulk;
          action.select = _actions[key].select;
          action.enableOnStatic = _actions[key].enableOnStatic;
          action.enableOnOpened = _actions[key].enableOnOpened;
          action.icon = _actions[key].icon;
        } else {
          action.stage = _actionsSystemMeta[key].stage;
          action.meta = _actionsSystemMeta[key].meta;
          action.bulk = _actionsSystemMeta[key].bulk;
          action.select = _actionsSystemMeta[key].select;
          action.enableOnStatic = _actionsSystemMeta[key].enableOnStatic;
          action.enableOnOpened = _actionsSystemMeta[key].enableOnOpened;
          action.icon = _actionsSystemMeta[key].icon;
        }
        if (_actions && _actions[key] && (_actions[key].actionComponent || _actions[key].actionPath)) {
          // custom
          action.actionModule = _actions[key].actionModule || module.info.relativeName;
          action.actionComponent = _actions[key].actionComponent;
          action.actionPath = _actions[key].actionPath;
        } else {
          // default
          action.actionModule = moduleInfo.relativeName;
          action.actionComponent = _actionsSystemMeta[key].actionComponent;
          action.actionPath = _actionsSystemMeta[key].actionPath;
        }
        action.titleLocale = ctx.text(action.title);
        actions[key] = action;
      }
      //  _actions
      if (_actions) {
        for (const key in _actions) {
          if (_actionsSystem[key]) continue;
          const action = {
            code: _actions[key].code,
            name: key,
            title: _actions[key].title || key,
            actionModule: _actions[key].actionModule || module.info.relativeName,
            actionComponent: _actions[key].actionComponent,
            actionPath: _actions[key].actionPath,
            authorize: _actions[key].authorize,
            stage: _actions[key].stage,
            meta: _actions[key].meta,
            bulk: _actions[key].bulk,
            select: _actions[key].select,
            enableOnStatic: _actions[key].enableOnStatic,
            enableOnOpened: _actions[key].enableOnOpened,
            icon: _actions[key].icon,
          };
          if (!_actions[key].actionComponent && !_actions[key].actionPath) {
            // default
            action.actionModule = _actions[key].actionModule || moduleInfo.relativeName;
            action.actionComponent = 'action';
            action.actionPath = '';
          } else {
            // custom
            action.actionModule = _actions[key].actionModule || module.info.relativeName;
            action.actionComponent = _actions[key].actionComponent;
            action.actionPath = _actions[key].actionPath;
          }
          action.titleLocale = ctx.text(action.title);
          actions[key] = action;
        }
      }
      return actions;
    }

    _prepareMenus(functionType) {
      const menus = {};
      const functions = this._prepareFunctions();
      for (const relativeName in functions) {
        const functionsModule = functions[relativeName];
        const _menus = {};
        for (const key in functionsModule) {
          const func = functionsModule[key];
          // 2018.12.22 menu maybe 0 for special scene
          if (functionType === 1) {
            if (func.menu === 1 || (func.actionComponent || func.actionPath)) {
              _menus[key] = func;
            }
          } else if (func.menu === functionType) {
            _menus[key] = func;
          }
        }
        if (Object.keys(_menus).length > 0) {
          menus[relativeName] = _menus;
        }
      }
      return menus;
    }

    _prepareFunctions() {
      const functions = {};
      for (const relativeName in ctx.app.meta.modules) {
        const module = ctx.app.meta.modules[relativeName];
        if (module.main.meta && module.main.meta.base && module.main.meta.base.functions) {
          functions[relativeName] = this._prepareFunctionsModule(module, module.main.meta.base.functions);
        }
      }
      return functions;
    }

    _prepareFunctionsModule(module, _functions) {
      const functions = {};
      if (Array.isArray(_functions)) {
        // array
        for (const _func of _functions) {
          const key = _functions.name;
          functions[key] = this._prepareFunctionsModule_function(module, _func, key);
        }
      } else {
        // object
        for (const key in _functions) {
          functions[key] = this._prepareFunctionsModule_function(module, _functions[key], key);
        }
      }
      return functions;
    }

    _prepareFunctionsModule_function(module, _func, key) {
      const func = {
        module: module.info.relativeName,
        name: key,
        title: _func.title || key,
        scene: _func.scene,
        autoRight: _func.autoRight || 0,
        atomClassName: _func.atomClassName,
        action: _func.action,
        actionModule: _func.actionModule || module.info.relativeName,
        actionComponent: _func.actionComponent,
        actionPath: _func.actionPath,
        sorting: _func.sorting || 0,
        menu: _func.menu || 0,
        public: _func.public ? 1 : 0,
        url: ctx.bean.util.combinePagePath(module.info, _func.url),
        component: _func.component,
      };
      func.titleLocale = ctx.text(func.title);
      // create
      if (func.action === 'create' && !func.actionComponent && !func.actionPath) {
        func.actionModule = 'a-base';
        func.actionComponent = 'action';
        // func.actionPath = '/a/basefront/atom/item?mode=edit&atomId={{atomId}}&itemId={{itemId}}';
      }
      // list
      if (func.action === 'read' && !func.actionComponent && !func.actionPath) {
        func.actionPath = '/a/basefront/atom/list?module={{module}}&atomClassName={{atomClassName}}';
      }
      // ok
      return func;
    }

    _prepareAuthProviders() {
      const authProviders = {};
      for (const relativeName in ctx.app.meta.modules) {
        const module = ctx.app.meta.modules[relativeName];
        let metaAuth = module.main.meta && module.main.meta.auth;
        if (!metaAuth) continue;
        if (typeof metaAuth === 'function') {
          metaAuth = metaAuth(ctx);
        }
        if (!metaAuth.providers) continue;
        // loop
        for (const providerName in metaAuth.providers) {
          const _authProvider = metaAuth.providers[providerName];
          if (!_authProvider) continue;
          const authProvider = {
            meta: _authProvider.meta,
            config: _authProvider.config,
            configFunctions: _authProvider.configFunctions,
            handler: _authProvider.handler,
          };
          if (authProvider.meta && authProvider.meta.title) {
            authProvider.meta.titleLocale = ctx.text(authProvider.meta.title);
          }
          authProviders[`${relativeName}:${providerName}`] = authProvider;
        }
      }
      return authProviders;
    }

  }

  return Base;
};
