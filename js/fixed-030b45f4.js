var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,n=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&i(e,a,t[a]);if(r)for(var a of r(t))s.call(t,a)&&i(e,a,t[a]);return e},c=(e,r)=>t(e,a(r));import{_ as l}from"./plugin-vue_export-helper-893979e1.js";import{m as p,aI as m,ak as b,aO as d,a4 as u,a as f,_ as v,l as j,b7 as y,F as h,aN as g,ai as C,t as k,aj as _,A as w}from"./@vue-0da0c2e3.js";import{l as A,m as O,d as T,j as x}from"./vant-182c6d73.js";import{R as N,t as R}from"./index-1cfd8738.js";import"./@vant-b0725c78.js";/* empty css                      */import"./amfe-flexible-385c80ea.js";import"./js-cookie-aaf6027b.js";import"./vue-router-1cbad9b8.js";import"./vuex-fdaeb4c6.js";import"./@vueuse-b48c9ec8.js";import"./lodash-es-0ddda1ab.js";import"./axios-0cd4f164.js";import"./qs-efaa5365.js";import"./side-channel-ebdfdc6e.js";import"./get-intrinsic-8aab7bd3.js";import"./has-symbols-1f359e75.js";import"./function-bind-c930bb92.js";import"./has-03e8e28c.js";import"./call-bind-b7e23f7e.js";import"./object-inspect-af06f273.js";import"./@antv-74afab59.js";import"./tslib-546db90a.js";import"./fecha-2b185e5a.js";import"./nprogress-4e4fc296.js";import"./vue3-hash-calendar-e234247e.js";import"./hammerjs-ed6f6a9e.js";const S=p({name:"ZyFooter",props:{bottom:{type:[Number,String],default:0}},setup:()=>({})}),P={class:"footer-wrapper st-footer"};var V=l(S,[["render",function(e,t,a,r,o,s){return m(),b("footer",P,[d(e.$slots,"default")])}]]);var $=l(p({name:"ZyMain",props:{top:{type:[Number,String],default:0},bottom:{type:[Number,String],default:50}},setup:()=>({RootValue:N})}),[["render",function(e,t,a,r,o,s){return m(),b("main",{style:u({top:+e.top/e.RootValue+"rem",bottom:+e.bottom/e.RootValue+"rem"}),class:"main-wrapper st-main"},[d(e.$slots,"default")],4)}]]);var z=l(p({name:"ZyHeader",props:{top:{type:[Number,String],default:0}},setup:()=>({RootValue:N})}),[["render",function(e,t,a,r,o,s){return m(),b("header",{style:u({top:+e.top/e.RootValue+"rem"}),class:"header-wrapper st-header"},[d(e.$slots,"default")],4)}]]);const I=p({name:"MoveTab",props:{active:{type:[Number,String],default:0},tabs:{type:Array,default:()=>["主页","列表页"]}},emits:["update:active","change"],setup(e,{emit:t}){const a=f({tabActive:e.active,currentComponent:"",keyword:"",themeColor:R});return c(n({},v(a)),{onClickTab:e=>{},onTabsChange:(e,a)=>{t("update:active",e),t("change",e)}})}}),F={class:"tabs-wrapper"};var Z=l(I,[["render",function(e,t,a,r,o,s){const i=A,n=O;return m(),b("div",F,[j(n,k(e.$attrs,{active:e.tabActive,"onUpdate:active":t[0]||(t[0]=t=>e.tabActive=t),color:e.themeColor,ellipsis:!1,sticky:!0,animated:"",border:"",swipeable:"","title-active-color":e.themeColor,"title-inactive-color":"#8c8c8c",onChange:e.onTabsChange,onClickTab:e.onClickTab}),{default:y((()=>[(m(!0),b(h,null,g(e.tabs,((t,a)=>(m(),C(i,{key:t+a,name:a,title:t},{default:y((()=>[d(e.$slots,"default",{},void 0,!0)])),_:2},1032,["name","title"])))),128))])),_:3},16,["active","color","title-active-color","onChange","onClickTab"])])}],["__scopeId","data-v-ee3221f8"]]);const M=p({name:"Fixed",components:{},setup(){const e=f({tabActive:1,tabs:["栏目1","栏目2","栏目3"]});return c(n({},v(e)),{handleTabChange:()=>{}})}}),U={class:"fixed-wrapper"};var q=l(M,[["render",function(e,t,a,r,o,s){const i=Z,n=z,c=T,l=$,p=x,d=V;return m(),b("div",U,[j(n,null,{default:y((()=>[j(i,{active:e.tabActive,"onUpdate:active":t[0]||(t[0]=t=>e.tabActive=t),tabs:e.tabs,onChange:e.handleTabChange},null,8,["active","tabs","onChange"])])),_:1}),j(l,null,{default:y((()=>[0==e.tabActive?(m(),b(h,{key:0},g(5,(e=>j(c,{class:"zy-margin-top-10",title:"内容..."}))),64)):_("",!0),1==e.tabActive?(m(),b(h,{key:1},g(10,(e=>j(c,{class:"zy-margin-top-10",title:"内容..."}))),64)):_("",!0),2==e.tabActive?(m(),b(h,{key:2},g(20,(e=>j(c,{class:"zy-margin-top-10",title:"内容..."}))),64)):_("",!0)])),_:1}),j(d,null,{default:y((()=>[j(p,{block:"",type:"primary"},{default:y((()=>[w("提交")])),_:1})])),_:1})])}],["__scopeId","data-v-53455446"]]);export{q as default};