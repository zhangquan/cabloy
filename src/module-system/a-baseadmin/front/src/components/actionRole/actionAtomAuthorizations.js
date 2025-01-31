export default {
  methods: {
    async _onActionAtomAuthorizations() {
      const { ctx, action, item } = this.$props;
      // atomAuthorizations
      // open
      const url = ctx.$meta.util.replaceTemplate(
        '/a/baseadmin/atomRight/edit?roleAtomId={{atomId}}&roleId={{itemId}}',
        item
      );
      let navigateOptions = action.navigateOptions;
      if (ctx.$pageRoute.path === '/a/basefront/atom/item') {
        navigateOptions = { target: '_self' };
      }
      ctx.$view.navigate(url, navigateOptions);
    },
  },
};
