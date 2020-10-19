import Vue from 'vue';
const ebPageContext = Vue.prototype.$meta.module.get('a-components').options.mixins.ebPageContext;
export default {
  mixins: [ ebPageContext ],
  data() {
    return {
      immediate: true,
    };
  },
  computed: {
    pageTitle() {
      return this.$text('Filter');
    },
    filterComponentInstance() {
      return this.$refs.filter && this.$refs.filter.getComponentInstance();
    },
  },
  methods: {
    onPerformSearch() {
      this.filterComponentInstance && this.filterComponentInstance.onPerformSearch();
    },
    _getFilterComponentOptions() {
      return {
        props: {
          layoutManager: this.contextParams.layoutManager,
          filterConfig: this.contextParams.filterConfig,
          filterContainer: this,
        },
      };
    },
    _renderNavbar() {
      const immediate = this.contextParams ? this.contextParams.immediate : true;
      return (
        <eb-navbar title={this.pageTitle} eb-back-link="Back">
          <f7-nav-right>
            {!immediate && <eb-link ref="buttonSubmit" iconMaterial="search" propsOnPerform={this.onPerformSearch}></eb-link>}
          </f7-nav-right>
        </eb-navbar>
      );
    },
  },
  render() {
    let domComponent;
    if (this.contextParams) {
      const filterConfig = this.contextParams.filterConfig;
      domComponent = (
        <eb-component ref="filter" module={filterConfig.component.module} name={filterConfig.component.name} options={this._getFilterComponentOptions()}></eb-component>
      );
    }
    return (
      <eb-page>
        {this._renderNavbar()}
        {domComponent}
      </eb-page>
    );
  },
};
