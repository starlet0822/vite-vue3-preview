var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o;import{l as n,m as s}from"./vant-56d7d53c.js";import{t as l}from"./index-be365d2b.js";import{_ as p}from"./plugin-vue_export-helper-893979e1.js";import{m as b,a as v,_ as m,aI as d,ak as u,l as f,b7 as g,F as y,aN as C,ai as h,aO as j,t as O}from"./@vue-0da0c2e3.js";const k=b({name:"MoveTab",props:{active:{type:[Number,String],default:0},tabs:{type:Array,default:()=>["主页","列表页"]}},emits:["update:active","change"],setup(e,{emit:n}){const s=v({tabActive:e.active,currentComponent:"",keyword:"",themeColor:l});console.log(e.active,s.tabActive);return p=((e,t)=>{for(var a in t||(t={}))r.call(t,a)&&c(e,a,t[a]);if(o)for(var a of o(t))i.call(t,a)&&c(e,a,t[a]);return e})({},m(s)),t(p,a({onClickTab:e=>{},onTabsChange:(e,t)=>{console.log("onTabsChange",e,t),n("update:active",e),n("change",e)}}));var p}}),T={class:"tabs-wrapper"};var _=p(k,[["render",function(e,t,a,o,r,i){const c=n,l=s;return d(),u("div",T,[f(l,O(e.$attrs,{active:e.tabActive,"onUpdate:active":t[0]||(t[0]=t=>e.tabActive=t),color:e.themeColor,ellipsis:!1,sticky:!0,animated:"",border:"",swipeable:"","title-active-color":e.themeColor,"title-inactive-color":"#8c8c8c",onChange:e.onTabsChange,onClickTab:e.onClickTab}),{default:g((()=>[(d(!0),u(y,null,C(e.tabs,((t,a)=>(d(),h(c,{key:t+a,name:a,title:t},{default:g((()=>[j(e.$slots,"default",{},void 0,!0)])),_:2},1032,["name","title"])))),128))])),_:3},16,["active","color","title-active-color","onChange","onClickTab"])])}],["__scopeId","data-v-ee3221f8"]]);export{_};
