!function(){function e(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,t,c,o,i=[],l=!0,s=!1;try{if(c=(a=a.call(e)).next,0===n){if(Object(a)!==a)return;l=!1}else for(;!(l=(r=c.call(a)).done)&&(i.push(r.value),i.length!==n);l=!0);}catch(u){s=!0,t=u}finally{try{if(!l&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(s)throw t}}return i}}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return n(e,a);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var a=0,r=new Array(n);a<n;a++)r[a]=e[a];return r}System.register(["./index-legacy-946ee490.js","./use-id-legacy-28df8b96.js","./index-legacy-087f6cf3.js"],(function(n,a){"use strict";var r,t,c,o,i,l,s,u,d,v,f,b,h,g,p;return{setters:[function(e){r=e.f,t=e.F},function(e){c=e.u},function(e){o=e.a1,i=e.a2,l=e.au,s=e.ax,u=e.d,d=e.a,v=e.cj,f=e.p,b=e.c7,h=e.m,g=e.cx,p=e.a7}],execute:function(){var a=document.createElement("style");a.textContent=":root{--van-search-padding: .26667rem var(--van-padding-sm);--van-search-background: var(--van-background-2);--van-search-content-background: var(--van-background);--van-search-input-height: .90667rem;--van-search-label-padding: 0 .13333rem;--van-search-label-color: var(--van-text-color);--van-search-label-font-size: var(--van-font-size-md);--van-search-left-icon-color: var(--van-gray-6);--van-search-action-padding: 0 var(--van-padding-xs);--van-search-action-text-color: var(--van-text-color);--van-search-action-font-size: var(--van-font-size-md)}.van-search{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--van-search-padding);background:var(--van-search-background)}.van-search__content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding-left:var(--van-padding-sm);background:var(--van-search-content-background);border-radius:var(--van-radius-sm)}.van-search__content--round{border-radius:var(--van-radius-max)}.van-search__label{padding:var(--van-search-label-padding);color:var(--van-search-label-color);font-size:var(--van-search-label-font-size);line-height:var(--van-search-input-height)}.van-search__field{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 var(--van-padding-xs) 0 0;height:var(--van-search-input-height);background-color:transparent}.van-search__field .van-field__left-icon{color:var(--van-search-left-icon-color)}.van-search--show-action{padding-right:0}.van-search input::-webkit-search-decoration,.van-search input::-webkit-search-cancel-button,.van-search input::-webkit-search-results-button,.van-search input::-webkit-search-results-decoration{display:none}.van-search__action{padding:var(--van-search-action-padding);color:var(--van-search-action-text-color);font-size:var(--van-search-action-font-size);line-height:var(--van-search-input-height);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.van-search__action:active{background-color:var(--van-active-color)}\n",document.head.appendChild(a);var x=e(o("search"),3),m=x[0],k=x[1],y=x[2],w=i({},r,{label:String,shape:l("square"),leftIcon:l("search"),clearable:s,actionText:String,background:String,showAction:Boolean}),_=u({name:m,props:w,emits:["blur","focus","clear","search","cancel","clickInput","clickLeftIcon","clickRightIcon","update:modelValue"],setup:function(e,n){var a=n.emit,o=n.slots,l=n.attrs,s=c(),u=d(),p=function(){o.action||(a("update:modelValue",""),a("cancel"))},x=function(n){13===n.keyCode&&(g(n),a("search",e.modelValue))},m=function(){return e.id||"".concat(s,"-input")},w=function(){if(o.label||e.label)return f("label",{class:k("label"),for:m()},[o.label?o.label():e.label])},_=function(){if(e.showAction){var n=e.actionText||y("cancel");return f("div",{class:k("action"),role:"button",tabindex:0,onClick:p},[o.action?o.action():n])}},I=function(e){return a("blur",e)},z=function(e){return a("focus",e)},S=function(e){return a("clear",e)},j=function(e){return a("clickInput",e)},A=function(e){return a("clickLeftIcon",e)},C=function(e){return a("clickRightIcon",e)},O=Object.keys(r);return v({focus:function(){var e;return null==(e=u.value)?void 0:e.focus()},blur:function(){var e;return null==(e=u.value)?void 0:e.blur()}}),function(){var n,r;return f("div",{class:k({"show-action":e.showAction}),style:{background:e.background}},[null==(n=o.left)?void 0:n.call(o),f("div",{class:k("content",e.shape)},[w(),(r=i({},l,b(e,O),{id:m()}),f(t,h({ref:u,type:"search",class:k("field"),border:!1,onBlur:I,onFocus:z,onClear:S,onKeypress:x,onClickInput:j,onClickLeftIcon:A,onClickRightIcon:C,"onUpdate:modelValue":function(e){return a("update:modelValue",e)}},r),b(o,["left-icon","right-icon"])))]),_()])}}});n("S",p(_))}}}))}();
