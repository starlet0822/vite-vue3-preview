import{_ as U}from"./index-03d2b5ec.js";import{d as W,a as p,g as M,q as l,f as V,x as N,v as q,u,J as h,p as a,I as c,y as Y,s as B,k as A,F as E,O as $,W as J,M as G}from"./index-5560da19.js";/* empty css              */import{P as H}from"./index-b9dd3661.js";import{C as K,R as O}from"./index-8ea4ee1f.js";import{C as Q}from"./index-462a24ae.js";import{F as X}from"./index-ef67e059.js";import{f as Z,c as T}from"./datetime-6cd77cc7.js";import{_ as ee}from"./plugin-vue_export-helper-c27b6911.js";import{B as te}from"./index-e0efa64a.js";import{D as ae}from"./index-7fe5bd41.js";import"./index-0e6beb51.js";import"./use-placeholder-87cf9818.js";import"./use-route-23f883a9.js";import"./use-sync-prop-ref-d69e1c72.js";import"./index-e2b6ecb5.js";import"./use-id-e390e938.js";import"./index-9a989bb3.js";const le={class:"st-margin-top-10"},oe={class:"result"},ne=W({name:"SolarLunar"}),se=Object.assign(ne,{setup(re){const L=[((t=2013,e=2033)=>{const i=[];for(let o=t;o++,o<=e;)i.push({text:o+"年",value:o});return i})(),[{text:"正月",value:"1"},{text:"二月",value:"2"},{text:"三月",value:"3"},{text:"四月",value:"4"},{text:"五月",value:"5"},{text:"六月",value:"6"},{text:"七月",value:"7"},{text:"八月",value:"8"},{text:"九月",value:"9"},{text:"十月",value:"10"},{text:"冬月",value:"11"},{text:"腊月",value:"12"}],[{text:"初一",value:"1"},{text:"初二",value:"2"},{text:"初三",value:"3"},{text:"初四",value:"4"},{text:"初五",value:"5"},{text:"初六",value:"6"},{text:"初七",value:"7"},{text:"初八",value:"8"},{text:"初九",value:"9"},{text:"初十",value:"10"},{text:"十一",value:"11"},{text:"十二",value:"12"},{text:"十三",value:"13"},{text:"十四",value:"14"},{text:"十五",value:"15"},{text:"十六",value:"16"},{text:"十七",value:"17"},{text:"十八",value:"18"},{text:"十九",value:"19"},{text:"二十",value:"20"},{text:"廿一",value:"21"},{text:"廿二",value:"22"},{text:"廿三",value:"23"},{text:"廿四",value:"24"},{text:"廿五",value:"25"},{text:"廿六",value:"26"},{text:"廿七",value:"27"},{text:"廿八",value:"28"},{text:"廿九",value:"29"},{text:"三十",value:"30"}]],v=p(),b=p(),z=p(),m=p({}),D=p("solar"),y=p(Z(new Date,"YYYY-MM-DD").split("-")),S=["year","month","day"],F=(t,e)=>(t==="year"&&(e.text+="年"),t==="month"&&(e.text+="月"),t==="day"&&(e.text+="日"),e),d=p(!1),f=p(!1),P=({selectedOptions:t})=>{console.log(t),d.value=!1,z.value=t.map(e=>e.text).join(""),b.value=t.map(e=>e.value).join("/")},j=({selectedValues:t})=>{D.value==="solar"&&(v.value=t.join("/")),D.value==="lunar"&&(b.value=t.join("/")),f.value=!1},I=()=>{D.value="solar",y.value=v.value?v.value.split("/"):y.value,f.value=!0},ce=()=>{D.value="lunar",d.value=!0},R=()=>{const[t,e,i]=v.value.split("/"),o=T.solar2lunar(t,e,i),{date:r,ncWeek:n,lunarDate:_,IMonthCn:C,IDayCn:x,gzYear:g,gzMonth:k,gzDay:w}=o;console.log("onSolar2lunar",o),o.solar=`${$(r).format("YYYY年MM月DD日")} ${n}`,o.lunar=`${$(_).format("YYYY年")} ${C} ${x} (${g}年 ${k}月 ${w}日)`,m.value=o},ve=()=>{const[t,e,i]=b.value.split("/"),o=t%400==0&&t%100!=0||t%400==0,r=T.lunar2solar(t,e,i,o),{date:n,ncWeek:_,lunarDate:C,IMonthCn:x,IDayCn:g,gzYear:k,gzMonth:w,gzDay:s}=r;console.log("onSolar2lunar",r),r.solar=`${$(n).format("YYYY年MM月DD日")} ${_}`,r.lunar=`${$(C).format("YYYY年")} ${x}${g} ${k}年 ${w}月 ${s}日`,m.value=r};return(t,e)=>{const i=te,o=X,r=Q,n=K,_=O,C=H,x=J,g=ae,k=U,w=G("waves");return V(),M(k,{class:"page-wrapper"},{default:l(()=>[N("div",le,[q((V(),M(o,{modelValue:u(v),"onUpdate:modelValue":e[0]||(e[0]=s=>h(v)?v.value=s:null),label:"公历时间",placeholder:"点击选择",readonly:"",center:"",onFocus:I},{button:l(()=>[a(i,{size:"small",type:"primary",icon:"exchange",disabled:!u(v),onClick:R},{default:l(()=>[c(Y("公历转农历"))]),_:1},8,["disabled"])]),_:1},8,["modelValue"])),[[w]]),B("",!0),(V(),A(E,{key:1},[a(r,{title:"转换结果",border:!1}),N("div",oe,[a(_,{class:""},{default:l(()=>[a(n,{class:"label",span:"4"},{default:l(()=>[c("公历")]),_:1}),a(n,{class:"value",span:"20"},{default:l(()=>[c(Y(u(m).solar),1)]),_:1})]),_:1}),a(_,{class:""},{default:l(()=>[a(n,{class:"label",span:"4"},{default:l(()=>[c("农历")]),_:1}),a(n,{class:"value",span:"20"},{default:l(()=>[c(Y(u(m).lunar),1)]),_:1})]),_:1}),B("",!0),a(_,{class:""},{default:l(()=>[a(n,{class:"label",span:"4"},{default:l(()=>[c("生肖")]),_:1}),a(n,{class:"value",span:"20"},{default:l(()=>[c(Y(u(m).Animal),1)]),_:1})]),_:1}),a(_,{class:""},{default:l(()=>[a(n,{class:"label",span:"4"},{default:l(()=>[c("星座")]),_:1}),a(n,{class:"value",span:"20"},{default:l(()=>[c(Y(u(m).astro),1)]),_:1})]),_:1})])],64))]),a(x,{show:u(d),"onUpdate:show":e[3]||(e[3]=s=>h(d)?d.value=s:null),position:"bottom"},{default:l(()=>[a(C,{title:"选择农历",columns:L,onCancel:e[2]||(e[2]=s=>d.value=!1),onConfirm:P})]),_:1},8,["show"]),a(x,{show:u(f),"onUpdate:show":e[6]||(e[6]=s=>h(f)?f.value=s:null),position:"bottom"},{default:l(()=>[a(g,{modelValue:u(y),"onUpdate:modelValue":e[4]||(e[4]=s=>h(y)?y.value=s:null),title:"选择公历",formatter:F,"columns-type":S,onConfirm:j,onCancel:e[5]||(e[5]=s=>f.value=!1)},null,8,["modelValue"])]),_:1},8,["show"])]),_:1})}}}),Me=ee(se,[["__scopeId","data-v-071e1976"]]);export{Me as default};
