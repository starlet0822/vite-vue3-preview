import{_ as J}from"./index-03d2b5ec.js";import{Z as X,_ as Y,$ as Z,a0 as H,d as U,a1 as Q,p as s,m as N,a2 as ee,X as te,a3 as j,a4 as ae,a5 as I,a as f,r as oe,o as ne,g as y,q as i,u as t,a6 as se,a7 as le,U as ie,a8 as ce,f as n,k as x,G as h,x as T,y as $,F as w,i as re,J as L,K as de}from"./index-5560da19.js";import{A as me}from"./index-ac0fff36.js";/* empty css              */import{G as ue,a as _e}from"./index-870e2353.js";import{d as R}from"./index-5e3aa364.js";import{l as pe,o as fe,s as S}from"./dict-e1f4519f.js";import{_ as ve}from"./plugin-vue_export-helper-c27b6911.js";import{A as ke,s as be,a as ye,b as ge}from"./function-call-2fade5d0.js";import{r as xe,u as he}from"./use-route-23f883a9.js";import{T as Te,a as we}from"./index-e2b6ecb5.js";import"./index-0e6beb51.js";import"./use-placeholder-87cf9818.js";import"./index-e0efa64a.js";import"./use-id-e390e938.js";import"./index-9a989bb3.js";const[Pe,B]=X("action-bar-icon"),Ce=Y({},xe,{dot:Boolean,text:String,icon:String,color:String,badge:Z,iconClass:H,badgeProps:Object,iconPrefix:String});var Ae=U({name:Pe,props:Ce,setup(_,{slots:a}){const c=he();Q(ke);const v=()=>{const{dot:r,badge:k,icon:P,color:C,iconClass:d,badgeProps:m,iconPrefix:A}=_;return a.icon?s(ee,N({dot:r,class:B("icon"),content:k},m),{default:a.icon}):s(te,{tag:"div",dot:r,name:P,badge:k,color:C,class:[B("icon"),d],badgeProps:m,classPrefix:A},null)};return()=>s("div",{role:"button",class:B(),tabindex:0,onClick:c},[v(),a.default?a.default():_.text])}});const De=j(Ae);j(be);const M=Object.assign({"./Details.vue":()=>I(()=>import("./Details-9859f5ad.js"),["static/js/Details-9859f5ad.js","static/js/index-5560da19.js","static/css/index-37439be6.css","static/js/index-462a24ae.js","static/js/use-route-23f883a9.js","static/css/index-eaabcbd2.css","static/js/plugin-vue_export-helper-c27b6911.js","static/css/Details-a551de8b.css"]),"./Views.vue":()=>I(()=>import("./Views-2fc9491d.js"),["static/js/Views-2fc9491d.js","static/js/index-5560da19.js","static/css/index-37439be6.css","static/js/plugin-vue_export-helper-c27b6911.js","static/js/index-4ff7e532.js","static/css/Views-9572afa9.css"]),"./WorkTrend.vue":()=>I(()=>import("./WorkTrend-5213f80f.js"),["static/js/WorkTrend-5213f80f.js","static/js/index-5560da19.js","static/css/index-37439be6.css","static/js/plugin-vue_export-helper-c27b6911.js","static/js/index-4ff7e532.js","static/css/WorkTrend-25f1e405.css"])}),Ie=Object.keys(M).reduce((_,a)=>{const c=a.replace(/^\.\/(.*)\.\w+$/,"$1");return console.log("name:",c),_[c]=ae(M[a]),_},{});const Be={class:"label st-margin-bottom-8"},Ne={class:"value st-tip"},Oe={class:"footer-action"},Ee={class:"content"},Ve=U({name:"ListDetail"}),$e=Object.assign(Ve,{setup(_){const a=f(3),c=f([{text:"编辑工单",name:"edit",icon:"edit",color:""},{text:"删除工单",name:"delete",icon:"delete",color:""},{text:"更多操作",name:"more",icon:"ellipsis",color:""},{text:"完结工单",name:"finish",icon:"checked",color:""},{text:"退回工单",name:"sendBack",icon:"cross",color:""},{text:"撤销工单",name:"revoke",icon:"revoke",color:""},{text:"转他人处理",name:"exchange",icon:"exchange",color:""}]),v=f([{key:"levelText",label:"紧急程度",value:""},{key:"status",label:"工单状态",value:"",formatter:o=>S.get(o)},{key:"initiator",label:"发起人员",value:""},{key:"deptName",label:"发起部门",value:""},{key:"submitter",label:"提交人员",value:""},{key:"createTime",label:"提交时间",value:""}]),r=f([{label:"工单编号",key:"id"},{label:"工单标题",key:"name"},{label:"工单类型",key:"typeText"},{label:"紧急程度",key:"levelText"},{label:"当前状态",key:"status",formatter:o=>S.get(o)},{label:"关联用户",key:"customer",slotValue:!0},{label:"发起人员",key:"initiator"},{label:"发起部门",key:"deptName"},{label:"处理人员",key:"handlingUser"},{label:"处理部门",key:"handlingDeptName"},{label:"通知他人",key:"otherUser"},{label:"提交时间",key:"createTime"},{label:"处理时间",key:"handlingTime"}]),k=se(),P=k.query.id,C=k.query.name,d=oe({}),m=f("WorkTrend"),A=[{title:"工单动态",name:"WorkTrend"},{title:"工单详情",name:"Details"},{title:"查看记录",name:"Views"}],G=async()=>{const o=le({});try{const p={id:P},l=await ie.getWorkOrderDetail(p);if(l.code===0){for(const u in l.data){const g=l.data[u];switch(d[u]=l.data[u],u){case"type":d.typeText=fe.get(g);break;case"level":d.levelText=pe.get(g);break;default:break}}v.value=R(d,v.value),r.value=R(d,r.value),console.log("details:",r)}else ce({type:"danger",message:l.message||"请求失败"})}finally{o==null||o.close()}},b=f(!1),O=o=>{switch(b.value=!1,o.name){case"edit":break;case"checked":break;case"delete":ye({title:"删除确认",message:"确定要删除该条记录吗？"}).then(()=>{}).catch(()=>{});break;case"more":b.value=!0;break}};return ne(()=>{G()}),(o,p)=>{const l=ue,u=_e,g=Te,W=we,q=De,F=ge,K=me,z=J;return n(),y(z,{class:"list-detail",title:t(C)},{default:i(()=>[s(u,{"column-num":3,border:!1},{default:i(()=>[(n(!0),x(w,null,h(t(v),({key:e,label:D,value:E,formatter:V})=>(n(),y(l,{key:e},{default:i(()=>[T("div",Be,$(D),1),T("div",Ne,$(V?V(E):E),1)]),_:2},1024))),128))]),_:1}),s(W,{active:t(m),"onUpdate:active":p[0]||(p[0]=e=>L(m)?m.value=e:null),"line-height":0,class:"st-margin-top-15",animated:"",size:"small"},{default:i(()=>[(n(),x(w,null,h(A,e=>s(g,{key:e.name,"title-class":"st-color-blue",title:e.title,name:e.name},{default:i(()=>[(n(),y(re(t(Ie)[t(m)]),{data:t(r)},null,8,["data"]))]),_:2},1032,["title","name"])),64))]),_:1},8,["active"]),T("div",Oe,[s(F,{class:"van-hairline--top",placeholder:""},{default:i(()=>[(n(!0),x(w,null,h(t(c).slice(0,t(a)),e=>(n(),y(q,N({key:e.name,style:{flex:"1"}},e,{color:"#999",onClick:D=>O(e)}),null,16,["onClick"]))),128))]),_:1}),s(K,{show:t(b),"onUpdate:show":p[1]||(p[1]=e=>L(b)?b.value=e:null),title:"更多操作",round:!1,"close-on-click-overlay":!1},{default:i(()=>[T("div",Ee,[s(u,{"column-num":t(a),border:!1,clickable:""},{default:i(()=>[(n(!0),x(w,null,h(t(c).slice(t(a)),e=>(n(),y(l,N({key:e.name},e,{"icon-color":"#999",onClick:de(D=>O(e),["stop"])}),null,16,["onClick"]))),128))]),_:1},8,["column-num"])])]),_:1},8,["show"])])]),_:1},8,["title"])}}}),He=ve($e,[["__scopeId","data-v-19e5c427"]]);export{He as default};
