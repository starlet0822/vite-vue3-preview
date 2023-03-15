var e=Object.defineProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,o=(e,o)=>{for(var n in o||(o={}))t.call(o,n)&&l(e,n,o[n]);if(a)for(var n of a(o))s.call(o,n)&&l(e,n,o[n]);return e};import{p as n,j as r,q as i,d as c,B as u}from"./vant-92334e9f.js";import{_ as d}from"./index-1904e199.js";import{m as p,bk as v,u as m,r as b,a as f,b as g,q as y,w as k,aI as _,ak as j,aj as h,al as O,F as x,aN as C,a4 as w,a2 as S,l as I,b7 as L,A as q,ap as E,aK as z,aJ as P}from"./@vue-0da0c2e3.js";import{S as D}from"./signature_pad-b016ca8d.js";import{I as R}from"./intro.js-10a0758d.js";import{_ as W}from"./plugin-vue_export-helper-893979e1.js";import"./@vant-b0725c78.js";import"./vue-router-1cbad9b8.js";const B={class:"signature"},A={class:"signature-wrapper"},F={key:0,class:"tip-text st-font-24"},H={class:"signature__control van-hairline--top st-bg-white"},J={class:"ctrl-color"},K=["onClick"],N={class:"ctrl-btn"},U=p({name:"Signature"});var G=W(Object.assign(U,{props:{options:{type:Object,default:()=>({})}},emits:["save"],setup(e,{expose:a,emit:t}){const s=e;v((e=>({b07b56a6:m(c)})));const l=b(null),n=b(null),i=b(!0),c=b("#000"),u=f(["#000","#2489f3","#ed521f"]),d=b(.5);g((()=>{p()})),y((()=>{n.value=null})),k((()=>n.value),((e,a)=>{i.value=e._isEmpty}),{deep:!0});const p=()=>{const e={minWidth:d.value,maxWidth:5,penColor:c.value,backgroundColor:"rgb(255, 255, 255)"};n.value=new D(l.value,o(o({},e),s.options)),i.value=n.value.isEmpty(),l.value.width=document.body.clientWidth,l.value.height=document.body.clientHeight/2,n.value.addEventListener("beginStroke",(()=>{i.value=!1}),{once:!1})},E=()=>{const e=n.value.toData();e&&(e.pop(),n.value.fromData(e))},z=()=>{n.value.clear(),P()},P=()=>{if(n.value.isEmpty())t("save",null);else{const e=n.value.toDataURL();t("save",e)}};return a({guide:()=>{R().setOptions({prevLabel:"上一步",nextLabel:"下一步",skipLabel:"跳过",doneLabel:"知道了",showBullets:!1,disableInteraction:!0,exitOnOverlayClick:!1,steps:[{element:document.querySelector("canvas"),title:"签名区域",intro:"您可以在此处手写签名",position:"top"},{element:document.querySelector(".ctrl-color"),title:"手写笔颜色",intro:"您可以切换手写笔颜色",position:"top"},{element:document.querySelector(".ctrl-btn"),title:"操作",intro:"您可以撤销、清空、保存签名",position:"bottom"}]}).start()}}),(e,a)=>{const t=r;return _(),j("div",B,[h("",!0),O("main",A,[m(i)?(_(),j("h2",F,"请在此处签名")):h("",!0),O("canvas",{ref_key:"canvasRef",ref:l},"您的浏览器不支持canvas技术,请升级浏览器!",512)]),O("footer",H,[O("div",J,[(_(!0),j(x,null,C(m(u),(e=>(_(),j("div",{key:e,style:w({"background-color":e}),class:S(["color-btn",{"active-color":e===m(c)}]),onClick:a=>(e=>{n.value.penColor=c.value=e})(e)},null,14,K)))),128))]),O("div",N,[I(t,{icon:"revoke",size:"small",disabled:m(i),onClick:E},{default:L((()=>[q("撤销")])),_:1},8,["disabled"]),I(t,{icon:"cross",size:"small",style:{"margin-left":"12px"},type:"danger",disabled:m(i),onClick:z},{default:L((()=>[q(" 清空 ")])),_:1},8,["disabled"]),I(t,{icon:"success",size:"small",type:"primary",disabled:m(i),style:{"margin-left":"12px"},onClick:P},{default:L((()=>[q(" 保存 ")])),_:1},8,["disabled"])])])])}}}),[["__scopeId","data-v-45226efc"]]);const M={class:"layout__page"},Q=(e=>(z("data-v-0939647c"),e=e(),P(),e))((()=>O("span",{class:"st-margin-right-10"},"签名教程",-1))),T={class:""},V={key:0,class:"preview"},X=["src"],Y=p({name:"Signature"});var Z=W(Object.assign(Y,{setup(e){const a=b(null),t=b(null),s=()=>{t.value.guide()},l=()=>{},o=e=>{if(a.value=e,!a.value)return!1};return(e,n)=>{const r=i,p=d,v=c,b=u;return _(),j("div",M,[I(p,null,{right:L((()=>[O("div",{class:"guide-icon st-font-12 st-flex-ai",onClick:s},[Q,I(r,{name:"info",size:"14"})])])),_:1}),O("div",T,[I(v,{title:"手写签名区域",border:!1}),I(G,{ref_key:"signaturePadRef",ref:t,onSave:o},null,512),(_(),j("div",V,[I(v,{title:"预览签名区域",center:""},E({_:2},[void 0]),1024),m(a)?(_(),j("img",{key:0,class:"sign-img",src:m(a),onClick:l},null,8,X)):h("",!0)]))]),I(b)])}}}),[["__scopeId","data-v-0939647c"]]);export{Z as default};