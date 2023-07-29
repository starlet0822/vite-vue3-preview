import{a5 as Y,a as D,o as Z,B as tt,k as A,x as _,p,q as g,f as J,K as et,u as T,y as V,F as nt,G as ot,a6 as at,O as rt,P as it}from"./index-2d318566.js";import{R as st,C as ct}from"./index-06ab4992.js";import{a as ut,G as lt}from"./index-d4c93b0c.js";import{C as dt}from"./index-434b4cca.js";import{_ as pt}from"./plugin-vue_export-helper-c27b6911.js";import{I as ht}from"./index-2b5f5f87.js";import{s as mt}from"./function-call-061d7f50.js";import"./use-route-e384b3a3.js";import"./index-5561415e.js";var K={exports:{}};(function(P,U){(function(I,d){P.exports=d()})(Y,function(){return function(I){var d={};function s(r){if(d[r])return d[r].exports;var u=d[r]={i:r,l:!1,exports:{}};return I[r].call(u.exports,u,u.exports,s),u.l=!0,u.exports}return s.m=I,s.c=d,s.d=function(r,u,y){s.o(r,u)||Object.defineProperty(r,u,{enumerable:!0,get:y})},s.r=function(r){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},s.t=function(r,u){if(1&u&&(r=s(r)),8&u||4&u&&typeof r=="object"&&r&&r.__esModule)return r;var y=Object.create(null);if(s.r(y),Object.defineProperty(y,"default",{enumerable:!0,value:r}),2&u&&typeof r!="string")for(var v in r)s.d(y,v,(function(b){return r[b]}).bind(null,v));return y},s.n=function(r){var u=r&&r.__esModule?function(){return r.default}:function(){return r};return s.d(u,"a",u),u},s.o=function(r,u){return Object.prototype.hasOwnProperty.call(r,u)},s.p="",s(s.s=0)}([function(I,d,s){var r;function u(o){return["image/png","image/jpeg","image/gif"].some(e=>e===o)}s.r(d),s.d(d,"canvastoDataURL",function(){return v}),s.d(d,"canvastoFile",function(){return b}),s.d(d,"dataURLtoFile",function(){return x}),s.d(d,"dataURLtoImage",function(){return z}),s.d(d,"downloadFile",function(){return G}),s.d(d,"filetoDataURL",function(){return k}),s.d(d,"imagetoCanvas",function(){return E}),s.d(d,"urltoBlob",function(){return $}),s.d(d,"urltoImage",function(){return H}),s.d(d,"compress",function(){return Q}),s.d(d,"compressAccurately",function(){return W}),s.d(d,"EImageType",function(){return r}),function(o){o.PNG="image/png",o.JPEG="image/jpeg",o.GIF="image/gif"}(r||(r={}));var y=function(o,e,n,t){return new(n||(n=Promise))(function(i,l){function m(c){try{f(t.next(c))}catch(a){l(a)}}function h(c){try{f(t.throw(c))}catch(a){l(a)}}function f(c){var a;c.done?i(c.value):(a=c.value,a instanceof n?a:new n(function(w){w(a)})).then(m,h)}f((t=t.apply(o,e||[])).next())})};function v(o,e=.92,n=r.JPEG){return y(this,void 0,void 0,function*(){return u(n)||(n=r.JPEG),o.toDataURL(n,e)})}function b(o,e=.92,n=r.JPEG){return new Promise(t=>o.toBlob(i=>t(i),n,e))}var j=function(o,e,n,t){return new(n||(n=Promise))(function(i,l){function m(c){try{f(t.next(c))}catch(a){l(a)}}function h(c){try{f(t.throw(c))}catch(a){l(a)}}function f(c){var a;c.done?i(c.value):(a=c.value,a instanceof n?a:new n(function(w){w(a)})).then(m,h)}f((t=t.apply(o,e||[])).next())})};function x(o,e){return j(this,void 0,void 0,function*(){const n=o.split(",");let t=n[0].match(/:(.*?);/)[1];const i=atob(n[1]);let l=i.length;const m=new Uint8Array(l);for(;l--;)m[l]=i.charCodeAt(l);return u(e)&&(t=e),new Blob([m],{type:t})})}function z(o){return new Promise((e,n)=>{const t=new Image;t.onload=()=>e(t),t.onerror=()=>n(new Error("dataURLtoImage(): dataURL is illegal")),t.src=o})}function G(o,e){const n=document.createElement("a");n.href=window.URL.createObjectURL(o),n.download=e||Date.now().toString(36),document.body.appendChild(n);const t=document.createEvent("MouseEvents");t.initEvent("click",!1,!1),n.dispatchEvent(t),document.body.removeChild(n)}function k(o){return new Promise(e=>{const n=new FileReader;n.onloadend=t=>e(t.target.result),n.readAsDataURL(o)})}var M=function(o,e,n,t){return new(n||(n=Promise))(function(i,l){function m(c){try{f(t.next(c))}catch(a){l(a)}}function h(c){try{f(t.throw(c))}catch(a){l(a)}}function f(c){var a;c.done?i(c.value):(a=c.value,a instanceof n?a:new n(function(w){w(a)})).then(m,h)}f((t=t.apply(o,e||[])).next())})};function E(o,e={}){return M(this,void 0,void 0,function*(){const n=Object.assign({},e),t=document.createElement("canvas"),i=t.getContext("2d");let l,m;for(const h in n)Object.prototype.hasOwnProperty.call(n,h)&&(n[h]=Number(n[h]));if(n.scale){const h=n.scale>0&&n.scale<10?n.scale:1;m=o.width*h,l=o.height*h}else m=n.width||n.height*o.width/o.height||o.width,l=n.height||n.width*o.height/o.width||o.height;switch([5,6,7,8].some(h=>h===n.orientation)?(t.height=m,t.width=l):(t.height=l,t.width=m),n.orientation){case 3:i.rotate(180*Math.PI/180),i.drawImage(o,-t.width,-t.height,t.width,t.height);break;case 6:i.rotate(90*Math.PI/180),i.drawImage(o,0,-t.width,t.height,t.width);break;case 8:i.rotate(270*Math.PI/180),i.drawImage(o,-t.height,0,t.height,t.width);break;case 2:i.translate(t.width,0),i.scale(-1,1),i.drawImage(o,0,0,t.width,t.height);break;case 4:i.translate(t.width,0),i.scale(-1,1),i.rotate(180*Math.PI/180),i.drawImage(o,-t.width,-t.height,t.width,t.height);break;case 5:i.translate(t.width,0),i.scale(-1,1),i.rotate(90*Math.PI/180),i.drawImage(o,0,-t.width,t.height,t.width);break;case 7:i.translate(t.width,0),i.scale(-1,1),i.rotate(270*Math.PI/180),i.drawImage(o,-t.height,0,t.height,t.width);break;default:i.drawImage(o,0,0,t.width,t.height)}return t})}function $(o){return fetch(o).then(e=>e.blob())}function H(o){return new Promise((e,n)=>{const t=new Image;t.onload=()=>e(t),t.onerror=()=>n(new Error("urltoImage(): Image failed to load, please check the image URL")),t.src=o})}var S=function(o,e,n,t){return new(n||(n=Promise))(function(i,l){function m(c){try{f(t.next(c))}catch(a){l(a)}}function h(c){try{f(t.throw(c))}catch(a){l(a)}}function f(c){var a;c.done?i(c.value):(a=c.value,a instanceof n?a:new n(function(w){w(a)})).then(m,h)}f((t=t.apply(o,e||[])).next())})};function Q(o,e={}){return S(this,void 0,void 0,function*(){if(!(o instanceof Blob))throw new Error("compress(): First arg must be a Blob object or a File object.");if(typeof e!="object"&&(e=Object.assign({quality:e})),e.quality=Number(e.quality),Number.isNaN(e.quality))return o;const n=yield k(o);let t=n.split(",")[0].match(/:(.*?);/)[1],i=r.JPEG;u(e.type)&&(i=e.type,t=e.type);const l=yield z(n),m=yield E(l,Object.assign({},e)),h=yield v(m,e.quality,i),f=yield x(h,t);return f.size>o.size?o:f})}function W(o,e={}){return S(this,void 0,void 0,function*(){if(!(o instanceof Blob))throw new Error("compressAccurately(): First arg must be a Blob object or a File object.");if(typeof e!="object"&&(e=Object.assign({size:e})),e.size=Number(e.size),Number.isNaN(e.size)||1024*e.size>o.size)return o;e.accuracy=Number(e.accuracy),(!e.accuracy||e.accuracy<.8||e.accuracy>.99)&&(e.accuracy=.95);const n=e.size*(2-e.accuracy)*1024,t=1024*e.size,i=e.size*e.accuracy*1024,l=yield k(o);let m=l.split(",")[0].match(/:(.*?);/)[1],h=r.JPEG;u(e.type)&&(h=e.type,m=e.type);const f=yield z(l),c=yield E(f,Object.assign({},e));let a,w=.5;const L=[null,null];for(let R=1;R<=7;R++){a=yield v(c,w,h);const O=.75*a.length;if(R===7){(n<O||i>O)&&(a=[a,...L].filter(N=>N).sort((N,X)=>Math.abs(.75*N.length-t)-Math.abs(.75*X.length-t))[0]);break}if(n<O)L[1]=a,w-=Math.pow(.5,R+1);else{if(!(i>O))break;L[0]=a,w+=Math.pow(.5,R+1)}}const q=yield x(a,m);return q.size>o.size?o:q})}}])})})(K);var ft=K.exports,B=ft;const C="/vite-vue3-preview/static/jpg/compress-7baea395.jpg";const F=P=>(rt("data-v-502c11a4"),P=P(),it(),P),gt={class:"page-wrapper"},_t={class:"st-margin-top-10"},yt={class:"img-type"},wt=F(()=>_("span",{class:"desc-text"},"img 标签",-1)),vt={class:"img-box"},bt=F(()=>_("span",{class:"desc-text"},"van-image 组件",-1)),xt=F(()=>_("span",{class:"desc-text"},"van-image 预览",-1)),It={class:"img-compress st-margin-top-10"},jt={class:"img-box"},Pt={class:"desc-text"},zt={class:"img-box"},kt={class:"desc-text"},Et={class:"img-lazyloading st-margin-top-10"},Rt={__name:"image",setup(P){const U="https://img.yzcdn.cn/vant/cat.jpeg",I=D(C),d=D(),s=["https://img.yzcdn.cn/vant/cat.jpeg","https://images.pexels.com/photos/9443229/pexels-photo-9443229.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200","https://s4.ax1x.com/2022/03/02/b3NS0A.jpg","https://s4.ax1x.com/2022/03/02/b3Gyo6.jpg","https://images.pexels.com/photos/10865058/pexels-photo-10865058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300"],r=()=>{mt({images:s,startPosition:0,closeable:!0})};return Z(async()=>{await tt();const u=await B.urltoBlob(C),y=await B.compress(u,{quality:.6});I.value=await B.filetoDataURL(y)}),(u,y)=>{const v=dt,b=lt,j=at,x=ht,z=ut,G=ct,k=st;return J(),A("div",gt,[_("div",_t,[_("div",yt,[p(v,{title:"图片加载",border:!1}),p(z,{border:!0,"column-num":3,center:""},{default:g(()=>[p(b,null,{default:g(()=>[_("div",{class:"img-box"},[_("img",{src:U}),wt])]),_:1}),p(b,null,{default:g(()=>[_("div",vt,[p(x,{src:U,round:""},{loading:g(()=>[p(j,{type:"spinner",size:"20"})]),_:1}),bt])]),_:1}),p(b,null,{default:g(()=>[p(x,{src:s[0],onClick:et(r,["stop"])},{loading:g(()=>[p(j,{type:"spinner",size:"20"})]),_:1},8,["src","onClick"]),xt]),_:1})]),_:1})]),_("div",It,[p(v,{title:"图片压缩",border:!1}),p(z,{border:!0,"column-num":2,center:""},{default:g(()=>[p(b,null,{default:g(()=>[_("div",jt,[p(x,{ref_key:"compressImgRef",ref:d,src:T(C)},{loading:g(()=>[p(j,{type:"spinner",size:"20"})]),_:1},8,["src"]),_("span",Pt,"压缩前"+V(),1)])]),_:1}),p(b,null,{default:g(()=>[_("div",zt,[p(x,{src:T(I)},{loading:g(()=>[p(j,{type:"spinner",size:"20"})]),_:1},8,["src"]),_("span",kt,"压缩后"+V(),1)])]),_:1})]),_:1})]),_("div",Et,[p(v,{title:"懒加载",border:!1}),p(k,null,{default:g(()=>[(J(),A(nt,null,ot(s,(M,E)=>p(G,{key:M+E,span:"24",class:"img-lazy"},{default:g(()=>[p(x,{src:M,"lazy-load":""},{loading:g(()=>[p(j,{type:"spinner",size:"20"})]),_:2},1032,["src"])]),_:2},1024)),64))]),_:1})])])])}}},St=pt(Rt,[["__scopeId","data-v-502c11a4"]]);export{St as default};