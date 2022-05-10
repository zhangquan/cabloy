module.exports = app => {
  // const moduleInfo = app.meta.mockUtil.parseInfoFromPackage(__dirname);
  const content = {
    info: {
      layout: {
        viewSize: {
          small: 'list',
          medium: 'list',
          large: 'list',
        },
      },
    },
    layouts: {
      base: {
        blocks: {},
      },
      list: {
        providerOptions: {
          providerName: 'all',
          autoInit: true,
        },
      },
    },
  };
  const layout = {
    atomName: 'Default',
    atomStaticKey: 'layoutAppMenuDefault',
    atomRevision: 1,
    description: '',
    layoutTypeCode: 13,
    content: JSON.stringify(content),
    resourceRoles: 'root',
  };
  return layout;
};