import{a4 as g,a3 as S,d as x,a2 as z,cr as _,ax as y,a as B,c as r,p as d,P as D,cg as v}from"./index-3418e78b.js";const G={name:g,disabled:Boolean,iconSize:S,modelValue:g,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var w=x({props:z({},G,{bem:_(Function),role:String,shape:String,parent:Object,checked:Boolean,bindGroup:y}),emits:["click","toggle"],setup(e,{emit:k,slots:t}){const h=B(),a=n=>{if(e.parent&&e.bindGroup)return e.parent.props[n]},l=r(()=>{if(e.parent&&e.bindGroup){const n=a("disabled")||e.disabled;if(e.role==="checkbox"){const c=a("modelValue").length,o=a("max"),i=o&&c>=+o;return n||i&&!e.checked}return n}return e.disabled}),C=r(()=>a("direction")),s=r(()=>{const n=e.checkedColor||a("checkedColor");if(n&&e.checked&&!l.value)return{borderColor:n,backgroundColor:n}}),u=r(()=>e.shape||a("shape")||"round"),P=n=>{const{target:c}=n,o=h.value,i=o===c||(o==null?void 0:o.contains(c));!l.value&&(i||!e.labelDisabled)&&k("toggle"),k("click",n)},m=()=>{var n,c;const{bem:o,checked:i}=e,b=e.iconSize||a("iconSize");return d("div",{ref:h,class:o("icon",[u.value,{disabled:l.value,checked:i}]),style:u.value!=="dot"?{fontSize:v(b)}:{width:v(b),height:v(b),borderColor:(n=s.value)==null?void 0:n.borderColor}},[t.icon?t.icon({checked:i,disabled:l.value}):u.value!=="dot"?d(D,{name:"success",style:s.value},null):d("div",{class:o("icon--dot__icon"),style:{backgroundColor:(c=s.value)==null?void 0:c.backgroundColor}},null)])},f=()=>{if(t.default)return d("span",{class:e.bem("label",[e.labelPosition,{disabled:l.value}])},[t.default()])};return()=>{const n=e.labelPosition==="left"?[f(),m()]:[m(),f()];return d("div",{role:e.role,class:e.bem([{disabled:l.value,"label-disabled":e.labelDisabled},C.value]),tabindex:l.value?void 0:0,"aria-checked":e.checked,onClick:P},[n])}}});export{G as c,w as s};
