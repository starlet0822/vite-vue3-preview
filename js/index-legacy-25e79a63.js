!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,i,r,s,l=[],c=!0,o=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(a=r.call(n)).done)&&(l.push(a.value),l.length!==t);c=!0);}catch(u){o=!0,i=u}finally{try{if(!c&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(o)throw i}}return l}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var n=document.createElement("style");n.innerHTML='@charset "UTF-8";[data-v-539127a5]:export{themeColor:var(--van-blue)}\n',document.head.appendChild(n),System.register(["./vant-legacy-c9ced230.js","./index-legacy-34f81ebb.js","./Image-legacy-b00b25fc.js","./vuex-legacy-125cfe16.js","./index-legacy-93e27d87.js","./vue-router-legacy-cae879a2.js","./datetime-legacy-201fc0bd.js","./index-legacy-72f845a7.js","./js-cookie-legacy-5f5cb1eb.js","./plugin-vue_export-helper-legacy-37b3dbd0.js","./@vue-legacy-39326993.js","./@vant-legacy-fcf8e23d.js","./normalize.css-legacy-9b0443a6.js","./amfe-flexible-legacy-e3938076.js","./@vueuse-legacy-715661ad.js","./lodash-es-legacy-72b1cdbe.js","./axios-legacy-10210e28.js","./qs-legacy-5895894e.js","./side-channel-legacy-2b88a05f.js","./get-intrinsic-legacy-39a148af.js","./has-symbols-legacy-d03493bf.js","./function-bind-legacy-aa6d88e2.js","./has-legacy-275d3594.js","./call-bind-legacy-628f04b5.js","./object-inspect-legacy-7c542a43.js","./@antv-legacy-a9dadf71.js","./tslib-legacy-238f19fa.js","./fecha-legacy-893f5c8d.js","./nprogress-legacy-f6e28caf.js","./vue3-hash-calendar-legacy-8dbb168e.js","./hammerjs-legacy-fd9fbe53.js","./dayjs-legacy-9ea22328.js"],(function(t){"use strict";var n,a,i,r,s,l,c,o,u,f,d,p,v,g,m,y,h,b,j,x,_,w,C,k,S,A,q,I,O,z,U,V,M,N,T,D,E;return{setters:[function(e){n=e.d,a=e.N,i=e.S,r=e.P,s=e.G,l=e.e,c=e.B},function(e){o=e._},function(e){u=e._},function(e){f=e.u},function(){},function(e){d=e.u},function(e){p=e._},function(e){v=e.p},function(e){g=e.a},function(e){m=e._},function(e){y=e.m,h=e.g,b=e.a,j=e._,x=e.b,_=e.r,w=e.ak,C=e.l,k=e.b7,S=e.al,A=e.a5,q=e.u,I=e.A,O=e.aI,z=e.t,U=e.F,V=e.aN,M=e.v,N=e.ai,T=e.aj,D=e.aP,E=e.C},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var F={class:"home-wrapper"},H={class:"main-content st-margin-top-10"},P={class:"st-flex-center st-flex-column st-padding-20 st-bg-white van-hairline--top"},B={class:"st-tip"},G={class:"st-color-blue"},L={class:"description"},$={class:"st-tip"},J={key:0,class:"st-padding-10 st-font-12"},K={class:"st-font-12 st-line-1"},Q={key:0,class:"st-padding-10 st-font-12"},R={class:"st-font-12 st-line-1"},W={class:"copyright st-flex-center st-tip st-padding-10"},X=y({name:"Home"}),Y=Object.assign(X,{setup:function(t){var m=g.get("darkMode")||"light",y={dependencies:{"@amap/amap-jsapi-loader":"^1.0.1","@antv/f2":"^3.8.10","@ckpack/vue-color":"^1.4.1","@vitejs/plugin-legacy":"^1.6.4","@vueuse/core":"^7.6.0","@zxing/library":"^0.19.2","amfe-flexible":"^2.2.1",aplayer:"^1.10.1",autoprefixer:"^10.4.0",axios:"^0.26.0",dayjs:"^1.10.7","decimal.js":"^10.4.3",hammerjs:"^2.0.8","html5-qrcode":"^2.3.7","image-conversion":"^2.1.1","intro.js":"^6.0.0","js-cookie":"^3.0.1",jsbarcode:"^3.11.5",jsencrypt:"3.3.1","lodash-es":"^4.17.21",mitt:"^3.0.0","normalize.css":"^8.0.1",nprogress:"^0.2.0","pdfjs-dist":"^2.9.359",pinia:"^2.0.33",qrcode:"^1.5.1",qs:"^6.10.1","resize-observer-polyfill":"^1.5.1",signature_pad:"^4.1.5",vant:"^4.0.10","vite-plugin-compression":"^0.4.0","vite-plugin-require":"^1.1.10",vue:"^3.2.16","vue-drag-resize":"^2.0.3","vue-i18n":"^9.1.9","vue-pdf-embed":"^1.1.5","vue-router":"^4.0.5","vue-virtual-scroller":"^2.0.0-beta.8","vue3-colorpicker":"^2.0.4","vue3-hash-calendar":"^1.1.3","vue3-lazy":"^1.0.0-alpha.1",vuedraggable:"^4.1.0",vuex:"^4.0.2","webrtc-adapter":"^8.2.1",xgplayer:"^2.31.4"},devDependencies:{"@types/node":"^16.11.6","@vitejs/plugin-vue":"^1.9.3","@vitejs/plugin-vue-jsx":"^1.3.3","cross-env":"^7.0.3",eslint:"^8.7.0","eslint-config-prettier":"^8.3.0","eslint-plugin-prettier":"^4.0.0","eslint-plugin-vue":"^8.3.0",less:"^4.1.2","less-loader":"^10.2.0","postcss-pxtorem":"^6.0.0",prettier:"^2.5.1",sass:"^1.43.4","sass-loader":"^12.6.0","unplugin-auto-import":"^0.5.11","unplugin-vue-components":"^0.24.0",vite:"^2.6.4","vite-plugin-html":"^3.1.0","vite-plugin-style-import":"^1.2.1","vite-plugin-svg-icons":"^1.0.5","vite-plugin-vconsole":"^1.1.1","vite-plugin-vue-setup-extend":"^0.4.0","vue-global-api":"^0.4.1"},name:"Vite-vue3-demo",version:"0.1.0",author:"吴小星 <2411147266@qq.com>",description:"该项目是一个基于Vue3、Vite、 Vant 、Sass搭建的移动端，集成了一些h5开发常用的解决方案。"},X="2023-07-12 20:52:06",Y=y.dependencies,Z=y.devDependencies,ee=y.name,te=y.version,ne=y.author,ae=y.description;h().appContext,d();f().getters.userInfo;for(var ie=b({schema:[],devSchema:[]}),re=j(ie),se=re.schema,le=re.devSchema,ce=0,oe=Object.entries(Y);ce<oe.length;ce++){var ue=e(oe[ce],2),fe=ue[0],de=ue[1];ie.schema.push({text:fe,value:de,lineClamp:!1})}for(var pe=0,ve=Object.entries(Z);pe<ve.length;pe++){var ge=e(ve[pe],2),me=ge[0],ye=ge[1];ie.devSchema.push({text:me,value:ye})}x((function(){})),_(!1);var he=_("个人搭建该项目是用于纯前端开发、记录学习、编写demo，后续空闲时继续编写、优化其他功能。完善后再开源！");return function(e,t){var f=u,d=o,g=D("router-link"),y=n,h=a,b=i,j=r,x=s,_=l,Y=c,Z=E("tap"),ie=E("waves");return O(),w("div",F,[C(b,{"offset-top":0,class:""},{default:k((function(){return[C(y,{center:""},{title:k((function(){return[C(f,z({width:30,height:30},{round:"",src:"https://s4.ax1x.com/2022/03/02/b3NS0A.jpg"}),null,16)]})),"right-icon":k((function(){return[C(g,{to:"/setting"},{default:k((function(){return[C(d,{name:"setting",class:"st-color-blue st-font-16 st-padding-right-10"})]})),_:1})]})),_:1}),C(h,null,{default:k((function(){return[I(A(q(he)),1)]})),_:1})]})),_:1}),S("main",H,[C(y,{class:"",border:!1,title:"关于项目"}),S("div",P,[S("h3",null,A(q(ee))+"(v"+A(q(te))+")",1),S("div",B,[I(" 最后构建时间："+A(q(X))+"  ",1),S("span",G,A(q(p)(q(X))),1)]),S("div",L,A(q(ae)),1),S("div",$,"项目作者："+A(q(ne)),1)]),C(y,{class:"st-margin-top-10",border:!1,title:"生产环境依赖"}),C(_,{"column-num":3},{default:k((function(){return[(O(!0),w(U,null,V(q(se),(function(e,t){return M((O(),N(x,{key:t},{default:k((function(){return[C(j,{show:e.lineClamp,"onUpdate:show":function(t){return e.lineClamp=t},placement:"bottom-start",theme:q(m)},{reference:k((function(){return[M((O(),w("div",K,[S("p",null,A(e.text)+" "+A(e.value),1)])),[[Z,{cb:function(){}}]])]})),default:k((function(){return[e.lineClamp?(O(),w("div",J,A(e.text)+" "+A(e.value),1)):T("",!0)]})),_:2},1032,["show","onUpdate:show","theme"])]})),_:2},1024)),[[ie]])})),128))]})),_:1}),C(y,{class:"st-margin-top-10",border:!1,title:"开发环境依赖"}),C(_,{"column-num":3},{default:k((function(){return[(O(!0),w(U,null,V(q(le),(function(e,t){return M((O(),N(x,{key:t},{default:k((function(){return[C(j,{show:e.lineClamp,"onUpdate:show":function(t){return e.lineClamp=t},placement:"bottom-start",theme:q(m)},{reference:k((function(){return[M((O(),w("div",R,[S("p",null,A(e.text)+" "+A(e.value),1)])),[[Z,{cb:function(){}}]])]})),default:k((function(){return[e.lineClamp?(O(),w("div",Q,A(e.text)+" "+A(e.value),1)):T("",!0)]})),_:2},1032,["show","onUpdate:show","theme"])]})),_:2},1024)),[[ie]])})),128))]})),_:1}),S("div",W," Copyright ©2021 "+A(q(ee)),1)]),C(Y,{bottom:q(v)(80)},null,8,["bottom"])])}}});t("default",m(Y,[["__scopeId","data-v-539127a5"]]))}}}))}();
