import{s as w,f as T,p as E,g as m,a as I}from"./utils-9fd3636e.js";import{P as N}from"./index-9411cdf3.js";import{a1 as S,a2 as A,da as g,d as B,a as h,c as G,w as y,cG as u,p as K,m as R,c7 as U,a7 as _}from"./index-3418e78b.js";const x=new Date().getFullYear(),[b]=S("date-picker"),j=A({},w,{columnsType:{type:Array,default:()=>["year","month","day"]},minDate:{type:Date,default:()=>new Date(x-10,0,1),validator:g},maxDate:{type:Date,default:()=>new Date(x+10,11,31),validator:g}});var q=B({name:b,props:j,emits:["confirm","cancel","change","update:modelValue"],setup(a,{emit:c,slots:v}){const n=h(a.modelValue),l=h(!1),M=()=>{const e=a.minDate.getFullYear(),t=a.maxDate.getFullYear();return m(e,t,"year",a.formatter,a.filter)},i=e=>e===a.minDate.getFullYear(),d=e=>e===a.maxDate.getFullYear(),Y=e=>e===a.minDate.getMonth()+1,V=e=>e===a.maxDate.getMonth()+1,s=e=>{const{minDate:t,columnsType:o}=a,r=o.indexOf(e),D=l.value?a.modelValue[r]:n.value[r];if(D)return+D;switch(e){case"year":return t.getFullYear();case"month":return t.getMonth()+1;case"day":return t.getDate()}},C=()=>{const e=s("year"),t=i(e)?a.minDate.getMonth()+1:1,o=d(e)?a.maxDate.getMonth()+1:12;return m(t,o,"month",a.formatter,a.filter)},P=()=>{const e=s("year"),t=s("month"),o=i(e)&&Y(t)?a.minDate.getDate():1,r=d(e)&&V(t)?a.maxDate.getDate():I(e,t);return m(o,r,"day",a.formatter,a.filter)},f=G(()=>a.columnsType.map(e=>{switch(e){case"year":return M();case"month":return C();case"day":return P();default:return[]}}));y(n,e=>{u(e,a.modelValue)||c("update:modelValue",e)}),y(()=>a.modelValue,(e,t)=>{l.value=u(t,n.value),e=T(e,f.value),u(e,n.value)||(n.value=e),l.value=!1},{immediate:!0});const k=(...e)=>c("change",...e),F=(...e)=>c("cancel",...e),O=(...e)=>c("confirm",...e);return()=>K(N,R({modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,columns:f.value,onChange:k,onCancel:F,onConfirm:O},U(a,E)),v)}});const L=_(q);export{L as D};
