!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";[data-v-28ea18b2]:export{themeColor:var(--van-blue)}.pdf .pdf-tools[data-v-28ea18b2]{height:1.6rem}.pdf .pdf-box[data-v-28ea18b2]{width:100%;overflow:auto}\n',document.head.appendChild(e),System.register(["./vant-legacy-2f83c4d8.js","./index-legacy-e0c41f67.js","./index-legacy-1be211cc.js","./vue-pdf-embed-legacy-ffe2a0b7.js","./plugin-vue_export-helper-legacy-37b3dbd0.js","./@vue-legacy-703c3bcb.js","./@vant-legacy-bfdd957e.js","./vue-router-legacy-c4e0954e.js","./@antv-legacy-95b7be67.js","./tslib-legacy-238f19fa.js","./fecha-legacy-893f5c8d.js","./vue-legacy-ecdfe711.js"],(function(e){"use strict";var n,t,a,u,o,c,l,r,f,i,s,d,p,v,g,b,m,y,_,x,h,j,P,F,V,w,C,k;return{setters:[function(e){n=e.q,t=e.r,a=e.t,u=e.c,o=e.s,c=e.f,l=e.l,r=e.R,f=e.B},function(e){i=e._},function(e){s=e._},function(e){d=e.V},function(e){p=e._},function(e){v=e.r,g=e.b,b=e.s,m=e.B,y=e.F,_=e.D,x=e.E,h=e.u,j=e.f,P=e.v,F=e.aR,V=e.aQ,w=e.H,C=e.I,k=e.l},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var D={class:"pdf"},R=function(e){return F("data-v-28ea18b2"),e=e(),V(),e}((function(){return w("span",{class:"st-font-14"},C("显示全部"),-1)})),I=p({__name:"PDF",setup:function(e,f){var i=f.expose,s=v(null),p=v("http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf"),F=v(1),V=v(0);v("1");var w=v(!1),C=function(e){F.value=e?0:1};i({onPrint:function(){s.value.print()}}),g((function(){k()}));var k=function(){n({message:"加载中..."})},I=function(){u(),V.value=s.value.pageCount},U=function(){o("打印失败！")},B=function(){u(),o("加载失败！")};return function(e,n){var u=t,o=c,f=l,i=a,v=r;return b(),m("div",D,[y("",!0),_(v,{type:"flex",align:"center",class:"pdf-tools st-bg-white van-hairline--bottom st-padding-10"},{default:x((function(){return[_(o,{span:"8"},{default:x((function(){return[_(u,{modelValue:h(w),"onUpdate:modelValue":n[1]||(n[1]=function(e){return j(w)?w.value=e:null}),onChange:C},{default:x((function(){return[R]})),_:1},8,["modelValue"])]})),_:1}),h(w)?y("",!0):(b(),P(o,{key:0,span:"16"},{default:x((function(){return[_(i,{modelValue:h(F),"onUpdate:modelValue":n[2]||(n[2]=function(e){return j(F)?F.value=e:null}),"page-count":h(V),mode:"simple"},{"prev-text":x((function(){return[_(f,{name:"arrow-left"})]})),"next-text":x((function(){return[_(f,{name:"arrow"})]})),_:1},8,["modelValue","page-count"])]})),_:1}))]})),_:1}),_(h(d),{ref_key:"pdfRef",ref:s,class:"pdf-box",page:h(F),source:h(p),onRendered:I,onPrintingFailed:U,onLoadingFailed:B},null,8,["page","source"])])}}},[["__scopeId","data-v-28ea18b2"]]),U={class:"layout__page"},B={class:"layout__body st-margin-top-10"},E=k({name:"PDF"});e("default",Object.assign(E,{setup:function(e){var n=v(null),t=function(){n.value.onPrint()};return function(e,a){var u=s,o=i,c=f;return b(),m("div",U,[_(o,null,{right:x((function(){return[_(u,{name:"print","class-name":"st-color-blue st-font-16",onClick:t})]})),_:1}),w("div",B,[_(I,{ref_key:"pdf",ref:n},null,512)]),_(c)])}}}))}}}))}();