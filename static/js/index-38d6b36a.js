import{_ as A}from"./index-c5cdc445.js";import{d as N,a as r,ao as O,O as m,g as S,q as s,f as u,p as o,u as n,J as d,x as a,I as U,k as g,G as h,F as b,v as V,z as j,y as p,P as z,$ as L,M as P}from"./index-3418e78b.js";import{_ as R}from"./index-a2f8f191.js";import{_ as q}from"./index-e44080f4.js";/* empty css              */import{g as E,t as G,l as J}from"./dict-ce3ac239.js";import{_ as K}from"./plugin-vue_export-helper-c27b6911.js";import{T as Q,a as W}from"./index-90986b12.js";import"./index-972ab8e3.js";import"./use-placeholder-c7d2abea.js";import"./use-route-029d125b.js";import"./index-3059a8b5.js";import"./index-fbfdb716.js";import"./use-id-fbbda1f9.js";import"./index-9411cdf3.js";import"./use-sync-prop-ref-c87c29fd.js";import"./index-61b002d2.js";import"./utils-9fd3636e.js";import"./index-271b97e3.js";const X={class:"task-list"},Z={class:"st-color-tip"},tt={class:"st-text st-margin-bottom-10"},et={class:"st-tip"},ot={class:"st-tip"},st={class:"status st-tip"},at=N({name:"task.list"}),it=Object.assign(at,{setup(lt){const i=r(!1),y=r([{type:"InputField",title:"任务名称",value:"",name:"name",attrs:{placeholder:"输入搜索关键词"}},{type:"RadioField",title:"任务分类",value:"-1",name:"type",attrs:{options:E(G)}},{type:"DateField",title:"开始时间",value:"",name:"startTime",attrs:{}},{type:"DateField",title:"默认时间",value:"2023-08-10",name:"createTime",attrs:{placeholder:"选择时间"}}]),c=r(0),_=r(0),C=[{title:"全部",name:-1},{title:"进行中",name:0},{title:"未开始",name:1},{title:"已完成",name:2},{title:"未完成",name:3}],Y=localStorage.getItem("themeColor")||O,D={0:"未开始",1:"进行中",2:"已完成",3:"未完成"},w=[{title:"与客户沟通报价事宜",activeColor:"red",status:"0",level:"0",time:m().format("YYYY-MM-DD HH:mm")},{title:"与客户沟通报价事宜",activeColor:"orange",status:"1",level:"1",time:m().format("YYYY-MM-DD HH:mm")},{title:"与客户沟通报价事宜",activeColor:"blue",status:"2",level:"2",time:m().format("YYYY-MM-DD HH:mm")},{title:"与客户沟通报价事宜",activeColor:"gray",status:"3",level:"3",time:m().format("YYYY-MM-DD HH:mm")}],x=M=>{i.value=!1};return(M,e)=>{const v=Q,f=W,F=z,H=q,T=R,k=L,I=A,B=P("waves");return u(),S(I,null,{header:s(()=>[o(H,{"right-text":"按钮",border:""},{title:s(()=>[o(f,{active:n(c),"onUpdate:active":e[0]||(e[0]=t=>d(c)?c.value=t:null),type:"card",shrink:""},{default:s(()=>[o(v,{title:"普通任务"}),o(v,{title:"跟进任务"})]),_:1},8,["active"])]),right:s(()=>[a("span",{class:"st-color-blue st-font-12",onClick:e[1]||(e[1]=t=>i.value=!0)},[o(F,{name:"filter-o",class:"st-font-16"}),U(" 筛选 ")])]),_:1}),o(f,{active:n(_),"onUpdate:active":e[2]||(e[2]=t=>d(_)?_.value=t:null),"title-active-color":n(Y),"line-height":0,animated:"",swipeable:""},{default:s(()=>[(u(),g(b,null,h(C,t=>o(v,{key:t.name,title:t.title,name:t.name},{default:s(()=>[a("div",X,[(u(),g(b,null,h(w,(l,$)=>V(a("div",{key:l.title+$,class:j(["task-item",[l.activeColor]])},[a("div",Z,[a("p",tt,p(l.title),1),a("p",et,p(l.time),1),a("p",ot,"紧急程度："+p(n(J).get(l.level)),1)]),a("div",st,p(D[l.status]),1)],2),[[B]])),64))])]),_:2},1032,["title","name"])),64))]),_:1},8,["active","title-active-color"])]),default:s(()=>[o(k,{show:n(i),"onUpdate:show":e[4]||(e[4]=t=>d(i)?i.value=t:null),position:"right",closeable:!1,"close-on-popstate":"",style:{width:"100%",height:"100%"}},{default:s(()=>[o(T,{"show-header":"","form-items":n(y),onConfirm:x,onClose:e[3]||(e[3]=t=>i.value=!1)},null,8,["form-items"])]),_:1},8,["show"])]),_:1})}}}),Mt=K(it,[["__scopeId","data-v-0bfb655b"]]);export{Mt as default};
