import{a1 as ae,d as C,a as w,a2 as ne,w as A,p as h,c9 as re,ax as E,au as ie,a3 as ce,B as z,P as j,cD as ue,a7 as de,as as W,f as p,k as f,x as V,F as O,G as R,A as K,z as M,K as P,y as D,c as U,m as T,q as X,$ as Z,d3 as pe,M as me,s as G,I as H,g as fe,i as _e,v as L,Q as ve,R as he}from"./index-96f987ab.js";import{_ as S}from"./plugin-vue_export-helper-c27b6911.js";import"./index-caaea2a8.js";import{F as q}from"./index-4da2c942.js";/* empty css              */import"./index-1eb925c0.js";import{D as ye}from"./index-38e46845.js";import{b as Ve,a as ke,T as ge}from"./index-5871a115.js";const[$e,$,Ce]=ae("cascader"),be={title:String,options:re(),closeable:E,swipeable:E,closeIcon:ie("cross"),showHeader:E,modelValue:ce,fieldNames:Object,placeholder:String,activeColor:String};var we=C({name:$e,props:be,emits:["close","change","finish","clickTab","update:modelValue"],setup(e,{slots:t,emit:c}){const n=w([]),r=w(0),[_,a]=Ve(),{text:u,value:o,children:l}=ne({text:"text",value:"value",children:"children"},e.fieldNames),k=(s,i)=>{for(const m of s){if(m[o]===i)return[m];if(m[l]){const d=k(m[l],i);if(d)return[m,...d]}}},v=()=>{const{options:s,modelValue:i}=e;if(i!==void 0){const m=k(s,i);if(m){let d=s;n.value=m.map(y=>{const N={options:d,selected:y},b=d.find(I=>I[o]===y[o]);return b&&(d=b[l]),N}),d&&n.value.push({options:d,selected:null}),z(()=>{r.value=n.value.length-1});return}}n.value=[{options:s,selected:null}]},g=(s,i)=>{if(s.disabled)return;if(n.value[i].selected=s,n.value.length>i+1&&(n.value=n.value.slice(0,i+1)),s[l]){const y={options:s[l],selected:null};n.value[i+1]?n.value[i+1]=y:n.value.push(y),z(()=>{r.value++})}const m=n.value.map(y=>y.selected).filter(Boolean);c("update:modelValue",s[o]);const d={value:s[o],tabIndex:i,selectedOptions:m};c("change",d),s[l]||c("finish",d)},F=()=>c("close"),B=({name:s,title:i})=>c("clickTab",s,i),x=()=>e.showHeader?h("div",{class:$("header")},[h("h2",{class:$("title")},[t.title?t.title():e.title]),e.closeable?h(j,{name:e.closeIcon,class:[$("close-icon"),ue],onClick:F},null):null]):null,ee=(s,i,m)=>{const{disabled:d}=s,y=!!(i&&s[o]===i[o]),N=s.color||(y?e.activeColor:void 0),b=t.option?t.option({option:s,selected:y}):h("span",null,[s[u]]);return h("li",{ref:y?a(m):void 0,role:"menuitemradio",class:[$("option",{selected:y,disabled:d}),s.className],style:{color:N},tabindex:d?void 0:y?0:-1,"aria-checked":y,"aria-disabled":d||void 0,onClick:()=>g(s,m)},[b,y?h(j,{name:"success",class:$("selected-icon")},null):null])},te=(s,i,m)=>h("ul",{role:"menu",class:$("options")},[s.map(d=>ee(d,i,m))]),oe=(s,i)=>{const{options:m,selected:d}=s,y=e.placeholder||Ce("select"),N=d?d[u]:y;return h(ge,{title:N,titleClass:$("tab",{unselected:!d})},{default:()=>{var b,I;return[(b=t["options-top"])==null?void 0:b.call(t,{tabIndex:i}),te(m,d,i),(I=t["options-bottom"])==null?void 0:I.call(t,{tabIndex:i})]}})},le=()=>h(ke,{active:r.value,"onUpdate:active":s=>r.value=s,shrink:!0,animated:!0,class:$("tabs"),color:e.activeColor,swipeable:e.swipeable,onClickTab:B},{default:()=>[n.value.map(oe)]}),se=s=>{const i=s.parentElement;i&&(i.scrollTop=s.offsetTop-(i.offsetHeight-s.offsetHeight)/2)};return v(),A(r,s=>{const i=_.value[s];i&&se(i)}),A(()=>e.options,v,{deep:!0}),A(()=>e.modelValue,s=>{s!==void 0&&n.value.map(m=>{var d;return(d=m.selected)==null?void 0:d[o]}).includes(s)||v()}),()=>h("div",{class:$()},[x(),le()])}});const Se=de(we);const Fe=C({props:{modelValue:{type:[Array,String,Number,Boolean,Object],default:""},title:{type:String,default:""},name:{type:String,default:""},options:{type:Array,default:()=>[]},columnNum:{type:[Number,String],default:3},gutter:{type:[Number,String],default:10}},emits:["update:modelValue"],setup(e,{emit:t}){const c={flexBasis:`${1/e.columnNum*100}%`,paddingRight:W(e.gutter)},n=o=>t("update:modelValue",o),r=({value:o,checked:l})=>{n(l?o:"")},_=o=>{u(o)},a=o=>e.modelValue===o.value,u=o=>{o.checked=!a(o),r(o)};return{itemStyle:c,isChecked:a,onClick:_}}}),Ne={class:"custom-radio"},Pe={class:"radio-group"},Te=["onClick"],De={class:"radio-item__text"};function Be(e,t,c,n,r,_){return p(),f("div",Ne,[V("ul",Pe,[(p(!0),f(O,null,R(e.options,(a,u)=>(p(),f("li",{key:a.value,class:"radio-item",style:K({...e.itemStyle,marginTop:u>=+e.columnNum?10/37.5+"rem":0})},[V("div",{class:M(["radio-item__content","st-line-1",{"is-selected":e.isChecked(a)}]),onClick:P(o=>e.onClick(a),["stop"])},[V("div",De,D(a.label),1)],10,Te)],4))),128))])])}const Ie=S(Fe,[["render",Be],["__scopeId","data-v-5ce800a6"]]);const Ae=C({name:"CheckboxField",props:{modelValue:{type:[Array,String,Number,Boolean,Object],default:""},name:{type:String,default:""},title:{type:String,default:""},shape:{type:String,default:"square"},disabled:Boolean,checked:Boolean,checkAll:Boolean,options:{type:Array,default:()=>[]},columnNum:{type:[Number,String],default:3},gutter:{type:[Number,String],default:10}},emits:["update:modelValue"],setup(e,{emit:t}){const c={flexBasis:`${1/e.columnNum*100}%`,paddingRight:W(e.gutter)},n=U(()=>{const{checkAll:l,options:k}=e;let v=k;return l&&(v=[{label:"全部",value:"-1"},...v]),v}),r=l=>t("update:modelValue",l),_=l=>{u(l)},a=l=>e.modelValue.indexOf(l.value)!==-1,u=l=>{l.checked=!a(l),o(l)},o=({value:l,checked:k,disabled:v})=>{const{modelValue:g}=e,F=[...g.slice()];if(k)F.push(l);else{const B=F.indexOf(l);B!==-1&&F.splice(B,1)}r(F)};return A(()=>e.modelValue,l=>r(l)),{checkboxs:n,itemStyle:c,isChecked:a,onClick:_}}}),Oe={class:"custom-checkbox"},Re={class:"checkbox-group"},Ue=["onClick"],Ee={class:"checkbox-item__text"};function He(e,t,c,n,r,_){return p(),f("div",Oe,[V("ul",Re,[(p(!0),f(O,null,R(e.checkboxs,(a,u)=>(p(),f("li",{key:a.value,class:"checkbox-item",style:K({...e.itemStyle,marginTop:u>=+e.columnNum?10/37.5+"rem":0})},[V("div",{class:M(["checkbox-item__content","st-line-1",{"is-selected":e.isChecked(a)}]),onClick:P(o=>e.onClick(a),["stop"])},[V("div",Ee,D(a.label),1)],10,Ue)],4))),128))])])}const je=S(Ae,[["render",He],["__scopeId","data-v-85ed6b9c"]]);const Ke=C({props:{modelValue:{type:[Array,String,Number,Boolean,Object],default:""},name:{type:String,default:""},options:{type:Array,default:()=>[]},columnNum:{type:[Number,String],default:1},gutter:{type:[Number,String],default:10}},emits:["update:modelValue"],setup(e,{emit:t}){return{itemStyle:{flexBasis:`${1/e.columnNum*100}%`},onChange:r=>{t("update:modelValue",r.value)}}}}),Me={class:"custom-cell"},qe={class:"cell-group"},ze=["onClick"],Ge={class:"cell-item__text"};function Le(e,t,c,n,r,_){return p(),f("div",Me,[V("ul",qe,[(p(!0),f(O,null,R(e.options,(a,u)=>(p(),f("li",{key:a.value,class:"cell-item",style:K({...e.itemStyle,marginTop:u>=+e.columnNum?10/37.5+"rem":0})},[V("div",{class:M(["cell-item__content",{"is-selected":e.modelValue==a.value}]),onClick:P(o=>e.onChange(a),["stop"])},[V("div",Ge,D(a.label),1)],10,ze)],4))),128))])])}const Qe=S(Ke,[["render",Le],["__scopeId","data-v-4b0460a0"]]);const Ye=C({props:["modelValue"],emits:["update:modelValue"],setup(e,{emit:t}){return{inputValue:U({get:()=>e.modelValue,set:n=>{t("update:modelValue",n)}})}}}),Je={class:"custom-input"};function We(e,t,c,n,r,_){const a=q;return p(),f("div",Je,[h(a,T({modelValue:e.inputValue,"onUpdate:modelValue":t[0]||(t[0]=u=>e.inputValue=u),modelModifiers:{trim:!0},autocomplete:"off",clearable:""},e.$attrs),null,16,["modelValue"])])}const Xe=S(Ye,[["render",We],["__scopeId","data-v-585ff044"]]);const Q=new Date().getFullYear(),Y=new Date().getMonth()+1,J=new Date().getDay(),Ze=C({props:{modelValue:{type:[Array,String],default:""},separator:{type:String,default:"-"}},emits:["update:modelValue"],setup(e,{emit:t}){const c=U({get:()=>e.modelValue,set:o=>{t("update:modelValue",o)}}),n=w([Q,Y,J]),r=w(!1),_=document.querySelector(".form-wrapper");return{inputValue:c,currentDate:n,showPicker:r,teleport:_,onConfirm:({selectedValues:o})=>{const l=o.join(e.separator);t("update:modelValue",l),r.value=!1},onPickDate:()=>{n.value=c.value?c.value.split(e.separator):[Q,Y,J],r.value=!0}}}}),xe={class:"custom-date-picker"};function et(e,t,c,n,r,_){const a=q,u=ye,o=Z;return p(),f("div",xe,[h(a,T({modelValue:e.inputValue,"onUpdate:modelValue":t[0]||(t[0]=l=>e.inputValue=l),readonly:!0,clearable:"",placeholder:"点击选择"},e.$attrs,{onClick:e.onPickDate}),null,16,["modelValue","onClick"]),h(o,{show:e.showPicker,"onUpdate:show":t[3]||(t[3]=l=>e.showPicker=l),position:"bottom",teleport:e.teleport,overlay:!0},{default:X(()=>[h(u,{modelValue:e.currentDate,"onUpdate:modelValue":t[1]||(t[1]=l=>e.currentDate=l),title:"选择时间",onConfirm:e.onConfirm,onCancel:t[2]||(t[2]=l=>e.showPicker=!1)},null,8,["modelValue","onConfirm"])]),_:1},8,["show","teleport"])])}const tt=S(Ze,[["render",et],["__scopeId","data-v-f98f60ec"]]);const ot=C({props:["modelValue"],emits:["update:modelValue"],setup(e,{emit:t,attrs:c}){const n=U({get:()=>e.modelValue,set:o=>{t("update:modelValue",o)}}),r=w(!1),_=w(""),a=document.querySelector(".form-wrapper");return{inputValue:n,cascaderValue:_,showPicker:r,teleport:a,onFinish:({selectedOptions:o})=>{const{text:l,value:k}=c.fieldNames||{text:"label",value:"value",children:"children"},v=o.map(g=>g[l]).join("/");t("update:modelValue",v),r.value=!1}}}}),lt={class:"custom-cascader"};function st(e,t,c,n,r,_){const a=q,u=Se,o=Z;return p(),f("div",lt,[h(a,T({modelValue:e.inputValue,"onUpdate:modelValue":t[0]||(t[0]=l=>e.inputValue=l),readonly:!0},e.$attrs,{onClick:t[1]||(t[1]=l=>e.showPicker=!0)}),null,16,["modelValue"]),h(o,{show:e.showPicker,"onUpdate:show":t[4]||(t[4]=l=>e.showPicker=l),position:"bottom",teleport:e.teleport,overlay:!0},{default:X(()=>[h(u,T({modelValue:e.cascaderValue,"onUpdate:modelValue":t[2]||(t[2]=l=>e.cascaderValue=l),title:"请选择所在地区"},e.$attrs,{onClose:t[3]||(t[3]=l=>e.showPicker=!1),onFinish:e.onFinish}),null,16,["modelValue","onFinish"])]),_:1},8,["show","teleport"])])}const at=S(ot,[["render",st],["__scopeId","data-v-727503ca"]]);const nt=C({name:"FilterSearch",components:{InputField:Xe,RadioField:Ie,CheckboxField:je,DateField:tt,CellField:Qe,CascaderField:at},props:{showHeader:Boolean,formOptions:{type:Object,default:()=>({"label-align":"top","label-width":"6.2em","input-align":"left"})},formItems:{type:Array,default:()=>[]}},emits:["close","confirm","reset"],setup(e,{emit:t}){const c=o=>{const l={},k=v=>{let g="";return pe(v.value)?[].includes(v.type)?g=[]:g="":g=v.value,g};return e.formItems.forEach(v=>{v.name&&(l[v.name]=k(v))}),{...l}},n={"label-align":"top","label-width":"6.2em","input-align":"left",...e.formOptions},r=w(c()),_=()=>{a(!1),t("close")},a=async(o=!0)=>{r.value=c(),t("reset",r.value),o&&u()},u=()=>{console.log("onConfirm",r.value),t("confirm",r.value)};return{formProps:n,formValues:r,onClose:_,onReset:a,onConfirm:u}}}),rt=e=>(ve("data-v-292ef53a"),e=e(),he(),e),it={class:"form form-wrapper"},ct={key:0,class:"form__header"},ut=rt(()=>V("div",{class:"form__header-title"},D("数据筛选"),-1)),dt={class:"form__body"},pt={class:"filter__item-title"},mt={key:0,class:"tips"},ft={class:"form__footer van-safe-area-bottom"};function _t(e,t,c,n,r,_){const a=j,u=me("waves");return p(),f("div",it,[e.showHeader?(p(),f("div",ct,[ut,h(a,{name:"cross",class:"form__header-close",onClick:e.onClose},null,8,["onClick"])])):G("",!0),V("div",dt,[(p(!0),f(O,null,R(e.formItems,(o,l)=>(p(),f("div",{key:o.name+l,class:"filter__item"},[V("div",pt,[H(D(o.title)+" ",1),["CheckboxField"].includes(o.type)?(p(),f("span",mt,"(可多选)")):G("",!0)]),(p(),fe(_e(o.type),T({modelValue:e.formValues[o.name],"onUpdate:modelValue":k=>e.formValues[o.name]=k,title:o.title},o.attrs),null,16,["modelValue","onUpdate:modelValue","title"]))]))),128))]),V("div",ft,[L((p(),f("div",{class:"filter__reset",onClick:t[0]||(t[0]=P((...o)=>e.onReset&&e.onReset(...o),["stop"]))},[H("重置")])),[[u]]),L((p(),f("div",{class:"filter__confirm",onClick:t[1]||(t[1]=P((...o)=>e.onConfirm&&e.onConfirm(...o),["stop"]))},[H("完成")])),[[u]])])])}const bt=S(nt,[["render",_t],["__scopeId","data-v-292ef53a"]]);export{bt as _};
