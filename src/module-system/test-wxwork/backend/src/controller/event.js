module.exports = app => {
  class EventController extends app.Controller {

    async wxworkMessage() {
      const res = await this.service.event.wxworkMessage({
        event: this.ctx.request.body.event,
        data: this.ctx.request.body.data,
      });
      this.ctx.success(res);
    }

  }
  return EventController;
};
