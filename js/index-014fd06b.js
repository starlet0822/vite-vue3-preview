import{_ as e}from"./plugin-vue_export-helper-893979e1.js";import{m as a,c as s,u as t,aI as l,ak as r,t as n,al as i}from"./@vue-0da0c2e3.js";const c=["xlink:href"],o=a({name:"SvgIcon"});var m=e(Object.assign(o,{props:{name:{type:String,required:!0},className:{type:String,default:""},fill:{type:String,default:"currentColor"}},emits:["click"],setup(e,{emit:a}){const o=e,m=s((()=>{return e=o.name,/^(https?:|mailto:|tel:)/.test(e);var e})),u=s((()=>`#icon-${o.name}`)),p=s((()=>o.className?"svg-icon "+o.className:"svg-icon")),v=s((()=>({mask:`url(${o.name}) no-repeat 50% 50%`,"-webkit-mask":`url(${o.name}) no-repeat 50% 50%`}))),g=()=>{a("click",o.name)};return(a,s)=>t(m)?(l(),r("div",n({key:0},a.$attrs,{style:t(v),class:"svg-external-icon svg-icon"}),null,16)):(l(),r("svg",n({key:1},a.$attrs,{class:t(p),style:{fill:e.fill},"aria-hidden":"true",onClick:g}),[i("use",{"xlink:href":t(u)},null,8,c)],16))}}),[["__scopeId","data-v-7d9e7866"]]);export{m as _};