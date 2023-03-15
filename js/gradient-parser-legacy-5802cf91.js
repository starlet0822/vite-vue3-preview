System.register([],(function(t){"use strict";return{execute:function(){var i,r;(r=r||{}).stringify=(i={"visit_linear-gradient":function(t){return i.visit_gradient(t)},"visit_repeating-linear-gradient":function(t){return i.visit_gradient(t)},"visit_radial-gradient":function(t){return i.visit_gradient(t)},"visit_repeating-radial-gradient":function(t){return i.visit_gradient(t)},visit_gradient:function(t){var r=i.visit(t.orientation);return r&&(r+=", "),t.type+"("+r+i.visit(t.colorStops)+")"},visit_shape:function(t){var r=t.value,n=i.visit(t.at),e=i.visit(t.style);return e&&(r+=" "+e),n&&(r+=" at "+n),r},"visit_default-radial":function(t){var r="",n=i.visit(t.at);return n&&(r+=n),r},"visit_extent-keyword":function(t){var r=t.value,n=i.visit(t.at);return n&&(r+=" at "+n),r},"visit_position-keyword":function(t){return t.value},visit_position:function(t){return i.visit(t.value.x)+" "+i.visit(t.value.y)},"visit_%":function(t){return t.value+"%"},visit_em:function(t){return t.value+"em"},visit_px:function(t){return t.value+"px"},visit_literal:function(t){return i.visit_color(t.value,t)},visit_hex:function(t){return i.visit_color("#"+t.value,t)},visit_rgb:function(t){return i.visit_color("rgb("+t.value.join(", ")+")",t)},visit_rgba:function(t){return i.visit_color("rgba("+t.value.join(", ")+")",t)},visit_color:function(t,r){var n=t,e=i.visit(r.length);return e&&(n+=" "+e),n},visit_angular:function(t){return t.value+"deg"},visit_directional:function(t){return"to "+t.value},visit_array:function(t){var r="",n=t.length;return t.forEach((function(t,e){r+=i.visit(t),e<n-1&&(r+=", ")})),r},visit:function(t){if(!t)return"";if(t instanceof Array)return i.visit_array(t,"");if(t.type){var r=i["visit_"+t.type];if(r)return r(t);throw Error("Missing visitor visit_"+t.type)}throw Error("Invalid node.")}},function(t){return i.visit(t)}),(r=r||{}).parse=function(){var t=/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,i=/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,r=/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,n=/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,e=/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,o=/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,a=/^(left|center|right|top|bottom)/i,u=/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,s=/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,v=/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,c=/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,f=/^\(/,l=/^\)/,g=/^,/,p=/^\#([0-9a-fA-F]+)/,d=/^([a-zA-Z]+)/,_=/^rgb/i,y=/^rgba/i,h=/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/,m="";function b(t){var i=new Error(m+": "+t);throw i.source=m,i}function x(){var t=I(w);return m.length>0&&b("Invalid input not EOF"),t}function w(){return k("linear-gradient",t,z)||k("repeating-linear-gradient",i,z)||k("radial-gradient",r,M)||k("repeating-radial-gradient",n,M)}function k(t,i,r){return E(i,(function(i){var n=r();return n&&(D(g)||b("Missing comma before color stops")),{type:t,orientation:n,colorStops:I(O)}}))}function E(t,i){var r=D(t);if(r){D(f)||b("Missing (");var n=i(r);return D(l)||b("Missing )"),n}}function z(){return C("directional",e,1)||C("angular",c,1)}function M(){var t,i,r=S();return r&&((t=[]).push(r),i=m,D(g)&&((r=S())?t.push(r):m=i)),t}function S(){var t,i,r=((i=C("shape",/^(circle)/i,0))&&(i.style=B()||A()),i||((t=C("shape",/^(ellipse)/i,0))&&(t.style=q()||A()),t));if(r)r.at=j();else{var n=A();if(n){r=n;var e=j();e&&(r.at=e)}else{var o=F();o&&(r={type:"default-radial",at:o})}}return r}function A(){return C("extent-keyword",o,1)}function j(){if(C("position",/^at/,0)){var t=F();return t||b("Missing positioning value"),t}}function F(){var t={x:q(),y:q()};if(t.x||t.y)return{type:"position",value:t}}function I(t){var i=t(),r=[];if(i)for(r.push(i);D(g);)(i=t())?r.push(i):b("One extra comma");return r}function O(){var t=C("hex",p,1)||E(y,(function(){return{type:"rgba",value:I(Z)}}))||E(_,(function(){return{type:"rgb",value:I(Z)}}))||C("literal",d,0);return t||b("Expected color definition"),t.length=q(),t}function Z(){return D(h)[1]}function q(){return C("%",s,1)||C("position-keyword",a,1)||B()}function B(){return C("px",u,1)||C("em",v,1)}function C(t,i,r){var n=D(i);if(n)return{type:t,value:n[r]}}function D(t){var i,r;return(r=/^[\n\r\t\s]+/.exec(m))&&G(r[0].length),(i=t.exec(m))&&G(i[0].length),i}function G(t){m=m.substr(t)}return function(t){return m=t.toString(),x()}}(),t("p",r.parse),t("s",r.stringify)}}}));