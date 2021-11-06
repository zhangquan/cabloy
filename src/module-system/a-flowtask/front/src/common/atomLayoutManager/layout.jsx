export default {
  data() {
    return {
      layout: {
        current: null,
        config: null,
        instance: null,
      },
    };
  },
  created() {},
  methods: {
    layout_setInstance(instance) {
      this.layout.instance = instance;
    },
    layout_clearInstance(instance) {
      if (this.layout.instance === instance) {
        this.layout.instance = null;
      }
    },
    async layout_prepareConfig() {
      // configAtomBase
      this.base.configAtomBase = this.$meta.config.modules['a-flowtask'].flowTask;
      // configAtom
      const atomClass = this.base_atomClass;
      if (atomClass) {
        // load module
        await this.$meta.module.use(atomClass.module);
        this.base.configAtom = this.$meta.util.getProperty(
          this.$meta.config.modules[atomClass.module],
          `flowTasks.${atomClass.atomClassName}`
        );
      }
      // config
      this.base.config = this.base.configAtom
        ? this.$meta.util.extend({}, this.base.configAtomBase, this.base.configAtom)
        : this.base.configAtomBase;
      // prepareConfigLayout
      this.layout_prepareConfigLayout();
    },
    layout_getDefault() {
      const layoutConfigKeyCurrent = this.base_getLayoutConfigKeyCurrent();
      const configCurrent = this.base.layoutConfig[layoutConfigKeyCurrent];
      if (configCurrent) return configCurrent;
      // from config
      const configViewSize = this.$meta.util.getProperty(this.base.config, 'render.atom.info.layout.viewSize');
      let layouts = configViewSize[this.container.mode][this.$view.size];
      if (!Array.isArray(layouts)) {
        layouts = [layouts];
      }
      return layouts[0].name;
    },
    layout_prepareConfigLayout(layoutCurrent) {
      // current
      this.layout.current = layoutCurrent || this.container.layout || this.layout_getDefault();
      // layoutConfig
      let config = this.$meta.util.getProperty(this.base.config, `render.atom.layouts.${this.layout.current}`);
      if (!config) {
        config = this.$meta.util.getProperty(this.base.config, 'render.atom.layouts.default');
      }
      if (!config) return false;
      const configBase = this.$meta.util.getProperty(this.base.config, 'render.atom.layouts.base');
      this.layout.config = configBase ? this.$meta.util.extend({}, configBase, config) : config;
      return true;
    },
    async layout_switchLayout(layoutCurrent) {
      if (layoutCurrent === this.layout.current) return true;
      // force clear status
      this.layout.current = null;
      this.layout.config = null;
      // this.layout.instance = null;
      // prepare
      if (!this.layout_prepareConfigLayout(layoutCurrent)) {
        return false;
      }
      // save
      const layoutConfigKeyCurrent = this.base_getLayoutConfigKeyCurrent();
      this.$store.commit('a/base/setLayoutConfigKey', {
        module: 'a-basefront',
        key: layoutConfigKeyCurrent,
        value: layoutCurrent,
      });
      return true;
    },
    layout_getComponentOptions() {
      return {
        props: {
          layoutManager: this,
          layoutConfig: this.layout.config,
        },
      };
    },
    layout_renderComponent() {
      if (!this.base.ready) return null;
      return (
        <eb-component
          module={this.layout.config.component.module}
          name={this.layout.config.component.name}
          options={this.layout_getComponentOptions()}
        ></eb-component>
      );
    },
    layout_getBlockComponentOptions({ blockConfig }) {
      return {
        props: {
          layoutManager: this,
          layout: this.layout.instance,
          blockConfig,
        },
      };
    },
    layout_renderBlock({ blockName }) {
      if (!this.base.ready) return null;
      if (!this.layout.instance) return null;
      const blockConfig = this.layout.config.blocks[blockName];
      if (!blockConfig) return null;
      return (
        <eb-component
          module={blockConfig.component.module}
          name={blockConfig.component.name}
          options={this.layout_getBlockComponentOptions({ blockConfig })}
        ></eb-component>
      );
    },
    layout_renderLayout() {
      return <div>{this.layout_renderComponent()}</div>;
    },
  },
};
