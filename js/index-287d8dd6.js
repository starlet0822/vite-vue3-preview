var e=(e,a,t)=>new Promise(((s,o)=>{var i=e=>{try{n(t.next(e))}catch(a){o(a)}},r=e=>{try{n(t.throw(e))}catch(a){o(a)}},n=e=>e.done?s(e.value):Promise.resolve(e.value).then(i,r);n((t=t.apply(e,a)).next())}));import{p as a,d as t,o as s,Z as o,F as i,j as r,B as n,_ as l,$ as c,r as u,c as p}from"./vant-92334e9f.js";import{_ as d}from"./index-1904e199.js";import{m,a as f,_ as v,i as h,aI as b,ak as j,al as g,a5 as w,u as k,l as y,b7 as x,f as z,a2 as _,r as C,v as S,aj as V,ai as P,A as T,aK as U,aJ as F,bk as E,C as I}from"./@vue-0da0c2e3.js";import{u as M,b as L}from"./vue-router-1cbad9b8.js";import{a as O,f as R,t as q}from"./index-ecf177a0.js";import{a as A}from"./js-cookie-aaf6027b.js";import{_ as B}from"./plugin-vue_export-helper-893979e1.js";import{o as J}from"./vue3-colorpicker-a6e02a45.js";import{u as K}from"./vuex-fdaeb4c6.js";import{p as Z}from"./index-3805aa1a.js";import"./@vant-b0725c78.js";/* empty css                      */import"./amfe-flexible-385c80ea.js";import"./@vueuse-cf363312.js";import"./lodash-es-12d03b41.js";import"./axios-0cd4f164.js";import"./qs-efaa5365.js";import"./side-channel-ebdfdc6e.js";import"./get-intrinsic-8aab7bd3.js";import"./has-symbols-1f359e75.js";import"./function-bind-c930bb92.js";import"./has-03e8e28c.js";import"./call-bind-b7e23f7e.js";import"./object-inspect-af06f273.js";import"./@antv-74afab59.js";import"./tslib-546db90a.js";import"./fecha-2b185e5a.js";import"./nprogress-4e4fc296.js";import"./vue3-hash-calendar-e234247e.js";import"./hammerjs-ed6f6a9e.js";import"./vue-types-9561ac9a.js";import"./tinycolor2-7446cab2.js";import"./@aesoper-316802a3.js";import"./vue3-angle-f446972c.js";import"./gradient-parser-c9367eab.js";import"./@popperjs-f5cb6547.js";const $={class:"picker-fontSize-wrapper"},D={class:"setting-box st-bg-white"},G={class:_(["st-flex-center"])},H={class:"slider"},N={class:"custom-button"},Q=m({name:"PickerFontSize"});var W=B(Object.assign(Q,{emits:["change"],setup(e,{emit:t}){const s=f({fontSize:+A.get("fontSize")||O,fontTypes:R}),{fontSize:o,fontTypes:i}=v(s),r=h("setSize"),n=e=>{A.set("fontSize",e),r(e+"px"),t("change",e)};return(e,t)=>{const s=a;return b(),j("div",$,[g("div",D,[g("div",G,w(k(i).get(+k(o))),1),g("div",H,[y(s,{modelValue:k(o),"onUpdate:modelValue":t[0]||(t[0]=e=>z(o)?o.value=e:null),max:16,min:12,step:2,onChange:n},{button:x((()=>[g("div",N,w(k(o)),1)])),_:1},8,["modelValue"])])])])}}}),[["__scopeId","data-v-3f5f621b"]]);const X=e=>(U("data-v-ee65eebe"),e=e(),F(),e),Y={class:"layout__page"},ee={class:""},ae={class:"st-margin-top-10"},te=X((()=>g("div",{class:"color-point"},null,-1))),se=X((()=>g("div",{class:"st-margin-top-10"},null,-1))),oe={class:"st-margin-top-10"},ie={class:"st-flex-center st-margin-top-15"},re={class:"color-wrapper"},ne=m({name:"Setting"});var le=B(Object.assign(ne,{setup(a){E((e=>({"01c06f93":k(U)})));const m=h("setThemeColor");h("themeColor");const w=C(!1),U=C(q),F=e=>{m(e)};L();const B=M(),$=K(),D=h("setTheme"),G=C("dark"===A.get("darkMode")),H=e=>{D(e?"dark":"light"),G.value=e,A.set("darkMode",e?"dark":"light")},N="//cdn.jsdelivr.net/npm/eruda";let Q=[...document.scripts].find((e=>e.src===N));const X=C(window.activeEruda),ne=a=>e(this,null,(function*(){le(a)})),le=e=>{e?Q?eruda.init():(u("初始化中"),new Promise(((e,a)=>{Q=document.createElement("script"),Q.type="text/javascript",Q.onload=function(){eruda.init(),window.activeEruda=!0,e(""),p()},Q.onerror=function(e){a(e),p()},Q.src=N,document.head.appendChild(Q)}))):(Q&&Q.remove(),window.eruda&&(null==eruda||eruda.destroy()))},ce=f({title:B.currentRoute.value.meta.title,screenLock:!1,showFontSize:!1,fontSize:A.get("fontSize")||O,fontTypes:R}),{title:ue,screenLock:pe,showFontSize:de,fontSize:me,fontTypes:fe}=v(ce),ve=C(!1),he=()=>{},be=()=>{de.value=!0},je=e=>{me.value=e},ge=()=>{w.value=!0},{fullPath:we}=B.currentRoute.value,ke=()=>{c({message:"是否确认退出？"}).then((()=>e(this,null,(function*(){yield $.dispatch("logout"),yield $.dispatch("cacheViews/clearView"),yield B.replace("/login")})))).catch((()=>{}))};return(e,a)=>{const c=d,u=t,p=s,m=o,f=i,v=r,h=n,C=l,E=I("doubletap"),M=I("waves");return b(),j("div",Y,[S(y(c,{border:!0,class:_(["mine-nav-bar",{"nav-bar-bg":k(ve)}]),title:k(ue)},null,8,["class","title"]),[[E,he]]),g("div",ee,[g("div",ae,[y(u,{value:k(fe).get(+k(me)),center:"","is-link":"",title:"字体大小",onClick:be},null,8,["value"]),y(p,{show:k(de),"onUpdate:show":a[0]||(a[0]=e=>z(de)?de.value=e:null),position:"bottom","z-index":9999,closeable:!1},{default:x((()=>[y(W,{onChange:je})])),_:1},8,["show"]),V("",!0),(b(),P(u,{key:1,center:"",title:"主题色",onClick:ge},{value:x((()=>[te])),_:1})),(b(),P(f,{key:2,name:"darkMode",label:"深色模式","input-align":"right",center:""},{input:x((()=>[y(m,{modelValue:k(G),"onUpdate:modelValue":a[1]||(a[1]=e=>z(G)?G.value=e:null),size:k(Z)(18),onChange:H},null,8,["modelValue","size"])])),_:1})),y(f,{name:"eruda",label:"eruda调试","input-align":"right",center:""},{input:x((()=>[y(m,{modelValue:k(X),"onUpdate:modelValue":a[2]||(a[2]=e=>z(X)?X.value=e:null),size:k(Z)(18),onChange:ne},null,8,["modelValue","size"])])),_:1})]),se,g("div",oe,[V("",!0)]),g("div",ie,[S((b(),P(v,{block:"",style:{width:"80%"},type:"warning",onClick:ke},{default:x((()=>[T(" 退出登录 ")])),_:1})),[[M]])])]),y(h),y(C,{show:k(w),onClick:a[4]||(a[4]=e=>w.value=!1)},{default:x((()=>[g("div",re,[y(k(J),{pureColor:k(U),"onUpdate:pureColor":a[3]||(a[3]=e=>z(U)?U.value=e:null),"is-widget":!0,"disable-alpha":"",format:"hex","picker-type":"chrome","use-type":"pure",onPureColorChange:F},null,8,["pureColor"])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-ee65eebe"]]);export{le as default};