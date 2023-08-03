import{_ as z}from"./index-f907a4ea.js";import{a1 as H,a2 as Q,a3 as X,a4 as Z,d as G,a5 as ee,p as l,m as N,a6 as te,P as ae,a7 as U,a8 as oe,a9 as I,a as f,r as ne,o as se,g as y,q as r,u as t,aa as le,ab as ie,_ as ce,ac as V,ad as re,f as s,k as x,G as h,x as T,y as L,F as w,i as de,J as R,K as me,ae as ue,af as S}from"./index-9fff26e3.js";import{A as _e}from"./index-0ead5e09.js";/* empty css              */import{G as pe,a as fe}from"./index-95b9b2d4.js";import{l as ke,o as ve,s as M}from"./dict-ce3ac239.js";import{_ as be}from"./plugin-vue_export-helper-c27b6911.js";import{A as ye,s as ge,a as xe,b as he}from"./function-call-ed656f26.js";import{r as Te,u as we}from"./use-route-2e3571bb.js";import{T as Pe,a as Ce}from"./index-05c91559.js";import"./index-1a1cf474.js";import"./use-placeholder-81088ea7.js";import"./index-82106995.js";import"./use-id-80a9ab92.js";import"./index-e79010ed.js";const[Ae,B]=H("action-bar-icon"),De=Q({},Te,{dot:Boolean,text:String,icon:String,color:String,badge:X,iconClass:Z,badgeProps:Object,iconPrefix:String});var Ie=G({name:Ae,props:De,setup(p,{slots:a}){const d=we();ee(ye);const k=()=>{const{dot:m,badge:v,icon:P,color:C,iconClass:i,badgeProps:u,iconPrefix:A}=p;return a.icon?l(te,N({dot:m,class:B("icon"),content:v},u),{default:a.icon}):l(ae,{tag:"div",dot:m,name:P,badge:v,color:C,class:[B("icon"),i],badgeProps:u,classPrefix:A},null)};return()=>l("div",{role:"button",class:B(),tabindex:0,onClick:d},[k(),a.default?a.default():p.text])}});const Be=U(Ie);U(ge);const j=Object.assign({"./Detail.vue":()=>I(()=>import("./Detail-be22a215.js"),["static/js/Detail-be22a215.js","static/js/index-9fff26e3.js","static/css/index-0813c594.css","static/js/index-93da6f84.js","static/js/use-route-2e3571bb.js","static/css/index-eaabcbd2.css","static/js/plugin-vue_export-helper-c27b6911.js","static/css/Detail-e039c17e.css"]),"./Views.vue":()=>I(()=>import("./Views-b08a72b5.js"),["static/js/Views-b08a72b5.js","static/js/index-9fff26e3.js","static/css/index-0813c594.css","static/js/plugin-vue_export-helper-c27b6911.js","static/js/index-a023a528.js","static/css/Views-576d4774.css"]),"./WorkTrend.vue":()=>I(()=>import("./WorkTrend-6baba480.js"),["static/js/WorkTrend-6baba480.js","static/js/index-9fff26e3.js","static/css/index-0813c594.css","static/js/plugin-vue_export-helper-c27b6911.js","static/js/index-a023a528.js","static/css/WorkTrend-855845ba.css"])}),Ne=Object.keys(j).reduce((p,a)=>{const d=a.replace(/^\.\/(.*)\.\w+$/,"$1");return console.log("name:",d),p[d]=oe(j[a]),p},{});const Oe={class:"label st-margin-bottom-8"},$e={class:"value st-tip"},Ee={class:"footer-action"},Ve={class:"content"},Le=G({name:"ListDetail"}),Re=Object.assign(Le,{setup(p){const a=f(3),d=f([{text:"编辑工单",name:"edit",icon:"edit",color:""},{text:"删除工单",name:"delete",icon:"delete",color:""},{text:"更多操作",name:"more",icon:"ellipsis",color:""},{text:"完结工单",name:"finish",icon:"success",color:""},{text:"退回工单",name:"sendBack",icon:"cross",color:""},{text:"撤销工单",name:"revoke",icon:"revoke",color:""},{text:"转他人处理",name:"exchange",icon:"exchange",color:""}]),k=f([{key:"levelText",label:"紧急程度",value:""},{key:"status",label:"工单状态",value:"",formatter:o=>M.get(o)},{key:"initiator",label:"发起人员",value:""},{key:"deptName",label:"发起部门",value:""},{key:"submitter",label:"提交人员",value:""},{key:"createTime",label:"提交时间",value:""}]),m=f([{label:"工单编号",key:"id"},{label:"工单标题",key:"name"},{label:"工单类型",key:"typeText"},{label:"紧急程度",key:"levelText"},{label:"当前状态",key:"status",formatter:o=>M.get(o)},{label:"关联用户",key:"customer",slotValue:!0},{label:"发起人员",key:"initiator"},{label:"发起部门",key:"deptName"},{label:"处理人员",key:"handlingUsers"},{label:"处理部门",key:"handlingDeptName"},{label:"通知他人",key:"otherUser"},{label:"提交时间",key:"createTime"},{label:"处理时间",key:"handlingTime"},{label:"工单内容",key:"content",class:"st-margin-top-10"}]),v=le(),P=v.query.id,C=v.query.name,i=ne({}),u=f("WorkTrend"),A=[{title:"工单动态",name:"WorkTrend"},{title:"工单详情",name:"Detail"},{title:"查看记录",name:"Views"}],W=async()=>{const o=ie({});try{const c={id:P},n=await ce.getWorkOrderDetail(c);if(n.code===0){for(const _ in n.data){const g=n.data[_];switch(i[_]=n.data[_],_){case"type":i.typeText=ve.get(g);break;case"level":i.levelText=ke.get(g);break;default:break}}k.value=V(i,k.value),m.value=V(i,m.value),console.log("details:",m)}else re({type:"danger",message:n.message||"请求失败"})}finally{o==null||o.close()}},b=f(!1),O=o=>{b.value=!1;const{id:c,name:n}=i;switch(o.name){case"edit":S.push(`/list-edit/${c}/${n}`);break;case"checked":break;case"delete":xe({title:"删除确认",message:"确定要删除该条记录吗？"}).then(()=>{ue({message:"模拟删除成功",duration:1e3}),setTimeout(()=>{S.back()},1500)}).catch(()=>{});break;case"more":b.value=!0;break}};return se(()=>{W()}),(o,c)=>{const n=pe,_=fe,g=Pe,q=Ce,F=Be,K=he,J=_e,Y=z;return s(),y(Y,{class:"list-detail",title:t(C)},{default:r(()=>[l(_,{"column-num":3,border:!1},{default:r(()=>[(s(!0),x(w,null,h(t(k),({key:e,label:D,value:$,formatter:E})=>(s(),y(n,{key:e},{default:r(()=>[T("div",Oe,L(D),1),T("div",$e,L(E?E($):$),1)]),_:2},1024))),128))]),_:1}),l(q,{active:t(u),"onUpdate:active":c[0]||(c[0]=e=>R(u)?u.value=e:null),class:"st-margin-top-15",animated:"",swipeable:""},{default:r(()=>[(s(),x(w,null,h(A,e=>l(g,{key:e.name,"title-class":"st-color-blue",title:e.title,name:e.name},{default:r(()=>[(s(),y(de(t(Ne)[t(u)]),{data:t(m)},null,8,["data"]))]),_:2},1032,["title","name"])),64))]),_:1},8,["active"]),T("div",Ee,[l(K,{class:"van-hairline--top",placeholder:""},{default:r(()=>[(s(!0),x(w,null,h(t(d).slice(0,t(a)),e=>(s(),y(F,N({key:e.name,style:{flex:"1"}},e,{color:"#999",onClick:D=>O(e)}),null,16,["onClick"]))),128))]),_:1}),l(J,{show:t(b),"onUpdate:show":c[1]||(c[1]=e=>R(b)?b.value=e:null),title:"更多操作",round:!1,"close-on-click-overlay":!1},{default:r(()=>[T("div",Ve,[l(_,{"column-num":t(a),border:!1,clickable:""},{default:r(()=>[(s(!0),x(w,null,h(t(d).slice(t(a)),e=>(s(),y(n,N({key:e.name},e,{"icon-color":"#999",onClick:me(D=>O(e),["stop"])}),null,16,["onClick"]))),128))]),_:1},8,["column-num"])])]),_:1},8,["show"])])]),_:1},8,["title"])}}}),Ze=be(Re,[["__scopeId","data-v-610e70ca"]]);export{Ze as default};
