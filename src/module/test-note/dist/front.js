(()=>{var e={277:(e,t,r)=>{"use strict";function n(e,t,r,n,o,a,i){try{var s=e[a](i),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,o)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:()=>a});const a={listLayoutCard:{meta:{global:!1},props:{layoutManager:{type:Object},layoutConfig:{type:Object}},data:function(){return{}},created:function(){this.init()},beforeDestroy:function(){this.layoutManager.layout.instance===this&&(this.layoutManager.layout.instance=null)},methods:{init:function(){var e,t=this;return(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.layoutManager.subnavbar_policyDefault(),e.next=3,t.layoutManager.data_providerSwitch({providerName:"continuous",autoInit:"search"!==t.layoutManager.container.scene});case 3:t.layoutManager.layout.instance=t;case 4:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function s(e){n(i,o,a,s,u,"next",e)}function u(e){n(i,o,a,s,u,"throw",e)}s(void 0)}))})()}},render:function(){var e=arguments[0];return e("div",[this.layoutManager.layout_renderBlock({blockName:"items"}),this.layoutManager.data_renderLoadMore()])}},listLayoutBlockCardItems:{meta:{global:!1},props:{layoutManager:{type:Object},layout:{type:Object},blockConfig:{type:Object}},data:function(){return{}},methods:{_renderListItem:function(e){var t=this.$createElement,r=this.layoutManager.layout_renderBlock({blockName:"item",key:e.atomId,info:{item:e},listItem:!0});return t("f7-card",{key:e.atomId},[t("f7-card-header",[t("f7-list",[r])]),t("f7-card-content",[e.content])])},_renderList:function(){var e,t=[],r=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){u=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw i}}}}(this.layoutManager.data_getItems());try{for(r.s();!(e=r.n()).done;){var n=e.value;t.push(this._renderListItem(n))}}catch(e){r.e(e)}finally{r.f()}return t}},render:function(){var e=arguments[0];return e("div",{class:"atom-list-layout-card-container"},[this._renderList()])}}}},72:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n={atoms:{note:{render:{list:{info:{layout:{viewSize:{small:[{name:"card"},{name:"list"}],medium:[{name:"card"},{name:"table"}],large:[{name:"card"},{name:"table"}]}}},layouts:{card:{title:"LayoutCard",component:{module:"test-note",name:"listLayoutCard"},blocks:{items:{component:{module:"test-note",name:"listLayoutBlockCardItems"}},item:{component:{module:"a-baselayout",name:"listLayoutBlockListItem"},summary:!1}}}}}}}}}},933:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n={}},978:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n={Name:"名称",Description:"描述"}},137:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n={"en-us":r(933).Z,"zh-cn":r(978).Z}},644:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=[]},81:(e,t,r)=>{"use strict";function n(e){return{state:{},getters:{},mutations:{},actions:{}}}r.d(t,{Z:()=>n})},891:(e,t,r)=>{var n=r(361)((function(e){return e[1]}));n.push([e.id,"",""]),e.exports=n},361:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);n&&o[u[0]]||(r&&(u[2]?u[2]="".concat(r," and ").concat(u[2]):u[2]=r),t.push(u))}},t}},650:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n=function(e,t,r,n,o,a,i,s){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=[],c._compiled=!0),c._scopeId="data-v-662422d4",u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(e,t){return u.call(t),l(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:c}}({data:function(){return{}}},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("eb-page",[r("eb-navbar",{attrs:{title:e.$text("Demo"),"eb-back-link":"Back"}}),e._v(" "),r("f7-block-title",{attrs:{medium:""}}),e._v(" "),r("f7-block",{attrs:{strong:""}})],1)})).exports},824:(e,t,r)=>{var n=r(891);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,r(159).Z)("3a3f5e9a",n,!0,{})},159:(e,t,r)=>{"use strict";function n(e,t){for(var r=[],n={},o=0;o<t.length;o++){var a=t[o],i=a[0],s={id:e+":"+o,css:a[1],media:a[2],sourceMap:a[3]};n[i]?n[i].parts.push(s):r.push(n[i]={id:i,parts:[s]})}return r}r.d(t,{Z:()=>m});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},i=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,l=function(){},d=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,t,r,o){c=r,d=o||{};var i=n(e,t);return v(i),function(t){for(var r=[],o=0;o<i.length;o++){var s=i[o];(u=a[s.id]).refs--,r.push(u)}for(t?v(i=n(e,t)):i=[],o=0;o<r.length;o++){var u;if(0===(u=r[o]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete a[u.id]}}}}function v(e){for(var t=0;t<e.length;t++){var r=e[t],n=a[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(h(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var i=[];for(o=0;o<r.parts.length;o++)i.push(h(r.parts[o]));a[r.id]={id:r.id,refs:1,parts:i}}}}function y(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function h(e){var t,r,n=document.querySelector("style["+f+'~="'+e.id+'"]');if(n){if(c)return l;n.parentNode.removeChild(n)}if(p){var o=u++;n=s||(s=y()),t=_.bind(null,n,o,!1),r=_.bind(null,n,o,!0)}else n=y(),t=M.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}var g,b=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function _(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function M(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),d.ssrId&&e.setAttribute(f,t.id),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}},990:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=990,e.exports=t},142:(e,t,r)=>{var n={"./demo.vue":650};function o(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id=142}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";var e;r.r(n),r.d(n,{default:()=>t}),r(824);const t={install:function(t,n){return e?console.error("already installed."):(e=t,n({routes:r(644).Z,store:r(81).Z(e),config:r(72).Z,locales:r(137).Z,components:r(277).Z}))}}})(),window["test-note"]=n})();