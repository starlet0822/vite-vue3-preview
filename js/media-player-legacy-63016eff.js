!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";[data-v-1a38fea3]:export{themeColor:var(--van-blue)}.audio-player-wrapper[data-v-1a38fea3]{width:100%}[data-v-47948b2f]:export{themeColor:var(--van-blue)}.video-player-wrapper .xgplayer-skin-default.xgplayer-rotate-fullscreen[data-v-47948b2f]{z-index:999}[data-v-84875c90]:export{themeColor:var(--van-blue)}\n',document.head.appendChild(e),System.register(["./vant-legacy-2f83c4d8.js","./aplayer-legacy-cde55e13.js","./@vue-legacy-703c3bcb.js","./xgplayer-legacy-9d834c72.js","./plugin-vue_export-helper-legacy-37b3dbd0.js","./index-legacy-e0c41f67.js","./@vant-legacy-bfdd957e.js","./@antv-legacy-95b7be67.js","./tslib-legacy-238f19fa.js","./fecha-legacy-893f5c8d.js","./vue-router-legacy-c4e0954e.js"],(function(e){"use strict";var t,a,n,r,l,d,o,i,c,u,s,p,f,y;return{setters:[function(e){t=e.e,a=e.B},function(){},function(e){n=e.l,r=e.a,l=e.t,d=e.b,o=e.s,i=e.B,c=e.H,u=e.D,s=e.F},function(e){p=e.P},function(e){f=e._},function(e){y=e._},function(){},function(){},function(){},function(){},function(){}],execute:function(){n({name:"AudioPlayer"});var v={class:"video-player-wrapper st-bg-white"},g=n({name:"VideoPlayer"}),b=f(Object.assign(g,{props:{width:{type:[Number,String],default:375},height:{type:[Number,String],default:220},url:{type:String,default:"//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4"},poster:{type:String,default:"//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg"}},setup:function(e){var t=e,a=r({videoRef:null}),n=l(a).videoRef;return d((function(){new p({id:"video-container",url:t.url,poster:t.poster,width:t.width,height:t.height,playsinline:!0,fluid:!0,download:!0,rotateFullscreen:!0,enableVideoDbltouch:!0,playbackRate:[.5,.75,1,1.5,2],defaultPlaybackRate:1,"x5-video-player-type":"h5","x5-video-player-fullscreen":!0})})),function(e,t){return o(),i("div",v,[c("div",{id:"video-container",ref_key:"videoRef",ref:n},null,512)])}}}),[["__scopeId","data-v-47948b2f"]]),h={class:"layout__page"},m={class:"layout__body"};e("default",f({},[["render",function(e,n){var r=y,l=t,d=b,p=a;return o(),i("div",h,[u(r),c("div",m,[u(l,{title:"视频播放",border:!1}),u(d,{class:"st-padding-10"}),s("",!0)]),u(p)])}],["__scopeId","data-v-84875c90"]]))}}}))}();