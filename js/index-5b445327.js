import{_ as e}from"./index-3f10a1ee.js";import{n as t,j as o,R as a,P as s,d as l,O as n,G as i,e as r,w as c,x as d,Q as p,F as u,V as m,k as h,W as f,X as v,Y as b,h as x}from"./vant-56d7d53c.js";import{_ as g}from"./Image-02123566.js";import{_ as j}from"./index-d91669f1.js";import{_ as w}from"./index-014fd06b.js";import{u as y}from"./vue-router-1cbad9b8.js";import{u as k,t as _}from"./index-be365d2b.js";import{d as C}from"./dayjs-ffcc1c50.js";import{_ as V}from"./plugin-vue_export-helper-893979e1.js";import{m as I,a as T,c as S,_ as q,r as D,b as F,aD as R,ak as z,v as U,ai as E,b7 as L,a2 as N,u as O,al as P,l as Q,t as G,A as B,a5 as H,F as J,aN as W,f as Y,aI as $,aj as A,C as K,aK as M,aJ as X}from"./@vue-0da0c2e3.js";import"./@vant-b0725c78.js";/* empty css                      */import"./amfe-flexible-385c80ea.js";import"./js-cookie-aaf6027b.js";import"./vuex-fdaeb4c6.js";import"./lodash-es-0ddda1ab.js";import"./axios-0cd4f164.js";import"./qs-efaa5365.js";import"./side-channel-ebdfdc6e.js";import"./get-intrinsic-8aab7bd3.js";import"./has-symbols-1f359e75.js";import"./function-bind-c930bb92.js";import"./has-03e8e28c.js";import"./call-bind-b7e23f7e.js";import"./object-inspect-af06f273.js";import"./@antv-74afab59.js";import"./tslib-546db90a.js";import"./fecha-2b185e5a.js";import"./nprogress-4e4fc296.js";import"./vue3-hash-calendar-e234247e.js";import"./hammerjs-ed6f6a9e.js";function Z(e){if("ios"===k()){const t=document.createElement("a");t.href="tel:"+e,t.style.visibility="hidden",document.body.appendChild(t),t.click()}else window.location.href="tel:"+e}const ee=e=>(M("data-v-47295c42"),e=e(),X(),e),te={class:"layout__page"},oe={class:"st-padding-left-15"},ae={class:"layout__body"},se={class:"bg"},le={class:"user-box"},ne={class:"headImg st-flex-jc-ai"},ie={class:"base-info"},re={class:"st-title st-color-white"},ce={class:"st-font-14"},de={class:"st-margin-right-10"},pe={class:"content"},ue={class:"tag-box st-font-14"},me={class:"st-flex-ai st-padding-bottom-10"},he=ee((()=>P("span",{class:"custom-title"},"个人标签",-1))),fe=ee((()=>P("div",{class:"st-padding-5 st-tip"},H("长按标签可删除"),-1))),ve={class:"tag-list st-padding-box tag-list st-flex st-flex-wrap"},be={class:"st-flex-center"},xe={class:"add-tag"},ge={style:{margin:"16px"}},je=I({name:"Mine"});var we=V(Object.assign(je,{setup(k){const V=y(),I=T({title:V.currentRoute.value.meta.title,user:{name:"吴小星",avatar:"https://xxx.png",occupation:"web前端",birthDate:"1996.04",yearLength:"3",tel:18889352620,company:"未知企业",tags:[{icon:"workstate",value:"离职-随时到岗"},{icon:"education",value:"本科"},{icon:"birthday",value:C().diff("1996-04-05","year")+"岁"}],pressIndex:null,tagsText:["添加标签","html","css","javaScript","vue2/vue3","react","uniapp","微信小程序","sass/less","nodeJs","webpack","vite"],introduction:"本人计算机专业，3年以上的前端工作经验，具备比较扎实的计算机基础知识和前端技术。既可以使用jQuery开发项目，也可以基于Vue等新技术快速开发，主要擅长Vue。 对于技术，更偏向于实践，概念性知识不刻意死记硬背，遇到难点即可查阅权威文档解决；善于运用工具提高开发效率。对于工作，积极认真，较强的适应能力和自学能力；性格温和善良，责任心强，虚心好学，热衷前端开发；注重团队协作精神，富有强烈的上进心。"},activeNames:["1","2"],tools:[{title:"编程开发",name:"1",list:[{text:"VSCode",icon:"photo-o",to:""},{text:"Webstorm",icon:"photo-o",to:""},{text:"Sourcetree",icon:"photo-o",to:""},{text:"Postman",icon:"photo-o",to:""},{text:"Charles",icon:"photo-o",to:""},{text:"Fiddler",icon:"photo-o",to:""},{text:"微信开发者工具",icon:"photo-o",to:""},{text:"Git Bash",icon:"photo-o",to:""},{text:"Chrome",icon:"photo-o",to:""},{text:"Firefox",icon:"photo-o",to:""},{text:"Notepad++",icon:"photo-o",to:""},{text:"Typora",icon:"photo-o",to:""}]},{title:"效率工具",name:"2",list:[{text:"uTools",icon:"photo-o",to:""},{text:"Snipaste",icon:"photo-o",to:""}]},{title:"Chrome插件",name:"3",list:[{text:"FeHelper",icon:"photo-o",to:""},{text:"Vue Devtools",icon:"photo-o",to:""},{text:"Redux Devtools",icon:"photo-o",to:""},{text:"React Developer Tools",icon:"photo-o",to:""},{text:"Console Importer",icon:"photo-o",to:""},{text:"OctoTree",icon:"photo-o",to:""},{text:"GitZip for gitHub",icon:"photo-o",to:""},{text:"IE Tab",icon:"photo-o",to:""},{text:"Block Site",icon:"photo-o",to:""},{text:"沙拉查词",icon:"photo-o",to:""},{text:"下载+",icon:"photo-o",to:""}]}]}),M=S((()=>{return e=I.user.tel,String(e).replace(/(\d{3})\d{4}(\d{4})/,"$1****$2");var e})),{title:X,user:ee,tools:je,activeNames:we}=q(I),ye=D(null),ke=D(!1),_e=D(!1),Ce=D(""),Ve=D(!1);D(!1),D(4);const Ie=D(null),Te=[[{name:"微信",icon:"wechat"},{name:"朋友圈",icon:"wechat-moments"},{name:"微博",icon:"weibo"},{name:"QQ",icon:"qq"}],[{name:"复制链接",icon:"link"},{name:"分享海报",icon:"poster"},{name:"二维码",icon:"qrcode"},{name:"小程序码",icon:"weapp-qrcode"}]],Se=D(null),qe=D(50),De=D(!0);F((()=>{window.addEventListener("scroll",Fe)})),R((()=>{window.removeEventListener("scroll",Fe),Se.value&&clearInterval(Se.value)}));const Fe=()=>{De.value=window.pageYOffset>qe.value},Re=e=>(console.log("长按标签",e),{cb(){I.user.pressIndex=e,console.log(I.user.pressIndex)}}),ze=e=>{I.user.tagsText.splice(I.user.pressIndex,1),I.user.pressIndex=null},Ue=e=>{console.log("submit",e),I.user.tagsText.splice(1,0,e.tagValue),_e.value=!1,Le()},Ee=e=>{console.log("failed",e);const[t]=e.errors;x({message:t.message})},Le=()=>{ye.value.resetValidation(["tagValue"]),Ce.value=""},Ne=e=>{b(e.name),_e.value=!1},Oe=e=>{return t=this,o=null,a=function*(){switch(console.log("handleIconClick",e),e){case"chart":V.push({name:"Charts",params:{}});break;case"link":Ve.value=!0}},new Promise(((e,s)=>{var l=e=>{try{i(a.next(e))}catch(t){s(t)}},n=e=>{try{i(a.throw(e))}catch(t){s(t)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(l,n);i((a=a.apply(t,o)).next())}));var t,o,a},Pe=()=>{console.log("tap",Ie.value),Ie.value.backToTop()},Qe=()=>{V.push({path:"/edit-baseinfo"})};return(b,y)=>{const k=w,C=j,V=g,I=t,T=o,S=a,q=s,D=l,F=n,R=i,X=r,Se=c,qe=d,Fe=p,Ge=u,Be=m,He=h,Je=f,We=v,Ye=e,$e=K("doubletap"),Ae=K("press"),Ke=K("waves");return $(),z("div",te,[U(($(),E(C,{border:!1,"z-index":999,class:N(["mine-nav-bar",{"nav-bar-bg":O(De)}]),title:"关于我"},{right:L((()=>[Q(k,{"class-name":"st-color-blue",name:"chart",onClick:Oe}),P("div",oe,[Q(k,{"class-name":"st-color-blue",name:"link",onClick:Oe})])])),_:1},8,["class"])),[[$e,Pe]]),P("div",ae,[P("div",se,[P("div",le,[P("div",ne,[Q(V,G({width:60,height:60,radius:60},{round:""}),null,16),P("div",{class:"edit-btn st-font-12",onClick:Qe},"编辑个人信息")]),P("div",ie,[P("p",re,[B(H(O(ee).name)+" ",1),P("span",ce,"("+H(O(ee).birthDate)+")",1)]),Q(S,{type:"flex",align:"center"},{default:L((()=>[Q(I,{span:"10",class:"st-font-12"},{default:L((()=>[P("div",null,H(O(ee).occupation)+"・"+H(O(ee).yearLength+" 年以上"),1)])),_:1}),Q(I,{span:"14"},{default:L((()=>[P("div",{class:"st-align-right st-font-14",onClick:y[0]||(y[0]=e=>O(Z)(O(ee).tel))},[P("span",de,H(O(M)),1),Q(T,{name:"phone-o",color:"#fff",size:"14"})])])),_:1})])),_:1})])])]),P("div",pe,[P("div",ue,[P("div",me,[($(!0),z(J,null,W(O(ee).tags,((e,t)=>($(),z("div",{key:t,class:"tag-item st-padding-right-10"},[Q(k,{name:e.icon},null,8,["name"]),B("   "),P("span",null,H(e.value),1)])))),128))]),P("div",null,H(O(ee).introduction),1)]),Q(D,{center:""},{title:L((()=>[he,Q(q,{show:O(ke),"onUpdate:show":y[1]||(y[1]=e=>Y(ke)?ke.value=e:null),placement:"top",theme:"light"},{reference:L((()=>[Q(T,{class:"st-padding-left-5",name:"info-o"})])),default:L((()=>[fe])),_:1},8,["show"])])),_:1}),P("div",ve,[($(!0),z(J,null,W(O(ee).tagsText,((e,t)=>U(($(),E(F,{key:e+t,closeable:O(ee).pressIndex===t&&0!==t,color:0===t?O(_):"#e4e4e4",plain:0===t,"text-color":0===t?O(_):"#333333",class:"st-margin-right-10 st-margin-bottom-8",size:"medium",type:"primary",onClick:e=>(e=>{0===e&&(_e.value=!0)})(t),onClose:ze},{default:L((()=>[P("div",be,[0===t?($(),E(k,{key:0,"class-name":"st-margin-right-5",name:"plus"})):A("",!0),B(" "+H(e),1)])])),_:2},1032,["closeable","color","plain","text-color","onClick"])),[[Ae,Re(t)]]))),128))]),Q(qe,{modelValue:O(we),"onUpdate:modelValue":y[2]||(y[2]=e=>Y(we)?we.value=e:null),class:"collapse"},{default:L((()=>[($(!0),z(J,null,W(O(je),((e,t)=>($(),E(Se,{key:e.title+t,title:e.title,name:e.name,border:!1},{default:L((()=>[Q(X,{gutter:0},{default:L((()=>[($(!0),z(J,null,W(e.list,(e=>($(),E(R,{key:e.text,icon:e.icon,text:e.text,border:!1,onClick:t=>(e=>{x(e.text)})(e)},null,8,["icon","text","onClick"])))),128))])),_:2},1024)])),_:2},1032,["title","name"])))),128))])),_:1},8,["modelValue"])])]),Q(Fe,{show:O(Ve),"onUpdate:show":y[3]||(y[3]=e=>Y(Ve)?Ve.value=e:null),options:Te,title:"立即分享给好友",onSelect:Ne},null,8,["show"]),Q(We,{show:O(_e),"onUpdate:show":y[5]||(y[5]=e=>Y(_e)?_e.value=e:null),title:"添加标签",onClose:Le},{default:L((()=>[P("div",xe,[Q(Je,{ref_key:"formRef",ref:ye,"show-error-message":!1,"show-error":!1,onSubmit:Ue,onFailed:Ee},{default:L((()=>[Q(Be,{inset:""},{default:L((()=>[Q(Ge,{modelValue:O(Ce),"onUpdate:modelValue":y[4]||(y[4]=e=>Y(Ce)?Ce.value=e:null),rules:[{required:!0,message:"请填写标签名称"}],class:"st-required",clearable:"",label:"标签名称",name:"tagValue",placeholder:"请填写"},null,8,["modelValue"])])),_:1}),P("div",ge,[U(($(),E(He,{size:"small",block:"","native-type":"submit",round:"",type:"primary"},{default:L((()=>[B(" 提交 ")])),_:1})),[[Ke]])])])),_:1},512)])])),_:1},8,["show"]),Q(Ye,{ref_key:"backToTopRef",ref:Ie},null,512)])}}}),[["__scopeId","data-v-47295c42"]]);export{we as default};
