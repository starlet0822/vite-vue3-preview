!function(){function a(a,n){return function(a){if(Array.isArray(a))return a}(a)||function(a,r){var n=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=n){var t,e,o,i,l=[],v=!0,g=!1;try{if(o=(n=n.call(a)).next,0===r){if(Object(n)!==n)return;v=!1}else for(;!(v=(t=o.call(n)).done)&&(l.push(t.value),l.length!==r);v=!0);}catch(c){g=!0,e=c}finally{try{if(!v&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(g)throw e}}return l}}(a,n)||function(a,n){if(!a)return;if("string"==typeof a)return r(a,n);var t=Object.prototype.toString.call(a).slice(8,-1);"Object"===t&&a.constructor&&(t=a.constructor.name);if("Map"===t||"Set"===t)return Array.from(a);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(a,n)}(a,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(a,r){(null==r||r>a.length)&&(r=a.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=a[n];return t}System.register(["./index-legacy-087f6cf3.js"],(function(r,n){"use strict";var t,e,o,i,l,v,g,c,d;return{setters:[function(a){t=a.a1,e=a.d,o=a.p,i=a.T,l=a.ax,v=a.au,g=a.cD,c=a.P,d=a.a7}],execute:function(){var n=document.createElement("style");n.textContent=':root{--van-tag-padding: 0 var(--van-padding-base);--van-tag-text-color: var(--van-white);--van-tag-font-size: var(--van-font-size-sm);--van-tag-radius: .05333rem;--van-tag-line-height: .42667rem;--van-tag-medium-padding: .05333rem .16rem;--van-tag-large-padding: var(--van-padding-base) var(--van-padding-xs);--van-tag-large-radius: var(--van-radius-md);--van-tag-large-font-size: var(--van-font-size-md);--van-tag-round-radius: var(--van-radius-max);--van-tag-danger-color: var(--van-danger-color);--van-tag-primary-color: var(--van-primary-color);--van-tag-success-color: var(--van-success-color);--van-tag-warning-color: var(--van-warning-color);--van-tag-default-color: var(--van-gray-6);--van-tag-plain-background: var(--van-background-2)}.van-tag{position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:var(--van-tag-padding);color:var(--van-tag-text-color);font-size:var(--van-tag-font-size);line-height:var(--van-tag-line-height);border-radius:var(--van-tag-radius)}.van-tag--default{background:var(--van-tag-default-color)}.van-tag--default.van-tag--plain{color:var(--van-tag-default-color)}.van-tag--danger{background:var(--van-tag-danger-color)}.van-tag--danger.van-tag--plain{color:var(--van-tag-danger-color)}.van-tag--primary{background:var(--van-tag-primary-color)}.van-tag--primary.van-tag--plain{color:var(--van-tag-primary-color)}.van-tag--success{background:var(--van-tag-success-color)}.van-tag--success.van-tag--plain{color:var(--van-tag-success-color)}.van-tag--warning{background:var(--van-tag-warning-color)}.van-tag--warning.van-tag--plain{color:var(--van-tag-warning-color)}.van-tag--plain{background:var(--van-tag-plain-background);border-color:currentColor}.van-tag--plain:before{position:absolute;top:0;right:0;bottom:0;left:0;border:.02667rem solid;border-color:inherit;border-radius:inherit;content:"";pointer-events:none}.van-tag--medium{padding:var(--van-tag-medium-padding)}.van-tag--large{padding:var(--van-tag-large-padding);font-size:var(--van-tag-large-font-size);border-radius:var(--van-tag-large-radius)}.van-tag--mark{border-radius:0 var(--van-tag-round-radius) var(--van-tag-round-radius) 0}.van-tag--mark:after{display:block;width:.05333rem;content:""}.van-tag--round{border-radius:var(--van-tag-round-radius)}.van-tag__close{margin-left:.05333rem}\n',document.head.appendChild(n);var u=a(t("tag"),2),s=u[0],p=u[1],f={size:String,mark:Boolean,show:l,type:v("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean},m=e({name:s,props:f,emits:["close"],setup:function(a,r){var n=r.slots,t=r.emit,e=function(a){a.stopPropagation(),t("close",a)},l=function(){var r,t=a.type,i=a.mark,l=a.plain,v=a.round,d=a.size,u=a.closeable,s={mark:i,plain:l,round:v};d&&(s[d]=d);var f=u&&o(c,{name:"cross",class:[p("close"),g],onClick:e},null);return o("span",{style:a.plain?{color:a.textColor||a.color,borderColor:a.color}:{color:a.textColor,background:a.color},class:p([s,t])},[null==(r=n.default)?void 0:r.call(n),f])};return function(){return o(i,{name:a.closeable?"van-fade":void 0},{default:function(){return[a.show?l():null]}})}}});r("T",d(m))}}}))}();
