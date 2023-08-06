import{_ as A}from"./index-036dc398.js";import{d as N,a as r,ao as O,O as m,g as S,q as s,f as u,p as o,u as l,J as d,x as a,I as U,k as g,G as h,F as C,v as V,z as j,y as p,P as z,$ as L,M as P}from"./index-b77c9a01.js";import{_ as R}from"./index-ffba1878.js";import{_ as q}from"./index-f6670a9f.js";/* empty css              */import{g as E,t as G,l as J}from"./dict-ce3ac239.js";import{_ as K}from"./plugin-vue_export-helper-c27b6911.js";import{T as Q,a as W}from"./index-3b67f935.js";import"./index-e5877c51.js";import"./use-placeholder-5fce02d2.js";import"./use-route-6a4a082f.js";import"./index-43cb22a0.js";import"./index-fd964aba.js";import"./use-id-05894c3b.js";import"./index-1ee9adae.js";import"./use-sync-prop-ref-1174383c.js";import"./index-3d12dbef.js";import"./utils-7da2b5dc.js";import"./index-8bf92c07.js";const X={class:"task-list"},Z={class:"st-color-tip"},tt={class:"st-text st-margin-bottom-10"},et={class:"st-tip"},ot={class:"st-tip"},st={class:"status st-tip"},at=N({name:"task.list"}),it=Object.assign(at,{setup(nt){const i=r(!1),Y=r([{type:"InputField",title:"任务名称",value:"",name:"name",attrs:{placeholder:"输入搜索关键词"}},{type:"RadioField",title:"任务分类",value:"-1",name:"type",attrs:{options:E(G)}}]),c=r(0),_=r(0),y=[{title:"全部",name:-1},{title:"进行中",name:0},{title:"未开始",name:1},{title:"已完成",name:2},{title:"未完成",name:3}],b=localStorage.getItem("themeColor")||O,w={0:"未开始",1:"进行中",2:"已完成",3:"未完成"},x=[{title:"与客户沟通报价事宜",activeColor:"red",status:"0",level:"0",time:m().format("YYYY-MM-DD HH:mm")},{title:"与客户沟通报价事宜",activeColor:"orange",status:"1",level:"1",time:m().format("YYYY-MM-DD HH:mm")},{title:"与客户沟通报价事宜",activeColor:"blue",status:"2",level:"2",time:m().format("YYYY-MM-DD HH:mm")},{title:"与客户沟通报价事宜",activeColor:"gray",status:"3",level:"3",time:m().format("YYYY-MM-DD HH:mm")}],D=M=>{i.value=!1};return(M,e)=>{const v=Q,f=W,H=z,k=q,F=R,I=L,T=A,B=P("waves");return u(),S(T,null,{header:s(()=>[o(k,{"right-text":"按钮",border:""},{title:s(()=>[o(f,{active:l(c),"onUpdate:active":e[0]||(e[0]=t=>d(c)?c.value=t:null),type:"card",shrink:""},{default:s(()=>[o(v,{title:"普通任务"}),o(v,{title:"跟进任务"})]),_:1},8,["active"])]),right:s(()=>[a("span",{class:"st-color-blue st-font-12",onClick:e[1]||(e[1]=t=>i.value=!0)},[o(H,{name:"filter-o",class:"st-font-16"}),U(" 筛选 ")])]),_:1}),o(f,{active:l(_),"onUpdate:active":e[2]||(e[2]=t=>d(_)?_.value=t:null),"title-active-color":l(b),"line-height":0,animated:"",swipeable:""},{default:s(()=>[(u(),g(C,null,h(y,t=>o(v,{key:t.name,title:t.title,name:t.name},{default:s(()=>[a("div",X,[(u(),g(C,null,h(x,(n,$)=>V(a("div",{key:n.title+$,class:j(["task-item",[n.activeColor]])},[a("div",Z,[a("p",tt,p(n.title),1),a("p",et,p(n.time),1),a("p",ot,"紧急程度："+p(l(J).get(n.level)),1)]),a("div",st,p(w[n.status]),1)],2),[[B]])),64))])]),_:2},1032,["title","name"])),64))]),_:1},8,["active","title-active-color"])]),default:s(()=>[o(I,{show:l(i),"onUpdate:show":e[4]||(e[4]=t=>d(i)?i.value=t:null),position:"right",closeable:!1,"close-on-popstate":"",style:{width:"85%",height:"100%"}},{default:s(()=>[o(F,{"show-header":"","form-items":l(Y),onConfirm:D,onClose:e[3]||(e[3]=t=>i.value=!1)},null,8,["form-items"])]),_:1},8,["show"])]),_:1})}}}),Mt=K(it,[["__scopeId","data-v-36308066"]]);export{Mt as default};
