module.exports = app => {
  class SceneController extends app.Controller {
    async list() {
      // check demo
      this.ctx.bean.util.checkDemo();
      const res = await this.ctx.service.scene.list();
      this.ctx.success(res);
    }

    async save() {
      // check demo
      this.ctx.bean.util.checkDemo();
      // adjust
      const data = this.ctx.request.body.data;
      const data2 = {
        title: data.transport.title,
        transport: {
          ...data.transport,
          auth: data.auth,
          logger: data.extra.logger,
          debug: data.extra.debug,
        },
        defaults: data.defaults,
      };
      delete data2.transport.title;
      // save
      await this.service.scene.save({
        sceneName: this.ctx.request.body.sceneName,
        data: data2,
      });
      // ok
      data2.titleLocale = this.ctx.text(data2.title);
      this.ctx.success(data2);
    }

    async delete() {
      // check demo
      this.ctx.bean.util.checkDemo();
      const res = await this.service.scene.delete({
        sceneName: this.ctx.request.body.sceneName,
      });
      this.ctx.success(res);
    }

    async add() {
      // check demo
      this.ctx.bean.util.checkDemo();
      const res = await this.service.scene.add({
        sceneName: this.ctx.request.body.sceneName,
        data: this.ctx.request.body.data,
      });
      this.ctx.success(res);
    }
  }

  return SceneController;
};