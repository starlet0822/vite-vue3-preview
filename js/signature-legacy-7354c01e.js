!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(t,n,r){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,n||"default");if("object"!==e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}var a=document.createElement("style");a.innerHTML='@charset "UTF-8";[data-v-45226efc]:export{themeColor:var(--van-blue)}.signature .signature__penSize[data-v-45226efc]{padding:0 .42667rem .53333rem}.signature .signature__penSize .size-text[data-v-45226efc]{font-size:var(--van-font-size-md);padding:.26667rem 0}.signature .signature__penSize .slider-button[data-v-45226efc]{color:var(--b07b56a6);-webkit-box-shadow:0 0 0 .10667rem #e5e7ea;box-shadow:0 0 0 .10667rem #e5e7ea;font-size:var(--van-font-size-sm);width:.53333rem;height:.53333rem;line-height:.53333rem;text-align:center;background-color:#fff;border-radius:50%}.signature .signature-wrapper[data-v-45226efc]{position:relative;background-color:#fff}.signature .signature-wrapper .tip-text[data-v-45226efc]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:#eee}.signature .signature__control[data-v-45226efc]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:.42667rem}.signature .signature__control .ctrl-color .active-color[data-v-45226efc]{-webkit-box-shadow:0 0 0 .10667rem #c5c5c5;box-shadow:0 0 0 .10667rem #c5c5c5}.signature .signature__control .ctrl-color .color-btn[data-v-45226efc]{float:left;width:.53333rem;height:.53333rem;margin-right:.53333rem;cursor:pointer;border-radius:50%}.signature .signature__control .ctrl-color .color-btn-black[data-v-45226efc]{background-color:#001330}[data-v-0939647c]:export{themeColor:var(--van-blue)}.layout__page .preview[data-v-0939647c]{margin-top:.26667rem;background:#fff}.layout__page .preview img[data-v-0939647c]{width:100%;height:auto}\n',document.head.appendChild(a),System.register(["./vant-legacy-c7e8cf52.js","./index-legacy-64df76c8.js","./@vue-legacy-39326993.js","./signature_pad-legacy-de9cfdf6.js","./intro.js-legacy-66104404.js","./plugin-vue_export-helper-legacy-37b3dbd0.js","./@vant-legacy-fcf8e23d.js","./vue-router-legacy-cae879a2.js"],(function(e){"use strict";var t,r,a,i,o,c,l,u,s,f,d,v,p,b,g,m,y,h,k,w,_,j,x,O,S,C,z,P,E,D;return{setters:[function(e){e.p,t=e.j,r=e.q,a=e.d,i=e.B},function(e){o=e._},function(e){c=e.m,l=e.bk,u=e.u,s=e.r,f=e.a,d=e.b,v=e.q,p=e.w,b=e.aI,g=e.ak,m=e.aj,y=e.al,h=e.F,k=e.aN,w=e.a4,_=e.a2,j=e.l,x=e.b7,O=e.A,S=e.ap,C=e.aK,z=e.aJ},function(e){P=e.S},function(e){E=e.I},function(e){D=e._},function(){},function(){}],execute:function(){var L={class:"signature"},q={class:"signature-wrapper"},I={key:0,class:"tip-text st-font-24"},R={class:"signature__control van-hairline--top st-bg-white"},T={class:"ctrl-color"},W=["onClick"],B={class:"ctrl-btn"},F=c({name:"Signature"}),H=D(Object.assign(F,{props:{options:{type:Object,default:function(){return{}}}},emits:["save"],setup:function(e,r){var a=r.expose,i=r.emit,o=e;l((function(e){return{b07b56a6:u(z)}}));var c=s(null),S=s(null),C=s(!0),z=s("#000"),D=f(["#000","#2489f3","#ed521f"]),F=s(.5);d((function(){H()})),v((function(){S.value=null})),p((function(){return S.value}),(function(e,t){C.value=e._isEmpty}),{deep:!0});var H=function(){var e={minWidth:F.value,maxWidth:5,penColor:z.value,backgroundColor:"rgb(255, 255, 255)"};S.value=new P(c.value,n(n({},e),o.options)),C.value=S.value.isEmpty(),c.value.width=document.body.clientWidth,c.value.height=document.body.clientHeight/2,S.value.addEventListener("beginStroke",(function(){C.value=!1}),{once:!1})},N=function(){var e=S.value.toData();e&&(e.pop(),S.value.fromData(e))},U=function(){S.value.clear(),A()},A=function(){if(S.value.isEmpty())i("save",null);else{var e=S.value.toDataURL();i("save",e)}};return a({guide:function(){E().setOptions({prevLabel:"上一步",nextLabel:"下一步",skipLabel:"跳过",doneLabel:"知道了",showBullets:!1,disableInteraction:!0,exitOnOverlayClick:!1,steps:[{element:document.querySelector("canvas"),title:"签名区域",intro:"您可以在此处手写签名",position:"top"},{element:document.querySelector(".ctrl-color"),title:"手写笔颜色",intro:"您可以切换手写笔颜色",position:"top"},{element:document.querySelector(".ctrl-btn"),title:"操作",intro:"您可以撤销、清空、保存签名",position:"bottom"}]}).start()}}),function(e,n){var r=t;return b(),g("div",L,[m("",!0),y("main",q,[u(C)?(b(),g("h2",I,"请在此处签名")):m("",!0),y("canvas",{ref_key:"canvasRef",ref:c},"您的浏览器不支持canvas技术,请升级浏览器!",512)]),y("footer",R,[y("div",T,[(b(!0),g(h,null,k(u(D),(function(e){return b(),g("div",{key:e,style:w({"background-color":e}),class:_(["color-btn",{"active-color":e===u(z)}]),onClick:function(t){return function(e){S.value.penColor=z.value=e}(e)}},null,14,W)})),128))]),y("div",B,[j(r,{icon:"revoke",size:"small",disabled:u(C),onClick:N},{default:x((function(){return[O("撤销")]})),_:1},8,["disabled"]),j(r,{icon:"cross",size:"small",style:{"margin-left":"12px"},type:"danger",disabled:u(C),onClick:U},{default:x((function(){return[O(" 清空 ")]})),_:1},8,["disabled"]),j(r,{icon:"success",size:"small",type:"primary",disabled:u(C),style:{"margin-left":"12px"},onClick:A},{default:x((function(){return[O(" 保存 ")]})),_:1},8,["disabled"])])])])}}}),[["__scopeId","data-v-45226efc"]]),N={class:"layout__page"},U=function(e){return C("data-v-0939647c"),e=e(),z(),e}((function(){return y("span",{class:"st-margin-right-10"},"签名教程",-1)})),A={class:""},J={key:0,class:"preview"},K=["src"],M=c({name:"Signature"});e("default",D(Object.assign(M,{setup:function(e){var t=s(null),n=s(null),c=function(){n.value.guide()},l=function(){},f=function(e){if(t.value=e,!t.value)return!1};return function(e,s){var d=r,v=o,p=a,h=i;return b(),g("div",N,[j(v,null,{right:x((function(){return[y("div",{class:"guide-icon st-font-12 st-flex-ai",onClick:c},[U,j(d,{name:"info",size:"14"})])]})),_:1}),y("div",A,[j(p,{title:"手写签名区域",border:!1}),j(H,{ref_key:"signaturePadRef",ref:n,onSave:f},null,512),(b(),g("div",J,[j(p,{title:"预览签名区域",center:""},S({_:2},[void 0]),1024),u(t)?(b(),g("img",{key:0,class:"sign-img",src:u(t),onClick:l},null,8,K)):m("",!0)]))]),j(h)])}}}),[["__scopeId","data-v-0939647c"]]))}}}))}();