import{r as e,j as t,k as n,u as a,w as o,c as u}from"./@vue-52de1c01.js";function i(e){return!!t()&&(n(e),!0)}const r="undefined"!=typeof window,l=e=>"number"==typeof e,s=()=>{};function c(e){return e}function v(e){var t;const n=a(e);return null!=(t=null==n?void 0:n.$el)?t:n}const d=r?window:void 0;function p(...e){let t,n,u,r;if("string"==typeof e[0]?([n,u,r]=e,t=d):[t,n,u,r]=e,!t)return s;let l=s;const c=o((()=>a(t)),(e=>{l(),e&&(e.addEventListener(n,u,r),l=()=>{e.removeEventListener(n,u,r),l=s})}),{immediate:!0,flush:"post"}),v=()=>{c(),l()};return i(v),v}function f(t,n,a={}){const{window:o=d,ignore:u}=a;if(!o)return;const i=e(!0),r=[p(o,"click",(e=>{const a=v(t),o=e.composedPath();a&&a!==e.target&&!o.includes(a)&&i.value&&(u&&u.length>0&&u.some((t=>{const n=v(t);return n&&(e.target===n||o.includes(n))}))||n(e))}),{passive:!0,capture:!0}),p(o,"pointerdown",(e=>{const n=v(t);i.value=!!n&&!e.composedPath().includes(n)}),{passive:!0})];return()=>r.forEach((e=>e()))}r&&window.document,r&&window.navigator,r&&window.location;const m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},w="__vueuse_ssr_handlers__";function y(t,n,{window:i=d}={}){const r=e(""),l=u((()=>{var e;return v(n)||(null==(e=null==i?void 0:i.document)?void 0:e.documentElement)}));return o([l,()=>a(t)],(([e,t])=>{e&&i&&(r.value=i.getComputedStyle(e).getPropertyValue(t))}),{immediate:!0}),o(r,(e=>{var n;(null==(n=l.value)?void 0:n.style)&&l.value.style.setProperty(a(t),e)})),r}m[w]=m[w]||{},m[w];var O,g,b=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;function x(e,t,n={}){const a=n,{window:u=d}=a,r=((e,t)=>{var n={};for(var a in e)h.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&b)for(var a of b(e))t.indexOf(a)<0&&I.call(e,a)&&(n[a]=e[a]);return n})(a,["window"]);let l;const s=u&&"ResizeObserver"in u,c=()=>{l&&(l.disconnect(),l=void 0)},p=o((()=>v(e)),(e=>{c(),s&&u&&e&&(l=new u.ResizeObserver(t),l.observe(e,r))}),{immediate:!0,flush:"post"}),f=()=>{c(),p()};return i(f),{isSupported:s,stop:f}}function P(t={}){const{type:n="page",touch:a=!0,resetOnTouchEnds:o=!1,initialValue:u={x:0,y:0},window:i=d,eventFilter:r}=t,l=e(u.x),s=e(u.y),c=e(null),v=e=>{"page"===n?(l.value=e.pageX,s.value=e.pageY):"client"===n&&(l.value=e.clientX,s.value=e.clientY),c.value="mouse"},f=()=>{l.value=u.x,s.value=u.y},m=e=>{if(e.touches.length>0){const t=e.touches[0];"page"===n?(l.value=t.pageX,s.value=t.pageY):"client"===n&&(l.value=t.clientX,s.value=t.clientY),c.value="touch"}},w=e=>void 0===r?v(e):r((()=>v(e)),{}),y=e=>void 0===r?m(e):r((()=>m(e)),{});return i&&(p(i,"mousemove",w,{passive:!0}),p(i,"dragover",w,{passive:!0}),a&&(p(i,"touchstart",y,{passive:!0}),p(i,"touchmove",y,{passive:!0}),o&&p(i,"touchend",f,{passive:!0}))),{x:l,y:s,sourceType:c}}r&&(null==window?void 0:window.navigator)&&(null==(O=null==window?void 0:window.navigator)?void 0:O.platform)&&/iP(ad|hone|od)/.test(null==(g=null==window?void 0:window.navigator)?void 0:g.platform);var E=Object.defineProperty,j=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,C=(e,t,n)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;((e,t)=>{for(var n in t||(t={}))Q.call(t,n)&&C(e,n,t[n]);if(j)for(var n of j(t))S.call(t,n)&&C(e,n,t[n])})({text:""},{top:0,left:0,bottom:0,right:0,height:0,width:0});const T={linear:c,easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};function _([e,t,n,a]){const o=(e,t)=>1-3*t+3*e,u=(e,t)=>3*t-6*e,i=e=>3*e,r=(e,t,n)=>((o(t,n)*e+u(t,n))*e+i(t))*e;return l=>e===t&&n===a?l:r((t=>{let a=t;for(let v=0;v<4;++v){const v=(l=a,3*o(s=e,c=n)*l*l+2*u(s,c)*l+i(s));if(0===v)return a;a-=(r(a,e,n)-t)/v}var l,s,c;return a})(l),t,a)}function k(t,n={}){const{delay:v=0,disabled:p=!1,duration:f=1e3,onFinished:m=s,onStarted:w=s,transition:y=c}=n,O=u((()=>{const e=a(y);return"function"==typeof e?e:_(e)})),g=u((()=>{const e=a(t);return l(e)?e:e.map(a)})),b=u((()=>l(g.value)?[g.value]:g.value)),h=e(b.value.slice(0));let I,x,P,E,j;const{resume:Q,pause:S}=function(t,n={}){const{immediate:a=!0,window:o=d}=n,u=e(!1);function r(){u.value&&o&&(t(),o.requestAnimationFrame(r))}function l(){!u.value&&o&&(u.value=!0,r())}function s(){u.value=!1}return a&&l(),i(s),{isActive:u,pause:s,resume:l}}((()=>{const e=Date.now(),t=(n=1-(P-e)/I,a=0,o=1,Math.min(o,Math.max(a,n)));var n,a,o;h.value=j.map(((e,n)=>{var a;return e+(null!=(a=x[n])?a:0)*O.value(t)})),t>=1&&(S(),m())}),{immediate:!1}),C=()=>{S(),I=a(f),x=h.value.map(((e,t)=>{var n,a;return(null!=(n=b.value[t])?n:0)-(null!=(a=h.value[t])?a:0)})),j=h.value.slice(0),E=Date.now(),P=E+I,Q(),w()},T=function(t,n,o={}){const{immediate:u=!0}=o,l=e(!1);let s=null;function c(){s&&(clearTimeout(s),s=null)}function v(){l.value=!1,c()}function d(...e){c(),l.value=!0,s=setTimeout((()=>{l.value=!1,s=null,t(...e)}),a(n))}return u&&(l.value=!0,r&&d()),i(v),{isPending:l,start:d,stop:v}}(C,v,{immediate:!1});return o(b,(()=>{a(p)?h.value=b.value.slice(0):a(v)<=0?C():T.start()}),{deep:!0}),u((()=>{const e=a(p)?b:h;return l(g.value)?e.value[0]:e.value}))}export{T,P as a,k as b,x as c,f as o,y as u};