module.exports = app => {
  const moduleInfo = app.meta.mockUtil.parseInfoFromPackage(__dirname);
  return {
    detail: {
      action: {
        create: 1,
        read: 2,
        write: 3,
        delete: 4,
        clone: 5,
        moveUp: 6,
        moveDown: 7,

        save: 51,

        custom: 100, // custom action start from custom
      },
      actionMeta: {
        create: {
          title: 'Create',
          actionModule: moduleInfo.relativeName,
          actionComponent: 'action',
          bulk: true,
          icon: { f7: '::add' },
          inherit: 'write',
          mode: 'edit',
          stage: 'draft',
        },
        read: {
          title: 'View',
          actionModule: moduleInfo.relativeName,
          actionComponent: 'action',
          icon: { f7: '::visibility' },
          inherit: 'read',
          mode: 'view',
          stage: '',
        },
        write: {
          title: 'Edit',
          actionModule: moduleInfo.relativeName,
          actionComponent: 'action',
          icon: { f7: '::edit' },
          inherit: 'write',
          mode: 'edit',
          stage: 'draft',
        },
        delete: {
          title: 'Delete',
          actionModule: moduleInfo.relativeName,
          actionComponent: 'action',
          icon: { f7: '::delete' },
          inherit: 'write',
          mode: 'edit',
          stage: 'draft',
        },
        clone: {
          title: 'Clone',
          actionModule: moduleInfo.relativeName,
          actionComponent: 'action',
          icon: { f7: ':outline:copy-outline' },
          inherit: 'write',
          mode: 'edit',
          stage: 'draft',
        },
        moveUp: {
          title: 'Move Up',
          actionModule: moduleInfo.relativeName,
          actionComponent: 'action',
          icon: { f7: '::arrow-up' },
          inherit: 'write',
          mode: 'edit',
          stage: 'draft',
        },
        moveDown: {
          title: 'Move Down',
          actionModule: moduleInfo.relativeName,
          actionComponent: 'action',
          icon: { f7: '::arrow-down' },
          inherit: 'write',
          mode: 'edit',
          stage: 'draft',
        },
        save: {
          title: 'Save',
          actionModule: moduleInfo.relativeName,
          actionComponent: 'action',
          authorize: false,
          icon: { f7: '::save' },
          inherit: 'write',
          mode: 'edit',
          stage: 'draft',
        },
        custom: {
          title: 'Custom',
        },
      },
    },
  };
};
