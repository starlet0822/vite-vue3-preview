var e=(e,a,l)=>new Promise(((t,o)=>{var r=e=>{try{i(l.next(e))}catch(a){o(a)}},u=e=>{try{i(l.throw(e))}catch(a){o(a)}},i=e=>e.done?t(e.value):Promise.resolve(e.value).then(r,u);i((l=l.apply(e,a)).next())}));import{h as a,I as l,U as t,d as o,X as r,F as u,j as i,k as s,o as n,H as d,O as m,B as c,Y as p}from"./vant-c731c718.js";import{_ as v}from"./index-2ddcffbd.js";import{i as f}from"./index-c2271971.js";import{_ as h}from"./plugin-vue_export-helper-893979e1.js";import{m as b,a as g,_ as w,aI as x,ak as j,l as y,b7 as V,u as k,f as D,r as q,b as _,aj as S,n as C,v as U,ai as Y,al as I,A as z,ap as F,bk as M,C as R}from"./@vue-0da0c2e3.js";import{_ as A}from"./index-2f91436e.js";import{f as H}from"./datetime-2936a4a4.js";import"./@vant-b0725c78.js";/* empty css                      */import"./amfe-flexible-385c80ea.js";import"./js-cookie-aaf6027b.js";import"./vue-router-1cbad9b8.js";import"./vuex-fdaeb4c6.js";import"./@vueuse-13b67ac5.js";import"./lodash-es-12d03b41.js";import"./axios-0cd4f164.js";import"./qs-efaa5365.js";import"./side-channel-ebdfdc6e.js";import"./get-intrinsic-8aab7bd3.js";import"./has-symbols-1f359e75.js";import"./function-bind-c930bb92.js";import"./has-03e8e28c.js";import"./call-bind-b7e23f7e.js";import"./object-inspect-af06f273.js";import"./@antv-74afab59.js";import"./tslib-546db90a.js";import"./fecha-2b185e5a.js";import"./nprogress-4e4fc296.js";import"./vue3-hash-calendar-e234247e.js";import"./hammerjs-ed6f6a9e.js";import"./dayjs-ffcc1c50.js";const P={class:"uploadImg"},B=b({name:"UploadImg"});var O=h(Object.assign(B,{props:{modelValue:{type:Array,default:()=>[]},accept:{type:String,default:"image/*"},capture:{type:String,default:"camera"},maxCount:{type:[Number,String],default:9},previewSize:{type:[Number,String],default:54},showUpload:{type:Boolean,default:!0}},emits:["update:modelValue","change"],setup(u,{emit:i}){const s=u,n=g({showAction:!1,actions:[{name:"拍照",key:""},{name:"从手机相册选择"}],fileList:s.modelValue}),{showAction:d,actions:m,fileList:c}=w(n),p=e=>{const l=/image\/(png|jpg|jpeg)$/;if(f(e))for(let t=0;t<e.length;t++){const o=e[t];if(!l.test(o.type))return a("请上传 png、jpg、jpeg 格式图片"),!1}else if(!l.test(e.type))return a("请上传 png、jpg、jpeg 格式图片"),!1;return!0},v=a=>e(this,null,(function*(){n.showAction=!1,i("update:modelValue",c.value)})),h=e=>{},b=()=>{c.length>=+s.maxCount?a({message:"最多允许上传 9 张图片"}):n.showAction=!0};return(e,a)=>{const i=l,s=t,n=o,m=r;return x(),j("div",P,[y(s,{modelValue:k(c),"onUpdate:modelValue":a[0]||(a[0]=e=>D(c)?c.value=e:null),class:"uploader-show","max-count":u.maxCount,accept:u.accept,capture:u.capture,multiple:!0,"show-upload":u.showUpload,readonly:!0,"preview-size":u.previewSize,onClickUpload:b},{default:V((()=>[y(i,{src:k("/vite-vue3-preview/assets/ic_camera_add.c730e1ec.png"),width:u.previewSize,height:u.previewSize,round:!1},null,8,["src","width","height"])])),_:1},8,["modelValue","max-count","accept","capture","show-upload","preview-size"]),y(m,{show:k(d),"onUpdate:show":a[3]||(a[3]=e=>D(d)?d.value=e:null),"cancel-text":"取消","close-on-click-action":""},{default:V((()=>[y(s,{ref:"uploader",modelValue:k(c),"onUpdate:modelValue":a[1]||(a[1]=e=>D(c)?c.value=e:null),class:"uploader-hidden","max-count":u.maxCount,accept:u.accept,capture:u.capture,"preview-image":!1,"before-read":p,"after-read":v,onClickUpload:h},{default:V((()=>[y(n,{class:"action-sheet__name",title:"拍照"})])),_:1},8,["modelValue","max-count","accept","capture"]),y(s,{ref:"uploader",modelValue:k(c),"onUpdate:modelValue":a[2]||(a[2]=e=>D(c)?c.value=e:null),class:"uploader-hidden","max-count":u.maxCount,accept:u.accept,multiple:!0,"preview-image":!1,"before-read":p,"after-read":v,onClickUpload:h},{default:V((()=>[y(n,{class:"action-sheet__name",title:"从手机相册选择",border:!1})])),_:1},8,["modelValue","max-count","accept"])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-35e752a8"]]);const N={class:"layout__page"},E={id:"fixed-bottom__placeholder"},L={id:"fixed-bottom",class:"bottom-button--submit"},T=b({name:"EditBaseInfo"});var G=h(Object.assign(T,{setup(l){M((e=>({"1147fbd4":k(ve)})));const t=g({currentDate:H(new Date,"YYYY-MM-DD").split("-"),columnsType:["year","month","day"],dateFormat:"YYYY-MM-DD",minDate:new Date((new Date).getFullYear()-5,0,1),maxDate:new Date,showDatePicker:!1,dateField:"",userInfo:{name:"",avatar:[],sex:"",location:"",wechatId:"",birthDate:"",jobStartDate:"",email:"",introduction:""},formRef:null,formRules:{name:[{required:!0,message:"请填写姓名"}],avatar:[{required:!1,message:"请上传头像"}],sex:[{required:!1,message:"请选择性别"}],location:[{required:!1,message:"请选择居住城市"}],wechatId:[{required:!1,message:"请填写微信号"}],birthDate:[{required:!0,message:"请选择出生年月"}],jobStartDate:[{required:!0,message:"请选择参加工作时间"}],email:[{required:!1,message:"请填写邮箱"}],introduction:[{required:!0,message:"请填写个人优势"}]}}),{currentDate:o,dateFormat:r,columnsType:c,minDate:f,maxDate:h,showDatePicker:b,userInfo:P,formRules:B,formRef:T}=w(t),G=g({pickerRef:null,pickerValues:[],pickerField:"",itemHeight:44,keyword:"",columns:[],storeColums:[],showPicker:!1,showSearch:!1}),J=[{text:"男",value:"1"},{text:"女",value:"0"}],W=[{text:"北京",value:"BeiJing"},{text:"上海",value:"ShangHai"},{text:"广州",value:"Guangzhou"},{text:"深圳",value:"Shenzhen"},{text:"杭州",value:"Hangzhou"},{text:"宁波",value:"Ningbo"},{text:"温州",value:"Wenzhou"},{text:"绍兴",value:"Shaoxing"},{text:"湖州",value:"Huzhou"}],X=g({sex:J,location:W}),{pickerRef:$,itemHeight:K,pickerValues:Q,keyword:Z,columns:ee,showPicker:ae,showSearch:le}=w(G),te=e=>{var a;return null==(a=J.find((a=>a.value===e)))?void 0:a.text},oe=e=>{var a;return null==(a=W.find((a=>a.value===e)))?void 0:a.text},re=({selectedValues:e,selectedOptions:a,selectedIndexes:l})=>{var t;P.value[G.pickerField]=null==(t=a[0])?void 0:t.value,ue()},ue=()=>{ae.value=!1,le.value=!1},ie=()=>{Z.value=""},se=e=>{if(e){const a=new RegExp(e,"gi"),l=G.storeColums.filter((e=>a.test(e.text)));G.columns=l}else G.columns=G.storeColums},ne=e=>{t.dateField=e,"jobStartDate"===e&&(c.value=["year","month","day"],r.value="YYYY-MM-DD",f.value=new Date(1996,0,1)),"birthDate"===e&&(c.value=["year","month"],r.value="YYYY-MM",f.value=new Date(1990,0,1)),P.value[t.dateField]?o.value=P.value[e].split("-"):o.value=H(new Date,r.value).split("-"),b.value=!0},de=e=>{G.keyword="",G.pickerField=e,G.storeColums=ee.value=X[e],G.pickerValues=[P.value[e]],le.value=ee.value.length>=5,ae.value=!0},me=e=>{P.value[t.dateField]=e},ce=a=>e(this,null,(function*(){yield p({message:"模拟保存成功"})})),pe=e=>{const[l]=e.errors;a({message:l.message})},ve=q(0),fe=()=>e(this,null,(function*(){var e;yield C(),ve.value=(null==(e=document.querySelector("#fixed-bottom"))?void 0:e.getBoundingClientRect().height)+"px"}));return _((()=>{fe()})),(e,a)=>{const l=A,t=O,p=u,g=i,w=s,q=v,_=n,C=d,M=m,H=R("waves");return x(),j("div",N,[y(l),y(w,{ref_key:"formRef",ref:T,autocomplete:!1,"show-error":!1,center:"","show-error-message":!1,"scroll-to-error":!1,onSubmit:ce,onFailed:pe},{default:V((()=>{var e,l,o,r,u,i,s,n,d;return[y(p,{name:"avatar",label:"头像",center:"","input-align":"right",autocomplete:"off",required:null==(e=k(B).avatar[0])?void 0:e.required,rules:k(B).avatar},{input:V((()=>[y(t,{modelValue:k(P).avatar,"onUpdate:modelValue":a[0]||(a[0]=e=>k(P).avatar=e),"max-count":"1"},null,8,["modelValue"])])),_:1},8,["required","rules"]),y(p,{modelValue:k(P).name,"onUpdate:modelValue":a[1]||(a[1]=e=>k(P).name=e),modelModifiers:{trim:!0},name:"name",label:"姓名","label-align":"top",placeholder:"请填写",autocomplete:"off",maxlength:"12",required:null==(l=k(B).name[0])?void 0:l.required,rules:k(B).name},null,8,["modelValue","required","rules"]),U(y(p,{"model-value":te(k(P).sex),name:"sex",label:"性别","label-align":"top",placeholder:"请选择","is-link":"",readonly:"",autocomplete:"off",required:null==(o=k(B).sex[0])?void 0:o.required,rules:k(B).sex,onClick:a[2]||(a[2]=e=>de("sex"))},null,8,["model-value","required","rules"]),[[H]]),U(y(p,{"model-value":oe(k(P).location),name:"location",label:"居住城市","label-align":"top",placeholder:"请选择","is-link":"",readonly:"",autocomplete:"off",required:null==(r=k(B).location[0])?void 0:r.required,rules:k(B).location,onClick:a[3]||(a[3]=e=>de("location"))},null,8,["model-value","required","rules"]),[[H]]),U(y(p,{modelValue:k(P).jobStartDate,"onUpdate:modelValue":a[4]||(a[4]=e=>k(P).jobStartDate=e),name:"jobStartDate",label:"参加工作时间","label-align":"top",placeholder:"请选择",autocomplete:"off","is-link":"",readonly:"",required:null==(u=k(B).jobStartDate[0])?void 0:u.required,rules:k(B).jobStartDate,onClick:a[5]||(a[5]=e=>ne("jobStartDate"))},null,8,["modelValue","required","rules"]),[[H]]),y(p,{modelValue:k(P).wechatId,"onUpdate:modelValue":a[6]||(a[6]=e=>k(P).wechatId=e),modelModifiers:{trim:!0},name:"wechatId",label:"微信号","label-align":"top",placeholder:"请填写",autocomplete:"off",required:null==(i=k(B).wechatId[0])?void 0:i.required,rules:k(B).wechatId},null,8,["modelValue","required","rules"]),U(y(p,{modelValue:k(P).birthDate,"onUpdate:modelValue":a[7]||(a[7]=e=>k(P).birthDate=e),name:"birthDate",label:"出生年月","label-align":"top",placeholder:"请选择",autocomplete:"off","is-link":"",readonly:"",required:null==(s=k(B).birthDate[0])?void 0:s.required,rules:k(B).birthDate,onClick:a[8]||(a[8]=e=>ne("birthDate"))},null,8,["modelValue","required","rules"]),[[H]]),y(p,{modelValue:k(P).email,"onUpdate:modelValue":a[9]||(a[9]=e=>k(P).email=e),modelModifiers:{trim:!0},type:"email",name:"email",label:"邮箱","label-align":"top",placeholder:"请填写",autocomplete:"off",required:null==(n=k(B).email[0])?void 0:n.required,rules:k(B).email},null,8,["modelValue","required","rules"]),(x(),Y(p,{key:0,modelValue:k(P).introduction,"onUpdate:modelValue":a[10]||(a[10]=e=>k(P).introduction=e),modelModifiers:{trim:!0},name:"introduction",label:"个人优势","label-align":"top",placeholder:"请填写",autocomplete:"off",type:"texarea",rows:"2",autosize:"","show-word-limit":"",border:!1,clearable:"",maxlength:200,required:null==(d=k(B).introduction[0])?void 0:d.required,rules:k(B).introduction},null,8,["modelValue","required","rules"])),I("div",E,[I("div",L,[U((x(),Y(g,{block:"",type:"primary","native-type":"submit"},{default:V((()=>[z("保存")])),_:1})),[[H]])])])]})),_:1},512),y(_,{show:k(b),"onUpdate:show":a[13]||(a[13]=e=>D(b)?b.value=e:null),position:"bottom"},{default:V((()=>[y(q,{modelValue:k(o),"onUpdate:modelValue":a[11]||(a[11]=e=>D(o)?o.value=e:null),"columns-type":k(c),format:k(r),"min-date":k(f),"max-date":k(h),onConfirm:me,onCancel:a[12]||(a[12]=e=>b.value=!1)},null,8,["modelValue","columns-type","format","min-date","max-date"])])),_:1},8,["show"]),y(_,{show:k(ae),"onUpdate:show":a[16]||(a[16]=e=>D(ae)?ae.value=e:null),position:"bottom","lazy-render":!1,"close-on-click-overlay":!0,onClickOverlay:ie},{default:V((()=>[y(M,{ref_key:"pickerRef",ref:$,modelValue:k(Q),"onUpdate:modelValue":a[15]||(a[15]=e=>D(Q)?Q.value=e:null),class:"picker","show-toolbar":"",columns:k(ee),"item-height":k(K),onConfirm:re,onCancel:ue},F({_:2},[{name:"title",fn:V((()=>[y(C,{modelValue:k(Z),"onUpdate:modelValue":[a[14]||(a[14]=e=>D(Z)?Z.value=e:null),se],class:"search-box",clearable:!1,"input-align":"center",placeholder:"模糊查询"},null,8,["modelValue"])])),key:"0"}]),1032,["modelValue","columns","item-height"])])),_:1},8,["show"]),S("",!0)])}}}),[["__scopeId","data-v-5ac35ce4"]]);export{G as default};
