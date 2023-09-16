import{_ as X}from"./index-c5cdc445.js";import{aq as Y,a as J,o as Z,B as tt,g as et,q as _,f as T,x as g,p as h,K as nt,u as V,y as ot,k as at,G as rt,v as it,F as st,ar as ct,M as K,Q as ut,R as lt}from"./index-3418e78b.js";import{C as dt,R as pt}from"./index-2cead2fc.js";import{G as mt,a as ft}from"./index-bf2eeffe.js";import{C as ht}from"./index-3059a8b5.js";import{_ as gt}from"./plugin-vue_export-helper-c27b6911.js";import{s as _t}from"./function-call-ab151249.js";import{I as wt}from"./index-ea6697ec.js";import"./index-972ab8e3.js";import"./use-placeholder-c7d2abea.js";import"./use-route-029d125b.js";import"./index-271b97e3.js";var Q={exports:{}};(function(j,C){(function(I,d){j.exports=d()})(Y,function(){return function(I){var d={};function s(r){if(d[r])return d[r].exports;var u=d[r]={i:r,l:!1,exports:{}};return I[r].call(u.exports,u,u.exports,s),u.l=!0,u.exports}return s.m=I,s.c=d,s.d=function(r,u,w){s.o(r,u)||Object.defineProperty(r,u,{enumerable:!0,get:w})},s.r=function(r){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},s.t=function(r,u){if(1&u&&(r=s(r)),8&u||4&u&&typeof r=="object"&&r&&r.__esModule)return r;var w=Object.create(null);if(s.r(w),Object.defineProperty(w,"default",{enumerable:!0,value:r}),2&u&&typeof r!="string")for(var v in r)s.d(w,v,(function(b){return r[b]}).bind(null,v));return w},s.n=function(r){var u=r&&r.__esModule?function(){return r.default}:function(){return r};return s.d(u,"a",u),u},s.o=function(r,u){return Object.prototype.hasOwnProperty.call(r,u)},s.p="",s(s.s=0)}([function(I,d,s){var r;function u(o){return["image/png","image/jpeg","image/gif"].some(e=>e===o)}s.r(d),s.d(d,"canvastoDataURL",function(){return v}),s.d(d,"canvastoFile",function(){return b}),s.d(d,"dataURLtoFile",function(){return x}),s.d(d,"dataURLtoImage",function(){return z}),s.d(d,"downloadFile",function(){return G}),s.d(d,"filetoDataURL",function(){return k}),s.d(d,"imagetoCanvas",function(){return E}),s.d(d,"urltoBlob",function(){return N}),s.d(d,"urltoImage",function(){return R}),s.d(d,"compress",function(){return $}),s.d(d,"compressAccurately",function(){return H}),s.d(d,"EImageType",function(){return r}),function(o){o.PNG="image/png",o.JPEG="image/jpeg",o.GIF="image/gif"}(r||(r={}));var w=function(o,e,n,t){return new(n||(n=Promise))(function(i,l){function m(c){try{f(t.next(c))}catch(a){l(a)}}function p(c){try{f(t.throw(c))}catch(a){l(a)}}function f(c){var a;c.done?i(c.value):(a=c.value,a instanceof n?a:new n(function(y){y(a)})).then(m,p)}f((t=t.apply(o,e||[])).next())})};function v(o,e=.92,n=r.JPEG){return w(this,void 0,void 0,function*(){return u(n)||(n=r.JPEG),o.toDataURL(n,e)})}function b(o,e=.92,n=r.JPEG){return new Promise(t=>o.toBlob(i=>t(i),n,e))}var P=function(o,e,n,t){return new(n||(n=Promise))(function(i,l){function m(c){try{f(t.next(c))}catch(a){l(a)}}function p(c){try{f(t.throw(c))}catch(a){l(a)}}function f(c){var a;c.done?i(c.value):(a=c.value,a instanceof n?a:new n(function(y){y(a)})).then(m,p)}f((t=t.apply(o,e||[])).next())})};function x(o,e){return P(this,void 0,void 0,function*(){const n=o.split(",");let t=n[0].match(/:(.*?);/)[1];const i=atob(n[1]);let l=i.length;const m=new Uint8Array(l);for(;l--;)m[l]=i.charCodeAt(l);return u(e)&&(t=e),new Blob([m],{type:t})})}function z(o){return new Promise((e,n)=>{const t=new Image;t.onload=()=>e(t),t.onerror=()=>n(new Error("dataURLtoImage(): dataURL is illegal")),t.src=o})}function G(o,e){const n=document.createElement("a");n.href=window.URL.createObjectURL(o),n.download=e||Date.now().toString(36),document.body.appendChild(n);const t=document.createEvent("MouseEvents");t.initEvent("click",!1,!1),n.dispatchEvent(t),document.body.removeChild(n)}function k(o){return new Promise(e=>{const n=new FileReader;n.onloadend=t=>e(t.target.result),n.readAsDataURL(o)})}var L=function(o,e,n,t){return new(n||(n=Promise))(function(i,l){function m(c){try{f(t.next(c))}catch(a){l(a)}}function p(c){try{f(t.throw(c))}catch(a){l(a)}}function f(c){var a;c.done?i(c.value):(a=c.value,a instanceof n?a:new n(function(y){y(a)})).then(m,p)}f((t=t.apply(o,e||[])).next())})};function E(o,e={}){return L(this,void 0,void 0,function*(){const n=Object.assign({},e),t=document.createElement("canvas"),i=t.getContext("2d");let l,m;for(const p in n)Object.prototype.hasOwnProperty.call(n,p)&&(n[p]=Number(n[p]));if(n.scale){const p=n.scale>0&&n.scale<10?n.scale:1;m=o.width*p,l=o.height*p}else m=n.width||n.height*o.width/o.height||o.width,l=n.height||n.width*o.height/o.width||o.height;switch([5,6,7,8].some(p=>p===n.orientation)?(t.height=m,t.width=l):(t.height=l,t.width=m),n.orientation){case 3:i.rotate(180*Math.PI/180),i.drawImage(o,-t.width,-t.height,t.width,t.height);break;case 6:i.rotate(90*Math.PI/180),i.drawImage(o,0,-t.width,t.height,t.width);break;case 8:i.rotate(270*Math.PI/180),i.drawImage(o,-t.height,0,t.height,t.width);break;case 2:i.translate(t.width,0),i.scale(-1,1),i.drawImage(o,0,0,t.width,t.height);break;case 4:i.translate(t.width,0),i.scale(-1,1),i.rotate(180*Math.PI/180),i.drawImage(o,-t.width,-t.height,t.width,t.height);break;case 5:i.translate(t.width,0),i.scale(-1,1),i.rotate(90*Math.PI/180),i.drawImage(o,0,-t.width,t.height,t.width);break;case 7:i.translate(t.width,0),i.scale(-1,1),i.rotate(270*Math.PI/180),i.drawImage(o,-t.height,0,t.height,t.width);break;default:i.drawImage(o,0,0,t.width,t.height)}return t})}function N(o){return fetch(o).then(e=>e.blob())}function R(o){return new Promise((e,n)=>{const t=new Image;t.onload=()=>e(t),t.onerror=()=>n(new Error("urltoImage(): Image failed to load, please check the image URL")),t.src=o})}var O=function(o,e,n,t){return new(n||(n=Promise))(function(i,l){function m(c){try{f(t.next(c))}catch(a){l(a)}}function p(c){try{f(t.throw(c))}catch(a){l(a)}}function f(c){var a;c.done?i(c.value):(a=c.value,a instanceof n?a:new n(function(y){y(a)})).then(m,p)}f((t=t.apply(o,e||[])).next())})};function $(o,e={}){return O(this,void 0,void 0,function*(){if(!(o instanceof Blob))throw new Error("compress(): First arg must be a Blob object or a File object.");if(typeof e!="object"&&(e=Object.assign({quality:e})),e.quality=Number(e.quality),Number.isNaN(e.quality))return o;const n=yield k(o);let t=n.split(",")[0].match(/:(.*?);/)[1],i=r.JPEG;u(e.type)&&(i=e.type,t=e.type);const l=yield z(n),m=yield E(l,Object.assign({},e)),p=yield v(m,e.quality,i),f=yield x(p,t);return f.size>o.size?o:f})}function H(o,e={}){return O(this,void 0,void 0,function*(){if(!(o instanceof Blob))throw new Error("compressAccurately(): First arg must be a Blob object or a File object.");if(typeof e!="object"&&(e=Object.assign({size:e})),e.size=Number(e.size),Number.isNaN(e.size)||1024*e.size>o.size)return o;e.accuracy=Number(e.accuracy),(!e.accuracy||e.accuracy<.8||e.accuracy>.99)&&(e.accuracy=.95);const n=e.size*(2-e.accuracy)*1024,t=1024*e.size,i=e.size*e.accuracy*1024,l=yield k(o);let m=l.split(",")[0].match(/:(.*?);/)[1],p=r.JPEG;u(e.type)&&(p=e.type,m=e.type);const f=yield z(l),c=yield E(f,Object.assign({},e));let a,y=.5;const F=[null,null];for(let M=1;M<=7;M++){a=yield v(c,y,p);const U=.75*a.length;if(M===7){(n<U||i>U)&&(a=[a,...F].filter(S=>S).sort((S,W)=>Math.abs(.75*S.length-t)-Math.abs(.75*W.length-t))[0]);break}if(n<U)F[1]=a,y-=Math.pow(.5,M+1);else{if(!(i>U))break;F[0]=a,y+=Math.pow(.5,M+1)}}const A=yield x(a,m);return A.size>o.size?o:A})}}])})})(Q);var yt=Q.exports,D=yt;const q="/vite-vue3-preview/static/jpg/compress-7baea395.jpg";const B=j=>(ut("data-v-ffc30320"),j=j(),lt(),j),vt={class:"st-margin-top-10"},bt={class:"img-type"},xt=B(()=>g("span",{class:"desc-text st-line-1"},"img 标签",-1)),It={class:"img-box"},jt=B(()=>g("span",{class:"desc-text st-line-1"},"van-image 组件",-1)),Pt=B(()=>g("p",{class:"desc-text st-line-1"},"van-image 预览",-1)),zt={class:"img-compress st-margin-top-10"},kt={class:"img-box"},Et=B(()=>g("span",{class:"desc-text"},"压缩前",-1)),Rt={class:"img-box"},Mt={class:"desc-text"},Ot={class:"img-lazyloading st-margin-top-10"},Ut=["src"],Bt={__name:"image",setup(j){const C="https://img.yzcdn.cn/vant/cat.jpeg",I=J(q),d=J(),s=["https://img.yzcdn.cn/vant/cat.jpeg","https://images.pexels.com/photos/9443229/pexels-photo-9443229.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200","https://s4.ax1x.com/2022/03/02/b3NS0A.jpg","https://s4.ax1x.com/2022/03/02/b3Gyo6.jpg","https://images.pexels.com/photos/10865058/pexels-photo-10865058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300"],r=()=>{_t({images:s,startPosition:0,closeable:!0})};return Z(async()=>{await tt();const u=await D.urltoBlob(q),w=await D.compress(u,{quality:.6});I.value=await D.filetoDataURL(w)}),(u,w)=>{const v=ht,b=mt,P=ct,x=wt,z=ft,G=dt,k=pt,L=X,E=K("lazy"),N=K("gradual");return T(),et(L,{class:"page-wrapper"},{default:_(()=>[g("div",vt,[g("div",bt,[h(v,{title:"图片显示",border:!1}),h(z,{border:!0,"column-num":3,center:""},{default:_(()=>[h(b,null,{default:_(()=>[g("div",{class:"img-box"},[g("img",{src:C}),xt])]),_:1}),h(b,null,{default:_(()=>[g("div",It,[h(x,{src:C,round:""},{loading:_(()=>[h(P,{type:"spinner",size:"20"})]),_:1}),jt])]),_:1}),h(b,null,{default:_(()=>[h(x,{src:s[0],onClick:nt(r,["stop"])},{loading:_(()=>[h(P,{type:"spinner",size:"20"})]),_:1},8,["src","onClick"]),Pt]),_:1})]),_:1})]),g("div",zt,[h(v,{title:"图片压缩",border:!1}),h(z,{border:!0,"column-num":2,center:""},{default:_(()=>[h(b,null,{default:_(()=>[g("div",kt,[h(x,{ref_key:"compressImgRef",ref:d,src:V(q)},{loading:_(()=>[h(P,{type:"spinner",size:"20"})]),_:1},8,["src"]),Et])]),_:1}),h(b,null,{default:_(()=>[g("div",Rt,[h(x,{src:V(I)},{loading:_(()=>[h(P,{type:"spinner",size:"20"})]),_:1},8,["src"]),g("span",Mt,"压缩后"+ot(),1)])]),_:1})]),_:1})]),g("div",Ot,[h(v,{title:"懒加载",border:!1}),h(k,null,{default:_(()=>[(T(),at(st,null,rt(s,(R,O)=>h(G,{key:R+O,span:"24",class:"img-lazy"},{default:_(()=>[it(g("img",{src:R},null,8,Ut),[[E,R],[N]])]),_:2},1024)),64))]),_:1})])])]),_:1})}}},Kt=gt(Bt,[["__scopeId","data-v-ffc30320"]]);export{Kt as default};
