!function(){function t(t,a){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var n,i,r,u,o=[],l=!0,c=!1;try{if(r=(a=a.call(t)).next,0===e){if(Object(a)!==a)return;l=!1}else for(;!(l=(n=r.call(a)).done)&&(o.push(n.value),o.length!==e);l=!0);}catch(v){c=!0,i=v}finally{try{if(!l&&null!=a.return&&(u=a.return(),Object(u)!==u))return}finally{if(c)throw i}}return o}}(t,a)||function(t,a){if(!t)return;if("string"==typeof t)return e(t,a);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,a)}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}System.register(["./index-legacy-9954e17f.js"],(function(e,a){"use strict";var n,i,r,u,o,l,c,v,f,s,h,d,p,g,w,m,y,b,S,x,C,z,M,O,A,I,T,j,E;return{setters:[function(t){n=t.a1,i=t.d,r=t.a,u=t.r,o=t.cy,l=t.c5,c=t.c,v=t.cl,f=t.w,s=t.cD,h=t.cE,d=t.d3,p=t.o,g=t.bl,w=t.d0,m=t.bo,y=t.at,b=t.cf,S=t.p,x=t.ax,C=t.a3,z=t.av,M=t.co,O=t.c$,A=t.B,I=t.cz,T=t.ay,j=t.a7,E=t.a5}],execute:function(){var a=t(n("swipe"),2),D=a[0],X=a[1],Y={loop:x,width:C,height:C,vertical:Boolean,autoplay:z(0),duration:z(500),touchable:x,lazyRender:Boolean,initialSwipe:z(0),indicatorColor:String,showIndicators:x,stopPropagation:x},k=Symbol(D),B=i({name:D,props:Y,emits:["change","dragStart","dragEnd"],setup:function(t,e){var a,n,i=e.emit,x=e.slots,C=r(),z=r(),j=u({rect:null,width:0,height:0,offset:0,active:0,swiping:!1}),E=!1,D=o(),Y=l(k),B=Y.children,P=Y.linkChildren,R=c((function(){return B.length})),$=c((function(){return j[t.vertical?"height":"width"]})),H=c((function(){return t.vertical?D.deltaY.value:D.deltaX.value})),U=c((function(){return j.rect?(t.vertical?j.rect.height:j.rect.width)-$.value*R.value:0})),W=c((function(){return $.value?Math.ceil(Math.abs(U.value)/$.value):R.value})),q=c((function(){return R.value*$.value})),F=c((function(){return(j.active+R.value)%R.value})),G=c((function(){var e=t.vertical?"vertical":"horizontal";return D.direction.value===e})),J=c((function(){var e={transitionDuration:"".concat(j.swiping?0:t.duration,"ms"),transform:"translate".concat(t.vertical?"Y":"X","(").concat(j.offset,"px)")};if($.value){var a=t.vertical?"height":"width",n=t.vertical?"width":"height";e[a]="".concat(q.value,"px"),e[n]=t[n]?"".concat(t[n],"px"):""}return e})),K=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e*$.value;t.loop||(n=Math.min(n,-U.value));var i=a-n;return t.loop||(i=T(i,U.value,0)),i},L=function(e){var a=e.pace,n=void 0===a?0:a,r=e.offset,u=void 0===r?0:r,o=e.emitChange;if(!(R.value<=1)){var l=j.active,c=function(e){var a=j.active;return e?t.loop?T(a+e,-1,R.value):T(a+e,0,W.value):a}(n),v=K(c,u);if(t.loop){if(B[0]&&v!==U.value){var f=v<U.value;B[0].setOffset(f?q.value:0)}if(B[R.value-1]&&0!==v){var s=v>0;B[R.value-1].setOffset(s?-q.value:0)}}j.active=c,j.offset=v,o&&c!==l&&i("change",F.value)}},N=function(){j.swiping=!0,j.active<=-1?L({pace:R.value}):j.active>=R.value&&L({pace:-R.value})},Q=function(){N(),D.reset(),M((function(){j.swiping=!1,L({pace:1,emitChange:!0})}))},V=function(){return clearTimeout(a)},Z=function e(){V(),+t.autoplay>0&&R.value>1&&(a=setTimeout((function(){Q(),e()}),+t.autoplay))},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:+t.initialSwipe;if(C.value){var a=function(){var a,n;if(!O(C)){var i={width:C.value.offsetWidth,height:C.value.offsetHeight};j.rect=i,j.width=+(null!=(a=t.width)?a:i.width),j.height=+(null!=(n=t.height)?n:i.height)}R.value&&-1===(e=Math.min(R.value-1,e))&&(e=R.value-1),j.active=e,j.swiping=!0,j.offset=K(e),B.forEach((function(t){t.setOffset(0)})),Z()};O(C)?A().then(a):a()}},tt=function(){return _(j.active)},et=function(e){!t.touchable||e.touches.length>1||(D.start(e),E=!1,n=Date.now(),V(),N())},at=function(){if(t.touchable&&j.swiping){var e=Date.now()-n,a=H.value/e;if((Math.abs(a)>.25||Math.abs(H.value)>$.value/2)&&G.value){var r=t.vertical?D.offsetY.value:D.offsetX.value,u=0;u=t.loop?r>0?H.value>0?-1:1:0:-Math[H.value>0?"ceil":"floor"](H.value/$.value),L({pace:u,emitChange:!0})}else H.value&&L({pace:0});E=!1,j.swiping=!1,i("dragEnd",{index:F.value}),Z()}},nt=function(e,a){var n=a===F.value,i=n?{backgroundColor:t.indicatorColor}:void 0;return S("i",{style:i,class:X("indicator",{active:n})},null)};return v({prev:function(){N(),D.reset(),M((function(){j.swiping=!1,L({pace:-1,emitChange:!0})}))},next:Q,state:j,resize:tt,swipeTo:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};N(),D.reset(),M((function(){var n;n=t.loop&&e===R.value?0===j.active?0:e:e%R.value,a.immediate?M((function(){j.swiping=!1})):j.swiping=!1,L({pace:n-j.active,emitChange:!0})}))}}),P({size:$,props:t,count:R,activeIndicator:F}),f((function(){return t.initialSwipe}),(function(t){return _(+t)})),f(R,(function(){return _(j.active)})),f((function(){return t.autoplay}),Z),f([s,h,function(){return t.width},function(){return t.height}],tt),f(d(),(function(t){"visible"===t?Z():V()})),p(_),g((function(){return _(j.active)})),w((function(){return _(j.active)})),m(V),y(V),b("touchmove",(function(e){t.touchable&&j.swiping&&(D.move(e),G.value&&(!t.loop&&(0===j.active&&H.value>0||j.active===R.value-1&&H.value<0)||(I(e,t.stopPropagation),L({offset:H.value}),E||(i("dragStart",{index:F.value}),E=!0))))}),{target:z}),function(){var e;return S("div",{ref:C,class:X()},[S("div",{ref:z,style:J.value,class:X("track",{vertical:t.vertical}),onTouchstartPassive:et,onTouchend:at,onTouchcancel:at},[null==(e=x.default)?void 0:e.call(x)]),x.indicator?x.indicator({active:F.value,total:R.value}):t.showIndicators&&R.value>1?S("div",{class:X("indicators",{vertical:t.vertical})},[Array(R.value).fill("").map(nt)]):void 0])}}}),P=(e("a",j(B)),t(n("swipe-item"),2)),R=P[0],$=P[1],H=i({name:R,setup:function(t,e){var a,n=e.slots,i=u({offset:0,inited:!1,mounted:!1}),r=E(k),o=r.parent,l=r.index;if(o){var f=c((function(){var t={},e=o.props.vertical;return o.size.value&&(t[e?"height":"width"]="".concat(o.size.value,"px")),i.offset&&(t.transform="translate".concat(e?"Y":"X","(").concat(i.offset,"px)")),t})),s=c((function(){var t=o.props,e=t.loop;if(!t.lazyRender||a)return!0;if(!i.mounted)return!1;var n=o.activeIndicator.value,r=o.count.value-1,u=0===n&&e?r:n-1,c=n===r&&e?0:n+1;return a=l.value===n||l.value===u||l.value===c}));return p((function(){A((function(){i.mounted=!0}))})),v({setOffset:function(t){i.offset=t}}),function(){var t;return S("div",{class:$(),style:f.value},[s.value?null==(t=n.default)?void 0:t.call(n):null])}}}});e("S",j(H))}}}))}();
