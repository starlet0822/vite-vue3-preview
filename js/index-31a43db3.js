var e=(e,a,t)=>new Promise(((s,o)=>{var i=e=>{try{l(t.next(e))}catch(a){o(a)}},r=e=>{try{l(t.throw(e))}catch(a){o(a)}},l=e=>e.done?s(e.value):Promise.resolve(e.value).then(i,r);l((t=t.apply(e,a)).next())}));import{p as a,d as t,o as s,Z as o,F as i,j as r,B as l,_ as n,r as c,c as d}from"./vant-c731c718.js";import{_ as u}from"./index-2f91436e.js";import{m as p,a as m,_ as v,i as f,aI as h,ak as b,al as j,a5 as g,u as w,l as k,b7 as y,f as z,a2 as x,r as _,v as C,aj as S,ai as V,A as P,aK as T,aJ as U,bk as F,C as I}from"./@vue-0da0c2e3.js";import{u as E,b as L}from"./vue-router-1cbad9b8.js";import{a as M,f as O,t as R}from"./index-c2271971.js";import{a as q}from"./js-cookie-aaf6027b.js";import{_ as A}from"./plugin-vue_export-helper-893979e1.js";import{o as B}from"./vue3-colorpicker-a6e02a45.js";import{u as D}from"./vuex-fdaeb4c6.js";import{p as J}from"./index-57de3c0d.js";import"./@vant-b0725c78.js";/* empty css                      */import"./amfe-flexible-385c80ea.js";import"./@vueuse-13b67ac5.js";import"./lodash-es-12d03b41.js";import"./axios-0cd4f164.js";import"./qs-efaa5365.js";import"./side-channel-ebdfdc6e.js";import"./get-intrinsic-8aab7bd3.js";import"./has-symbols-1f359e75.js";import"./function-bind-c930bb92.js";import"./has-03e8e28c.js";import"./call-bind-b7e23f7e.js";import"./object-inspect-af06f273.js";import"./@antv-74afab59.js";import"./tslib-546db90a.js";import"./fecha-2b185e5a.js";import"./nprogress-4e4fc296.js";import"./vue3-hash-calendar-e234247e.js";import"./hammerjs-ed6f6a9e.js";import"./vue-types-9561ac9a.js";import"./tinycolor2-7446cab2.js";import"./@aesoper-316802a3.js";import"./vue3-angle-f446972c.js";import"./gradient-parser-c9367eab.js";import"./@popperjs-f5cb6547.js";const K={class:"picker-fontSize-wrapper"},Z={class:"setting-box st-bg-white"},G={class:x(["st-flex-center"])},H={class:"slider"},N={class:"custom-button"},Q=p({name:"PickerFontSize"});var W=A(Object.assign(Q,{emits:["change"],setup(e,{emit:t}){const s=m({fontSize:+q.get("fontSize")||M,fontTypes:O}),{fontSize:o,fontTypes:i}=v(s),r=f("setSize"),l=e=>{q.set("fontSize",e),localStorage.setItem("fontSize",e),r(e+"px"),t("change",e)};return(e,t)=>{const s=a;return h(),b("div",K,[j("div",Z,[j("div",G,g(w(i).get(+w(o))),1),j("div",H,[k(s,{modelValue:w(o),"onUpdate:modelValue":t[0]||(t[0]=e=>z(o)?o.value=e:null),max:16,min:12,step:2,onChange:l},{button:y((()=>[j("div",N,g(w(o)),1)])),_:1},8,["modelValue"])])])])}}}),[["__scopeId","data-v-7c9c5aae"]]);const X=e=>(T("data-v-4bb5a43a"),e=e(),U(),e),Y={class:"layout__page"},$={class:""},ee={class:"st-margin-top-10"},ae=X((()=>j("div",{class:"color-point"},null,-1))),te=X((()=>j("div",{class:"st-margin-top-10"},null,-1))),se={class:"st-margin-top-10"},oe={class:"st-flex-center st-margin-top-15"},ie={class:"color-wrapper"},re=p({name:"Setting"});var le=A(Object.assign(re,{setup(a){F((e=>({"040e43d3":w(T)})));const p=f("setThemeColor");f("themeColor");const g=_(!1),T=_(q.get("themeColor")||R),U=e=>{p(e)};L();const A=E(),K=D(),Z=f("setTheme"),G=_("dark"===q.get("darkMode")),H=e=>{Z(e?"dark":"light"),G.value=e,q.set("darkMode",e?"dark":"light")},N="//cdn.jsdelivr.net/npm/eruda";let Q=[...document.scripts].find((e=>e.src===N));const X=_(window.activeEruda),re=a=>e(this,null,(function*(){le(a)})),le=e=>{const a={defaults:{theme:e?"Dark":"Light"}};e?Q?eruda.init(a):(c("初始化中"),new Promise(((e,t)=>{Q=document.createElement("script"),Q.type="text/javascript",Q.onload=function(){eruda.init(a),window.activeEruda=!0,e(""),d()},Q.onerror=function(e){t(e),d()},Q.src=N,document.head.appendChild(Q)}))):(Q&&Q.remove(),window.eruda&&(null==eruda||eruda.destroy()))},ne=m({title:A.currentRoute.value.meta.title,screenLock:!1,showFontSize:!1,fontSize:q.get("fontSize")||M,fontTypes:O}),{title:ce,screenLock:de,showFontSize:ue,fontSize:pe,fontTypes:me}=v(ne),ve=_(!1),fe=()=>{},he=()=>{ue.value=!0},be=e=>{pe.value=e},je=()=>{g.value=!0},{fullPath:ge}=A.currentRoute.value,we=()=>{n({message:"是否确认退出？"}).then((()=>e(this,null,(function*(){yield K.dispatch("logout"),yield K.dispatch("cacheViews/clearView"),yield A.replace("/login")})))).catch((()=>{}))};return(e,a)=>{const n=u,c=t,d=s,p=o,m=i,v=r,f=l,_=I("doubletap"),F=I("waves");return h(),b("div",Y,[C(k(n,{border:!0,class:x(["mine-nav-bar",{"nav-bar-bg":w(ve)}]),title:w(ce)},null,8,["class","title"]),[[_,fe]]),j("div",$,[j("div",ee,[k(c,{value:w(me).get(+w(pe)),center:"","is-link":"",title:"字体大小",onClick:he},null,8,["value"]),k(d,{show:w(ue),"onUpdate:show":a[0]||(a[0]=e=>z(ue)?ue.value=e:null),position:"bottom","z-index":9999,closeable:!1},{default:y((()=>[k(W,{onChange:be})])),_:1},8,["show"]),S("",!0),(h(),V(c,{key:1,center:"",title:"主题色",onClick:je},{value:y((()=>[ae])),_:1})),(h(),V(m,{key:2,name:"darkMode",label:"深色模式","input-align":"right",center:""},{input:y((()=>[k(p,{modelValue:w(G),"onUpdate:modelValue":a[1]||(a[1]=e=>z(G)?G.value=e:null),size:w(J)(18),onChange:H},null,8,["modelValue","size"])])),_:1})),k(m,{name:"eruda",label:"eruda调试","input-align":"right",center:""},{input:y((()=>[k(p,{modelValue:w(X),"onUpdate:modelValue":a[2]||(a[2]=e=>z(X)?X.value=e:null),size:w(J)(18),onChange:re},null,8,["modelValue","size"])])),_:1})]),te,j("div",se,[S("",!0)]),j("div",oe,[C((h(),V(v,{block:"",style:{width:"80%"},type:"warning",onClick:we},{default:y((()=>[P(" 退出登录 ")])),_:1})),[[F]])])]),k(f),k(d,{show:w(g),"onUpdate:show":a[4]||(a[4]=e=>z(g)?g.value=e:null)},{default:y((()=>[j("div",ie,[k(w(B),{pureColor:w(T),"onUpdate:pureColor":a[3]||(a[3]=e=>z(T)?T.value=e:null),"is-widget":!0,"disable-alpha":"",format:"hex","picker-type":"chrome","use-type":"pure",onPureColorChange:U},null,8,["pureColor"])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-4bb5a43a"]]);export{le as default};
