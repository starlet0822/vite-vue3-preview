import{n as e,q as t,R as o,P as a,d as s,Q as l,G as i,e as n,x as r,y as c,V as d,F as p,W as m,j as u,k as h,X as f,B as v,Y as b,h as x}from"./vant-c731c718.js";import{_ as g}from"./Image-5ad80d36.js";import{_ as j}from"./index-2f91436e.js";import{_ as w}from"./index-014fd06b.js";import{u as y}from"./vue-router-1cbad9b8.js";import{d as k}from"./dayjs-ffcc1c50.js";import{u as _}from"./index-565f4bc4.js";import{p as C,h as V}from"./index-c0ffecbd.js";import{_ as I}from"./plugin-vue_export-helper-893979e1.js";import{m as q,a as T,c as S,_ as z,r as F,q as D,b as R,ak as U,l as B,b7 as E,a2 as L,u as N,al as P,t as Q,A as G,a5 as H,F as O,aN as J,f as W,aI as X,ai as Y,v as A,aj as K,i as M,C as Z,aK as $,aJ as ee}from"./@vue-0da0c2e3.js";import"./@vant-b0725c78.js";import"./@antv-74afab59.js";import"./tslib-546db90a.js";import"./fecha-2b185e5a.js";/* empty css                      */import"./amfe-flexible-385c80ea.js";import"./js-cookie-aaf6027b.js";import"./vuex-fdaeb4c6.js";import"./@vueuse-13b67ac5.js";import"./lodash-es-12d03b41.js";import"./axios-0cd4f164.js";import"./qs-efaa5365.js";import"./side-channel-ebdfdc6e.js";import"./get-intrinsic-8aab7bd3.js";import"./has-symbols-1f359e75.js";import"./function-bind-c930bb92.js";import"./has-03e8e28c.js";import"./call-bind-b7e23f7e.js";import"./object-inspect-af06f273.js";import"./nprogress-4e4fc296.js";import"./vue3-hash-calendar-e234247e.js";import"./hammerjs-ed6f6a9e.js";function te(e){if("ios"===_()){const t=document.createElement("a");t.href="tel:"+e,t.style.visibility="hidden",document.body.appendChild(t),t.click()}else window.location.href="tel:"+e}const oe=e=>($("data-v-7cb2cde6"),e=e(),ee(),e),ae={class:"mine"},se={class:"st-padding-left-15"},le={class:"mine-content"},ie={class:"bg"},ne={class:"user-box"},re={class:"headImg st-flex-jc-ai"},ce={class:"base-info"},de={class:"st-title name"},pe={class:"st-font-14"},me={class:"st-margin-right-10"},ue={class:"content"},he={class:"tag-box st-font-14"},fe={class:"st-flex-ai st-padding-bottom-10"},ve=oe((()=>P("span",{class:"custom-title"},"个人标签",-1))),be=oe((()=>P("div",{class:"st-padding-5 st-tip"},H("长按标签可删除"),-1))),xe={class:"add-tag"},ge={style:{margin:"16px"}},je=q({name:"Mine"});var we=I(Object.assign(je,{setup(_){M("themeColor");const I=y(),q=T({title:I.currentRoute.value.meta.title,user:{name:"吴小星",avatar:"https://xxx.png",occupation:"web前端",birthDate:"1996.04",yearLength:"3",tel:18889352620,company:"未知企业",tags:[{icon:"workstate",value:"离职-随时到岗"},{icon:"education",value:"本科"},{icon:"birthday",value:k().diff("1996-04-05","year")+"岁"}],pressIndex:null,tagsText:["添加标签","html","css","javaScript","vue2/vue3","react","uniapp","微信小程序","sass/less","nodeJs","webpack","vite","细节控","追求技术","实践选手","善于思考"],introduction:"本人计算机专业，3年以上的前端工作经验，具备比较扎实的计算机基础知识和前端技术。既可以使用jQuery开发项目，也可以基于Vue等新技术快速开发，主要擅长Vue。 可以独立完成前端开发工作，遇到难点即可查阅相关官方文档解决；善于运用工具提高开发效率。对于工作，积极认真，较强的适应能力和自学能力；性格温和善良，责任心强，虚心好学，热衷前端开发；注重团队协作精神，富有强烈的上进心。"},activeNames:["1","2","3","4"],tools:[{title:"开发工具",name:"1",list:[{text:"VSCode",icon:"photo-o",to:""},{text:"Webstorm",icon:"photo-o",to:""},{text:"Sourcetree",icon:"photo-o",to:""},{text:"Postman",icon:"photo-o",to:""},{text:"Charles",icon:"photo-o",to:""},{text:"Fiddler",icon:"photo-o",to:""},{text:"微信开发者工具",icon:"photo-o",to:""},{text:"HBuilderX",icon:"photo-o",to:""},{text:"Git Bash",icon:"photo-o",to:""},{text:"Chrome",icon:"photo-o",to:""},{text:"Firefox",icon:"photo-o",to:""},{text:"Notepad++",icon:"photo-o",to:""},{text:"Typora",icon:"photo-o",to:""}]},{title:"效率工具",name:"3",list:[{text:"uTools",icon:"photo-o",to:""},{text:"Snipaste",icon:"photo-o",to:""}]},{title:"Chrome插件",name:"4",list:[{text:"FeHelper",icon:"photo-o",to:""},{text:"Vue Devtools",icon:"photo-o",to:""},{text:"Redux Devtools",icon:"photo-o",to:""},{text:"React Developer Tools",icon:"photo-o",to:""},{text:"Console Importer",icon:"photo-o",to:""},{text:"OctoTree",icon:"photo-o",to:""},{text:"GitZip for gitHub",icon:"photo-o",to:""},{text:"IE Tab",icon:"photo-o",to:""},{text:"Block Site",icon:"photo-o",to:""},{text:"沙拉查词",icon:"photo-o",to:""},{text:"下载+",icon:"photo-o",to:""}]}]}),$=S((()=>V(q.user.tel))),{title:ee,user:oe,tools:je,activeNames:we}=z(q),ye=F(null),ke=F(!1),_e=F(!1),Ce=F(""),Ve=F(!1);F(!1),F(4),F(null);const Ie=[[{name:"微信",icon:"wechat"},{name:"朋友圈",icon:"wechat-moments"},{name:"微博",icon:"weibo"},{name:"QQ",icon:"qq"}],[{name:"复制链接",icon:"link"},{name:"分享海报",icon:"poster"},{name:"二维码",icon:"qrcode"},{name:"小程序码",icon:"weapp-qrcode"}]],qe=F(50),Te=F(!1);D((()=>{window.removeEventListener("scroll",Se,!0)})),R((()=>{window.addEventListener("scroll",Se)}));const Se=()=>{Te.value=window.pageYOffset>qe.value},ze=e=>({cb(){q.user.pressIndex=e}}),Fe=e=>{q.user.tagsText.splice(q.user.pressIndex,1),q.user.pressIndex=null},De=e=>{q.user.tagsText.splice(1,0,e.tagValue),_e.value=!1,Ue()},Re=e=>{const[t]=e.errors;x({message:t.message})},Ue=()=>{ye.value.resetValidation(["tagValue"]),Ce.value=""},Be=e=>{b(e.name),_e.value=!1},Ee=e=>{return t=this,o=null,a=function*(){switch(e){case"chart":I.push({name:"Charts",params:{}});break;case"link":Ve.value=!0}},new Promise(((e,s)=>{var l=e=>{try{n(a.next(e))}catch(t){s(t)}},i=e=>{try{n(a.throw(e))}catch(t){s(t)}},n=t=>t.done?e(t.value):Promise.resolve(t.value).then(l,i);n((a=a.apply(t,o)).next())}));var t,o,a},Le=()=>{I.push({path:"/edit-baseinfo"})};return(b,y)=>{const k=w,_=j,V=g,I=e,q=t,T=o,S=a,z=s,F=l,D=i,R=n,M=r,ee=c,qe=d,Se=p,Ne=m,Pe=u,Qe=h,Ge=f,He=v,Oe=Z("press"),Je=Z("waves");return X(),U("div",ae,[B(_,{border:!1,"z-index":999,class:L(["mine-nav-bar",{"nav-bar-bg":N(Te)}])},{right:E((()=>[B(k,{"class-name":"st-color-blue",name:"chart",onClick:Ee}),P("div",se,[B(k,{"class-name":"st-color-blue",name:"link",onClick:Ee})])])),_:1},8,["class"]),P("div",le,[P("div",ie,[P("div",ne,[P("div",re,[B(V,Q({width:60,height:60,radius:60},{round:""}),null,16),P("div",{class:"edit-btn st-font-12",onClick:Le},"编辑个人信息")]),P("div",ce,[P("p",de,[G(H(N(oe).name)+" ",1),P("span",pe,"("+H(N(oe).birthDate)+")",1)]),B(T,{type:"flex",align:"center"},{default:E((()=>[B(I,{span:"10",class:"st-font-12"},{default:E((()=>[P("div",null,H(N(oe).occupation)+"・"+H(N(oe).yearLength+" 年以上"),1)])),_:1}),B(I,{span:"14"},{default:E((()=>[P("div",{class:"st-align-right st-font-14",onClick:y[0]||(y[0]=e=>N(te)(N(oe).tel))},[P("span",me,H(N($)),1),B(q,{name:"phone-o",color:"#fff",size:N(C)(14)},null,8,["size"])])])),_:1})])),_:1})])])]),P("div",ue,[P("div",he,[P("div",fe,[(X(!0),U(O,null,J(N(oe).tags,((e,t)=>(X(),U("div",{key:t,class:"tag-item st-padding-right-10"},[B(k,{name:e.icon},null,8,["name"]),G("   "),P("span",null,H(e.value),1)])))),128))]),P("div",null,H(N(oe).introduction),1)]),B(z,{center:"",border:!1},{title:E((()=>[ve,B(S,{show:N(ke),"onUpdate:show":y[1]||(y[1]=e=>W(ke)?ke.value=e:null),placement:"top",theme:"light"},{reference:E((()=>[B(q,{class:"st-padding-left-5",name:"info-o"})])),default:E((()=>[be])),_:1},8,["show"])])),_:1}),B(T,{type:"flex",class:"tag-list st-padding-box tag-list"},{default:E((()=>[(X(!0),U(O,null,J(N(oe).tagsText,((e,t)=>(X(),Y(I,{key:e+t,class:"st-margin-right-10 st-margin-bottom-8"},{default:E((()=>[A((X(),Y(F,{closeable:N(oe).pressIndex===t&&0!==t,plain:0===t,type:0===t?"primary":"default",size:"medium",onClick:e=>(e=>{0===e&&(_e.value=!0)})(t),onClose:Fe},{default:E((()=>[0===t?(X(),Y(q,{key:0,name:"plus",class:"st-margin-right-5"})):K("",!0),G(" "+H(e),1)])),_:2},1032,["closeable","plain","type","onClick"])),[[Oe,ze(t)]])])),_:2},1024)))),128))])),_:1}),B(ee,{modelValue:N(we),"onUpdate:modelValue":y[2]||(y[2]=e=>W(we)?we.value=e:null),class:"collapse"},{default:E((()=>[(X(!0),U(O,null,J(N(je),((e,t)=>(X(),Y(M,{key:e.title+t,title:e.title,name:e.name,border:!1},{default:E((()=>[B(R,{gutter:0},{default:E((()=>[(X(!0),U(O,null,J(e.list,(e=>(X(),Y(D,{key:e.text,icon:e.icon,text:e.text,border:!1,onClick:t=>(e=>{x(e.text)})(e)},null,8,["icon","text","onClick"])))),128))])),_:2},1024)])),_:2},1032,["title","name"])))),128))])),_:1},8,["modelValue"])])]),B(qe,{show:N(Ve),"onUpdate:show":y[3]||(y[3]=e=>W(Ve)?Ve.value=e:null),options:Ie,title:"立即分享给好友",onSelect:Be},null,8,["show"]),B(Ge,{show:N(_e),"onUpdate:show":y[5]||(y[5]=e=>W(_e)?_e.value=e:null),title:"添加标签",onClose:Ue},{default:E((()=>[P("div",xe,[B(Qe,{ref_key:"formRef",ref:ye,"show-error-message":!1,"show-error":!1,onSubmit:De,onFailed:Re},{default:E((()=>[B(Ne,{inset:""},{default:E((()=>[B(Se,{modelValue:N(Ce),"onUpdate:modelValue":y[4]||(y[4]=e=>W(Ce)?Ce.value=e:null),rules:[{required:!0,message:"请填写标签名称"}],class:"st-required",clearable:"",label:"标签名称",name:"tagValue",placeholder:"请填写"},null,8,["modelValue"])])),_:1}),P("div",ge,[A((X(),Y(Pe,{size:"small",block:"","native-type":"submit",round:"",type:"primary"},{default:E((()=>[G(" 提交 ")])),_:1})),[[Je]])])])),_:1},512)])])),_:1},8,["show"]),B(He,{bottom:N(C)(60)},null,8,["bottom"])])}}}),[["__scopeId","data-v-7cb2cde6"]]);export{we as default};
