import{T as a,b as e}from"./vant-92334e9f.js";import{m as t,c as o,aI as s,ai as n,b7 as u,ak as l,F as r,aN as i,A as d,a5 as c,t as m,u as f,f as p,a as b,_ as v,l as y,aP as x,aQ as g}from"./@vue-0da0c2e3.js";import{u as h}from"./vue-router-1cbad9b8.js";import{u as j}from"./vuex-fdaeb4c6.js";import"./@vant-b0725c78.js";const A=t({name:"TabBar"}),_=Object.assign(A,{props:{defaultActive:{type:Number,default:0},fixed:{type:Boolean,default:!0},data:{type:Array,default:()=>[]}},emits:["change"],setup(t,{emit:b}){const v=t,y=o((()=>v.defaultActive)),x=a=>{b("change",a)};return(o,b)=>{const v=a,g=e;return s(),n(g,m({modelValue:f(y),"onUpdate:modelValue":b[0]||(b[0]=a=>p(y)?y.value=a:null),fixed:t.fixed,route:""},o.$attrs,{onChange:x}),{default:u((()=>[(s(!0),l(r,null,i(t.data,((a,e)=>{var t;return s(),n(v,{id:"tabbar-item-"+(null==(t=a.to)?void 0:t.name),key:a.to+e,icon:a.icon,to:a.to},{default:u((()=>[d(c(a.title),1)])),_:2},1032,["id","icon","to"])})),128))])),_:1},16,["modelValue","fixed"])}}});const k={class:"layout-container"},C=t({name:"Layout"}),N=Object.assign(C,{setup(a){h();const e=j(),t=b({transitionName:"van-fade",include:o((()=>e.getters.include)),exclude:o((()=>e.getters.exclude)),tabbars:[{title:"首页",to:{name:"Home"},icon:"home-o"},{title:"案例",to:{name:"Demo"},icon:"apps-o"},{title:"关于我",to:{name:"About"},icon:"user-o"}]}),r=a=>{},{tabbars:i,include:d,exclude:c}=v(t);return(a,e)=>{const t=x("router-view"),o=_;return s(),l("div",k,[y(t,{class:"layout-content"},{default:u((({Component:a,route:e})=>[(s(),n(g(a),{key:e.meta.usePathKey?e.path:void 0}))])),_:1}),y(o,{data:f(i),placeholder:!0,onChange:r},null,8,["data"])])}}});export{N as default};