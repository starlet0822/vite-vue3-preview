var e=(e,a,l)=>new Promise(((t,o)=>{var r=e=>{try{i(l.next(e))}catch(a){o(a)}},u=e=>{try{i(l.throw(e))}catch(a){o(a)}},i=e=>e.done?t(e.value):Promise.resolve(e.value).then(r,u);i((l=l.apply(e,a)).next())}));import{h as a,I as l,U as t,d as o,X as r,F as u,l as i,k as s,p as n,H as d,O as m,B as c,Y as p}from"./vant-6296a122.js";import{_ as v}from"./index-f9efe695.js";import{i as f}from"./index-81cf0852.js";import{_ as h}from"./plugin-vue_export-helper-893979e1.js";import{m as b,a as g,_ as w,aI as x,ak as j,l as y,b7 as V,u as k,f as D,r as q,b as _,al as C,v as S,ai as U,aj as Y,n as I,A as z,ap as F,bk as M,C as R}from"./@vue-0da0c2e3.js";import{_ as A}from"./index-3e1b24ba.js";import{u as H}from"./vue-router-1cbad9b8.js";import"./dayjs-ffcc1c50.js";import{f as P}from"./datetime-1e01657d.js";import"./@vant-b0725c78.js";/* empty css                      */import"./amfe-flexible-385c80ea.js";import"./js-cookie-aaf6027b.js";import"./vuex-fdaeb4c6.js";import"./lodash-es-0ddda1ab.js";import"./axios-0cd4f164.js";import"./qs-efaa5365.js";import"./side-channel-ebdfdc6e.js";import"./get-intrinsic-8aab7bd3.js";import"./has-symbols-1f359e75.js";import"./function-bind-c930bb92.js";import"./has-03e8e28c.js";import"./call-bind-b7e23f7e.js";import"./object-inspect-af06f273.js";import"./@antv-74afab59.js";import"./tslib-546db90a.js";import"./fecha-2b185e5a.js";import"./nprogress-4e4fc296.js";import"./vue3-hash-calendar-e234247e.js";import"./hammerjs-ed6f6a9e.js";const B={class:"uploadImg"},O=b({name:"UploadImg"});var N=h(Object.assign(O,{props:{modelValue:{type:Array,default:()=>[]},accept:{type:String,default:"image/*"},capture:{type:String,default:"camera"},maxCount:{type:[Number,String],default:9},previewSize:{type:[Number,String],default:54},showUpload:{type:Boolean,default:!0}},emits:["update:modelValue","change"],setup(u,{emit:i}){const s=u,n=g({showAction:!1,actions:[{name:"拍照",key:""},{name:"从手机相册选择"}],fileList:s.modelValue}),{showAction:d,actions:m,fileList:c}=w(n),p=e=>{const l=/image\/(png|jpg|jpeg)$/;if(f(e))for(let t=0;t<e.length;t++){const o=e[t];if(!l.test(o.type))return a("请上传 png、jpg、jpeg 格式图片"),!1}else if(!l.test(e.type))return a("请上传 png、jpg、jpeg 格式图片"),!1;return!0},v=a=>e(this,null,(function*(){n.showAction=!1,i("update:modelValue",c.value)})),h=e=>{},b=()=>{c.length>=+s.maxCount?a({message:"最多允许上传 9 张图片"}):n.showAction=!0};return(e,a)=>{const i=l,s=t,n=o,m=r;return x(),j("div",B,[y(s,{modelValue:k(c),"onUpdate:modelValue":a[0]||(a[0]=e=>D(c)?c.value=e:null),class:"uploader-show","max-count":u.maxCount,accept:u.accept,capture:u.capture,multiple:!0,"show-upload":u.showUpload,readonly:!0,"preview-size":u.previewSize,onClickUpload:b},{default:V((()=>[y(i,{src:k("/vite-vue3-preview/assets/ic_camera_add.c730e1ec.png"),width:u.previewSize,height:u.previewSize,round:!1},null,8,["src","width","height"])])),_:1},8,["modelValue","max-count","accept","capture","show-upload","preview-size"]),y(m,{show:k(d),"onUpdate:show":a[3]||(a[3]=e=>D(d)?d.value=e:null),"cancel-text":"取消","close-on-click-action":""},{default:V((()=>[y(s,{ref:"uploader",modelValue:k(c),"onUpdate:modelValue":a[1]||(a[1]=e=>D(c)?c.value=e:null),class:"uploader-hidden","max-count":u.maxCount,accept:u.accept,capture:u.capture,"preview-image":!1,"before-read":p,"after-read":v,onClickUpload:h},{default:V((()=>[y(n,{class:"action-sheet__name",title:"拍照"})])),_:1},8,["modelValue","max-count","accept","capture"]),y(s,{ref:"uploader",modelValue:k(c),"onUpdate:modelValue":a[2]||(a[2]=e=>D(c)?c.value=e:null),class:"uploader-hidden","max-count":u.maxCount,accept:u.accept,multiple:!0,"preview-image":!1,"before-read":p,"after-read":v,onClickUpload:h},{default:V((()=>[y(n,{class:"action-sheet__name",title:"从手机相册选择",border:!1})])),_:1},8,["modelValue","max-count","accept"])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-7f5cb038"]]);const E={class:"layout__page"},L={class:"layout__header"},T={class:"layout__body"},G={class:"submit-btn__placeholder"},J={id:"fixed-bottom",class:"bottom-button--submit"},W=b({name:"EditBaseInfo"});var X=h(Object.assign(W,{setup(l){M((e=>({"4a94db8c":k(be)}))),H();const t=g({currentDate:P(new Date,"YYYY-MM-DD").split("-"),columnsType:["year","month","day"],dateFormat:"YYYY-MM-DD",minDate:new Date((new Date).getFullYear()-5,0,1),maxDate:new Date,showDatePicker:!1,dateField:"",userInfo:{name:"",avatar:[],sex:"",location:"",wechatId:"",birthDate:"",jobStartDate:"",email:"",introduction:""},formRef:null,formRules:{name:[{required:!0,message:"请填写姓名"}],avatar:[{required:!1,message:"请上传头像"}],sex:[{required:!1,message:"请选择性别"}],location:[{required:!1,message:"请选择居住城市"}],wechatId:[{required:!1,message:"请填写微信号"}],birthDate:[{required:!0,message:"请选择出生年月"}],jobStartDate:[{required:!0,message:"请选择参加工作时间"}],email:[{required:!1,message:"请填写邮箱"}],introduction:[{required:!0,message:"请填写个人优势"}]}}),{currentDate:o,dateFormat:r,columnsType:c,minDate:f,maxDate:h,showDatePicker:b,userInfo:B,formRules:O,formRef:W}=w(t),X=g({pickerRef:null,pickerValues:[],pickerField:"",itemHeight:44,keyword:"",columns:[],storeColums:[],showPicker:!1,showSearch:!1}),$=[{text:"男",value:"1"},{text:"女",value:"0"}],K=[{text:"北京",value:"BeiJing"},{text:"上海",value:"ShangHai"},{text:"广州",value:"Guangzhou"},{text:"深圳",value:"Shenzhen"},{text:"杭州",value:"Hangzhou"},{text:"宁波",value:"Ningbo"},{text:"温州",value:"Wenzhou"},{text:"绍兴",value:"Shaoxing"},{text:"湖州",value:"Huzhou"}],Q=g({sex:$,location:K}),{pickerRef:Z,itemHeight:ee,pickerValues:ae,keyword:le,columns:te,showPicker:oe,showSearch:re}=w(X),ue=e=>{var a;return null==(a=$.find((a=>a.value===e)))?void 0:a.text},ie=e=>{var a;return null==(a=K.find((a=>a.value===e)))?void 0:a.text},se=({selectedValues:e,selectedOptions:a,selectedIndexes:l})=>{var t;B.value[X.pickerField]=null==(t=a[0])?void 0:t.value,ne()},ne=()=>{oe.value=!1,re.value=!1},de=()=>{le.value=""},me=e=>{if(e){const a=new RegExp(e,"gi"),l=X.storeColums.filter((e=>a.test(e.text)));X.columns=l}else X.columns=X.storeColums},ce=e=>{t.dateField=e,"jobStartDate"===e&&(c.value=["year","month","day"],r.value="YYYY-MM-DD",f.value=new Date(1996,0,1)),"birthDate"===e&&(c.value=["year","month"],r.value="YYYY-MM",f.value=new Date(1990,0,1)),B.value[t.dateField]?o.value=B.value[e].split("-"):o.value=P(new Date,r.value).split("-"),b.value=!0},pe=e=>{X.keyword="",X.pickerField=e,X.storeColums=te.value=Q[e],X.pickerValues=[B.value[e]],re.value=te.value.length>=5,oe.value=!0},ve=e=>{B.value[t.dateField]=e},fe=a=>e(this,null,(function*(){var e;yield I(),null==(e=W.value)||e.submit(),p({message:"保存成功"})})),he=e=>{const[l]=e.errors;a({message:l.message})},be=q(0),ge=()=>e(this,null,(function*(){var e;yield I(),be.value=(null==(e=document.querySelector("#fixed-bottom"))?void 0:e.getBoundingClientRect().height)+"px"}));return _((()=>{ge()})),(e,a)=>{const l=A,t=N,p=u,g=i,w=s,q=v,_=n,I=d,M=m,H=R("waves");return x(),j("div",E,[C("div",L,[y(l)]),C("div",T,[y(g,{ref_key:"formRef",ref:W,autocomplete:!1,"show-error":!1,center:"","show-error-message":!1,onSubmit:fe,onFailed:he},{default:V((()=>{var e,l,o,r,u,i,s,n,d;return[y(p,{name:"avatar",label:"头像",center:"","input-align":"right",autocomplete:"off",required:null==(e=k(O).avatar[0])?void 0:e.required,rules:k(O).avatar},{input:V((()=>[y(t,{modelValue:k(B).avatar,"onUpdate:modelValue":a[0]||(a[0]=e=>k(B).avatar=e),"max-count":"1"},null,8,["modelValue"])])),_:1},8,["required","rules"]),y(p,{modelValue:k(B).name,"onUpdate:modelValue":a[1]||(a[1]=e=>k(B).name=e),modelModifiers:{trim:!0},name:"name",label:"姓名","label-align":"top",placeholder:"请填写",autocomplete:"off",maxlength:"12",required:null==(l=k(O).name[0])?void 0:l.required,rules:k(O).name},null,8,["modelValue","required","rules"]),S(y(p,{"model-value":ue(k(B).sex),name:"sex",label:"性别","label-align":"top",placeholder:"请选择","is-link":"",readonly:"",autocomplete:"off",required:null==(o=k(O).sex[0])?void 0:o.required,rules:k(O).sex,onClick:a[2]||(a[2]=e=>pe("sex"))},null,8,["model-value","required","rules"]),[[H]]),S(y(p,{"model-value":ie(k(B).location),name:"location",label:"居住城市","label-align":"top",placeholder:"请选择","is-link":"",readonly:"",autocomplete:"off",required:null==(r=k(O).location[0])?void 0:r.required,rules:k(O).location,onClick:a[3]||(a[3]=e=>pe("location"))},null,8,["model-value","required","rules"]),[[H]]),S(y(p,{modelValue:k(B).jobStartDate,"onUpdate:modelValue":a[4]||(a[4]=e=>k(B).jobStartDate=e),name:"jobStartDate",label:"参加工作时间","label-align":"top",placeholder:"请选择",autocomplete:"off","is-link":"",readonly:"",required:null==(u=k(O).jobStartDate[0])?void 0:u.required,rules:k(O).jobStartDate,onClick:a[5]||(a[5]=e=>ce("jobStartDate"))},null,8,["modelValue","required","rules"]),[[H]]),y(p,{modelValue:k(B).wechatId,"onUpdate:modelValue":a[6]||(a[6]=e=>k(B).wechatId=e),modelModifiers:{trim:!0},name:"wechatId",label:"微信号","label-align":"top",placeholder:"请填写",autocomplete:"off",required:null==(i=k(O).wechatId[0])?void 0:i.required,rules:k(O).wechatId},null,8,["modelValue","required","rules"]),S(y(p,{modelValue:k(B).birthDate,"onUpdate:modelValue":a[7]||(a[7]=e=>k(B).birthDate=e),name:"birthDate",label:"出生年月","label-align":"top",placeholder:"请选择",autocomplete:"off","is-link":"",readonly:"",required:null==(s=k(O).birthDate[0])?void 0:s.required,rules:k(O).birthDate,onClick:a[8]||(a[8]=e=>ce("birthDate"))},null,8,["modelValue","required","rules"]),[[H]]),y(p,{modelValue:k(B).email,"onUpdate:modelValue":a[9]||(a[9]=e=>k(B).email=e),modelModifiers:{trim:!0},type:"email",name:"email",label:"邮箱","label-align":"top",placeholder:"请填写",autocomplete:"off",required:null==(n=k(O).email[0])?void 0:n.required,rules:k(O).email},null,8,["modelValue","required","rules"]),(x(),U(p,{key:0,modelValue:k(B).introduction,"onUpdate:modelValue":a[10]||(a[10]=e=>k(B).introduction=e),modelModifiers:{trim:!0},name:"introduction",label:"个人优势","label-align":"top",placeholder:"请填写",autocomplete:"off",type:"texarea",rows:"2",autosize:"","show-word-limit":"",border:!0,clearable:"",maxlength:200,required:null==(d=k(O).introduction[0])?void 0:d.required,rules:k(O).introduction},null,8,["modelValue","required","rules"]))]})),_:1},512)]),C("div",G,[C("div",J,[S((x(),U(w,{block:"",type:"primary","native-type":"submit",onClick:fe},{default:V((()=>[z(" 保存 ")])),_:1})),[[H]])])]),y(_,{show:k(b),"onUpdate:show":a[13]||(a[13]=e=>D(b)?b.value=e:null),position:"bottom"},{default:V((()=>[y(q,{modelValue:k(o),"onUpdate:modelValue":a[11]||(a[11]=e=>D(o)?o.value=e:null),"columns-type":k(c),format:k(r),"min-date":k(f),"max-date":k(h),onConfirm:ve,onCancel:a[12]||(a[12]=e=>b.value=!1)},null,8,["modelValue","columns-type","format","min-date","max-date"])])),_:1},8,["show"]),y(_,{show:k(oe),"onUpdate:show":a[16]||(a[16]=e=>D(oe)?oe.value=e:null),position:"bottom","lazy-render":!1,"close-on-click-overlay":!0,onClickOverlay:de},{default:V((()=>[y(M,{ref_key:"pickerRef",ref:Z,modelValue:k(ae),"onUpdate:modelValue":a[15]||(a[15]=e=>D(ae)?ae.value=e:null),class:"picker","show-toolbar":"",columns:k(te),"item-height":k(ee),onConfirm:se,onCancel:ne},F({_:2},[{name:"title",fn:V((()=>[y(I,{modelValue:k(le),"onUpdate:modelValue":[a[14]||(a[14]=e=>D(le)?le.value=e:null),me],class:"search-box",clearable:!1,"input-align":"center",placeholder:"模糊查询"},null,8,["modelValue"])])),key:"0"}]),1032,["modelValue","columns","item-height"])])),_:1},8,["show"]),Y("",!0)])}}}),[["__scopeId","data-v-213e96af"]]);export{X as default};
