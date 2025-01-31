export default {
  props: {
    stats_params: {
      type: Object,
    },
    stats_color: {
      type: String,
      default: 'gray',
    },
    stats_default: {},
  },
  data() {
    return {
      stats_io: null,
      stats_subscribeId: null,
    };
  },
  watch: {
    stats_params(valueNew, valueOld) {
      if (JSON.stringify(valueNew) === JSON.stringify(valueOld)) return;
      this.$nextTick(() => {
        this.stats_setValue(null);
        this.stats_init();
      });
    },
  },
  computed: {
    stats_user() {
      return this.$store.state.auth.user && this.$store.state.auth.user.op;
    },
  },
  created() {
    this.stats_init();
  },
  beforeDestroy() {
    // unsubscribe
    this.stats_unsubscribe();
  },
  methods: {
    async stats_init() {
      this.stats_unsubscribe();
      if (this.stats_user && !this.stats_user.anonymous && this.stats_params) {
        await this.stats_subscribe();
      }
    },
    async stats_loadValue() {
      const value = await this.$api.post(
        '/a/stats/stats/get',
        {
          module: this.stats_params.module,
          name: this.stats_params.name,
          nameSub: this.stats_params.nameSub,
        },
        { debounce: true }
      );
      if (value === undefined) {
        this.stats_setValue(this.stats_default);
      } else {
        this.stats_setValue(value);
      }
    },
    async stats_subscribe() {
      // io
      const action = {
        actionModule: 'a-socketio',
        actionComponent: 'io',
        name: 'instance',
      };
      this.stats_io = await this.$meta.util.performAction({ ctx: this, action });
      // socket io
      const subscribePath = this.stats_getSubscribePath();
      this.stats_subscribeId = this.stats_io.subscribe(subscribePath, this.stats_onMessage, this.stats_onSubscribed);
    },
    stats_unsubscribe() {
      if (this.stats_subscribeId) {
        this.stats_io.unsubscribe(this.stats_subscribeId);
        this.stats_io = null;
        this.stats_subscribeId = null;
      }
    },
    stats_onMessage({ message }) {
      const content = JSON.parse(message.content);
      this.stats_setValue(content.value);
    },
    stats_onSubscribed() {
      this.stats_loadValue();
    },
    stats_setValue(value) {
      this.stats_onChange(value);
    },
    stats_getFullName() {
      return this.stats_params.nameSub
        ? `${this.stats_params.name}.${this.stats_params.nameSub}`
        : this.stats_params.name;
    },
    stats_getSubscribePath() {
      const fullName = this.stats_getFullName();
      return `/a/stats/stats/${this.stats_params.module}/${fullName}`;
    },
  },
};
