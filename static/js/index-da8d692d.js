import{F as g,C as f}from"./index-80e028ef.js";import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{d as i,o as v,f as c,k as l,O as h,P as m,x as n,p as r}from"./index-2d318566.js";import{C}from"./index-434b4cca.js";import"./use-route-e384b3a3.js";const x=e=>(h("data-v-27c75e35"),e=e(),m(),e),w={className:"line-chart-wrapper st-bg-white"},$=x(()=>n("canvas",{id:"lineChart"},null,-1)),b=[$],y=i({name:"LineChart"}),S=Object.assign(y,{props:{height:{type:[Number,String],default:260}},setup(e){const s=[{date:"2017-06-05",value:116},{date:"2017-06-06",value:129},{date:"2017-06-07",value:135},{date:"2017-06-08",value:86},{date:"2017-06-09",value:73},{date:"2017-06-10",value:85},{date:"2017-06-11",value:73},{date:"2017-06-12",value:68},{date:"2017-06-13",value:92},{date:"2017-06-14",value:130},{date:"2017-06-15",value:245},{date:"2017-06-16",value:139},{date:"2017-06-17",value:115},{date:"2017-06-18",value:111},{date:"2017-06-19",value:309},{date:"2017-06-20",value:206},{date:"2017-06-21",value:137},{date:"2017-06-22",value:128},{date:"2017-06-23",value:85},{date:"2017-06-24",value:94},{date:"2017-06-25",value:71},{date:"2017-06-26",value:106},{date:"2017-06-27",value:84},{date:"2017-06-28",value:93},{date:"2017-06-29",value:85},{date:"2017-06-30",value:73},{date:"2017-07-01",value:83},{date:"2017-07-02",value:125},{date:"2017-07-03",value:107},{date:"2017-07-04",value:82},{date:"2017-07-05",value:44},{date:"2017-07-06",value:72},{date:"2017-07-07",value:106},{date:"2017-07-08",value:107},{date:"2017-07-09",value:66},{date:"2017-07-10",value:91},{date:"2017-07-11",value:92},{date:"2017-07-12",value:113},{date:"2017-07-13",value:107},{date:"2017-07-14",value:131},{date:"2017-07-15",value:111},{date:"2017-07-16",value:64},{date:"2017-07-17",value:69},{date:"2017-07-18",value:88},{date:"2017-07-19",value:77},{date:"2017-07-20",value:83},{date:"2017-07-21",value:111},{date:"2017-07-22",value:57},{date:"2017-07-23",value:55},{date:"2017-07-24",value:60}];return v(()=>{const a=new g.Chart({id:"lineChart",pixelRatio:window.devicePixelRatio});a.source(s,{value:{tickCount:5,min:0},date:{type:"timeCat",range:[0,1],tickCount:3}}),a.tooltip({custom:!0,showXTip:!0,showYTip:!0,snap:!0,crosshairsType:"xy",crosshairsStyle:{lineDash:[2]}}),a.axis("date",{label:function(d,o,_){const u={};return o===0?u.textAlign="left":o===_-1&&(u.textAlign="right"),u}}),a.line().position("date*value"),a.render()}),(a,t)=>(c(),l("div",w,b))}}),F=p(S,[["__scopeId","data-v-27c75e35"]]);const I=e=>(h("data-v-60c4a6d3"),e=e(),m(),e),k={class:"pie-chart-wrapper st-bg-white"},B=I(()=>n("canvas",{id:"pieChart"},null,-1)),O=[B],P=i({name:"PieChart"}),R=Object.assign(P,{setup(e){const s={芳华:"40%",妖猫传:"20%",机器之血:"18%",心理罪:"15%",寻梦环游记:"5%",其他:"2%"},a=[{name:"芳华",percent:.4,a:"1"},{name:"妖猫传",percent:.2,a:"1"},{name:"机器之血",percent:.18,a:"1"},{name:"心理罪",percent:.15,a:"1"},{name:"寻梦环游记",percent:.05,a:"1"},{name:"其他",percent:.02,a:"1"}];return v(()=>{const t=new f({id:"pieChart",pixelRatio:window.devicePixelRatio});t.source(a,{percent:{formatter:function(o){return o*100+"%"}}}),t.legend({position:"right",itemFormatter:function(o){return o+"  "+s[o]}}),t.tooltip(!1),t.coord("polar",{transposed:!0,radius:.85}),t.axis(!1),t.interval().position("a*percent").color("name",["#1890FF","#13C2C2","#2FC25B","#FACC14","#F04864","#8543E0"]).adjust("stack").style({lineWidth:1,stroke:"#fff",lineJoin:"round",lineCap:"round"}).animate({appear:{duration:1200,easing:"bounceOut"}}),t.render()}),(t,d)=>(c(),l("div",k,O))}}),j=p(R,[["__scopeId","data-v-60c4a6d3"]]);const N=e=>(h("data-v-96a1954e"),e=e(),m(),e),A={class:"bar-chart-wrapper st-bg-white"},L=N(()=>n("canvas",{id:"myChart"},null,-1)),T=[L],E=i({name:"BarChart"}),V=Object.assign(E,{props:{height:{type:[Number,String],default:260}},setup(e){const s=[{genre:"Sports",sold:275},{genre:"Strategy",sold:115},{genre:"Action",sold:120},{genre:"Shooter",sold:350},{genre:"Other",sold:150}];return v(()=>{const a=new g.Chart({id:"myChart",pixelRatio:window.devicePixelRatio});a.source(s),a.interval().position("genre*sold").color("genre"),a.render()}),(a,t)=>(c(),l("div",A,T))}}),D=p(V,[["__scopeId","data-v-96a1954e"]]),J={class:"page-wrapper"},M={class:"st-margin-top-10"},W={class:""},X={class:"st-margin-top-10"},Y={class:"st-margin-top-10"},q=i({name:"Charts"}),U=Object.assign(q,{setup(e){return(s,a)=>{const t=C,d=D,o=j,_=F;return c(),l("div",J,[n("div",M,[n("div",W,[r(t,{title:"柱状图",border:!1}),r(d)]),n("div",X,[r(t,{title:"饼图",border:!1}),r(o)]),n("div",Y,[r(t,{title:"折线图",border:!1}),r(_)])])])}}});export{U as default};