import{_ as ve}from"./index-c5cdc445.js";import{a1 as pe,a2 as _e,av as z,d as oe,a as g,c as ne,w as L,cG as Y,p,m as ae,c7 as ge,a7 as ke,cJ as be,ao as ie,r as W,dk as xe,o as he,B as se,an as Ce,k as D,s as K,x as j,z as G,F as Z,G as ee,u as f,f as w,y as we,al as ye,t as Se,g as I,q as C,v as F,J as M,as as te,$ as Ve,M as Te}from"./index-3418e78b.js";import{_ as ue}from"./plugin-vue_export-helper-c27b6911.js";/* empty css              */import{P as re}from"./index-9411cdf3.js";import{o as Pe,S as He}from"./style-f54de0a6.js";import{C as Be,R as Me}from"./index-2cead2fc.js";import{C as Ne}from"./index-3059a8b5.js";import{F as $e}from"./index-fbfdb716.js";import{s as Re,g as J,f as Ue,p as De}from"./utils-9fd3636e.js";import"./index-972ab8e3.js";import"./use-placeholder-c7d2abea.js";import"./use-route-029d125b.js";import"./use-sync-prop-ref-c87c29fd.js";import"./index-90986b12.js";import"./use-id-fbbda1f9.js";import"./index-271b97e3.js";import"./popper-f3391c26.js";const[ze]=pe("time-picker"),le=a=>/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(a),Ie=["hour","minute","second"],Ae=_e({},Re,{minHour:z(0),maxHour:z(23),minMinute:z(0),maxMinute:z(59),minSecond:z(0),maxSecond:z(59),minTime:{type:String,validator:le},maxTime:{type:String,validator:le},columnsType:{type:Array,default:()=>["hour","minute"]},filter:Function});var Oe=oe({name:ze,props:Ae,emits:["confirm","cancel","change","update:modelValue"],setup(a,{emit:h,slots:s}){const _=g(a.modelValue),T=t=>{const x=t.split(":");return Ie.map((P,k)=>a.columnsType.includes(P)?x[k]:"00")},$=ne(()=>{let{minHour:t,maxHour:x,minMinute:P,maxMinute:k,minSecond:N,maxSecond:H}=a;if(a.minTime||a.maxTime){const b={hour:0,minute:0,second:0};a.columnsType.forEach((e,n)=>{var m;b[e]=(m=_.value[n])!=null?m:0});const{hour:l,minute:r}=b;if(a.minTime){const[e,n,m]=T(a.minTime);t=e,P=+l<=+t?n:"00",N=+l<=+t&&+r<=+P?m:"00"}if(a.maxTime){const[e,n,m]=T(a.maxTime);x=e,k=+l>=+x?n:"59",H=+l>=+x&&+r>=+k?m:"59"}}return a.columnsType.map(b=>{const{filter:l,formatter:r}=a;switch(b){case"hour":return J(+t,+x,b,r,l,_.value);case"minute":return J(+P,+k,b,r,l,_.value);case"second":return J(+N,+H,b,r,l,_.value);default:return[]}})});L(_,t=>{Y(t,a.modelValue)||h("update:modelValue",t)}),L(()=>a.modelValue,t=>{t=Ue(t,$.value),Y(t,_.value)||(_.value=t)},{immediate:!0});const y=(...t)=>h("change",...t),u=(...t)=>h("cancel",...t),i=(...t)=>h("confirm",...t);return()=>p(re,ae({modelValue:_.value,"onUpdate:modelValue":t=>_.value=t,columns:$.value,onChange:y,onCancel:u,onConfirm:i},ge(a,De)),s)}});const Fe=ke(Oe);const We={class:"time-picker"},je={class:"time-scroll"},qe={class:"time-text"},Ee={class:"time-full"},Ge=["data-val","data-idx","onClick"],Je=oe({name:"TimePicker"}),Le=Object.assign(Je,{props:{modelValue:{type:Array,default:()=>[]},minHour:{type:[Number,String],default:"0"},maxHour:{type:[Number,String],default:"23"},visibleNum:{type:[Number,String],default:"8"},timeStep:{type:[Number,String],default:"30",validator:a=>60%a===0},blockColor:{type:String,default:be.get("themeColor")||ie||"#2e6cf3"},showArrow:Boolean,fixed:Boolean,readonly:Boolean,disabledBefore:Boolean},emits:["select"],setup(a,{emit:h}){const s=a;ye(l=>({"22bfa96c":f($),db62b176:a.blockColor}));const _=g(0);g(!0),g(0);const T=g(0),$=g("");W([]),W([]),W([]);const y=g([]);g([]);const u=W([]),i=g(),t=g();g(!1),xe(document.body,l=>{}),L(()=>s,l=>{H()},{deep:!0}),he(()=>{H(),x()});const x=async()=>{var l;await se(),T.value=(l=document.querySelector(".time-bar"))==null?void 0:l.getBoundingClientRect().width,$.value=T.value/Ce+"rem"},P=l=>{if(_.value+=T.value*l,_.value===T.value){_.value=0;return}console.log(_.value)},k=l=>Math.floor(l/60)>=10?Math.floor(l/60):"0"+Math.floor(l/60),N=()=>{if(u.length===0){h("select",null);return}const l=+s.minHour*60+Number(s.timeStep)*i.value+Number(s.timeStep),r=+s.minHour*60+Number(s.timeStep)*t.value+Number(s.timeStep);console.log("startTime, startTime",l,l);let e="",n="",m="",d="",S="",R="";l&&r?(m=k(l-s.timeStep),e=k(r),d=(l-s.timeStep)%60===0?"00":Math.round(((l-s.timeStep)/60-m)*60),n=r%60===0?"00":Math.round((r/60-e)*60),S=m+":"+d,e===24&&(e=23,n=59),R=e+":"+n):(m=k(l-s.timeStep),e=k(l),d=(l-s.timeStep)%60===0?"00":Math.round(((l-s.timeStep)/60-m)*60),n=l%60===0?"00":Math.round((l/60-e)*60),S=m+":"+d,e===24&&(e=23,n=59),R=e+":"+n),h("select",[S,R])},H=()=>{console.log("initTimeData");const l=parseInt(new Date().getHours()),r=parseInt(new Date().getMinutes()),e=l*60+r;console.log(l,r,e);const n=[],m=d=>{const S=[],R=60/s.timeStep*(d-s.minHour),q=(B,v)=>{if(!s.disabledBefore)return!1;if(B<l)return!0;if(l===B){const o=s.timeStep*(v-1),V=s.timeStep*v;if(r>=o&&r<=V||r>=V)return!0}};for(let B=1;B<=60/s.timeStep;B++)S.push({value:d*60+s.timeStep*B,selected:!1,disabled:q(d,B),index:R+B-1});return S};for(let d=+s.minHour;d<=+s.maxHour;d++){const S={time:"",blocks:m(d)};S.time=d*60,n.push(S)}y.value=n},b=(l,r,e)=>{if(s.readonly)return!1;if(s.disabledBefore&&H(),!r.disabled){if(console.log("点击时间块",l.time,r.value,e),i.value===void 0&&t.value===void 0)i.value=u[0]=e,console.log("首次选择",e);else if(i.value!==void 0&&t.value===void 0){if(console.log("只有开始时间时"),e===i.value&&u.indexOf(e)>-1&&(u.splice(u.indexOf(e),1),i.value=t.value=void 0),e>i.value){t.value=e,console.log("向右选择时",i.value,t.value),u.splice(0);for(let n=i.value;n<=t.value;n++)u.splice(n-i.value,0,n)}if(e<i.value){const[n,m]=[e,i.value];i.value=n,t.value=m,console.log("结束时间小于开始时",i.value,t.value),u.splice(0);for(let d=i.value;d<=t.value;d++)u.splice(d-i.value,0,d)}}else if(i.value!==void 0&&t.value!==void 0){if(e===i.value){const n=u.indexOf(e);u.splice(n,1),u.length?i.value=u[0]:i.value=t.value=void 0}else if(e===t.value){const n=u.indexOf(e);u.splice(n,1),t.value=u[u.length-1],i.value===t.value&&(t.value=void 0)}else if(e<i.value)console.log("同时存在开始结束时间，向左则重置选择"),u.splice(0),i.value=t.value=void 0;else if(e>i.value){t.value=e,console.log("向右选择时",i.value,t.value),u.splice(0);for(let n=i.value;n<=t.value;n++)u.splice(n-i.value,0,n)}}N()}};return(l,r)=>(w(),D("div",We,[a.showArrow?(w(),D("div",{key:0,class:"time-picker-prev",onClick:r[0]||(r[0]=e=>P(1))},"<")):K("",!0),j("div",je,[j("div",{class:G(["time-wrapper",{"time-wrapper__fixed":a.fixed}])},[(w(!0),D(Z,null,ee(f(y),(e,n)=>(w(),D("div",{key:e.time+n,class:G(["time-bar",[{"time-bar--fixed-start":a.fixed&&n==0,"time-bar--fixed-end":a.fixed&&f(y).length-1===n,paddingno:a.fixed&&f(y).length-2===n}]])},[j("span",qe,we(k(e.time)+":00"),1),j("div",Ee,[(w(!0),D(Z,null,ee(e.blocks,m=>(w(),D("div",{key:m.value,"data-val":m.value,"data-idx":m.index,class:G(["time-block",{"time-block--selected":f(u).includes(m.index),"time-block--readonly":a.readonly,"time-block--disabled":m.disabled}]),onClick:d=>b(e,m,m.index)},null,10,Ge))),128))])],2))),128))],2)]),a.showArrow?(w(),D("div",{key:1,class:"time-picker-next",onClick:r[1]||(r[1]=e=>P(-1))},">")):K("",!0)]))}}),Ke=ue(Le,[["__scopeId","data-v-fc6b28f0"]]);const Xe={class:"color-wrapper"},Qe={__name:"time-range-picker",setup(a){const h=g(),s=g(null),_=W({minHour:"00",maxHour:"23",timeStep:30,blockColor:ie,fixed:!1,readonly:!1,disabledBefore:!1}),{minHour:T,maxHour:$,timeStep:y,disabledBefore:u,fixed:i,readonly:t,blockColor:x}=Se(_),P=(v,o)=>{console.log(v,o);const V=v?v[0]+" ~ "+v[1]:"";h.value=V},k=g(!1),N=g(["00","23"]),H=ne(()=>T.value+" ~ "+$.value),b=g(!1),l=()=>{b.value=!0},r=({selectedValues:v,selectedOptions:o})=>{console.log(v,o);const[V,U]=N.value;T.value=V,$.value=U,h.value="",b.value=!1},e=g(!1),n=[{text:"10分",value:10},{text:"15分",value:15},{text:"20分",value:20},{text:"30分",value:30},{text:"60分",value:60}],m=()=>{e.value=!0},d=({selectedOptions:v})=>{e.value=!1,y.value=v[0].value,h.value=""},S=async()=>{await se(),h.value=""},R=(v,o)=>v==="minute"?o.filter(V=>Number(V.value)<=23):o,q=(v,o)=>(v==="hour"&&(o.text+="时开始"),v==="minute"&&(o.text+="时结束"),o),B=v=>{console.log("主题色",v)};return(v,o)=>{const V=Ne,U=$e,A=Be,X=Me,Q=He,me=Fe,E=Ve,ce=re,de=Ke,fe=ve,O=Te("waves");return w(),I(fe,{class:"time-range-picker"},{default:C(()=>[p(V,{title:"配置项",border:!0,value:`已选时间 ${f(h)||""}`},null,8,["value"]),p(X,{type:"flex",justify:"center"},{default:C(()=>[F((w(),I(A,{span:"8"},{default:C(()=>[p(U,{modelValue:f(x),"onUpdate:modelValue":o[0]||(o[0]=c=>M(x)?x.value=c:null),label:"高亮颜色","label-align":"top",readonly:"","is-link":"",onClick:o[1]||(o[1]=c=>k.value=!0)},null,8,["modelValue"])]),_:1})),[[O]]),F((w(),I(A,{span:"8"},{default:C(()=>[p(U,{modelValue:f(H),"onUpdate:modelValue":o[2]||(o[2]=c=>M(H)?H.value=c:null),label:"时间范围",placeholder:"自定义范围","label-align":"top",readonly:"","is-link":"",border:!0,onClick:l},null,8,["modelValue"])]),_:1})),[[O]]),F((w(),I(A,{span:"8"},{default:C(()=>[p(U,{modelValue:f(y),"onUpdate:modelValue":o[3]||(o[3]=c=>M(y)?y.value=c:null),label:"间隔（分）",placeholder:"规定时间间隔","label-align":"top",readonly:"","is-link":"",border:!0,onClick:m},null,8,["modelValue"])]),_:1})),[[O]])]),_:1}),p(X,{type:"flex",align:"center"},{default:C(()=>[F((w(),I(A,{span:"8"},{default:C(()=>[p(U,{label:"禁用过去","label-align":"top"},{input:C(()=>[p(Q,{modelValue:f(u),"onUpdate:modelValue":o[4]||(o[4]=c=>M(u)?u.value=c:null),size:f(te)(18),onChange:S},null,8,["modelValue","size"])]),_:1})]),_:1})),[[O]]),K("",!0),F((w(),I(A,{span:"8"},{default:C(()=>[p(U,{label:"只读","label-align":"top"},{input:C(()=>[p(Q,{modelValue:f(t),"onUpdate:modelValue":o[6]||(o[6]=c=>M(t)?t.value=c:null),size:f(te)(18)},null,8,["modelValue","size"])]),_:1})]),_:1})),[[O]])]),_:1}),p(E,{show:f(b),"onUpdate:show":o[9]||(o[9]=c=>M(b)?b.value=c:null),position:"bottom"},{default:C(()=>[p(me,{modelValue:f(N),"onUpdate:modelValue":o[7]||(o[7]=c=>M(N)?N.value=c:null),title:"选择小时范围",filter:R,formatter:q,"is-link":"",onCancel:o[8]||(o[8]=c=>b.value=!1),onConfirm:r},null,8,["modelValue"])]),_:1},8,["show"]),p(E,{show:f(e),"onUpdate:show":o[11]||(o[11]=c=>M(e)?e.value=c:null),position:"bottom"},{default:C(()=>[p(ce,{title:"时间间隔",columns:n,onCancel:o[10]||(o[10]=c=>e.value=!1),onConfirm:d})]),_:1},8,["show"]),p(E,{show:f(k),"onUpdate:show":o[13]||(o[13]=c=>M(k)?k.value=c:null)},{default:C(()=>[j("div",Xe,[p(f(Pe),{pureColor:f(x),"onUpdate:pureColor":o[12]||(o[12]=c=>M(x)?x.value=c:null),"is-widget":!0,"disable-alpha":"",format:"hex","picker-type":"chrome","use-type":"pure",onPureColorChange:B},null,8,["pureColor"])])]),_:1},8,["show"]),p(de,ae({ref_key:"timePickerRef",ref:s},f(_),{onSelect:o[14]||(o[14]=c=>P(c))}),null,16),p(V,{title:"该组件为自研组件，后续提供更灵活定制选项，有时间再优化动态预览配置~",border:!1})]),_:1})}}},_t=ue(Qe,[["__scopeId","data-v-6fbd6726"]]);export{_t as default};
