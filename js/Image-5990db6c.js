import{f as e,g as t,I as r}from"./vant-182c6d73.js";import{R as a}from"./index-b8220570.js";import{_ as i}from"./plugin-vue_export-helper-893979e1.js";import{m as s,aI as n,ak as o,l,b7 as c,t as u}from"./@vue-0da0c2e3.js";const d=s({props:{width:{type:[Number,String],default:100},height:{type:[Number,String],default:100},radius:{type:[Number,String],default:2},fit:{type:String,default:"cover"},src:{type:String,default:"https://img.yzcdn.cn/vant/cat.jpeg"},enablePreview:{type:Boolean,default:!0}},setup(t){return{RootValue:a,onclickImg:r=>{return a=this,i=null,s=function*(){t.enablePreview&&(yield e({images:[r],closeable:!0}))},new Promise(((e,t)=>{var r=e=>{try{o(s.next(e))}catch(r){t(r)}},n=e=>{try{o(s.throw(e))}catch(r){t(r)}},o=t=>t.done?e(t.value):Promise.resolve(t.value).then(r,n);o((s=s.apply(a,i)).next())}));var a,i,s}}}}),p={class:"image-wrapper st-flex"};var m=i(d,[["render",function(e,a,i,s,d,m){const f=t,g=r;return n(),o("div",p,[l(g,u(e.$attrs,{fit:e.fit,height:e.height/e.RootValue+"rem",radius:e.radius,src:e.src,width:e.width/e.RootValue+"rem",class:"image-box",onClick:a[0]||(a[0]=t=>e.onclickImg(e.src))}),{loading:c((()=>[l(f,{size:"24",type:"spinner"})])),_:1},16,["fit","height","radius","src","width"])])}],["__scopeId","data-v-0f24bdfc"]]);export{m as _};
