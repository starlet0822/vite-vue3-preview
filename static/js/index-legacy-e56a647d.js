!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,l,o=[],s=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(c){u=!0,a=c}finally{try{if(!s&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-9be2ba9e.js","./index-legacy-087f6cf3.js","./index-legacy-30a55ce0.js","./calendar-legacy-13009040.js","./plugin-vue_export-helper-legacy-c6aa7c23.js","./index-legacy-c96a2168.js","./index-legacy-a26d54ee.js","./use-placeholder-legacy-59194bf0.js","./use-route-legacy-63dbfdfa.js"],(function(t,n){"use strict";var r,a,i,l,o,s,u,c,p,v,d,g,f,m;return{setters:[function(e){r=e._},function(e){a=e.d,i=e.r,l=e.t,o=e.g,s=e.q,u=e.f,c=e.x,p=e.p,v=e.u,d=e.y},function(e){g=e.C},null,function(e){f=e._},function(e){m=e.I},null,null,null],execute:function(){var n=document.createElement("style");n.textContent='@charset "UTF-8";[data-v-31baa608]:export{themeColor:var(--van-blue)}.app-info .info[data-v-31baa608]{margin:1.06667rem auto;text-align:center}.app-info .copyright[data-v-31baa608]{text-align:center;font-size:.32rem;color:#999;margin:1.28rem .64rem}.app-info .copyright>p[data-v-31baa608]{line-height:2}\n',document.head.appendChild(n);var h={class:"info"},y={class:"app-name"},j={class:"st-tip"},b={class:"copyright"},x=a({name:"AppInfo"});t("default",f(Object.assign(x,{setup:function(t){var n={dependencies:{"@amap/amap-jsapi-loader":"^1.0.1","@antv/f2":"^3.8.10","@ckpack/vue-color":"^1.4.1","@popperjs/core":"^2.11.8","@vant/area-data":"^1.4.1","@vitejs/plugin-legacy":"^1.6.4","@vueuse/core":"^7.6.0","@zxing/library":"^0.19.2","amfe-flexible":"^2.2.1",aplayer:"^1.10.1",autoprefixer:"^10.4.0",axios:"^0.26.0",dayjs:"^1.10.7","decimal.js":"^10.4.3",hammerjs:"^2.0.8","html5-qrcode":"^2.3.7","image-conversion":"^2.1.1","intro.js":"^6.0.0","js-cookie":"^3.0.1",jsbarcode:"^3.11.5",jsencrypt:"3.3.1","lodash-es":"^4.17.21",mitt:"^3.0.0",mockjs:"^1.1.0","normalize.css":"^8.0.1",nprogress:"^0.2.0","pdfjs-dist":"^2.9.359",pinia:"^2.0.33",qrcode:"^1.5.1",qs:"^6.10.1","resize-observer-polyfill":"^1.5.1",signature_pad:"^4.1.5","v-calendar":"^3.0.3",vant:"^4.6.3","vite-plugin-compression":"^0.4.0","vite-plugin-require":"^1.1.10",vue:"^3.2.16","vue-drag-resize":"^2.0.3","vue-i18n":"^9.1.9","vue-page-stack-router":"^3.2.6","vue-pdf-embed":"^1.1.5","vue-router":"^4.0.5","vue-virtual-scroller":"^2.0.0-beta.8","vue3-colorpicker":"^2.0.4","vue3-hash-calendar":"^1.1.3","vue3-lazy":"^1.0.0-alpha.1",vuedraggable:"^4.1.0",vuex:"^4.0.2","webrtc-adapter":"^8.2.1",xgplayer:"^2.31.4"},devDependencies:{"@types/node":"^16.11.6","@vitejs/plugin-vue":"^1.9.3","@vitejs/plugin-vue-jsx":"^1.3.3","cross-env":"^7.0.3",eslint:"^8.7.0","eslint-config-prettier":"^8.3.0","eslint-plugin-prettier":"^4.0.0","eslint-plugin-vue":"^8.3.0",less:"^4.1.2","less-loader":"^10.2.0","postcss-pxtorem":"^6.0.0",prettier:"^2.5.1",sass:"^1.43.4","sass-loader":"^12.6.0","unplugin-auto-import":"^0.5.11","unplugin-vue-components":"^0.24.0",vite:"^4.3.9","vite-plugin-html":"^3.1.0","vite-plugin-mock":"2.9.6","vite-plugin-style-import":"^1.2.1","vite-plugin-svg-icons":"^1.0.5","vite-plugin-vconsole":"^1.1.1","vite-plugin-vue-setup-extend":"^0.4.0","vue-global-api":"^0.4.1"},name:"Vite-vue3-demo",version:"0.1.0",author:"吴小星 <2411147266@qq.com>",description:"该项目是一个基于Vue3、Vite、 Vant 、Sass搭建的移动端，集成了一些h5开发常用的解决方案。"},a="2023-09-16 12:26:28",f=n.dependencies,x=n.devDependencies,k=n.name,S=n.author,q=i({schema:[],devSchema:[]});l(q);for(var w=0,A=Object.entries(f);w<A.length;w++){var C=e(A[w],2),O=C[0],_=C[1];q.schema.push({text:O,value:_,lineClamp:!1})}for(var z=0,I=Object.entries(x);z<I.length;z++){var V=e(I[z],2),D=V[0],E=V[1];q.devSchema.push({text:D,value:E})}return function(e,t){var n=m,i=g,l=r;return u(),o(l,{class:"app-info"},{default:s((function(){return[c("div",h,[p(n,{src:v("/vite-vue3-preview/static/png/logo-03d6d6da.png"),width:"4em",height:"4em"},null,8,["src"]),c("h3",y,d(v(k)),1),c("div",j,"最后构建时间："+d(v(a)),1)]),p(i,{title:"更新日志","is-link":!1}),p(i,{title:"服务协议","is-link":!1}),p(i,{title:"应用简介","is-link":"",to:"/app-desc"}),c("footer",b,[c("p",null,d(v(S)),1),c("p",null,"Copyright © 2022 "+d(v(k)),1)])]})),_:1})}}}),[["__scopeId","data-v-31baa608"]]))}}}))}();
