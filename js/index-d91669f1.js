import{i as e,j as a}from"./vant-56d7d53c.js";import{u as t,b as s}from"./vue-router-1cbad9b8.js";import{_ as l}from"./plugin-vue_export-helper-893979e1.js";import{m as o,a as r,c as i,_ as n,aI as f,ai as p,ap as d,aN as c,b7 as m,aO as u,l as b,t as v,u as k}from"./@vue-0da0c2e3.js";const x=o({name:"NavBar"});var B=l(Object.assign(x,{props:{title:{type:String,default:""},titleClass:{type:String,default:""},fixed:{type:Boolean,default:!1},leftArrow:{type:Boolean,default:!0},appBack:Boolean,disableBack:Boolean},emits:["back"],setup(l,{emit:o}){const x=l,B=t(),_=s(),j=r({navTitle:i((()=>{const{title:e}=_.meta;return""!==x.title?x.title:e}))}),{navTitle:w}=n(j),y=()=>{o("back"),x.disableBack||B.back()};return(t,s)=>{const o=a,r=e;return f(),p(r,v({title:k(w),"left-text":"",fixed:l.fixed,"safe-area-inset-top":"","left-arrow":l.leftArrow,placeholder:l.fixed},t.$attrs,{onClickLeft:y}),d({_:2},[c(t.$slots,((e,a)=>({name:a,fn:m((()=>[u(t.$slots,a,{},void 0,!0)]))}))),t.$slots.left?void 0:{name:"left",fn:m((()=>[b(o,{name:"arrow-left",size:24})])),key:"0"}]),1040,["title","fixed","left-arrow","placeholder"])}}}),[["__scopeId","data-v-4578b45a"]]);export{B as _};
