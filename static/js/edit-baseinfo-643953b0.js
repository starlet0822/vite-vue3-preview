import{_ as ke}from"./index-c5cdc445.js";import{d as te,r as R,t as z,f as P,k as xe,p as l,a0 as oe,G as Ve,q as p,j as ye,u as t,J as h,co as De,W as Y,a as Ce,o as Se,g as X,Y as Ue,x as C,s as Z,v as M,al as qe,U as Ie,ae as je,$ as Be,M as Me,Q as Re,R as Ye}from"./index-3418e78b.js";/* empty css              */import{P as Fe}from"./index-9411cdf3.js";import{C as Ne}from"./index-3059a8b5.js";import{F as $e}from"./index-fbfdb716.js";import{S as ze}from"./index-05e470a5.js";import{_ as Pe}from"./index-83f1ed63.js";import{A as Ae}from"./index-59f57d85.js";import{U as Te}from"./index-76ea38d6.js";import{_ as ae}from"./plugin-vue_export-helper-c27b6911.js";import{I as le}from"./index-ea6697ec.js";import{_ as He}from"./index-e44080f4.js";import{f as ee}from"./datetime-94b93394.js";import{a as Le}from"./function-call-0d7e98a8.js";import{F as Ee}from"./index-296d7192.js";import{B as Oe}from"./index-a15ed520.js";import"./index-972ab8e3.js";import"./use-placeholder-c7d2abea.js";import"./use-route-029d125b.js";import"./use-sync-prop-ref-c87c29fd.js";import"./index-90986b12.js";import"./use-id-fbbda1f9.js";import"./index-271b97e3.js";import"./index-61b002d2.js";import"./utils-9fd3636e.js";import"./function-call-ab151249.js";import"./calendar-2a6ff73f.js";const Ge="/vite-vue3-preview/static/png/ic_camera_add-c730e1ec.png";const Je={class:"uploadImg"},We=te({name:"UploadImg"}),Qe=Object.assign(We,{props:{modelValue:{type:Array,default:()=>[]},accept:{type:String,default:"image/*"},capture:{type:String,default:"camera"},maxCount:{type:[Number,String],default:9},previewSize:{type:[Number,String],default:54},showUpload:{type:Boolean,default:!0}},emits:["update:modelValue","change"],setup(s,{emit:S}){const U=s,_=R({showAction:!1,actions:[{name:"拍照",key:""},{name:"从手机相册选择"}],fileList:U.modelValue}),{showAction:v,actions:V,fileList:i}=z(_),k=n=>{console.log("beforeRead",n);const m=/image\/(png|jpg|jpeg)$/;if(De(n))for(let u=0;u<n.length;u++){const w=n[u];if(!m.test(w.type))return Y("请上传 png、jpg、jpeg 格式图片"),!1}else if(!m.test(n.type))return Y("请上传 png、jpg、jpeg 格式图片"),!1;return!0},q=async n=>{_.showAction=!1,S("update:modelValue",i.value)},b=n=>{console.log("onClickUpload")},a=()=>{if(console.log(666),i.length>=+U.maxCount){Y({message:"最多允许上传 9 张图片"});return}_.showAction=!0};return(n,m)=>{const u=le,w=Te,y=Ne,F=Ae;return P(),xe("div",Je,[l(w,{modelValue:t(i),"onUpdate:modelValue":m[0]||(m[0]=f=>h(i)?i.value=f:null),class:"uploader-show","max-count":s.maxCount,accept:s.accept,capture:s.capture,multiple:!0,"show-upload":s.showUpload,readonly:!0,"preview-size":s.previewSize,"preview-image":!0,onClickUpload:a},oe({default:p(()=>[l(u,{src:t(Ge),width:s.previewSize,height:s.previewSize,round:!1},null,8,["src","width","height"])]),_:2},[Ve(n.$slots,(f,I)=>({name:I,fn:p(()=>[ye(n.$slots,I,{},void 0,!0)])}))]),1032,["modelValue","max-count","accept","capture","show-upload","preview-size"]),l(F,{show:t(v),"onUpdate:show":m[3]||(m[3]=f=>h(v)?v.value=f:null),"cancel-text":"取消","close-on-click-action":""},{default:p(()=>[l(w,{ref:"uploader",modelValue:t(i),"onUpdate:modelValue":m[1]||(m[1]=f=>h(i)?i.value=f:null),class:"uploader-hidden","max-count":s.maxCount,accept:s.accept,capture:s.capture,"preview-image":!1,"before-read":k,"after-read":q,onClickUpload:b},{default:p(()=>[l(y,{class:"action-sheet__name",title:"拍照"})]),_:1},8,["modelValue","max-count","accept","capture"]),l(w,{ref:"uploader",modelValue:t(i),"onUpdate:modelValue":m[2]||(m[2]=f=>h(i)?i.value=f:null),class:"uploader-hidden","max-count":s.maxCount,accept:s.accept,multiple:!0,"preview-image":!1,"before-read":k,"after-read":q,onClickUpload:b},{default:p(()=>[l(y,{class:"action-sheet__name",title:"从手机相册选择",border:!1})]),_:1},8,["modelValue","max-count","accept"])]),_:1},8,["show"])])}}}),Ke=ae(Qe,[["__scopeId","data-v-49e3d6c2"]]);const Xe=s=>(Re("data-v-8357b3a8"),s=s(),Ye(),s),Ze={class:"group"},et=Xe(()=>C("div",null,"修改头像",-1)),tt={class:"group"},ot={class:"group"},at={class:"group"};const lt=te({name:"EditBaseInfo"}),nt=Object.assign(lt,{setup(s){qe(o=>({"53343a30":t(ve)}));const S=Ie(),U=Ue(),_=R({currentDate:ee(new Date,"YYYY-MM-DD").split("-"),columnsType:["year","month","day"],dateFormat:"YYYY-MM-DD",minDate:new Date(new Date().getFullYear()-5,0,1),maxDate:new Date,showDatePicker:!1,dateField:"",userInfo:{name:U.getters.userInfo.realname,account:"",deptName:"",job:"",avatar:[{url:"https://s4.ax1x.com/2022/03/02/b3NS0A.jpg"}],sex:"",location:"",wechatId:"",birthDate:"",jobStartDate:"",email:"",introduction:""},formRef:null,formRules:{name:[{required:!0,message:"请填写姓名"}],avatar:[{required:!1,message:"请上传头像"}],sex:[{required:!1,message:"请选择性别"}],location:[{required:!1,message:"请选择居住城市"}],wechatId:[{required:!1,message:"请填写微信号"}],birthDate:[{required:!0,message:"请选择出生年月"}],jobStartDate:[{required:!0,message:"请选择参加工作时间"}],email:[{required:!1,message:"请填写邮箱"}],introduction:[{required:!1,message:"请填写个人优势"}]}}),{currentDate:v,dateFormat:V,columnsType:i,minDate:k,maxDate:q,showDatePicker:b,userInfo:a,formRules:n,formRef:m}=z(_),u=R({pickerRef:null,pickerValues:[],pickerField:"",itemHeight:44,keyword:"",columns:[],storeColums:[],showPicker:!1,showSearch:!1}),w=[{text:"男",value:"1"},{text:"女",value:"0"}],y=[{text:"北京",value:"BeiJing"},{text:"上海",value:"ShangHai"},{text:"广州",value:"Guangzhou"},{text:"深圳",value:"Shenzhen"},{text:"杭州",value:"Hangzhou"},{text:"宁波",value:"Ningbo"},{text:"温州",value:"Wenzhou"},{text:"绍兴",value:"Shaoxing"},{text:"湖州",value:"Huzhou"}],F=R({sex:w,location:y}),{pickerRef:f,itemHeight:I,pickerValues:N,keyword:j,columns:$,showPicker:D,showSearch:A}=z(u),ne=o=>{var e;return(e=w.find(g=>g.value===o))==null?void 0:e.text},re=o=>{var e;return(e=y.find(g=>g.value===o))==null?void 0:e.text},se=({selectedValues:o,selectedOptions:e,selectedIndexes:g})=>{var x;console.log(o,e,g),a.value[u.pickerField]=(x=e[0])==null?void 0:x.value,T()},T=()=>{D.value=!1,A.value=!1},ue=()=>{j.value=""},ie=o=>{if(console.log("filterVal",o),o){const e=new RegExp(o,"gi"),g=u.storeColums.filter(x=>e.test(x.text));u.columns=g}else u.columns=u.storeColums},H=o=>{_.dateField=o,o==="jobStartDate"&&(i.value=["year","month","day"],V.value="YYYY-MM-DD",k.value=new Date(1996,0,1)),o==="birthDate"&&(i.value=["year","month"],V.value="YYYY-MM",k.value=new Date(1990,0,1)),a.value[_.dateField]?v.value=a.value[o].split("-"):v.value=ee(new Date,V.value).split("-"),b.value=!0},L=o=>{u.keyword="",u.pickerField=o,u.storeColums=$.value=F[o],u.pickerValues=[a.value[o]],A.value=$.value.length>=5,D.value=!0},me=o=>{console.log("val",o),a.value[_.dateField]=o},de=()=>{Le({title:"退出确认",message:"资料尚未保存，是否确认退出？"}).then(()=>{S.back()}).catch(()=>{})},ce=()=>{var o;(o=m.value)==null||o.submit()},pe=async o=>{console.log("submit",o),await je({message:"模拟保存成功",duration:1e3}),setTimeout(()=>{S.back()},1500)},fe=o=>{console.log("failed",o);const[e]=o.errors;Y({message:e.message})},ve=Ce(0);return Se(()=>{}),(o,e)=>{const g=He,x=le,rt=Ke,d=$e,st=Oe,ge=Ee,he=Pe,E=Be,_e=ze,be=Fe,we=ke,B=Me("waves");return P(),X(we,{class:"page-wrapper"},{header:p(()=>[l(g,{"left-arrow":!1,"disable-back":"","left-text":"取消","right-text":"保存",onClickLeft:de,onClickRight:ce})]),default:p(()=>[l(ge,{ref_key:"formRef",ref:m,"label-align":"top",autocomplete:"false","show-error":!1,center:"","show-error-message":!1,"scroll-to-error":!1,onSubmit:pe,onFailed:fe},{default:p(()=>{var c,O,G,J,W,Q,K;return[C("section",Ze,[l(d,{name:"avatar",center:"","label-align":"left","input-align":"right",autocomplete:"off",required:(c=t(n).avatar[0])==null?void 0:c.required,rules:t(n).avatar,"is-link":""},{label:p(()=>[l(x,{round:"",width:"3em",height:"3em",src:"https://s4.ax1x.com/2022/03/02/b3NS0A.jpg"})]),input:p(()=>[Z("",!0),et]),_:1},8,["required","rules"])]),C("section",tt,[l(d,{modelValue:t(a).name,"onUpdate:modelValue":e[1]||(e[1]=r=>t(a).name=r),modelModifiers:{trim:!0},name:"name",label:"姓名",placeholder:"请填写",autocomplete:"off",maxlength:"12",required:(O=t(n).name[0])==null?void 0:O.required,rules:t(n).name},null,8,["modelValue","required","rules"]),l(d,{modelValue:t(a).account,"onUpdate:modelValue":e[2]||(e[2]=r=>t(a).account=r),modelModifiers:{trim:!0},name:"account",label:"账号",placeholder:"请填写",autocomplete:"off"},null,8,["modelValue"]),l(d,{modelValue:t(a).deptName,"onUpdate:modelValue":e[3]||(e[3]=r=>t(a).deptName=r),modelModifiers:{trim:!0},name:"deptName",label:"部门",placeholder:"请填写",autocomplete:"off"},null,8,["modelValue"]),l(d,{modelValue:t(a).job,"onUpdate:modelValue":e[4]||(e[4]=r=>t(a).job=r),modelModifiers:{trim:!0},name:"job",label:"职务",placeholder:"请填写",autocomplete:"off"},null,8,["modelValue"])]),C("section",ot,[M(l(d,{"model-value":ne(t(a).sex),name:"sex",label:"性别",placeholder:"请选择","is-link":"",readonly:"",autocomplete:"off",required:(G=t(n).sex[0])==null?void 0:G.required,rules:t(n).sex,onClick:e[5]||(e[5]=r=>L("sex"))},null,8,["model-value","required","rules"]),[[B]]),M(l(d,{modelValue:t(a).birthDate,"onUpdate:modelValue":e[6]||(e[6]=r=>t(a).birthDate=r),name:"birthDate",label:"生日",placeholder:"请选择",autocomplete:"off","is-link":"",readonly:"",required:(J=t(n).birthDate[0])==null?void 0:J.required,rules:t(n).birthDate,onClick:e[7]||(e[7]=r=>H("birthDate"))},null,8,["modelValue","required","rules"]),[[B]]),l(d,{modelValue:t(a).email,"onUpdate:modelValue":e[8]||(e[8]=r=>t(a).email=r),modelModifiers:{trim:!0},type:"email",name:"email",label:"邮箱",placeholder:"请填写",autocomplete:"off"},null,8,["modelValue"]),l(d,{modelValue:t(a).phone,"onUpdate:modelValue":e[9]||(e[9]=r=>t(a).phone=r),modelModifiers:{trim:!0},name:"phone",label:"手机",placeholder:"请填写",autocomplete:"off"},null,8,["modelValue"]),l(d,{modelValue:t(a).wechatId,"onUpdate:modelValue":e[10]||(e[10]=r=>t(a).wechatId=r),modelModifiers:{trim:!0},name:"wechatId",label:"微信",placeholder:"请填写",autocomplete:"off"},null,8,["modelValue"])]),C("section",at,[M(l(d,{"model-value":re(t(a).location),name:"location",label:"居住城市",placeholder:"请选择","is-link":"",readonly:"",autocomplete:"off",required:(W=t(n).location[0])==null?void 0:W.required,rules:t(n).location,onClick:e[11]||(e[11]=r=>L("location"))},null,8,["model-value","required","rules"]),[[B]]),M(l(d,{modelValue:t(a).jobStartDate,"onUpdate:modelValue":e[12]||(e[12]=r=>t(a).jobStartDate=r),name:"jobStartDate",label:"参加工作时间",placeholder:"请选择",autocomplete:"off","is-link":"",readonly:"",required:(Q=t(n).jobStartDate[0])==null?void 0:Q.required,rules:t(n).jobStartDate,onClick:e[13]||(e[13]=r=>H("jobStartDate"))},null,8,["modelValue","required","rules"]),[[B]]),(P(),X(d,{key:0,modelValue:t(a).introduction,"onUpdate:modelValue":e[14]||(e[14]=r=>t(a).introduction=r),modelModifiers:{trim:!0},name:"introduction",label:"个人优势",placeholder:"请填写",autocomplete:"off",type:"texarea",rows:"2",autosize:"","show-word-limit":"",border:!1,clearable:"",maxlength:200,required:(K=t(n).introduction[0])==null?void 0:K.required,rules:t(n).introduction},null,8,["modelValue","required","rules"]))]),Z("",!0)]}),_:1},512),l(E,{show:t(b),"onUpdate:show":e[17]||(e[17]=c=>h(b)?b.value=c:null),position:"bottom"},{default:p(()=>[l(he,{modelValue:t(v),"onUpdate:modelValue":e[15]||(e[15]=c=>h(v)?v.value=c:null),"columns-type":t(i),format:t(V),"min-date":t(k),"max-date":t(q),onConfirm:me,onCancel:e[16]||(e[16]=c=>b.value=!1)},null,8,["modelValue","columns-type","format","min-date","max-date"])]),_:1},8,["show"]),l(E,{show:t(D),"onUpdate:show":e[20]||(e[20]=c=>h(D)?D.value=c:null),position:"bottom","lazy-render":!1,"close-on-click-overlay":!0,onClickOverlay:ue},{default:p(()=>[l(be,{ref_key:"pickerRef",ref:f,modelValue:t(N),"onUpdate:modelValue":e[19]||(e[19]=c=>h(N)?N.value=c:null),class:"picker","show-toolbar":"",columns:t($),"item-height":t(I),onConfirm:se,onCancel:T},oe({_:2},[{name:"title",fn:p(()=>[l(_e,{modelValue:t(j),"onUpdate:modelValue":[e[18]||(e[18]=c=>h(j)?j.value=c:null),ie],class:"search-box",clearable:!1,"input-align":"center",placeholder:"模糊查询"},null,8,["modelValue"])]),key:"0"}]),1032,["modelValue","columns","item-height"])]),_:1},8,["show"])]),_:1})}}}),Nt=ae(nt,[["__scopeId","data-v-8357b3a8"]]);export{Nt as default};
