// export
export default {
  installFactory,
};

// installFactory
function installFactory(_Vue) {
  const Vue = _Vue;
  const ebLayoutButtonBase = Vue.prototype.$meta.module.get('a-layoutmobile').options.mixins.ebLayoutButtonBase;
  return {
    mixins: [ebLayoutButtonBase],
    data() {
      return {};
    },
    created() {
      this.$meta.eventHub.$on('appHome:open', this.onAppHomeOpen);
    },
    beforeDestroy() {
      this.$meta.eventHub.$off('appHome:open', this.onAppHomeOpen);
    },
    mounted() {
      this.openAppMenu();
    },
    methods: {
      onAppHomeOpen() {
        this.onPerform();
      },
      onPerform() {
        this.onPerformClick();
      },
      openAppMenu() {
        const view = this.getView();
        this.$meta.vueLayout.app_openHome({ view });
      },
    },
  };
}