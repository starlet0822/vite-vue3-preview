!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";[data-v-5e7c80a6]:export{themeColor:#1c71fb}.layout__page .btn-list[data-v-5e7c80a6]{margin:.26667rem}.layout__page .btn-list .van-button[data-v-5e7c80a6]{margin-bottom:.26667rem}.layout__page .asider-btn[data-v-5e7c80a6]{position:fixed;right:.53333rem;bottom:1.6rem}.layout__page .list[data-v-5e7c80a6]{margin:.42667rem}.layout__page .list-item[data-v-5e7c80a6]{height:1.17333rem;line-height:1.17333rem;text-align:center}\n',document.head.appendChild(e),System.register(["./vant-legacy-74d1c911.js","./index-legacy-e23b6c09.js","./plugin-vue_export-helper-legacy-37b3dbd0.js","./@vue-legacy-39326993.js","./@vant-legacy-fcf8e23d.js","./vue-router-legacy-cae879a2.js"],(function(e){"use strict";var t,a,n,i,u,l,o,c,r,s,d,f,g,p,_,m,y,v,b,h;return{setters:[function(e){t=e.k,a=e.B,n=e.h},function(e){i=e._},function(e){u=e._},function(e){l=e.r,o=e.ak,c=e.l,r=e.ap,s=e.al,d=e.v,f=e.ai,g=e.b7,p=e.F,_=e.aN,m=e.aj,y=e.aI,v=e.A,b=e.a5,h=e.C},function(){},function(){}],execute:function(){var k={class:"layout__page"},j={class:"btn-list layout__body"},w={class:"list"},x={class:"list-item van-hairline--bottom"};e("default",u({__name:"multi-touch",setup:function(e){l(null);var u=function(){n({message:"触摸手势触发"})},C=function(){n({message:"双击手势触发"})},F=function(){n({message:"长按手势触发"})},I=function(e){console.log(e),n({message:"向左滑动手势触发"})},T=function(e){console.log(e),n({message:"向右滑动手势触发"})};return function(e,n){var l=t,A=i,B=a,E=h("doubletap"),H=h("waves"),L=h("tap"),M=h("press"),N=h("swipeleft"),S=h("swiperight");return y(),o("div",k,[c(A,{class:"layout__header"},r({_:2},[void 0]),1024),s("div",j,[d((y(),f(l,{type:"primary",block:""},{default:g((function(){return[v("触摸(tap)")]})),_:1})),[[L,u],[H]]),d((y(),f(l,{type:"default",block:""},{default:g((function(){return[v(" 双击(doubletap) ")]})),_:1})),[[E,C],[H]]),d((y(),f(l,{type:"success",block:""},{default:g((function(){return[v("长按(press)")]})),_:1})),[[M,F],[H]]),d((y(),f(l,{type:"warning",block:""},{default:g((function(){return[v(" 向左滑动(swipeleft) ")]})),_:1})),[[N,I],[H]]),d((y(),f(l,{type:"danger",block:""},{default:g((function(){return[v(" 向右滑动(swiperight) ")]})),_:1})),[[S,T],[H]]),s("ul",w,[(y(),o(p,null,_(50,(function(e){return s("li",{key:e},[s("div",x,"我是第"+b(e)+"项数据...",1)])})),64))]),m("",!0)]),c(B,{target:".layout__body"})])}}},[["__scopeId","data-v-5e7c80a6"]]))}}}))}();