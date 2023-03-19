!function(){function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var i,n,a,l,o=[],c=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(i=a.call(r)).done)&&(o.push(i.value),o.length!==t);c=!0);}catch(f){u=!0,n=f}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw n}}return o}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}var r=document.createElement("style");r.innerHTML='@charset "UTF-8";[data-v-4cf3f101]:export{themeColor:var(--van-blue)}.time-picker[data-v-4cf3f101]{overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#fff;padding:.26667rem 1.06667rem}.time-picker .time-wraper[data-v-4cf3f101]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;overflow-x:auto}.time-picker .time-bar[data-v-4cf3f101]:not(:last-child){margin-right:.21333rem}.time-picker .time-bar .time-text[data-v-4cf3f101]{font-size:.32rem}.time-picker .time-full[data-v-4cf3f101]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.time-picker .time-block[data-v-4cf3f101]{width:.8rem;height:1.06667rem;border-radius:.05333rem;line-height:1.06667rem;text-align:center;cursor:pointer;background-color:#86909c;-webkit-transition:all .2s ease-in;-o-transition:all .2s ease-in;transition:all .2s ease-in}.time-picker .time-block[data-v-4cf3f101]:not(:last-child){margin-bottom:.08rem}.time-picker .time-block--selected[data-v-4cf3f101]{background-color:var(--van-blue)}.time-picker .time-block--disabled[data-v-4cf3f101]{opacity:.5;cursor:not-allowed}.time-picker .time-block--readonly[data-v-4cf3f101]{cursor:default}\n',document.head.appendChild(r),System.register(["./plugin-vue_export-helper-legacy-37b3dbd0.js","./@vue-legacy-39326993.js","./vant-legacy-3da83ae3.js","./index-legacy-d5bdb900.js","./@vant-legacy-fcf8e23d.js","./vue-router-legacy-cae879a2.js"],(function(t){"use strict";var r,i,n,a,l,o,c,u,f,m,s,d,b,p,v,y,k;return{setters:[function(e){r=e._},function(e){i=e.m,n=e.a,a=e.r,l=e.b,o=e.aI,c=e.ak,u=e.al,f=e.F,m=e.aN,s=e.a5,d=e.a2,b=e.u,p=e._,v=e.l},function(e){y=e.d},function(e){k=e._},function(){},function(){}],execute:function(){var x={class:"time-picker"},h={class:"time-wraper no-scrollbar"},g={class:"time-text"},w={class:"time-full"},S=["data-val","data-idx","onClick"],j=i({name:"TimePicker"}),M=Object.assign(j,{props:{modelValue:{type:Array,default:function(){return[]}},minHour:{type:[Number,String],default:"0"},maxHour:{type:[Number,String],default:"23"},visibleNum:{type:[Number,String],default:"8"},timeStep:{type:[Number,String],default:"30",validator:function(e){return 60%e==0}},readonly:Boolean},emits:["select"],setup:function(t,r){var i=r.emit,p=t,v=n([]),y=n([]),k=n([]),j=a([]),M=function(e){for(var t=[],r=1;r<=60/p.timeStep;r++)t.push({value:60*e+p.timeStep*r,selected:!1,disabled:!1});return t};l((function(){A()}));var _=function(e){return Math.floor(e/60)>=10?Math.floor(e/60):"0"+Math.floor(e/60)},A=function(){for(var e=[],t=+p.minHour;t<=+p.maxHour;t++){var r={time:"",blocks:M(t)};r.time=60*t,e.push(r)}j.value=e},N=function(t){var r=e(k.sort((function(e,t){return e-t})),2),n=r[0],a=r[1];y=function(e,t){var r="",i="",n="",a="";return e&&t?(i=_(e-p.timeStep),r=_(t),n=i+":"+((e-p.timeStep)%60==0?"00":Math.round(60*((e-p.timeStep)/60-i))),a=r+":"+(t%60==0?"00":Math.round(60*(t/60-r)))):(i=_(e-p.timeStep),r=_(e),n=i+":"+((e-p.timeStep)%60==0?"00":Math.round(60*((e-p.timeStep)/60-i))),a=r+":"+(e%60==0?"00":Math.round(60*(e/60-r)))),[n,a]}(n,a),j.value.forEach((function(e){e.blocks.forEach((function(e){n&&(e.value===n?e.selected=!0:e.selected=!1),n&&a&&e.value>=n&&e.value<=a&&(e.selected=!0)}))})),i("select",y)};return function(e,r){return o(),c("div",x,[u("div",h,[(o(!0),c(f,null,m(b(j),(function(e,r){return o(),c("div",{key:e.time,class:"time-bar"},[u("span",g,s(_(e.time)+":00"),1),u("div",w,[(o(!0),c(f,null,m(e.blocks,(function(i,n){return o(),c("div",{key:i.value,"data-val":i.value,"data-idx":60/t.timeStep*r+n,class:d(["time-block",{"time-block--selected":i.selected,"time-block--disabled":i.disabled,"time-block--readonly":t.readonly}]),onClick:function(t){return function(e,t,r){if(p.readonly)return!1;0===k.length||k.length<2?k.includes(t.value)||(k.push(t.value),v.push(e)):(k=[t.value],v=[e]),N()}(e,i)}},null,10,S)})),128))])])})),128))])])}}}),_=r(M,[["__scopeId","data-v-4cf3f101"]]),A={class:"time-range-picker"};t("default",{__name:"time-range-picker",setup:function(e){var t=n({time3:"",time1:"",time2:""}),r=p(t),i=r.time1,a=r.time2,l=r.time3,u=function(e,t){var r=e[0]+" ~ "+e[1];"time1"===t&&(i.value=r),"time2"===t&&(a.value=r),"time3"===t&&(l.value=r)};return function(e,t){var r=k,n=y,f=_;return o(),c("div",A,[v(r),v(n,{title:"完整时间",value:b(i),border:!1},null,8,["value"]),v(f,{onSelect:t[0]||(t[0]=function(e){return u(e,"time1")})}),v(n,{title:"自定义时间范围",value:b(a),border:!1},null,8,["value"]),v(f,{"min-hour":"9","max-hour":"18",onSelect:t[1]||(t[1]=function(e){return u(e,"time2")})}),v(n,{title:"自定义时间间隔",value:b(l),border:!1},null,8,["value"]),v(f,{"min-hour":"11","max-hour":"22","time-step":"15",onSelect:t[2]||(t[2]=function(e){return u(e,"time3")})}),v(n,{title:"该组件为自研组件，后续提供更灵活定制选项~"})])}}})}}}))}();
