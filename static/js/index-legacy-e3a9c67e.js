!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a,u,l=[],i=!0,c=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;i=!1}else for(;!(i=(r=a.call(t)).done)&&(l.push(r.value),l.length!==n);i=!0);}catch(d){c=!0,o=d}finally{try{if(!i&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy-087f6cf3.js","./index-legacy-5790ee1b.js"],(function(n,t){"use strict";var r,o,a,u,l,i,c,d,p,f,s,m,h,b,g,v,y,x,k;return{setters:[function(e){r=e.a1,o=e.d,a=e.c5,u=e.w,l=e.cj,i=e.c6,c=e.p,d=e.a3,p=e.au,f=e.c9,s=e.a2,m=e.ax,h=e.a5,b=e.c,g=e.c7,v=e.m,y=e.a7},function(e){x=e.c,k=e.s}],execute:function(){var t=document.createElement("style");t.textContent=".van-checkbox-group--horizontal{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}\n",document.head.appendChild(t);var V=e(r("checkbox-group"),2),w=V[0],S=V[1],j={max:d,shape:p("round"),disabled:Boolean,iconSize:d,direction:String,modelValue:f(),checkedColor:String},A=Symbol(w),C=(n("s",o({name:w,props:j,emits:["change","update:modelValue"],setup:function(e,n){var t=n.emit,r=n.slots,o=a(A),d=o.children,p=o.linkChildren,f=function(e){return t("update:modelValue",e)};return u((function(){return e.modelValue}),(function(e){return t("change",e)})),l({toggleAll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"boolean"==typeof e&&(e={checked:e});var n=e,t=n.checked,r=n.skipDisabled,o=d.filter((function(e){return!!e.props.bindGroup&&(e.props.disabled&&r?e.checked.value:null!=t?t:!e.checked.value)})).map((function(e){return e.name}));f(o)}}),i((function(){return e.modelValue})),p({props:e,updateValue:f}),function(){var n;return c("div",{class:S([e.direction])},[null==(n=r.default)?void 0:n.call(r)])}}})),e(r("checkbox"),2)),G=C[0],O=C[1],I=s({},x,{shape:String,bindGroup:m}),z=o({name:G,props:I,emits:["change","update:modelValue"],setup:function(e,n){var t=n.emit,r=n.slots,o=h(A).parent,a=function(n){var t=e.name,r=o.props,a=r.max,u=r.modelValue.slice();if(n){a&&u.length>=+a||u.includes(t)||(u.push(t),e.bindGroup&&o.updateValue(u))}else{var l=u.indexOf(t);-1!==l&&(u.splice(l,1),e.bindGroup&&o.updateValue(u))}},d=b((function(){return o&&e.bindGroup?-1!==o.props.modelValue.indexOf(e.name):!!e.modelValue})),p=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!d.value;o&&e.bindGroup?a(n):t("update:modelValue",n)};return u((function(){return e.modelValue}),(function(e){return t("change",e)})),l({toggle:p,props:e,checked:d}),i((function(){return e.modelValue})),function(){return c(k,v({bem:O,role:"checkbox",parent:o,checked:d.value,onToggle:p},e),g(r,["default","icon"]))}}});n("C",y(z))}}}))}();
