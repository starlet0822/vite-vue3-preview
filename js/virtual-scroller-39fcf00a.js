import{_ as e}from"./index-2f91436e.js";import{v as a,w as s,d as t,B as l}from"./vant-c731c718.js";import{s as i}from"./vue-virtual-scroller-92a6bf64.js";import{_ as r}from"./plugin-vue_export-helper-893979e1.js";import{r as o,aI as u,ak as n,aj as c,al as d,l as m,b7 as v,A as p,u as f,f as _,F as y,aN as h,ai as j,n as b}from"./@vue-0da0c2e3.js";import"./vue-router-1cbad9b8.js";import"./@vant-b0725c78.js";import"./vue-resize-8878d15a.js";import"./vue-observe-visibility-c5c8dc56.js";const g={class:"layout__body"},k={class:"mode-toggle st-bg-white"},x={key:1,class:"default-scoller"};var V=r({__name:"VirtualVertical",setup(e){const r=o("1"),V=o([]);o(""),o(null);for(let a=0;a<1e3;a++)V.value.push({id:a});const w=e=>{return a=this,s=null,t=function*(){yield b()},new Promise(((e,l)=>{var i=e=>{try{o(t.next(e))}catch(a){l(a)}},r=e=>{try{o(t.throw(e))}catch(a){l(a)}},o=a=>a.done?e(a.value):Promise.resolve(a.value).then(i,r);o((t=t.apply(a,s)).next())}));var a,s,t};return(e,o)=>{const b=t,z=a,I=s,P=l;return u(),n("div",g,[c("",!0),d("div",k,[m(I,{modelValue:f(r),"onUpdate:modelValue":o[0]||(o[0]=e=>_(r)?r.value=e:null),direction:"horizontal",onChange:w},{default:v((()=>[m(z,{name:"1"},{default:v((()=>[p("默认滚动")])),_:1}),m(z,{name:"2"},{default:v((()=>[p("虚拟滚动")])),_:1})])),_:1},8,["modelValue"])]),1==f(r)?(u(),n("div",x,[(u(!0),n(y,null,h(f(V),(e=>(u(),j(b,{key:e.id,class:"list-item",title:`我是第${e.id+1}项数据`},null,8,["title"])))),128))])):(u(),j(f(i),{key:2,class:"scroller",items:f(V),"item-size":44,"key-field":"id"},{default:v((({item:e})=>[m(b,{class:"list-item",title:`我是第${e.id+1}项数据`},null,8,["title"])])),_:1},8,["items"])),m(P)])}}},[["__scopeId","data-v-f171c658"]]);const w={class:"layout__page"},z={__name:"virtual-scroller",setup:a=>(a,s)=>{const t=e;return u(),n("div",w,[m(t),m(V)])}};export{z as default};
