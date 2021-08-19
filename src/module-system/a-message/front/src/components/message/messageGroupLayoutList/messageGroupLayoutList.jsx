export default {
  meta: {
    global: false,
  },
  props: {
    layoutManager: {
      type: Object,
    },
    layoutConfig: {
      type: Object,
    },
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    // eslint-disable-next-line
    this.layoutManager.layout.instance = this;
    this.onLoad();
  },
  beforeDestroy() {
    if (this.layoutManager.layout.instance === this) {
      // eslint-disable-next-line
      this.layoutManager.layout.instance = null;
    }
  },
  methods: {
    async onLoad() {
      // params
      const params = this.layoutManager.base_prepareSelectParams();
      // fetch
      this.items = await this.$api.post('/a/message/message/group', params);
    },
    getItems() {
      return this.items;
    },
  },
  render() {
    return <div>{this.layoutManager.layout_renderBlock({ blockName: 'items' })}</div>;
  },
};
