var e=(e,a,t)=>new Promise(((s,o)=>{var i=e=>{try{l(t.next(e))}catch(a){o(a)}},n=e=>{try{l(t.throw(e))}catch(a){o(a)}},l=e=>e.done?s(e.value):Promise.resolve(e.value).then(i,n);l((t=t.apply(e,a)).next())}));import{S as a,d as t,X as s,Z as o,F as i,k as n,B as l,_ as r}from"./vant-6296a122.js";import{_ as c}from"./index-3e1b24ba.js";import{u as d}from"./vue-router-1cbad9b8.js";import{a as u,f as m,s as p}from"./index-81cf0852.js";import{a as f}from"./js-cookie-aaf6027b.js";import{_ as v}from"./plugin-vue_export-helper-893979e1.js";import{m as b,a as h,_ as g,aI as j,ak as y,al as _,a2 as w,u as k,a5 as x,l as z,b7 as S,f as V,r as C,v as P,aj as T,ai as F,A as U,aK as E,aJ as I,i as M,C as L}from"./@vue-0da0c2e3.js";import{u as O}from"./vuex-fdaeb4c6.js";import"./@vant-b0725c78.js";/* empty css                      */import"./amfe-flexible-385c80ea.js";import"./lodash-es-0ddda1ab.js";import"./axios-0cd4f164.js";import"./qs-efaa5365.js";import"./side-channel-ebdfdc6e.js";import"./get-intrinsic-8aab7bd3.js";import"./has-symbols-1f359e75.js";import"./function-bind-c930bb92.js";import"./has-03e8e28c.js";import"./call-bind-b7e23f7e.js";import"./object-inspect-af06f273.js";import"./@antv-74afab59.js";import"./tslib-546db90a.js";import"./fecha-2b185e5a.js";import"./nprogress-4e4fc296.js";import"./vue3-hash-calendar-e234247e.js";import"./hammerjs-ed6f6a9e.js";const R={class:"picker-fontSize-wrapper st-bg"},q={class:"setting-box st-bg-white"},A={class:"slider"},B={class:"custom-button"},J=b({name:"PickerFontSize"});var K=v(Object.assign(J,{emits:["change"],setup(e,{emit:t}){const s=h({fontSize:+f.get("fontSize")||u,fontTypes:m}),{fontSize:o,fontTypes:i}=g(s),n=e=>{p(e),t("change",e)};return(e,t)=>{const s=a;return j(),y("div",R,[_("div",q,[_("div",{class:w(["st-flex-center",{["st-font-"+ +k(o)]:!0}])},x(k(i).get(+k(o))),3),_("div",A,[z(s,{modelValue:k(o),"onUpdate:modelValue":t[0]||(t[0]=e=>V(o)?o.value=e:null),max:20,min:12,step:4,onChange:n},{button:S((()=>[_("div",B,x(k(o)),1)])),_:1},8,["modelValue"])])])])}}}),[["__scopeId","data-v-753b0eb6"]]);const X={class:"layout__page"},Z={class:"layout__header"},D={class:"layout__body"},G={class:"st-margin-top-10"},H=(e=>(E("data-v-18c2ce9c"),e=e(),I(),e))((()=>_("div",{class:"st-margin-top-10"},null,-1))),N={class:"st-margin-top-10"},Q={class:"st-flex-center st-margin-top-15"},W=b({name:"Setting"});var Y=v(Object.assign(W,{setup(a){const p=M("setTheme"),v=C("dark"===f.get("darkMode")),b=e=>{p(e?"dark":"light"),v.value=e,f.set("darkMode",e?"dark":"light")},x="//cdn.jsdelivr.net/npm/eruda";let E=[...document.scripts].find((e=>e.src===x));const I=C(window.activeEruda),R=a=>e(this,null,(function*(){q(a)})),q=e=>{e?E?eruda.init():new Promise(((e,a)=>{E=document.createElement("script"),E.type="text/javascript",E.onload=function(){eruda.init(),window.activeEruda=!0,e("")},E.onerror=function(e){a(e)},E.src=x,document.head.appendChild(E)})):(E&&E.remove(),window.eruda&&(null==eruda||eruda.destroy()))},A=d(),B=O(),J=h({title:A.currentRoute.value.meta.title,screenLock:!1,showFontSize:!1,fontSize:f.get("fontSize")||u,fontTypes:m}),{title:W,screenLock:Y,showFontSize:$,fontSize:ee,fontTypes:ae}=g(J),te=C(!1),se=()=>{},oe=()=>{$.value=!0},ie=e=>{ee.value=e},{fullPath:ne}=A.currentRoute.value,le=()=>{r({message:"是否确认退出？"}).then((()=>e(this,null,(function*(){yield B.dispatch("logout"),yield B.dispatch("cacheViews/clearView"),yield A.replace("/login")})))).catch((()=>{}))};return(e,a)=>{const r=c,d=t,u=s,m=o,p=i,f=n,h=l,g=L("doubletap"),x=L("waves");return j(),y("div",X,[_("div",Z,[P(z(r,{border:!0,class:w(["mine-nav-bar",{"nav-bar-bg":k(te)}]),title:k(W)},null,8,["class","title"]),[[g,se]])]),_("div",D,[_("div",G,[z(d,{value:k(ae).get(+k(ee)),center:"","is-link":"",title:"字体大小",onClick:oe},null,8,["value"]),z(u,{show:k($),"onUpdate:show":a[0]||(a[0]=e=>V($)?$.value=e:null),title:"设置字体大小"},{default:S((()=>[z(K,{onChange:ie})])),_:1},8,["show"]),T("",!0),T("",!0),(j(),F(p,{key:2,name:"darkMode",label:"深色模式","input-align":"right",center:""},{input:S((()=>[z(m,{modelValue:k(v),"onUpdate:modelValue":a[1]||(a[1]=e=>V(v)?v.value=e:null),size:"18",onChange:b},null,8,["modelValue"])])),_:1})),z(p,{name:"eruda",label:"eruda调试","input-align":"right",center:""},{input:S((()=>[z(m,{modelValue:k(I),"onUpdate:modelValue":a[2]||(a[2]=e=>V(I)?I.value=e:null),size:"18",onChange:R},null,8,["modelValue"])])),_:1})]),H,_("div",N,[T("",!0)]),_("div",Q,[P((j(),F(f,{block:"",style:{width:"80%"},type:"warning",onClick:le},{default:S((()=>[U(" 退出登录 ")])),_:1})),[[x]])])]),z(h,{target:".layout__body"})])}}}),[["__scopeId","data-v-18c2ce9c"]]);export{Y as default};
