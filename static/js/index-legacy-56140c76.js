!function(){function t(t,a){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var n,i,r,u,o=[],l=!0,c=!1;try{if(r=(a=a.call(t)).next,0===e){if(Object(a)!==a)return;l=!1}else for(;!(l=(n=r.call(a)).done)&&(o.push(n.value),o.length!==e);l=!0);}catch(v){c=!0,i=v}finally{try{if(!l&&null!=a.return&&(u=a.return(),Object(u)!==u))return}finally{if(c)throw i}}return o}}(t,a)||function(t,a){if(!t)return;if("string"==typeof t)return e(t,a);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,a)}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}System.register(["./index-legacy-c57e2de4.js"],(function(e,a){"use strict";var n,i,r,u,o,l,c,v,f,s,h,d,p,g,w,m,y,b,x,S,C,M,O,j,z,A,I,T,B;return{setters:[function(t){n=t.a1,i=t.d,r=t.a,u=t.r,o=t.cw,l=t.c5,c=t.c,v=t.cj,f=t.w,s=t.cB,h=t.cC,d=t.d2,p=t.o,g=t.bl,w=t.c$,m=t.bo,y=t.at,b=t.cd,x=t.p,S=t.ax,C=t.a3,M=t.av,O=t.cm,j=t.c_,z=t.B,A=t.cx,I=t.ay,T=t.a7,B=t.a5}],execute:function(){var a=t(n("swipe"),2),E=a[0],X=a[1],Y={loop:S,width:C,height:C,vertical:Boolean,autoplay:M(0),duration:M(500),touchable:S,lazyRender:Boolean,initialSwipe:M(0),indicatorColor:String,showIndicators:S,stopPropagation:S},k=Symbol(E),D=i({name:E,props:Y,emits:["change","dragStart","dragEnd"],setup:function(t,e){var a,n,i=e.emit,S=e.slots,C=r(),M=r(),T=u({rect:null,width:0,height:0,offset:0,active:0,swiping:!1}),B=!1,E=o(),Y=l(k),D=Y.children,P=Y.linkChildren,R=c((function(){return D.length})),$=c((function(){return T[t.vertical?"height":"width"]})),H=c((function(){return t.vertical?E.deltaY.value:E.deltaX.value})),U=c((function(){return T.rect?(t.vertical?T.rect.height:T.rect.width)-$.value*R.value:0})),W=c((function(){return $.value?Math.ceil(Math.abs(U.value)/$.value):R.value})),_=c((function(){return R.value*$.value})),q=c((function(){return(T.active+R.value)%R.value})),F=c((function(){var e=t.vertical?"vertical":"horizontal";return E.direction.value===e})),G=c((function(){var e={transitionDuration:"".concat(T.swiping?0:t.duration,"ms"),transform:"translate".concat(t.vertical?"Y":"X","(").concat(T.offset,"px)")};if($.value){var a=t.vertical?"height":"width",n=t.vertical?"width":"height";e[a]="".concat(_.value,"px"),e[n]=t[n]?"".concat(t[n],"px"):""}return e})),J=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e*$.value;t.loop||(n=Math.min(n,-U.value));var i=a-n;return t.loop||(i=I(i,U.value,0)),i},K=function(e){var a=e.pace,n=void 0===a?0:a,r=e.offset,u=void 0===r?0:r,o=e.emitChange;if(!(R.value<=1)){var l=T.active,c=function(e){var a=T.active;return e?t.loop?I(a+e,-1,R.value):I(a+e,0,W.value):a}(n),v=J(c,u);if(t.loop){if(D[0]&&v!==U.value){var f=v<U.value;D[0].setOffset(f?_.value:0)}if(D[R.value-1]&&0!==v){var s=v>0;D[R.value-1].setOffset(s?-_.value:0)}}T.active=c,T.offset=v,o&&c!==l&&i("change",q.value)}},L=function(){T.swiping=!0,T.active<=-1?K({pace:R.value}):T.active>=R.value&&K({pace:-R.value})},N=function(){L(),E.reset(),O((function(){T.swiping=!1,K({pace:1,emitChange:!0})}))},Q=function(){return clearTimeout(a)},V=function e(){Q(),+t.autoplay>0&&R.value>1&&(a=setTimeout((function(){N(),e()}),+t.autoplay))},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:+t.initialSwipe;if(C.value){var a=function(){var a,n;if(!j(C)){var i={width:C.value.offsetWidth,height:C.value.offsetHeight};T.rect=i,T.width=+(null!=(a=t.width)?a:i.width),T.height=+(null!=(n=t.height)?n:i.height)}R.value&&-1===(e=Math.min(R.value-1,e))&&(e=R.value-1),T.active=e,T.swiping=!0,T.offset=J(e),D.forEach((function(t){t.setOffset(0)})),V()};j(C)?z().then(a):a()}},tt=function(){return Z(T.active)},et=function(e){!t.touchable||e.touches.length>1||(E.start(e),B=!1,n=Date.now(),Q(),L())},at=function(){if(t.touchable&&T.swiping){var e=Date.now()-n,a=H.value/e;if((Math.abs(a)>.25||Math.abs(H.value)>$.value/2)&&F.value){var r=t.vertical?E.offsetY.value:E.offsetX.value,u=0;u=t.loop?r>0?H.value>0?-1:1:0:-Math[H.value>0?"ceil":"floor"](H.value/$.value),K({pace:u,emitChange:!0})}else H.value&&K({pace:0});B=!1,T.swiping=!1,i("dragEnd",{index:q.value}),V()}},nt=function(e,a){var n=a===q.value,i=n?{backgroundColor:t.indicatorColor}:void 0;return x("i",{style:i,class:X("indicator",{active:n})},null)};return v({prev:function(){L(),E.reset(),O((function(){T.swiping=!1,K({pace:-1,emitChange:!0})}))},next:N,state:T,resize:tt,swipeTo:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};L(),E.reset(),O((function(){var n;n=t.loop&&e===R.value?0===T.active?0:e:e%R.value,a.immediate?O((function(){T.swiping=!1})):T.swiping=!1,K({pace:n-T.active,emitChange:!0})}))}}),P({size:$,props:t,count:R,activeIndicator:q}),f((function(){return t.initialSwipe}),(function(t){return Z(+t)})),f(R,(function(){return Z(T.active)})),f((function(){return t.autoplay}),V),f([s,h,function(){return t.width},function(){return t.height}],tt),f(d(),(function(t){"visible"===t?V():Q()})),p(Z),g((function(){return Z(T.active)})),w((function(){return Z(T.active)})),m(Q),y(Q),b("touchmove",(function(e){t.touchable&&T.swiping&&(E.move(e),F.value&&(!t.loop&&(0===T.active&&H.value>0||T.active===R.value-1&&H.value<0)||(A(e,t.stopPropagation),K({offset:H.value}),B||(i("dragStart",{index:q.value}),B=!0))))}),{target:M}),function(){var e;return x("div",{ref:C,class:X()},[x("div",{ref:M,style:G.value,class:X("track",{vertical:t.vertical}),onTouchstartPassive:et,onTouchend:at,onTouchcancel:at},[null==(e=S.default)?void 0:e.call(S)]),S.indicator?S.indicator({active:q.value,total:R.value}):t.showIndicators&&R.value>1?x("div",{class:X("indicators",{vertical:t.vertical})},[Array(R.value).fill("").map(nt)]):void 0])}}}),P=(e("a",T(D)),t(n("swipe-item"),2)),R=P[0],$=P[1],H=i({name:R,setup:function(t,e){var a,n=e.slots,i=u({offset:0,inited:!1,mounted:!1}),r=B(k),o=r.parent,l=r.index;if(o){var f=c((function(){var t={},e=o.props.vertical;return o.size.value&&(t[e?"height":"width"]="".concat(o.size.value,"px")),i.offset&&(t.transform="translate".concat(e?"Y":"X","(").concat(i.offset,"px)")),t})),s=c((function(){var t=o.props,e=t.loop;if(!t.lazyRender||a)return!0;if(!i.mounted)return!1;var n=o.activeIndicator.value,r=o.count.value-1,u=0===n&&e?r:n-1,c=n===r&&e?0:n+1;return a=l.value===n||l.value===u||l.value===c}));return p((function(){z((function(){i.mounted=!0}))})),v({setOffset:function(t){i.offset=t}}),function(){var t;return x("div",{class:$(),style:f.value},[s.value?null==(t=n.default)?void 0:t.call(n):null])}}}});e("S",T(H))}}}))}();