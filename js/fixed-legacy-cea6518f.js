!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(t,n,r){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,n||"default");if("object"!==e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}var a=document.createElement("style");a.innerHTML='@charset "UTF-8";[data-v-ee3221f8]:export{themeColor:#1c71fb}[data-v-53455446]:export{themeColor:#1c71fb}\n',document.head.appendChild(a),System.register(["./plugin-vue_export-helper-legacy-37b3dbd0.js","./@vue-legacy-39326993.js","./vant-legacy-a118d395.js","./index-legacy-a77f74f1.js","./@vant-legacy-fcf8e23d.js","./normalize.css-legacy-9b0443a6.js","./amfe-flexible-legacy-e3938076.js","./js-cookie-legacy-5f5cb1eb.js","./vue-router-legacy-cae879a2.js","./vuex-legacy-125cfe16.js","./lodash-es-legacy-5e39d6c3.js","./axios-legacy-10210e28.js","./qs-legacy-5895894e.js","./side-channel-legacy-2b88a05f.js","./get-intrinsic-legacy-39a148af.js","./has-symbols-legacy-d03493bf.js","./function-bind-legacy-aa6d88e2.js","./has-legacy-275d3594.js","./call-bind-legacy-628f04b5.js","./object-inspect-legacy-7c542a43.js","./@antv-legacy-a9dadf71.js","./tslib-legacy-238f19fa.js","./fecha-legacy-893f5c8d.js","./nprogress-legacy-f6e28caf.js","./vue3-hash-calendar-legacy-8dbb168e.js","./hammerjs-legacy-fd9fbe53.js"],(function(e){"use strict";var t,r,a,o,c,i,u,l,f,s,b,p,y,d,m,v,g,j,h,C,O,w;return{setters:[function(e){t=e._},function(e){r=e.m,a=e.aI,o=e.ak,c=e.aO,i=e.a4,u=e.a,l=e._,f=e.l,s=e.b7,b=e.F,p=e.aN,y=e.ai,d=e.t,m=e.aj,v=e.A},function(e){g=e.m,j=e.n,h=e.d,C=e.k},function(e){O=e.R,w=e.t},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var S=r({name:"ZyFooter",props:{bottom:{type:[Number,String],default:0}},setup:function(){return{}}}),k={class:"footer-wrapper st-footer"};var _=t(S,[["render",function(e,t,n,r,i,u){return a(),o("footer",k,[c(e.$slots,"default")])}]]),T=r({name:"ZyMain",props:{top:{type:[Number,String],default:0},bottom:{type:[Number,String],default:50}},setup:function(){return{RootValue:O}}});var A=t(T,[["render",function(e,t,n,r,u,l){return a(),o("main",{style:i({top:+e.top/e.RootValue+"rem",bottom:+e.bottom/e.RootValue+"rem"}),class:"main-wrapper st-main"},[c(e.$slots,"default")],4)}]]),P=r({name:"ZyHeader",props:{top:{type:[Number,String],default:0}},setup:function(){return{RootValue:O}}});var x=t(P,[["render",function(e,t,n,r,u,l){return a(),o("header",{style:i({top:+e.top/e.RootValue+"rem"}),class:"header-wrapper st-header"},[c(e.$slots,"default")],4)}]]),N=r({name:"MoveTab",props:{active:{type:[Number,String],default:0},tabs:{type:Array,default:function(){return["主页","列表页"]}}},emits:["update:active","change"],setup:function(e,t){var r=t.emit,a=u({tabActive:e.active,currentComponent:"",keyword:"",themeColor:w});return n(n({},l(a)),{},{onClickTab:function(e){},onTabsChange:function(e,t){r("update:active",e),r("change",e)}})}}),R={class:"tabs-wrapper"};var V=t(N,[["render",function(e,t,n,r,i,u){var l=g,m=j;return a(),o("div",R,[f(m,d(e.$attrs,{active:e.tabActive,"onUpdate:active":t[0]||(t[0]=function(t){return e.tabActive=t}),color:e.themeColor,ellipsis:!1,sticky:!0,animated:"",border:"",swipeable:"","title-active-color":e.themeColor,"title-inactive-color":"#8c8c8c",onChange:e.onTabsChange,onClickTab:e.onClickTab}),{default:s((function(){return[(a(!0),o(b,null,p(e.tabs,(function(t,n){return a(),y(l,{key:t+n,name:n,title:t},{default:s((function(){return[c(e.$slots,"default",{},void 0,!0)]})),_:2},1032,["name","title"])})),128))]})),_:3},16,["active","color","title-active-color","onChange","onClickTab"])])}],["__scopeId","data-v-ee3221f8"]]),$=r({name:"Fixed",components:{},setup:function(){var e=u({tabActive:1,tabs:["栏目1","栏目2","栏目3"]});return n(n({},l(e)),{},{handleTabChange:function(){}})}}),z={class:"fixed-wrapper"};e("default",t($,[["render",function(e,t,n,r,c,i){var u=V,l=x,y=h,d=A,g=C,j=_;return a(),o("div",z,[f(l,null,{default:s((function(){return[f(u,{active:e.tabActive,"onUpdate:active":t[0]||(t[0]=function(t){return e.tabActive=t}),tabs:e.tabs,onChange:e.handleTabChange},null,8,["active","tabs","onChange"])]})),_:1}),f(d,null,{default:s((function(){return[0==e.tabActive?(a(),o(b,{key:0},p(5,(function(e){return f(y,{class:"zy-margin-top-10",title:"内容..."})})),64)):m("",!0),1==e.tabActive?(a(),o(b,{key:1},p(10,(function(e){return f(y,{class:"zy-margin-top-10",title:"内容..."})})),64)):m("",!0),2==e.tabActive?(a(),o(b,{key:2},p(20,(function(e){return f(y,{class:"zy-margin-top-10",title:"内容..."})})),64)):m("",!0)]})),_:1}),f(j,null,{default:s((function(){return[f(g,{block:"",type:"primary"},{default:s((function(){return[v("提交")]})),_:1})]})),_:1})])}],["__scopeId","data-v-53455446"]]))}}}))}();
