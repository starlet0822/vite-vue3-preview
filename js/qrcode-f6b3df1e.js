var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,n=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&l(e,a,t[a]);if(o)for(var a of o(t))r.call(t,a)&&l(e,a,t[a]);return e},i=(e,t,a)=>new Promise(((o,s)=>{var r=e=>{try{n(a.next(e))}catch(t){s(t)}},l=e=>{try{n(a.throw(e))}catch(t){s(t)}},n=e=>e.done?o(e.value):Promise.resolve(e.value).then(r,l);n((a=a.apply(e,t)).next())}));import{n as c,R as d,x as u,U as p,y as f,B as m,h as g,r as y,c as v,s as b}from"./vant-182c6d73.js";import{J as j}from"./jsbarcode-552f7d17.js";import{m as h,r as w,b as x,aI as O,ai as _,aQ as C,c as S,w as k,ak as P,aj as R,a4 as E,u as L,n as D,l as q,al as T,b7 as U,f as I,v as V,F as z,aN as N,aK as Q,aJ as A,C as B}from"./@vue-0da0c2e3.js";import{b as F}from"./qrcode-a2a635fd.js";import{b as H,i as J}from"./lodash-es-0ddda1ab.js";import{_ as M}from"./index-06373c59.js";import"./@zxing-5197659b.js";import{H as Y}from"./html5-qrcode-50956d7f.js";import{a as $}from"./file-d5e0f662.js";import{_ as K}from"./plugin-vue_export-helper-893979e1.js";import"./@vant-b0725c78.js";import"./encode-utf8-5218539d.js";import"./dijkstrajs-6deee4e3.js";import"./vue-router-1cbad9b8.js";import"./ts-custom-error-0a9e0592.js";import"./@antv-74afab59.js";import"./tslib-546db90a.js";import"./fecha-2b185e5a.js";const G=h({name:"BarcodeCreate"}),W=Object.assign(G,{props:{tag:{type:String,default:"canvas"},text:{type:String,default:null},options:{type:Object,default:()=>({})},type:{type:String,default:"CODE128"}},setup(e){const o=e,s=w(null);return x((()=>{const e=(r=n({},o.options),l={format:o.type},t(r,a(l)));var r,l;j(s.value,o.text,e)})),(t,a)=>(O(),_(C(e.tag),{ref_key:"wrapEl",ref:s},null,512))}}),X=h({name:"QRCodeCreate"}),Z=Object.assign(X,{props:{tag:{type:String,default:"canvas"},text:{type:[String,Array],default:null},options:{type:Object,default:()=>({})},width:{type:[Number,String],default:100},logo:{type:[String,Object],default:()=>""}},emits:["done","click","disabled-click"],setup(e,{emit:t}){const a=e,{toCanvas:o,toDataURL:s}=F,r=w(!0),l=w(null),c=S((()=>String(a.text))),d=S((()=>({width:a.width+"px",height:a.width+"px"}))),u=()=>i(this,null,(function*(){yield D();const e=H(a.options||{});if("canvas"===a.tag){e.errorCorrectionLevel=e.errorCorrectionLevel||g(L(c));const s=yield m(L(c),e);e.scale=0===a.width?void 0:a.width/s*4;const n=yield o(L(l),L(c),e);if(a.logo){const e=yield p(n);t("done",e),r.value=!1}else t("done",n.toDataURL()),r.value=!1}else{const o=yield s(c.value,n({errorCorrectionLevel:"H",width:a.width},e));L(l).src=o,t("done",o),r.value=!1}}));k((()=>c.value),(e=>{e&&u()}),{deep:!0,immediate:!0});const p=e=>{const t=e.width,o=Object.assign({logoSize:.15,bgColor:"#ffffff",borderSize:.05,crossOrigin:"anonymous",borderRadius:8,logoRadius:0},J(a.logo)?{}:a.logo),{logoSize:s=.15,bgColor:r="#ffffff",borderSize:l=.05,crossOrigin:n="anonymous",borderRadius:i=8,logoRadius:c=0}=o,d=J(a.logo)?a.logo:a.logo.src,u=t*s,p=t*(1-s)/2,m=t*(s+l),g=t*(1-s-l)/2,y=e.getContext("2d");if(!y)return;f(y)(g,g,m,m,i),y.fillStyle=r,y.fill();const v=new Image;(n||c)&&v.setAttribute("crossOrigin",n),v.src=d;return new Promise((t=>{v.onload=()=>{var a;c?(e=>{const t=document.createElement("canvas");t.width=p+u,t.height=p+u;const a=t.getContext("2d");if(!a||!y)return;if(a.drawImage(e,p,p,u,u),f(y)(p,p,u,u,c),!y)return;const o=y.createPattern(t,"no-repeat");o&&(y.fillStyle=o,y.fill())})(v):(a=v,y.drawImage(a,p,p,u,u)),t(e.toDataURL())}}))},f=e=>(t,a,o,s,r)=>{const l=Math.min(o,s);return r>l/2&&(r=l/2),e.beginPath(),e.moveTo(t+r,a),e.arcTo(t+o,a,t+o,a+s,r),e.arcTo(t+o,a+s,t,a+s,r),e.arcTo(t,a+s,t,a,r),e.arcTo(t,a,t+o,a,r),e.closePath(),e},m=(e,t)=>i(this,null,(function*(){const a=document.createElement("canvas");return yield o(a,e,t),a.width})),g=e=>e.length>36?"M":e.length>16?"Q":"H";return(t,a)=>(O(),P("div",{class:"qrcode",style:E(L(d))},["canvas"===e.tag?(O(),P("canvas",{key:0,ref_key:"wrapRef",ref:l},null,512)):R("",!0),"img"===e.tag?(O(),P("img",{key:1,ref_key:"wrapRef",ref:l},null,512)):R("",!0)],4))}});const ee=e=>(Q("data-v-0d378cf9"),e=e(),A(),e),te={class:"layout__page"},ae={class:"layout__body"},oe=ee((()=>T("div",{class:"desc"},"canvas生成",-1))),se=ee((()=>T("div",{class:"desc"},"自定义样式生成",-1))),re=ee((()=>T("div",{class:"desc"},"img生成",-1))),le=ee((()=>T("div",{id:"reader"},null,-1))),ne=h({name:"QrcodeAndBarcode"});var ie=K(Object.assign(ne,{setup(e){const t=w(["1","2","3"]),a=w([]),o=".png,.jpg,.jpeg",s=e=>!!/image\/(png|jpg|jpeg)$/.test(e.type)||(g(`请上传 ${o} 格式图片`),!1),r=e=>{i(e.file)},l=[{tag:"canvas",text:"CODE128 TYPE",type:"CODE128",options:{}},{tag:"img",text:"CODE39 TYPE",type:"CODE39",options:{lineColor:"#2e6cf3"}}],n=e=>{const t=e.target;i(t)},i=e=>{y({message:"识别中..."});const t=new Y("reader");let a=null,o=null;e instanceof File?o=e:("canvas"===e.tagName.toLocaleLowerCase()&&(a=e.toDataURL(),o=$(a)),"img"===e.tagName.toLocaleLowerCase()&&(a=e.src,o=$(a))),t.scanFile(o,!1).then((e=>{v(),b({type:"success",message:"识别结果为："+e,position:"bottom"})})).catch((e=>{v(),b({type:"danger",message:"识别失败",position:"bottom"})}))};return(e,i)=>{const g=M,y=Z,v=c,b=d,j=u,h=W,w=p,x=f,C=m,S=B("press");return O(),P("div",te,[q(g),T("div",ae,[q(x,{modelValue:L(t),"onUpdate:modelValue":i[1]||(i[1]=e=>I(t)?t.value=e:null)},{default:U((()=>[q(j,{title:"二维码（长按可以识别哦~）",name:"1"},{default:U((()=>[q(b,{type:"flex",gutter:10,class:"qrcode-box"},{default:U((()=>[q(v,{class:"qrcode-item"},{default:U((()=>[V(q(y,{text:"我是canvas生成的二维码"},null,512),[[S,n]]),oe])),_:1}),(O(),_(v,{key:0,class:"qrcode-item"},{default:U((()=>[V(q(y,{id:"img-qrcode",text:"我是有样式的二维码",tag:"img",options:{color:{dark:"#2e6cf3"}}},null,512),[[S,n]]),se])),_:1})),q(v,{class:"qrcode-item"},{default:U((()=>[V(q(y,{tag:"img",text:"我是img生成的二维码"},null,512),[[S,n]]),re])),_:1})])),_:1})])),_:1}),q(j,{title:"条形码（长按可以识别哦~）",name:"2"},{default:U((()=>[q(b,{type:"flex",gutter:10},{default:U((()=>[(O(),P(z,null,N(l,((e,t)=>q(v,{key:t,span:24},{default:U((()=>[V(q(h,{tag:e.tag,text:e.text,type:e.type,options:e.options},null,8,["tag","text","type","options"]),[[S,n]])])),_:2},1024))),64))])),_:1})])),_:1}),(O(),_(j,{key:0,title:"上传(二维码/条形码)图片识别",name:"3"},{default:U((()=>[q(w,{modelValue:L(a),"onUpdate:modelValue":i[0]||(i[0]=e=>I(a)?a.value=e:null),"max-count":"1",accept:o,"before-read":s,"after-read":r},null,8,["modelValue"])])),_:1}))])),_:1},8,["modelValue"]),le]),q(C)])}}}),[["__scopeId","data-v-0d378cf9"]]);export{ie as default};