(function(){var h={},mt={},c={id:"a0770039cd09e9aa41b93e6c19967917",dm:["szhcsm.cn"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:1,vcard:7602118,qiao:7602118,lxb:7602118,kbtrk:0,pt:0,aet:'',hca:'5B25F8D7DD7368AD',conv:0,med:0,cvcc:'',cvcf:[],apps:''};var r=void 0,s=!0,t=null,u=!1;mt.cookie={};mt.cookie.set=function(b,a,d){var e;d.B&&(e=new Date,e.setTime(e.getTime()+d.B));document.cookie=b+"="+a+(d.domain?"; domain="+d.domain:"")+(d.path?"; path="+d.path:"")+(e?"; expires="+e.toGMTString():"")+(d.Kb?"; secure":"")};mt.cookie.get=function(b){return(b=RegExp("(^| )"+b+"=([^;]*)(;|$)").exec(document.cookie))?b[2]:t};
mt.cookie.hb=function(b,a){try{var d="Hm_ck_"+ +new Date;mt.cookie.set(d,"is-cookie-enabled",{domain:b,path:a,B:r});var e="is-cookie-enabled"===mt.cookie.get(d)?"1":"0";mt.cookie.set(d,"",{domain:b,path:a,B:-1});return e}catch(g){return"0"}};mt.lang={};mt.lang.d=function(b,a){return"[object "+a+"]"==={}.toString.call(b)};mt.lang.va=function(b){return mt.lang.d(b,"Number")&&isFinite(b)};mt.lang.ca=function(){return mt.lang.d(c.aet,"String")};
mt.lang.j=function(b){return b.replace?b.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):b};mt.lang.trim=function(b){return b.replace(/^\s+|\s+$/g,"")};mt.lang.D=function(b,a){var d=u;if(b==t||!mt.lang.d(b,"Array")||a===r)return d;if(Array.prototype.indexOf)d=-1!==b.indexOf(a);else for(var e=0;e<b.length;e++)if(b[e]===a){d=s;break}return d};
(function(){var b=mt.lang;mt.e={};mt.e.ra=function(a){return document.getElementById(a)};mt.e.aa=function(a,b){var e=[],g=[];if(!a)return g;for(;a.parentNode!=t;){for(var l=0,p=0,m=a.parentNode.childNodes.length,f=0;f<m;f++){var k=a.parentNode.childNodes[f];if(k.nodeName===a.nodeName&&(l++,k===a&&(p=l),0<p&&1<l))break}if((m=""!==a.id)&&b){e.unshift("#"+encodeURIComponent(a.id));break}else m&&(m="#"+encodeURIComponent(a.id),m=0<e.length?m+">"+e.join(">"):m,g.push(m)),e.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+
(1<l?"["+p+"]":""));a=a.parentNode}g.push(e.join(">"));return g};mt.e.Va=function(a){return(a=mt.e.aa(a,s))&&a.length?String(a[0]):""};mt.e.Fb=function(a){return mt.e.aa(a,u)};mt.e.Db=function(a,b){for(b=b.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return t};mt.e.Qa=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.e.Eb=function(a){var b={top:0,left:0};if(!a)return b;var e=mt.e.Qa(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(b=a.getBoundingClientRect());
return{top:b.top+(window.pageYOffset||e.scrollTop)-(e.clientTop||0),left:b.left+(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}};mt.e.getAttribute=function(a,b){var e=a.getAttribute&&a.getAttribute(b)||t;if(!e&&a.attributes&&a.attributes.length)for(var g=a.attributes,l=g.length,p=0;p<l;p++)g[p].nodeName===b&&(e=g[p].nodeValue);return e};mt.e.M=function(a){var b="document";a.tagName!==r&&(b=a.tagName);return b.toLowerCase()};mt.e.Xa=function(a){var d="";a.textContent?d=b.trim(a.textContent):
a.innerText&&(d=b.trim(a.innerText));d&&(d=d.replace(/\s+/g," ").substring(0,255));return d};mt.e.Ra=function(a){var b=mt.e.M(a);"input"===b&&("button"===a.type||"submit"===a.type)?a=a.value||"":"img"===b?(b=mt.e.getAttribute,a=b(a,"alt")||b(a,"title")||b(a,"src")):a="body"===b||"html"===b?["(hm-default-content-for-",b,")"].join(""):mt.e.Xa(a);return String(a).substring(0,255)};(function(){(mt.e.za=function(){function a(){if(!a.P){a.P=s;for(var b=0,e=g.length;b<e;b++)g[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(e){setTimeout(b,
1);return}a()}var e=u,g=[],l;document.addEventListener?l=function(){document.removeEventListener("DOMContentLoaded",l,u);a()}:document.attachEvent&&(l=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",l),a())});(function(){if(!e)if(e=s,"complete"===document.readyState)a.P=s;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",l,u),window.addEventListener("load",a,u);else if(document.attachEvent){document.attachEvent("onreadystatechange",
l);window.attachEvent("onload",a);var g=u;try{g=window.frameElement==t}catch(m){}document.documentElement.doScroll&&g&&b()}})();return function(b){a.P?b():g.push(b)}}()).P=u})();return mt.e})();mt.event={};mt.event.c=function(b,a,d){b.attachEvent?b.attachEvent("on"+a,function(a){d.call(b,a)}):b.addEventListener&&b.addEventListener(a,d,u)};mt.event.preventDefault=function(b){b.preventDefault?b.preventDefault():b.returnValue=u};
(function(){var b=mt.event;mt.g={};mt.g.ua=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.g.fb=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:r;mt.g.cookieEnabled=navigator.cookieEnabled;mt.g.javaEnabled=navigator.javaEnabled();mt.g.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.g.lb=(window.screen.width||0)+"x"+(window.screen.height||0);mt.g.colorDepth=window.screen.colorDepth||0;mt.g.N=function(){var a;
a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.g.C=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.g.orientation=0;(function(){function a(){var a=0;window.orientation!==r&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==r)&&(a=screen.orientation.angle);mt.g.orientation=a}a();b.c(window,"orientationchange",a)})();return mt.g})();
mt.m={};mt.m.parse=function(){return(new Function('return (" + source + ")'))()};
mt.m.stringify=function(){function b(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=d[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function a(a){return 10>a?"0"+a:a}var d={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(e){switch(typeof e){case "undefined":return"undefined";case "number":return isFinite(e)?String(e):"null";case "string":return b(e);case "boolean":return String(e);
default:if(e===t)return"null";if(e instanceof Array){var d=["["],l=e.length,p,m,f;for(m=0;m<l;m++)switch(f=e[m],typeof f){case "undefined":case "function":case "unknown":break;default:p&&d.push(","),d.push(mt.m.stringify(f)),p=1}d.push("]");return d.join("")}if(e instanceof Date)return'"'+e.getFullYear()+"-"+a(e.getMonth()+1)+"-"+a(e.getDate())+"T"+a(e.getHours())+":"+a(e.getMinutes())+":"+a(e.getSeconds())+'"';p=["{"];m=mt.m.stringify;for(l in e)if(Object.prototype.hasOwnProperty.call(e,l))switch(f=
e[l],typeof f){case "undefined":case "unknown":case "function":break;default:d&&p.push(","),d=1,p.push(m(l)+":"+m(f))}p.push("}");return p.join("")}}}();mt.localStorage={};mt.localStorage.S=function(){if(!mt.localStorage.h)try{mt.localStorage.h=document.createElement("input"),mt.localStorage.h.type="hidden",mt.localStorage.h.style.display="none",mt.localStorage.h.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.h)}catch(b){return u}return s};
mt.localStorage.set=function(b,a,d){var e=new Date;e.setTime(e.getTime()+d||31536E6);try{window.localStorage?(a=e.getTime()+"|"+a,window.localStorage.setItem(b,a)):mt.localStorage.S()&&(mt.localStorage.h.expires=e.toUTCString(),mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.setAttribute(b,a),mt.localStorage.h.save(document.location.hostname))}catch(g){}};
mt.localStorage.get=function(b){if(window.localStorage){if(b=window.localStorage.getItem(b)){var a=b.indexOf("|"),d=b.substring(0,a)-0;if(d&&d>(new Date).getTime())return b.substring(a+1)}}else if(mt.localStorage.S())try{return mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.getAttribute(b)}catch(e){}return t};
mt.localStorage.remove=function(b){if(window.localStorage)window.localStorage.removeItem(b);else if(mt.localStorage.S())try{mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.removeAttribute(b),mt.localStorage.h.save(document.location.hostname)}catch(a){}};mt.sessionStorage={};mt.sessionStorage.set=function(b,a){if(window.sessionStorage)try{window.sessionStorage.setItem(b,a)}catch(d){}};
mt.sessionStorage.get=function(b){return window.sessionStorage?window.sessionStorage.getItem(b):t};mt.sessionStorage.remove=function(b){window.sessionStorage&&window.sessionStorage.removeItem(b)};mt.Aa={};mt.Aa.log=function(b,a){var d=new Image,e="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[e]=d;d.onload=d.onerror=d.onabort=function(){d.onload=d.onerror=d.onabort=t;d=window[e]=t;a&&a(b)};d.src=b};mt.ia={};
mt.ia.Ya=function(){var b="";if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];a&&a.description&&(b=a.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(b=a.GetVariable("$version"))&&(b=b.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(d){}return b};
mt.ia.Cb=function(b,a,d,e,g){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+b+'" width="'+d+'" height="'+e+'"><param name="movie" value="'+a+'" /><param name="flashvars" value="'+(g||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+b+'" width="'+d+'" height="'+e+'" src="'+a+'" flashvars="'+(g||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.l=function(b,a){var d=b.match(RegExp("(^|&|\\?|#)("+a+")=([^&#]*)(&|$|#)",""));return d?d[3]:t};mt.url.Gb=function(b){return(b=b.match(/^(https?:)\/\//))?b[1]:t};mt.url.Ta=function(b){return(b=b.match(/^(https?:\/\/)?([^\/\?#]*)/))?b[2].replace(/.*@/,""):t};mt.url.$=function(b){return(b=mt.url.Ta(b))?b.replace(/:\d+$/,""):b};mt.url.aa=function(b){return(b=b.match(/^(https?:\/\/)?[^\/]*(.*)/))?b[2].replace(/[\?#].*/,"").replace(/^$/,"/"):t};
(function(){function b(){for(var a=u,b=document.getElementsByTagName("script"),e=b.length,e=100<e?100:e,g=0;g<e;g++){var l=b[g].src;if(l&&0===l.indexOf("https://hm.baidu.com/h")){a=s;break}}return a}return h.Pa=b})();var x=h.Pa;
h.k={Hb:"http://tongji.baidu.com/hm-web/welcome/ico",ya:"hm.baidu.com/hm.gif",Fa:"tongji.baidu.com",bb:"hmmd",cb:"hmpl",wb:"utm_medium",ab:"hmkw",yb:"utm_term",Za:"hmci",vb:"utm_content",eb:"hmsr",xb:"utm_source",$a:"hmcu",ub:"utm_campaign",z:0,w:Math.round(+new Date/1E3),A:Math.round(+new Date/1E3)%65535,protocol:"https:"===document.location.protocol?"https:":"http:",ea:x()||"https:"===document.location.protocol?"https:":"http:",Ib:0,Ab:6E5,ib:6E5,Jb:5E3,Bb:5,W:1024,zb:1,H:2147483647,Ba:"hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn ct u tt hh".split(" "),
F:s,oa:["a","input","button"],Ha:{id:"data-hm-id",V:"data-hm-class",la:"data-hm-xpath",content:"data-hm-content",R:"data-hm-tag",link:"data-hm-link"},na:"data-hm-enabled",ma:"data-hm-disabled"};(function(){var b={r:{},c:function(a,b){this.r[a]=this.r[a]||[];this.r[a].push(b)},K:function(a,b){this.r[a]=this.r[a]||[];for(var e=this.r[a].length,g=0;g<e;g++)this.r[a][g](b)}};return h.p=b})();
(function(){function b(b,e){var g=document.createElement("script");g.charset="utf-8";a.d(e,"Function")&&(g.readyState?g.onreadystatechange=function(){if("loaded"===g.readyState||"complete"===g.readyState)g.onreadystatechange=t,e()}:g.onload=function(){e()});g.src=b;var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(g,l)}var a=mt.lang;return h.load=b})();
(function(){function b(){var b="";h.b.a.nv?(b=encodeURIComponent(document.referrer),window.sessionStorage?d.set("Hm_from_"+c.id,b):a.set("Hm_from_"+c.id,b,864E5)):b=(window.sessionStorage?d.get("Hm_from_"+c.id):a.get("Hm_from_"+c.id))||"";return b}var a=mt.localStorage,d=mt.sessionStorage;return h.qa=b})();
(function(){var b=mt.lang,a=mt.e,d=mt.event,e=mt.g,g=h.k,l=h.p,p=+new Date,m=[],f={pa:function(){return function(k){if(h.b&&h.b.F&&c.aet&&c.aet.length){var d=k.target||k.srcElement;if(d){var n=h.b.oa,q=a.getAttribute(d,g.na)!=t?s:u;if(a.getAttribute(d,g.ma)==t)if(q)f.T(f.Z(d,k));else{var e=a.M(d);if(b.D(n,"*")||b.D(n,e))f.T(f.Z(d,k));else for(;d.parentNode!=t;){var q=d.parentNode,e=a.M(q),v="a"===e&&b.D(n,"a")?s:u,e="button"===e&&b.D(n,"button")?s:u,z=a.getAttribute(q,g.na)!=t?s:u;if(a.getAttribute(q,
g.ma)==t&&(v||e||z)){f.T(f.Z(q,k));break}d=d.parentNode}}}}}},Z:function(k,d){var n={},q=g.Ha;n.id=a.getAttribute(k,q.id)||a.getAttribute(k,"id")||"";n.V=a.getAttribute(k,q.V)||a.getAttribute(k,"class")||"";n.la=a.getAttribute(k,q.la)||a.Va(k);n.content=a.getAttribute(k,q.content)||a.Ra(k);n.R=a.getAttribute(k,q.R)||a.M(k);n.link=a.getAttribute(k,q.link)||a.getAttribute(k,"href")||"";n.type=d.type||"click";q=b.va(k.offsetTop)?k.offsetTop:0;"click"===d.type?q=e.ua?d.clientY+Math.max(document.documentElement.scrollTop,
document.body.scrollTop):d.pageY:"touchend"===d.type&&(d.fa&&b.d(d.fa.changedTouches,"Array")&&d.fa.changedTouches.length)&&(q=d.fa.changedTouches[0].pageY);n.tb=q;return n},T:function(a){var d=b.j,d=[+new Date-(h.b.s!==r?h.b.s:p),d(a.id),d(a.V),d(a.R),d(a.la),d(a.link),d(a.content),a.type,a.tb].join("*");f.U(d);b.D(["a"],a.R)&&b.d(this.I(),"Function")&&this.I()()},U:function(a){a.length>g.W||(encodeURIComponent(m.join("!")+a).length>g.W&&(f.J(m.join("!")),m=[]),m.push(a))},J:function(a){h.b.a.et=
5;h.b.a.ep=a;h.b.i()},I:function(){return function(){m&&m.length&&(f.J(m.join("!")),m=[])}}};b.ca()&&""!==c.aet&&l.c("pv-b",function(){d.c(document,"click",f.pa());"ontouchend"in document&&d.c(window,"touchend",f.pa());d.c(window,"unload",f.I())});return f})();
(function(){var b=mt.event,a=mt.g,d=h.k,e=h.p,g=+new Date,l=[],p=t,m={La:function(){return function(){h.b&&(h.b.F&&c.aet&&c.aet.length)&&(window.clearTimeout(p),p=window.setTimeout(function(){m.Da(a.N()+a.C())},150))}},Da:function(a){m.U([+new Date-(h.b.s!==r?h.b.s:g),a].join("*"))},U:function(a){if(encodeURIComponent(l.join("!")+a).length>d.W||5<l.length)m.J(l.join("!")),l=[];l.push(a)},J:function(b){h.b.a.et=6;h.b.a.vh=a.C();h.b.a.ep=b;h.b.i()},I:function(){return function(){l&&l.length&&(m.J(l.join("!")),
l=[])}}};mt.lang.ca()&&""!==c.aet&&e.c("pv-b",function(){b.c(window,"scroll",m.La());b.c(window,"unload",m.I())});return m})();
(function(){var b=mt.e,a=h.k,d=h.load,e=h.qa;h.p.c("pv-b",function(){var g=a.protocol+"//crs.baidu.com/";c.rec&&b.za(function(){for(var l=0,p=c.rp.length;l<p;l++){var m=c.rp[l][0],f=c.rp[l][1],k=b.ra("hm_t_"+m);if(f&&!(2==f&&!k||k&&""!==k.innerHTML))k="",k=Math.round(Math.random()*a.H),k=4==f?g+"hl.js?"+["siteId="+c.id,"planId="+m,"rnd="+k].join("&"):g+"t.js?"+["siteId="+c.id,"planId="+m,"from="+e(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+
k].join("&"),d(k)}})})})();(function(){var b=h.k,a=h.load,d=h.qa;h.p.c("pv-b",function(){if(c.trust&&c.vcard){var e="https://tag.baidu.com/vcard/v.js?"+["siteid="+c.vcard,"url="+encodeURIComponent(document.location.href),"source="+d(),"rnd="+Math.round(Math.random()*b.H),"hm=1"].join("&");a(e)}})})();
(function(){function b(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.X.Ua()+","+h.X.Sa();h.b.i()}}function a(){clearTimeout(C);var b;v&&(b="visible"==document[v]);z&&(b=!document[z]);m="undefined"==typeof b?s:b;if((!p||!f)&&m&&k)y=s,n=+new Date;else if(p&&f&&(!m||!k))y=u,q+=+new Date-n;p=m;f=k;C=setTimeout(a,100)}function d(a){var k=document,b="";if(a in k)b=a;else for(var n=["webkit","ms","moz","o"],d=0;d<n.length;d++){var q=n[d]+a.charAt(0).toUpperCase()+a.slice(1);if(q in k){b=
q;break}}return b}function e(b){if(!("focus"==b.type||"blur"==b.type)||!(b.target&&b.target!=window))k="focus"==b.type||"focusin"==b.type?s:u,a()}var g=mt.event,l=h.p,p=s,m=s,f=s,k=s,w=+new Date,n=w,q=0,y=s,v=d("visibilityState"),z=d("hidden"),C;a();(function(){var b=v.replace(/[vV]isibilityState/,"visibilitychange");g.c(document,b,a);g.c(window,"pageshow",a);g.c(window,"pagehide",a);"object"==typeof document.onfocusin?(g.c(document,"focusin",e),g.c(document,"focusout",e)):(g.c(window,"focus",e),
g.c(window,"blur",e))})();h.X={Ua:function(){return+new Date-w},Sa:function(){return y?+new Date-n+q:q}};l.c("pv-b",function(){g.c(window,"unload",b())});return h.X})();
(function(){var b=mt.lang,a=h.k,d=h.load,e={gb:function(e){if((window._dxt===r||b.d(window._dxt,"Array"))&&"undefined"!==typeof h.b){var l=h.b.L();d([a.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(l)].join(""),e)}},rb:function(a){if(b.d(a,"String")||b.d(a,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",a])}};return h.Ja=e})();
(function(){function b(a,b,n,d){if(!(a===r||b===r||d===r)){if(""===a)return[b,n,d].join("*");a=String(a).split("!");for(var e,f=u,g=0;g<a.length;g++)if(e=a[g].split("*"),String(b)===e[0]){e[1]=n;e[2]=d;a[g]=e.join("*");f=s;break}f||a.push([b,n,d].join("*"));return a.join("!")}}function a(b){for(var e in b)if({}.hasOwnProperty.call(b,e)){var n=b[e];d.d(n,"Object")||d.d(n,"Array")?a(n):b[e]=String(n)}}var d=mt.lang,e=mt.m,g=mt.g,l=h.k,p=h.p,m=h.Ja,f={G:[],Q:0,wa:u,o:{ka:"",page:""},init:function(){f.f=
0;p.c("pv-b",function(){f.Ka();f.Na()});p.c("pv-d",function(){f.Oa();f.o.page=""});p.c("stag-b",function(){h.b.a.api=f.f||f.Q?f.f+"_"+f.Q:"";h.b.a.ct=[decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),f.o.ka,f.o.page].join("!")});p.c("stag-d",function(){h.b.a.api=0;f.f=0;f.Q=0})},Ka:function(){var a=window._hmt||[];if(!a||d.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,b=0;b<arguments.length;b++){var k=arguments[b];d.d(k,"Array")&&(a.cmd[a.id].push(k),"_setAccount"===
k[0]&&(1<k.length&&/^[0-9a-f]{32}$/.test(k[1]))&&(k=k[1],a.id=k,a.cmd[k]=a.cmd[k]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},Na:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],n=/^_track(Event|MobConv|Order|RTEvent)$/,d=0,e=b.length;d<e;d++){var g=b[d];n.test(g[0])?f.G.push(g):f.ga(g)}a.cmd[c.id]={push:f.ga}},Oa:function(){if(0<f.G.length)for(var a=0,b=f.G.length;a<b;a++)f.ga(f.G[a]);f.G=t},ga:function(a){var b=a[0];if(f.hasOwnProperty(b)&&
d.d(f[b],"Function"))f[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(f.f|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],u===a||s===a))f.f|=2,h.b.sa=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){f.f|=4;h.b.a.et=0;h.b.a.ep="";h.b.a.vl=g.N()+g.C();h.b.a.kb=0;h.b.ba?(h.b.a.nv=0,h.b.a.st=4):h.b.ba=s;var b=h.b.a.u,n=h.b.a.su;h.b.a.u=l.protocol+"//"+document.location.host+a[1];f.wa||(h.b.a.su=document.location.href);h.b.i();h.b.a.u=b;
h.b.a.su=n;h.b.s=+new Date}},_trackEvent:function(a){2<a.length&&(f.f|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=d.j(a[1])+"*"+d.j(a[2])+(a[3]?"*"+d.j(a[3]):"")+(a[4]?"*"+d.j(a[4]):""),h.b.i())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],n=a[4]||3;if(0<b&&6>b&&0<n&&4>n){f.Q++;for(var e=(h.b.a.cv||"*").split("!"),g=e.length;g<b-1;g++)e.push("*");e[b-1]=n+"*"+d.j(a[2])+"*"+d.j(a[3]);h.b.a.cv=e.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?h.b.setData("Hm_cv_"+
c.id,encodeURIComponent(a),c.age):h.b.jb("Hm_cv_"+c.id)}}},_setUserTag:function(a){if(!(3>a.length)){var e=d.j(a[1]);a=d.j(a[2]);if(e!==r&&a!==r){var n=decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),n=b(n,e,1,a);h.b.setData("Hm_ct_"+c.id,encodeURIComponent(n),c.age)}}},_setVisitTag:function(a){if(!(3>a.length)){var e=d.j(a[1]);a=d.j(a[2]);if(e!==r&&a!==r){var n=f.o.ka,n=b(n,e,2,a);f.o.ka=n}}},_setPageTag:function(a){if(!(3>a.length)){var e=d.j(a[1]);a=d.j(a[2]);if(e!==r&&a!==r){var n=f.o.page,
n=b(n,e,3,a);f.o.page=n}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"===a[1].charAt(0)?l.protocol+"//"+window.location.host+a[1]:a[1],f.wa=s)},_trackOrder:function(b){b=b[1];d.d(b,"Object")&&(a(b),f.f|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=e.stringify(b),h.b.i())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])f.f|=32,h.b.a.et=93,h.b.a.ep=a,h.b.i()},_trackRTPageview:function(b){b=b[1];d.d(b,"Object")&&(a(b),b=e.stringify(b),
512>=encodeURIComponent(b).length&&(f.f|=64,h.b.a.rt=b))},_trackRTEvent:function(b){b=b[1];if(d.d(b,"Object")){a(b);b=encodeURIComponent(e.stringify(b));var g=function(a){var b=h.b.a.rt;f.f|=128;h.b.a.et=90;h.b.a.rt=a;h.b.i();h.b.a.rt=b},n=b.length;if(900>=n)g.call(this,b);else for(var n=Math.ceil(n/900),q="block|"+Math.round(Math.random()*l.H).toString(16)+"|"+n+"|",m=[],v=0;v<n;v++)m.push(v),m.push(b.substring(900*v,900*v+900)),g.call(this,q+m.join("|")),m=[]}},_setUserId:function(a){a=a[1];m.gb();
m.rb(a)},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],u===a||s===a))h.b.ta=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],u===a||s===a))h.b.F=a}};f.init();h.Ga=f;return h.Ga})();
(function(){function b(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=s,this.a={},this.ta=this.sa=s,this.F=k.F,this.oa=g.ca()&&0<c.aet.length?c.aet.split(","):"",this.ba=u,this.init())}var a=mt.url,d=mt.Aa,e=mt.ia,g=mt.lang,l=mt.cookie,p=mt.g,m=mt.localStorage,f=mt.sessionStorage,k=h.k,w=h.p;b.prototype={da:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},xa:function(a,b){a=a.replace(/^https?:\/\//,
"");return 0===a.indexOf(b)},O:function(b){for(var d=0;d<c.dm.length;d++)if(-1<c.dm[d].indexOf("/")){if(this.xa(b,c.dm[d]))return s}else{var e=a.$(b);if(e&&this.da(e,c.dm[d]))return s}return u},L:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.da(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},Y:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.xa(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+
"/"}return"/"},Wa:function(){if(!document.referrer)return k.w-k.z>c.vdur?1:4;var b=u;this.O(document.referrer)&&this.O(document.location.href)?b=s:(b=a.$(document.referrer),b=this.da(b||"",document.location.hostname));return b?k.w-k.z>c.vdur?1:4:3},getData:function(a){try{return l.get(a)||f.get(a)||m.get(a)}catch(b){}},setData:function(a,b,d){try{l.set(a,b,{domain:this.L(),path:this.Y(),B:d}),d?m.set(a,b,d):f.set(a,b)}catch(e){}},jb:function(a){try{l.set(a,"",{domain:this.L(),path:this.Y(),B:-1}),
f.remove(a),m.remove(a)}catch(b){}},pb:function(){var a,b,d,e,f;k.z=this.getData("Hm_lpvt_"+c.id)||0;13===k.z.length&&(k.z=Math.round(k.z/1E3));b=this.Wa();a=4!==b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){e=d.split(",");for(f=e.length-1;0<=f;f--)13===e[f].length&&(e[f]=""+Math.round(e[f]/1E3));for(;2592E3<k.w-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(k.w);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=k.w,e="",f=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,
k.w);d=l.hb(this.L(),this.Y());if(0===c.nv&&this.O(document.location.href)&&(""===document.referrer||this.O(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=e;this.a.lv=f},ob:function(){for(var a=[],b=this.a.et,d=+new Date,e=0,f=k.Ba.length;e<f;e++){var g=k.Ba[e],l=this.a[g];"undefined"!==typeof l&&""!==l&&("tt"!==g||"tt"===g&&0===b)&&(("ct"!==g||"ct"===g&&0===b)&&("kb"!==g||"kb"===g&&3===b))&&a.push(g+"="+encodeURIComponent(l))}switch(b){case 0:a.push("sn="+k.A);this.a.rt&&
a.push("rt="+encodeURIComponent(this.a.rt));break;case 3:a.push("sn="+k.A);break;case 5:a.push("sn="+k.A);a.push("_lpt="+this.s);a.push("_ct="+d);break;case 6:a.push("sn="+k.A);a.push("_lpt="+this.s);a.push("_ct="+d);break;case 85:a.push("sn="+k.A);break;case 90:this.a.rt&&a.push("rt="+this.a.rt)}return a.join("&")},qb:function(){this.pb();this.a.si=c.id;this.a.hca=r;this.a.su=document.referrer;this.a.hh=window.location.hash;this.a.ds=p.lb;this.a.cl=p.colorDepth+"-bit";this.a.ln=String(p.language).toLowerCase();
this.a.ja=p.javaEnabled?1:0;this.a.ck=p.cookieEnabled?1:0;this.a.lo="number"===typeof _bdhm_top?1:0;this.a.fl=e.Ya();this.a.v="1.2.42";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.a.tt=document.title||"";this.a.vl=p.N()+p.C();var b=document.location.href;this.a.cm=a.l(b,k.bb)||"";this.a.cp=a.l(b,k.cb)||a.l(b,k.wb)||"";this.a.cw=a.l(b,k.ab)||a.l(b,k.yb)||"";this.a.ci=a.l(b,k.Za)||a.l(b,k.vb)||"";this.a.cf=a.l(b,k.eb)||a.l(b,k.xb)||"";this.a.cu=a.l(b,k.$a)||a.l(b,k.ub)||""},init:function(){try{this.qb(),
0===this.a.nv?this.nb():this.ha(".*"),h.b=this,this.Ia(),w.K("pv-b"),this.mb()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));d.log(k.ea+"//"+k.ya+"?"+b.join("&"))}},mb:function(){function a(){w.K("pv-d")}this.sa?(this.ba=s,this.a.et=0,this.a.ep="",this.a.vl=p.N()+p.C(),this.i(a)):a();this.s=+new Date},i:function(a){if(this.ta){var b=this;b.a.rnd=Math.round(Math.random()*k.H);
w.K("stag-b");var e=k.ea+"//"+k.ya+"?"+b.ob();w.K("stag-d");b.Ea(e);d.log(e,function(d){b.ha(d);g.d(a,"Function")&&a.call(b)})}},Ia:function(){var b=document.location.hash.substring(1),d=RegExp(c.id),e=a.$(document.referrer)===k.Fa?1:0,f=a.l(b,"jn"),g=/^heatlink$|^select$|^pageclick$/.test(f);b&&(d.test(b)&&e&&g)&&(this.a.rnd=Math.round(Math.random()*k.H),b=document.createElement("script"),b.setAttribute("type","text/javascript"),b.setAttribute("charset","utf-8"),b.setAttribute("src",k.protocol+"//"+
c.js+f+".js?"+this.a.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(b,f))},Ea:function(a){var b=f.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");f.set("Hm_unsent_"+c.id,b)},ha:function(a){var b=f.get("Hm_unsent_"+c.id)||"";b&&(a=encodeURIComponent(a.replace(/^https?:\/\//,"")),a=RegExp(a.replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),(b=b.replace(a,"").replace(/,$/,
""))?f.set("Hm_unsent_"+c.id,b):f.remove("Hm_unsent_"+c.id))},nb:function(){var a=this,b=f.get("Hm_unsent_"+c.id);if(b)for(var b=b.split(","),e=function(b){d.log(k.ea+"//"+decodeURIComponent(b),function(b){a.ha(b)})},g=0,l=b.length;g<l;g++)e(b[g])}};return new b})();var A=h.k,B=h.load;if(c.apps){var D=[A.protocol,"//ers.baidu.com/app/s.js?"];D.push(c.apps);B(D.join(""))}
(function(){var b=mt.event,a=mt.lang,d=h.k;if(c.kbtrk&&"undefined"!==typeof h.b){h.b.a.kb=a.va(h.b.a.kb)?h.b.a.kb:0;var e=function(){h.b.a.et=85;h.b.a.ep=h.b.a.kb;h.b.i()};b.c(document,"keyup",function(){h.b.a.kb++});b.c(window,"unload",function(){e()});setInterval(e,d.ib)}})();var E=h.k,F=h.load;c.pt&&F([E.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));var G=h.k,H=h.load;c.lxb&&H([G.protocol,"//lxbjs.baidu.com/lxb.js?sid=",c.lxb].join(""));var I=h.load,J=h.k.protocol;
if(c.qiao){for(var K=[J+"//goutong.baidu.com/site/"],L=c.id,M=5381,N=L.length,O=0;O<N;O++)M=(33*M+Number(L.charCodeAt(O)))%4294967296;2147483648<M&&(M-=2147483648);K.push(M%1E3+"/");K.push(c.id+"/b.js");K.push("?siteId="+c.qiao);I(K.join(""))}
(function(){var b=mt.g,a=mt.lang,d=mt.event,e=mt.m;if("undefined"!==typeof h.b&&(c.med||(!b.ua||7<b.fb)&&c.cvcc)){var g,l,p,m,f=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},k=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===u)return u},w=function(b,d){var f={};f.n=g;f.t="clk";f.v=b;if(d){var k=d.getAttribute("href"),l=d.getAttribute("onclick")?""+d.getAttribute("onclick"):t,m=d.getAttribute("id")||"";p.test(k)?(f.sn="mediate",
f.snv=k):a.d(l,"String")&&p.test(l)&&(f.sn="wrap",f.snv=l);f.id=m}h.b.a.et=86;h.b.a.ep=e.stringify(f);h.b.i();for(f=+new Date;400>=+new Date-f;);};if(c.med)l="/zoosnet",g="swt",p=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,m={click:function(){for(var a=[],b=f(document.getElementsByTagName("a")),b=[].concat.apply(b,f(document.getElementsByTagName("area"))),b=[].concat.apply(b,f(document.getElementsByTagName("img"))),d,e,g=0,k=b.length;g<k;g++)d=b[g],e=d.getAttribute("onclick"),
d=d.getAttribute("href"),(p.test(e)||p.test(d))&&a.push(b[g]);return a}};else if(c.cvcc){l="/other-comm";g="other";p=c.cvcc.q||r;var n=c.cvcc.id||r;m={click:function(){for(var a=[],b=f(document.getElementsByTagName("a")),b=[].concat.apply(b,f(document.getElementsByTagName("area"))),b=[].concat.apply(b,f(document.getElementsByTagName("img"))),d,e,g,k=0,l=b.length;k<l;k++)d=b[k],p!==r?(e=d.getAttribute("onclick"),g=d.getAttribute("href"),n?(d=d.getAttribute("id"),(p.test(e)||p.test(g)||n.test(d))&&
a.push(b[k])):(p.test(e)||p.test(g))&&a.push(b[k])):n!==r&&(d=d.getAttribute("id"),n.test(d)&&a.push(b[k]));return a}}}if("undefined"!==typeof m&&"undefined"!==typeof p){var q;l+=/\/$/.test(l)?"":"/";var y=function(b,d){if(q===d)return w(l+b,d),u;if(a.d(d,"Array")||a.d(d,"NodeList"))for(var e=0,f=d.length;e<f;e++)if(q===d[e])return w(l+b+"/"+(e+1),d[e]),u};d.c(document,"mousedown",function(b){b=b||window.event;q=b.target||b.srcElement;var d={};for(k(m,function(b,e){d[b]=a.d(e,"Function")?e():document.getElementById(e)});q&&
q!==document&&k(d,y)!==u;)q=q.parentNode})}}})();(function(){var b=mt.e,a=mt.lang,d=mt.event,e=mt.m;if("undefined"!==typeof h.b&&a.d(c.cvcf,"Array")&&0<c.cvcf.length){var g={Ca:function(){for(var a=c.cvcf.length,e,m=0;m<a;m++)(e=b.ra(decodeURIComponent(c.cvcf[m])))&&d.c(e,"click",g.Ma())},Ma:function(){return function(){h.b.a.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.b.a.ep=e.stringify(a);h.b.i()}}};b.za(function(){g.Ca()})}})();
(function(){var b=mt.event,a=mt.m;if(c.med&&"undefined"!==typeof h.b){var d=+new Date,e={n:"anti",sb:0,kb:0,clk:0},g=function(){h.b.a.et=86;h.b.a.ep=a.stringify(e);h.b.i()};b.c(document,"click",function(){e.clk++});b.c(document,"keyup",function(){e.kb=1});b.c(window,"scroll",function(){e.sb++});b.c(window,"unload",function(){e.t=+new Date-d;g()});b.c(window,"load",function(){setTimeout(g,5E3)})}})();})();
