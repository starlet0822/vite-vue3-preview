System.register(["./encode-utf8-legacy-09932b5e.js","./dijkstrajs-legacy-3d013e92.js"],(function(t){"use strict";var e,r;return{setters:[function(t){e=t.e},function(t){r=t.d}],execute:function(){var n,o=t("b",{}),i={},a={},u=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];a.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},a.getSymbolTotalCodewords=function(t){return u[t]},a.getBCHDigit=function(t){for(var e=0;0!==t;)e++,t>>>=1;return e},a.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');n=t},a.isKanjiModeEnabled=function(){return void 0!==n},a.toSJIS=function(t){return n(t)};var s={};function f(){this.buffer=[],this.length=0}!function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+e)}}(e)}catch(n){return r}}}(s),f.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var c=f;function h(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}h.prototype.set=function(t,e,r,n){var o=t*this.size+e;this.data[o]=r,n&&(this.reservedBit[o]=!0)},h.prototype.get=function(t,e){return this.data[t*this.size+e]},h.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r},h.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var g=h,d={};!function(t){var e=a.getSymbolSize;t.getRowColCoords=function(t){if(1===t)return[];for(var r=Math.floor(t/7)+2,n=e(t),o=145===n?26:2*Math.ceil((n-13)/(2*r-2)),i=[n-7],a=1;a<r-1;a++)i[a]=i[a-1]-o;return i.push(6),i.reverse()},t.getPositions=function(e){for(var r=[],n=t.getRowColCoords(e),o=n.length,i=0;i<o;i++)for(var a=0;a<o;a++)0===i&&0===a||0===i&&a===o-1||i===o-1&&0===a||r.push([n[i],n[a]]);return r}}(d);var l={},v=a.getSymbolSize;l.getPositions=function(t){var e=v(t);return[[0,0],[e-7,0],[0,e-7]]};var p={};!function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var e=3,r=3,n=40,o=10;function i(e,r,n){switch(e){case t.Patterns.PATTERN000:return(r+n)%2==0;case t.Patterns.PATTERN001:return r%2==0;case t.Patterns.PATTERN010:return n%3==0;case t.Patterns.PATTERN011:return(r+n)%3==0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2==0;case t.Patterns.PATTERN101:return r*n%2+r*n%3==0;case t.Patterns.PATTERN110:return(r*n%2+r*n%3)%2==0;case t.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}}t.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(t){for(var r=t.size,n=0,o=0,i=0,a=null,u=null,s=0;s<r;s++){o=i=0,a=u=null;for(var f=0;f<r;f++){var c=t.get(s,f);c===a?o++:(o>=5&&(n+=e+(o-5)),a=c,o=1),(c=t.get(f,s))===u?i++:(i>=5&&(n+=e+(i-5)),u=c,i=1)}o>=5&&(n+=e+(o-5)),i>=5&&(n+=e+(i-5))}return n},t.getPenaltyN2=function(t){for(var e=t.size,n=0,o=0;o<e-1;o++)for(var i=0;i<e-1;i++){var a=t.get(o,i)+t.get(o,i+1)+t.get(o+1,i)+t.get(o+1,i+1);4!==a&&0!==a||n++}return n*r},t.getPenaltyN3=function(t){for(var e=t.size,r=0,o=0,i=0,a=0;a<e;a++){o=i=0;for(var u=0;u<e;u++)o=o<<1&2047|t.get(a,u),u>=10&&(1488===o||93===o)&&r++,i=i<<1&2047|t.get(u,a),u>=10&&(1488===i||93===i)&&r++}return r*n},t.getPenaltyN4=function(t){for(var e=0,r=t.data.length,n=0;n<r;n++)e+=t.data[n];return Math.abs(Math.ceil(100*e/r/5)-10)*o},t.applyMask=function(t,e){for(var r=e.size,n=0;n<r;n++)for(var o=0;o<r;o++)e.isReserved(o,n)||e.xor(o,n,i(t,o,n))},t.getBestMask=function(e,r){for(var n=Object.keys(t.Patterns).length,o=0,i=1/0,a=0;a<n;a++){r(a),t.applyMask(a,e);var u=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(a,e),u<i&&(i=u,o=a)}return o}}(p);var w={},m=s,E=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],y=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];w.getBlocksCount=function(t,e){switch(e){case m.L:return E[4*(t-1)+0];case m.M:return E[4*(t-1)+1];case m.Q:return E[4*(t-1)+2];case m.H:return E[4*(t-1)+3];default:return}},w.getTotalCodewordsCount=function(t,e){switch(e){case m.L:return y[4*(t-1)+0];case m.M:return y[4*(t-1)+1];case m.Q:return y[4*(t-1)+2];case m.H:return y[4*(t-1)+3];default:return}};var A={},C={},B=new Uint8Array(512),I=new Uint8Array(256);!function(){for(var t=1,e=0;e<255;e++)B[e]=t,I[t]=e,256&(t<<=1)&&(t^=285);for(var r=255;r<512;r++)B[r]=B[r-255]}(),C.log=function(t){if(t<1)throw new Error("log("+t+")");return I[t]},C.exp=function(t){return B[t]},C.mul=function(t,e){return 0===t||0===e?0:B[I[t]+I[e]]},function(t){var e=C;t.mul=function(t,r){for(var n=new Uint8Array(t.length+r.length-1),o=0;o<t.length;o++)for(var i=0;i<r.length;i++)n[o+i]^=e.mul(t[o],r[i]);return n},t.mod=function(t,r){for(var n=new Uint8Array(t);n.length-r.length>=0;){for(var o=n[0],i=0;i<r.length;i++)n[i]^=e.mul(r[i],o);for(var a=0;a<n.length&&0===n[a];)a++;n=n.slice(a)}return n},t.generateECPolynomial=function(r){for(var n=new Uint8Array([1]),o=0;o<r;o++)n=t.mul(n,new Uint8Array([1,e.exp(o)]));return n}}(A);var M=A;function T(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}T.prototype.initialize=function(t){this.degree=t,this.genPoly=M.generateECPolynomial(this.degree)},T.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");var e=new Uint8Array(t.length+this.degree);e.set(t);var r=M.mod(e,this.genPoly),n=this.degree-r.length;if(n>0){var o=new Uint8Array(this.degree);return o.set(r,n),o}return r};var N=T,P={},b={},R={isValid:function(t){return!isNaN(t)&&t>=1&&t<=40}},L={},U="[0-9]+",S="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",x="(?:(?![A-Z0-9 $%*+\\-./:]|"+(S=S.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";L.KANJI=new RegExp(S,"g"),L.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),L.BYTE=new RegExp(x,"g"),L.NUMERIC=new RegExp(U,"g"),L.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");var k=new RegExp("^"+S+"$"),F=new RegExp("^[0-9]+$"),z=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");L.testKanji=function(t){return k.test(t)},L.testNumeric=function(t){return F.test(t)},L.testAlphanumeric=function(t){return z.test(t)},function(t){var e=R,r=L;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(t,r){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!e.isValid(r))throw new Error("Invalid version: "+r);return r>=1&&r<10?t.ccBits[0]:r<27?t.ccBits[1]:t.ccBits[2]},t.getBestModeForData=function(e){return r.testNumeric(e)?t.NUMERIC:r.testAlphanumeric(e)?t.ALPHANUMERIC:r.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},t.isValid=function(t){return t&&t.bit&&t.ccBits},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+e)}}(e)}catch(n){return r}}}(b),function(t){var e=a,r=w,n=s,o=b,i=R,u=e.getBCHDigit(7973);function f(t,e){return o.getCharCountIndicator(t,e)+4}function c(t,e){var r=0;return t.forEach((function(t){var n=f(t.mode,e);r+=n+t.getBitsLength()})),r}t.from=function(t,e){return i.isValid(t)?parseInt(t,10):e},t.getCapacity=function(t,n,a){if(!i.isValid(t))throw new Error("Invalid QR Code version");void 0===a&&(a=o.BYTE);var u=8*(e.getSymbolTotalCodewords(t)-r.getTotalCodewordsCount(t,n));if(a===o.MIXED)return u;var s=u-f(a,t);switch(a){case o.NUMERIC:return Math.floor(s/10*3);case o.ALPHANUMERIC:return Math.floor(s/11*2);case o.KANJI:return Math.floor(s/13);case o.BYTE:default:return Math.floor(s/8)}},t.getBestVersionForData=function(e,r){var i,a=n.from(r,n.M);if(Array.isArray(e)){if(e.length>1)return function(e,r){for(var n=1;n<=40;n++)if(c(e,n)<=t.getCapacity(n,r,o.MIXED))return n}(e,a);if(0===e.length)return 1;i=e[0]}else i=e;return function(e,r,n){for(var o=1;o<=40;o++)if(r<=t.getCapacity(o,n,e))return o}(i.mode,i.getLength(),a)},t.getEncodedBits=function(t){if(!i.isValid(t)||t<7)throw new Error("Invalid QR Code version");for(var r=t<<12;e.getBCHDigit(r)-u>=0;)r^=7973<<e.getBCHDigit(r)-u;return t<<12|r}}(P);var D={},H=a,J=H.getBCHDigit(1335);D.getEncodedBits=function(t,e){for(var r=t.bit<<3|e,n=r<<10;H.getBCHDigit(n)-J>=0;)n^=1335<<H.getBCHDigit(n)-J;return 21522^(r<<10|n)};var K={},Y=b;function j(t){this.mode=Y.NUMERIC,this.data=t.toString()}j.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},j.prototype.getLength=function(){return this.data.length},j.prototype.getBitsLength=function(){return j.getBitsLength(this.data.length)},j.prototype.write=function(t){var e,r,n;for(e=0;e+3<=this.data.length;e+=3)r=this.data.substr(e,3),n=parseInt(r,10),t.put(n,10);var o=this.data.length-e;o>0&&(r=this.data.substr(e),n=parseInt(r,10),t.put(n,3*o+1))};var V=j,O=b,Q=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function $(t){this.mode=O.ALPHANUMERIC,this.data=t}$.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},$.prototype.getLength=function(){return this.data.length},$.prototype.getBitsLength=function(){return $.getBitsLength(this.data.length)},$.prototype.write=function(t){var e;for(e=0;e+2<=this.data.length;e+=2){var r=45*Q.indexOf(this.data[e]);r+=Q.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(Q.indexOf(this.data[e]),6)};var q=$,Z=e,X=b;function W(t){this.mode=X.BYTE,"string"==typeof t&&(t=Z(t)),this.data=new Uint8Array(t)}W.getBitsLength=function(t){return 8*t},W.prototype.getLength=function(){return this.data.length},W.prototype.getBitsLength=function(){return W.getBitsLength(this.data.length)},W.prototype.write=function(t){for(var e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)};var _=W,G=b,tt=a;function et(t){this.mode=G.KANJI,this.data=t}et.getBitsLength=function(t){return 13*t},et.prototype.getLength=function(){return this.data.length},et.prototype.getBitsLength=function(){return et.getBitsLength(this.data.length)},et.prototype.write=function(t){var e;for(e=0;e<this.data.length;e++){var r=tt.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");r-=49472}r=192*(r>>>8&255)+(255&r),t.put(r,13)}};var rt=et;!function(t){var e=b,n=V,o=q,i=_,u=rt,s=L,f=a,c=r.exports;function h(t){return unescape(encodeURIComponent(t)).length}function g(t,e,r){for(var n,o=[];null!==(n=t.exec(r));)o.push({data:n[0],index:n.index,mode:e,length:n[0].length});return o}function d(t){var r,n,o=g(s.NUMERIC,e.NUMERIC,t),i=g(s.ALPHANUMERIC,e.ALPHANUMERIC,t);return f.isKanjiModeEnabled()?(r=g(s.BYTE,e.BYTE,t),n=g(s.KANJI,e.KANJI,t)):(r=g(s.BYTE_KANJI,e.BYTE,t),n=[]),o.concat(i,r,n).sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function l(t,r){switch(r){case e.NUMERIC:return n.getBitsLength(t);case e.ALPHANUMERIC:return o.getBitsLength(t);case e.KANJI:return u.getBitsLength(t);case e.BYTE:return i.getBitsLength(t)}}function v(t,r){var a,s=e.getBestModeForData(t);if((a=e.from(r,s))!==e.BYTE&&a.bit<s.bit)throw new Error('"'+t+'" cannot be encoded with mode '+e.toString(a)+".\n Suggested mode is: "+e.toString(s));switch(a!==e.KANJI||f.isKanjiModeEnabled()||(a=e.BYTE),a){case e.NUMERIC:return new n(t);case e.ALPHANUMERIC:return new o(t);case e.KANJI:return new u(t);case e.BYTE:return new i(t)}}t.fromArray=function(t){return t.reduce((function(t,e){return"string"==typeof e?t.push(v(e,null)):e.data&&t.push(v(e.data,e.mode)),t}),[])},t.fromString=function(r,n){for(var o=function(t){for(var r=[],n=0;n<t.length;n++){var o=t[n];switch(o.mode){case e.NUMERIC:r.push([o,{data:o.data,mode:e.ALPHANUMERIC,length:o.length},{data:o.data,mode:e.BYTE,length:o.length}]);break;case e.ALPHANUMERIC:r.push([o,{data:o.data,mode:e.BYTE,length:o.length}]);break;case e.KANJI:r.push([o,{data:o.data,mode:e.BYTE,length:h(o.data)}]);break;case e.BYTE:r.push([{data:o.data,mode:e.BYTE,length:h(o.data)}])}}return r}(d(r,f.isKanjiModeEnabled())),i=function(t,r){for(var n={},o={start:{}},i=["start"],a=0;a<t.length;a++){for(var u=t[a],s=[],f=0;f<u.length;f++){var c=u[f],h=""+a+f;s.push(h),n[h]={node:c,lastCount:0},o[h]={};for(var g=0;g<i.length;g++){var d=i[g];n[d]&&n[d].node.mode===c.mode?(o[d][h]=l(n[d].lastCount+c.length,c.mode)-l(n[d].lastCount,c.mode),n[d].lastCount+=c.length):(n[d]&&(n[d].lastCount=c.length),o[d][h]=l(c.length,c.mode)+4+e.getCharCountIndicator(c.mode,r))}}i=s}for(var v=0;v<i.length;v++)o[i[v]].end=0;return{map:o,table:n}}(o,n),a=c.find_path(i.map,"start","end"),u=[],s=1;s<a.length-1;s++)u.push(i.table[a[s]].node);return t.fromArray(function(t){return t.reduce((function(t,e){var r=t.length-1>=0?t[t.length-1]:null;return r&&r.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}(u))},t.rawSplit=function(e){return t.fromArray(d(e,f.isKanjiModeEnabled()))}}(K);var nt=a,ot=s,it=c,at=g,ut=d,st=l,ft=p,ct=w,ht=N,gt=P,dt=D,lt=b,vt=K;function pt(t,e,r){var n,o,i=t.size,a=dt.getEncodedBits(e,r);for(n=0;n<15;n++)o=1==(a>>n&1),n<6?t.set(n,8,o,!0):n<8?t.set(n+1,8,o,!0):t.set(i-15+n,8,o,!0),n<8?t.set(8,i-n-1,o,!0):n<9?t.set(8,15-n-1+1,o,!0):t.set(8,15-n-1,o,!0);t.set(i-8,8,1,!0)}function wt(t,e,r){var n=new it;r.forEach((function(e){n.put(e.mode.bit,4),n.put(e.getLength(),lt.getCharCountIndicator(e.mode,t)),e.write(n)}));var o=8*(nt.getSymbolTotalCodewords(t)-ct.getTotalCodewordsCount(t,e));for(n.getLengthInBits()+4<=o&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);for(var i=(o-n.getLengthInBits())/8,a=0;a<i;a++)n.put(a%2?17:236,8);return function(t,e,r){for(var n=nt.getSymbolTotalCodewords(e),o=ct.getTotalCodewordsCount(e,r),i=n-o,a=ct.getBlocksCount(e,r),u=a-n%a,s=Math.floor(n/a),f=Math.floor(i/a),c=f+1,h=s-f,g=new ht(h),d=0,l=new Array(a),v=new Array(a),p=0,w=new Uint8Array(t.buffer),m=0;m<a;m++){var E=m<u?f:c;l[m]=w.slice(d,d+E),v[m]=g.encode(l[m]),d+=E,p=Math.max(p,E)}var y,A,C=new Uint8Array(n),B=0;for(y=0;y<p;y++)for(A=0;A<a;A++)y<l[A].length&&(C[B++]=l[A][y]);for(y=0;y<h;y++)for(A=0;A<a;A++)C[B++]=v[A][y];return C}(n,t,e)}function mt(t,e,r,n){var o;if(Array.isArray(t))o=vt.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");var i=e;if(!i){var a=vt.rawSplit(t);i=gt.getBestVersionForData(a,r)}o=vt.fromString(t,i||40)}var u=gt.getBestVersionForData(o,r);if(!u)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<u)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+u+".\n")}else e=u;var s=wt(e,r,o),f=nt.getSymbolSize(e),c=new at(f);return function(t,e){for(var r=t.size,n=st.getPositions(e),o=0;o<n.length;o++)for(var i=n[o][0],a=n[o][1],u=-1;u<=7;u++)if(!(i+u<=-1||r<=i+u))for(var s=-1;s<=7;s++)a+s<=-1||r<=a+s||(u>=0&&u<=6&&(0===s||6===s)||s>=0&&s<=6&&(0===u||6===u)||u>=2&&u<=4&&s>=2&&s<=4?t.set(i+u,a+s,!0,!0):t.set(i+u,a+s,!1,!0))}(c,e),function(t){for(var e=t.size,r=8;r<e-8;r++){var n=r%2==0;t.set(r,6,n,!0),t.set(6,r,n,!0)}}(c),function(t,e){for(var r=ut.getPositions(e),n=0;n<r.length;n++)for(var o=r[n][0],i=r[n][1],a=-2;a<=2;a++)for(var u=-2;u<=2;u++)-2===a||2===a||-2===u||2===u||0===a&&0===u?t.set(o+a,i+u,!0,!0):t.set(o+a,i+u,!1,!0)}(c,e),pt(c,r,0),e>=7&&function(t,e){for(var r,n,o,i=t.size,a=gt.getEncodedBits(e),u=0;u<18;u++)r=Math.floor(u/3),n=u%3+i-8-3,o=1==(a>>u&1),t.set(r,n,o,!0),t.set(n,r,o,!0)}(c,e),function(t,e){for(var r=t.size,n=-1,o=r-1,i=7,a=0,u=r-1;u>0;u-=2)for(6===u&&u--;;){for(var s=0;s<2;s++)if(!t.isReserved(o,u-s)){var f=!1;a<e.length&&(f=1==(e[a]>>>i&1)),t.set(o,u-s,f),-1==--i&&(a++,i=7)}if((o+=n)<0||r<=o){o-=n,n=-n;break}}}(c,s),isNaN(n)&&(n=ft.getBestMask(c,pt.bind(null,c,r))),ft.applyMask(n,c),pt(c,r,n),{modules:c,version:e,errorCorrectionLevel:r,maskPattern:n,segments:o}}i.create=function(t,e){if(void 0===t||""===t)throw new Error("No input text");var r,n,o=ot.M;return void 0!==e&&(o=ot.from(e.errorCorrectionLevel,ot.M),r=gt.from(e.version),n=ft.from(e.maskPattern),e.toSJISFunc&&nt.setToSJISFunction(e.toSJISFunc)),mt(t,r,o,n)};var Et={},yt={};!function(t){function e(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");var e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");var r=parseInt(e.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+e.slice(0,6).join("")}}t.getOptions=function(t){t||(t={}),t.color||(t.color={});var r=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,n=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:n,scale:n?4:o,margin:r,color:{dark:e(t.color.dark||"#000000ff"),light:e(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},t.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},t.getImageWidth=function(e,r){var n=t.getScale(e,r);return Math.floor((e+2*r.margin)*n)},t.qrToImageData=function(e,r,n){for(var o=r.modules.size,i=r.modules.data,a=t.getScale(o,n),u=Math.floor((o+2*n.margin)*a),s=n.margin*a,f=[n.color.light,n.color.dark],c=0;c<u;c++)for(var h=0;h<u;h++){var g=4*(c*u+h),d=n.color.light;c>=s&&h>=s&&c<u-s&&h<u-s&&(d=f[i[Math.floor((c-s)/a)*o+Math.floor((h-s)/a)]?1:0]),e[g++]=d.r,e[g++]=d.g,e[g++]=d.b,e[g]=d.a}}}(yt),function(t){var e=yt;t.render=function(t,r,n){var o=n,i=r;void 0!==o||r&&r.getContext||(o=r,r=void 0),r||(i=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),o=e.getOptions(o);var a=e.getImageWidth(t.modules.size,o),u=i.getContext("2d"),s=u.createImageData(a,a);return e.qrToImageData(s.data,t,o),function(t,e,r){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=r,e.width=r,e.style.height=r+"px",e.style.width=r+"px"}(u,i,a),u.putImageData(s,0,0),i},t.renderToDataURL=function(e,r,n){var o=n;void 0!==o||r&&r.getContext||(o=r,r=void 0),o||(o={});var i=t.render(e,r,o),a=o.type||"image/png",u=o.rendererOpts||{};return i.toDataURL(a,u.quality)}}(Et);var At={},Ct=yt;function Bt(t,e){var r=t.a/255,n=e+'="'+t.hex+'"';return r<1?n+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function It(t,e,r){var n=t+e;return void 0!==r&&(n+=" "+r),n}At.render=function(t,e,r){var n=Ct.getOptions(e),o=t.modules.size,i=t.modules.data,a=o+2*n.margin,u=n.color.light.a?"<path "+Bt(n.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",s="<path "+Bt(n.color.dark,"stroke")+' d="'+function(t,e,r){for(var n="",o=0,i=!1,a=0,u=0;u<t.length;u++){var s=Math.floor(u%e),f=Math.floor(u/e);s||i||(i=!0),t[u]?(a++,u>0&&s>0&&t[u-1]||(n+=i?It("M",s+r,.5+f+r):It("m",o,0),o=0,i=!1),s+1<e&&t[u+1]||(n+=It("h",a),a=0)):o++}return n}(i,o,n.margin)+'"/>',f='viewBox="0 0 '+a+" "+a+'"',c='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+f+' shape-rendering="crispEdges">'+u+s+"</svg>\n";return"function"==typeof r&&r(null,c),c};var Mt=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then},Tt=i,Nt=Et,Pt=At;function bt(t,e,r,n,o){var i=[].slice.call(arguments,1),a=i.length,u="function"==typeof i[a-1];if(!u&&!Mt())throw new Error("Callback required as last argument");if(!u){if(a<1)throw new Error("Too few arguments provided");return 1===a?(r=e,e=n=void 0):2!==a||e.getContext||(n=r,r=e,e=void 0),new Promise((function(o,i){try{var a=Tt.create(r,n);o(t(a,e,n))}catch(u){i(u)}}))}if(a<2)throw new Error("Too few arguments provided");2===a?(o=r,r=e,e=n=void 0):3===a&&(e.getContext&&void 0===o?(o=n,n=void 0):(o=n,n=r,r=e,e=void 0));try{var s=Tt.create(r,n);o(null,t(s,e,n))}catch(f){o(f)}}o.create=Tt.create,o.toCanvas=bt.bind(null,Nt.render),o.toDataURL=bt.bind(null,Nt.renderToDataURL),o.toString=bt.bind(null,(function(t,e,r){return Pt.render(t,r)}))}}}));
