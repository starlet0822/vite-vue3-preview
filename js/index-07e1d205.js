import{n as e,q as t,R as o,P as a,d as s,Q as l,G as i,e as n,x as r,y as c,V as d,F as p,W as m,j as u,k as h,X as f,B as v,Y as x,h as b}from"./vant-92334e9f.js";import{_ as g}from"./Image-eb0b2fd1.js";import{_ as j}from"./index-1904e199.js";import{_ as w}from"./index-014fd06b.js";import{u as y}from"./vue-router-1cbad9b8.js";import{u as k,t as _}from"./index-ecf177a0.js";import{d as C}from"./dayjs-ffcc1c50.js";import{p as V,h as I}from"./index-3805aa1a.js";import{_ as q}from"./plugin-vue_export-helper-893979e1.js";import{m as T,a as S,c as z,_ as F,r as D,q as R,b as U,ak as B,l as E,b7 as L,a2 as N,u as P,al as Q,t as G,A as H,a5 as O,F as J,aN as W,f as X,aI as Y,v as A,ai as K,aj as M,C as Z,aK as $,aJ as ee}from"./@vue-0da0c2e3.js";import"./@vant-b0725c78.js";/* empty css                      */import"./amfe-flexible-385c80ea.js";import"./js-cookie-aaf6027b.js";import"./vuex-fdaeb4c6.js";import"./@vueuse-cf363312.js";import"./lodash-es-12d03b41.js";import"./axios-0cd4f164.js";import"./qs-efaa5365.js";import"./side-channel-ebdfdc6e.js";import"./get-intrinsic-8aab7bd3.js";import"./has-symbols-1f359e75.js";import"./function-bind-c930bb92.js";import"./has-03e8e28c.js";import"./call-bind-b7e23f7e.js";import"./object-inspect-af06f273.js";import"./@antv-74afab59.js";import"./tslib-546db90a.js";import"./fecha-2b185e5a.js";import"./nprogress-4e4fc296.js";import"./vue3-hash-calendar-e234247e.js";import"./hammerjs-ed6f6a9e.js";function te(e){if("ios"===k()){const t=document.createElement("a");t.href="tel:"+e,t.style.visibility="hidden",document.body.appendChild(t),t.click()}else window.location.href="tel:"+e}const oe=e=>($("data-v-712d70ed"),e=e(),ee(),e),ae={class:"mine"},se={class:"st-padding-left-15"},le={class:"mine-content"},ie={class:"bg"},ne={class:"user-box"},re={class:"headImg st-flex-jc-ai"},ce={class:"base-info"},de={class:"st-title name"},pe={class:"st-font-14"},me={class:"st-margin-right-10"},ue={class:"content"},he={class:"tag-box st-font-14"},fe={class:"st-flex-ai st-padding-bottom-10"},ve=oe((()=>Q("span",{class:"custom-title"},"个人标签",-1))),xe=oe((()=>Q("div",{class:"st-padding-5 st-tip"},O("长按标签可删除"),-1))),be={class:"tag-list st-padding-box tag-list st-flex st-flex-wrap"},ge={class:"st-flex-center"},je={class:"add-tag"},we={style:{margin:"16px"}},ye=T({name:"Mine"});var ke=q(Object.assign(ye,{setup(k){const q=_,T=y(),$=S({title:T.currentRoute.value.meta.title,user:{name:"吴小星",avatar:"https://xxx.png",occupation:"web前端",birthDate:"1996.04",yearLength:"3",tel:18889352620,company:"未知企业",tags:[{icon:"workstate",value:"离职-随时到岗"},{icon:"education",value:"本科"},{icon:"birthday",value:C().diff("1996-04-05","year")+"岁"}],pressIndex:null,tagsText:["添加标签","html","css","javaScript","vue2/vue3","react","uniapp","微信小程序","sass/less","nodeJs","webpack","vite","实践选手","善于思考"],introduction:"本人计算机专业，3年以上的前端工作经验，具备比较扎实的计算机基础知识和前端技术。既可以使用jQuery开发项目，也可以基于Vue等新技术快速开发，主要擅长Vue。 可以独立完成前端开发工作，遇到难点即可查阅相关官方文档解决；善于运用工具提高开发效率。对于工作，积极认真，较强的适应能力和自学能力；性格温和善良，责任心强，虚心好学，热衷前端开发；注重团队协作精神，富有强烈的上进心。"},activeNames:["1","2","3"],tools:[{title:"编程开发",name:"1",list:[{text:"VSCode",icon:"photo-o",to:""},{text:"Webstorm",icon:"photo-o",to:""},{text:"Sourcetree",icon:"photo-o",to:""},{text:"Postman",icon:"photo-o",to:""},{text:"Charles",icon:"photo-o",to:""},{text:"Fiddler",icon:"photo-o",to:""},{text:"微信开发者工具",icon:"photo-o",to:""},{text:"HBuilderX",icon:"photo-o",to:""},{text:"Git Bash",icon:"photo-o",to:""},{text:"Chrome",icon:"photo-o",to:""},{text:"Firefox",icon:"photo-o",to:""},{text:"Notepad++",icon:"photo-o",to:""},{text:"Typora",icon:"photo-o",to:""}]},{title:"效率工具",name:"2",list:[{text:"uTools",icon:"photo-o",to:""},{text:"Snipaste",icon:"photo-o",to:""}]},{title:"Chrome插件",name:"3",list:[{text:"FeHelper",icon:"photo-o",to:""},{text:"Vue Devtools",icon:"photo-o",to:""},{text:"Redux Devtools",icon:"photo-o",to:""},{text:"React Developer Tools",icon:"photo-o",to:""},{text:"Console Importer",icon:"photo-o",to:""},{text:"OctoTree",icon:"photo-o",to:""},{text:"GitZip for gitHub",icon:"photo-o",to:""},{text:"IE Tab",icon:"photo-o",to:""},{text:"Block Site",icon:"photo-o",to:""},{text:"沙拉查词",icon:"photo-o",to:""},{text:"下载+",icon:"photo-o",to:""}]}]}),ee=z((()=>I($.user.tel))),{title:oe,user:ye,tools:ke,activeNames:_e}=F($),Ce=D(null),Ve=D(!1),Ie=D(!1),qe=D(""),Te=D(!1);D(!1),D(4),D(null);const Se=[[{name:"微信",icon:"wechat"},{name:"朋友圈",icon:"wechat-moments"},{name:"微博",icon:"weibo"},{name:"QQ",icon:"qq"}],[{name:"复制链接",icon:"link"},{name:"分享海报",icon:"poster"},{name:"二维码",icon:"qrcode"},{name:"小程序码",icon:"weapp-qrcode"}]],ze=D(50),Fe=D(!1);R((()=>{window.removeEventListener("scroll",De,!0)})),U((()=>{window.addEventListener("scroll",De)}));const De=()=>{Fe.value=window.pageYOffset>ze.value},Re=e=>({cb(){$.user.pressIndex=e}}),Ue=e=>{$.user.tagsText.splice($.user.pressIndex,1),$.user.pressIndex=null},Be=e=>{$.user.tagsText.splice(1,0,e.tagValue),Ie.value=!1,Le()},Ee=e=>{const[t]=e.errors;b({message:t.message})},Le=()=>{Ce.value.resetValidation(["tagValue"]),qe.value=""},Ne=e=>{x(e.name),Ie.value=!1},Pe=e=>{return t=this,o=null,a=function*(){switch(e){case"chart":T.push({name:"Charts",params:{}});break;case"link":Te.value=!0}},new Promise(((e,s)=>{var l=e=>{try{n(a.next(e))}catch(t){s(t)}},i=e=>{try{n(a.throw(e))}catch(t){s(t)}},n=t=>t.done?e(t.value):Promise.resolve(t.value).then(l,i);n((a=a.apply(t,o)).next())}));var t,o,a},Qe=()=>{T.push({path:"/edit-baseinfo"})};return(x,y)=>{const k=w,_=j,C=g,I=e,T=t,S=o,z=a,F=s,D=l,R=i,U=n,$=r,oe=c,ze=d,De=p,Ge=m,He=u,Oe=h,Je=f,We=v,Xe=Z("press"),Ye=Z("waves");return Y(),B("div",ae,[E(_,{border:!1,"z-index":999,class:N(["mine-nav-bar",{"nav-bar-bg":P(Fe)}])},{right:L((()=>[E(k,{"class-name":"st-color-blue",name:"chart",onClick:Pe}),Q("div",se,[E(k,{"class-name":"st-color-blue",name:"link",onClick:Pe})])])),_:1},8,["class"]),Q("div",le,[Q("div",ie,[Q("div",ne,[Q("div",re,[E(C,G({width:60,height:60,radius:60},{round:""}),null,16),Q("div",{class:"edit-btn st-font-12",onClick:Qe},"编辑个人信息")]),Q("div",ce,[Q("p",de,[H(O(P(ye).name)+" ",1),Q("span",pe,"("+O(P(ye).birthDate)+")",1)]),E(S,{type:"flex",align:"center"},{default:L((()=>[E(I,{span:"10",class:"st-font-12"},{default:L((()=>[Q("div",null,O(P(ye).occupation)+"・"+O(P(ye).yearLength+" 年以上"),1)])),_:1}),E(I,{span:"14"},{default:L((()=>[Q("div",{class:"st-align-right st-font-14",onClick:y[0]||(y[0]=e=>P(te)(P(ye).tel))},[Q("span",me,O(P(ee)),1),E(T,{name:"phone-o",color:"#fff",size:P(V)(14)},null,8,["size"])])])),_:1})])),_:1})])])]),Q("div",ue,[Q("div",he,[Q("div",fe,[(Y(!0),B(J,null,W(P(ye).tags,((e,t)=>(Y(),B("div",{key:t,class:"tag-item st-padding-right-10"},[E(k,{name:e.icon},null,8,["name"]),H("   "),Q("span",null,O(e.value),1)])))),128))]),Q("div",null,O(P(ye).introduction),1)]),E(F,{center:"",border:!1},{title:L((()=>[ve,E(z,{show:P(Ve),"onUpdate:show":y[1]||(y[1]=e=>X(Ve)?Ve.value=e:null),placement:"top",theme:"light"},{reference:L((()=>[E(T,{class:"st-padding-left-5",name:"info-o"})])),default:L((()=>[xe])),_:1},8,["show"])])),_:1}),Q("div",be,[(Y(!0),B(J,null,W(P(ye).tagsText,((e,t)=>A((Y(),K(D,{key:e+t,closeable:P(ye).pressIndex===t&&0!==t,color:0===t?P(q):"#e4e4e4",plain:0===t,"text-color":0===t?P(q):"#333333",class:"st-margin-right-10 st-margin-bottom-8",size:"medium",type:"primary",onClick:e=>(e=>{0===e&&(Ie.value=!0)})(t),onClose:Ue},{default:L((()=>[Q("div",ge,[0===t?(Y(),K(k,{key:0,"class-name":"st-margin-right-5",name:"plus"})):M("",!0),H(" "+O(e),1)])])),_:2},1032,["closeable","color","plain","text-color","onClick"])),[[Xe,Re(t)]]))),128))]),E(oe,{modelValue:P(_e),"onUpdate:modelValue":y[2]||(y[2]=e=>X(_e)?_e.value=e:null),class:"collapse"},{default:L((()=>[(Y(!0),B(J,null,W(P(ke),((e,t)=>(Y(),K($,{key:e.title+t,title:e.title,name:e.name,border:!1},{default:L((()=>[E(U,{gutter:0},{default:L((()=>[(Y(!0),B(J,null,W(e.list,(e=>(Y(),K(R,{key:e.text,icon:e.icon,text:e.text,border:!1,onClick:t=>(e=>{b(e.text)})(e)},null,8,["icon","text","onClick"])))),128))])),_:2},1024)])),_:2},1032,["title","name"])))),128))])),_:1},8,["modelValue"])])]),E(ze,{show:P(Te),"onUpdate:show":y[3]||(y[3]=e=>X(Te)?Te.value=e:null),options:Se,title:"立即分享给好友",onSelect:Ne},null,8,["show"]),E(Je,{show:P(Ie),"onUpdate:show":y[5]||(y[5]=e=>X(Ie)?Ie.value=e:null),title:"添加标签",onClose:Le},{default:L((()=>[Q("div",je,[E(Oe,{ref_key:"formRef",ref:Ce,"show-error-message":!1,"show-error":!1,onSubmit:Be,onFailed:Ee},{default:L((()=>[E(Ge,{inset:""},{default:L((()=>[E(De,{modelValue:P(qe),"onUpdate:modelValue":y[4]||(y[4]=e=>X(qe)?qe.value=e:null),rules:[{required:!0,message:"请填写标签名称"}],class:"st-required",clearable:"",label:"标签名称",name:"tagValue",placeholder:"请填写"},null,8,["modelValue"])])),_:1}),Q("div",we,[A((Y(),K(He,{size:"small",block:"","native-type":"submit",round:"",type:"primary"},{default:L((()=>[H(" 提交 ")])),_:1})),[[Ye]])])])),_:1},512)])])),_:1},8,["show"]),E(We,{bottom:P(V)(60)},null,8,["bottom"])])}}}),[["__scopeId","data-v-712d70ed"]]);export{ke as default};
