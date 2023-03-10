import{D as t}from"./vant-6296a122.js";import{f as e}from"./datetime-1e01657d.js";import{m as a,a as m,c as n,_ as o,aI as r,ai as l,t as i,u,f as s}from"./@vue-0da0c2e3.js";const c=a({name:"DatePicker"}),d=Object.assign(c,{props:{value:{type:[Date,String],default:()=>new Date},columnsType:{type:Array,default:()=>["year","month","day"]},format:{type:String,default:""},title:{type:String,default:""},notFormat:{type:Boolean,default:!1},minDate:{type:[Date],default:()=>new Date((new Date).getFullYear()-3,0,1)},maxDate:{type:[Date],default:()=>new Date((new Date).getFullYear()-3,11,31)}},emits:["input","change","confirm","cancel"],setup(a,{emit:c}){const d=a,f=new Map([["datetime",{title:"选择完整时间",format:"YYYY-MM-DD HH:mm"}],["date",{title:"选择年月日",format:"YYYY-MM-DD"}],["time",{title:"选择时间",format:"HH:mm"}],["year-month",{title:"选择年月",format:"YYYY-MM"}],["month-day",{title:"选择月日",format:"MM-DD"}],["datehour",{title:"选择年月日小时",format:"YYYY-MM-DD HH"}]]),D=m({currentDate:n({get:()=>d.value,set(t){c("input",t)}}),getTitle:n((()=>{var t;return d.title||(null==(t=f.get(d.columnsType))?void 0:t.title)||"请选择"})),getFormat:n((()=>{var t;return d.format||(null==(t=f.get(d.columnsType))?void 0:t.format)||"YYYY-MM-DD"}))}),{currentDate:p,getTitle:Y,getFormat:y}=o(D),g=(t,e)=>("year"===t&&(e.text+="年"),"month"===t&&(e.text+="月"),"day"===t&&(e.text+="日"),e),M=t=>{const a=t.selectedValues.join("-");let m="";m=d.notFormat||"time"===d.columnsType?a:e(a,D.getFormat),c("change",m),c("confirm",m),h()},h=()=>{c("cancel",!1)};return(e,m)=>{const n=t;return r(),l(n,i({modelValue:u(p),"onUpdate:modelValue":m[0]||(m[0]=t=>s(p)?p.value=t:null),"columns-type":a.columnsType,title:u(Y),"min-date":a.minDate,"max-date":a.maxDate,format:u(y),formatter:g,"item-height":44},e.$attrs,{onConfirm:M,onCancel:h}),null,16,["modelValue","columns-type","title","min-date","max-date","format"])}}});export{d as _};
