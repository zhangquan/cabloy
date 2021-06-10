(()=>{var t={170:(t,e,n)=>{"use strict";function a(t,e,n,a,r,o,i){try{var s=t[o](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(a,r)}n.d(e,{Z:()=>c});const r={meta:{global:!1,disable:function(t){return(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.ctx,t.state,e.abrupt("return",!1);case 2:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function s(t){a(i,r,o,s,c,"next",t)}function c(t){a(i,r,o,s,c,"throw",t)}s(void 0)}))})();var e},login:function(t){var e=t.ctx,n=t.state,a=t.hash;"associate"===n&&e.$meta.vueApp.toLogin({url:"/a/authsms/signup",state:n,hash:a})}},props:{state:{type:String}},data:function(){return{data:{mobile:null,rememberMe:!1},captcha:{token:null}}},computed:{captchaContainerOptions:function(){return{props:{module:"a-authsms",sceneName:"signin",context:{mobile:this.data.mobile}}}}},created:function(){},methods:{onPerformValidate:function(){var t=this;return this.$api.post("auth/signin",{data:this.data,state:this.state,captcha:this.$refs.captchaContainer.getComponentInstance().captchaData({token:this.captcha.token})}).then((function(){t.$meta.vueApp.reload({echo:!0})}))},signIn:function(){return this.$refs.validate.perform()},onSubmit:function(){this.$refs.buttonSubmit.onClick()}}};n(676);var o=n(792);const i=(0,o.Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("f7-card",[n("f7-card-content",[n("eb-validate",{ref:"validate",attrs:{onPerform:t.onPerformValidate}},[n("eb-list",{attrs:{form:"","no-hairlines-md":""},on:{submit:t.onSubmit}},[n("eb-list-input",{attrs:{label:t.$text("Phone Number"),"floating-label":"",type:"text","clear-button":"",placeholder:t.$text("Phone Number"),dataPath:"mobile"},model:{value:t.data.mobile,callback:function(e){t.$set(t.data,"mobile",e)},expression:"data.mobile"}},[n("f7-icon",{attrs:{slot:"media",material:"call"},slot:"media"})],1),t._v(" "),n("eb-list-input",{attrs:{label:t.$text("SMS Verification Code"),"floating-label":"",type:"text","clear-button":"",placeholder:t.$text("SMS Verification Code"),dataPath:"captcha/token"},model:{value:t.captcha.token,callback:function(e){t.$set(t.captcha,"token",e)},expression:"captcha.token"}},[n("f7-icon",{attrs:{slot:"media"},slot:"media"}),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[n("eb-component",{ref:"captchaContainer",attrs:{module:"a-captcha",name:"captchaContainer",options:t.captchaContainerOptions}})],1)],1),t._v(" "),n("f7-list-item",{attrs:{title:t.$text("Remember Me")}},[n("f7-icon",{attrs:{slot:"media"},slot:"media"}),t._v(" "),n("eb-toggle",{attrs:{slot:"after",dataPath:"rememberMe"},slot:"after",model:{value:t.data.rememberMe,callback:function(e){t.$set(t.data,"rememberMe",e)},expression:"data.rememberMe"}})],1),t._v(" "),n("eb-list-button",{ref:"buttonSubmit",attrs:{onPerform:t.signIn}},[t._v(t._s(t.$text("Sign In")))])],1)],1)],1),t._v(" "),n("f7-card-footer",[n("div"),t._v(" "),n("eb-link",{staticClass:"text-smaller",attrs:{"eb-href":"/a/authsms/signup","eb-target":"_self"}},[t._v(t._s(t.$text("Sign Up")))])],1)],1)],1)}),[],!1,null,"67474e91",null).exports,s={meta:{global:!1},props:{module:{type:String},sceneName:{type:String},context:{type:Object},providerInstance:{type:Object}},data:function(){return{sendTimer:0,sendTimerCounter:0}},computed:{buttonDisabled:function(){return!!this.sendTimer||!this.context.mobile}},created:function(){},methods:{onPerformSend:function(){var t=this;if(!this.sendTimer)return this.$api.post("captcha/sendCode",{providerInstanceId:this.providerInstance.providerInstanceId,context:this.context}).then((function(){t._setTimer(!0)}))},getSendText:function(){return this.sendTimer?this.$text("Resend in %ds",this.sendTimerCounter):this.$text("Send Code")},_setTimer:function(t){var e=this;t?(this._setTimer(!1),this.sendTimerCounter=this.$config.sendCode.counter,this.sendTimer=window.setInterval((function(){0==--e.sendTimerCounter&&e._setTimer(!1)}),1e3)):this.sendTimer&&(window.clearInterval(this.sendTimer),this.sendTimer=0)}}};n(581);const c={signin:i,captcha:(0,o.Z)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("eb-button",{staticClass:"captcha",attrs:{disabled:t.buttonDisabled,onPerform:t.onPerformSend}},[t._v(t._s(t.getSendText()))])}),[],!1,null,"3cf50a24",null).exports}},788:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a={sendCode:{counter:3}}},978:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a={"Captcha Code":"验证码","Mobile Verification":"手机号认证","Phone Number":"电话号码","SMS Verification":"短信认证","SMS Verification Code":"短信认证码","Remember Me":"记住我","Sign In":"登录","Sign Up":"注册","Send Code":"发送认证码","Resend in %ds":"重新发送(%ds)","Verify Now":"现在认证","Associate Account":"关联账户","Associate Now":"现在关联"}},137:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a={"zh-cn":n(978).Z}},644:(t,e,n)=>{"use strict";function a(t){return n(142)("./".concat(t,".vue")).default}n.d(e,{Z:()=>r});const r=[{path:"signup",component:a("signup")},{path:"mobileVerify",component:a("mobileVerify")}]},81:(t,e,n)=>{"use strict";function a(t){return{state:{},getters:{},mutations:{},actions:{}}}n.d(e,{Z:()=>a})},891:(t,e,n)=>{var a=n(233),r=n(361)(a);r.push([t.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.exports=r},455:(t,e,n)=>{var a=n(233),r=n(361)(a);r.push([t.id,".text-smaller[data-v-67474e91] {\n  font-size: smaller !important;\n}\n","",{version:3,sources:["webpack://./front/src/components/signin.vue","webpack://./signin.vue"],names:[],mappings:"AA+FA;EACE,6BAAA;AC9FF",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.text-smaller {\n  font-size: smaller !important;\n}\n\n",".text-smaller {\n  font-size: smaller !important;\n}\n"],sourceRoot:""}]),t.exports=r},415:(t,e,n)=>{var a=n(233),r=n(361)(a);r.push([t.id,"\n.captcha[data-v-3cf50a24] {\n  white-space: nowrap;\n}\n\n","",{version:3,sources:["webpack://./front/src/components/captcha.vue"],names:[],mappings:";AAoEA;EACA,mBAAA;AACA",sourcesContent:["<template>\n  <eb-button class=\"captcha\" :disabled=\"buttonDisabled\" :onPerform=\"onPerformSend\">{{getSendText()}}</eb-button>\n</template>\n<script>\nexport default {\n  meta: {\n    global: false,\n  },\n  props: {\n    module: {\n      type: String,\n    },\n    sceneName: {\n      type: String,\n    },\n    context: {\n      type: Object,\n    },\n    providerInstance: {\n      type: Object,\n    },\n  },\n  data() {\n    return {\n      sendTimer: 0,\n      sendTimerCounter: 0,\n    };\n  },\n  computed: {\n    buttonDisabled() {\n      return !!this.sendTimer || !this.context.mobile;\n    },\n  },\n  created() {},\n  methods: {\n    onPerformSend() {\n      if (this.sendTimer) return;\n      return this.$api.post('captcha/sendCode', {\n        providerInstanceId: this.providerInstance.providerInstanceId,\n        context: this.context,\n      }).then(() => {\n        this._setTimer(true);\n      });\n    },\n    getSendText() {\n      return this.sendTimer ? this.$text('Resend in %ds', this.sendTimerCounter) : this.$text('Send Code');\n    },\n    _setTimer(_set) {\n      if (_set) {\n        this._setTimer(false);\n        this.sendTimerCounter = this.$config.sendCode.counter;\n        this.sendTimer = window.setInterval(() => {\n          if (--this.sendTimerCounter === 0) {\n            this._setTimer(false);\n          }\n        }, 1000);\n      } else {\n        if (this.sendTimer) {\n          window.clearInterval(this.sendTimer);\n          this.sendTimer = 0;\n        }\n      }\n    },\n  },\n};\n\n<\/script>\n<style scoped>\n.captcha {\n  white-space: nowrap;\n}\n\n</style>\n"],sourceRoot:""}]),t.exports=r},361:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,a){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(a)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);a&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},233:t=>{"use strict";function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}t.exports=function(t){var n,a,r=(a=4,function(t){if(Array.isArray(t))return t}(n=t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,r=!1,o=void 0;try{for(var i,s=t[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!e||n.length!==e);a=!0);}catch(t){r=!0,o=t}finally{try{a||null==s.return||s.return()}finally{if(r)throw o}}return n}}(n,a)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?e(t,n):void 0}}(n,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[1],i=r[3];if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),l="/*# ".concat(c," */"),u=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[o].concat(u).concat([l]).join("\n")}return[o].join("\n")}},761:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});const a=(0,n(792).Z)({data:function(){return{data:null,captcha:{token:null}}},computed:{captchaContainerOptions:function(){return{props:{module:"a-authsms",sceneName:"mobileVerify",context:{mobile:this.data.mobile}}}}},created:function(){var t=this.$store.state.auth.user.agent;this.data={userName:t.userName,email:t.email}},methods:{onPerformValidate:function(){var t=this;return this.$api.post("auth/mobileVerify",{data:this.data,captcha:this.$refs.captchaContainer.getComponentInstance().captchaData({token:this.captcha.token})}).then((function(){t.$meta.vueApp.reload({echo:!0})}))},onPerformOk:function(){return this.$refs.validate.perform()},onSubmit:function(){this.$refs.buttonSubmit.onClick()}}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("eb-page",[n("eb-navbar",{attrs:{large:"",largeTransparent:"",title:t.$text("Mobile Verification"),"eb-back-link":"Back"}}),t._v(" "),n("f7-block",[n("eb-validate",{ref:"validate",attrs:{auto:!1,data:t.data,params:{validator:"mobileVerify"},onPerform:t.onPerformValidate}},[n("eb-list",{attrs:{form:"","inline-labels":"","no-hairlines-md":""},on:{submit:t.onSubmit}},[n("eb-list-item-validate",{attrs:{dataKey:"userName"}}),t._v(" "),n("eb-list-item-validate",{attrs:{dataKey:"mobile"}}),t._v(" "),n("eb-list-input",{attrs:{label:t.$text("SMS Verification Code"),type:"text","clear-button":"",placeholder:t.$text("SMS Verification Code"),dataPath:"captcha/token"},model:{value:t.captcha.token,callback:function(e){t.$set(t.captcha,"token",e)},expression:"captcha.token"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("eb-component",{ref:"captchaContainer",attrs:{module:"a-captcha",name:"captchaContainer",options:t.captchaContainerOptions}})],1)]),t._v(" "),n("f7-list-item",{attrs:{divider:""}},[n("eb-button",{ref:"buttonSubmit",attrs:{onPerform:t.onPerformOk}},[t._v(t._s(t.$text("Verify Now")))])],1)],1)],1)],1)],1)}),[],!1,null,"8574467e",null).exports},83:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});const a=(0,n(792).Z)({meta:{global:!1},data:function(){return{state:this.$f7route.query.state||"login",returnTo:this.$f7route.query.returnTo,data:{userName:null,realName:null,mobile:null},captcha:{tokenCode:null,token:null},captchaContainerOptionsCode:{props:{module:"a-authsms",sceneName:"signupCode"}},userNameReadOnly:!1}},computed:{captchaContainerOptions:function(){return{props:{module:"a-authsms",sceneName:"signup",context:{mobile:this.data.mobile}}}}},created:function(){if("associate"===this.state){var t=this.$store.state.auth.user.agent;this.data.userName=t.userName,this.data.realName=t.realName,this.data.mobile=t.mobile,this.data.userName&&-1===this.data.userName.indexOf("__")&&(this.userNameReadOnly=!0)}},methods:{getPageTitle:function(){return"associate"===this.state?this.$text("Associate Account"):this.$text("Sign Up")},getButtonText:function(){return"associate"===this.state?this.$text("Associate Now"):this.$text("Sign Up")},onSchemaReady:function(t){this.userNameReadOnly&&(t.properties.userName.ebReadOnly=!0)},onPerformValidate:function(){var t=this;return this.$api.post("auth/signup",{state:this.state,data:this.data,captchaCode:this.$refs.captchaContainerCode.getComponentInstance().captchaData({token:this.captcha.tokenCode}),captcha:this.$refs.captchaContainer.getComponentInstance().captchaData({token:this.captcha.token})}).then((function(){var e;t.returnTo&&(e=t.$meta.util.parseHash(t.returnTo)),t.$meta.vueApp.reload({echo:!0,hash:e})}))},signUp:function(){return this.$refs.validate.perform()},onSubmit:function(){this.$refs.buttonSubmit.onClick()}}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("eb-page",[n("eb-navbar",{attrs:{large:"",largeTransparent:"",title:t.getPageTitle(),"eb-back-link":"Back"}}),t._v(" "),n("f7-block",[n("eb-validate",{ref:"validate",attrs:{auto:!1,data:t.data,params:{validator:"signup"},onPerform:t.onPerformValidate},on:{"schema:ready":t.onSchemaReady}},[n("eb-list",{attrs:{form:"","inline-labels":"","no-hairlines-md":""},on:{submit:t.onSubmit}},[n("eb-list-item-validate",{attrs:{dataKey:"userName"}}),t._v(" "),n("eb-list-item-validate",{attrs:{dataKey:"realName"}}),t._v(" "),n("eb-list-item-validate",{attrs:{dataKey:"mobile"}}),t._v(" "),n("eb-list-input",{attrs:{label:t.$text("Captcha Code"),type:"text","clear-button":"",placeholder:t.$text("Captcha Code"),dataPath:"captcha/tokenCode"},model:{value:t.captcha.tokenCode,callback:function(e){t.$set(t.captcha,"tokenCode",e)},expression:"captcha.tokenCode"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("eb-component",{ref:"captchaContainerCode",attrs:{module:"a-captcha",name:"captchaContainer",options:t.captchaContainerOptionsCode}})],1)]),t._v(" "),n("eb-list-input",{attrs:{label:t.$text("SMS Verification Code"),type:"text","clear-button":"",placeholder:t.$text("SMS Verification Code"),dataPath:"captcha/token"},model:{value:t.captcha.token,callback:function(e){t.$set(t.captcha,"token",e)},expression:"captcha.token"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("eb-component",{ref:"captchaContainer",attrs:{module:"a-captcha",name:"captchaContainer",options:t.captchaContainerOptions}})],1)]),t._v(" "),n("f7-list-item",{attrs:{divider:""}},[n("eb-button",{ref:"buttonSubmit",attrs:{onPerform:t.signUp}},[t._v(t._s(t.getButtonText()))])],1)],1)],1)],1)],1)}),[],!1,null,"fa725b7a",null).exports},792:(t,e,n)=>{"use strict";function a(t,e,n,a,r,o,i,s){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),a&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):r&&(c=s?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}n.d(e,{Z:()=>a})},824:(t,e,n)=>{var a=n(891);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),(0,n(159).Z)("1226f043",a,!0,{})},676:(t,e,n)=>{var a=n(455);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),(0,n(159).Z)("1533e8b4",a,!0,{})},581:(t,e,n)=>{var a=n(415);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),(0,n(159).Z)("59b0aa0a",a,!0,{})},159:(t,e,n)=>{"use strict";function a(t,e){for(var n=[],a={},r=0;r<e.length;r++){var o=e[r],i=o[0],s={id:t+":"+r,css:o[1],media:o[2],sourceMap:o[3]};a[i]?a[i].parts.push(s):n.push(a[i]={id:i,parts:[s]})}return n}n.d(e,{Z:()=>f});var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},i=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,l=!1,u=function(){},d=null,p="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(t,e,n,r){l=n,d=r||{};var i=a(t,e);return h(i),function(e){for(var n=[],r=0;r<i.length;r++){var s=i[r];(c=o[s.id]).refs--,n.push(c)}for(e?h(i=a(t,e)):i=[],r=0;r<n.length;r++){var c;if(0===(c=n[r]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete o[c.id]}}}}function h(t){for(var e=0;e<t.length;e++){var n=t[e],a=o[n.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](n.parts[r]);for(;r<n.parts.length;r++)a.parts.push(v(n.parts[r]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{var i=[];for(r=0;r<n.parts.length;r++)i.push(v(n.parts[r]));o[n.id]={id:n.id,refs:1,parts:i}}}}function b(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function v(t){var e,n,a=document.querySelector("style["+p+'~="'+t.id+'"]');if(a){if(l)return u;a.parentNode.removeChild(a)}if(m){var r=c++;a=s||(s=b()),e=y.bind(null,a,r,!1),n=y.bind(null,a,r,!0)}else a=b(),e=x.bind(null,a),n=function(){a.parentNode.removeChild(a)};return e(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;e(t=a)}else n()}}var g,C=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function y(t,e,n,a){var r=n?"":a.css;if(t.styleSheet)t.styleSheet.cssText=C(e,r);else{var o=document.createTextNode(r),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}function x(t,e){var n=e.css,a=e.media,r=e.sourceMap;if(a&&t.setAttribute("media",a),d.ssrId&&t.setAttribute(p,e.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},142:(t,e,n)=>{var a={"./mobileVerify.vue":761,"./signup.vue":83};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id=142}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={id:a,exports:{}};return t[a](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var a={};(()=>{"use strict";var t;n.r(a),n.d(a,{default:()=>e}),n(824);const e={install:function(e,a){return t?console.error("already installed."):(t=e,a({routes:n(644).Z,store:n(81).Z(t),config:n(788).Z,locales:n(137).Z,components:n(170).Z}))}}})(),window["a-authsms"]=a})();
//# sourceMappingURL=front.js.map