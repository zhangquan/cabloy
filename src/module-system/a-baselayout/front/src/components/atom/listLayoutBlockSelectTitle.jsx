export default {
  meta: {
    global: false,
  },
  props: {
    layoutManager: {
      type: Object,
    },
    blockConfig: {
      type: Object,
    },
  },
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
    onPerformAdd() {
      // params
      const selectedAtoms = this.layoutManager.select_getSelectedAtoms();
      const params = {
        selectMode: this.layoutManager.container.params.selectMode,
        selectedAtoms,
      };
      const url = '/a/base/atom/selecting';
      this.$view.navigate(url, {
        target: '_self',
        context: {
          params: {
            atomClass: this.layoutManager.container.atomClass,
            options: this.layoutManager.container.options,
            params,
          },
          callback: (code, selectedAtoms) => {
            if (code === 200) {
              this.layoutManager.container.params.selectedAtomIds = selectedAtoms.map(item => item.atomId);
              this.layoutManager.page_onRefresh();
            }
          },
        },
      });
    },
    onPerformDone() {
      // selectedAtoms
      const selectedAtoms = this.getSelectedAtoms();
      // ok
      this.layoutManager.contextCallback(200, selectedAtoms);
      this.$f7router.back();
    },
    getSelectedAtoms() {
      const selectedAtoms = this.layoutManager.select_getSelectedAtoms();
      let res;
      if (this.layoutManager.container.params.selectMode === 'single') {
        res = (selectedAtoms && selectedAtoms.length > 0) ? selectedAtoms[0] : null;
      } else {
        res = (selectedAtoms && selectedAtoms.length > 0) ? selectedAtoms : null;
      }
      return res;
    },
  },
  render() {
    return (
      <f7-nav-right>
        <eb-link iconMaterial="add" propsOnPerform={this.onPerformAdd}></eb-link>
        <eb-link iconMaterial="done" propsOnPerform={this.onPerformDone}></eb-link>
      </f7-nav-right>
    );
  },
};
