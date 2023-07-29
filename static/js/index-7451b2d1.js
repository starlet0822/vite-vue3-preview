import{b as R,a as j,T as D}from"./index-08eb4df6.js";import{ab as F,d as U,a as w,ai as q,w as T,p as o,ah as z,aj as C,ag as G,af as J,B as S,aa as V,cc as L,am as M}from"./index-2d318566.js";const[Q,i,W]=F("cascader"),X={title:String,options:z(),closeable:C,swipeable:C,closeIcon:G("cross"),showHeader:C,modelValue:J,fieldNames:Object,placeholder:String,activeColor:String};var Y=U({name:Q,props:X,emits:["close","change","finish","clickTab","update:modelValue"],setup(n,{slots:r,emit:f}){const c=w([]),m=w(0),[P,y]=R(),{text:g,value:u,children:v}=q({text:"text",value:"value",children:"children"},n.fieldNames),k=(e,l)=>{for(const t of e){if(t[u]===l)return[t];if(t[v]){const a=k(t[v],l);if(a)return[t,...a]}}},b=()=>{const{options:e,modelValue:l}=n;if(l!==void 0){const t=k(e,l);if(t){let a=e;c.value=t.map(s=>{const h={options:a,selected:s},d=a.find(p=>p[u]===s[u]);return d&&(a=d[v]),h}),a&&c.value.push({options:a,selected:null}),S(()=>{m.value=c.value.length-1});return}}c.value=[{options:e,selected:null}]},H=(e,l)=>{if(e.disabled)return;if(c.value[l].selected=e,c.value.length>l+1&&(c.value=c.value.slice(0,l+1)),e[v]){const s={options:e[v],selected:null};c.value[l+1]?c.value[l+1]=s:c.value.push(s),S(()=>{m.value++})}const t=c.value.map(s=>s.selected).filter(Boolean);f("update:modelValue",e[u]);const a={value:e[u],tabIndex:l,selectedOptions:t};f("change",a),e[v]||f("finish",a)},O=()=>f("close"),E=({name:e,title:l})=>f("clickTab",e,l),N=()=>n.showHeader?o("div",{class:i("header")},[o("h2",{class:i("title")},[r.title?r.title():n.title]),n.closeable?o(V,{name:n.closeIcon,class:[i("close-icon"),L],onClick:O},null):null]):null,_=(e,l,t)=>{const{disabled:a}=e,s=!!(l&&e[u]===l[u]),h=e.color||(s?n.activeColor:void 0),d=r.option?r.option({option:e,selected:s}):o("span",null,[e[g]]);return o("li",{ref:s?y(t):void 0,role:"menuitemradio",class:[i("option",{selected:s,disabled:a}),e.className],style:{color:h},tabindex:a?void 0:s?0:-1,"aria-checked":s,"aria-disabled":a||void 0,onClick:()=>H(e,t)},[d,s?o(V,{name:"success",class:i("selected-icon")},null):null])},x=(e,l,t)=>o("ul",{role:"menu",class:i("options")},[e.map(a=>_(a,l,t))]),B=(e,l)=>{const{options:t,selected:a}=e,s=n.placeholder||W("select"),h=a?a[g]:s;return o(D,{title:h,titleClass:i("tab",{unselected:!a})},{default:()=>{var d,p;return[(d=r["options-top"])==null?void 0:d.call(r,{tabIndex:l}),x(t,a,l),(p=r["options-bottom"])==null?void 0:p.call(r,{tabIndex:l})]}})},K=()=>o(j,{active:m.value,"onUpdate:active":e=>m.value=e,shrink:!0,animated:!0,class:i("tabs"),color:n.activeColor,swipeable:n.swipeable,onClickTab:E},{default:()=>[c.value.map(B)]}),A=e=>{const l=e.parentElement;l&&(l.scrollTop=e.offsetTop-(l.offsetHeight-e.offsetHeight)/2)};return b(),T(m,e=>{const l=P.value[e];l&&A(l)}),T(()=>n.options,b,{deep:!0}),T(()=>n.modelValue,e=>{e!==void 0&&c.value.map(t=>{var a;return(a=t.selected)==null?void 0:a[u]}).includes(e)||b()}),()=>o("div",{class:i()},[N(),K()])}});const I=M(Y);export{I as C};