!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n,l){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var l=t[Symbol.toPrimitive];if(void 0!==l){var f=l.call(t,n||"default");if("object"!==e(f))return f;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[n]=l,t}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,f,a,i,o=[],r=!0,x=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;r=!1}else for(;!(r=(l=a.call(n)).done)&&(o.push(l.value),o.length!==t);r=!0);}catch(c){x=!0,f=c}finally{try{if(!r&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(x)throw f}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}System.register(["./index-legacy-087f6cf3.js"],(function(e,l){"use strict";var f,a,i,o,r,x,c,s,b,u,w;return{setters:[function(e){f=e.a1,a=e.d,i=e.c5,o=e.c,r=e.p,x=e.au,c=e.ax,s=e.av,b=e.a5,u=e.a3,w=e.a7}],execute:function(){var l=document.createElement("style");l.textContent=".van-row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.van-row--nowrap{-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.van-row--justify-center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.van-row--justify-end{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.van-row--justify-space-between{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.van-row--justify-space-around{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.van-row--align-center{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.van-row--align-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}.van-col{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:.02667rem}.van-col--1{-webkit-box-flex:0;-webkit-flex:0 0 4.16666667%;-ms-flex:0 0 4.16666667%;flex:0 0 4.16666667%;max-width:4.16666667%}.van-col--offset-1{margin-left:4.16666667%}.van-col--2{-webkit-box-flex:0;-webkit-flex:0 0 8.33333333%;-ms-flex:0 0 8.33333333%;flex:0 0 8.33333333%;max-width:8.33333333%}.van-col--offset-2{margin-left:8.33333333%}.van-col--3{-webkit-box-flex:0;-webkit-flex:0 0 12.5%;-ms-flex:0 0 12.5%;flex:0 0 12.5%;max-width:12.5%}.van-col--offset-3{margin-left:12.5%}.van-col--4{-webkit-box-flex:0;-webkit-flex:0 0 16.66666667%;-ms-flex:0 0 16.66666667%;flex:0 0 16.66666667%;max-width:16.66666667%}.van-col--offset-4{margin-left:16.66666667%}.van-col--5{-webkit-box-flex:0;-webkit-flex:0 0 20.83333333%;-ms-flex:0 0 20.83333333%;flex:0 0 20.83333333%;max-width:20.83333333%}.van-col--offset-5{margin-left:20.83333333%}.van-col--6{-webkit-box-flex:0;-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.van-col--offset-6{margin-left:25%}.van-col--7{-webkit-box-flex:0;-webkit-flex:0 0 29.16666667%;-ms-flex:0 0 29.16666667%;flex:0 0 29.16666667%;max-width:29.16666667%}.van-col--offset-7{margin-left:29.16666667%}.van-col--8{-webkit-box-flex:0;-webkit-flex:0 0 33.33333333%;-ms-flex:0 0 33.33333333%;flex:0 0 33.33333333%;max-width:33.33333333%}.van-col--offset-8{margin-left:33.33333333%}.van-col--9{-webkit-box-flex:0;-webkit-flex:0 0 37.5%;-ms-flex:0 0 37.5%;flex:0 0 37.5%;max-width:37.5%}.van-col--offset-9{margin-left:37.5%}.van-col--10{-webkit-box-flex:0;-webkit-flex:0 0 41.66666667%;-ms-flex:0 0 41.66666667%;flex:0 0 41.66666667%;max-width:41.66666667%}.van-col--offset-10{margin-left:41.66666667%}.van-col--11{-webkit-box-flex:0;-webkit-flex:0 0 45.83333333%;-ms-flex:0 0 45.83333333%;flex:0 0 45.83333333%;max-width:45.83333333%}.van-col--offset-11{margin-left:45.83333333%}.van-col--12{-webkit-box-flex:0;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.van-col--offset-12{margin-left:50%}.van-col--13{-webkit-box-flex:0;-webkit-flex:0 0 54.16666667%;-ms-flex:0 0 54.16666667%;flex:0 0 54.16666667%;max-width:54.16666667%}.van-col--offset-13{margin-left:54.16666667%}.van-col--14{-webkit-box-flex:0;-webkit-flex:0 0 58.33333333%;-ms-flex:0 0 58.33333333%;flex:0 0 58.33333333%;max-width:58.33333333%}.van-col--offset-14{margin-left:58.33333333%}.van-col--15{-webkit-box-flex:0;-webkit-flex:0 0 62.5%;-ms-flex:0 0 62.5%;flex:0 0 62.5%;max-width:62.5%}.van-col--offset-15{margin-left:62.5%}.van-col--16{-webkit-box-flex:0;-webkit-flex:0 0 66.66666667%;-ms-flex:0 0 66.66666667%;flex:0 0 66.66666667%;max-width:66.66666667%}.van-col--offset-16{margin-left:66.66666667%}.van-col--17{-webkit-box-flex:0;-webkit-flex:0 0 70.83333333%;-ms-flex:0 0 70.83333333%;flex:0 0 70.83333333%;max-width:70.83333333%}.van-col--offset-17{margin-left:70.83333333%}.van-col--18{-webkit-box-flex:0;-webkit-flex:0 0 75%;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.van-col--offset-18{margin-left:75%}.van-col--19{-webkit-box-flex:0;-webkit-flex:0 0 79.16666667%;-ms-flex:0 0 79.16666667%;flex:0 0 79.16666667%;max-width:79.16666667%}.van-col--offset-19{margin-left:79.16666667%}.van-col--20{-webkit-box-flex:0;-webkit-flex:0 0 83.33333333%;-ms-flex:0 0 83.33333333%;flex:0 0 83.33333333%;max-width:83.33333333%}.van-col--offset-20{margin-left:83.33333333%}.van-col--21{-webkit-box-flex:0;-webkit-flex:0 0 87.5%;-ms-flex:0 0 87.5%;flex:0 0 87.5%;max-width:87.5%}.van-col--offset-21{margin-left:87.5%}.van-col--22{-webkit-box-flex:0;-webkit-flex:0 0 91.66666667%;-ms-flex:0 0 91.66666667%;flex:0 0 91.66666667%;max-width:91.66666667%}.van-col--offset-22{margin-left:91.66666667%}.van-col--23{-webkit-box-flex:0;-webkit-flex:0 0 95.83333333%;-ms-flex:0 0 95.83333333%;flex:0 0 95.83333333%;max-width:95.83333333%}.van-col--offset-23{margin-left:95.83333333%}.van-col--24{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.van-col--offset-24{margin-left:100%}\n",document.head.appendChild(l);var m=n(f("row"),2),v=m[0],d=m[1],p=Symbol(v),k={tag:x("div"),wrap:c,align:String,gutter:s(0),justify:String},g=a({name:v,props:k,setup:function(e,n){var l=n.slots,f=i(p),a=f.children,x=f.linkChildren,c=o((function(){var e=[[]],t=0;return a.forEach((function(n,l){(t+=Number(n.span))>24?(e.push([l]),t-=24):e[e.length-1].push(l)})),e})),s=o((function(){var t=Number(e.gutter),n=[];return t?(c.value.forEach((function(e){var l=t*(e.length-1)/e.length;e.forEach((function(e,f){if(0===f)n.push({right:l});else{var a=t-n[e-1].right,i=l-a;n.push({left:a,right:i})}}))})),n):n}));return x({spaces:s}),function(){var n,f=e.tag,a=e.wrap,i=e.align,o=e.justify;return r(f,{class:d((n={},t(n,"align-".concat(i),i),t(n,"justify-".concat(o),o),t(n,"nowrap",!a),n))},{default:function(){var e;return[null==(e=l.default)?void 0:e.call(l)]}})}}}),y=n(f("col"),2),h=y[0],j=y[1],S={tag:x("div"),span:s(0),offset:u},A=a({name:h,props:S,setup:function(e,n){var l=n.slots,f=b(p),a=f.parent,i=f.index,x=o((function(){if(a){var e=a.spaces;if(e&&e.value&&e.value[i.value]){var t=e.value[i.value],n=t.left,l=t.right;return{paddingLeft:n?"".concat(n,"px"):null,paddingRight:l?"".concat(l,"px"):null}}}}));return function(){var n,f=e.tag,a=e.span,i=e.offset;return r(f,{style:x.value,class:j((n={},t(n,a,a),t(n,"offset-".concat(i),i),n))},{default:function(){var e;return[null==(e=l.default)?void 0:e.call(l)]}})}}});e("C",w(A)),e("R",w(g))}}}))}();
