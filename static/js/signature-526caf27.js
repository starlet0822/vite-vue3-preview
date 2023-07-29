import{d as B,$ as U,a as g,r as R,o as z,a8 as N,w as G,f as y,k as w,x as E,s as T,p as m,q as x,F as I,G as V,A as q,z as j,I as D,a9 as X,u as F,aa as Y,O as H,P as J}from"./index-2d318566.js";import{C as K}from"./index-434b4cca.js";import{_ as Q}from"./index-aad031b4.js";import{C as Z,R as tt}from"./index-06ab4992.js";import{I as L}from"./intro.module-83cad421.js";import{_ as O}from"./plugin-vue_export-helper-c27b6911.js";import{B as et}from"./index-678b3be0.js";import"./use-route-e384b3a3.js";import"./index-f93f27f2.js";/*!
 * Signature Pad v4.1.6 | https://github.com/szimek/signature_pad
 * (c) 2023 Szymon Nowak | Released under the MIT license
 */class k{constructor(t,s,e,n){if(isNaN(t)||isNaN(s))throw new Error(`Point is invalid: (${t}, ${s})`);this.x=+t,this.y=+s,this.pressure=e||0,this.time=n||Date.now()}distanceTo(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}equals(t){return this.x===t.x&&this.y===t.y&&this.pressure===t.pressure&&this.time===t.time}velocityFrom(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}class M{constructor(t,s,e,n,i,c){this.startPoint=t,this.control2=s,this.control1=e,this.endPoint=n,this.startWidth=i,this.endWidth=c}static fromPoints(t,s){const e=this.calculateControlPoints(t[0],t[1],t[2]).c2,n=this.calculateControlPoints(t[1],t[2],t[3]).c1;return new M(t[1],e,n,t[2],s.start,s.end)}static calculateControlPoints(t,s,e){const n=t.x-s.x,i=t.y-s.y,c=s.x-e.x,r=s.y-e.y,a={x:(t.x+s.x)/2,y:(t.y+s.y)/2},o={x:(s.x+e.x)/2,y:(s.y+e.y)/2},l=Math.sqrt(n*n+i*i),h=Math.sqrt(c*c+r*r),p=a.x-o.x,v=a.y-o.y,d=h/(l+h),f={x:o.x+p*d,y:o.y+v*d},b=s.x-f.x,C=s.y-f.y;return{c1:new k(a.x+b,a.y+C),c2:new k(o.x+b,o.y+C)}}length(){let s=0,e,n;for(let i=0;i<=10;i+=1){const c=i/10,r=this.point(c,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),a=this.point(c,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){const o=r-e,l=a-n;s+=Math.sqrt(o*o+l*l)}e=r,n=a}return s}point(t,s,e,n,i){return s*(1-t)*(1-t)*(1-t)+3*e*(1-t)*(1-t)*t+3*n*(1-t)*t*t+i*t*t*t}}class st{constructor(){try{this._et=new EventTarget}catch{this._et=document}}addEventListener(t,s,e){this._et.addEventListener(t,s,e)}dispatchEvent(t){return this._et.dispatchEvent(t)}removeEventListener(t,s,e){this._et.removeEventListener(t,s,e)}}function it(_,t=250){let s=0,e=null,n,i,c;const r=()=>{s=Date.now(),e=null,n=_.apply(i,c),e||(i=null,c=[])};return function(...o){const l=Date.now(),h=t-(l-s);return i=this,c=o,h<=0||h>t?(e&&(clearTimeout(e),e=null),s=l,n=_.apply(i,c),e||(i=null,c=[])):e||(e=window.setTimeout(r,h)),n}}let nt=class W extends st{constructor(t,s={}){super(),this.canvas=t,this._drawningStroke=!1,this._isEmpty=!0,this._lastPoints=[],this._data=[],this._lastVelocity=0,this._lastWidth=0,this._handleMouseDown=e=>{e.buttons===1&&(this._drawningStroke=!0,this._strokeBegin(e))},this._handleMouseMove=e=>{this._drawningStroke&&this._strokeMoveUpdate(e)},this._handleMouseUp=e=>{e.buttons===1&&this._drawningStroke&&(this._drawningStroke=!1,this._strokeEnd(e))},this._handleTouchStart=e=>{if(e.cancelable&&e.preventDefault(),e.targetTouches.length===1){const n=e.changedTouches[0];this._strokeBegin(n)}},this._handleTouchMove=e=>{e.cancelable&&e.preventDefault();const n=e.targetTouches[0];this._strokeMoveUpdate(n)},this._handleTouchEnd=e=>{if(e.target===this.canvas){e.cancelable&&e.preventDefault();const i=e.changedTouches[0];this._strokeEnd(i)}},this._handlePointerStart=e=>{this._drawningStroke=!0,e.preventDefault(),this._strokeBegin(e)},this._handlePointerMove=e=>{this._drawningStroke&&(e.preventDefault(),this._strokeMoveUpdate(e))},this._handlePointerEnd=e=>{this._drawningStroke&&(e.preventDefault(),this._drawningStroke=!1,this._strokeEnd(e))},this.velocityFilterWeight=s.velocityFilterWeight||.7,this.minWidth=s.minWidth||.5,this.maxWidth=s.maxWidth||2.5,this.throttle="throttle"in s?s.throttle:16,this.minDistance="minDistance"in s?s.minDistance:5,this.dotSize=s.dotSize||0,this.penColor=s.penColor||"black",this.backgroundColor=s.backgroundColor||"rgba(0,0,0,0)",this.compositeOperation=s.compositeOperation||"source-over",this._strokeMoveUpdate=this.throttle?it(W.prototype._strokeUpdate,this.throttle):W.prototype._strokeUpdate,this._ctx=t.getContext("2d"),this.clear(),this.on()}clear(){const{_ctx:t,canvas:s}=this;t.fillStyle=this.backgroundColor,t.clearRect(0,0,s.width,s.height),t.fillRect(0,0,s.width,s.height),this._data=[],this._reset(this._getPointGroupOptions()),this._isEmpty=!0}fromDataURL(t,s={}){return new Promise((e,n)=>{const i=new Image,c=s.ratio||window.devicePixelRatio||1,r=s.width||this.canvas.width/c,a=s.height||this.canvas.height/c,o=s.xOffset||0,l=s.yOffset||0;this._reset(this._getPointGroupOptions()),i.onload=()=>{this._ctx.drawImage(i,o,l,r,a),e()},i.onerror=h=>{n(h)},i.crossOrigin="anonymous",i.src=t,this._isEmpty=!1})}toDataURL(t="image/png",s){switch(t){case"image/svg+xml":return typeof s!="object"&&(s=void 0),`data:image/svg+xml;base64,${btoa(this.toSVG(s))}`;default:return typeof s!="number"&&(s=void 0),this.canvas.toDataURL(t,s)}}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",this.canvas.style.userSelect="none";const t=/Macintosh/.test(navigator.userAgent)&&"ontouchstart"in document;window.PointerEvent&&!t?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.style.userSelect="auto",this.canvas.removeEventListener("pointerdown",this._handlePointerStart),this.canvas.removeEventListener("pointermove",this._handlePointerMove),this.canvas.ownerDocument.removeEventListener("pointerup",this._handlePointerEnd),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),this.canvas.ownerDocument.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}isEmpty(){return this._isEmpty}fromData(t,{clear:s=!0}={}){s&&this.clear(),this._fromData(t,this._drawCurve.bind(this),this._drawDot.bind(this)),this._data=this._data.concat(t)}toData(){return this._data}_getPointGroupOptions(t){return{penColor:t&&"penColor"in t?t.penColor:this.penColor,dotSize:t&&"dotSize"in t?t.dotSize:this.dotSize,minWidth:t&&"minWidth"in t?t.minWidth:this.minWidth,maxWidth:t&&"maxWidth"in t?t.maxWidth:this.maxWidth,velocityFilterWeight:t&&"velocityFilterWeight"in t?t.velocityFilterWeight:this.velocityFilterWeight,compositeOperation:t&&"compositeOperation"in t?t.compositeOperation:this.compositeOperation}}_strokeBegin(t){this.dispatchEvent(new CustomEvent("beginStroke",{detail:t}));const s=this._getPointGroupOptions(),e=Object.assign(Object.assign({},s),{points:[]});this._data.push(e),this._reset(s),this._strokeUpdate(t)}_strokeUpdate(t){if(this._data.length===0){this._strokeBegin(t);return}this.dispatchEvent(new CustomEvent("beforeUpdateStroke",{detail:t}));const s=t.clientX,e=t.clientY,n=t.pressure!==void 0?t.pressure:t.force!==void 0?t.force:0,i=this._createPoint(s,e,n),c=this._data[this._data.length-1],r=c.points,a=r.length>0&&r[r.length-1],o=a?i.distanceTo(a)<=this.minDistance:!1,l=this._getPointGroupOptions(c);if(!a||!(a&&o)){const h=this._addPoint(i,l);a?h&&this._drawCurve(h,l):this._drawDot(i,l),r.push({time:i.time,x:i.x,y:i.y,pressure:i.pressure})}this.dispatchEvent(new CustomEvent("afterUpdateStroke",{detail:t}))}_strokeEnd(t){this._strokeUpdate(t),this.dispatchEvent(new CustomEvent("endStroke",{detail:t}))}_handlePointerEvents(){this._drawningStroke=!1,this.canvas.addEventListener("pointerdown",this._handlePointerStart),this.canvas.addEventListener("pointermove",this._handlePointerMove),this.canvas.ownerDocument.addEventListener("pointerup",this._handlePointerEnd)}_handleMouseEvents(){this._drawningStroke=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),this.canvas.ownerDocument.addEventListener("mouseup",this._handleMouseUp)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}_reset(t){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(t.minWidth+t.maxWidth)/2,this._ctx.fillStyle=t.penColor,this._ctx.globalCompositeOperation=t.compositeOperation}_createPoint(t,s,e){const n=this.canvas.getBoundingClientRect();return new k(t-n.left,s-n.top,e,new Date().getTime())}_addPoint(t,s){const{_lastPoints:e}=this;if(e.push(t),e.length>2){e.length===3&&e.unshift(e[0]);const n=this._calculateCurveWidths(e[1],e[2],s),i=M.fromPoints(e,n);return e.shift(),i}return null}_calculateCurveWidths(t,s,e){const n=e.velocityFilterWeight*s.velocityFrom(t)+(1-e.velocityFilterWeight)*this._lastVelocity,i=this._strokeWidth(n,e),c={end:i,start:this._lastWidth};return this._lastVelocity=n,this._lastWidth=i,c}_strokeWidth(t,s){return Math.max(s.maxWidth/(t+1),s.minWidth)}_drawCurveSegment(t,s,e){const n=this._ctx;n.moveTo(t,s),n.arc(t,s,e,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve(t,s){const e=this._ctx,n=t.endWidth-t.startWidth,i=Math.ceil(t.length())*2;e.beginPath(),e.fillStyle=s.penColor;for(let c=0;c<i;c+=1){const r=c/i,a=r*r,o=a*r,l=1-r,h=l*l,p=h*l;let v=p*t.startPoint.x;v+=3*h*r*t.control1.x,v+=3*l*a*t.control2.x,v+=o*t.endPoint.x;let d=p*t.startPoint.y;d+=3*h*r*t.control1.y,d+=3*l*a*t.control2.y,d+=o*t.endPoint.y;const f=Math.min(t.startWidth+o*n,s.maxWidth);this._drawCurveSegment(v,d,f)}e.closePath(),e.fill()}_drawDot(t,s){const e=this._ctx,n=s.dotSize>0?s.dotSize:(s.minWidth+s.maxWidth)/2;e.beginPath(),this._drawCurveSegment(t.x,t.y,n),e.closePath(),e.fillStyle=s.penColor,e.fill()}_fromData(t,s,e){for(const n of t){const{points:i}=n,c=this._getPointGroupOptions(n);if(i.length>1)for(let r=0;r<i.length;r+=1){const a=i[r],o=new k(a.x,a.y,a.pressure,a.time);r===0&&this._reset(c);const l=this._addPoint(o,c);l&&s(l,c)}else this._reset(c),e(i[0],c)}}toSVG({includeBackgroundColor:t=!1}={}){const s=this._data,e=Math.max(window.devicePixelRatio||1,1),n=0,i=0,c=this.canvas.width/e,r=this.canvas.height/e,a=document.createElementNS("http://www.w3.org/2000/svg","svg");if(a.setAttribute("xmlns","http://www.w3.org/2000/svg"),a.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),a.setAttribute("viewBox",`${n} ${i} ${c} ${r}`),a.setAttribute("width",c.toString()),a.setAttribute("height",r.toString()),t&&this.backgroundColor){const o=document.createElement("rect");o.setAttribute("width","100%"),o.setAttribute("height","100%"),o.setAttribute("fill",this.backgroundColor),a.appendChild(o)}return this._fromData(s,(o,{penColor:l})=>{const h=document.createElement("path");if(!isNaN(o.control1.x)&&!isNaN(o.control1.y)&&!isNaN(o.control2.x)&&!isNaN(o.control2.y)){const p=`M ${o.startPoint.x.toFixed(3)},${o.startPoint.y.toFixed(3)} C ${o.control1.x.toFixed(3)},${o.control1.y.toFixed(3)} ${o.control2.x.toFixed(3)},${o.control2.y.toFixed(3)} ${o.endPoint.x.toFixed(3)},${o.endPoint.y.toFixed(3)}`;h.setAttribute("d",p),h.setAttribute("stroke-width",(o.endWidth*2.25).toFixed(3)),h.setAttribute("stroke",l),h.setAttribute("fill","none"),h.setAttribute("stroke-linecap","round"),a.appendChild(h)}},(o,{penColor:l,dotSize:h,minWidth:p,maxWidth:v})=>{const d=document.createElement("circle"),f=h>0?h:(p+v)/2;d.setAttribute("r",f.toString()),d.setAttribute("cx",o.x.toString()),d.setAttribute("cy",o.y.toString()),d.setAttribute("fill",l),a.appendChild(d)}),a.outerHTML}};const ot={class:"signature"},at={key:0,class:"tip-text st-font-24"},rt={class:"ctrl-color"},ct=["onClick"],lt={class:"ctrl-btn text-right"},ht=B({__name:"SignaturePad",props:{options:{type:Object,default:()=>({})}},emits:["save"],setup(_,{expose:t,emit:s}){const e=_;U(u=>({"19d5e87f":o.value}));const n=()=>{L().setOptions({prevLabel:"上一步",nextLabel:"下一步",skipLabel:"跳过",doneLabel:"知道了",showBullets:!1,disableInteraction:!0,exitOnOverlayClick:!1,steps:[{element:document.querySelector(".signature-wrapper"),title:"签名区域",intro:"您可以在此处手写签名",position:"top"},{element:document.querySelector(".ctrl-color"),title:"手写笔颜色",intro:"您可以切换手写笔颜色",position:"top"},{element:document.querySelector(".ctrl-btn"),title:"操作",intro:"您可以撤销、清空、保存签名",position:"bottom"},{element:document.querySelector(".preview"),title:"预览区域",intro:"您可以在此处预览签名效果",position:"top"}]}).start()},i=g(),c=g(null),r=g(null),a=g(!0),o=g("#000"),l=R(["#000","#2489f3","#ed521f"]),h=g(.5);z(()=>{p(),window.addEventListener("resize",C)}),N(()=>{var u;(u=L())==null||u.exit(),r.value=null,window.removeEventListener("resize",C)}),G(()=>r.value,u=>{a.value=u._isEmpty},{deep:!0});const p=()=>{const u={minWidth:h.value,maxWidth:5,penColor:o.value,backgroundColor:"rgb(255, 255, 255)"};r.value=new nt(c.value,{...u,...e.options}),a.value=r.value.isEmpty(),C(),r.value.addEventListener("beginStroke",()=>{a.value=!1},{once:!1})},v=()=>{const u=r.value.toData();u&&(u.pop(),r.value.fromData(u))},d=()=>{r.value.clear(),b()},f=u=>{r.value.penColor=o.value=u},b=()=>{if(r.value.isEmpty())s("save",null);else{const u=r.value.toDataURL();s("save",u)}};function C(){var u;c.value.width=(u=i.value)==null?void 0:u.offsetWidth,c.value.height=document.body.clientHeight/2,r.value.clear()}return t({guide:n}),(u,xt)=>{const A=Z,S=et,$=tt;return y(),w("div",ot,[E("section",{ref_key:"wrapperRef",ref:i,class:"signature-wrapper"},[a.value?(y(),w("h2",at,"请在此处签名")):T("",!0),E("canvas",{ref_key:"canvasRef",ref:c},"您的浏览器不支持canvas技术,请升级浏览器!",512)],512),m($,{type:"flex",justify:"space-between",class:"signature__control"},{default:x(()=>[m(A,{xs:12,sm:12,md:12,lg:8,xl:6},{default:x(()=>[E("div",rt,[(y(!0),w(I,null,V(l,P=>(y(),w("div",{key:P,style:q({"background-color":P}),class:j(["color-btn",{"active-color":P===o.value}]),onClick:yt=>f(P)},null,14,ct))),128))])]),_:1}),m(A,{xs:12,sm:12,md:12,lg:8,xl:6},{default:x(()=>[E("div",lt,[m(S,{size:"small",disabled:a.value,onClick:v},{default:x(()=>[D("撤 销")]),_:1},8,["disabled"]),m(S,{size:"small",type:"danger",disabled:a.value,onClick:d},{default:x(()=>[D(" 清 空 ")]),_:1},8,["disabled"]),m(S,{size:"small",type:"primary",disabled:a.value,onClick:b},{default:x(()=>[D(" 预 览 ")]),_:1},8,["disabled"])])]),_:1})]),_:1})])}}}),ut=O(ht,[["__scopeId","data-v-5e4e8bb6"]]);const dt=_=>(H("data-v-3dac4cbe"),_=_(),J(),_),_t={class:"page-wrapper"},mt=dt(()=>E("span",{class:"st-margin-right-10"},"签名教程",-1)),pt={key:0,class:"preview"},vt=["src"],ft=B({name:"Signature"}),gt=Object.assign(ft,{setup(_){const t=g(null),s=g(null),e=()=>{s.value.guide()},n=()=>{},i=c=>{if(t.value=c,!t.value)return!1};return(c,r)=>{const a=Y,o=Q,l=K;return y(),w("div",_t,[m(o,null,{right:x(()=>[E("div",{class:"guide-icon st-font-12 st-flex-ai",onClick:e},[mt,m(a,{name:"info"})])]),_:1}),E("div",null,[m(l,{title:"手写签名区域",border:!1}),m(ut,{ref_key:"signaturePadRef",ref:s,onSave:i},null,512),(y(),w("div",pt,[m(l,{title:"预览签名区域",center:""},X({_:2},[void 0]),1024),F(t)?(y(),w("img",{key:0,class:"sign-img",src:F(t),onClick:n},null,8,vt)):T("",!0)]))])])}}}),Mt=O(gt,[["__scopeId","data-v-3dac4cbe"]]);export{Mt as default};