!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var n={},r=Object.prototype,o=r.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(P){s=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),c=new O(r||[]);return a(i,"_invoke",{value:j(t,n,c)}),i}function v(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(P){return{type:"throw",arg:P}}}n.wrap=f;var d={};function h(){}function y(){}function p(){}var m={};s(m,c,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(S([])));g&&g!==r&&o.call(g,c)&&(m=g);var x=p.prototype=h.prototype=Object.create(m);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(e,n){function r(a,i,c,l){var u=v(e[a],e,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==t(f)&&o.call(f,"__await")?n.resolve(f.__await).then((function(t){r("next",t,c,l)}),(function(t){r("throw",t,c,l)})):n.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,l)}))}l(u.arg)}var i;a(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}})}function j(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return T()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=_(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=v(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function _(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=v(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:T}}function T(){return{value:void 0,done:!0}}return y.prototype=p,a(x,"constructor",{value:p,configurable:!0}),a(p,"constructor",{value:y,configurable:!0}),y.displayName=s(p,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},n.awrap=function(t){return{__await:t}},k(w.prototype),s(w.prototype,l,(function(){return this})),n.AsyncIterator=w,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new w(f(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(x),s(x,u,"Generator"),s(x,c,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},n}function n(t,e,n,r,o,a,i){try{var c=t[a](i),l=c.value}catch(u){return void n(u)}c.done?e(l):Promise.resolve(l).then(r,o)}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,c=[],l=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(c.push(r.value),c.length!==e);l=!0);}catch(s){u=!0,o=s}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}System.register(["./index-legacy-8cae1057.js","./index-legacy-2ba5397d.js","./index-legacy-91b3e94f.js","./index-legacy-686f7fa8.js","./index-legacy-e764ab1c.js","./index-legacy-afd3439c.js","./dict-legacy-884a1a5b.js","./plugin-vue_export-helper-legacy-c6aa7c23.js","./function-call-legacy-85cf7e13.js","./use-route-legacy-2aa8ff6e.js","./index-legacy-7b41d9a1.js","./index-legacy-c72a7988.js","./use-placeholder-legacy-9c02026a.js","./index-legacy-e16bb2a1.js","./use-id-legacy-b0f2ddc5.js","./index-legacy-023a71ff.js"],(function(t,o){"use strict";var a,i,c,l,u,s,f,v,d,h,y,p,m,b,g,x,k,w,j,_,L,E,O,S,T,P,C,N,A,G,z,I,F,U,D,W,V,$,q,B,J,K,M,Y,X,Z,H,Q,R;return{setters:[function(t){a=t._},function(t){i=t.Z,c=t._,l=t.$,u=t.a0,s=t.d,f=t.a1,v=t.p,d=t.m,h=t.a2,y=t.X,p=t.a3,m=t.a4,b=t.a5,g=t.a,x=t.r,k=t.o,w=t.g,j=t.q,_=t.u,L=t.a6,E=t.a7,O=t.U,S=t.a8,T=t.f,P=t.k,C=t.G,N=t.x,A=t.y,G=t.F,z=t.i,I=t.J,F=t.K},function(t){U=t.A},null,function(t){D=t.G,W=t.a},function(t){V=t.d},function(t){$=t.l,q=t.o,B=t.s},function(t){J=t._},function(t){K=t.A,M=t.s,Y=t.a,X=t.b},function(t){Z=t.r,H=t.u},function(t){Q=t.T,R=t.a},null,null,null,null,null],execute:function(){var tt=document.createElement("style");tt.textContent='@charset "UTF-8";:root{--van-action-bar-icon-width: 1.28rem;--van-action-bar-icon-height: 100%;--van-action-bar-icon-color: var(--van-text-color);--van-action-bar-icon-size: .48rem;--van-action-bar-icon-font-size: var(--van-font-size-xs);--van-action-bar-icon-active-color: var(--van-active-color);--van-action-bar-icon-text-color: var(--van-text-color);--van-action-bar-icon-background: var(--van-background-2)}.van-action-bar-icon{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-width:var(--van-action-bar-icon-width);height:var(--van-action-bar-icon-height);color:var(--van-action-bar-icon-text-color);font-size:var(--van-action-bar-icon-font-size);line-height:1;text-align:center;background:var(--van-action-bar-icon-background);cursor:pointer}.van-action-bar-icon:active{background-color:var(--van-action-bar-icon-active-color)}.van-action-bar-icon__icon{margin:0 auto var(--van-padding-base);color:var(--van-action-bar-icon-color);font-size:var(--van-action-bar-icon-size)}[data-v-19e5c427]:export{themeColor:var(--van-blue)}.list-detail[data-v-19e5c427]{--van-tab-active-text-color: var(--van-primary-color)}.list-detail .footer-action[data-v-19e5c427]{--van-grid-item-icon-size: .48rem;--van-grid-item-text-color: #999;--van-action-bar-icon-text-color: #999}\n',document.head.appendChild(tt);var et=r(i("action-bar-icon"),2),nt=et[0],rt=et[1],ot=c({},Z,{dot:Boolean,text:String,icon:String,color:String,badge:l,iconClass:u,badgeProps:Object,iconPrefix:String}),at=s({name:nt,props:ot,setup:function(t,e){var n=e.slots,r=H();f(K);return function(){return v("div",{role:"button",class:rt(),tabindex:0,onClick:r},[(e=t.dot,o=t.badge,a=t.icon,i=t.color,c=t.iconClass,l=t.badgeProps,u=t.iconPrefix,n.icon?v(h,d({dot:e,class:rt("icon"),content:o},l),{default:n.icon}):v(y,{tag:"div",dot:e,name:a,badge:o,color:i,class:[rt("icon"),c],badgeProps:l,classPrefix:u},null)),n.default?n.default():t.text]);var e,o,a,i,c,l,u}}}),it=p(at);p(M);var ct=Object.assign({"./Details.vue":function(){return b((function(){return o.import("./Details-legacy-38201b59.js")}),void 0)},"./Views.vue":function(){return b((function(){return o.import("./Views-legacy-df85eb1f.js")}),void 0)},"./WorkTrend.vue":function(){return b((function(){return o.import("./WorkTrend-legacy-d7a87de5.js")}),void 0)}}),lt=Object.keys(ct).reduce((function(t,e){var n=e.replace(/^\.\/(.*)\.\w+$/,"$1");return console.log("name:",n),t[n]=m(ct[e]),t}),{}),ut={class:"label st-margin-bottom-8"},st={class:"value st-tip"},ft={class:"footer-action"},vt={class:"content"},dt=s({name:"ListDetail"}),ht=Object.assign(dt,{setup:function(t){var r=g(3),o=g([{text:"编辑工单",name:"edit",icon:"edit",color:""},{text:"删除工单",name:"delete",icon:"delete",color:""},{text:"更多操作",name:"more",icon:"ellipsis",color:""},{text:"完结工单",name:"finish",icon:"checked",color:""},{text:"退回工单",name:"sendBack",icon:"cross",color:""},{text:"撤销工单",name:"revoke",icon:"revoke",color:""},{text:"转他人处理",name:"exchange",icon:"exchange",color:""}]),i=g([{key:"levelText",label:"紧急程度",value:""},{key:"status",label:"工单状态",value:"",formatter:function(t){return B.get(t)}},{key:"initiator",label:"发起人员",value:""},{key:"deptName",label:"发起部门",value:""},{key:"submitter",label:"提交人员",value:""},{key:"createTime",label:"提交时间",value:""}]),c=g([{label:"工单编号",key:"id"},{label:"工单标题",key:"name"},{label:"工单类型",key:"typeText"},{label:"紧急程度",key:"levelText"},{label:"当前状态",key:"status",formatter:function(t){return B.get(t)}},{label:"关联用户",key:"customer",slotValue:!0},{label:"发起人员",key:"initiator"},{label:"发起部门",key:"deptName"},{label:"处理人员",key:"handlingUser"},{label:"处理部门",key:"handlingDeptName"},{label:"通知他人",key:"otherUser"},{label:"提交时间",key:"createTime"},{label:"处理时间",key:"handlingTime"}]),l=L(),u=l.query.id,s=l.query.name,f=x({}),h=g("WorkTrend"),y=[{title:"工单动态",name:"WorkTrend"},{title:"工单详情",name:"Details"},{title:"查看记录",name:"Views"}],p=function(){var t,r=(t=e().mark((function t(){var n,r,o,a,l;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=E({}),t.prev=1,r={id:u},t.next=5,O.getWorkOrderDetail(r);case 5:if(0!==(o=t.sent).code){t.next=27;break}t.t0=e().keys(o.data);case 8:if((t.t1=t.t0()).done){t.next=22;break}a=t.t1.value,l=o.data[a],f[a]=o.data[a],t.t2=a,t.next="type"===t.t2?15:"level"===t.t2?17:19;break;case 15:return f.typeText=q.get(l),t.abrupt("break",20);case 17:return f.levelText=$.get(l),t.abrupt("break",20);case 19:return t.abrupt("break",20);case 20:t.next=8;break;case 22:i.value=V(f,i.value),c.value=V(f,c.value),console.log("details:",c),t.next=28;break;case 27:S({type:"danger",message:o.message||"请求失败"});case 28:return t.prev=28,null==n||n.close(),t.finish(28);case 31:case"end":return t.stop()}}),t,null,[[1,,28,31]])})),function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,l,"next",t)}function l(t){n(i,o,a,c,l,"throw",t)}c(void 0)}))});return function(){return r.apply(this,arguments)}}(),m=g(!1),b=function(t){switch(m.value=!1,t.name){case"edit":case"checked":break;case"delete":Y({title:"删除确认",message:"确定要删除该条记录吗？"}).then((function(){})).catch((function(){}));break;case"more":m.value=!0}};return k((function(){p()})),function(t,e){var n=D,l=W,u=Q,f=R,p=it,g=X,x=U,k=a;return T(),w(k,{class:"list-detail",title:_(s)},{default:j((function(){return[v(l,{"column-num":3,border:!1},{default:j((function(){return[(T(!0),P(G,null,C(_(i),(function(t){var e=t.key,r=t.label,o=t.value,a=t.formatter;return T(),w(n,{key:e},{default:j((function(){return[N("div",ut,A(r),1),N("div",st,A(a?a(o):o),1)]})),_:2},1024)})),128))]})),_:1}),v(f,{active:_(h),"onUpdate:active":e[0]||(e[0]=function(t){return I(h)?h.value=t:null}),"line-height":0,class:"st-margin-top-15",animated:"",size:"small"},{default:j((function(){return[(T(),P(G,null,C(y,(function(t){return v(u,{key:t.name,"title-class":"st-color-blue",title:t.title,name:t.name},{default:j((function(){return[(T(),w(z(_(lt)[_(h)]),{data:_(c)},null,8,["data"]))]})),_:2},1032,["title","name"])})),64))]})),_:1},8,["active"]),N("div",ft,[v(g,{class:"van-hairline--top",placeholder:""},{default:j((function(){return[(T(!0),P(G,null,C(_(o).slice(0,_(r)),(function(t){return T(),w(p,d({key:t.name,style:{flex:"1"}},t,{color:"#999",onClick:function(e){return b(t)}}),null,16,["onClick"])})),128))]})),_:1}),v(x,{show:_(m),"onUpdate:show":e[1]||(e[1]=function(t){return I(m)?m.value=t:null}),title:"更多操作",round:!1,"close-on-click-overlay":!1},{default:j((function(){return[N("div",vt,[v(l,{"column-num":_(r),border:!1,clickable:""},{default:j((function(){return[(T(!0),P(G,null,C(_(o).slice(_(r)),(function(t){return T(),w(n,d({key:t.name},t,{"icon-color":"#999",onClick:F((function(e){return b(t)}),["stop"])}),null,16,["onClick"])})),128))]})),_:1},8,["column-num"])])]})),_:1},8,["show"])])]})),_:1},8,["title"])}}});t("default",J(ht,[["__scopeId","data-v-19e5c427"]]))}}}))}();
