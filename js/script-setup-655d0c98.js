import{F as a,j as e}from"./vant-c731c718.js";import{m as s,a as t,c as o,r as l,_ as u,ak as r,l as p,u as n,f as c,al as i,a5 as m,b7 as d,aj as f,g as v,aI as b,A as g,bk as h}from"./@vue-0da0c2e3.js";import{b as j,u as x}from"./vue-router-1cbad9b8.js";import{a as y,o as _,b as k,T as V}from"./@vueuse-13b67ac5.js";import{_ as S}from"./plugin-vue_export-helper-893979e1.js";import"./@vant-b0725c78.js";const w={class:"script-setup-wrapper"},C=s({name:"ScriptSetupDemo"});var I=S(Object.assign(C,{props:{modelValue:{type:String,default:"输入框内容"},title:{type:String,default:"标题"}},emits:["updateName"],setup(s,{emit:S}){const C=s;h((a=>({a6658c3e:n(N).color})));const{x:I,y:M}=y();j();x();const N=t({name:"张三",age:18,sex:1,inputVal:o((()=>C.modelValue)),color:"red"}),O=()=>{S("updateName","Tom")},T=l(!1),z=l(null),A=()=>{T.value=!T.value};_(z,(a=>{T.value=!1}));const B=l(0),D=k(B,{duration:1e3,transition:V.easeOutExpo});B.value=5e3;v();const{name:E,age:F,inputVal:R}=u(N);return(t,o)=>{const l=a,u=e;return b(),r("div",w,[p(l,{modelValue:n(R),"onUpdate:modelValue":o[0]||(o[0]=a=>c(R)?R.value=a:null)},null,8,["modelValue"]),i("h2",null,m(s.title),1),i("p",null,"我是"+m(n(E))+",今年"+m(n(F)),1),p(u,{type:"success",onClick:O},{default:d((()=>[g("子传父")])),_:1}),i("h3",null,"鼠标坐标Mouse: "+m(n(I))+" x "+m(n(M)),1),n(T)?(b(),r("div",{key:0,ref_key:"popupBoxRef",ref:z,class:"popup-box zy-border-1",style:{width:"80vw",height:"50vh","background-color":"#07c160",color:"#f4f4f4"}}," 弹窗内容 ",512)):f("",!0),p(u,{onClick:A},{default:d((()=>[g("显示弹窗")])),_:1}),i("h4",null,"数字改变动画："+m(Math.round(+n(D))),1)])}}}),[["__scopeId","data-v-688e2a0a"]]);export{I as default};
