import{a1 as P,d as v,c5 as _,p as i,cg as m,ch as $,ax as b,a3 as f,av as q,a7 as p,a2 as G,a5 as O,c as x,ci as T,m as z,a6 as D,P as E}from"./index-3418e78b.js";import{r as V,u as j}from"./use-route-029d125b.js";const[S,w]=P("grid"),K={square:Boolean,center:b,border:b,gutter:f,reverse:Boolean,iconSize:f,direction:String,clickable:Boolean,columnNum:q(4)},h=Symbol(S);var L=v({name:S,props:K,setup(e,{slots:t}){const{linkChildren:a}=_(h);return a({props:e}),()=>{var s;return i("div",{style:{paddingLeft:m(e.gutter)},class:[w(),{[$]:e.border&&!e.gutter}]},[(s=t.default)==null?void 0:s.call(t)])}}});const J=p(L),[U,l]=P("grid-item"),Y=G({},V,{dot:Boolean,text:String,icon:String,badge:f,iconColor:String,iconPrefix:String,badgeProps:Object});var A=v({name:U,props:Y,setup(e,{slots:t}){const{parent:a,index:s}=O(h),B=j();if(!a)return;const y=x(()=>{const{square:c,gutter:n,columnNum:r}=a.props,d=`${100/+r}%`,o={flexBasis:d};if(c)o.paddingTop=d;else if(n){const u=m(n);o.paddingRight=u,s.value>=+r&&(o.marginTop=u)}return o}),C=x(()=>{const{square:c,gutter:n}=a.props;if(c&&n){const r=m(n);return{right:r,bottom:r,height:"auto"}}}),R=()=>{if(t.icon)return i(D,z({dot:e.dot,content:e.badge},e.badgeProps),{default:t.icon});if(e.icon)return i(E,{dot:e.dot,name:e.icon,size:a.props.iconSize,badge:e.badge,class:l("icon"),color:e.iconColor,badgeProps:e.badgeProps,classPrefix:e.iconPrefix},null)},I=()=>{if(t.text)return t.text();if(e.text)return i("span",{class:l("text")},[e.text])},k=()=>t.default?t.default():[R(),I()];return()=>{const{center:c,border:n,square:r,gutter:d,reverse:o,direction:u,clickable:g}=a.props,N=[l("content",[u,{center:c,square:r,reverse:o,clickable:g,surround:n&&d}]),{[T]:n}];return i("div",{class:[l({square:r})],style:y.value},[i("div",{role:g?"button":void 0,class:N,style:C.value,tabindex:g?0:void 0,onClick:B},[k()])])}}});const M=p(A);export{M as G,J as a};
