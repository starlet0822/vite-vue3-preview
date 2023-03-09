var t=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,n="[^\\s]+",e=/\[([^]*?)\]/gm;function r(t,n){for(var e=[],r=0,o=t.length;r<o;r++)e.push(t[r].substr(0,n));return e}var o=function(t){return function(n,e){var r=e[t].map((function(t){return t.toLowerCase()})).indexOf(n.toLowerCase());return r>-1?r:null}};function u(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];for(var r=0,o=n;r<o.length;r++){var u=o[r];for(var a in u)t[a]=u[a]}return t}var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],i=["January","February","March","April","May","June","July","August","September","October","November","December"],d=r(i,3),s={dayNamesShort:r(a,3),dayNames:a,monthNamesShort:d,monthNames:i,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},f=u({},s),m=function(t){return f=u(f,t)},l=function(t){return t.replace(/[|\\{()[^$+*?.-]/g,"\\$&")},c=function(t,n){for(void 0===n&&(n=2),t=String(t);t.length<n;)t="0"+t;return t},h={D:function(t){return String(t.getDate())},DD:function(t){return c(t.getDate())},Do:function(t,n){return n.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return c(t.getDay())},ddd:function(t,n){return n.dayNamesShort[t.getDay()]},dddd:function(t,n){return n.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return c(t.getMonth()+1)},MMM:function(t,n){return n.monthNamesShort[t.getMonth()]},MMMM:function(t,n){return n.monthNames[t.getMonth()]},YY:function(t){return c(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return c(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return c(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return c(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return c(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return c(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return c(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return c(t.getMilliseconds(),3)},a:function(t,n){return t.getHours()<12?n.amPm[0]:n.amPm[1]},A:function(t,n){return t.getHours()<12?n.amPm[0].toUpperCase():n.amPm[1].toUpperCase()},ZZ:function(t){var n=t.getTimezoneOffset();return(n>0?"-":"+")+c(100*Math.floor(Math.abs(n)/60)+Math.abs(n)%60,4)},Z:function(t){var n=t.getTimezoneOffset();return(n>0?"-":"+")+c(Math.floor(Math.abs(n)/60),2)+":"+c(Math.abs(n)%60,2)}},g=function(t){return+t-1},M=[null,"\\d\\d?"],D=[null,n],Y=["isPm",n,function(t,n){var e=t.toLowerCase();return e===n.amPm[0]?0:e===n.amPm[1]?1:null}],S=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var n=(t+"").match(/([+-]|\d\d)/gi);if(n){var e=60*+n[1]+parseInt(n[2],10);return"+"===n[0]?e:-e}return 0}],y={D:["day","\\d\\d?"],DD:["day","\\d\\d"],Do:["day","\\d\\d?"+n,function(t){return parseInt(t,10)}],M:["month","\\d\\d?",g],MM:["month","\\d\\d",g],YY:["year","\\d\\d",function(t){var n=+(""+(new Date).getFullYear()).substr(0,2);return+(""+(+t>68?n-1:n)+t)}],h:["hour","\\d\\d?",void 0,"isPm"],hh:["hour","\\d\\d",void 0,"isPm"],H:["hour","\\d\\d?"],HH:["hour","\\d\\d"],m:["minute","\\d\\d?"],mm:["minute","\\d\\d"],s:["second","\\d\\d?"],ss:["second","\\d\\d"],YYYY:["year","\\d{4}"],S:["millisecond","\\d",function(t){return 100*+t}],SS:["millisecond","\\d\\d",function(t){return 10*+t}],SSS:["millisecond","\\d{3}"],d:M,dd:M,ddd:D,dddd:D,MMM:["month",n,o("monthNamesShort")],MMMM:["month",n,o("monthNames")],a:Y,A:Y,ZZ:S,Z:S},v={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},p=function(t){return u(v,t)},H=function(n,r,o){if(void 0===r&&(r=v.default),void 0===o&&(o={}),"number"==typeof n&&(n=new Date(n)),"[object Date]"!==Object.prototype.toString.call(n)||isNaN(n.getTime()))throw new Error("Invalid Date pass to format");var a=[];r=(r=v[r]||r).replace(e,(function(t,n){return a.push(n),"@@@"}));var i=u(u({},f),o);return(r=r.replace(t,(function(t){return h[t](n,i)}))).replace(/@@@/g,(function(){return a.shift()}))};function b(n,r,o){if(void 0===o&&(o={}),"string"!=typeof r)throw new Error("Invalid format in fecha parse");if(r=v[r]||r,n.length>1e3)return null;var a={year:(new Date).getFullYear(),month:0,day:1,hour:0,minute:0,second:0,millisecond:0,isPm:null,timezoneOffset:null},i=[],d=[],s=r.replace(e,(function(t,n){return d.push(l(n)),"@@@"})),m={},c={};s=l(s).replace(t,(function(t){var n=y[t],e=n[0],r=n[1],o=n[3];if(m[e])throw new Error("Invalid format. "+e+" specified twice in format");return m[e]=!0,o&&(c[o]=!0),i.push(n),"("+r+")"})),Object.keys(c).forEach((function(t){if(!m[t])throw new Error("Invalid format. "+t+" is required in specified format")})),s=s.replace(/@@@/g,(function(){return d.shift()}));var h=n.match(new RegExp(s,"i"));if(!h)return null;for(var g,M=u(u({},f),o),D=1;D<h.length;D++){var Y=i[D-1],S=Y[0],p=Y[2],H=p?p(h[D],M):+h[D];if(null==H)return null;a[S]=H}if(1===a.isPm&&null!=a.hour&&12!=+a.hour?a.hour=+a.hour+12:0===a.isPm&&12==+a.hour&&(a.hour=0),null==a.timezoneOffset){g=new Date(a.year,a.month,a.day,a.hour,a.minute,a.second,a.millisecond);for(var b=[["month","getMonth"],["day","getDate"],["hour","getHours"],["minute","getMinutes"],["second","getSeconds"]],w=(D=0,b.length);D<w;D++)if(m[b[D][0]]&&a[b[D][0]]!==g[b[D][1]]())return null}else if(g=new Date(Date.UTC(a.year,a.month,a.day,a.hour,a.minute-a.timezoneOffset,a.second,a.millisecond)),a.month>11||a.month<0||a.day>31||a.day<1||a.hour>23||a.hour<0||a.minute>59||a.minute<0||a.second>59||a.second<0)return null;return g}var w={format:H,parse:b,defaultI18n:s,setGlobalDateI18n:m,setGlobalDateMasks:p},P=Object.freeze(Object.defineProperty({__proto__:null,default:w,assign:u,format:H,parse:b,defaultI18n:s,setGlobalDateI18n:m,setGlobalDateMasks:p},Symbol.toStringTag,{value:"Module"}));export{w as a,P as f};