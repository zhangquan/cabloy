module.exports = app => {
  class AuthController extends app.Controller {
    async signin() {
      // data: { mobile, rememberMe }
      const data = this.ctx.request.body.data;
      const state = this.ctx.request.body.state;
      const res = await this.service.auth.signin({ data, state });
      this.ctx.success(res);
    }

    async signup() {
      const { userName, realName, mobile } = this.ctx.request.body.data;
      const state = this.ctx.request.body.state;
      const res = await this.service.auth.signup({
        user: this.ctx.state.user.agent,
        state,
        userName,
        realName,
        mobile,
      });
      this.ctx.success(res);
    }

    async mobileVerify() {
      const { mobile } = this.ctx.request.body.data;
      const res = await this.service.auth.mobileVerify({
        user: this.ctx.state.user.agent,
        mobile,
      });
      this.ctx.success(res);
    }
  }
  return AuthController;
};
