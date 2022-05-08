module.exports = app => {
  // const moduleInfo = app.meta.mockUtil.parseInfoFromPackage(__dirname);
  const content = {
    presets: {
      anonymous: {},
      authenticated: {},
    },
  };
  const _app = {
    atomName: 'Tools',
    atomStaticKey: 'appTools',
    atomRevision: 1,
    description: '',
    appIcon: ':outline:build-circle-outline',
    appIsolate: true,
    content: JSON.stringify(content),
    resourceRoles: 'template.system',
  };
  return _app;
};