import Vue from 'vue';

let ioc;
if (process.env.NODE_ENV === 'production') {
  ioc = require('socket.io-client/dist/socket.io.js');
} else {
  ioc = require('socket.io-client');
}

export default {
  _io: null,
  initialize(io) {
    this._io = io;
    // auth:login
    Vue.prototype.$meta.eventHub.$on('auth:login', () => {
      // reset
      this._io.reset();
    });
    // visibilitychange
    Vue.prototype.$meta.util.visibilityChange.$on('visibilityChange', visibilityState => {
      if (visibilityState) {
        const user = Vue.prototype.$meta.store.state.auth.user.op;
        if (!user.anonymous) {
          this._io.connect();
        }
      } else {
        this._io.disconnect();
      }
    });
    // reset
    this._io.reset();
  },
  subscribe({ subscribes, socketId }) {
    return Vue.prototype.$meta.api.post('/a/socketio/subscribe', { subscribes, socketId });
  },
  unsubscribe({ subscribes }) {
    return Vue.prototype.$meta.api.post('/a/socketio/unsubscribe', { subscribes });
  },
  socket() {
    // url
    const url = Vue.prototype.$meta.config.api.baseURL || location.origin;
    // opts
    const opts = {
      autoConnect: false,
      withCredentials: true,
      transports: ['websocket'],
    };
    // scene
    opts.query = {
      'x-scene': Vue.prototype.$meta.config.scene,
    };
    // clientId
    const clientId = Vue.prototype.$meta.store.state.auth.clientId;
    if (clientId) {
      opts.query['x-clientid'] = clientId;
    }
    // jwt
    if (Vue.prototype.$meta.config.base.jwt) {
      opts.query['eb-jwt'] = Vue.prototype.$meta.util.getJwtAuthorization();
    }
    return ioc(url, opts);
  },
  user() {
    return Vue.prototype.$meta.store.state.auth.user;
  },
  logout() {
    // login
    Vue.prototype.$meta.vueApp.reload({ echo: true });
  },
};
