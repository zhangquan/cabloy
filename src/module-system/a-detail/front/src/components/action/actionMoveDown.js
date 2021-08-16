export default {
  methods: {
    async _onActionMoveDown() {
      const { ctx, action } = this.$props;
      const result = await ctx.$api.post('/a/detail/detail/moveDown', {
        flowTaskId: this.flowTaskId,
        key: this.detailKey,
      });
      ctx.$meta.eventHub.$emit('detail:action', {
        atomKey: this.atomKey,
        detailClass: this.detailClass,
        key: this.detailKey,
        action,
        result,
      });
    },
  },
};
