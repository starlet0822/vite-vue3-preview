!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(t,n,r){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}var o=document.createElement("style");o.innerHTML='@charset "UTF-8";[data-v-ee3221f8]:export{themeColor:#1c71fb}\n',document.head.appendChild(o),System.register(["./vant-legacy-74d1c911.js","./index-legacy-f100e13b.js","./plugin-vue_export-helper-legacy-37b3dbd0.js","./@vue-legacy-39326993.js"],(function(e){"use strict";var t,r,o,i,c,a,u,l,f,b,s,p,v,y,m,d;return{setters:[function(e){t=e.l,r=e.m},function(e){o=e.t},function(e){i=e._},function(e){c=e.m,a=e.a,u=e._,l=e.aI,f=e.ak,b=e.l,s=e.b7,p=e.F,v=e.aN,y=e.ai,m=e.aO,d=e.t}],execute:function(){var g=c({name:"MoveTab",props:{active:{type:[Number,String],default:0},tabs:{type:Array,default:function(){return["主页","列表页"]}}},emits:["update:active","change"],setup:function(e,t){var r=t.emit,i=a({tabActive:e.active,currentComponent:"",keyword:"",themeColor:o});console.log(e.active,i.tabActive);return n(n({},u(i)),{},{onClickTab:function(e){},onTabsChange:function(e,t){console.log("onTabsChange",e,t),r("update:active",e),r("change",e)}})}}),h={class:"tabs-wrapper"};e("_",i(g,[["render",function(e,n,o,i,c,a){var u=t,g=r;return l(),f("div",h,[b(g,d(e.$attrs,{active:e.tabActive,"onUpdate:active":n[0]||(n[0]=function(t){return e.tabActive=t}),color:e.themeColor,ellipsis:!1,sticky:!0,animated:"",border:"",swipeable:"","title-active-color":e.themeColor,"title-inactive-color":"#8c8c8c",onChange:e.onTabsChange,onClickTab:e.onClickTab}),{default:s((function(){return[(l(!0),f(p,null,v(e.tabs,(function(t,n){return l(),y(u,{key:t+n,name:n,title:t},{default:s((function(){return[m(e.$slots,"default",{},void 0,!0)]})),_:2},1032,["name","title"])})),128))]})),_:3},16,["active","color","title-active-color","onChange","onClickTab"])])}],["__scopeId","data-v-ee3221f8"]]))}}}))}();
