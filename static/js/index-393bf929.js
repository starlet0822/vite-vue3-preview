import{f as d,F as w}from"./index-f81a7d39.js";import{u as A}from"./use-id-f342ab22.js";import{a1 as F,a2 as f,au as i,ax as L,d as N,a as T,cj as B,p as o,c7 as u,m as D,cx as O,a7 as j}from"./index-997c5456.js";const[K,t,q]=F("search"),U=f({},d,{label:String,shape:i("square"),leftIcon:i("search"),clearable:L,actionText:String,background:String,showAction:Boolean});var $=N({name:K,props:U,emits:["blur","focus","clear","search","cancel","clickInput","clickLeftIcon","clickRightIcon","update:modelValue"],setup(n,{emit:c,slots:a,attrs:b}){const h=A(),l=T(),k=()=>{a.action||(c("update:modelValue",""),c("cancel"))},I=e=>{e.keyCode===13&&(O(e),c("search",n.modelValue))},r=()=>n.id||`${h}-input`,p=()=>{if(a.label||n.label)return o("label",{class:t("label"),for:r()},[a.label?a.label():n.label])},g=()=>{if(n.showAction){const e=n.actionText||q("cancel");return o("div",{class:t("action"),role:"button",tabindex:0,onClick:k},[a.action?a.action():e])}},C=()=>{var e;return(e=l.value)==null?void 0:e.blur()},v=()=>{var e;return(e=l.value)==null?void 0:e.focus()},m=e=>c("blur",e),x=e=>c("focus",e),E=e=>c("clear",e),R=e=>c("clickInput",e),S=e=>c("clickLeftIcon",e),y=e=>c("clickRightIcon",e),P=Object.keys(d),V=()=>{const e=f({},b,u(n,P),{id:r()}),s=_=>c("update:modelValue",_);return o(w,D({ref:l,type:"search",class:t("field"),border:!1,onBlur:m,onFocus:x,onClear:E,onKeypress:I,onClickInput:R,onClickLeftIcon:S,onClickRightIcon:y,"onUpdate:modelValue":s},e),u(a,["left-icon","right-icon"]))};return B({focus:v,blur:C}),()=>{var e;return o("div",{class:t({"show-action":n.showAction}),style:{background:n.background}},[(e=a.left)==null?void 0:e.call(a),o("div",{class:t("content",n.shape)},[p(),V()]),g()])}}});const J=j($);export{J as S};