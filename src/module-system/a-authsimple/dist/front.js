window["a-authsimple"]=function(t){var e={};function a(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=15)}([function(t,e,a){"use strict";function n(t,e,a,n,r,o,s,i){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=a,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=l):r&&(l=i?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:u}}a.d(e,"a",function(){return n})},function(t,e,a){var n=a(5);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(3).default)("7b1ee75e",n,!0,{})},function(t,e,a){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var a=function(t,e){var a=t[1]||"",n=t[3];if(!n)return a;if(e&&"function"==typeof btoa){var r=(s=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[a].concat(o).concat([r]).join("\n")}var s;return[a].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+a+"}":a}).join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(n[o]=!0)}for(r=0;r<t.length;r++){var s=t[r];null!=s[0]&&n[s[0]]||(a&&!s[2]?s[2]=a:a&&(s[2]="("+s[2]+") and ("+a+")"),e.push(s))}},e}},function(t,e,a){"use strict";function n(t,e){for(var a=[],n={},r=0;r<e.length;r++){var o=e[r],s=o[0],i={id:t+":"+r,css:o[1],media:o[2],sourceMap:o[3]};n[s]?n[s].parts.push(i):a.push(n[s]={id:s,parts:[i]})}return a}a.r(e),a.d(e,"default",function(){return p});var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},s=r&&(document.head||document.getElementsByTagName("head")[0]),i=null,l=0,u=!1,c=function(){},d=null,f="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,a,r){u=a,d=r||{};var s=n(t,e);return h(s),function(e){for(var a=[],r=0;r<s.length;r++){var i=s[r];(l=o[i.id]).refs--,a.push(l)}e?h(s=n(t,e)):s=[];for(r=0;r<a.length;r++){var l;if(0===(l=a[r]).refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete o[l.id]}}}}function h(t){for(var e=0;e<t.length;e++){var a=t[e],n=o[a.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](a.parts[r]);for(;r<a.parts.length;r++)n.parts.push(b(a.parts[r]));n.parts.length>a.parts.length&&(n.parts.length=a.parts.length)}else{var s=[];for(r=0;r<a.parts.length;r++)s.push(b(a.parts[r]));o[a.id]={id:a.id,refs:1,parts:s}}}}function v(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function b(t){var e,a,n=document.querySelector("style["+f+'~="'+t.id+'"]');if(n){if(u)return c;n.parentNode.removeChild(n)}if(m){var r=l++;n=i||(i=v()),e=w.bind(null,n,r,!1),a=w.bind(null,n,r,!0)}else n=v(),e=function(t,e){var a=e.css,n=e.media,r=e.sourceMap;n&&t.setAttribute("media",n);d.ssrId&&t.setAttribute(f,e.id);r&&(a+="\n/*# sourceURL="+r.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}.bind(null,n),a=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else a()}}var g,_=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function w(t,e,a,n){var r=a?"":n.css;if(t.styleSheet)t.styleSheet.cssText=_(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},function(t,e,a){"use strict";var n=a(1);a.n(n).a},function(t,e,a){(t.exports=a(2)(!0)).push([t.i,".text-smaller[data-v-c9ea7952] {\n  font-size: smaller !important;\n}\n","",{version:3,sources:["/Users/wind/Documents/data/cabloy/egg-born-demo/src/module/a-authsimple/front/src/components/signin.vue?vue&type=style&index=0&id=c9ea7952&lang=less&scoped=true&","signin.vue"],names:[],mappings:"AAkFA;EACE,6BAAA;ACjFF",file:"signin.vue?vue&type=style&index=0&id=c9ea7952&lang=less&scoped=true&",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.text-smaller {\n  font-size: smaller !important;\n}\n\n",".text-smaller {\n  font-size: smaller !important;\n}\n"]}])},function(t,e,a){var n=a(7);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(3).default)("76e1702c",n,!0,{})},function(t,e,a){(t.exports=a(2)(!0)).push([t.i,"\n","",{version:3,sources:[],names:[],mappings:"",file:"module.css"}])},function(t,e,a){"use strict";function n(t){return a(9)("./".concat(t,".vue")).default}a.r(e),e.default=[{path:"signup",component:n("signup")},{path:"passwordChange",component:n("passwordChange")},{path:"passwordForgot",component:n("passwordForgot")},{path:"passwordReset",component:n("passwordReset")},{path:"emailConfirm",component:n("emailConfirm")}]},function(t,e,a){var n={"./emailConfirm.vue":18,"./passwordChange.vue":17,"./passwordForgot.vue":16,"./passwordReset.vue":19,"./signup.vue":20};function r(t){var e=o(t);return a(e)}function o(t){var e=n[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}r.keys=function(){return Object.keys(n)},r.resolve=o,t.exports=r,r.id=9},function(t,e,a){"use strict";a.r(e),e.default=function(t){return{state:{},getters:{},mutations:{},actions:{}}}},function(t,e,a){"use strict";a.r(e),e.default={}},function(t,e,a){"use strict";a.r(e),e.default={"en-us":a(13).default,"zh-cn":a(14).default}},function(t,e,a){"use strict";a.r(e),e.default={emailConfirmSentAlert:"The confirmation link has been sent to your email address, but may take several minutes to show up in your inbox. Please wait at least 10 minutes before attempting another confirmation.",passwordResetEmailSentAlert:"Password reset email has been sent to your email address, but may take several minutes to show up in your inbox. Please wait at least 10 minutes before attempting another reset."}},function(t,e,a){"use strict";a.r(e),e.default={Continue:"继续","Forgot password":"忘记密码","Reset password":"重置密码","Sign up":"注册","Sign in":"登录","Your username/mobile/email":"您的用户名/手机号/邮箱","Your password":"您的密码","Remember me":"记住我",Username:"用户名",Realname:"真实姓名",Email:"电子邮箱",Mobile:"手机号",Password:"密码","Password again":"重复密码","Change password":"修改密码","Old password":"旧密码","New password":"新密码","New password again":"重复新密码",OK:"确定","Captcha code":"验证码","Email confirmation":"邮件确认","Send confirmation email":"发送确认邮件",emailConfirmSentAlert:"确认链接已经发送至您的邮箱地址，但可能需要几分钟出现在您的收件箱中。若要重发邮件，请至少等10分钟。",passwordResetEmailSentAlert:"密码重置邮件已经发送至您的邮箱地址，但可能需要几分钟出现在您的收件箱中。若要重发邮件，请至少等10分钟。"}},function(t,e,a){"use strict";a.r(e);var n,r={meta:{global:!1},data:function(){return{data:{auth:null,password:null,rememberMe:!1},captcha:{code:null},moduleCaptcha:null}},created:function(){var t=this;this.$meta.module.use("a-captcha",function(e){t.$options.components.captchaContainer=e.options.components.captchaContainer,t.moduleCaptcha=e})},methods:{onPerformValidate:function(){var t=this;return this.$api.post("auth/signin",{data:this.data,captcha:this.captcha}).then(function(){t.$meta.vueApp.reload({echo:!0})})},signIn:function(){return this.$refs.validate.perform()},onSubmit:function(){this.$refs.buttonSubmit.onClick()}}},o=(a(4),a(0)),s=Object(o.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("f7-card",[a("f7-card-content",[a("eb-validate",{ref:"validate",attrs:{onPerform:t.onPerformValidate}},[a("eb-list",{attrs:{form:"","no-hairlines-md":""},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("eb-list-input",{attrs:{label:t.$text("Your username/mobile/email"),"floating-label":"",type:"text","clear-button":"",placeholder:t.$text("Your username/mobile/email"),dataPath:"auth"},model:{value:t.data.auth,callback:function(e){t.$set(t.data,"auth",e)},expression:"data.auth"}},[a("f7-icon",{attrs:{slot:"media",material:"person_outline"},slot:"media"})],1),t._v(" "),a("eb-list-input",{attrs:{label:t.$text("Your password"),"floating-label":"",type:"password","clear-button":"",placeholder:t.$text("Your password"),dataPath:"password"},model:{value:t.data.password,callback:function(e){t.$set(t.data,"password",e)},expression:"data.password"}},[a("f7-icon",{attrs:{slot:"media",material:"lock_outline"},slot:"media"})],1),t._v(" "),a("f7-list-item",[a("f7-icon",{attrs:{slot:"media"},slot:"media"}),t._v(" "),t.moduleCaptcha?[a("captchaContainer")]:t._e()],2),t._v(" "),a("eb-list-input",{attrs:{label:t.$text("Captcha code"),"floating-label":"",type:"text","clear-button":"",placeholder:t.$text("Captcha code"),dataPath:"captcha/code"},model:{value:t.captcha.code,callback:function(e){t.$set(t.captcha,"code",e)},expression:"captcha.code"}},[a("f7-icon",{attrs:{slot:"media"},slot:"media"})],1),t._v(" "),a("f7-list-item",[a("f7-icon",{attrs:{slot:"media"},slot:"media"}),t._v(" "),a("span",{staticClass:"text-color-gray"},[t._v(t._s(t.$text("Remember me")))]),t._v(" "),a("eb-toggle",{attrs:{dataPath:"rememberMe"},model:{value:t.data.rememberMe,callback:function(e){t.$set(t.data,"rememberMe",e)},expression:"data.rememberMe"}})],1),t._v(" "),a("eb-list-button",{ref:"buttonSubmit",attrs:{onPerform:t.signIn}},[t._v(t._s(t.$text("Sign in")))])],1)],1)],1),t._v(" "),a("f7-card-footer",[a("eb-link",{staticClass:"text-smaller",attrs:{"eb-href":"/a/authsimple/passwordForgot","eb-target":"_self"}},[t._v(t._s(t.$text("Forgot password")))]),t._v(" "),a("div"),t._v(" "),a("eb-link",{staticClass:"text-smaller",attrs:{"eb-href":"/a/authsimple/signup","eb-target":"_self"}},[t._v(t._s(t.$text("Sign up")))])],1)],1)],1)},[],!1,null,"c9ea7952",null).exports;a(6);e.default={install:function(t,e){return n?console.error("already installed."):(n=t,e({routes:a(8).default,store:a(10).default(n),config:a(11).default,locales:a(12).default,components:{signin:s}}))}}},function(t,e,a){"use strict";a.r(e);var n={meta:{global:!1},data:function(){return{data:null,sent:!1}},created:function(){var t=this.$store.state.auth.user.agent;this.data={email:t.email}},methods:{onPerformValidate:function(){var t=this;return this.$api.post("auth/passwordForgot",{data:this.data}).then(function(){return t.sent=!0,!0})},onPerformOk:function(){return this.$refs.validate.perform()},onSubmit:function(){this.$refs.buttonSubmit.onClick()}}},r=a(0),o=Object(r.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("eb-page",[a("eb-navbar",{attrs:{title:t.$text("Forgot password"),"eb-back-link":"Back"}}),t._v(" "),a("f7-block",[t.sent?[t._v(t._s(t.$text("passwordResetEmailSentAlert")))]:[a("eb-validate",{ref:"validate",attrs:{auto:!1,data:t.data,params:{validator:"passwordForgot"},onPerform:t.onPerformValidate}},[a("eb-list",{attrs:{form:"","no-hairlines-md":""},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("eb-list-item-validate",{attrs:{dataKey:"email"}}),t._v(" "),a("f7-list-item",{attrs:{divider:""}},[a("eb-button",{ref:"buttonSubmit",attrs:{onPerform:t.onPerformOk}},[t._v(t._s(t.$text("Reset password")))])],1)],1)],1)]],2)],1)},[],!1,null,"13e54ea6",null);e.default=o.exports},function(t,e,a){"use strict";a.r(e);var n={meta:{global:!1},data:function(){return{data:{passwordOld:null,passwordNew:null,passwordNewAgain:null},captcha:{code:null},moduleCaptcha:null}},created:function(){var t=this;this.$meta.module.use("a-captcha",function(e){t.$options.components.captchaContainer=e.options.components.captchaContainer,t.moduleCaptcha=e})},methods:{onPerformValidate:function(){var t=this;return this.$api.post("auth/passwordChange",{data:this.data,captcha:this.captcha}).then(function(){t.$f7router.back()})},onPerformOk:function(){return this.$refs.validate.perform()},onSubmit:function(){this.$refs.buttonSubmit.onClick()}}},r=a(0),o=Object(r.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("eb-page",[a("eb-navbar",{attrs:{title:t.$text("Change password"),"eb-back-link":"Back"}},[a("f7-nav-right",[a("eb-link",{ref:"buttonSubmit",attrs:{iconMaterial:"done",onPerform:t.onPerformOk}})],1)],1),t._v(" "),a("f7-block",[a("eb-validate",{ref:"validate",attrs:{auto:!1,data:t.data,params:{validator:"passwordChange"},onPerform:t.onPerformValidate}},[a("eb-list",{attrs:{form:"","no-hairlines-md":""},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("eb-list-item-validate",{attrs:{dataKey:"passwordOld"}}),t._v(" "),a("eb-list-item-validate",{attrs:{dataKey:"passwordNew"}}),t._v(" "),a("eb-list-item-validate",{attrs:{dataKey:"passwordNewAgain"}}),t._v(" "),a("f7-list-item",[t.moduleCaptcha?[a("captchaContainer")]:t._e()],2),t._v(" "),a("eb-list-input",{attrs:{label:t.$text("Captcha code"),"floating-label":"",type:"text","clear-button":"",placeholder:t.$text("Captcha code"),dataPath:"captcha/code"},model:{value:t.captcha.code,callback:function(e){t.$set(t.captcha,"code",e)},expression:"captcha.code"}})],1)],1)],1)],1)},[],!1,null,"07052cf2",null);e.default=o.exports},function(t,e,a){"use strict";a.r(e);var n={meta:{global:!1},data:function(){return{data:null,sent:!1}},created:function(){var t=this.$store.state.auth.user.agent;this.data={userName:t.userName,email:t.email}},methods:{onPerformValidate:function(){var t=this;return this.$api.post("auth/emailConfirm",{data:this.data}).then(function(){return t.sent=!0,!0})},onPerformOk:function(){return this.$refs.validate.perform()},onSubmit:function(){this.$refs.buttonSubmit.onClick()}}},r=a(0),o=Object(r.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("eb-page",[a("eb-navbar",{attrs:{title:t.$text("Email confirmation"),"eb-back-link":"Back"}}),t._v(" "),a("f7-block",[t.sent?[t._v(t._s(t.$text("emailConfirmSentAlert")))]:[a("eb-validate",{ref:"validate",attrs:{auto:!1,data:t.data,params:{validator:"emailConfirm"},onPerform:t.onPerformValidate}},[a("eb-list",{attrs:{form:"","no-hairlines-md":""},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("eb-list-item-validate",{attrs:{dataKey:"userName"}}),t._v(" "),a("eb-list-item-validate",{attrs:{dataKey:"email"}}),t._v(" "),a("f7-list-item",{attrs:{divider:""}},[a("eb-button",{ref:"buttonSubmit",attrs:{onPerform:t.onPerformOk}},[t._v(t._s(t.$text("Send confirmation email")))])],1)],1)],1)]],2)],1)},[],!1,null,"560b5778",null);e.default=o.exports},function(t,e,a){"use strict";a.r(e);var n={meta:{global:!1},data:function(){return{token:this.$f7route.query.token,data:{passwordNew:null,passwordNewAgain:null}}},methods:{onPerformValidate:function(){var t=this;return this.$api.post("auth/passwordReset",{data:this.data,token:this.token}).then(function(){t.$meta.vueApp.reload({echo:!0})})},onPerformOk:function(){return this.$refs.validate.perform()},onSubmit:function(){this.$refs.buttonSubmit.onClick()}}},r=a(0),o=Object(r.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("eb-page",[a("eb-navbar",{attrs:{title:t.$text("Reset password"),"eb-back-link":"Back"}}),t._v(" "),a("f7-block",[a("eb-validate",{ref:"validate",attrs:{auto:!1,data:t.data,params:{validator:"passwordReset"},onPerform:t.onPerformValidate}},[a("eb-list",{attrs:{form:"","no-hairlines-md":""},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("eb-list-item-validate",{attrs:{dataKey:"passwordNew"}}),t._v(" "),a("eb-list-item-validate",{attrs:{dataKey:"passwordNewAgain"}}),t._v(" "),a("f7-list-item",{attrs:{divider:""}},[a("eb-button",{ref:"buttonSubmit",attrs:{onPerform:t.onPerformOk}},[t._v(t._s(t.$text("OK")))])],1)],1)],1)],1)],1)},[],!1,null,"30d1d7ac",null);e.default=o.exports},function(t,e,a){"use strict";a.r(e);var n={meta:{global:!1},data:function(){return{state:this.$f7route.query.state||"login",returnTo:this.$f7route.query.returnTo,data:{userName:null,realName:null,email:null,password:null,passwordAgain:null},captcha:{code:null},moduleCaptcha:null,userNameReadOnly:!1}},created:function(){var t=this;if("associate"===this.state){var e=this.$store.state.auth.user.agent;this.data.userName=e.userName,this.data.realName=e.realName,this.data.email=e.email,this.data.userName&&-1===this.data.userName.indexOf("__")&&(this.userNameReadOnly=!0)}this.$meta.module.use("a-captcha",function(e){t.$options.components.captchaContainer=e.options.components.captchaContainer,t.moduleCaptcha=e})},methods:{onSchemaReady:function(t){this.userNameReadOnly&&(t.properties.userName.ebReadOnly=!0)},onPerformValidate:function(){var t=this;return this.$api.post("auth/signup",{state:this.state,data:this.data,captcha:this.captcha}).then(function(){var e;t.returnTo&&(e=t.$meta.util.parseHash(t.returnTo)),t.$meta.vueApp.reload({echo:!0,hash:e})})},signUp:function(){return this.$refs.validate.perform()},onSubmit:function(){this.$refs.buttonSubmit.onClick()}}},r=a(0),o=Object(r.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("eb-page",[a("eb-navbar",{attrs:{title:t.$text("Sign up"),"eb-back-link":"Back"}}),t._v(" "),a("f7-block",[a("eb-validate",{ref:"validate",attrs:{auto:!1,data:t.data,params:{validator:"signup"},onPerform:t.onPerformValidate},on:{"schema:ready":t.onSchemaReady}},[a("eb-list",{attrs:{form:"","no-hairlines-md":""},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("eb-list-item-validate",{attrs:{dataKey:"userName"}}),t._v(" "),a("eb-list-item-validate",{attrs:{dataKey:"realName"}}),t._v(" "),a("eb-list-item-validate",{attrs:{dataKey:"email"}}),t._v(" "),a("eb-list-item-validate",{attrs:{dataKey:"password"}}),t._v(" "),a("eb-list-item-validate",{attrs:{dataKey:"passwordAgain"}}),t._v(" "),a("f7-list-item",[t.moduleCaptcha?[a("captchaContainer")]:t._e()],2),t._v(" "),a("eb-list-input",{attrs:{label:t.$text("Captcha code"),"floating-label":"",type:"text","clear-button":"",placeholder:t.$text("Captcha code"),dataPath:"captcha/code"},model:{value:t.captcha.code,callback:function(e){t.$set(t.captcha,"code",e)},expression:"captcha.code"}}),t._v(" "),a("f7-list-item",{attrs:{divider:""}},[a("eb-button",{ref:"buttonSubmit",attrs:{onPerform:t.signUp}},[t._v(t._s(t.$text("Sign up")))])],1)],1)],1)],1)],1)},[],!1,null,"1559cf5f",null);e.default=o.exports}]);