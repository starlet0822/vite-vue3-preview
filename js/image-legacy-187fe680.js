!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(G){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),c=new z(n||[]);return i(a,"_invoke",{value:j(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(G){return{type:"throw",arg:G}}}r.wrap=f;var d={};function h(){}function y(){}function v(){}var g={};l(g,c,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(O([])));b&&b!==n&&o.call(b,c)&&(g=b);var x=v.prototype=h.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function _(e,r){function n(i,a,c,u){var s=p(e[i],e,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&o.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return a=a?a.then(o,o):o()}})}function j(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=p(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=p(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return y.prototype=v,i(x,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:y,configurable:!0}),y.displayName=l(v,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},r.awrap=function(t){return{__await:t}},w(_.prototype),l(_.prototype,u,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new _(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),l(x,s,"Generator"),l(x,c,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=O,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},r}function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}var o=document.createElement("style");o.innerHTML='@charset "UTF-8";[data-v-56c9ba60]:export{themeColor:#1c71fb}.layout__page[data-v-56c9ba60] .img-type img{width:5em;height:5em;-o-object-fit:cover;object-fit:cover}.layout__page .img-box[data-v-56c9ba60]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.layout__page .desc-text[data-v-56c9ba60]{display:inline-block;width:100%;font-size:var(--van-font-size-sm);text-align:center;margin-top:.13333rem}.layout__page[data-v-56c9ba60] .img-compress img{width:100%;-o-object-fit:cover;object-fit:cover}.layout__page .img-lazyloading .img-lazy[data-v-56c9ba60]{padding:.42667rem;text-align:center}.layout__page .img-lazyloading .img-lazy img[data-v-56c9ba60]{width:100%;height:5rem;-o-object-fit:cover;object-fit:cover}\n',document.head.appendChild(o),System.register(["./vant-legacy-3da83ae3.js","./index-legacy-d5bdb900.js","./image-conversion-legacy-04f5e513.js","./plugin-vue_export-helper-legacy-37b3dbd0.js","./@vue-legacy-39326993.js","./@vant-legacy-fcf8e23d.js","./vue-router-legacy-cae879a2.js","./@antv-legacy-a9dadf71.js","./tslib-legacy-238f19fa.js","./fecha-legacy-893f5c8d.js"],(function(t){"use strict";var r,o,i,a,c,u,s,l,f,p,d,h,y,v,g,m,b,x,w,_,j,L,E,k,z,O,S;return{setters:[function(t){r=t.d,o=t.g,i=t.I,a=t.G,c=t.e,u=t.n,s=t.R,l=t.B},function(t){f=t._},function(t){p=t.i},function(t){d=t._},function(t){h=t.r,y=t.b,v=t.n,g=t.ak,m=t.al,b=t.l,x=t.b7,w=t.F,_=t.aN,j=t.aI,L=t.v,E=t.u,k=t.a5,z=t.C,O=t.aK,S=t.aJ},function(){},function(){},function(){},function(){},function(){}],execute:function(){var G="/vite-vue3-preview/assets/compress.7baea395.jpg",N=function(t){return O("data-v-56c9ba60"),t=t(),S(),t},P={class:"layout__page"},F={class:"layout__header"},I={class:"layout__body st-margin-top-10"},T={class:"img-type"},A={class:"img-box"},C=N((function(){return m("span",{class:"desc-text"},"组件加载",-1)})),R=N((function(){return m("span",{class:"desc-text"},"原生标签加载",-1)})),B={class:"img-box"},U=N((function(){return m("span",{class:"desc-text"},"渐进式加载",-1)})),Y={class:"img-compress st-margin-top-10"},q={class:"img-box"},D={class:"desc-text"},H={class:"img-box"},J={class:"desc-text"},K={class:"img-lazyloading st-margin-top-10"},M=["src"];t("default",d({__name:"image",setup:function(t){var d="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",O=h(""),S=h(),N=["https://img.yzcdn.cn/vant/cat.jpeg","https://images.pexels.com/photos/9443229/pexels-photo-9443229.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200","https://s4.ax1x.com/2022/03/02/b3NS0A.jpg","https://s4.ax1x.com/2022/03/02/b3Gyo6.jpg","https://www.xue8nav.com/wp-content/uploads/firewatch-wallpaper.jpg","https://s4.ax1x.com/2022/03/02/b3Gyo6.jpg","https://wallpaperaccess.com/full/11732.jpg","https://images.pexels.com/photos/10865058/pexels-photo-10865058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300"];return y(n(e().mark((function t(){var r,n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return t.next=4,p.urltoBlob(G);case 4:return r=t.sent,t.next=7,p.compress(r,{quality:.6});case 7:return n=t.sent,t.next=10,p.filetoDataURL(n);case 10:O.value=t.sent;case 11:case"end":return t.stop()}}),t)})))),function(t,e){var n=f,p=r,h=o,y=i,v=a,Q=c,V=u,W=s,X=l,Z=z("gradual"),$=z("lazy");return j(),g("div",P,[m("div",F,[b(n)]),m("div",I,[m("div",T,[b(p,{title:"图片加载方式",border:!1}),b(Q,{border:!0,"column-num":3,center:""},{default:x((function(){return[b(v,null,{default:x((function(){return[m("div",A,[b(y,{src:d,round:""},{loading:x((function(){return[b(h,{type:"spinner",size:"20"})]})),_:1}),C])]})),_:1}),b(v,null,{default:x((function(){return[m("div",{class:"img-box"},[m("img",{src:d}),R])]})),_:1}),b(v,null,{default:x((function(){return[m("div",B,[L(m("img",{src:d},null,512),[[Z]]),U])]})),_:1})]})),_:1})]),m("div",Y,[b(p,{title:"图片压缩",border:!1}),b(Q,{border:!0,"column-num":2,center:""},{default:x((function(){return[b(v,null,{default:x((function(){return[m("div",q,[b(y,{ref_key:"compressImgRef",ref:S,src:E(G)},{loading:x((function(){return[b(h,{type:"spinner",size:"20"})]})),_:1},8,["src"]),m("span",D,"压缩前"+k(),1)])]})),_:1}),b(v,null,{default:x((function(){return[m("div",H,[b(y,{src:E(O)},{loading:x((function(){return[b(h,{type:"spinner",size:"20"})]})),_:1},8,["src"]),m("span",J,"压缩后"+k(),1)])]})),_:1})]})),_:1})]),m("div",K,[b(p,{title:"懒加载",border:!1}),(j(),g(w,null,_(N,(function(t,e){return b(W,{key:t+e,class:"img-lazy"},{default:x((function(){return[b(V,{span:"24"},{default:x((function(){return[L(m("img",{src:t,"lazy-load":""},null,8,M),[[$,t],[Z]])]})),_:2},1024)]})),_:2},1024)})),64))]),b(X,{target:".layout__body"})])])}}},[["__scopeId","data-v-56c9ba60"]]))}}}))}();