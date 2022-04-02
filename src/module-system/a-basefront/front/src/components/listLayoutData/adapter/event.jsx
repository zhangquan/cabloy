export default {
  created() {
    this.$meta.eventHub.$on('atom:action', this.event_onActionChanged);
    this.$meta.eventHub.$on('atom:actions', this.event_onActionsChanged);
  },
  beforeDestroy() {
    this.$meta.eventHub.$off('atom:action', this.event_onActionChanged);
    this.$meta.eventHub.$off('atom:actions', this.event_onActionsChanged);
  },
  methods: {
    async event_onActionChanged(data) {
      const key = data.key;
      const action = data.action;
      // create
      if (action.name === 'create') {
        // params
        const params = this.layoutManager.base_prepareSelectParams({ setOrder: false });
        const paramsAtomClass = params.atomClass;
        const paramsStage = params.options.stage;
        // atom
        const atom = data.atom;
        // check stage
        if (this.layoutManager.base_stageToString(atom.atomStage) !== paramsStage) {
          // do nothing
          return;
        }
        // check atomClass
        if (
          paramsAtomClass &&
          (paramsAtomClass.module !== atom.module || paramsAtomClass.atomClassName !== atom.atomClassName)
        ) {
          // do nothing
          return;
        }
        // refresh list
        await this._loopProviders(async provider => {
          this._callMethodProvider(provider, 'onPageRefresh');
        });
        // ok
        return;
      }
      // loop
      await this._loopProviders(async provider => {
        // findItem
        const { items, index, item } = this.findItemProvier(provider, key.atomId);
        if (!item && index === -1) return;
        if (action.name === 'delete') {
          this._callMethodProvider(provider, 'spliceItem', { items, index, item });
          return;
        }
        // other actions
        // fetch new atom
        const options = this.layoutManager.base_prepareReadOptions();
        const atomNew = await this.$api.post('/a/base/atom/read', {
          key,
          options,
        });
        this._callMethodProvider(provider, 'replaceItem', { items, index, item }, atomNew);
      });
    },
    async event_onActionsChanged(data) {
      const key = data.key;
      // loop
      await this._loopProviders(async provider => {
        // findItem
        const { items, index, item } = this._callMethodProvider(provider, 'findItem', key.atomId);
        if (!item && index === -1) return;
        if (item) {
          this.$set(item, '_actions', null);
        } else {
          this.$set(items[index], '_actions', null);
        }
      });
    },
  },
};
