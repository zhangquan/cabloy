module.exports = {
  systemRoles: [ 'root', 'anonymous', 'authenticated', 'template', 'system', 'registered', 'activated', 'superuser', 'organization', 'internal', 'external' ],
  atom: {
    stage: {
      draft: 0,
      archive: 1,
      history: 2,
    },
    action: {
      create: 1,
      read: 2,
      write: 3,
      delete: 4,
      clone: 5,
      deleteBulk: 31,
      exportBulk: 32,

      save: 51,
      submit: 52,
      history: 53,
      archive: 54,
      draft: 55,
      custom: 100, // custom action start from custom
    },
    actionMeta: {
      create: {
        title: 'Create',
        actionComponent: 'action',
        bulk: true,
        select: false,
        icon: { material: 'add' },
      },
      read: {
        title: 'View',
        actionPath: '/a/basefront/atom/item?mode=view&atomId={{atomId}}&itemId={{itemId}}',
        enableOnStatic: true,
        icon: { material: 'visibility' },
      },
      write: {
        title: 'Edit',
        actionComponent: 'action',
        enableOnStatic: false,
        icon: { material: 'edit' },
      },
      delete: {
        title: 'Delete',
        actionComponent: 'action',
        enableOnStatic: false,
        icon: { material: 'delete' },
      },
      clone: {
        title: 'Clone',
        actionComponent: 'action',
        enableOnStatic: true,
        icon: { material: 'content_copy' },
      },
      deleteBulk: {
        title: 'Delete',
        actionComponent: 'actionBulk',
        bulk: true,
        select: true,
        icon: { material: 'delete' },
      },
      exportBulk: {
        title: 'Export',
        actionComponent: 'actionBulk',
        bulk: true,
        select: null,
        icon: { material: 'cloud_download' },
      },
      save: {
        title: 'Save',
        actionComponent: 'action',
        authorize: false,
        icon: { material: 'save' },
      },
      submit: {
        title: 'Submit',
        actionComponent: 'action',
        authorize: false,
        icon: { material: 'done' },
      },
      history: {
        title: 'History',
        actionComponent: 'action',
        authorize: false,
        icon: { material: 'change_history' },
      },
      archive: {
        title: 'Archive',
        actionComponent: 'action',
        authorize: false,
        icon: { material: 'all_inbox' },
      },
      draft: {
        title: 'Draft',
        actionComponent: 'action',
        authorize: false,
        icon: { material: 'content_paste' },
      },
      custom: {
        title: 'Custom',
      },
    },
  },
  function: {
    scene: {
      // default: 0,
      create: 1,
      list: 2,
      // report: 20,
      tools: 50,
      // custom: 100,
    },
  },
};
