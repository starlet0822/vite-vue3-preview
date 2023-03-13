var e=Object.defineProperty,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(a,s,t)=>s in a?e(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t,i=(e,i)=>{for(var l in i||(i={}))s.call(i,l)&&o(e,l,i[l]);if(a)for(var l of a(i))t.call(i,l)&&o(e,l,i[l]);return e};import{p as l,j as r,q as n,d as c,B as p}from"./vant-182c6d73.js";import{_ as d}from"./index-06373c59.js";import{m as u,bk as m,u as b,r as v,a as f,b as j,q as g,w as y,aI as h,ak as _,aj as k,al as x,F as w,aN as O,a4 as C,a2 as S,l as q,b7 as I,A as L,aK as z,aJ as E}from"./@vue-0da0c2e3.js";import{S as D}from"./signature_pad-b016ca8d.js";import{I as P}from"./intro.js-10a0758d.js";import{d as R}from"./file-d5e0f662.js";import{u as W}from"./index-721cce19.js";import{_ as B}from"./plugin-vue_export-helper-893979e1.js";import"./@vant-b0725c78.js";import"./vue-router-1cbad9b8.js";/* empty css                      */import"./amfe-flexible-385c80ea.js";import"./js-cookie-aaf6027b.js";import"./vuex-fdaeb4c6.js";import"./@vueuse-cf363312.js";import"./lodash-es-0ddda1ab.js";import"./axios-0cd4f164.js";import"./qs-efaa5365.js";import"./side-channel-ebdfdc6e.js";import"./get-intrinsic-8aab7bd3.js";import"./has-symbols-1f359e75.js";import"./function-bind-c930bb92.js";import"./has-03e8e28c.js";import"./call-bind-b7e23f7e.js";import"./object-inspect-af06f273.js";import"./@antv-74afab59.js";import"./tslib-546db90a.js";import"./fecha-2b185e5a.js";import"./nprogress-4e4fc296.js";import"./vue3-hash-calendar-e234247e.js";import"./hammerjs-ed6f6a9e.js";const A={class:"signature"},F={class:"signature-wrapper"},H={key:0,class:"tip-text st-font-24"},J={class:"signature__control van-hairline--top st-bg-white"},K={class:"ctrl-color"},N=["onClick"],U={class:"ctrl-btn"},$=u({name:"Signature"});var G=B(Object.assign($,{props:{options:{type:Object,default:()=>({})}},emits:["save"],setup(e,{expose:a,emit:s}){const t=e;m((e=>({"608c4c64":b(c)})));const o=v(null),l=v(null),n=v(!0),c=v("#000"),p=f(["#000","#2489f3","#ed521f"]),d=v(.5);j((()=>{u()})),g((()=>{l.value=null})),y((()=>l.value),((e,a)=>{n.value=e._isEmpty}),{deep:!0});const u=()=>{const e={minWidth:d.value,maxWidth:5,penColor:c.value,backgroundColor:"rgb(255, 255, 255)"};l.value=new D(o.value,i(i({},e),t.options)),n.value=l.value.isEmpty(),o.value.width=document.body.clientWidth,o.value.height=document.body.clientHeight/2,l.value.addEventListener("beginStroke",(()=>{n.value=!1}),{once:!1})},z=()=>{const e=l.value.toData();e&&(e.pop(),l.value.fromData(e))},E=()=>{l.value.clear(),B()},B=()=>{if(l.value.isEmpty())s("save",null);else{const e=l.value.toDataURL();"wx"==W()?window.open(e):R(e,`sign-${+Date.now()}.png`),s("save",e)}};return a({guide:()=>{P().setOptions({prevLabel:"上一步",nextLabel:"下一步",skipLabel:"跳过",doneLabel:"知道了",showBullets:!1,disableInteraction:!0,exitOnOverlayClick:!1,steps:[{element:document.querySelector("canvas"),title:"签名区域",intro:"您可以在此处手写签名",position:"top"},{element:document.querySelector(".ctrl-color"),title:"手写笔颜色",intro:"您可以切换手写笔颜色",position:"top"},{element:document.querySelector(".ctrl-btn"),title:"操作",intro:"您可以撤销、清空、保存签名",position:"bottom"}]}).start()}}),(e,a)=>{const s=r;return h(),_("div",A,[k("",!0),x("main",F,[b(n)?(h(),_("h2",H,"请在此处签名")):k("",!0),x("canvas",{ref_key:"canvasRef",ref:o},"您的浏览器不支持canvas技术,请升级浏览器!",512)]),x("footer",J,[x("div",K,[(h(!0),_(w,null,O(b(p),(e=>(h(),_("div",{key:e,style:C({"background-color":e}),class:S(["color-btn",{"active-color":e===b(c)}]),onClick:a=>(e=>{l.value.penColor=c.value=e})(e)},null,14,N)))),128))]),x("div",U,[q(s,{icon:"revoke",size:"small",disabled:b(n),onClick:z},{default:I((()=>[L("撤销")])),_:1},8,["disabled"]),q(s,{icon:"cross",size:"small",style:{"margin-left":"12px"},type:"danger",disabled:b(n),onClick:E},{default:I((()=>[L(" 清空 ")])),_:1},8,["disabled"]),q(s,{icon:"success",size:"small",type:"primary",disabled:b(n),style:{"margin-left":"12px"},onClick:B},{default:I((()=>[L(" 保存 ")])),_:1},8,["disabled"])])])])}}}),[["__scopeId","data-v-4c55c5d1"]]);const M={class:"layout__page"},Q=(e=>(z("data-v-42de6387"),e=e(),E(),e))((()=>x("span",{class:"st-margin-right-10"},"签名教程",-1))),T={class:"layout__body"},V=u({name:"Signature"});var X=B(Object.assign(V,{setup(e){v(null);const a=v(null),s=()=>{a.value.guide()},t=e=>{};return(e,o)=>{const i=n,l=d,r=c,u=p;return h(),_("div",M,[q(l,null,{right:I((()=>[x("div",{class:"guide-icon st-font-12 st-flex-ai",onClick:s},[Q,q(i,{name:"info",size:"14"})])])),_:1}),x("div",T,[q(r,{title:"手写签名区域",border:!1}),q(G,{ref_key:"signaturePadRef",ref:a,onSave:t},null,512),k("",!0)]),q(u)])}}}),[["__scopeId","data-v-42de6387"]]);export{X as default};