/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
    void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});
/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
})(this, function () {
  'use strict';

  function e(e) {
    return e && '[object Function]' === {}.toString.call(e)
  }

  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var o = getComputedStyle(e, null);
    return t ? o[t] : o
  }

  function o(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host
  }

  function n(e) {
    if (!e) return document.body;
    switch (e.nodeName) {
      case 'HTML':
      case 'BODY':
        return e.ownerDocument.body;
      case '#document':
        return e.body;
    }
    var i = t(e),
      r = i.overflow,
      p = i.overflowX,
      s = i.overflowY;
    return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
  }

  function r(e) {
    return 11 === e ? re : 10 === e ? pe : re || pe
  }

  function p(e) {
    if (!e) return document.documentElement;
    for (var o = r(10) ? document.body : null, n = e.offsetParent; n === o && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
  }

  function s(e) {
    var t = e.nodeName;
    return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e)
  }

  function d(e) {
    return null === e.parentNode ? e : d(e.parentNode)
  }

  function a(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
    var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      n = o ? e : t,
      i = o ? t : e,
      r = document.createRange();
    r.setStart(n, 0), r.setEnd(i, 0);
    var l = r.commonAncestorContainer;
    if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l);
    var f = d(e);
    return f.host ? a(f.host, t) : a(e, d(t).host)
  }

  function l(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
      o = 'top' === t ? 'scrollTop' : 'scrollLeft',
      n = e.nodeName;
    if ('BODY' === n || 'HTML' === n) {
      var i = e.ownerDocument.documentElement,
        r = e.ownerDocument.scrollingElement || i;
      return r[o]
    }
    return e[o]
  }

  function f(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      n = l(t, 'top'),
      i = l(t, 'left'),
      r = o ? -1 : 1;
    return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e
  }

  function m(e, t) {
    var o = 'x' === t ? 'Left' : 'Top',
      n = 'Left' == o ? 'Right' : 'Bottom';
    return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10)
  }

  function h(e, t, o, n) {
    return $(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? o['offset' + e] + n['margin' + ('Height' === e ? 'Top' : 'Left')] + n['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
  }

  function c() {
    var e = document.body,
      t = document.documentElement,
      o = r(10) && getComputedStyle(t);
    return {
      height: h('Height', e, t, o),
      width: h('Width', e, t, o)
    }
  }

  function g(e) {
    return le({}, e, {
      right: e.left + e.width,
      bottom: e.top + e.height
    })
  }

  function u(e) {
    var o = {};
    try {
      if (r(10)) {
        o = e.getBoundingClientRect();
        var n = l(e, 'top'),
          i = l(e, 'left');
        o.top += n, o.left += i, o.bottom += n, o.right += i
      } else o = e.getBoundingClientRect()
    } catch (t) {}
    var p = {
        left: o.left,
        top: o.top,
        width: o.right - o.left,
        height: o.bottom - o.top
      },
      s = 'HTML' === e.nodeName ? c() : {},
      d = s.width || e.clientWidth || p.right - p.left,
      a = s.height || e.clientHeight || p.bottom - p.top,
      f = e.offsetWidth - d,
      h = e.offsetHeight - a;
    if (f || h) {
      var u = t(e);
      f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h
    }
    return g(p)
  }

  function b(e, o) {
    var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      p = r(10),
      s = 'HTML' === o.nodeName,
      d = u(e),
      a = u(o),
      l = n(e),
      m = t(o),
      h = parseFloat(m.borderTopWidth, 10),
      c = parseFloat(m.borderLeftWidth, 10);
    i && 'HTML' === o.nodeName && (a.top = $(a.top, 0), a.left = $(a.left, 0));
    var b = g({
      top: d.top - a.top - h,
      left: d.left - a.left - c,
      width: d.width,
      height: d.height
    });
    if (b.marginTop = 0, b.marginLeft = 0, !p && s) {
      var y = parseFloat(m.marginTop, 10),
        w = parseFloat(m.marginLeft, 10);
      b.top -= h - y, b.bottom -= h - y, b.left -= c - w, b.right -= c - w, b.marginTop = y, b.marginLeft = w
    }
    return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b
  }

  function y(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      o = e.ownerDocument.documentElement,
      n = b(e, o),
      i = $(o.clientWidth, window.innerWidth || 0),
      r = $(o.clientHeight, window.innerHeight || 0),
      p = t ? 0 : l(o),
      s = t ? 0 : l(o, 'left'),
      d = {
        top: p - n.top + n.marginTop,
        left: s - n.left + n.marginLeft,
        width: i,
        height: r
      };
    return g(d)
  }

  function w(e) {
    var n = e.nodeName;
    return 'BODY' === n || 'HTML' === n ? !1 : 'fixed' === t(e, 'position') || w(o(e))
  }

  function E(e) {
    if (!e || !e.parentElement || r()) return document.documentElement;
    for (var o = e.parentElement; o && 'none' === t(o, 'transform');) o = o.parentElement;
    return o || document.documentElement
  }

  function v(e, t, i, r) {
    var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
      s = {
        top: 0,
        left: 0
      },
      d = p ? E(e) : a(e, t);
    if ('viewport' === r) s = y(d, p);
    else {
      var l;
      'scrollParent' === r ? (l = n(o(t)), 'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r;
      var f = b(l, d, p);
      if ('HTML' === l.nodeName && !w(d)) {
        var m = c(),
          h = m.height,
          g = m.width;
        s.top += f.top - f.marginTop, s.bottom = h + f.top, s.left += f.left - f.marginLeft, s.right = g + f.left
      } else s = f
    }
    return s.left += i, s.top += i, s.right -= i, s.bottom -= i, s
  }

  function x(e) {
    var t = e.width,
      o = e.height;
    return t * o
  }

  function O(e, t, o, n, i) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf('auto')) return e;
    var p = v(o, n, r, i),
      s = {
        top: {
          width: p.width,
          height: t.top - p.top
        },
        right: {
          width: p.right - t.right,
          height: p.height
        },
        bottom: {
          width: p.width,
          height: p.bottom - t.bottom
        },
        left: {
          width: t.left - p.left,
          height: p.height
        }
      },
      d = Object.keys(s).map(function (e) {
        return le({
          key: e
        }, s[e], {
          area: x(s[e])
        })
      }).sort(function (e, t) {
        return t.area - e.area
      }),
      a = d.filter(function (e) {
        var t = e.width,
          n = e.height;
        return t >= o.clientWidth && n >= o.clientHeight
      }),
      l = 0 < a.length ? a[0].key : d[0].key,
      f = e.split('-')[1];
    return l + (f ? '-' + f : '')
  }

  function L(e, t, o) {
    var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
      i = n ? E(t) : a(t, o);
    return b(o, i, n)
  }

  function S(e) {
    var t = getComputedStyle(e),
      o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
      n = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
      i = {
        width: e.offsetWidth + n,
        height: e.offsetHeight + o
      };
    return i
  }

  function T(e) {
    var t = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom'
    };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e]
    })
  }

  function C(e, t, o) {
    o = o.split('-')[0];
    var n = S(e),
      i = {
        width: n.width,
        height: n.height
      },
      r = -1 !== ['right', 'left'].indexOf(o),
      p = r ? 'top' : 'left',
      s = r ? 'left' : 'top',
      d = r ? 'height' : 'width',
      a = r ? 'width' : 'height';
    return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i
  }

  function D(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0]
  }

  function N(e, t, o) {
    if (Array.prototype.findIndex) return e.findIndex(function (e) {
      return e[t] === o
    });
    var n = D(e, function (e) {
      return e[t] === o
    });
    return e.indexOf(n)
  }

  function P(t, o, n) {
    var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
    return i.forEach(function (t) {
      t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      var n = t['function'] || t.fn;
      t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t))
    }), o
  }

  function k() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {}
      };
      e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
    }
  }

  function W(e, t) {
    return e.some(function (e) {
      var o = e.name,
        n = e.enabled;
      return n && o === t
    })
  }

  function B(e) {
    for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
      var i = t[n],
        r = i ? '' + i + o : e;
      if ('undefined' != typeof document.body.style[r]) return r
    }
    return null
  }

  function H() {
    return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
  }

  function A(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window
  }

  function M(e, t, o, i) {
    var r = 'BODY' === e.nodeName,
      p = r ? e.ownerDocument.defaultView : e;
    p.addEventListener(t, o, {
      passive: !0
    }), r || M(n(p.parentNode), t, o, i), i.push(p)
  }

  function I(e, t, o, i) {
    o.updateBound = i, A(e).addEventListener('resize', o.updateBound, {
      passive: !0
    });
    var r = n(e);
    return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
  }

  function F() {
    this.state.eventsEnabled || (this.state = I(this.reference, this.options, this.state, this.scheduleUpdate))
  }

  function R(e, t) {
    return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener('scroll', t.updateBound)
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
  }

  function U() {
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state))
  }

  function Y(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
  }

  function j(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n
    })
  }

  function K(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = t[o];
      !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o])
    })
  }

  function q(e, t, o) {
    var n = D(e, function (e) {
        var o = e.name;
        return o === t
      }),
      i = !!n && e.some(function (e) {
        return e.name === o && e.enabled && e.order < n.order
      });
    if (!i) {
      var r = '`' + t + '`';
      console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
    }
    return i
  }

  function G(e) {
    return 'end' === e ? 'start' : 'start' === e ? 'end' : e
  }

  function z(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      o = me.indexOf(e),
      n = me.slice(o + 1).concat(me.slice(0, o));
    return t ? n.reverse() : n
  }

  function V(e, t, o, n) {
    var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
      r = +i[1],
      p = i[2];
    if (!r) return e;
    if (0 === p.indexOf('%')) {
      var s;
      switch (p) {
        case '%p':
          s = o;
          break;
        case '%':
        case '%r':
        default:
          s = n;
      }
      var d = g(s);
      return d[t] / 100 * r
    }
    if ('vh' === p || 'vw' === p) {
      var a;
      return a = 'vh' === p ? $(document.documentElement.clientHeight, window.innerHeight || 0) : $(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r
    }
    return r
  }

  function _(e, t, o, n) {
    var i = [0, 0],
      r = -1 !== ['right', 'left'].indexOf(n),
      p = e.split(/(\+|\-)/).map(function (e) {
        return e.trim()
      }),
      s = p.indexOf(D(p, function (e) {
        return -1 !== e.search(/,|\s/)
      }));
    p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    var d = /\s*,\s*|\s+/,
      a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
    return a = a.map(function (e, n) {
      var i = (1 === n ? !r : r) ? 'height' : 'width',
        p = !1;
      return e.reduce(function (e, t) {
        return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t)
      }, []).map(function (e) {
        return V(e, i, t, o)
      })
    }), a.forEach(function (e, t) {
      e.forEach(function (o, n) {
        Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1))
      })
    }), i
  }

  function X(e, t) {
    var o, n = t.offset,
      i = e.placement,
      r = e.offsets,
      p = r.popper,
      s = r.reference,
      d = i.split('-')[0];
    return o = Y(+n) ? [+n, 0] : _(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e
  }
  for (var J = Math.min, Q = Math.round, Z = Math.floor, $ = Math.max, ee = 'undefined' != typeof window && 'undefined' != typeof document, te = ['Edge', 'Trident', 'Firefox'], oe = 0, ne = 0; ne < te.length; ne += 1)
    if (ee && 0 <= navigator.userAgent.indexOf(te[ne])) {
      oe = 1;
      break
    }
  var i = ee && window.Promise,
    ie = i ? function (e) {
      var t = !1;
      return function () {
        t || (t = !0, window.Promise.resolve().then(function () {
          t = !1, e()
        }))
      }
    } : function (e) {
      var t = !1;
      return function () {
        t || (t = !0, setTimeout(function () {
          t = !1, e()
        }, oe))
      }
    },
    re = ee && !!(window.MSInputMethodContext && document.documentMode),
    pe = ee && /MSIE 10/.test(navigator.userAgent),
    se = function (e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    },
    de = function () {
      function e(e, t) {
        for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
      }
      return function (t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
      }
    }(),
    ae = function (e, t, o) {
      return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = o, e
    },
    le = Object.assign || function (e) {
      for (var t, o = 1; o < arguments.length; o++)
        for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return e
    },
    fe = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
    me = fe.slice(3),
    he = {
      FLIP: 'flip',
      CLOCKWISE: 'clockwise',
      COUNTERCLOCKWISE: 'counterclockwise'
    },
    ce = function () {
      function t(o, n) {
        var i = this,
          r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        se(this, t), this.scheduleUpdate = function () {
          return requestAnimationFrame(i.update)
        }, this.update = ie(this.update.bind(this)), this.options = le({}, t.Defaults, r), this.state = {
          isDestroyed: !1,
          isCreated: !1,
          scrollParents: []
        }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
          i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
        }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
          return le({
            name: e
          }, i.options.modifiers[e])
        }).sort(function (e, t) {
          return e.order - t.order
        }), this.modifiers.forEach(function (t) {
          t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
        }), this.update();
        var p = this.options.eventsEnabled;
        p && this.enableEventListeners(), this.state.eventsEnabled = p
      }
      return de(t, [{
        key: 'update',
        value: function () {
          return k.call(this)
        }
      }, {
        key: 'destroy',
        value: function () {
          return H.call(this)
        }
      }, {
        key: 'enableEventListeners',
        value: function () {
          return F.call(this)
        }
      }, {
        key: 'disableEventListeners',
        value: function () {
          return U.call(this)
        }
      }]), t
    }();
  return ce.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ce.placements = fe, ce.Defaults = {
    placement: 'bottom',
    positionFixed: !1,
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function () {},
    onUpdate: function () {},
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function (e) {
          var t = e.placement,
            o = t.split('-')[0],
            n = t.split('-')[1];
          if (n) {
            var i = e.offsets,
              r = i.reference,
              p = i.popper,
              s = -1 !== ['bottom', 'top'].indexOf(o),
              d = s ? 'left' : 'top',
              a = s ? 'width' : 'height',
              l = {
                start: ae({}, d, r[d]),
                end: ae({}, d, r[d] + r[a] - p[a])
              };
            e.offsets.popper = le({}, p, l[n])
          }
          return e
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: X,
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function (e, t) {
          var o = t.boundariesElement || p(e.instance.popper);
          e.instance.reference === o && (o = p(o));
          var n = B('transform'),
            i = e.instance.popper.style,
            r = i.top,
            s = i.left,
            d = i[n];
          i.top = '', i.left = '', i[n] = '';
          var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
          i.top = r, i.left = s, i[n] = d, t.boundaries = a;
          var l = t.priority,
            f = e.offsets.popper,
            m = {
              primary: function (e) {
                var o = f[e];
                return f[e] < a[e] && !t.escapeWithReference && (o = $(f[e], a[e])), ae({}, e, o)
              },
              secondary: function (e) {
                var o = 'right' === e ? 'left' : 'top',
                  n = f[o];
                return f[e] > a[e] && !t.escapeWithReference && (n = J(f[o], a[e] - ('right' === e ? f.width : f.height))), ae({}, o, n)
              }
            };
          return l.forEach(function (e) {
            var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
            f = le({}, f, m[t](e))
          }), e.offsets.popper = f, e
        },
        priority: ['left', 'right', 'top', 'bottom'],
        padding: 5,
        boundariesElement: 'scrollParent'
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function (e) {
          var t = e.offsets,
            o = t.popper,
            n = t.reference,
            i = e.placement.split('-')[0],
            r = Z,
            p = -1 !== ['top', 'bottom'].indexOf(i),
            s = p ? 'right' : 'bottom',
            d = p ? 'left' : 'top',
            a = p ? 'width' : 'height';
          return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function (e, o) {
          var n;
          if (!q(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
          var i = o.element;
          if ('string' == typeof i) {
            if (i = e.instance.popper.querySelector(i), !i) return e;
          } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
          var r = e.placement.split('-')[0],
            p = e.offsets,
            s = p.popper,
            d = p.reference,
            a = -1 !== ['left', 'right'].indexOf(r),
            l = a ? 'height' : 'width',
            f = a ? 'Top' : 'Left',
            m = f.toLowerCase(),
            h = a ? 'left' : 'top',
            c = a ? 'bottom' : 'right',
            u = S(i)[l];
          d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper);
          var b = d[m] + d[l] / 2 - u / 2,
            y = t(e.instance.popper),
            w = parseFloat(y['margin' + f], 10),
            E = parseFloat(y['border' + f + 'Width'], 10),
            v = b - e.offsets.popper[m] - w - E;
          return v = $(J(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, ae(n, m, Q(v)), ae(n, h, ''), n), e
        },
        element: '[x-arrow]'
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function (e, t) {
          if (W(e.instance.modifiers, 'inner')) return e;
          if (e.flipped && e.placement === e.originalPlacement) return e;
          var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
            n = e.placement.split('-')[0],
            i = T(n),
            r = e.placement.split('-')[1] || '',
            p = [];
          switch (t.behavior) {
            case he.FLIP:
              p = [n, i];
              break;
            case he.CLOCKWISE:
              p = z(n);
              break;
            case he.COUNTERCLOCKWISE:
              p = z(n, !0);
              break;
            default:
              p = t.behavior;
          }
          return p.forEach(function (s, d) {
            if (n !== s || p.length === d + 1) return e;
            n = e.placement.split('-')[0], i = T(n);
            var a = e.offsets.popper,
              l = e.offsets.reference,
              f = Z,
              m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom),
              h = f(a.left) < f(o.left),
              c = f(a.right) > f(o.right),
              g = f(a.top) < f(o.top),
              u = f(a.bottom) > f(o.bottom),
              b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u,
              y = -1 !== ['top', 'bottom'].indexOf(n),
              w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u);
            (m || b || w) && (e.flipped = !0, (m || b) && (n = p[d + 1]), w && (r = G(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip'))
          }), e
        },
        behavior: 'flip',
        padding: 5,
        boundariesElement: 'viewport'
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function (e) {
          var t = e.placement,
            o = t.split('-')[0],
            n = e.offsets,
            i = n.popper,
            r = n.reference,
            p = -1 !== ['left', 'right'].indexOf(o),
            s = -1 === ['top', 'left'].indexOf(o);
          return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function (e) {
          if (!q(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
          var t = e.offsets.reference,
            o = D(e.instance.modifiers, function (e) {
              return 'preventOverflow' === e.name
            }).boundaries;
          if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
            if (!0 === e.hide) return e;
            e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
          } else {
            if (!1 === e.hide) return e;
            e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
          }
          return e
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function (e, t) {
          var o = t.x,
            n = t.y,
            i = e.offsets.popper,
            r = D(e.instance.modifiers, function (e) {
              return 'applyStyle' === e.name
            }).gpuAcceleration;
          void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
          var s, d, a = void 0 === r ? t.gpuAcceleration : r,
            l = p(e.instance.popper),
            f = u(l),
            m = {
              position: i.position
            },
            h = {
              left: Z(i.left),
              top: Q(i.top),
              bottom: Q(i.bottom),
              right: Z(i.right)
            },
            c = 'bottom' === o ? 'top' : 'bottom',
            g = 'right' === n ? 'left' : 'right',
            b = B('transform');
          if (d = 'bottom' == c ? -f.height + h.bottom : h.top, s = 'right' == g ? -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform';
          else {
            var y = 'bottom' == c ? -1 : 1,
              w = 'right' == g ? -1 : 1;
            m[c] = d * y, m[g] = s * w, m.willChange = c + ', ' + g
          }
          var E = {
            "x-placement": e.placement
          };
          return e.attributes = le({}, E, e.attributes), e.styles = le({}, m, e.styles), e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles), e
        },
        gpuAcceleration: !0,
        x: 'bottom',
        y: 'right'
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function (e) {
          return j(e.instance.popper, e.styles), K(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles), e
        },
        onLoad: function (e, t, o, n, i) {
          var r = L(i, t, e, o.positionFixed),
            p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
          return t.setAttribute('x-placement', p), j(t, {
            position: o.positionFixed ? 'fixed' : 'absolute'
          }), o
        },
        gpuAcceleration: void 0
      }
    }
  }, ce
});

/*!
  * Bootstrap v4.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,h){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},e=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),e.forEach(function(t){var e,n,i;e=r,i=o[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return r}e=e&&e.hasOwnProperty("default")?e.default:e,h=h&&h.hasOwnProperty("default")?h.default:h;var r,n,o,a,c,u,f,d,g,_,m,p,v,y,E,C,T,b,S,I,A,D,w,N,O,k,P,j,H,L,R,x,W,U,q,F,K,M,Q,B,V,Y,z,J,Z,G,$,X,tt,et,nt,it,rt,ot,st,at,lt,ct,ht,ut,ft,dt,gt,_t,mt,pt,vt,yt,Et,Ct,Tt,bt,St,It,At,Dt,wt,Nt,Ot,kt,Pt,jt,Ht,Lt,Rt,xt,Wt,Ut,qt,Ft,Kt,Mt,Qt,Bt,Vt,Yt,zt,Jt,Zt,Gt,$t,Xt,te,ee,ne,ie,re,oe,se,ae,le,ce,he,ue,fe,de,ge,_e,me,pe,ve,ye,Ee,Ce,Te,be,Se,Ie,Ae,De,we,Ne,Oe,ke,Pe,je,He,Le,Re,xe,We,Ue,qe,Fe,Ke,Me,Qe,Be,Ve,Ye,ze,Je,Ze,Ge,$e,Xe,tn,en,nn,rn,on,sn,an,ln,cn,hn,un,fn,dn,gn,_n,mn,pn,vn,yn,En,Cn,Tn,bn,Sn,In,An,Dn,wn,Nn,On,kn,Pn,jn,Hn,Ln,Rn,xn,Wn,Un,qn,Fn=function(i){var e="transitionend";function t(t){var e=this,n=!1;return i(this).one(l.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||l.triggerTransitionEnd(e)},t),this}var l={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");e&&"#"!==e||(e=t.getAttribute("href")||"");try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=i(t).css("transition-duration");return parseFloat(e)?(e=e.split(",")[0],1e3*parseFloat(e)):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){i(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var r=n[i],o=e[i],s=o&&l.isElement(o)?"element":(a=o,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(r).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+r+'".')}var a}};return i.fn.emulateTransitionEnd=t,i.event.special[l.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(i(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},l}(e),Kn=(n="alert",a="."+(o="bs.alert"),c=(r=e).fn[n],u={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",g="show",_=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){r.removeData(this._element,o),this._element=null},t._getRootElement=function(t){var e=Fn.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=r(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=r.Event(u.CLOSE);return r(t).trigger(e),e},t._removeElement=function(e){var n=this;if(r(e).removeClass(g),r(e).hasClass(d)){var t=Fn.getTransitionDurationFromElement(e);r(e).one(Fn.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){r(t).detach().trigger(u.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=r(this),e=t.data(o);e||(e=new i(this),t.data(o,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),i}(),r(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',_._handleDismiss(new _)),r.fn[n]=_._jQueryInterface,r.fn[n].Constructor=_,r.fn[n].noConflict=function(){return r.fn[n]=c,_._jQueryInterface},_),Mn=(p="button",y="."+(v="bs.button"),E=".data-api",C=(m=e).fn[p],T="active",b="btn",I='[data-toggle^="button"]',A='[data-toggle="buttons"]',D="input",w=".active",N=".btn",O={CLICK_DATA_API:"click"+y+E,FOCUS_BLUR_DATA_API:(S="focus")+y+E+" blur"+y+E},k=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=m(this._element).closest(A)[0];if(n){var i=this._element.querySelector(D);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(T))t=!1;else{var r=n.querySelector(w);r&&m(r).removeClass(T)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(T),m(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(T)),t&&m(this._element).toggleClass(T)},t.dispose=function(){m.removeData(this._element,v),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=m(this).data(v);t||(t=new n(this),m(this).data(v,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),n}(),m(document).on(O.CLICK_DATA_API,I,function(t){t.preventDefault();var e=t.target;m(e).hasClass(b)||(e=m(e).closest(N)),k._jQueryInterface.call(m(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,I,function(t){var e=m(t.target).closest(N)[0];m(e).toggleClass(S,/^focus(in)?$/.test(t.type))}),m.fn[p]=k._jQueryInterface,m.fn[p].Constructor=k,m.fn[p].noConflict=function(){return m.fn[p]=C,k._jQueryInterface},k),Qn=(j="carousel",L="."+(H="bs.carousel"),R=".data-api",x=(P=e).fn[j],W={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},q="next",F="prev",K="left",M="right",Q={SLIDE:"slide"+L,SLID:"slid"+L,KEYDOWN:"keydown"+L,MOUSEENTER:"mouseenter"+L,MOUSELEAVE:"mouseleave"+L,TOUCHEND:"touchend"+L,LOAD_DATA_API:"load"+L+R,CLICK_DATA_API:"click"+L+R},B="carousel",V="active",Y="slide",z="carousel-item-right",J="carousel-item-left",Z="carousel-item-next",G="carousel-item-prev",$=".active",X=".active.carousel-item",tt=".carousel-item",et=".carousel-item-next, .carousel-item-prev",nt=".carousel-indicators",it="[data-slide], [data-slide-to]",rt='[data-ride="carousel"]',ot=function(){function o(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(e),this._element=P(t)[0],this._indicatorsElement=this._element.querySelector(nt),this._addEventListeners()}var t=o.prototype;return t.next=function(){this._isSliding||this._slide(q)},t.nextWhenVisible=function(){!document.hidden&&P(this._element).is(":visible")&&"hidden"!==P(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(F)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(et)&&(Fn.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(X);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)P(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?q:F;this._slide(i,this._items[t])}},t.dispose=function(){P(this._element).off(L),P.removeData(this._element,H),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},W,t),Fn.typeCheckConfig(j,t,U),t},t._addEventListeners=function(){var e=this;this._config.keyboard&&P(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(P(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&P(this._element).on(Q.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(tt)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===q,i=t===F,r=this._getItemIndex(e),o=this._items.length-1;if((i&&0===r||n&&r===o)&&!this._config.wrap)return e;var s=(r+(t===F?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(X)),r=P.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return P(this._element).trigger(r),r},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll($));P(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&P(n).addClass(V)}},t._slide=function(t,e){var n,i,r,o=this,s=this._element.querySelector(X),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(t===q?(n=J,i=Z,r=K):(n=z,i=G,r=M),l&&P(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,r).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=P.Event(Q.SLID,{relatedTarget:l,direction:r,from:a,to:c});if(P(this._element).hasClass(Y)){P(l).addClass(i),Fn.reflow(l),P(s).addClass(n),P(l).addClass(n);var f=Fn.getTransitionDurationFromElement(s);P(s).one(Fn.TRANSITION_END,function(){P(l).removeClass(n+" "+i).addClass(V),P(s).removeClass(V+" "+i+" "+n),o._isSliding=!1,setTimeout(function(){return P(o._element).trigger(u)},0)}).emulateTransitionEnd(f)}else P(s).removeClass(V),P(l).addClass(V),this._isSliding=!1,P(this._element).trigger(u);h&&this.cycle()}},o._jQueryInterface=function(i){return this.each(function(){var t=P(this).data(H),e=l({},W,P(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new o(this,e),P(this).data(H,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&(t.pause(),t.cycle())})},o._dataApiClickHandler=function(t){var e=Fn.getSelectorFromElement(this);if(e){var n=P(e)[0];if(n&&P(n).hasClass(B)){var i=l({},P(n).data(),P(this).data()),r=this.getAttribute("data-slide-to");r&&(i.interval=!1),o._jQueryInterface.call(P(n),i),r&&P(n).data(H).to(r),t.preventDefault()}}},s(o,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return W}}]),o}(),P(document).on(Q.CLICK_DATA_API,it,ot._dataApiClickHandler),P(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(rt)),e=0,n=t.length;e<n;e++){var i=P(t[e]);ot._jQueryInterface.call(i,i.data())}}),P.fn[j]=ot._jQueryInterface,P.fn[j].Constructor=ot,P.fn[j].noConflict=function(){return P.fn[j]=x,ot._jQueryInterface},ot),Bn=(at="collapse",ct="."+(lt="bs.collapse"),ht=(st=e).fn[at],ut={toggle:!0,parent:""},ft={toggle:"boolean",parent:"(string|element)"},dt={SHOW:"show"+ct,SHOWN:"shown"+ct,HIDE:"hide"+ct,HIDDEN:"hidden"+ct,CLICK_DATA_API:"click"+ct+".data-api"},gt="show",_t="collapse",mt="collapsing",pt="collapsed",vt="width",yt="height",Et=".show, .collapsing",Ct='[data-toggle="collapse"]',Tt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=st.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(Ct)),i=0,r=n.length;i<r;i++){var o=n[i],s=Fn.getSelectorFromElement(o),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(o))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){st(this._element).hasClass(gt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!st(this._element).hasClass(gt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Et)).filter(function(t){return t.getAttribute("data-parent")===n._config.parent})).length&&(t=null),!(t&&(e=st(t).not(this._selector).data(lt))&&e._isTransitioning))){var i=st.Event(dt.SHOW);if(st(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(st(t).not(this._selector),"hide"),e||st(t).data(lt,null));var r=this._getDimension();st(this._element).removeClass(_t).addClass(mt),this._element.style[r]=0,this._triggerArray.length&&st(this._triggerArray).removeClass(pt).attr("aria-expanded",!0),this.setTransitioning(!0);var o="scroll"+(r[0].toUpperCase()+r.slice(1)),s=Fn.getTransitionDurationFromElement(this._element);st(this._element).one(Fn.TRANSITION_END,function(){st(n._element).removeClass(mt).addClass(_t).addClass(gt),n._element.style[r]="",n.setTransitioning(!1),st(n._element).trigger(dt.SHOWN)}).emulateTransitionEnd(s),this._element.style[r]=this._element[o]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&st(this._element).hasClass(gt)){var e=st.Event(dt.HIDE);if(st(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",Fn.reflow(this._element),st(this._element).addClass(mt).removeClass(_t).removeClass(gt);var i=this._triggerArray.length;if(0<i)for(var r=0;r<i;r++){var o=this._triggerArray[r],s=Fn.getSelectorFromElement(o);if(null!==s)st([].slice.call(document.querySelectorAll(s))).hasClass(gt)||st(o).addClass(pt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=Fn.getTransitionDurationFromElement(this._element);st(this._element).one(Fn.TRANSITION_END,function(){t.setTransitioning(!1),st(t._element).removeClass(mt).addClass(_t).trigger(dt.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){st.removeData(this._element,lt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},ut,t)).toggle=Boolean(t.toggle),Fn.typeCheckConfig(at,t,ft),t},t._getDimension=function(){return st(this._element).hasClass(vt)?vt:yt},t._getParent=function(){var n=this,t=null;Fn.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return st(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){if(t){var n=st(t).hasClass(gt);e.length&&st(e).toggleClass(pt,!n).attr("aria-expanded",n)}},a._getTargetFromElement=function(t){var e=Fn.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=st(this),e=t.data(lt),n=l({},ut,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(lt,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return ut}}]),a}(),st(document).on(dt.CLICK_DATA_API,Ct,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=st(this),e=Fn.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));st(i).each(function(){var t=st(this),e=t.data(lt)?"toggle":n.data();Tt._jQueryInterface.call(t,e)})}),st.fn[at]=Tt._jQueryInterface,st.fn[at].Constructor=Tt,st.fn[at].noConflict=function(){return st.fn[at]=ht,Tt._jQueryInterface},Tt),Vn=(St="dropdown",At="."+(It="bs.dropdown"),Dt=".data-api",wt=(bt=e).fn[St],Nt=new RegExp("38|40|27"),Ot={HIDE:"hide"+At,HIDDEN:"hidden"+At,SHOW:"show"+At,SHOWN:"shown"+At,CLICK:"click"+At,CLICK_DATA_API:"click"+At+Dt,KEYDOWN_DATA_API:"keydown"+At+Dt,KEYUP_DATA_API:"keyup"+At+Dt},kt="disabled",Pt="show",jt="dropup",Ht="dropright",Lt="dropleft",Rt="dropdown-menu-right",xt="position-static",Wt='[data-toggle="dropdown"]',Ut=".dropdown form",qt=".dropdown-menu",Ft=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Mt="top-start",Qt="top-end",Bt="bottom-start",Vt="bottom-end",Yt="right-start",zt="left-start",Jt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Zt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Gt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!bt(this._element).hasClass(kt)){var t=c._getParentFromElement(this._element),e=bt(this._menu).hasClass(Pt);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=bt.Event(Ot.SHOW,n);if(bt(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof h)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var r=this._element;"parent"===this._config.reference?r=t:Fn.isElement(this._config.reference)&&(r=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(r=this._config.reference[0])),"scrollParent"!==this._config.boundary&&bt(t).addClass(xt),this._popper=new h(r,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===bt(t).closest(Ft).length&&bt(document.body).children().on("mouseover",null,bt.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),bt(this._menu).toggleClass(Pt),bt(t).toggleClass(Pt).trigger(bt.Event(Ot.SHOWN,n))}}}},t.dispose=function(){bt.removeData(this._element,It),bt(this._element).off(At),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;bt(this._element).on(Ot.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,bt(this._element).data(),t),Fn.typeCheckConfig(St,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}return this._menu},t._getPlacement=function(){var t=bt(this._element.parentNode),e=Bt;return t.hasClass(jt)?(e=Mt,bt(this._menu).hasClass(Rt)&&(e=Qt)):t.hasClass(Ht)?e=Yt:t.hasClass(Lt)?e=zt:bt(this._menu).hasClass(Rt)&&(e=Vt),e},t._detectNavbar=function(){return 0<bt(this._element).closest(".navbar").length},t._getPopperConfig=function(){var e=this,t={};"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},c._jQueryInterface=function(e){return this.each(function(){var t=bt(this).data(It);if(t||(t=new c(this,"object"==typeof e?e:null),bt(this).data(It,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Wt)),n=0,i=e.length;n<i;n++){var r=c._getParentFromElement(e[n]),o=bt(e[n]).data(It),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),o){var a=o._menu;if(bt(r).hasClass(Pt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&bt.contains(r,t.target))){var l=bt.Event(Ot.HIDE,s);bt(r).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&bt(document.body).children().off("mouseover",null,bt.noop),e[n].setAttribute("aria-expanded","false"),bt(a).removeClass(Pt),bt(r).removeClass(Pt).trigger(bt.Event(Ot.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=Fn.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||bt(t.target).closest(qt).length)):Nt.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!bt(this).hasClass(kt))){var e=c._getParentFromElement(this),n=bt(e).hasClass(Pt);if((n||27===t.which&&32===t.which)&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var r=i.indexOf(t.target);38===t.which&&0<r&&r--,40===t.which&&r<i.length-1&&r++,r<0&&(r=0),i[r].focus()}}else{if(27===t.which){var o=e.querySelector(Wt);bt(o).trigger("focus")}bt(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return Jt}},{key:"DefaultType",get:function(){return Zt}}]),c}(),bt(document).on(Ot.KEYDOWN_DATA_API,Wt,Gt._dataApiKeydownHandler).on(Ot.KEYDOWN_DATA_API,qt,Gt._dataApiKeydownHandler).on(Ot.CLICK_DATA_API+" "+Ot.KEYUP_DATA_API,Gt._clearMenus).on(Ot.CLICK_DATA_API,Wt,function(t){t.preventDefault(),t.stopPropagation(),Gt._jQueryInterface.call(bt(this),"toggle")}).on(Ot.CLICK_DATA_API,Ut,function(t){t.stopPropagation()}),bt.fn[St]=Gt._jQueryInterface,bt.fn[St].Constructor=Gt,bt.fn[St].noConflict=function(){return bt.fn[St]=wt,Gt._jQueryInterface},Gt),Yn=(Xt="modal",ee="."+(te="bs.modal"),ne=($t=e).fn[Xt],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0},re={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},oe={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"},se="modal-scrollbar-measure",ae="modal-backdrop",le="modal-open",ce="fade",he="show",ue=".modal-dialog",fe='[data-toggle="modal"]',de='[data-dismiss="modal"]',ge=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",_e=".sticky-top",me=function(){function r(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(ue),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}var t=r.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isTransitioning&&!this._isShown){$t(this._element).hasClass(ce)&&(this._isTransitioning=!0);var n=$t.Event(oe.SHOW,{relatedTarget:t});$t(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),$t(document.body).addClass(le),this._setEscapeEvent(),this._setResizeEvent(),$t(this._element).on(oe.CLICK_DISMISS,de,function(t){return e.hide(t)}),$t(this._dialog).on(oe.MOUSEDOWN_DISMISS,function(){$t(e._element).one(oe.MOUSEUP_DISMISS,function(t){$t(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var n=$t.Event(oe.HIDE);if($t(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=$t(this._element).hasClass(ce);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),$t(document).off(oe.FOCUSIN),$t(this._element).removeClass(he),$t(this._element).off(oe.CLICK_DISMISS),$t(this._dialog).off(oe.MOUSEDOWN_DISMISS),i){var r=Fn.getTransitionDurationFromElement(this._element);$t(this._element).one(Fn.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(r)}else this._hideModal()}}},t.dispose=function(){$t.removeData(this._element,te),$t(window,document,this._element,this._backdrop).off(ee),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},ie,t),Fn.typeCheckConfig(Xt,t,re),t},t._showElement=function(t){var e=this,n=$t(this._element).hasClass(ce);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&Fn.reflow(this._element),$t(this._element).addClass(he),this._config.focus&&this._enforceFocus();var i=$t.Event(oe.SHOWN,{relatedTarget:t}),r=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,$t(e._element).trigger(i)};if(n){var o=Fn.getTransitionDurationFromElement(this._element);$t(this._dialog).one(Fn.TRANSITION_END,r).emulateTransitionEnd(o)}else r()},t._enforceFocus=function(){var e=this;$t(document).off(oe.FOCUSIN).on(oe.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===$t(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?$t(this._element).on(oe.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||$t(this._element).off(oe.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?$t(window).on(oe.RESIZE,function(t){return e.handleUpdate(t)}):$t(window).off(oe.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){$t(document.body).removeClass(le),t._resetAdjustments(),t._resetScrollbar(),$t(t._element).trigger(oe.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&($t(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=$t(this._element).hasClass(ce)?ce:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=ae,n&&this._backdrop.classList.add(n),$t(this._backdrop).appendTo(document.body),$t(this._element).on(oe.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&Fn.reflow(this._backdrop),$t(this._backdrop).addClass(he),!t)return;if(!n)return void t();var i=Fn.getTransitionDurationFromElement(this._backdrop);$t(this._backdrop).one(Fn.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){$t(this._backdrop).removeClass(he);var r=function(){e._removeBackdrop(),t&&t()};if($t(this._element).hasClass(ce)){var o=Fn.getTransitionDurationFromElement(this._backdrop);$t(this._backdrop).one(Fn.TRANSITION_END,r).emulateTransitionEnd(o)}else r()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var r=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(ge)),e=[].slice.call(document.querySelectorAll(_e));$t(t).each(function(t,e){var n=e.style.paddingRight,i=$t(e).css("padding-right");$t(e).data("padding-right",n).css("padding-right",parseFloat(i)+r._scrollbarWidth+"px")}),$t(e).each(function(t,e){var n=e.style.marginRight,i=$t(e).css("margin-right");$t(e).data("margin-right",n).css("margin-right",parseFloat(i)-r._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=$t(document.body).css("padding-right");$t(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(ge));$t(t).each(function(t,e){var n=$t(e).data("padding-right");$t(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+_e));$t(e).each(function(t,e){var n=$t(e).data("margin-right");"undefined"!=typeof n&&$t(e).css("margin-right",n).removeData("margin-right")});var n=$t(document.body).data("padding-right");$t(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=se,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},r._jQueryInterface=function(n,i){return this.each(function(){var t=$t(this).data(te),e=l({},ie,$t(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new r(this,e),$t(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(r,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return ie}}]),r}(),$t(document).on(oe.CLICK_DATA_API,fe,function(t){var e,n=this,i=Fn.getSelectorFromElement(this);i&&(e=document.querySelector(i));var r=$t(e).data(te)?"toggle":l({},$t(e).data(),$t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var o=$t(e).one(oe.SHOW,function(t){t.isDefaultPrevented()||o.one(oe.HIDDEN,function(){$t(n).is(":visible")&&n.focus()})});me._jQueryInterface.call($t(e),r,this)}),$t.fn[Xt]=me._jQueryInterface,$t.fn[Xt].Constructor=me,$t.fn[Xt].noConflict=function(){return $t.fn[Xt]=ne,me._jQueryInterface},me),zn=(ve="tooltip",Ee="."+(ye="bs.tooltip"),Ce=(pe=e).fn[ve],Te="bs-tooltip",be=new RegExp("(^|\\s)"+Te+"\\S+","g"),Ae={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!(Ie={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"}),selector:!(Se={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"}),placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},we="out",Ne={HIDE:"hide"+Ee,HIDDEN:"hidden"+Ee,SHOW:(De="show")+Ee,SHOWN:"shown"+Ee,INSERTED:"inserted"+Ee,CLICK:"click"+Ee,FOCUSIN:"focusin"+Ee,FOCUSOUT:"focusout"+Ee,MOUSEENTER:"mouseenter"+Ee,MOUSELEAVE:"mouseleave"+Ee},Oe="fade",ke="show",Pe=".tooltip-inner",je=".arrow",He="hover",Le="focus",Re="click",xe="manual",We=function(){function i(t,e){if("undefined"==typeof h)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=pe(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),pe(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(pe(this.getTipElement()).hasClass(ke))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),pe.removeData(this.element,this.constructor.DATA_KEY),pe(this.element).off(this.constructor.EVENT_KEY),pe(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&pe(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===pe(this.element).css("display"))throw new Error("Please use show on visible elements");var t=pe.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){pe(this.element).trigger(t);var n=pe.contains(this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!n)return;var i=this.getTipElement(),r=Fn.getUID(this.constructor.NAME);i.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&pe(i).addClass(Oe);var o="function"==typeof this.config.placement?this.config.placement.call(this,i,this.element):this.config.placement,s=this._getAttachment(o);this.addAttachmentClass(s);var a=!1===this.config.container?document.body:pe(document).find(this.config.container);pe(i).data(this.constructor.DATA_KEY,this),pe.contains(this.element.ownerDocument.documentElement,this.tip)||pe(i).appendTo(a),pe(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new h(this.element,i,{placement:s,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:je},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),pe(i).addClass(ke),"ontouchstart"in document.documentElement&&pe(document.body).children().on("mouseover",null,pe.noop);var l=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,pe(e.element).trigger(e.constructor.Event.SHOWN),t===we&&e._leave(null,e)};if(pe(this.tip).hasClass(Oe)){var c=Fn.getTransitionDurationFromElement(this.tip);pe(this.tip).one(Fn.TRANSITION_END,l).emulateTransitionEnd(c)}else l()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=pe.Event(this.constructor.Event.HIDE),r=function(){e._hoverState!==De&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),pe(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(pe(this.element).trigger(i),!i.isDefaultPrevented()){if(pe(n).removeClass(ke),"ontouchstart"in document.documentElement&&pe(document.body).children().off("mouseover",null,pe.noop),this._activeTrigger[Re]=!1,this._activeTrigger[Le]=!1,this._activeTrigger[He]=!1,pe(this.tip).hasClass(Oe)){var o=Fn.getTransitionDurationFromElement(n);pe(n).one(Fn.TRANSITION_END,r).emulateTransitionEnd(o)}else r();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){pe(this.getTipElement()).addClass(Te+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||pe(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(pe(t.querySelectorAll(Pe)),this.getTitle()),pe(t).removeClass(Oe+" "+ke)},t.setElementContent=function(t,e){var n=this.config.html;"object"==typeof e&&(e.nodeType||e.jquery)?n?pe(e).parent().is(t)||t.empty().append(e):t.text(pe(e).text()):t[n?"html":"text"](e)},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getAttachment=function(t){return Ie[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)pe(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==xe){var e=t===He?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===He?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;pe(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}pe(i.element).closest(".modal").on("hide.bs.modal",function(){return i.hide()})}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||pe(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),pe(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Le:He]=!0),pe(e.getTipElement()).hasClass(ke)||e._hoverState===De?e._hoverState=De:(clearTimeout(e._timeout),e._hoverState=De,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===De&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||pe(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),pe(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Le:He]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=we,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===we&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){return"number"==typeof(t=l({},this.constructor.Default,pe(this.element).data(),"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),Fn.typeCheckConfig(ve,t,this.constructor.DefaultType),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=pe(this.getTipElement()),e=t.attr("class").match(be);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(pe(t).removeClass(Oe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=pe(this).data(ye),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),pe(this).data(ye,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return Ae}},{key:"NAME",get:function(){return ve}},{key:"DATA_KEY",get:function(){return ye}},{key:"Event",get:function(){return Ne}},{key:"EVENT_KEY",get:function(){return Ee}},{key:"DefaultType",get:function(){return Se}}]),i}(),pe.fn[ve]=We._jQueryInterface,pe.fn[ve].Constructor=We,pe.fn[ve].noConflict=function(){return pe.fn[ve]=Ce,We._jQueryInterface},We),Jn=(qe="popover",Ke="."+(Fe="bs.popover"),Me=(Ue=e).fn[qe],Qe="bs-popover",Be=new RegExp("(^|\\s)"+Qe+"\\S+","g"),Ve=l({},zn.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ye=l({},zn.DefaultType,{content:"(string|element|function)"}),ze="fade",Ze=".popover-header",Ge=".popover-body",$e={HIDE:"hide"+Ke,HIDDEN:"hidden"+Ke,SHOW:(Je="show")+Ke,SHOWN:"shown"+Ke,INSERTED:"inserted"+Ke,CLICK:"click"+Ke,FOCUSIN:"focusin"+Ke,FOCUSOUT:"focusout"+Ke,MOUSEENTER:"mouseenter"+Ke,MOUSELEAVE:"mouseleave"+Ke},Xe=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var r=i.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){Ue(this.getTipElement()).addClass(Qe+"-"+t)},r.getTipElement=function(){return this.tip=this.tip||Ue(this.config.template)[0],this.tip},r.setContent=function(){var t=Ue(this.getTipElement());this.setElementContent(t.find(Ze),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(Ge),e),t.removeClass(ze+" "+Je)},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=Ue(this.getTipElement()),e=t.attr("class").match(Be);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=Ue(this).data(Fe),e="object"==typeof n?n:null;if((t||!/destroy|hide/.test(n))&&(t||(t=new i(this,e),Ue(this).data(Fe,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return Ve}},{key:"NAME",get:function(){return qe}},{key:"DATA_KEY",get:function(){return Fe}},{key:"Event",get:function(){return $e}},{key:"EVENT_KEY",get:function(){return Ke}},{key:"DefaultType",get:function(){return Ye}}]),i}(zn),Ue.fn[qe]=Xe._jQueryInterface,Ue.fn[qe].Constructor=Xe,Ue.fn[qe].noConflict=function(){return Ue.fn[qe]=Me,Xe._jQueryInterface},Xe),Zn=(en="scrollspy",rn="."+(nn="bs.scrollspy"),on=(tn=e).fn[en],sn={offset:10,method:"auto",target:""},an={offset:"number",method:"string",target:"(string|element)"},ln={ACTIVATE:"activate"+rn,SCROLL:"scroll"+rn,LOAD_DATA_API:"load"+rn+".data-api"},cn="dropdown-item",hn="active",un='[data-spy="scroll"]',fn=".active",dn=".nav, .list-group",gn=".nav-link",_n=".nav-item",mn=".list-group-item",pn=".dropdown",vn=".dropdown-item",yn=".dropdown-toggle",En="offset",Cn="position",Tn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+gn+","+this._config.target+" "+mn+","+this._config.target+" "+vn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,tn(this._scrollElement).on(ln.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?En:Cn,r="auto"===this._config.method?t:this._config.method,o=r===Cn?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=Fn.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[tn(e)[r]().top+o,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){tn.removeData(this._element,nn),tn(this._scrollElement).off(rn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},sn,"object"==typeof t&&t?t:{})).target){var e=tn(t.target).attr("id");e||(e=Fn.getUID(en),tn(t.target).attr("id",e)),t.target="#"+e}return Fn.typeCheckConfig(en,t,an),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;){this._activeTarget!==this._targets[r]&&t>=this._offsets[r]&&("undefined"==typeof this._offsets[r+1]||t<this._offsets[r+1])&&this._activate(this._targets[r])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",");t=t.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var n=tn([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(cn)?(n.closest(pn).find(yn).addClass(hn),n.addClass(hn)):(n.addClass(hn),n.parents(dn).prev(gn+", "+mn).addClass(hn),n.parents(dn).prev(_n).children(gn).addClass(hn)),tn(this._scrollElement).trigger(ln.ACTIVATE,{relatedTarget:e})},t._clear=function(){var t=[].slice.call(document.querySelectorAll(this._selector));tn(t).filter(fn).removeClass(hn)},n._jQueryInterface=function(e){return this.each(function(){var t=tn(this).data(nn);if(t||(t=new n(this,"object"==typeof e&&e),tn(this).data(nn,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return sn}}]),n}(),tn(window).on(ln.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(un)),e=t.length;e--;){var n=tn(t[e]);Tn._jQueryInterface.call(n,n.data())}}),tn.fn[en]=Tn._jQueryInterface,tn.fn[en].Constructor=Tn,tn.fn[en].noConflict=function(){return tn.fn[en]=on,Tn._jQueryInterface},Tn),Gn=(In="."+(Sn="bs.tab"),An=(bn=e).fn.tab,Dn={HIDE:"hide"+In,HIDDEN:"hidden"+In,SHOW:"show"+In,SHOWN:"shown"+In,CLICK_DATA_API:"click"+In+".data-api"},wn="dropdown-menu",Nn="active",On="disabled",kn="fade",Pn="show",jn=".dropdown",Hn=".nav, .list-group",Ln=".active",Rn="> li > .active",xn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Wn=".dropdown-toggle",Un="> .dropdown-menu .active",qn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&bn(this._element).hasClass(Nn)||bn(this._element).hasClass(On))){var t,i,e=bn(this._element).closest(Hn)[0],r=Fn.getSelectorFromElement(this._element);if(e){var o="UL"===e.nodeName?Rn:Ln;i=(i=bn.makeArray(bn(e).find(o)))[i.length-1]}var s=bn.Event(Dn.HIDE,{relatedTarget:this._element}),a=bn.Event(Dn.SHOW,{relatedTarget:i});if(i&&bn(i).trigger(s),bn(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){r&&(t=document.querySelector(r)),this._activate(this._element,e);var l=function(){var t=bn.Event(Dn.HIDDEN,{relatedTarget:n._element}),e=bn.Event(Dn.SHOWN,{relatedTarget:i});bn(i).trigger(t),bn(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){bn.removeData(this._element,Sn),this._element=null},t._activate=function(t,e,n){var i=this,r=("UL"===e.nodeName?bn(e).find(Rn):bn(e).children(Ln))[0],o=n&&r&&bn(r).hasClass(kn),s=function(){return i._transitionComplete(t,r,n)};if(r&&o){var a=Fn.getTransitionDurationFromElement(r);bn(r).one(Fn.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){bn(e).removeClass(Pn+" "+Nn);var i=bn(e.parentNode).find(Un)[0];i&&bn(i).removeClass(Nn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(bn(t).addClass(Nn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),Fn.reflow(t),bn(t).addClass(Pn),t.parentNode&&bn(t.parentNode).hasClass(wn)){var r=bn(t).closest(jn)[0];if(r){var o=[].slice.call(r.querySelectorAll(Wn));bn(o).addClass(Nn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=bn(this),e=t.data(Sn);if(e||(e=new i(this),t.data(Sn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),i}(),bn(document).on(Dn.CLICK_DATA_API,xn,function(t){t.preventDefault(),qn._jQueryInterface.call(bn(this),"show")}),bn.fn.tab=qn._jQueryInterface,bn.fn.tab.Constructor=qn,bn.fn.tab.noConflict=function(){return bn.fn.tab=An,qn._jQueryInterface},qn);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=Fn,t.Alert=Kn,t.Button=Mn,t.Carousel=Qn,t.Collapse=Bn,t.Dropdown=Vn,t.Modal=Yn,t.Popover=Jn,t.Scrollspy=Zn,t.Tab=Gn,t.Tooltip=zn,Object.defineProperty(t,"__esModule",{value:!0})});


/*!
 *
 *         SimpleBar.js - v2.6.1
 *         Scrollbars, simpler.
 *         https://grsmto.github.io/simplebar/
 *
 *         Made by Adrien Grsmto from a fork by Jonathan Nicol
 *         Under MIT License
 *
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SimpleBar=e():t.SimpleBar=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=27)}([function(t,e,n){var r=n(23)("wks"),i=n(12),o=n(1).Symbol,s="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=s&&o[t]||(s?o:i)("Symbol."+t))}).store=r},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(5),i=n(11);t.exports=n(7)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(6),i=n(33),o=n(34),s=Object.defineProperty;e.f=n(7)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(16)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports={}},function(t,e,n){var r=n(23)("keys"),i=n(12);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(1),i=n(3),o=n(4),s=n(18),c=n(19),a=function(t,e,n){var u,l,f,h,d=t&a.F,p=t&a.G,v=t&a.S,b=t&a.P,y=t&a.B,m=p?r:v?r[e]||(r[e]={}):(r[e]||{}).prototype,g=p?i:i[e]||(i[e]={}),E=g.prototype||(g.prototype={});p&&(n=e);for(u in n)l=!d&&m&&void 0!==m[u],f=(l?m:n)[u],h=y&&l?c(f,r):b&&"function"==typeof f?c(Function.call,f):f,m&&s(m,u,f,t&a.U),g[u]!=f&&o(g,u,h),b&&E[u]!=f&&(E[u]=f)};r.core=i,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(10),i=n(1).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,n){var r=n(1),i=n(4),o=n(2),s=n(12)("src"),c=Function.toString,a=(""+c).split("toString");n(3).inspectSource=function(t){return c.call(t)},(t.exports=function(t,e,n,c){var u="function"==typeof n;u&&(o(n,"name")||i(n,"name",e)),t[e]!==n&&(u&&(o(n,s)||i(n,s,t[e]?""+t[e]:a.join(String(e)))),t===r?t[e]=n:c?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[s]||c.call(this)})},function(t,e,n){var r=n(35);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(41),i=n(9);t.exports=function(t){return r(i(t))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(8),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(1),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(5).f,i=n(2),o=n(0)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(9);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n(28);var c=r(n(53)),a=r(n(54)),u=r(n(56));n(57),Object.assign=n(58);var l=function(){function t(e,n){i(this,t),this.el=e,this.flashTimeout,this.contentEl,this.scrollContentEl,this.dragOffset={x:0,y:0},this.isVisible={x:!0,y:!0},this.scrollOffsetAttr={x:"scrollLeft",y:"scrollTop"},this.sizeAttr={x:"offsetWidth",y:"offsetHeight"},this.scrollSizeAttr={x:"scrollWidth",y:"scrollHeight"},this.offsetAttr={x:"left",y:"top"},this.globalObserver,this.mutationObserver,this.resizeObserver,this.currentAxis,this.isRtl,this.options=Object.assign({},t.defaultOptions,n),this.classNames=this.options.classNames,this.scrollbarWidth=(0,c.default)(),this.offsetSize=20,this.flashScrollbar=this.flashScrollbar.bind(this),this.onDragY=this.onDragY.bind(this),this.onDragX=this.onDragX.bind(this),this.onScrollY=this.onScrollY.bind(this),this.onScrollX=this.onScrollX.bind(this),this.drag=this.drag.bind(this),this.onEndDrag=this.onEndDrag.bind(this),this.onMouseEnter=this.onMouseEnter.bind(this),this.recalculate=(0,a.default)(this.recalculate,100,{leading:!0}),this.init()}return s(t,[{key:"init",value:function(){this.el.SimpleBar=this,this.initDOM(),this.scrollbarX=this.trackX.querySelector(".".concat(this.classNames.scrollbar)),this.scrollbarY=this.trackY.querySelector(".".concat(this.classNames.scrollbar)),this.isRtl="rtl"===getComputedStyle(this.contentEl).direction,this.scrollContentEl.style[this.isRtl?"paddingLeft":"paddingRight"]="".concat(this.scrollbarWidth||this.offsetSize,"px"),this.scrollContentEl.style.marginBottom="-".concat(2*this.scrollbarWidth||this.offsetSize,"px"),this.contentEl.style.paddingBottom="".concat(this.scrollbarWidth||this.offsetSize,"px"),0!==this.scrollbarWidth&&(this.contentEl.style[this.isRtl?"marginLeft":"marginRight"]="-".concat(this.scrollbarWidth,"px")),this.recalculate(),this.initListeners()}},{key:"initDOM",value:function(){var t=this;if(Array.from(this.el.children).filter(function(e){return e.classList.contains(t.classNames.scrollContent)}).length)this.trackX=this.el.querySelector(".".concat(this.classNames.track,".horizontal")),this.trackY=this.el.querySelector(".".concat(this.classNames.track,".vertical")),this.scrollContentEl=this.el.querySelector(".".concat(this.classNames.scrollContent)),this.contentEl=this.el.querySelector(".".concat(this.classNames.content));else{for(this.scrollContentEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.scrollContentEl.classList.add(this.classNames.scrollContent),this.contentEl.classList.add(this.classNames.content);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.scrollContentEl.appendChild(this.contentEl),this.el.appendChild(this.scrollContentEl)}if(!this.trackX||!this.trackY){var e=document.createElement("div"),n=document.createElement("div");e.classList.add(this.classNames.track),n.classList.add(this.classNames.scrollbar),e.appendChild(n),this.trackX=e.cloneNode(!0),this.trackX.classList.add("horizontal"),this.trackY=e.cloneNode(!0),this.trackY.classList.add("vertical"),this.el.insertBefore(this.trackX,this.el.firstChild),this.el.insertBefore(this.trackY,this.el.firstChild)}this.el.setAttribute("data-simplebar","init")}},{key:"initListeners",value:function(){var t=this;this.options.autoHide&&this.el.addEventListener("mouseenter",this.onMouseEnter),this.scrollbarY.addEventListener("mousedown",this.onDragY),this.scrollbarX.addEventListener("mousedown",this.onDragX),this.scrollContentEl.addEventListener("scroll",this.onScrollY),this.contentEl.addEventListener("scroll",this.onScrollX),"undefined"!=typeof MutationObserver&&(this.mutationObserver=new MutationObserver(function(e){e.forEach(function(e){(t.isChildNode(e.target)||e.addedNodes.length)&&t.recalculate()})}),this.mutationObserver.observe(this.el,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this.resizeObserver=new u.default(this.recalculate.bind(this)),this.resizeObserver.observe(this.el)}},{key:"removeListeners",value:function(){this.options.autoHide&&this.el.removeEventListener("mouseenter",this.onMouseEnter),this.scrollbarX.removeEventListener("mousedown",this.onDragX),this.scrollbarY.removeEventListener("mousedown",this.onDragY),this.scrollContentEl.removeEventListener("scroll",this.onScrollY),this.contentEl.removeEventListener("scroll",this.onScrollX),this.mutationObserver.disconnect(),this.resizeObserver.disconnect()}},{key:"onDragX",value:function(t){this.onDrag(t,"x")}},{key:"onDragY",value:function(t){this.onDrag(t,"y")}},{key:"onDrag",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y";t.preventDefault();var n="y"===e?this.scrollbarY:this.scrollbarX,r="y"===e?t.pageY:t.pageX;this.dragOffset[e]=r-n.getBoundingClientRect()[this.offsetAttr[e]],this.currentAxis=e,document.addEventListener("mousemove",this.drag),document.addEventListener("mouseup",this.onEndDrag)}},{key:"drag",value:function(t){var e,n,r;t.preventDefault(),"y"===this.currentAxis?(e=t.pageY,n=this.trackY,r=this.scrollContentEl):(e=t.pageX,n=this.trackX,r=this.contentEl);var i=e-n.getBoundingClientRect()[this.offsetAttr[this.currentAxis]]-this.dragOffset[this.currentAxis],o=i/n[this.sizeAttr[this.currentAxis]],s=o*this.contentEl[this.scrollSizeAttr[this.currentAxis]];r[this.scrollOffsetAttr[this.currentAxis]]=s}},{key:"onEndDrag",value:function(){document.removeEventListener("mousemove",this.drag),document.removeEventListener("mouseup",this.onEndDrag)}},{key:"resizeScrollbar",value:function(){var t,e,n,r,i,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y";"x"===o?(t=this.trackX,e=this.scrollbarX,n=this.contentEl[this.scrollOffsetAttr[o]],r=this.contentSizeX,i=this.scrollbarXSize):(t=this.trackY,e=this.scrollbarY,n=this.scrollContentEl[this.scrollOffsetAttr[o]],r=this.contentSizeY,i=this.scrollbarYSize);var s=i/r,c=n/(r-i),a=Math.max(~~(s*i),this.options.scrollbarMinSize),u=~~((i-a)*c);this.isVisible[o]=i<r,this.isVisible[o]||this.options.forceVisible?(t.style.visibility="visible",this.options.forceVisible?e.style.visibility="hidden":e.style.visibility="visible","x"===o?(e.style.left="".concat(u,"px"),e.style.width="".concat(a,"px")):(e.style.top="".concat(u,"px"),e.style.height="".concat(a,"px"))):t.style.visibility="hidden"}},{key:"onScrollX",value:function(){this.flashScrollbar("x")}},{key:"onScrollY",value:function(){this.flashScrollbar("y")}},{key:"onMouseEnter",value:function(){this.flashScrollbar("x"),this.flashScrollbar("y")}},{key:"flashScrollbar",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y";this.resizeScrollbar(t),this.showScrollbar(t)}},{key:"showScrollbar",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y";this.isVisible[t]&&("x"===t?this.scrollbarX.classList.add("visible"):this.scrollbarY.classList.add("visible"),this.options.autoHide&&("number"==typeof this.flashTimeout&&window.clearTimeout(this.flashTimeout),this.flashTimeout=window.setTimeout(this.hideScrollbar.bind(this),1e3)))}},{key:"hideScrollbar",value:function(){this.scrollbarX.classList.remove("visible"),this.scrollbarY.classList.remove("visible"),"number"==typeof this.flashTimeout&&window.clearTimeout(this.flashTimeout)}},{key:"recalculate",value:function(){this.contentSizeX=this.contentEl[this.scrollSizeAttr.x],this.contentSizeY=this.contentEl[this.scrollSizeAttr.y]-(this.scrollbarWidth||this.offsetSize),this.scrollbarXSize=this.trackX[this.sizeAttr.x],this.scrollbarYSize=this.trackY[this.sizeAttr.y],this.resizeScrollbar("x"),this.resizeScrollbar("y"),this.options.autoHide||(this.showScrollbar("x"),this.showScrollbar("y"))}},{key:"getScrollElement",value:function(){return"y"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y")?this.scrollContentEl:this.contentEl}},{key:"getContentElement",value:function(){return this.contentEl}},{key:"unMount",value:function(){this.removeListeners(),this.el.SimpleBar=null}},{key:"isChildNode",value:function(t){return null!==t&&(t===this.el||this.isChildNode(t.parentNode))}}],[{key:"initHtmlApi",value:function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),"undefined"!=typeof MutationObserver&&(this.globalObserver=new MutationObserver(function(e){e.forEach(function(e){Array.from(e.addedNodes).forEach(function(e){1===e.nodeType&&(e.hasAttribute("data-simplebar")?!e.SimpleBar&&new t(e,t.getElOptions(e)):Array.from(e.querySelectorAll("[data-simplebar]")).forEach(function(e){!e.SimpleBar&&new t(e,t.getElOptions(e))}))}),Array.from(e.removedNodes).forEach(function(t){1===t.nodeType&&(t.hasAttribute("data-simplebar")?t.SimpleBar&&t.SimpleBar.unMount():Array.from(t.querySelectorAll("[data-simplebar]")).forEach(function(t){t.SimpleBar&&t.SimpleBar.unMount()}))})})}),this.globalObserver.observe(document,{childList:!0,subtree:!0})),"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements.bind(this)):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))}},{key:"getElOptions",value:function(e){return Object.keys(t.htmlAttributes).reduce(function(n,r){var i=t.htmlAttributes[r];return e.hasAttribute(i)&&(n[r]=JSON.parse(e.getAttribute(i)||!0)),n},{})}},{key:"removeObserver",value:function(){this.globalObserver.disconnect()}},{key:"initDOMLoadedElements",value:function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.from(document.querySelectorAll("[data-simplebar]")).forEach(function(e){e.SimpleBar||new t(e,t.getElOptions(e))})}},{key:"defaultOptions",get:function(){return{autoHide:!0,forceVisible:!1,classNames:{content:"simplebar-content",scrollContent:"simplebar-scroll-content",scrollbar:"simplebar-scrollbar",track:"simplebar-track"},scrollbarMinSize:25}}},{key:"htmlAttributes",get:function(){return{autoHide:"data-simplebar-auto-hide",forceVisible:"data-simplebar-force-visible",scrollbarMinSize:"data-simplebar-scrollbar-min-size"}}}]),t}();e.default=l,l.initHtmlApi()},function(t,e,n){n(29),n(46),t.exports=n(3).Array.from},function(t,e,n){"use strict";var r=n(30)(!0);n(31)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(8),i=n(9);t.exports=function(t){return function(e,n){var o,s,c=String(i(e)),a=r(n),u=c.length;return a<0||a>=u?t?"":void 0:(o=c.charCodeAt(a),o<55296||o>56319||a+1===u||(s=c.charCodeAt(a+1))<56320||s>57343?t?c.charAt(a):o:t?c.slice(a,a+2):s-56320+(o-55296<<10)+65536)}}},function(t,e,n){"use strict";var r=n(32),i=n(15),o=n(18),s=n(4),c=n(2),a=n(13),u=n(36),l=n(25),f=n(45),h=n(0)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,v,b,y,m){u(n,e,v);var g,E,O,_=function(t){if(!d&&t in A)return A[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},x=e+" Iterator",w="values"==b,S=!1,A=t.prototype,k=A[h]||A["@@iterator"]||b&&A[b],j=k||_(b),M=b?w?_("entries"):j:void 0,L="Array"==e?A.entries||k:k;if(L&&(O=f(L.call(new t)))!==Object.prototype&&O.next&&(l(O,x,!0),r||c(O,h)||s(O,h,p)),w&&k&&"values"!==k.name&&(S=!0,j=function(){return k.call(this)}),r&&!m||!d&&!S&&A[h]||s(A,h,j),a[e]=j,a[x]=p,b)if(g={values:w?j:_("values"),keys:y?j:_("keys"),entries:M},m)for(E in g)E in A||o(A,E,g[E]);else i(i.P+i.F*(d||S),e,g);return g}},function(t,e){t.exports=!1},function(t,e,n){t.exports=!n(7)&&!n(16)(function(){return 7!=Object.defineProperty(n(17)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(10);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var r=n(37),i=n(11),o=n(25),s={};n(4)(s,n(0)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(s,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var r=n(6),i=n(38),o=n(24),s=n(14)("IE_PROTO"),c=function(){},a=function(){var t,e=n(17)("iframe"),r=o.length;for(e.style.display="none",n(44).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[o[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[s]=t):n=a(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(5),i=n(6),o=n(39);t.exports=n(7)?Object.defineProperties:function(t,e){i(t);for(var n,s=o(e),c=s.length,a=0;c>a;)r.f(t,n=s[a++],e[n]);return t}},function(t,e,n){var r=n(40),i=n(24);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(2),i=n(20),o=n(42)(!1),s=n(14)("IE_PROTO");t.exports=function(t,e){var n,c=i(t),a=0,u=[];for(n in c)n!=s&&r(c,n)&&u.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~o(u,n)||u.push(n));return u}},function(t,e,n){var r=n(21);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(20),i=n(22),o=n(43);t.exports=function(t){return function(e,n,s){var c,a=r(e),u=i(a.length),l=o(s,u);if(t&&n!=n){for(;u>l;)if((c=a[l++])!=c)return!0}else for(;u>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(8),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(2),i=n(26),o=n(14)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,n){"use strict";var r=n(19),i=n(15),o=n(26),s=n(47),c=n(48),a=n(22),u=n(49),l=n(50);i(i.S+i.F*!n(52)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,i,f,h=o(t),d="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,b=void 0!==v,y=0,m=l(h);if(b&&(v=r(v,p>2?arguments[2]:void 0,2)),void 0==m||d==Array&&c(m))for(e=a(h.length),n=new d(e);e>y;y++)u(n,y,b?v(h[y],y):h[y]);else for(f=m.call(h),n=new d;!(i=f.next()).done;y++)u(n,y,b?s(f,v,[i.value,y],!0):i.value);return n.length=y,n}})},function(t,e,n){var r=n(6);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&r(o.call(t)),e}}},function(t,e,n){var r=n(13),i=n(0)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,e,n){"use strict";var r=n(5),i=n(11);t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},function(t,e,n){var r=n(51),i=n(0)("iterator"),o=n(13);t.exports=n(3).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(21),i=n(0)("toStringTag"),o="Arguments"==r(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),i))?n:o?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){var r=n(0)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o=[7],s=o[r]();s.next=function(){return{done:n=!0}},o[r]=function(){return s},t(o)}catch(t){}return n}},function(t,e,n){var r,i,o;/*! scrollbarWidth.js v0.1.3 | felixexter | MIT | https://github.com/felixexter/scrollbarWidth */
  !function(n,s){i=[],r=s,void 0!==(o="function"==typeof r?r.apply(e,i):r)&&(t.exports=o)}(0,function(){"use strict";function t(){if("undefined"==typeof document)return 0;var t,e=document.body,n=document.createElement("div"),r=n.style;return r.position="absolute",r.top=r.left="-9999px",r.width=r.height="100px",r.overflow="scroll",e.appendChild(n),t=n.offsetWidth-n.clientWidth,e.removeChild(n),t}return t})},function(t,e,n){(function(e){function n(t,e,n){function i(e){var n=v,r=b;return v=b=void 0,w=e,m=t.apply(r,n)}function o(t){return w=t,g=setTimeout(l,e),S?i(t):m}function a(t){var n=t-x,r=t-w,i=e-n;return A?O(i,y-r):i}function u(t){var n=t-x,r=t-w;return void 0===x||n>=e||n<0||A&&r>=y}function l(){var t=_();if(u(t))return f(t);g=setTimeout(l,a(t))}function f(t){return g=void 0,k&&v?i(t):(v=b=void 0,m)}function h(){void 0!==g&&clearTimeout(g),w=0,v=x=b=g=void 0}function d(){return void 0===g?m:f(_())}function p(){var t=_(),n=u(t);if(v=arguments,b=this,x=t,n){if(void 0===g)return o(x);if(A)return g=setTimeout(l,e),i(x)}return void 0===g&&(g=setTimeout(l,e)),m}var v,b,y,m,g,x,w=0,S=!1,A=!1,k=!0;if("function"!=typeof t)throw new TypeError(c);return e=s(e)||0,r(n)&&(S=!!n.leading,A="maxWait"in n,y=A?E(s(n.maxWait)||0,e):y,k="trailing"in n?!!n.trailing:k),p.cancel=h,p.flush=d,p}function r(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function i(t){return!!t&&"object"==typeof t}function o(t){return"symbol"==typeof t||i(t)&&g.call(t)==u}function s(t){if("number"==typeof t)return t;if(o(t))return a;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var n=h.test(t);return n||d.test(t)?p(t.slice(2),n?2:8):f.test(t)?a:+t}var c="Expected a function",a=NaN,u="[object Symbol]",l=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,d=/^0o[0-7]+$/i,p=parseInt,v="object"==typeof e&&e&&e.Object===Object&&e,b="object"==typeof self&&self&&self.Object===Object&&self,y=v||b||Function("return this")(),m=Object.prototype,g=m.toString,E=Math.max,O=Math.min,_=function(){return y.Date.now()};t.exports=n}).call(e,n(55))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";function r(t){return parseFloat(t)||0}function i(t){return Array.prototype.slice.call(arguments,1).reduce(function(e,n){return e+r(t["border-"+n+"-width"])},0)}function o(t){for(var e=["top","right","bottom","left"],n={},i=0,o=e;i<o.length;i+=1){var s=o[i],c=t["padding-"+s];n[s]=r(c)}return n}function s(t){var e=t.getBBox();return f(0,0,e.width,e.height)}function c(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return _;var s=getComputedStyle(t),c=o(s),u=c.left+c.right,l=c.top+c.bottom,h=r(s.width),d=r(s.height);if("border-box"===s.boxSizing&&(Math.round(h+u)!==e&&(h-=i(s,"left","right")+u),Math.round(d+l)!==n&&(d-=i(s,"top","bottom")+l)),!a(t)){var p=Math.round(h+u)-e,v=Math.round(d+l)-n;1!==Math.abs(p)&&(h-=p),1!==Math.abs(v)&&(d-=v)}return f(c.left,c.top,h,d)}function a(t){return t===document.documentElement}function u(t){return d?x(t)?s(t):c(t):_}function l(t){var e=t.x,n=t.y,r=t.width,i=t.height,o="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(o.prototype);return O(s,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),s}function f(t,e,n,r){return{x:t,y:e,width:n,height:r}}Object.defineProperty(e,"__esModule",{value:!0});var h=function(){function t(t,e){var n=-1;return t.some(function(t,r){return t[0]===e&&(n=r,!0)}),n}return"undefined"!=typeof Map?Map:function(){function e(){this.__entries__=[]}var n={size:{}};return n.size.get=function(){return this.__entries__.length},e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n+=1){var i=r[n];t.call(e,i[1],i[0])}},Object.defineProperties(e.prototype,n),e}()}(),d="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,p=function(){return"function"==typeof requestAnimationFrame?requestAnimationFrame:function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),v=2,b=function(t,e){function n(){o&&(o=!1,t()),s&&i()}function r(){p(n)}function i(){var t=Date.now();if(o){if(t-c<v)return;s=!0}else o=!0,s=!1,setTimeout(r,e);c=t}var o=!1,s=!1,c=0;return i},y=["top","right","bottom","left","width","height","size","weight"],m="undefined"!=typeof navigator&&/Trident\/.*rv:11/.test(navigator.userAgent),g="undefined"!=typeof MutationObserver&&!m,E=function(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=b(this.refresh.bind(this),20)};E.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},E.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},E.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},E.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),t.length>0},E.prototype.connect_=function(){d&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),g?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},E.prototype.disconnect_=function(){d&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},E.prototype.onTransitionEnd_=function(t){var e=t.propertyName;y.some(function(t){return!!~e.indexOf(t)})&&this.refresh()},E.getInstance=function(){return this.instance_||(this.instance_=new E),this.instance_},E.instance_=null;var O=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n+=1){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},_=f(0,0,0,0),x=function(){return"undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof SVGGraphicsElement}:function(t){return t instanceof SVGElement&&"function"==typeof t.getBBox}}(),w=function(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=f(0,0,0,0),this.target=t};w.prototype.isActive=function(){var t=u(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},w.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t};var S=function(t,e){var n=l(e);O(this,{target:t,contentRect:n})},A=function(t,e,n){if("function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.activeObservations_=[],this.observations_=new h,this.callback_=t,this.controller_=e,this.callbackCtx_=n};A.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new w(t)),this.controller_.addObserver(this),this.controller_.refresh())}},A.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},A.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},A.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e)})},A.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new S(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},A.prototype.clearActive=function(){this.activeObservations_.splice(0)},A.prototype.hasActive=function(){return this.activeObservations_.length>0};var k="undefined"!=typeof WeakMap?new WeakMap:new h,j=function(t){if(!(this instanceof j))throw new TypeError("Cannot call a class as a function");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var e=E.getInstance(),n=new A(t,e,this);k.set(this,n)};["observe","unobserve","disconnect"].forEach(function(t){j.prototype[t]=function(){return(e=k.get(this))[t].apply(e,arguments);var e}});var M=function(){return"undefined"!=typeof ResizeObserver?ResizeObserver:j}();e.default=M},function(t,e){},function(t,e,n){"use strict";function r(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
  var i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,c,a=r(t),u=1;u<arguments.length;u++){n=Object(arguments[u]);for(var l in n)o.call(n,l)&&(a[l]=n[l]);if(i){c=i(n);for(var f=0;f<c.length;f++)s.call(n,c[f])&&(a[c[f]]=n[c[f]])}}return a}}]).default});



$(function() {
  "use strict";


  $.sidebarMenu = function(menu) {
    var animationSpeed = 300,
      subMenuSelector = '.sidebar-submenu';
    $(menu).on('click', 'li a', function(e) {
      var $this = $(this);
      var checkElement = $this.next();
      if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
        checkElement.slideUp(animationSpeed, function() {
          checkElement.removeClass('menu-open');
        });
        checkElement.parent("li").removeClass("active");
      }
      //If the menu is not visible
      else if ((checkElement.is(subMenuSelector)) && (!checkElement.is(':visible'))) {
        //Get the parent menu
        var parent = $this.parents('ul').first();
        //Close all open menus within the parent
        var ul = parent.find('ul:visible').slideUp(animationSpeed);
        //Remove the menu-open class from the parent
        ul.removeClass('menu-open');
        //Get the parent li
        var parent_li = $this.parent("li");
        //Open the target menu and add the menu-open class
        checkElement.slideDown(animationSpeed, function() {
          //Add the class active to the parent li
          checkElement.addClass('menu-open');
          parent.find('li.active').removeClass('active');
          parent_li.addClass('active');
        });
      }
      //if this isn't a link, prevent the page from being redirected
      if (checkElement.is(subMenuSelector)) {
        e.preventDefault();
      }
    });
  }



});




$(function() {
  "use strict";


//sidebar menu js
  $.sidebarMenu($('.sidebar-menu'));

// === toggle-menu js
  $(".toggle-menu").on("click", function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

// === sidebar menu activation js

  $(function() {
    for (var i = window.location, o = $(".sidebar-menu a").filter(function() {
      return this.href == i;
    }).addClass("active").parent().addClass("active"); ;) {
      if (!o.is("li")) break;
      o = o.parent().addClass("in").parent().addClass("active");
    }
  }),


    /* Top Header */

    $(document).ready(function(){
      $(window).on("scroll", function(){
        if ($(this).scrollTop() > 60) {
          $('.topbar-nav .navbar').addClass('bg-dark');
        } else {
          $('.topbar-nav .navbar').removeClass('bg-dark');
        }
      });

    });


  /* Back To Top */

  $(document).ready(function(){
    $(window).on("scroll", function(){
      if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn();
      } else {
        $('.back-to-top').fadeOut();
      }
    });

    $('.back-to-top').on("click", function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });
  });


  // page loader

  $(window).on('load', function(){

    $('.loader-wrapper').fadeOut(1500);

  })


  $(function () {
    $('[data-toggle="popover"]').popover()
  })


  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


  // theme setting
  $(".switcher-icon").on("click", function(e) {
    e.preventDefault();
    $(".right-sidebar").toggleClass("right-toggled");
  });

  $('#theme1').click(theme1);
  $('#theme2').click(theme2);
  $('#theme3').click(theme3);
  $('#theme4').click(theme4);
  $('#theme5').click(theme5);
  $('#theme6').click(theme6);
  $('#theme7').click(theme7);
  $('#theme8').click(theme8);
  $('#theme9').click(theme9);
  $('#theme10').click(theme10);
  $('#theme11').click(theme11);
  $('#theme12').click(theme12);

  function theme1() {
    $('body').attr('class', 'bg-theme bg-theme1');
  }

  function theme2() {
    $('body').attr('class', 'bg-theme bg-theme2');
  }

  function theme3() {
    $('body').attr('class', 'bg-theme bg-theme3');
  }

  function theme4() {
    $('body').attr('class', 'bg-theme bg-theme4');
  }

  function theme5() {
    $('body').attr('class', 'bg-theme bg-theme5');
  }

  function theme6() {
    $('body').attr('class', 'bg-theme bg-theme6');
  }

  function theme7() {
    $('body').attr('class', 'bg-theme bg-theme7');
  }

  function theme8() {
    $('body').attr('class', 'bg-theme bg-theme8');
  }

  function theme9() {
    $('body').attr('class', 'bg-theme bg-theme9');
  }

  function theme10() {
    $('body').attr('class', 'bg-theme bg-theme10');
  }

  function theme11() {
    $('body').attr('class', 'bg-theme bg-theme11');
  }

  function theme12() {
    $('body').attr('class', 'bg-theme bg-theme12');
  }




});




/**
 * jVectorMap version 2.0.2
 *
 * Copyright 2011-2014, Kirill Lebedev
 *
 */

(function( $ ){
  var apiParams = {
    set: {
      colors: 1,
      values: 1,
      backgroundColor: 1,
      scaleColors: 1,
      normalizeFunction: 1,
      focus: 1
    },
    get: {
      selectedRegions: 1,
      selectedMarkers: 1,
      mapObject: 1,
      regionName: 1
    }
  };

  $.fn.vectorMap = function(options) {
    var map,
      methodName,
      map = this.children('.jvectormap-container').data('mapObject');

    if (options === 'addMap') {
      jvm.Map.maps[arguments[1]] = arguments[2];
    } else if ((options === 'set' || options === 'get') && apiParams[options][arguments[1]]) {
      methodName = arguments[1].charAt(0).toUpperCase()+arguments[1].substr(1);
      return map[options+methodName].apply(map, Array.prototype.slice.call(arguments, 2));
    } else {
      options = options || {};
      options.container = this;
      map = new jvm.Map(options);
    }

    return this;
  };
})( jQuery );
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.9
 *
 * Requires: jQuery 1.2.2+
 */

(function (factory) {
  if ( typeof define === 'function' && define.amd ) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS style for Browserify
    module.exports = factory;
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {

  var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
    toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
      ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
    slice  = Array.prototype.slice,
    nullLowestDeltaTimeout, lowestDelta;

  if ( $.event.fixHooks ) {
    for ( var i = toFix.length; i; ) {
      $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
    }
  }

  var special = $.event.special.mousewheel = {
    version: '3.1.9',

    setup: function() {
      if ( this.addEventListener ) {
        for ( var i = toBind.length; i; ) {
          this.addEventListener( toBind[--i], handler, false );
        }
      } else {
        this.onmousewheel = handler;
      }
      // Store the line height and page height for this particular element
      $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
      $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
    },

    teardown: function() {
      if ( this.removeEventListener ) {
        for ( var i = toBind.length; i; ) {
          this.removeEventListener( toBind[--i], handler, false );
        }
      } else {
        this.onmousewheel = null;
      }
    },

    getLineHeight: function(elem) {
      return parseInt($(elem)['offsetParent' in $.fn ? 'offsetParent' : 'parent']().css('fontSize'), 10);
    },

    getPageHeight: function(elem) {
      return $(elem).height();
    },

    settings: {
      adjustOldDeltas: true
    }
  };

  $.fn.extend({
    mousewheel: function(fn) {
      return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
    },

    unmousewheel: function(fn) {
      return this.unbind('mousewheel', fn);
    }
  });


  function handler(event) {
    var orgEvent   = event || window.event,
      args       = slice.call(arguments, 1),
      delta      = 0,
      deltaX     = 0,
      deltaY     = 0,
      absDelta   = 0;
    event = $.event.fix(orgEvent);
    event.type = 'mousewheel';

    // Old school scrollwheel delta
    if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
    if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
    if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
    if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

    // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
    if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
      deltaX = deltaY * -1;
      deltaY = 0;
    }

    // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
    delta = deltaY === 0 ? deltaX : deltaY;

    // New school wheel delta (wheel event)
    if ( 'deltaY' in orgEvent ) {
      deltaY = orgEvent.deltaY * -1;
      delta  = deltaY;
    }
    if ( 'deltaX' in orgEvent ) {
      deltaX = orgEvent.deltaX;
      if ( deltaY === 0 ) { delta  = deltaX * -1; }
    }

    // No change actually happened, no reason to go any further
    if ( deltaY === 0 && deltaX === 0 ) { return; }

    // Need to convert lines and pages to pixels if we aren't already in pixels
    // There are three delta modes:
    //   * deltaMode 0 is by pixels, nothing to do
    //   * deltaMode 1 is by lines
    //   * deltaMode 2 is by pages
    if ( orgEvent.deltaMode === 1 ) {
      var lineHeight = $.data(this, 'mousewheel-line-height');
      delta  *= lineHeight;
      deltaY *= lineHeight;
      deltaX *= lineHeight;
    } else if ( orgEvent.deltaMode === 2 ) {
      var pageHeight = $.data(this, 'mousewheel-page-height');
      delta  *= pageHeight;
      deltaY *= pageHeight;
      deltaX *= pageHeight;
    }

    // Store lowest absolute delta to normalize the delta values
    absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

    if ( !lowestDelta || absDelta < lowestDelta ) {
      lowestDelta = absDelta;

      // Adjust older deltas if necessary
      if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
        lowestDelta /= 40;
      }
    }

    // Adjust older deltas if necessary
    if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
      // Divide all the things by 40!
      delta  /= 40;
      deltaX /= 40;
      deltaY /= 40;
    }

    // Get a whole, normalized value for the deltas
    delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
    deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
    deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

    // Add information to the event object
    event.deltaX = deltaX;
    event.deltaY = deltaY;
    event.deltaFactor = lowestDelta;
    // Go ahead and set deltaMode to 0 since we converted to pixels
    // Although this is a little odd since we overwrite the deltaX/Y
    // properties with normalized deltas.
    event.deltaMode = 0;

    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);

    // Clearout lowestDelta after sometime to better
    // handle multiple device types that give different
    // a different lowestDelta
    // Ex: trackpad = 3 and mouse wheel = 120
    if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
    nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

    return ($.event.dispatch || $.event.handle).apply(this, args);
  }

  function nullLowestDelta() {
    lowestDelta = null;
  }

  function shouldAdjustOldDeltas(orgEvent, absDelta) {
    // If this is an older event and the delta is divisable by 120,
    // then we are assuming that the browser is treating this as an
    // older mouse wheel event and that we should divide the deltas
    // by 40 to try and get a more usable deltaFactor.
    // Side note, this actually impacts the reported scroll distance
    // in older browsers and can cause scrolling to be slower than native.
    // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
    return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
  }

}));/**
 * @namespace jvm Holds core methods and classes used by jVectorMap.
 */
var jvm = {

    /**
     * Inherits child's prototype from the parent's one.
     * @param {Function} child
     * @param {Function} parent
     */
    inherits: function(child, parent) {
      function temp() {}
      temp.prototype = parent.prototype;
      child.prototype = new temp();
      child.prototype.constructor = child;
      child.parentClass = parent;
    },

    /**
     * Mixes in methods from the source constructor to the target one.
     * @param {Function} target
     * @param {Function} source
     */
    mixin: function(target, source){
      var prop;

      for (prop in source.prototype) {
        if (source.prototype.hasOwnProperty(prop)) {
          target.prototype[prop] = source.prototype[prop];
        }
      }
    },

    min: function(values){
      var min = Number.MAX_VALUE,
        i;

      if (values instanceof Array) {
        for (i = 0; i < values.length; i++) {
          if (values[i] < min) {
            min = values[i];
          }
        }
      } else {
        for (i in values) {
          if (values[i] < min) {
            min = values[i];
          }
        }
      }
      return min;
    },

    max: function(values){
      var max = Number.MIN_VALUE,
        i;

      if (values instanceof Array) {
        for (i = 0; i < values.length; i++) {
          if (values[i] > max) {
            max = values[i];
          }
        }
      } else {
        for (i in values) {
          if (values[i] > max) {
            max = values[i];
          }
        }
      }
      return max;
    },

    keys: function(object){
      var keys = [],
        key;

      for (key in object) {
        keys.push(key);
      }
      return keys;
    },

    values: function(object){
      var values = [],
        key,
        i;

      for (i = 0; i < arguments.length; i++) {
        object = arguments[i];
        for (key in object) {
          values.push(object[key]);
        }
      }
      return values;
    },

    whenImageLoaded: function(url){
      var deferred = new jvm.$.Deferred(),
        img = jvm.$('<img/>');

      img.error(function(){
        deferred.reject();
      }).load(function(){
        deferred.resolve(img);
      });
      img.attr('src', url);

      return deferred;
    },

    isImageUrl: function(s){
      return /\.\w{3,4}$/.test(s);
    }
  };

jvm.$ = jQuery;

/**
 * indexOf polyfill for IE < 9
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement, fromIndex) {

    var k;

    // 1. Let O be the result of calling ToObject passing
    //    the this value as the argument.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get
    //    internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    // 6. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7. If n >= 0, then Let k be n.
    // 8. Else, n<0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Repeat, while k < len
    while (k < len) {
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the
      //    HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      //    i.  Let elementK be the result of calling the Get
      //        internal method of O with the argument ToString(k).
      //   ii.  Let same be the result of applying the
      //        Strict Equality Comparison Algorithm to
      //        searchElement and elementK.
      //  iii.  If same is true, return k.
      if (k in O && O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}/**
 * Basic wrapper for DOM element.
 * @constructor
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */
jvm.AbstractElement = function(name, config){
  /**
   * Underlying DOM element
   * @type {DOMElement}
   * @private
   */
  this.node = this.createElement(name);

  /**
   * Name of underlying element
   * @type {String}
   * @private
   */
  this.name = name;

  /**
   * Internal store of attributes
   * @type {Object}
   * @private
   */
  this.properties = {};

  if (config) {
    this.set(config);
  }
};

/**
 * Set attribute of the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Set of parameters to initialize element with
 */
jvm.AbstractElement.prototype.set = function(property, value){
  var key;

  if (typeof property === 'object') {
    for (key in property) {
      this.properties[key] = property[key];
      this.applyAttr(key, property[key]);
    }
  } else {
    this.properties[property] = value;
    this.applyAttr(property, value);
  }
};

/**
 * Returns value of attribute.
 * @param {String} name Name of attribute
 */
jvm.AbstractElement.prototype.get = function(property){
  return this.properties[property];
};

/**
 * Applies attribute value to the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Value of attribute to apply
 * @private
 */
jvm.AbstractElement.prototype.applyAttr = function(property, value){
  this.node.setAttribute(property, value);
};

jvm.AbstractElement.prototype.remove = function(){
  jvm.$(this.node).remove();
};/**
 * Implements abstract vector canvas.
 * @constructor
 * @param {HTMLElement} container Container to put element to.
 * @param {Number} width Width of canvas.
 * @param {Number} height Height of canvas.
 */
jvm.AbstractCanvasElement = function(container, width, height){
  this.container = container;
  this.setSize(width, height);
  this.rootElement = new jvm[this.classPrefix+'GroupElement']();
  this.node.appendChild( this.rootElement.node );
  this.container.appendChild(this.node);
}

/**
 * Add element to the certain group inside of the canvas.
 * @param {HTMLElement} element Element to add to canvas.
 * @param {HTMLElement} group Group to add element into or into root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.add = function(element, group){
  group = group || this.rootElement;
  group.add(element);
  element.canvas = this;
}

/**
 * Create path and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add path into.
 */
jvm.AbstractCanvasElement.prototype.addPath = function(config, style, group){
  var el = new jvm[this.classPrefix+'PathElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create circle and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addCircle = function(config, style, group){
  var el = new jvm[this.classPrefix+'CircleElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create circle and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addImage = function(config, style, group){
  var el = new jvm[this.classPrefix+'ImageElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create text and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addText = function(config, style, group){
  var el = new jvm[this.classPrefix+'TextElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Add group to the another group inside of the canvas.
 * @param {HTMLElement} group Group to add circle into or root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.addGroup = function(parentGroup){
  var el = new jvm[this.classPrefix+'GroupElement']();

  if (parentGroup) {
    parentGroup.node.appendChild(el.node);
  } else {
    this.node.appendChild(el.node);
  }
  el.canvas = this;
  return el;
};/**
 * Abstract shape element. Shape element represents some visual vector or raster object.
 * @constructor
 * @param {String} name Tag name of the element.
 * @param {Object} config Set of parameters to initialize element with.
 * @param {Object} style Object with styles to set on element initialization.
 */
jvm.AbstractShapeElement = function(name, config, style){
  this.style = style || {};
  this.style.current = this.style.current || {};
  this.isHovered = false;
  this.isSelected = false;
  this.updateStyle();
};

/**
 * Set element's style.
 * @param {Object|String} property Could be string to set only one property or object to set several style properties at once.
 * @param {String} value Value to set in case only one property should be set.
 */
jvm.AbstractShapeElement.prototype.setStyle = function(property, value){
  var styles = {};

  if (typeof property === 'object') {
    styles = property;
  } else {
    styles[property] = value;
  }
  jvm.$.extend(this.style.current, styles);
  this.updateStyle();
};


jvm.AbstractShapeElement.prototype.updateStyle = function(){
  var attrs = {};

  jvm.AbstractShapeElement.mergeStyles(attrs, this.style.initial);
  jvm.AbstractShapeElement.mergeStyles(attrs, this.style.current);
  if (this.isHovered) {
    jvm.AbstractShapeElement.mergeStyles(attrs, this.style.hover);
  }
  if (this.isSelected) {
    jvm.AbstractShapeElement.mergeStyles(attrs, this.style.selected);
    if (this.isHovered) {
      jvm.AbstractShapeElement.mergeStyles(attrs, this.style.selectedHover);
    }
  }
  this.set(attrs);
};

jvm.AbstractShapeElement.mergeStyles = function(styles, newStyles){
  var key;

  newStyles = newStyles || {};
  for (key in newStyles) {
    if (newStyles[key] === null) {
      delete styles[key];
    } else {
      styles[key] = newStyles[key];
    }
  }
}/**
 * Wrapper for SVG element.
 * @constructor
 * @extends jvm.AbstractElement
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */

jvm.SVGElement = function(name, config){
  jvm.SVGElement.parentClass.apply(this, arguments);
}

jvm.inherits(jvm.SVGElement, jvm.AbstractElement);

jvm.SVGElement.svgns = "http://www.w3.org/2000/svg";

/**
 * Creates DOM element.
 * @param {String} tagName Name of element
 * @private
 * @returns DOMElement
 */
jvm.SVGElement.prototype.createElement = function( tagName ){
  return document.createElementNS( jvm.SVGElement.svgns, tagName );
};

/**
 * Adds CSS class for underlying DOM element.
 * @param {String} className Name of CSS class name
 */
jvm.SVGElement.prototype.addClass = function( className ){
  this.node.setAttribute('class', className);
};

/**
 * Returns constructor for element by name prefixed with 'VML'.
 * @param {String} ctr Name of basic constructor to return
 * proper implementation for.
 * @returns Function
 * @private
 */
jvm.SVGElement.prototype.getElementCtr = function( ctr ){
  return jvm['SVG'+ctr];
};

jvm.SVGElement.prototype.getBBox = function(){
  return this.node.getBBox();
};jvm.SVGGroupElement = function(){
  jvm.SVGGroupElement.parentClass.call(this, 'g');
}

jvm.inherits(jvm.SVGGroupElement, jvm.SVGElement);

jvm.SVGGroupElement.prototype.add = function(element){
  this.node.appendChild( element.node );
};jvm.SVGCanvasElement = function(container, width, height){
  this.classPrefix = 'SVG';
  jvm.SVGCanvasElement.parentClass.call(this, 'svg');

  this.defsElement = new jvm.SVGElement('defs');
  this.node.appendChild( this.defsElement.node );

  jvm.AbstractCanvasElement.apply(this, arguments);
}

jvm.inherits(jvm.SVGCanvasElement, jvm.SVGElement);
jvm.mixin(jvm.SVGCanvasElement, jvm.AbstractCanvasElement);

jvm.SVGCanvasElement.prototype.setSize = function(width, height){
  this.width = width;
  this.height = height;
  this.node.setAttribute('width', width);
  this.node.setAttribute('height', height);
};

jvm.SVGCanvasElement.prototype.applyTransformParams = function(scale, transX, transY) {
  this.scale = scale;
  this.transX = transX;
  this.transY = transY;
  this.rootElement.node.setAttribute('transform', 'scale('+scale+') translate('+transX+', '+transY+')');
};jvm.SVGShapeElement = function(name, config, style){
  jvm.SVGShapeElement.parentClass.call(this, name, config);
  jvm.AbstractShapeElement.apply(this, arguments);
};

jvm.inherits(jvm.SVGShapeElement, jvm.SVGElement);
jvm.mixin(jvm.SVGShapeElement, jvm.AbstractShapeElement);

jvm.SVGShapeElement.prototype.applyAttr = function(attr, value){
  var patternEl,
    imageEl,
    that = this;

  if (attr === 'fill' && jvm.isImageUrl(value)) {
    if (!jvm.SVGShapeElement.images[value]) {
      jvm.whenImageLoaded(value).then(function(img){
        imageEl = new jvm.SVGElement('image');
        imageEl.node.setAttributeNS('http://www.w3.org/1999/xlink', 'href', value);
        imageEl.applyAttr('x', '0');
        imageEl.applyAttr('y', '0');
        imageEl.applyAttr('width', img[0].width);
        imageEl.applyAttr('height', img[0].height);

        patternEl = new jvm.SVGElement('pattern');
        patternEl.applyAttr('id', 'image'+jvm.SVGShapeElement.imageCounter);
        patternEl.applyAttr('x', 0);
        patternEl.applyAttr('y', 0);
        patternEl.applyAttr('width', img[0].width / 2);
        patternEl.applyAttr('height', img[0].height / 2);
        patternEl.applyAttr('viewBox', '0 0 '+img[0].width+' '+img[0].height);
        patternEl.applyAttr('patternUnits', 'userSpaceOnUse');
        patternEl.node.appendChild( imageEl.node );

        that.canvas.defsElement.node.appendChild( patternEl.node );

        jvm.SVGShapeElement.images[value] = jvm.SVGShapeElement.imageCounter++;

        that.applyAttr('fill', 'url(#image'+jvm.SVGShapeElement.images[value]+')');
      });
    } else {
      this.applyAttr('fill', 'url(#image'+jvm.SVGShapeElement.images[value]+')');
    }
  } else {
    jvm.SVGShapeElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};

jvm.SVGShapeElement.imageCounter = 1;
jvm.SVGShapeElement.images = {};jvm.SVGPathElement = function(config, style){
  jvm.SVGPathElement.parentClass.call(this, 'path', config, style);
  this.node.setAttribute('fill-rule', 'evenodd');
}

jvm.inherits(jvm.SVGPathElement, jvm.SVGShapeElement);jvm.SVGCircleElement = function(config, style){
  jvm.SVGCircleElement.parentClass.call(this, 'circle', config, style);
};

jvm.inherits(jvm.SVGCircleElement, jvm.SVGShapeElement);jvm.SVGImageElement = function(config, style){
  jvm.SVGImageElement.parentClass.call(this, 'image', config, style);
};

jvm.inherits(jvm.SVGImageElement, jvm.SVGShapeElement);

jvm.SVGImageElement.prototype.applyAttr = function(attr, value){
  var that = this;

  if (attr == 'image') {
    jvm.whenImageLoaded(value).then(function(img){
      that.node.setAttributeNS('http://www.w3.org/1999/xlink', 'href', value);
      that.width = img[0].width;
      that.height = img[0].height;
      that.applyAttr('width', that.width);
      that.applyAttr('height', that.height);

      that.applyAttr('x', that.cx - that.width / 2);
      that.applyAttr('y', that.cy - that.height / 2);

      jvm.$(that.node).trigger('imageloaded', [img]);
    });
  } else if(attr == 'cx') {
    this.cx = value;
    if (this.width) {
      this.applyAttr('x', value - this.width / 2);
    }
  } else if(attr == 'cy') {
    this.cy = value;
    if (this.height) {
      this.applyAttr('y', value - this.height / 2);
    }
  } else {
    jvm.SVGImageElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};jvm.SVGTextElement = function(config, style){
  jvm.SVGTextElement.parentClass.call(this, 'text', config, style);
}

jvm.inherits(jvm.SVGTextElement, jvm.SVGShapeElement);

jvm.SVGTextElement.prototype.applyAttr = function(attr, value){
  if (attr === 'text') {
    this.node.textContent = value;
  } else {
    jvm.SVGTextElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};/**
 * Wrapper for VML element.
 * @constructor
 * @extends jvm.AbstractElement
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */

jvm.VMLElement = function(name, config){
  if (!jvm.VMLElement.VMLInitialized) {
    jvm.VMLElement.initializeVML();
  }

  jvm.VMLElement.parentClass.apply(this, arguments);
};

jvm.inherits(jvm.VMLElement, jvm.AbstractElement);

/**
 * Shows if VML was already initialized for the current document or not.
 * @static
 * @private
 * @type {Boolean}
 */
jvm.VMLElement.VMLInitialized = false;

/**
 * Initializes VML handling before creating the first element
 * (adds CSS class and creates namespace). Adds one of two forms
 * of createElement method depending of support by browser.
 * @static
 * @private
 */

// The following method of VML handling is borrowed from the
// Raphael library by Dmitry Baranovsky.

jvm.VMLElement.initializeVML = function(){
  try {
    if (!document.namespaces.rvml) {
      document.namespaces.add("rvml","urn:schemas-microsoft-com:vml");
    }
    /**
     * Creates DOM element.
     * @param {String} tagName Name of element
     * @private
     * @returns DOMElement
     */
    jvm.VMLElement.prototype.createElement = function (tagName) {
      return document.createElement('<rvml:' + tagName + ' class="rvml">');
    };
  } catch (e) {
    /**
     * @private
     */
    jvm.VMLElement.prototype.createElement = function (tagName) {
      return document.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
    };
  }
  document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
  jvm.VMLElement.VMLInitialized = true;
};

/**
 * Returns constructor for element by name prefixed with 'VML'.
 * @param {String} ctr Name of basic constructor to return
 * proper implementation for.
 * @returns Function
 * @private
 */
jvm.VMLElement.prototype.getElementCtr = function( ctr ){
  return jvm['VML'+ctr];
};

/**
 * Adds CSS class for underlying DOM element.
 * @param {String} className Name of CSS class name
 */
jvm.VMLElement.prototype.addClass = function( className ){
  jvm.$(this.node).addClass(className);
};

/**
 * Applies attribute value to the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Value of attribute to apply
 * @private
 */
jvm.VMLElement.prototype.applyAttr = function( attr, value ){
  this.node[attr] = value;
};

/**
 * Returns boundary box for the element.
 * @returns {Object} Boundary box with numeric fields: x, y, width, height
 * @override
 */
jvm.VMLElement.prototype.getBBox = function(){
  var node = jvm.$(this.node);

  return {
    x: node.position().left / this.canvas.scale,
    y: node.position().top / this.canvas.scale,
    width: node.width() / this.canvas.scale,
    height: node.height() / this.canvas.scale
  };
};jvm.VMLGroupElement = function(){
  jvm.VMLGroupElement.parentClass.call(this, 'group');

  this.node.style.left = '0px';
  this.node.style.top = '0px';
  this.node.coordorigin = "0 0";
};

jvm.inherits(jvm.VMLGroupElement, jvm.VMLElement);

jvm.VMLGroupElement.prototype.add = function(element){
  this.node.appendChild( element.node );
};jvm.VMLCanvasElement = function(container, width, height){
  this.classPrefix = 'VML';
  jvm.VMLCanvasElement.parentClass.call(this, 'group');
  jvm.AbstractCanvasElement.apply(this, arguments);
  this.node.style.position = 'absolute';
};

jvm.inherits(jvm.VMLCanvasElement, jvm.VMLElement);
jvm.mixin(jvm.VMLCanvasElement, jvm.AbstractCanvasElement);

jvm.VMLCanvasElement.prototype.setSize = function(width, height){
  var paths,
    groups,
    i,
    l;

  this.width = width;
  this.height = height;
  this.node.style.width = width + "px";
  this.node.style.height = height + "px";
  this.node.coordsize = width+' '+height;
  this.node.coordorigin = "0 0";
  if (this.rootElement) {
    paths = this.rootElement.node.getElementsByTagName('shape');
    for(i = 0, l = paths.length; i < l; i++) {
      paths[i].coordsize = width+' '+height;
      paths[i].style.width = width+'px';
      paths[i].style.height = height+'px';
    }
    groups = this.node.getElementsByTagName('group');
    for(i = 0, l = groups.length; i < l; i++) {
      groups[i].coordsize = width+' '+height;
      groups[i].style.width = width+'px';
      groups[i].style.height = height+'px';
    }
  }
};

jvm.VMLCanvasElement.prototype.applyTransformParams = function(scale, transX, transY) {
  this.scale = scale;
  this.transX = transX;
  this.transY = transY;
  this.rootElement.node.coordorigin = (this.width-transX-this.width/100)+','+(this.height-transY-this.height/100);
  this.rootElement.node.coordsize = this.width/scale+','+this.height/scale;
};jvm.VMLShapeElement = function(name, config){
  jvm.VMLShapeElement.parentClass.call(this, name, config);

  this.fillElement = new jvm.VMLElement('fill');
  this.strokeElement = new jvm.VMLElement('stroke');
  this.node.appendChild(this.fillElement.node);
  this.node.appendChild(this.strokeElement.node);
  this.node.stroked = false;

  jvm.AbstractShapeElement.apply(this, arguments);
};

jvm.inherits(jvm.VMLShapeElement, jvm.VMLElement);
jvm.mixin(jvm.VMLShapeElement, jvm.AbstractShapeElement);

jvm.VMLShapeElement.prototype.applyAttr = function(attr, value){
  switch (attr) {
    case 'fill':
      this.node.fillcolor = value;
      break;
    case 'fill-opacity':
      this.fillElement.node.opacity = Math.round(value*100)+'%';
      break;
    case 'stroke':
      if (value === 'none') {
        this.node.stroked = false;
      } else {
        this.node.stroked = true;
      }
      this.node.strokecolor = value;
      break;
    case 'stroke-opacity':
      this.strokeElement.node.opacity = Math.round(value*100)+'%';
      break;
    case 'stroke-width':
      if (parseInt(value, 10) === 0) {
        this.node.stroked = false;
      } else {
        this.node.stroked = true;
      }
      this.node.strokeweight = value;
      break;
    case 'd':
      this.node.path = jvm.VMLPathElement.pathSvgToVml(value);
      break;
    default:
      jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};jvm.VMLPathElement = function(config, style){
  var scale = new jvm.VMLElement('skew');

  jvm.VMLPathElement.parentClass.call(this, 'shape', config, style);

  this.node.coordorigin = "0 0";

  scale.node.on = true;
  scale.node.matrix = '0.01,0,0,0.01,0,0';
  scale.node.offset = '0,0';

  this.node.appendChild(scale.node);
};

jvm.inherits(jvm.VMLPathElement, jvm.VMLShapeElement);

jvm.VMLPathElement.prototype.applyAttr = function(attr, value){
  if (attr === 'd') {
    this.node.path = jvm.VMLPathElement.pathSvgToVml(value);
  } else {
    jvm.VMLShapeElement.prototype.applyAttr.call(this, attr, value);
  }
};

jvm.VMLPathElement.pathSvgToVml = function(path) {
  var cx = 0, cy = 0, ctrlx, ctrly;

  path = path.replace(/(-?\d+)e(-?\d+)/g, '0');
  return path.replace(/([MmLlHhVvCcSs])\s*((?:-?\d*(?:\.\d+)?\s*,?\s*)+)/g, function(segment, letter, coords, index){
    coords = coords.replace(/(\d)-/g, '$1,-')
      .replace(/^\s+/g, '')
      .replace(/\s+$/g, '')
      .replace(/\s+/g, ',').split(',');
    if (!coords[0]) coords.shift();
    for (var i=0, l=coords.length; i<l; i++) {
      coords[i] = Math.round(100*coords[i]);
    }
    switch (letter) {
      case 'm':
        cx += coords[0];
        cy += coords[1];
        return 't'+coords.join(',');
      case 'M':
        cx = coords[0];
        cy = coords[1];
        return 'm'+coords.join(',');
      case 'l':
        cx += coords[0];
        cy += coords[1];
        return 'r'+coords.join(',');
      case 'L':
        cx = coords[0];
        cy = coords[1];
        return 'l'+coords.join(',');
      case 'h':
        cx += coords[0];
        return 'r'+coords[0]+',0';
      case 'H':
        cx = coords[0];
        return 'l'+cx+','+cy;
      case 'v':
        cy += coords[0];
        return 'r0,'+coords[0];
      case 'V':
        cy = coords[0];
        return 'l'+cx+','+cy;
      case 'c':
        ctrlx = cx + coords[coords.length-4];
        ctrly = cy + coords[coords.length-3];
        cx += coords[coords.length-2];
        cy += coords[coords.length-1];
        return 'v'+coords.join(',');
      case 'C':
        ctrlx = coords[coords.length-4];
        ctrly = coords[coords.length-3];
        cx = coords[coords.length-2];
        cy = coords[coords.length-1];
        return 'c'+coords.join(',');
      case 's':
        coords.unshift(cy-ctrly);
        coords.unshift(cx-ctrlx);
        ctrlx = cx + coords[coords.length-4];
        ctrly = cy + coords[coords.length-3];
        cx += coords[coords.length-2];
        cy += coords[coords.length-1];
        return 'v'+coords.join(',');
      case 'S':
        coords.unshift(cy+cy-ctrly);
        coords.unshift(cx+cx-ctrlx);
        ctrlx = coords[coords.length-4];
        ctrly = coords[coords.length-3];
        cx = coords[coords.length-2];
        cy = coords[coords.length-1];
        return 'c'+coords.join(',');
    }
    return '';
  }).replace(/z/g, 'e');
};jvm.VMLCircleElement = function(config, style){
  jvm.VMLCircleElement.parentClass.call(this, 'oval', config, style);
};

jvm.inherits(jvm.VMLCircleElement, jvm.VMLShapeElement);

jvm.VMLCircleElement.prototype.applyAttr = function(attr, value){
  switch (attr) {
    case 'r':
      this.node.style.width = value*2+'px';
      this.node.style.height = value*2+'px';
      this.applyAttr('cx', this.get('cx') || 0);
      this.applyAttr('cy', this.get('cy') || 0);
      break;
    case 'cx':
      if (!value) return;
      this.node.style.left = value - (this.get('r') || 0) + 'px';
      break;
    case 'cy':
      if (!value) return;
      this.node.style.top = value - (this.get('r') || 0) + 'px';
      break;
    default:
      jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this, attr, value);
  }
};/**
 * Class for vector images manipulations.
 * @constructor
 * @param {DOMElement} container to place canvas to
 * @param {Number} width
 * @param {Number} height
 */
jvm.VectorCanvas = function(container, width, height) {
  this.mode = window.SVGAngle ? 'svg' : 'vml';

  if (this.mode == 'svg') {
    this.impl = new jvm.SVGCanvasElement(container, width, height);
  } else {
    this.impl = new jvm.VMLCanvasElement(container, width, height);
  }
  this.impl.mode = this.mode;
  return this.impl;
};jvm.SimpleScale = function(scale){
  this.scale = scale;
};

jvm.SimpleScale.prototype.getValue = function(value){
  return value;
};jvm.OrdinalScale = function(scale){
  this.scale = scale;
};

jvm.OrdinalScale.prototype.getValue = function(value){
  return this.scale[value];
};

jvm.OrdinalScale.prototype.getTicks = function(){
  var ticks = [],
    key;

  for (key in this.scale) {
    ticks.push({
      label: key,
      value: this.scale[key]
    });
  }

  return ticks;
};jvm.NumericScale = function(scale, normalizeFunction, minValue, maxValue) {
  this.scale = [];

  normalizeFunction = normalizeFunction || 'linear';

  if (scale) this.setScale(scale);
  if (normalizeFunction) this.setNormalizeFunction(normalizeFunction);
  if (typeof minValue !== 'undefined' ) this.setMin(minValue);
  if (typeof maxValue !== 'undefined' ) this.setMax(maxValue);
};

jvm.NumericScale.prototype = {
  setMin: function(min) {
    this.clearMinValue = min;
    if (typeof this.normalize === 'function') {
      this.minValue = this.normalize(min);
    } else {
      this.minValue = min;
    }
  },

  setMax: function(max) {
    this.clearMaxValue = max;
    if (typeof this.normalize === 'function') {
      this.maxValue = this.normalize(max);
    } else {
      this.maxValue = max;
    }
  },

  setScale: function(scale) {
    var i;

    this.scale = [];
    for (i = 0; i < scale.length; i++) {
      this.scale[i] = [scale[i]];
    }
  },

  setNormalizeFunction: function(f) {
    if (f === 'polynomial') {
      this.normalize = function(value) {
        return Math.pow(value, 0.2);
      }
    } else if (f === 'linear') {
      delete this.normalize;
    } else {
      this.normalize = f;
    }
    this.setMin(this.clearMinValue);
    this.setMax(this.clearMaxValue);
  },

  getValue: function(value) {
    var lengthes = [],
      fullLength = 0,
      l,
      i = 0,
      c;

    if (typeof this.normalize === 'function') {
      value = this.normalize(value);
    }
    for (i = 0; i < this.scale.length-1; i++) {
      l = this.vectorLength(this.vectorSubtract(this.scale[i+1], this.scale[i]));
      lengthes.push(l);
      fullLength += l;
    }

    c = (this.maxValue - this.minValue) / fullLength;
    for (i=0; i<lengthes.length; i++) {
      lengthes[i] *= c;
    }

    i = 0;
    value -= this.minValue;
    while (value - lengthes[i] >= 0) {
      value -= lengthes[i];
      i++;
    }

    if (i == this.scale.length - 1) {
      value = this.vectorToNum(this.scale[i])
    } else {
      value = (
        this.vectorToNum(
          this.vectorAdd(this.scale[i],
            this.vectorMult(
              this.vectorSubtract(this.scale[i+1], this.scale[i]),
              (value) / (lengthes[i])
            )
          )
        )
      );
    }

    return value;
  },

  vectorToNum: function(vector) {
    var num = 0,
      i;

    for (i = 0; i < vector.length; i++) {
      num += Math.round(vector[i])*Math.pow(256, vector.length-i-1);
    }
    return num;
  },

  vectorSubtract: function(vector1, vector2) {
    var vector = [],
      i;

    for (i = 0; i < vector1.length; i++) {
      vector[i] = vector1[i] - vector2[i];
    }
    return vector;
  },

  vectorAdd: function(vector1, vector2) {
    var vector = [],
      i;

    for (i = 0; i < vector1.length; i++) {
      vector[i] = vector1[i] + vector2[i];
    }
    return vector;
  },

  vectorMult: function(vector, num) {
    var result = [],
      i;

    for (i = 0; i < vector.length; i++) {
      result[i] = vector[i] * num;
    }
    return result;
  },

  vectorLength: function(vector) {
    var result = 0,
      i;
    for (i = 0; i < vector.length; i++) {
      result += vector[i] * vector[i];
    }
    return Math.sqrt(result);
  },

  /* Derived from d3 implementation https://github.com/mbostock/d3/blob/master/src/scale/linear.js#L94 */
  getTicks: function(){
    var m = 5,
      extent = [this.clearMinValue, this.clearMaxValue],
      span = extent[1] - extent[0],
      step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)),
      err = m / span * step,
      ticks = [],
      tick,
      v;

    if (err <= .15) step *= 10;
    else if (err <= .35) step *= 5;
    else if (err <= .75) step *= 2;

    extent[0] = Math.floor(extent[0] / step) * step;
    extent[1] = Math.ceil(extent[1] / step) * step;

    tick = extent[0];
    while (tick <= extent[1]) {
      if (tick == extent[0]) {
        v = this.clearMinValue;
      } else if (tick == extent[1]) {
        v = this.clearMaxValue;
      } else {
        v = tick;
      }
      ticks.push({
        label: tick,
        value: this.getValue(v)
      });
      tick += step;
    }

    return ticks;
  }
};
jvm.ColorScale = function(colors, normalizeFunction, minValue, maxValue) {
  jvm.ColorScale.parentClass.apply(this, arguments);
}

jvm.inherits(jvm.ColorScale, jvm.NumericScale);

jvm.ColorScale.prototype.setScale = function(scale) {
  var i;

  for (i = 0; i < scale.length; i++) {
    this.scale[i] = jvm.ColorScale.rgbToArray(scale[i]);
  }
};

jvm.ColorScale.prototype.getValue = function(value) {
  return jvm.ColorScale.numToRgb(jvm.ColorScale.parentClass.prototype.getValue.call(this, value));
};

jvm.ColorScale.arrayToRgb = function(ar) {
  var rgb = '#',
    d,
    i;

  for (i = 0; i < ar.length; i++) {
    d = ar[i].toString(16);
    rgb += d.length == 1 ? '0'+d : d;
  }
  return rgb;
};

jvm.ColorScale.numToRgb = function(num) {
  num = num.toString(16);

  while (num.length < 6) {
    num = '0' + num;
  }

  return '#'+num;
};

jvm.ColorScale.rgbToArray = function(rgb) {
  rgb = rgb.substr(1);
  return [parseInt(rgb.substr(0, 2), 16), parseInt(rgb.substr(2, 2), 16), parseInt(rgb.substr(4, 2), 16)];
};/**
 * Represents map legend.
 * @constructor
 * @param {Object} params Configuration parameters.
 * @param {String} params.cssClass Additional CSS class to apply to legend element.
 * @param {Boolean} params.vertical If <code>true</code> legend will be rendered as vertical.
 * @param {String} params.title Legend title.
 * @param {Function} params.labelRender Method to convert series values to legend labels.
 */
jvm.Legend = function(params) {
  this.params = params || {};
  this.map = this.params.map;
  this.series = this.params.series;
  this.body = jvm.$('<div/>');
  this.body.addClass('jvectormap-legend');
  if (this.params.cssClass) {
    this.body.addClass(this.params.cssClass);
  }

  if (params.vertical) {
    this.map.legendCntVertical.append( this.body );
  } else {
    this.map.legendCntHorizontal.append( this.body );
  }

  this.render();
}

jvm.Legend.prototype.render = function(){
  var ticks = this.series.scale.getTicks(),
    i,
    inner = jvm.$('<div/>').addClass('jvectormap-legend-inner'),
    tick,
    sample,
    label;

  this.body.html('');
  if (this.params.title) {
    this.body.append(
      jvm.$('<div/>').addClass('jvectormap-legend-title').html(this.params.title)
    );
  }
  this.body.append(inner);

  for (i = 0; i < ticks.length; i++) {
    tick = jvm.$('<div/>').addClass('jvectormap-legend-tick');
    sample = jvm.$('<div/>').addClass('jvectormap-legend-tick-sample');

    switch (this.series.params.attribute) {
      case 'fill':
        if (jvm.isImageUrl(ticks[i].value)) {
          sample.css('background', 'url('+ticks[i].value+')');
        } else {
          sample.css('background', ticks[i].value);
        }
        break;
      case 'stroke':
        sample.css('background', ticks[i].value);
        break;
      case 'image':
        sample.css('background', 'url('+ticks[i].value+') no-repeat center center');
        break;
      case 'r':
        jvm.$('<div/>').css({
          'border-radius': ticks[i].value,
          border: this.map.params.markerStyle.initial['stroke-width']+'px '+
            this.map.params.markerStyle.initial['stroke']+' solid',
          width: ticks[i].value * 2 + 'px',
          height: ticks[i].value * 2 + 'px',
          background: this.map.params.markerStyle.initial['fill']
        }).appendTo(sample);
        break;
    }
    tick.append( sample );
    label = ticks[i].label;
    if (this.params.labelRender) {
      label = this.params.labelRender(label);
    }
    tick.append( jvm.$('<div>'+label+' </div>').addClass('jvectormap-legend-tick-text') );
    inner.append(tick);
  }
  inner.append( jvm.$('<div/>').css('clear', 'both') );
}/**
 * Creates data series.
 * @constructor
 * @param {Object} params Parameters to initialize series with.
 * @param {Array} params.values The data set to visualize.
 * @param {String} params.attribute Numberic or color attribute to use for data visualization. This could be: <code>fill</code>, <code>stroke</code>, <code>fill-opacity</code>, <code>stroke-opacity</code> for markers and regions and <code>r</code> (radius) for markers only.
 * @param {Array} params.scale Values used to map a dimension of data to a visual representation. The first value sets visualization for minimum value from the data set and the last value sets visualization for the maximum value. There also could be intermidiate values. Default value is <code>['#C8EEFF', '#0071A4']</code>
 * @param {Function|String} params.normalizeFunction The function used to map input values to the provided scale. This parameter could be provided as function or one of the strings: <code>'linear'</code> or <code>'polynomial'</code>, while <code>'linear'</code> is used by default. The function provided takes value from the data set as an input and returns corresponding value from the scale.
 * @param {Number} params.min Minimum value of the data set. Could be calculated automatically if not provided.
 * @param {Number} params.min Maximum value of the data set. Could be calculated automatically if not provided.
 */
jvm.DataSeries = function(params, elements, map) {
  var scaleConstructor;

  params = params || {};
  params.attribute = params.attribute || 'fill';

  this.elements = elements;
  this.params = params;
  this.map = map;

  if (params.attributes) {
    this.setAttributes(params.attributes);
  }

  if (jvm.$.isArray(params.scale)) {
    scaleConstructor = (params.attribute === 'fill' || params.attribute === 'stroke') ? jvm.ColorScale : jvm.NumericScale;
    this.scale = new scaleConstructor(params.scale, params.normalizeFunction, params.min, params.max);
  } else if (params.scale) {
    this.scale = new jvm.OrdinalScale(params.scale);
  } else {
    this.scale = new jvm.SimpleScale(params.scale);
  }

  this.values = params.values || {};
  this.setValues(this.values);

  if (this.params.legend) {
    this.legend = new jvm.Legend($.extend({
      map: this.map,
      series: this
    }, this.params.legend))
  }
};

jvm.DataSeries.prototype = {
  setAttributes: function(key, attr){
    var attrs = key,
      code;

    if (typeof key == 'string') {
      if (this.elements[key]) {
        this.elements[key].setStyle(this.params.attribute, attr);
      }
    } else {
      for (code in attrs) {
        if (this.elements[code]) {
          this.elements[code].element.setStyle(this.params.attribute, attrs[code]);
        }
      }
    }
  },

  /**
   * Set values for the data set.
   * @param {Object} values Object which maps codes of regions or markers to values.
   */
  setValues: function(values) {
    var max = -Number.MAX_VALUE,
      min = Number.MAX_VALUE,
      val,
      cc,
      attrs = {};

    if (!(this.scale instanceof jvm.OrdinalScale) && !(this.scale instanceof jvm.SimpleScale)) {
      // we have a color scale as an array
      if (typeof this.params.min === 'undefined' || typeof this.params.max === 'undefined') {
        // min and/or max are not defined, so calculate them
        for (cc in values) {
          val = parseFloat(values[cc]);
          if (val > max) max = val;
          if (val < min) min = val;
        }
      }

      if (typeof this.params.min === 'undefined') {
        this.scale.setMin(min);
        this.params.min = min;
      } else {
        this.scale.setMin(this.params.min);
      }

      if (typeof this.params.max === 'undefined') {
        this.scale.setMax(max);
        this.params.max = max;
      } else {
        this.scale.setMax(this.params.max);
      }

      for (cc in values) {
        if (cc != 'indexOf') {
          val = parseFloat(values[cc]);
          if (!isNaN(val)) {
            attrs[cc] = this.scale.getValue(val);
          } else {
            attrs[cc] = this.elements[cc].element.style.initial[this.params.attribute];
          }
        }
      }
    } else {
      for (cc in values) {
        if (values[cc]) {
          attrs[cc] = this.scale.getValue(values[cc]);
        } else {
          attrs[cc] = this.elements[cc].element.style.initial[this.params.attribute];
        }
      }
    }

    this.setAttributes(attrs);
    jvm.$.extend(this.values, values);
  },

  clear: function(){
    var key,
      attrs = {};

    for (key in this.values) {
      if (this.elements[key]) {
        attrs[key] = this.elements[key].element.shape.style.initial[this.params.attribute];
      }
    }
    this.setAttributes(attrs);
    this.values = {};
  },

  /**
   * Set scale of the data series.
   * @param {Array} scale Values representing scale.
   */
  setScale: function(scale) {
    this.scale.setScale(scale);
    if (this.values) {
      this.setValues(this.values);
    }
  },

  /**
   * Set normalize function of the data series.
   * @param {Function|String} normilizeFunction.
   */
  setNormalizeFunction: function(f) {
    this.scale.setNormalizeFunction(f);
    if (this.values) {
      this.setValues(this.values);
    }
  }
};
/**
 * Contains methods for transforming point on sphere to
 * Cartesian coordinates using various projections.
 * @class
 */
jvm.Proj = {
  degRad: 180 / Math.PI,
  radDeg: Math.PI / 180,
  radius: 6381372,

  sgn: function(n){
    if (n > 0) {
      return 1;
    } else if (n < 0) {
      return -1;
    } else {
      return n;
    }
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Miller projection
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  mill: function(lat, lng, c){
    return {
      x: this.radius * (lng - c) * this.radDeg,
      y: - this.radius * Math.log(Math.tan((45 + 0.4 * lat) * this.radDeg)) / 0.8
    };
  },

  /**
   * Inverse function of mill()
   * Converts Cartesian coordinates to point on sphere using Miller projection
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  mill_inv: function(x, y, c){
    return {
      lat: (2.5 * Math.atan(Math.exp(0.8 * y / this.radius)) - 5 * Math.PI / 8) * this.degRad,
      lng: (c * this.radDeg + x / this.radius) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Mercator projection
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  merc: function(lat, lng, c){
    return {
      x: this.radius * (lng - c) * this.radDeg,
      y: - this.radius * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360))
    };
  },

  /**
   * Inverse function of merc()
   * Converts Cartesian coordinates to point on sphere using Mercator projection
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  merc_inv: function(x, y, c){
    return {
      lat: (2 * Math.atan(Math.exp(y / this.radius)) - Math.PI / 2) * this.degRad,
      lng: (c * this.radDeg + x / this.radius) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Albers Equal-Area Conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/AlbersEqual-AreaConicProjection.html">Albers Equal-Area Conic projection</a>
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  aea: function(lat, lng, c){
    var fi0 = 0,
      lambda0 = c * this.radDeg,
      fi1 = 29.5 * this.radDeg,
      fi2 = 45.5 * this.radDeg,
      fi = lat * this.radDeg,
      lambda = lng * this.radDeg,
      n = (Math.sin(fi1)+Math.sin(fi2)) / 2,
      C = Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),
      theta = n*(lambda-lambda0),
      ro = Math.sqrt(C-2*n*Math.sin(fi))/n,
      ro0 = Math.sqrt(C-2*n*Math.sin(fi0))/n;

    return {
      x: ro * Math.sin(theta) * this.radius,
      y: - (ro0 - ro * Math.cos(theta)) * this.radius
    };
  },

  /**
   * Converts Cartesian coordinates to the point on sphere using Albers Equal-Area Conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/AlbersEqual-AreaConicProjection.html">Albers Equal-Area Conic projection</a>
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  aea_inv: function(xCoord, yCoord, c){
    var x = xCoord / this.radius,
      y = yCoord / this.radius,
      fi0 = 0,
      lambda0 = c * this.radDeg,
      fi1 = 29.5 * this.radDeg,
      fi2 = 45.5 * this.radDeg,
      n = (Math.sin(fi1)+Math.sin(fi2)) / 2,
      C = Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),
      ro0 = Math.sqrt(C-2*n*Math.sin(fi0))/n,
      ro = Math.sqrt(x*x+(ro0-y)*(ro0-y)),
      theta = Math.atan( x / (ro0 - y) );

    return {
      lat: (Math.asin((C - ro * ro * n * n) / (2 * n))) * this.degRad,
      lng: (lambda0 + theta / n) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Lambert conformal
   * conic projection
   * @see <a href="http://mathworld.wolfram.com/LambertConformalConicProjection.html">Lambert Conformal Conic Projection</a>
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  lcc: function(lat, lng, c){
    var fi0 = 0,
      lambda0 = c * this.radDeg,
      lambda = lng * this.radDeg,
      fi1 = 33 * this.radDeg,
      fi2 = 45 * this.radDeg,
      fi = lat * this.radDeg,
      n = Math.log( Math.cos(fi1) * (1 / Math.cos(fi2)) ) / Math.log( Math.tan( Math.PI / 4 + fi2 / 2) * (1 / Math.tan( Math.PI / 4 + fi1 / 2) ) ),
      F = ( Math.cos(fi1) * Math.pow( Math.tan( Math.PI / 4 + fi1 / 2 ), n ) ) / n,
      ro = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi / 2 ), n ),
      ro0 = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi0 / 2 ), n );

    return {
      x: ro * Math.sin( n * (lambda - lambda0) ) * this.radius,
      y: - (ro0 - ro * Math.cos( n * (lambda - lambda0) ) ) * this.radius
    };
  },

  /**
   * Converts Cartesian coordinates to the point on sphere using Lambert conformal conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/LambertConformalConicProjection.html">Lambert Conformal Conic Projection</a>
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  lcc_inv: function(xCoord, yCoord, c){
    var x = xCoord / this.radius,
      y = yCoord / this.radius,
      fi0 = 0,
      lambda0 = c * this.radDeg,
      fi1 = 33 * this.radDeg,
      fi2 = 45 * this.radDeg,
      n = Math.log( Math.cos(fi1) * (1 / Math.cos(fi2)) ) / Math.log( Math.tan( Math.PI / 4 + fi2 / 2) * (1 / Math.tan( Math.PI / 4 + fi1 / 2) ) ),
      F = ( Math.cos(fi1) * Math.pow( Math.tan( Math.PI / 4 + fi1 / 2 ), n ) ) / n,
      ro0 = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi0 / 2 ), n ),
      ro = this.sgn(n) * Math.sqrt(x*x+(ro0-y)*(ro0-y)),
      theta = Math.atan( x / (ro0 - y) );

    return {
      lat: (2 * Math.atan(Math.pow(F/ro, 1/n)) - Math.PI / 2) * this.degRad,
      lng: (lambda0 + theta / n) * this.degRad
    };
  }
};jvm.MapObject = function(config){};

jvm.MapObject.prototype.getLabelText = function(key){
  var text;

  if (this.config.label) {
    if (typeof this.config.label.render === 'function') {
      text = this.config.label.render(key);
    } else {
      text = key;
    }
  } else {
    text = null;
  }
  return text;
}

jvm.MapObject.prototype.getLabelOffsets = function(key){
  var offsets;

  if (this.config.label) {
    if (typeof this.config.label.offsets === 'function') {
      offsets = this.config.label.offsets(key);
    } else if (typeof this.config.label.offsets === 'object') {
      offsets = this.config.label.offsets[key];
    }
  }
  return offsets || [0, 0];
}

/**
 * Set hovered state to the element. Hovered state means mouse cursor is over element. Styles will be updates respectively.
 * @param {Boolean} isHovered <code>true</code> to make element hovered, <code>false</code> otherwise.
 */
jvm.MapObject.prototype.setHovered = function(isHovered){
  if (this.isHovered !== isHovered) {
    this.isHovered = isHovered;
    this.shape.isHovered = isHovered;
    this.shape.updateStyle();
    if (this.label) {
      this.label.isHovered = isHovered;
      this.label.updateStyle();
    }
  }
};

/**
 * Set selected state to the element. Styles will be updates respectively.
 * @param {Boolean} isSelected <code>true</code> to make element selected, <code>false</code> otherwise.
 */
jvm.MapObject.prototype.setSelected = function(isSelected){
  if (this.isSelected !== isSelected) {
    this.isSelected = isSelected;
    this.shape.isSelected = isSelected;
    this.shape.updateStyle();
    if (this.label) {
      this.label.isSelected = isSelected;
      this.label.updateStyle();
    }
    jvm.$(this.shape).trigger('selected', [isSelected]);
  }
};

jvm.MapObject.prototype.setStyle = function(){
  this.shape.setStyle.apply(this.shape, arguments);
};

jvm.MapObject.prototype.remove = function(){
  this.shape.remove();
  if (this.label) {
    this.label.remove();
  }
};jvm.Region = function(config){
  var bbox,
    text,
    offsets,
    labelDx,
    labelDy;

  this.config = config;
  this.map = this.config.map;

  this.shape = config.canvas.addPath({
    d: config.path,
    'data-code': config.code
  }, config.style, config.canvas.rootElement);
  this.shape.addClass('jvectormap-region jvectormap-element');

  bbox = this.shape.getBBox();

  text = this.getLabelText(config.code);
  if (this.config.label && text) {
    offsets = this.getLabelOffsets(config.code);
    this.labelX = bbox.x + bbox.width / 2 + offsets[0];
    this.labelY = bbox.y + bbox.height / 2 + offsets[1];
    this.label = config.canvas.addText({
      text: text,
      'text-anchor': 'middle',
      'alignment-baseline': 'central',
      x: this.labelX,
      y: this.labelY,
      'data-code': config.code
    }, config.labelStyle, config.labelsGroup);
    this.label.addClass('jvectormap-region jvectormap-element');
  }
};

jvm.inherits(jvm.Region, jvm.MapObject);

jvm.Region.prototype.updateLabelPosition = function(){
  if (this.label) {
    this.label.set({
      x: this.labelX * this.map.scale + this.map.transX * this.map.scale,
      y: this.labelY * this.map.scale + this.map.transY * this.map.scale
    });
  }
};jvm.Marker = function(config){
  var text,
    offsets;

  this.config = config;
  this.map = this.config.map;

  this.isImage = !!this.config.style.initial.image;
  this.createShape();

  text = this.getLabelText(config.index);
  if (this.config.label && text) {
    this.offsets = this.getLabelOffsets(config.index);
    this.labelX = config.cx / this.map.scale - this.map.transX;
    this.labelY = config.cy / this.map.scale - this.map.transY;
    this.label = config.canvas.addText({
      text: text,
      'data-index': config.index,
      dy: "0.6ex",
      x: this.labelX,
      y: this.labelY
    }, config.labelStyle, config.labelsGroup);

    this.label.addClass('jvectormap-marker jvectormap-element');
  }
};

jvm.inherits(jvm.Marker, jvm.MapObject);

jvm.Marker.prototype.createShape = function(){
  var that = this;

  if (this.shape) {
    this.shape.remove();
  }
  this.shape = this.config.canvas[this.isImage ? 'addImage' : 'addCircle']({
    "data-index": this.config.index,
    cx: this.config.cx,
    cy: this.config.cy
  }, this.config.style, this.config.group);

  this.shape.addClass('jvectormap-marker jvectormap-element');

  if (this.isImage) {
    jvm.$(this.shape.node).on('imageloaded', function(){
      that.updateLabelPosition();
    });
  }
};

jvm.Marker.prototype.updateLabelPosition = function(){
  if (this.label) {
    this.label.set({
      x: this.labelX * this.map.scale + this.offsets[0] +
        this.map.transX * this.map.scale + 5 + (this.isImage ? (this.shape.width || 0) / 2 : this.shape.properties.r),
      y: this.labelY * this.map.scale + this.map.transY * this.map.scale + this.offsets[1]
    });
  }
};

jvm.Marker.prototype.setStyle = function(property, value){
  var isImage;

  jvm.Marker.parentClass.prototype.setStyle.apply(this, arguments);

  if (property === 'r') {
    this.updateLabelPosition();
  }

  isImage = !!this.shape.get('image');
  if (isImage != this.isImage) {
    this.isImage = isImage;
    this.config.style = jvm.$.extend(true, {}, this.shape.style);
    this.createShape();
  }
};/**
 * Creates map, draws paths, binds events.
 * @constructor
 * @param {Object} params Parameters to initialize map with.
 * @param {String} params.map Name of the map in the format <code>territory_proj_lang</code> where <code>territory</code> is a unique code or name of the territory which the map represents (ISO 3166 standard is used where possible), <code>proj</code> is a name of projection used to generate representation of the map on the plane (projections are named according to the conventions of proj4 utility) and <code>lang</code> is a code of the language, used for the names of regions.
 * @param {String} params.backgroundColor Background color of the map in CSS format.
 * @param {Boolean} params.zoomOnScroll When set to true map could be zoomed using mouse scroll. Default value is <code>true</code>.
 * @param {Boolean} params.zoomOnScrollSpeed Mouse scroll speed. Number from 1 to 10. Default value is <code>3</code>.
 * @param {Boolean} params.panOnDrag When set to true, the map pans when being dragged. Default value is <code>true</code>.
 * @param {Number} params.zoomMax Indicates the maximum zoom ratio which could be reached zooming the map. Default value is <code>8</code>.
 * @param {Number} params.zoomMin Indicates the minimum zoom ratio which could be reached zooming the map. Default value is <code>1</code>.
 * @param {Number} params.zoomStep Indicates the multiplier used to zoom map with +/- buttons. Default value is <code>1.6</code>.
 * @param {Boolean} params.zoomAnimate Indicates whether or not to animate changing of map zoom with zoom buttons.
 * @param {Boolean} params.regionsSelectable When set to true regions of the map could be selected. Default value is <code>false</code>.
 * @param {Boolean} params.regionsSelectableOne Allow only one region to be selected at the moment. Default value is <code>false</code>.
 * @param {Boolean} params.markersSelectable When set to true markers on the map could be selected. Default value is <code>false</code>.
 * @param {Boolean} params.markersSelectableOne Allow only one marker to be selected at the moment. Default value is <code>false</code>.
 * @param {Object} params.regionStyle Set the styles for the map's regions. Each region or marker has four states: <code>initial</code> (default state), <code>hover</code> (when the mouse cursor is over the region or marker), <code>selected</code> (when region or marker is selected), <code>selectedHover</code> (when the mouse cursor is over the region or marker and it's selected simultaneously). Styles could be set for each of this states. Default value for that parameter is:
 <pre>{
  initial: {
    fill: 'white',
    "fill-opacity": 1,
    stroke: 'none',
    "stroke-width": 0,
    "stroke-opacity": 1
  },
  hover: {
    "fill-opacity": 0.8,
    cursor: 'pointer'
  },
  selected: {
    fill: 'yellow'
  },
  selectedHover: {
  }
}</pre>
 * @param {Object} params.regionLabelStyle Set the styles for the regions' labels. Each region or marker has four states: <code>initial</code> (default state), <code>hover</code> (when the mouse cursor is over the region or marker), <code>selected</code> (when region or marker is selected), <code>selectedHover</code> (when the mouse cursor is over the region or marker and it's selected simultaneously). Styles could be set for each of this states. Default value for that parameter is:
 <pre>{
  initial: {
    'font-family': 'Verdana',
    'font-size': '12',
    'font-weight': 'bold',
    cursor: 'default',
    fill: 'black'
  },
  hover: {
    cursor: 'pointer'
  }
}</pre>
 * @param {Object} params.markerStyle Set the styles for the map's markers. Any parameter suitable for <code>regionStyle</code> could be used as well as numeric parameter <code>r</code> to set the marker's radius. Default value for that parameter is:
 <pre>{
  initial: {
    fill: 'grey',
    stroke: '#505050',
    "fill-opacity": 1,
    "stroke-width": 1,
    "stroke-opacity": 1,
    r: 5
  },
  hover: {
    stroke: 'black',
    "stroke-width": 2,
    cursor: 'pointer'
  },
  selected: {
    fill: 'blue'
  },
  selectedHover: {
  }
}</pre>
 * @param {Object} params.markerLabelStyle Set the styles for the markers' labels. Default value for that parameter is:
 <pre>{
  initial: {
    'font-family': 'Verdana',
    'font-size': '12',
    'font-weight': 'bold',
    cursor: 'default',
    fill: 'black'
  },
  hover: {
    cursor: 'pointer'
  }
}</pre>
 * @param {Object|Array} params.markers Set of markers to add to the map during initialization. In case of array is provided, codes of markers will be set as string representations of array indexes. Each marker is represented by <code>latLng</code> (array of two numeric values), <code>name</code> (string which will be show on marker's tip) and any marker styles.
 * @param {Object} params.series Object with two keys: <code>markers</code> and <code>regions</code>. Each of which is an array of series configs to be applied to the respective map elements. See <a href="jvm.DataSeries.html">DataSeries</a> description for a list of parameters available.
 * @param {Object|String} params.focusOn This parameter sets the initial position and scale of the map viewport. See <code>setFocus</code> docuemntation for possible parameters.
 * @param {Object} params.labels Defines parameters for rendering static labels. Object could contain two keys: <code>regions</code> and <code>markers</code>. Each key value defines configuration object with the following possible options:
 <ul>
 <li><code>render {Function}</code> - defines method for converting region code or marker index to actual label value.</li>
 <li><code>offsets {Object|Function}</code> - provides method or object which could be used to define label offset by region code or marker index.</li>
 </ul>
 <b>Plase note: static labels feature is not supported in Internet Explorer 8 and below.</b>
 * @param {Array|Object|String} params.selectedRegions Set initially selected regions.
 * @param {Array|Object|String} params.selectedMarkers Set initially selected markers.
 * @param {Function} params.onRegionTipShow <code>(Event e, Object tip, String code)</code> Will be called right before the region tip is going to be shown.
 * @param {Function} params.onRegionOver <code>(Event e, String code)</code> Will be called on region mouse over event.
 * @param {Function} params.onRegionOut <code>(Event e, String code)</code> Will be called on region mouse out event.
 * @param {Function} params.onRegionClick <code>(Event e, String code)</code> Will be called on region click event.
 * @param {Function} params.onRegionSelected <code>(Event e, String code, Boolean isSelected, Array selectedRegions)</code> Will be called when region is (de)selected. <code>isSelected</code> parameter of the callback indicates whether region is selected or not. <code>selectedRegions</code> contains codes of all currently selected regions.
 * @param {Function} params.onMarkerTipShow <code>(Event e, Object tip, String code)</code> Will be called right before the marker tip is going to be shown.
 * @param {Function} params.onMarkerOver <code>(Event e, String code)</code> Will be called on marker mouse over event.
 * @param {Function} params.onMarkerOut <code>(Event e, String code)</code> Will be called on marker mouse out event.
 * @param {Function} params.onMarkerClick <code>(Event e, String code)</code> Will be called on marker click event.
 * @param {Function} params.onMarkerSelected <code>(Event e, String code, Boolean isSelected, Array selectedMarkers)</code> Will be called when marker is (de)selected. <code>isSelected</code> parameter of the callback indicates whether marker is selected or not. <code>selectedMarkers</code> contains codes of all currently selected markers.
 * @param {Function} params.onViewportChange <code>(Event e, Number scale)</code> Triggered when the map's viewport is changed (map was panned or zoomed).
 */
jvm.Map = function(params) {
  var map = this,
    e;

  this.params = jvm.$.extend(true, {}, jvm.Map.defaultParams, params);

  if (!jvm.Map.maps[this.params.map]) {
    throw new Error('Attempt to use map which was not loaded: '+this.params.map);
  }

  this.mapData = jvm.Map.maps[this.params.map];
  this.markers = {};
  this.regions = {};
  this.regionsColors = {};
  this.regionsData = {};

  this.container = jvm.$('<div>').addClass('jvectormap-container');
  if (this.params.container) {
    this.params.container.append( this.container );
  }
  this.container.data('mapObject', this);

  this.defaultWidth = this.mapData.width;
  this.defaultHeight = this.mapData.height;

  this.setBackgroundColor(this.params.backgroundColor);

  this.onResize = function(){
    map.updateSize();
  }
  jvm.$(window).resize(this.onResize);

  for (e in jvm.Map.apiEvents) {
    if (this.params[e]) {
      this.container.bind(jvm.Map.apiEvents[e]+'.jvectormap', this.params[e]);
    }
  }

  this.canvas = new jvm.VectorCanvas(this.container[0], this.width, this.height);

  if ( ('ontouchstart' in window) || (window.DocumentTouch && document instanceof DocumentTouch) ) {
    if (this.params.bindTouchEvents) {
      this.bindContainerTouchEvents();
    }
  }
  this.bindContainerEvents();
  this.bindElementEvents();
  this.createTip();
  if (this.params.zoomButtons) {
    this.bindZoomButtons();
  }

  this.createRegions();
  this.createMarkers(this.params.markers || {});

  this.updateSize();

  if (this.params.focusOn) {
    if (typeof this.params.focusOn === 'string') {
      this.params.focusOn = {region: this.params.focusOn};
    } else if (jvm.$.isArray(this.params.focusOn)) {
      this.params.focusOn = {regions: this.params.focusOn};
    }
    this.setFocus(this.params.focusOn);
  }

  if (this.params.selectedRegions) {
    this.setSelectedRegions(this.params.selectedRegions);
  }
  if (this.params.selectedMarkers) {
    this.setSelectedMarkers(this.params.selectedMarkers);
  }

  this.legendCntHorizontal = jvm.$('<div/>').addClass('jvectormap-legend-cnt jvectormap-legend-cnt-h');
  this.legendCntVertical = jvm.$('<div/>').addClass('jvectormap-legend-cnt jvectormap-legend-cnt-v');
  this.container.append(this.legendCntHorizontal);
  this.container.append(this.legendCntVertical);

  if (this.params.series) {
    this.createSeries();
  }
};

jvm.Map.prototype = {
  transX: 0,
  transY: 0,
  scale: 1,
  baseTransX: 0,
  baseTransY: 0,
  baseScale: 1,

  width: 0,
  height: 0,

  /**
   * Set background color of the map.
   * @param {String} backgroundColor Background color in CSS format.
   */
  setBackgroundColor: function(backgroundColor) {
    this.container.css('background-color', backgroundColor);
  },

  resize: function() {
    var curBaseScale = this.baseScale;
    if (this.width / this.height > this.defaultWidth / this.defaultHeight) {
      this.baseScale = this.height / this.defaultHeight;
      this.baseTransX = Math.abs(this.width - this.defaultWidth * this.baseScale) / (2 * this.baseScale);
    } else {
      this.baseScale = this.width / this.defaultWidth;
      this.baseTransY = Math.abs(this.height - this.defaultHeight * this.baseScale) / (2 * this.baseScale);
    }
    this.scale *= this.baseScale / curBaseScale;
    this.transX *= this.baseScale / curBaseScale;
    this.transY *= this.baseScale / curBaseScale;
  },

  /**
   * Synchronize the size of the map with the size of the container. Suitable in situations where the size of the container is changed programmatically or container is shown after it became visible.
   */
  updateSize: function(){
    this.width = this.container.width();
    this.height = this.container.height();
    this.resize();
    this.canvas.setSize(this.width, this.height);
    this.applyTransform();
  },

  /**
   * Reset all the series and show the map with the initial zoom.
   */
  reset: function() {
    var key,
      i;

    for (key in this.series) {
      for (i = 0; i < this.series[key].length; i++) {
        this.series[key][i].clear();
      }
    }
    this.scale = this.baseScale;
    this.transX = this.baseTransX;
    this.transY = this.baseTransY;
    this.applyTransform();
  },

  applyTransform: function() {
    var maxTransX,
      maxTransY,
      minTransX,
      minTransY;

    if (this.defaultWidth * this.scale <= this.width) {
      maxTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
      minTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
    } else {
      maxTransX = 0;
      minTransX = (this.width - this.defaultWidth * this.scale) / this.scale;
    }

    if (this.defaultHeight * this.scale <= this.height) {
      maxTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
      minTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
    } else {
      maxTransY = 0;
      minTransY = (this.height - this.defaultHeight * this.scale) / this.scale;
    }

    if (this.transY > maxTransY) {
      this.transY = maxTransY;
    } else if (this.transY < minTransY) {
      this.transY = minTransY;
    }
    if (this.transX > maxTransX) {
      this.transX = maxTransX;
    } else if (this.transX < minTransX) {
      this.transX = minTransX;
    }

    this.canvas.applyTransformParams(this.scale, this.transX, this.transY);

    if (this.markers) {
      this.repositionMarkers();
    }

    this.repositionLabels();

    this.container.trigger('viewportChange', [this.scale/this.baseScale, this.transX, this.transY]);
  },

  bindContainerEvents: function(){
    var mouseDown = false,
      oldPageX,
      oldPageY,
      map = this;

    if (this.params.panOnDrag) {
      this.container.mousemove(function(e){
        if (mouseDown) {
          map.transX -= (oldPageX - e.pageX) / map.scale;
          map.transY -= (oldPageY - e.pageY) / map.scale;

          map.applyTransform();

          oldPageX = e.pageX;
          oldPageY = e.pageY;
        }
        return false;
      }).mousedown(function(e){
        mouseDown = true;
        oldPageX = e.pageX;
        oldPageY = e.pageY;
        return false;
      });

      this.onContainerMouseUp = function(){
        mouseDown = false;
      };
      jvm.$('body').mouseup(this.onContainerMouseUp);
    }

    if (this.params.zoomOnScroll) {
      this.container.mousewheel(function(event, delta, deltaX, deltaY) {
        var offset = jvm.$(map.container).offset(),
          centerX = event.pageX - offset.left,
          centerY = event.pageY - offset.top,
          zoomStep = Math.pow(1 + map.params.zoomOnScrollSpeed / 1000, event.deltaFactor * event.deltaY);

        map.tip.hide();

        map.setScale(map.scale * zoomStep, centerX, centerY);
        event.preventDefault();
      });
    }
  },

  bindContainerTouchEvents: function(){
    var touchStartScale,
      touchStartDistance,
      map = this,
      touchX,
      touchY,
      centerTouchX,
      centerTouchY,
      lastTouchesLength,
      handleTouchEvent = function(e){
        var touches = e.originalEvent.touches,
          offset,
          scale,
          transXOld,
          transYOld;

        if (e.type == 'touchstart') {
          lastTouchesLength = 0;
        }

        if (touches.length == 1) {
          if (lastTouchesLength == 1) {
            transXOld = map.transX;
            transYOld = map.transY;
            map.transX -= (touchX - touches[0].pageX) / map.scale;
            map.transY -= (touchY - touches[0].pageY) / map.scale;
            map.applyTransform();
            map.tip.hide();
            if (transXOld != map.transX || transYOld != map.transY) {
              e.preventDefault();
            }
          }
          touchX = touches[0].pageX;
          touchY = touches[0].pageY;
        } else if (touches.length == 2) {
          if (lastTouchesLength == 2) {
            scale = Math.sqrt(
              Math.pow(touches[0].pageX - touches[1].pageX, 2) +
              Math.pow(touches[0].pageY - touches[1].pageY, 2)
            ) / touchStartDistance;
            map.setScale(
              touchStartScale * scale,
              centerTouchX,
              centerTouchY
            )
            map.tip.hide();
            e.preventDefault();
          } else {
            offset = jvm.$(map.container).offset();
            if (touches[0].pageX > touches[1].pageX) {
              centerTouchX = touches[1].pageX + (touches[0].pageX - touches[1].pageX) / 2;
            } else {
              centerTouchX = touches[0].pageX + (touches[1].pageX - touches[0].pageX) / 2;
            }
            if (touches[0].pageY > touches[1].pageY) {
              centerTouchY = touches[1].pageY + (touches[0].pageY - touches[1].pageY) / 2;
            } else {
              centerTouchY = touches[0].pageY + (touches[1].pageY - touches[0].pageY) / 2;
            }
            centerTouchX -= offset.left;
            centerTouchY -= offset.top;
            touchStartScale = map.scale;
            touchStartDistance = Math.sqrt(
              Math.pow(touches[0].pageX - touches[1].pageX, 2) +
              Math.pow(touches[0].pageY - touches[1].pageY, 2)
            );
          }
        }

        lastTouchesLength = touches.length;
      };

    jvm.$(this.container).bind('touchstart', handleTouchEvent);
    jvm.$(this.container).bind('touchmove', handleTouchEvent);
  },

  bindElementEvents: function(){
    var map = this,
      mouseMoved;

    this.container.mousemove(function(){
      mouseMoved = true;
    });

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate("[class~='jvectormap-element']", 'mouseover mouseout', function(e){
      var baseVal = jvm.$(this).attr('class').baseVal || jvm.$(this).attr('class'),
        type = baseVal.indexOf('jvectormap-region') === -1 ? 'marker' : 'region',
        code = type == 'region' ? jvm.$(this).attr('data-code') : jvm.$(this).attr('data-index'),
        element = type == 'region' ? map.regions[code].element : map.markers[code].element,
        tipText = type == 'region' ? map.mapData.paths[code].name : (map.markers[code].config.name || ''),
        tipShowEvent = jvm.$.Event(type+'TipShow.jvectormap'),
        overEvent = jvm.$.Event(type+'Over.jvectormap');

      if (e.type == 'mouseover') {
        map.container.trigger(overEvent, [code]);
        if (!overEvent.isDefaultPrevented()) {
          element.setHovered(true);
        }

        map.tip.text(tipText);
        map.container.trigger(tipShowEvent, [map.tip, code]);
        if (!tipShowEvent.isDefaultPrevented()) {
          map.tip.show();
          map.tipWidth = map.tip.width();
          map.tipHeight = map.tip.height();
        }
      } else {
        element.setHovered(false);
        map.tip.hide();
        map.container.trigger(type+'Out.jvectormap', [code]);
      }
    });

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate("[class~='jvectormap-element']", 'mousedown', function(){
      mouseMoved = false;
    });

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate("[class~='jvectormap-element']", 'mouseup', function(){
      var baseVal = jvm.$(this).attr('class').baseVal ? jvm.$(this).attr('class').baseVal : jvm.$(this).attr('class'),
        type = baseVal.indexOf('jvectormap-region') === -1 ? 'marker' : 'region',
        code = type == 'region' ? jvm.$(this).attr('data-code') : jvm.$(this).attr('data-index'),
        clickEvent = jvm.$.Event(type+'Click.jvectormap'),
        element = type == 'region' ? map.regions[code].element : map.markers[code].element;

      if (!mouseMoved) {
        map.container.trigger(clickEvent, [code]);
        if ((type === 'region' && map.params.regionsSelectable) || (type === 'marker' && map.params.markersSelectable)) {
          if (!clickEvent.isDefaultPrevented()) {
            if (map.params[type+'sSelectableOne']) {
              map.clearSelected(type+'s');
            }
            element.setSelected(!element.isSelected);
          }
        }
      }
    });
  },

  bindZoomButtons: function() {
    var map = this;

    jvm.$('<div/>').addClass('jvectormap-zoomin').text('+').appendTo(this.container);
    jvm.$('<div/>').addClass('jvectormap-zoomout').html('&#x2212;').appendTo(this.container);

    this.container.find('.jvectormap-zoomin').click(function(){
      map.setScale(map.scale * map.params.zoomStep, map.width / 2, map.height / 2, false, map.params.zoomAnimate);
    });
    this.container.find('.jvectormap-zoomout').click(function(){
      map.setScale(map.scale / map.params.zoomStep, map.width / 2, map.height / 2, false, map.params.zoomAnimate);
    });
  },

  createTip: function(){
    var map = this;

    this.tip = jvm.$('<div/>').addClass('jvectormap-tip').appendTo(jvm.$('body'));

    this.container.mousemove(function(e){
      var left = e.pageX-15-map.tipWidth,
        top = e.pageY-15-map.tipHeight;

      if (left < 5) {
        left = e.pageX + 15;
      }
      if (top < 5) {
        top = e.pageY + 15;
      }

      map.tip.css({
        left: left,
        top: top
      });
    });
  },

  setScale: function(scale, anchorX, anchorY, isCentered, animate) {
    var viewportChangeEvent = jvm.$.Event('zoom.jvectormap'),
      interval,
      that = this,
      i = 0,
      count = Math.abs(Math.round((scale - this.scale) * 60 / Math.max(scale, this.scale))),
      scaleStart,
      scaleDiff,
      transXStart,
      transXDiff,
      transYStart,
      transYDiff,
      transX,
      transY,
      deferred = new jvm.$.Deferred();

    if (scale > this.params.zoomMax * this.baseScale) {
      scale = this.params.zoomMax * this.baseScale;
    } else if (scale < this.params.zoomMin * this.baseScale) {
      scale = this.params.zoomMin * this.baseScale;
    }

    if (typeof anchorX != 'undefined' && typeof anchorY != 'undefined') {
      zoomStep = scale / this.scale;
      if (isCentered) {
        transX = anchorX + this.defaultWidth * (this.width / (this.defaultWidth * scale)) / 2;
        transY = anchorY + this.defaultHeight * (this.height / (this.defaultHeight * scale)) / 2;
      } else {
        transX = this.transX - (zoomStep - 1) / scale * anchorX;
        transY = this.transY - (zoomStep - 1) / scale * anchorY;
      }
    }

    if (animate && count > 0)  {
      scaleStart = this.scale;
      scaleDiff = (scale - scaleStart) / count;
      transXStart = this.transX * this.scale;
      transYStart = this.transY * this.scale;
      transXDiff = (transX * scale - transXStart) / count;
      transYDiff = (transY * scale - transYStart) / count;
      interval = setInterval(function(){
        i += 1;
        that.scale = scaleStart + scaleDiff * i;
        that.transX = (transXStart + transXDiff * i) / that.scale;
        that.transY = (transYStart + transYDiff * i) / that.scale;
        that.applyTransform();
        if (i == count) {
          clearInterval(interval);
          that.container.trigger(viewportChangeEvent, [scale/that.baseScale]);
          deferred.resolve();
        }
      }, 10);
    } else {
      this.transX = transX;
      this.transY = transY;
      this.scale = scale;
      this.applyTransform();
      this.container.trigger(viewportChangeEvent, [scale/this.baseScale]);
      deferred.resolve();
    }

    return deferred;
  },

  /**
   * Set the map's viewport to the specific point and set zoom of the map to the specific level. Point and zoom level could be defined in two ways: using the code of some region to focus on or a central point and zoom level as numbers.
   * @param This method takes a configuration object as the single argument. The options passed to it are the following:
   * @param {Array} params.regions Array of region codes to zoom to.
   * @param {String} params.region Region code to zoom to.
   * @param {Number} params.scale Map scale to set.
   * @param {Number} params.lat Latitude to set viewport to.
   * @param {Number} params.lng Longitude to set viewport to.
   * @param {Number} params.x Number from 0 to 1 specifying the horizontal coordinate of the central point of the viewport.
   * @param {Number} params.y Number from 0 to 1 specifying the vertical coordinate of the central point of the viewport.
   * @param {Boolean} params.animate Indicates whether or not to animate the scale change and transition.
   */
  setFocus: function(config){
    var bbox,
      itemBbox,
      newBbox,
      codes,
      i,
      point;

    config = config || {};

    if (config.region) {
      codes = [config.region];
    } else if (config.regions) {
      codes = config.regions;
    }

    if (codes) {
      for (i = 0; i < codes.length; i++) {
        if (this.regions[codes[i]]) {
          itemBbox = this.regions[codes[i]].element.shape.getBBox();
          if (itemBbox) {
            if (typeof bbox == 'undefined') {
              bbox = itemBbox;
            } else {
              newBbox = {
                x: Math.min(bbox.x, itemBbox.x),
                y: Math.min(bbox.y, itemBbox.y),
                width: Math.max(bbox.x + bbox.width, itemBbox.x + itemBbox.width) - Math.min(bbox.x, itemBbox.x),
                height: Math.max(bbox.y + bbox.height, itemBbox.y + itemBbox.height) - Math.min(bbox.y, itemBbox.y)
              }
              bbox = newBbox;
            }
          }
        }
      }
      return this.setScale(
        Math.min(this.width / bbox.width, this.height / bbox.height),
        - (bbox.x + bbox.width / 2),
        - (bbox.y + bbox.height / 2),
        true,
        config.animate
      );
    } else {
      if (config.lat && config.lng) {
        point = this.latLngToPoint(config.lat, config.lng);
        config.x = this.transX - point.x / this.scale;
        config.y = this.transY - point.y / this.scale;
      } else if (config.x && config.y) {
        config.x *= -this.defaultWidth;
        config.y *= -this.defaultHeight;
      }
      return this.setScale(config.scale * this.baseScale, config.x, config.y, true, config.animate);
    }
  },

  getSelected: function(type){
    var key,
      selected = [];

    for (key in this[type]) {
      if (this[type][key].element.isSelected) {
        selected.push(key);
      }
    }
    return selected;
  },

  /**
   * Return the codes of currently selected regions.
   * @returns {Array}
   */
  getSelectedRegions: function(){
    return this.getSelected('regions');
  },

  /**
   * Return the codes of currently selected markers.
   * @returns {Array}
   */
  getSelectedMarkers: function(){
    return this.getSelected('markers');
  },

  setSelected: function(type, keys){
    var i;

    if (typeof keys != 'object') {
      keys = [keys];
    }

    if (jvm.$.isArray(keys)) {
      for (i = 0; i < keys.length; i++) {
        this[type][keys[i]].element.setSelected(true);
      }
    } else {
      for (i in keys) {
        this[type][i].element.setSelected(!!keys[i]);
      }
    }
  },

  /**
   * Set or remove selected state for the regions.
   * @param {String|Array|Object} keys If <code>String</code> or <code>Array</code> the region(s) with the corresponding code(s) will be selected. If <code>Object</code> was provided its keys are  codes of regions, state of which should be changed. Selected state will be set if value is true, removed otherwise.
   */
  setSelectedRegions: function(keys){
    this.setSelected('regions', keys);
  },

  /**
   * Set or remove selected state for the markers.
   * @param {String|Array|Object} keys If <code>String</code> or <code>Array</code> the marker(s) with the corresponding code(s) will be selected. If <code>Object</code> was provided its keys are  codes of markers, state of which should be changed. Selected state will be set if value is true, removed otherwise.
   */
  setSelectedMarkers: function(keys){
    this.setSelected('markers', keys);
  },

  clearSelected: function(type){
    var select = {},
      selected = this.getSelected(type),
      i;

    for (i = 0; i < selected.length; i++) {
      select[selected[i]] = false;
    };

    this.setSelected(type, select);
  },

  /**
   * Remove the selected state from all the currently selected regions.
   */
  clearSelectedRegions: function(){
    this.clearSelected('regions');
  },

  /**
   * Remove the selected state from all the currently selected markers.
   */
  clearSelectedMarkers: function(){
    this.clearSelected('markers');
  },

  /**
   * Return the instance of Map. Useful when instantiated as a jQuery plug-in.
   * @returns {Map}
   */
  getMapObject: function(){
    return this;
  },

  /**
   * Return the name of the region by region code.
   * @returns {String}
   */
  getRegionName: function(code){
    return this.mapData.paths[code].name;
  },

  createRegions: function(){
    var key,
      region,
      map = this;

    this.regionLabelsGroup = this.regionLabelsGroup || this.canvas.addGroup();

    for (key in this.mapData.paths) {
      region = new jvm.Region({
        map: this,
        path: this.mapData.paths[key].path,
        code: key,
        style: jvm.$.extend(true, {}, this.params.regionStyle),
        labelStyle: jvm.$.extend(true, {}, this.params.regionLabelStyle),
        canvas: this.canvas,
        labelsGroup: this.regionLabelsGroup,
        label: this.canvas.mode != 'vml' ? (this.params.labels && this.params.labels.regions) : null
      });

      jvm.$(region.shape).bind('selected', function(e, isSelected){
        map.container.trigger('regionSelected.jvectormap', [jvm.$(this.node).attr('data-code'), isSelected, map.getSelectedRegions()]);
      });
      this.regions[key] = {
        element: region,
        config: this.mapData.paths[key]
      };
    }
  },

  createMarkers: function(markers) {
    var i,
      marker,
      point,
      markerConfig,
      markersArray,
      map = this;

    this.markersGroup = this.markersGroup || this.canvas.addGroup();
    this.markerLabelsGroup = this.markerLabelsGroup || this.canvas.addGroup();

    if (jvm.$.isArray(markers)) {
      markersArray = markers.slice();
      markers = {};
      for (i = 0; i < markersArray.length; i++) {
        markers[i] = markersArray[i];
      }
    }

    for (i in markers) {
      markerConfig = markers[i] instanceof Array ? {latLng: markers[i]} : markers[i];
      point = this.getMarkerPosition( markerConfig );

      if (point !== false) {
        marker = new jvm.Marker({
          map: this,
          style: jvm.$.extend(true, {}, this.params.markerStyle, {initial: markerConfig.style || {}}),
          labelStyle: jvm.$.extend(true, {}, this.params.markerLabelStyle),
          index: i,
          cx: point.x,
          cy: point.y,
          group: this.markersGroup,
          canvas: this.canvas,
          labelsGroup: this.markerLabelsGroup,
          label: this.canvas.mode != 'vml' ? (this.params.labels && this.params.labels.markers) : null
        });

        jvm.$(marker.shape).bind('selected', function(e, isSelected){
          map.container.trigger('markerSelected.jvectormap', [jvm.$(this.node).attr('data-index'), isSelected, map.getSelectedMarkers()]);
        });
        if (this.markers[i]) {
          this.removeMarkers([i]);
        }
        this.markers[i] = {element: marker, config: markerConfig};
      }
    }
  },

  repositionMarkers: function() {
    var i,
      point;

    for (i in this.markers) {
      point = this.getMarkerPosition( this.markers[i].config );
      if (point !== false) {
        this.markers[i].element.setStyle({cx: point.x, cy: point.y});
      }
    }
  },

  repositionLabels: function() {
    var key;

    for (key in this.regions) {
      this.regions[key].element.updateLabelPosition();
    }

    for (key in this.markers) {
      this.markers[key].element.updateLabelPosition();
    }
  },

  getMarkerPosition: function(markerConfig) {
    if (jvm.Map.maps[this.params.map].projection) {
      return this.latLngToPoint.apply(this, markerConfig.latLng || [0, 0]);
    } else {
      return {
        x: markerConfig.coords[0]*this.scale + this.transX*this.scale,
        y: markerConfig.coords[1]*this.scale + this.transY*this.scale
      };
    }
  },

  /**
   * Add one marker to the map.
   * @param {String} key Marker unique code.
   * @param {Object} marker Marker configuration parameters.
   * @param {Array} seriesData Values to add to the data series.
   */
  addMarker: function(key, marker, seriesData){
    var markers = {},
      data = [],
      values,
      i,
      seriesData = seriesData || [];

    markers[key] = marker;

    for (i = 0; i < seriesData.length; i++) {
      values = {};
      if (typeof seriesData[i] !== 'undefined') {
        values[key] = seriesData[i];
      }
      data.push(values);
    }
    this.addMarkers(markers, data);
  },

  /**
   * Add set of marker to the map.
   * @param {Object|Array} markers Markers to add to the map. In case of array is provided, codes of markers will be set as string representations of array indexes.
   * @param {Array} seriesData Values to add to the data series.
   */
  addMarkers: function(markers, seriesData){
    var i;

    seriesData = seriesData || [];

    this.createMarkers(markers);
    for (i = 0; i < seriesData.length; i++) {
      this.series.markers[i].setValues(seriesData[i] || {});
    };
  },

  /**
   * Remove some markers from the map.
   * @param {Array} markers Array of marker codes to be removed.
   */
  removeMarkers: function(markers){
    var i;

    for (i = 0; i < markers.length; i++) {
      this.markers[ markers[i] ].element.remove();
      delete this.markers[ markers[i] ];
    };
  },

  /**
   * Remove all markers from the map.
   */
  removeAllMarkers: function(){
    var i,
      markers = [];

    for (i in this.markers) {
      markers.push(i);
    }
    this.removeMarkers(markers)
  },

  /**
   * Converts coordinates expressed as latitude and longitude to the coordinates in pixels on the map.
   * @param {Number} lat Latitide of point in degrees.
   * @param {Number} lng Longitude of point in degrees.
   */
  latLngToPoint: function(lat, lng) {
    var point,
      proj = jvm.Map.maps[this.params.map].projection,
      centralMeridian = proj.centralMeridian,
      inset,
      bbox;

    if (lng < (-180 + centralMeridian)) {
      lng += 360;
    }

    point = jvm.Proj[proj.type](lat, lng, centralMeridian);

    inset = this.getInsetForPoint(point.x, point.y);
    if (inset) {
      bbox = inset.bbox;

      point.x = (point.x - bbox[0].x) / (bbox[1].x - bbox[0].x) * inset.width * this.scale;
      point.y = (point.y - bbox[0].y) / (bbox[1].y - bbox[0].y) * inset.height * this.scale;

      return {
        x: point.x + this.transX*this.scale + inset.left*this.scale,
        y: point.y + this.transY*this.scale + inset.top*this.scale
      };
    } else {
      return false;
    }
  },

  /**
   * Converts cartesian coordinates into coordinates expressed as latitude and longitude.
   * @param {Number} x X-axis of point on map in pixels.
   * @param {Number} y Y-axis of point on map in pixels.
   */
  pointToLatLng: function(x, y) {
    var proj = jvm.Map.maps[this.params.map].projection,
      centralMeridian = proj.centralMeridian,
      insets = jvm.Map.maps[this.params.map].insets,
      i,
      inset,
      bbox,
      nx,
      ny;

    for (i = 0; i < insets.length; i++) {
      inset = insets[i];
      bbox = inset.bbox;

      nx = x - (this.transX*this.scale + inset.left*this.scale);
      ny = y - (this.transY*this.scale + inset.top*this.scale);

      nx = (nx / (inset.width * this.scale)) * (bbox[1].x - bbox[0].x) + bbox[0].x;
      ny = (ny / (inset.height * this.scale)) * (bbox[1].y - bbox[0].y) + bbox[0].y;

      if (nx > bbox[0].x && nx < bbox[1].x && ny > bbox[0].y && ny < bbox[1].y) {
        return jvm.Proj[proj.type + '_inv'](nx, -ny, centralMeridian);
      }
    }

    return false;
  },

  getInsetForPoint: function(x, y){
    var insets = jvm.Map.maps[this.params.map].insets,
      i,
      bbox;

    for (i = 0; i < insets.length; i++) {
      bbox = insets[i].bbox;
      if (x > bbox[0].x && x < bbox[1].x && y > bbox[0].y && y < bbox[1].y) {
        return insets[i];
      }
    }
  },

  createSeries: function(){
    var i,
      key;

    this.series = {
      markers: [],
      regions: []
    };

    for (key in this.params.series) {
      for (i = 0; i < this.params.series[key].length; i++) {
        this.series[key][i] = new jvm.DataSeries(
          this.params.series[key][i],
          this[key],
          this
        );
      }
    }
  },

  /**
   * Gracefully remove the map and and all its accessories, unbind event handlers.
   */
  remove: function(){
    this.tip.remove();
    this.container.remove();
    jvm.$(window).unbind('resize', this.onResize);
    jvm.$('body').unbind('mouseup', this.onContainerMouseUp);
  }
};

jvm.Map.maps = {};
jvm.Map.defaultParams = {
  map: 'world_mill_en',
  backgroundColor: '#505050',
  zoomButtons: true,
  zoomOnScroll: true,
  zoomOnScrollSpeed: 3,
  panOnDrag: true,
  zoomMax: 8,
  zoomMin: 1,
  zoomStep: 1.6,
  zoomAnimate: true,
  regionsSelectable: false,
  markersSelectable: false,
  bindTouchEvents: true,
  regionStyle: {
    initial: {
      fill: 'white',
      "fill-opacity": 1,
      stroke: 'none',
      "stroke-width": 0,
      "stroke-opacity": 1
    },
    hover: {
      "fill-opacity": 0.8,
      cursor: 'pointer'
    },
    selected: {
      fill: 'yellow'
    },
    selectedHover: {
    }
  },
  regionLabelStyle: {
    initial: {
      'font-family': 'Verdana',
      'font-size': '12',
      'font-weight': 'bold',
      cursor: 'default',
      fill: 'black'
    },
    hover: {
      cursor: 'pointer'
    }
  },
  markerStyle: {
    initial: {
      fill: 'grey',
      stroke: '#505050',
      "fill-opacity": 1,
      "stroke-width": 1,
      "stroke-opacity": 1,
      r: 5
    },
    hover: {
      stroke: 'black',
      "stroke-width": 2,
      cursor: 'pointer'
    },
    selected: {
      fill: 'blue'
    },
    selectedHover: {
    }
  },
  markerLabelStyle: {
    initial: {
      'font-family': 'Verdana',
      'font-size': '12',
      'font-weight': 'bold',
      cursor: 'default',
      fill: 'black'
    },
    hover: {
      cursor: 'pointer'
    }
  }
};
jvm.Map.apiEvents = {
  onRegionTipShow: 'regionTipShow',
  onRegionOver: 'regionOver',
  onRegionOut: 'regionOut',
  onRegionClick: 'regionClick',
  onRegionSelected: 'regionSelected',
  onMarkerTipShow: 'markerTipShow',
  onMarkerOver: 'markerOver',
  onMarkerOut: 'markerOut',
  onMarkerClick: 'markerClick',
  onMarkerSelected: 'markerSelected',
  onViewportChange: 'viewportChange'
};
/**
 * Creates map with drill-down functionality.
 * @constructor
 * @param {Object} params Parameters to initialize map with.
 * @param {Number} params.maxLevel Maximum number of levels user can go through
 * @param {Object} params.main Config of the main map. See <a href="./jvm-map/">jvm.Map</a> for more information.
 * @param {Function} params.mapNameByCode Function go generate map name by region code. Default value is:
 <pre>
 function(code, multiMap) {
  return code.toLowerCase()+'_'+
         multiMap.defaultProjection+'_en';
}
 </pre>
 * @param {Function} params.mapUrlByCode Function to generate map url by region code. Default value is:
 <pre>
 function(code, multiMap){
  return 'jquery-jvectormap-data-'+
         code.toLowerCase()+'-'+
         multiMap.defaultProjection+'-en.js';
}
 </pre>
 */
jvm.MultiMap = function(params) {
  var that = this;

  this.maps = {};
  this.params = jvm.$.extend(true, {}, jvm.MultiMap.defaultParams, params);
  this.params.maxLevel = this.params.maxLevel || Number.MAX_VALUE;
  this.params.main = this.params.main || {};
  this.params.main.multiMapLevel = 0;
  this.history = [ this.addMap(this.params.main.map, this.params.main) ];
  this.defaultProjection = this.history[0].mapData.projection.type;
  this.mapsLoaded = {};

  this.params.container.css({position: 'relative'});
  this.backButton = jvm.$('<div/>').addClass('jvectormap-goback').text('Back').appendTo(this.params.container);
  this.backButton.hide();
  this.backButton.click(function(){
    that.goBack();
  });

  this.spinner = jvm.$('<div/>').addClass('jvectormap-spinner').appendTo(this.params.container);
  this.spinner.hide();
};

jvm.MultiMap.prototype = {
  addMap: function(name, config){
    var cnt = jvm.$('<div/>').css({
      width: '100%',
      height: '100%'
    });

    this.params.container.append(cnt);

    this.maps[name] = new jvm.Map(jvm.$.extend(config, {container: cnt}));
    if (this.params.maxLevel > config.multiMapLevel) {
      this.maps[name].container.on('regionClick.jvectormap', {scope: this}, function(e, code){
        var multimap = e.data.scope,
          mapName = multimap.params.mapNameByCode(code, multimap);

        if (!multimap.drillDownPromise || multimap.drillDownPromise.state() !== 'pending') {
          multimap.drillDown(mapName, code);
        }
      });
    }


    return this.maps[name];
  },

  downloadMap: function(code){
    var that = this,
      deferred = jvm.$.Deferred();

    if (!this.mapsLoaded[code]) {
      jvm.$.get(this.params.mapUrlByCode(code, this)).then(function(){
        that.mapsLoaded[code] = true;
        deferred.resolve();
      }, function(){
        deferred.reject();
      });
    } else {
      deferred.resolve();
    }
    return deferred;
  },

  drillDown: function(name, code){
    var currentMap = this.history[this.history.length - 1],
      that = this,
      focusPromise = currentMap.setFocus({region: code, animate: true}),
      downloadPromise = this.downloadMap(code);

    focusPromise.then(function(){
      if (downloadPromise.state() === 'pending') {
        that.spinner.show();
      }
    });
    downloadPromise.always(function(){
      that.spinner.hide();
    });
    this.drillDownPromise = jvm.$.when(downloadPromise, focusPromise);
    this.drillDownPromise.then(function(){
      currentMap.params.container.hide();
      if (!that.maps[name]) {
        that.addMap(name, {map: name, multiMapLevel: currentMap.params.multiMapLevel + 1});
      } else {
        that.maps[name].params.container.show();
      }
      that.history.push( that.maps[name] );
      that.backButton.show();
    });
  },

  goBack: function(){
    var currentMap = this.history.pop(),
      prevMap = this.history[this.history.length - 1],
      that = this;

    currentMap.setFocus({scale: 1, x: 0.5, y: 0.5, animate: true}).then(function(){
      currentMap.params.container.hide();
      prevMap.params.container.show();
      prevMap.updateSize();
      if (that.history.length === 1) {
        that.backButton.hide();
      }
      prevMap.setFocus({scale: 1, x: 0.5, y: 0.5, animate: true});
    });
  }
};

jvm.MultiMap.defaultParams = {
  mapNameByCode: function(code, multiMap){
    return code.toLowerCase()+'_'+multiMap.defaultProjection+'_en';
  },
  mapUrlByCode: function(code, multiMap){
    return 'jquery-jvectormap-data-'+code.toLowerCase()+'-'+multiMap.defaultProjection+'-en.js';
  }
}

jQuery.fn.vectorMap('addMap', 'world_mill_en',{"insets": [{"width": 900, "top": 0, "height": 440.70631074413296, "bbox": [{"y": -12671671.123330014, "x": -20004297.151525836}, {"y": 6930392.02513512, "x": 20026572.39474939}], "left": 0}], "paths": {"BD": {"path": "M651.84,230.21l-0.6,-2.0l-1.36,-1.71l-2.31,-0.11l-0.41,0.48l0.2,0.94l-0.53,0.99l-0.72,-0.36l-0.68,0.35l-1.2,-0.36l-0.37,-2.0l-0.81,-1.86l0.39,-1.46l-0.22,-0.47l-1.14,-0.53l0.29,-0.5l1.48,-0.94l0.03,-0.65l-1.55,-1.22l0.55,-1.14l1.61,0.94l1.04,0.15l0.18,1.54l0.34,0.35l5.64,0.63l-0.84,1.64l-1.22,0.34l-0.77,1.51l0.07,0.47l1.37,1.37l0.67,-0.19l0.42,-1.39l1.21,3.84l-0.03,1.21l-0.33,-0.15l-0.4,0.28Z", "name": "بنگلادش"}, "BE": {"path": "M429.29,144.05l1.91,0.24l2.1,-0.63l2.63,1.99l-0.21,1.66l-0.69,0.4l-0.18,1.2l-1.66,-1.13l-1.39,0.15l-2.73,-2.7l-1.17,-0.18l-0.16,-0.52l1.54,-0.5Z", "name": "بلژیک"}, "BF": {"path": "M421.42,247.64l-0.11,0.95l0.34,1.16l1.4,1.71l0.07,1.1l0.32,0.37l2.55,0.51l-0.04,1.28l-0.38,0.53l-1.07,0.21l-0.72,1.18l-0.63,0.21l-3.22,-0.25l-0.94,0.39l-5.4,-0.05l-0.39,0.38l0.16,2.73l-1.23,-0.43l-1.17,0.1l-0.89,0.57l-2.27,-1.72l-0.13,-1.11l0.61,-0.96l0.02,-0.93l1.87,-1.98l0.44,-1.81l0.43,-0.39l1.28,0.26l1.05,-0.52l0.47,-0.73l1.84,-1.09l0.55,-0.83l2.2,-1.0l1.15,-0.3l0.72,0.45l1.13,-0.01Z", "name": "بورکینافاسو"}, "BG": {"path": "M491.65,168.18l-0.86,0.88l-0.91,2.17l0.48,1.34l-1.6,-0.24l-2.55,0.95l-0.28,1.51l-1.8,0.22l-2.0,-1.0l-1.92,0.79l-1.42,-0.07l-0.15,-1.63l-1.05,-0.97l0.0,-0.8l1.2,-1.57l0.01,-0.56l-1.14,-1.23l-0.05,-0.94l0.88,0.97l0.88,-0.2l1.91,0.47l3.68,0.16l1.42,-0.81l2.72,-0.66l2.55,1.24Z", "name": "بلغارستان"}, "BA": {"path": "M463.49,163.65l2.1,0.5l1.72,-0.03l1.52,0.68l-0.36,0.78l0.08,0.45l1.04,1.02l-0.25,0.98l-1.81,1.15l-0.38,1.38l-1.67,-0.87l-0.89,-1.2l-2.11,-1.83l-1.63,-2.22l0.23,-0.57l0.48,0.38l0.55,-0.06l0.43,-0.51l0.94,-0.06Z", "name": "بوسنی و هرز."}, "BN": {"path": "M707.48,273.58l0.68,-0.65l1.41,-0.91l-0.15,1.63l-0.81,-0.05l-0.61,0.58l-0.53,-0.6Z", "name": "برونئی"}, "BO": {"path": "M263.83,340.69l-3.09,-0.23l-0.38,0.23l-0.7,1.52l-1.31,-1.53l-3.28,-0.64l-2.37,2.4l-1.31,0.26l-0.88,-3.26l-1.3,-2.86l0.74,-2.37l-0.13,-0.43l-1.2,-1.01l-0.37,-1.89l-1.08,-1.55l1.45,-2.56l-0.96,-2.33l0.47,-1.06l-0.34,-0.73l0.91,-1.32l0.16,-3.84l0.5,-1.18l-1.81,-3.41l2.46,0.07l0.8,-0.85l3.4,-1.91l2.66,-0.35l-0.19,1.38l0.3,1.07l-0.05,1.97l2.72,2.27l2.88,0.49l0.89,0.86l1.79,0.58l0.98,0.7l1.71,0.05l1.17,0.61l0.6,2.7l-0.7,0.54l0.96,2.99l0.37,0.28l4.3,0.1l-0.25,1.2l0.27,1.02l1.43,0.9l0.5,1.35l-0.41,1.86l-0.65,1.08l0.12,1.35l-2.69,-1.65l-2.4,-0.03l-4.36,0.76l-1.49,2.5l-0.11,1.52l-0.75,2.37Z", "name": "بولیوی"}, "JP": {"path": "M781.12,166.87l1.81,0.68l1.62,-0.97l0.39,2.42l-3.35,0.75l-2.23,2.88l-3.63,-1.9l-0.56,0.2l-1.26,3.05l-2.16,0.03l-0.29,-2.51l1.08,-2.03l2.45,-0.16l0.37,-0.33l1.25,-5.94l2.47,2.71l2.03,1.12ZM773.56,187.34l-0.91,2.22l0.37,1.52l-1.14,1.75l-3.02,1.26l-4.58,0.27l-3.34,3.01l-1.25,-0.8l-0.09,-1.9l-0.46,-0.38l-4.35,0.62l-3.0,1.32l-2.85,0.05l-0.37,0.27l0.13,0.44l2.32,1.89l-1.54,4.34l-1.26,0.9l-0.79,-0.7l0.56,-2.27l-0.21,-0.45l-1.47,-0.75l-0.74,-1.4l2.12,-0.84l1.26,-1.7l2.45,-1.42l1.83,-1.91l4.78,-0.81l2.6,0.57l0.44,-0.21l2.39,-4.66l1.29,1.06l0.5,0.01l5.1,-4.02l1.69,-3.73l-0.38,-3.4l0.9,-1.61l2.14,-0.44l1.23,3.72l-0.07,2.18l-2.23,2.84l-0.04,3.16ZM757.78,196.26l0.19,0.56l-1.01,1.21l-1.16,-0.68l-1.28,0.65l-0.69,1.45l-1.02,-0.5l0.01,-0.93l1.14,-1.38l1.57,0.14l0.85,-0.98l1.4,0.46Z", "name": "ژاپن"}, "BI": {"path": "M495.45,295.49l-1.08,-2.99l1.14,-0.11l0.64,-1.19l0.76,0.09l0.65,1.83l-2.1,2.36Z", "name": "بوروندی"}, "BJ": {"path": "M429.57,255.75l-0.05,0.8l0.5,1.34l-0.42,0.86l0.17,0.79l-1.81,2.12l-0.57,1.76l-0.08,5.42l-1.41,0.2l-0.48,-1.36l0.11,-5.71l-0.52,-0.7l-0.2,-1.35l-1.48,-1.48l0.21,-0.9l0.89,-0.43l0.42,-0.92l1.27,-0.36l1.22,-1.34l0.61,-0.0l1.62,1.24Z", "name": "بنین"}, "BT": {"path": "M650.32,213.86l0.84,0.71l-0.12,1.1l-3.76,-0.11l-1.57,0.4l-1.93,-0.87l1.48,-1.96l1.13,-0.57l1.63,0.57l1.33,0.08l0.99,0.65Z", "name": "بوتان"}, "JM": {"path": "M228.38,239.28l-0.8,0.4l-2.26,-1.06l0.84,-0.23l2.14,0.3l1.17,0.56l-1.08,0.03Z", "name": "جامائیکا"}, "BW": {"path": "M483.92,330.07l2.27,4.01l2.83,2.86l0.96,0.31l0.78,2.43l2.13,0.61l1.02,0.76l-3.0,1.64l-2.32,2.02l-1.54,2.69l-1.52,0.45l-0.64,1.94l-1.34,0.52l-1.85,-0.12l-1.21,-0.74l-1.35,-0.3l-1.22,0.62l-0.75,1.37l-2.31,1.9l-1.4,0.21l-0.35,-0.59l0.16,-1.75l-1.48,-2.54l-0.62,-0.43l-0.0,-7.1l2.08,-0.08l0.39,-0.4l0.07,-8.9l5.19,-0.93l0.8,0.89l0.51,0.07l1.5,-0.95l2.21,-0.49Z", "name": "بوتسوانا"}, "BR": {"path": "M259.98,275.05l3.24,0.7l0.65,-0.53l4.55,-1.32l1.08,-1.06l-0.02,-0.63l0.55,-0.05l0.28,0.28l-0.26,0.87l0.22,0.48l0.73,0.32l0.4,0.81l-0.62,0.86l-0.4,2.13l0.82,2.56l1.69,1.43l1.43,0.2l3.17,-1.68l3.18,0.3l0.65,-0.75l-0.27,-0.92l1.9,-0.09l2.39,0.99l1.06,-0.61l0.84,0.78l1.2,-0.18l1.18,-1.06l0.84,-1.94l1.36,-2.11l0.37,-0.05l1.89,5.45l1.33,0.59l0.05,1.28l-1.77,1.94l0.02,0.56l1.02,0.87l4.07,0.36l0.08,2.16l0.66,0.29l1.74,-1.5l6.97,2.32l1.02,1.22l-0.35,1.18l0.49,0.5l2.81,-0.74l4.77,1.3l3.75,-0.08l3.57,2.0l3.29,2.86l1.93,0.72l2.12,0.12l0.71,0.62l1.21,4.51l-0.95,3.98l-4.72,5.06l-1.64,2.92l-1.72,2.05l-0.8,0.3l-0.72,2.03l0.18,4.75l-0.94,5.53l-0.81,1.13l-0.43,3.36l-2.55,3.5l-0.4,2.51l-1.86,1.04l-0.67,1.53l-2.54,0.01l-3.94,1.01l-1.83,1.2l-2.87,0.82l-3.03,2.19l-2.2,2.83l-0.36,2.0l0.4,1.58l-0.44,2.6l-0.51,1.2l-1.77,1.54l-2.75,4.78l-3.83,3.42l-1.24,2.74l-1.18,1.15l-0.36,-0.83l0.95,-1.14l0.01,-0.5l-1.52,-1.97l-4.56,-3.32l-1.03,-0.0l-2.38,-2.02l-0.81,-0.0l5.34,-5.45l3.77,-2.58l0.22,-2.46l-1.35,-1.81l-0.91,0.07l0.58,-2.33l0.01,-1.54l-1.11,-0.83l-1.75,0.3l-0.44,-3.11l-0.52,-0.95l-1.88,-0.88l-1.24,0.47l-2.17,-0.41l0.15,-3.21l-0.62,-1.34l0.66,-0.73l-0.22,-1.34l0.66,-1.13l0.44,-2.04l-0.61,-1.83l-1.4,-0.86l-0.2,-0.75l0.34,-1.39l-0.38,-0.5l-4.52,-0.1l-0.72,-2.22l0.59,-0.42l-0.03,-1.1l-0.5,-0.87l-0.32,-1.7l-1.45,-0.76l-1.63,-0.02l-1.05,-0.72l-1.6,-0.48l-1.13,-0.99l-2.69,-0.4l-2.47,-2.06l0.13,-4.35l-0.45,-0.45l-3.46,0.5l-3.44,1.94l-0.6,0.74l-2.9,-0.17l-1.47,0.42l-0.72,-0.18l0.15,-3.52l-0.63,-0.34l-1.94,1.41l-1.87,-0.06l-0.83,-1.18l-1.37,-0.26l0.21,-1.01l-1.35,-1.49l-0.88,-1.91l0.56,-0.6l-0.0,-0.81l1.29,-0.62l0.22,-0.43l-0.22,-1.19l0.61,-0.91l0.15,-0.99l2.65,-1.58l1.99,-0.47l0.42,-0.36l2.06,0.11l0.42,-0.33l1.19,-8.0l-0.41,-1.56l-1.1,-1.0l0.01,-1.33l1.91,-0.42l0.08,-0.96l-0.33,-0.43l-1.14,-0.2l-0.02,-0.83l4.47,0.05l0.82,-0.67l0.82,1.81l0.8,0.07l1.15,1.1l2.26,-0.05l0.71,-0.83l2.78,-0.96l0.48,-1.13l1.6,-0.64l0.24,-0.47l-0.48,-0.82l-1.83,-0.19l-0.36,-3.22Z", "name": "برزیل"}, "BS": {"path": "M226.4,223.87l-0.48,-1.15l-0.84,-0.75l0.36,-1.11l0.95,1.95l0.01,1.06ZM225.56,216.43l-1.87,0.29l-0.04,-0.22l0.74,-0.14l1.17,0.06Z", "name": "باهاماس"}, "BY": {"path": "M493.84,128.32l0.29,0.7l0.49,0.23l1.19,-0.38l2.09,0.72l0.19,1.26l-0.45,1.24l1.57,2.26l0.89,0.59l0.17,0.81l1.58,0.56l0.4,0.5l-0.53,0.41l-1.87,-0.11l-0.73,0.38l-0.13,0.52l1.04,2.74l-1.91,0.26l-0.89,0.99l-0.11,1.18l-2.73,-0.04l-0.53,-0.62l-0.52,-0.08l-0.75,0.46l-0.91,-0.42l-1.92,-0.07l-2.75,-0.79l-2.6,-0.28l-2.0,0.07l-1.5,0.92l-0.67,0.07l-0.08,-1.22l-0.59,-1.19l1.36,-0.88l0.01,-1.35l-0.7,-1.41l-0.07,-1.0l2.16,-0.02l2.72,-1.3l0.75,-2.04l1.91,-1.04l0.2,-0.41l-0.19,-1.25l3.8,-1.78l2.3,0.77Z", "name": "بلاروس"}, "BZ": {"path": "M198.03,244.38l0.1,-4.49l0.69,-0.06l0.74,-1.3l0.34,0.28l-0.4,1.3l0.17,0.58l-0.34,2.25l-1.3,1.42Z", "name": "بلیز"}, "RU": {"path": "M491.55,115.25l2.55,-1.85l-0.01,-0.65l-2.2,-1.5l7.32,-6.76l1.03,-2.11l-0.13,-0.49l-3.46,-2.52l0.86,-2.7l-2.11,-2.81l1.56,-3.67l-2.77,-4.52l2.15,-2.99l-0.08,-0.55l-3.65,-2.73l0.3,-2.54l1.81,-0.37l4.26,-1.77l2.42,-1.45l4.06,2.61l6.79,1.04l9.34,4.85l1.78,1.88l0.14,2.46l-2.55,2.02l-3.9,1.06l-11.07,-3.14l-2.06,0.53l-0.13,0.7l3.94,2.94l0.31,5.86l0.26,0.36l5.14,2.24l0.58,-0.29l0.32,-1.94l-1.35,-1.78l1.13,-1.09l6.13,2.42l2.11,-0.98l0.18,-0.56l-1.51,-2.67l5.41,-3.76l2.07,0.22l2.26,1.41l0.57,-0.16l1.46,-2.87l-0.05,-0.44l-1.92,-2.32l1.12,-2.32l-1.32,-2.27l5.87,1.16l1.04,1.75l-2.59,0.43l-0.33,0.4l0.02,2.36l2.46,1.83l3.87,-0.91l0.86,-2.8l13.69,-5.65l0.99,0.11l-1.92,2.06l0.23,0.67l3.11,0.45l2.0,-1.48l4.56,-0.12l3.64,-1.73l2.65,2.44l0.56,-0.01l2.85,-2.88l-0.01,-0.57l-2.35,-2.29l0.9,-1.01l7.14,1.3l3.41,1.36l9.05,4.97l0.51,-0.11l1.67,-2.27l-0.05,-0.53l-2.43,-2.21l-0.06,-0.78l-0.34,-0.36l-2.52,-0.36l0.64,-1.93l-1.32,-3.46l-0.06,-1.21l4.48,-4.06l1.69,-4.29l1.6,-0.81l6.23,1.18l0.44,2.21l-2.29,3.64l0.06,0.5l1.47,1.39l0.76,3.0l-0.56,6.03l2.69,2.82l-0.96,2.57l-4.86,5.95l0.23,0.64l2.86,0.61l0.42,-0.17l0.93,-1.4l2.64,-1.03l0.87,-2.24l2.09,-1.96l0.07,-0.5l-1.36,-2.28l1.09,-2.69l-0.32,-0.55l-2.47,-0.33l-0.5,-2.06l1.94,-4.38l-0.06,-0.42l-2.96,-3.4l4.12,-2.88l0.16,-0.4l-0.51,-2.93l0.54,-0.05l1.13,2.25l-0.96,4.35l0.27,0.47l2.68,0.84l0.5,-0.51l-1.02,-2.99l3.79,-1.66l5.01,-0.24l4.53,2.61l0.48,-0.06l0.07,-0.48l-2.18,-3.82l-0.23,-4.67l3.98,-0.9l5.97,0.21l5.49,-0.64l0.27,-0.65l-1.83,-2.31l2.56,-2.9l2.87,-0.17l4.8,-2.47l6.54,-0.67l1.03,-1.42l6.25,-0.45l2.32,1.11l5.53,-2.7l4.5,0.08l0.39,-0.28l0.66,-2.15l2.26,-2.12l5.69,-2.11l3.21,1.29l-2.46,0.94l-0.25,0.42l0.34,0.35l5.41,0.77l0.61,2.33l0.58,0.25l2.2,-1.22l7.13,0.07l5.51,2.47l1.79,1.72l-0.53,2.24l-9.16,4.15l-1.97,1.52l0.16,0.71l6.77,1.91l2.16,-0.78l1.13,2.74l0.67,0.11l1.01,-1.15l3.81,-0.73l7.7,0.77l0.54,1.99l0.36,0.29l10.47,0.71l0.43,-0.38l0.13,-3.23l4.87,0.78l3.95,-0.02l3.83,2.4l1.03,2.71l-1.35,1.79l0.02,0.5l3.15,3.64l4.07,1.96l0.53,-0.18l2.23,-4.47l3.95,1.93l4.16,-1.21l4.73,1.39l2.05,-1.26l3.94,0.62l0.43,-0.55l-1.68,-4.02l2.89,-1.8l22.31,3.03l2.16,2.75l6.55,3.51l10.29,-0.81l4.82,0.73l1.85,1.66l-0.29,3.08l0.25,0.41l3.08,1.26l3.56,-0.88l4.35,-0.11l4.8,0.87l4.57,-0.47l4.23,3.79l0.43,0.07l3.1,-1.4l0.16,-0.6l-1.88,-2.62l0.85,-1.52l7.71,1.21l5.22,-0.26l7.09,2.09l9.59,5.22l6.35,4.11l-0.2,2.38l1.88,1.41l0.6,-0.42l-0.48,-2.53l6.15,0.57l4.4,3.51l-1.97,1.43l-4.0,0.41l-0.36,0.39l-0.06,3.79l-0.74,0.62l-2.07,-0.11l-1.91,-1.39l-3.14,-1.11l-0.78,-1.85l-2.72,-0.68l-2.63,0.49l-1.04,-1.1l0.46,-1.31l-0.5,-0.51l-3.0,0.98l-0.22,0.58l0.99,1.7l-1.21,1.48l-3.04,1.68l-3.12,-0.28l-0.4,0.23l0.09,0.46l2.2,2.09l1.46,3.2l1.15,1.1l0.24,1.33l-0.42,0.67l-4.63,-0.77l-6.96,2.9l-2.19,0.44l-7.6,5.06l-0.84,1.45l-3.61,-2.37l-6.24,2.82l-0.94,-1.15l-0.53,-0.08l-2.28,1.52l-3.2,-0.49l-0.44,0.27l-0.78,2.37l-3.05,3.78l0.09,1.47l0.29,0.36l2.54,0.72l-0.29,4.53l-1.97,0.11l-0.35,0.26l-1.07,2.94l0.8,1.45l-3.91,1.58l-1.05,3.95l-3.48,0.77l-0.3,0.3l-0.72,3.29l-3.09,2.65l-0.7,-1.74l-2.44,-12.44l1.16,-4.71l2.04,-2.06l0.22,-1.64l3.8,-0.86l4.46,-4.61l4.28,-3.81l4.48,-3.01l2.17,-5.63l-0.42,-0.54l-3.04,0.33l-1.77,3.31l-5.86,3.86l-1.86,-4.25l-0.45,-0.23l-6.46,1.3l-6.47,6.44l-0.01,0.55l1.58,1.74l-8.24,1.17l0.15,-2.2l-0.34,-0.42l-3.89,-0.56l-3.25,1.81l-7.62,-0.62l-8.45,1.19l-17.71,15.41l0.22,0.7l3.74,0.41l1.36,2.17l2.43,0.76l1.88,-1.68l2.4,0.2l3.4,3.54l0.08,2.6l-1.95,3.42l-0.21,3.9l-1.1,5.06l-3.71,4.54l-0.87,2.21l-8.29,8.89l-3.19,1.7l-1.32,0.03l-1.45,-1.36l-0.49,-0.04l-2.27,1.5l0.41,-3.65l-0.59,-2.47l1.75,-0.89l2.91,0.53l0.42,-0.2l1.68,-3.03l0.87,-3.46l0.97,-1.18l1.32,-2.88l-0.45,-0.56l-4.14,0.95l-2.19,1.25l-3.41,-0.0l-1.06,-2.93l-2.97,-2.3l-4.28,-1.06l-1.75,-5.07l-2.66,-5.01l-2.29,-1.29l-3.75,-1.01l-3.44,0.08l-3.18,0.62l-2.24,1.77l0.05,0.66l1.18,0.69l0.02,1.43l-1.33,1.05l-2.26,3.51l-0.04,1.43l-3.16,1.84l-2.82,-1.16l-3.01,0.23l-1.35,-1.07l-1.5,-0.35l-3.9,2.31l-3.22,0.52l-2.27,0.79l-3.05,-0.51l-2.21,0.03l-1.48,-1.6l-2.6,-1.63l-2.63,-0.43l-5.46,1.01l-3.23,-1.25l-0.72,-2.57l-5.2,-1.24l-2.75,-1.36l-0.5,0.12l-2.59,3.45l0.84,2.1l-2.06,1.93l-3.41,-0.77l-2.42,-0.12l-1.83,-1.54l-2.53,-0.05l-2.42,-0.98l-3.86,1.57l-4.72,2.78l-3.3,0.75l-1.55,-1.92l-3.0,0.41l-1.11,-1.33l-1.62,-0.59l-1.31,-1.94l-1.38,-0.6l-3.7,0.79l-3.31,-1.83l-0.51,0.11l-0.99,1.29l-5.29,-8.05l-2.96,-2.48l0.65,-0.77l0.01,-0.51l-0.5,-0.11l-6.2,3.21l-1.84,0.15l0.15,-1.39l-0.26,-0.42l-3.22,-1.17l-2.46,0.7l-0.69,-3.16l-0.32,-0.31l-4.5,-0.75l-2.47,1.47l-6.19,1.27l-1.29,0.86l-9.51,1.3l-1.15,1.17l-0.03,0.53l1.47,1.9l-1.89,0.69l-0.22,0.56l0.31,0.6l-2.11,1.44l0.03,0.68l3.75,2.12l-0.39,0.98l-3.23,-0.13l-0.86,0.86l-3.09,-1.59l-3.97,0.07l-2.66,1.35l-8.32,-3.56l-4.07,0.06l-5.39,3.68l-0.39,2.0l-2.03,-1.5l-0.59,0.13l-2.0,3.59l0.57,0.93l-1.28,2.16l0.06,0.48l2.13,2.17l1.95,0.04l1.37,1.82l-0.23,1.46l0.25,0.43l0.83,0.33l-0.8,1.31l-2.49,0.62l-2.49,3.2l0.0,0.49l2.17,2.78l-0.15,2.18l2.5,3.24l-1.58,1.59l-0.7,-0.13l-1.63,-1.72l-2.29,-0.84l-0.94,-1.31l-2.34,-0.63l-1.48,0.4l-0.43,-0.47l-3.51,-1.48l-5.76,-1.01l-0.45,0.19l-2.89,-2.34l-2.9,-1.2l-1.53,-1.29l1.29,-0.43l2.08,-2.61l-0.05,-0.55l-0.89,-0.79l3.05,-1.06l0.27,-0.42l-0.07,-0.69l-0.49,-0.35l-1.73,0.39l0.04,-0.68l1.04,-0.72l2.66,-0.48l0.4,-1.32l-0.5,-1.6l0.92,-1.54l0.03,-1.17l-0.29,-0.37l-3.69,-1.06l-1.41,0.02l-1.42,-1.41l-2.19,0.38l-2.77,-1.01l-0.03,-0.59l-0.89,-1.43l-2.0,-0.32l-0.11,-0.54l0.49,-0.53l0.01,-0.53l-1.6,-1.9l-3.58,0.02l-0.88,0.73l-0.46,-0.07l-1.0,-2.79l2.22,-0.02l0.97,-0.74l0.07,-0.57l-0.9,-1.04l-1.35,-0.48l-0.11,-0.7l-0.95,-0.58l-1.38,-1.99l0.46,-0.98l-0.51,-1.96l-2.45,-0.84l-1.21,0.3l-0.46,-0.76l-2.46,-0.83l-0.72,-1.87l-0.21,-1.69l-0.99,-0.85l0.85,-1.17l-0.7,-3.21l1.66,-1.97l-0.16,-0.79ZM749.2,170.72l-0.6,0.4l-0.13,0.16l-0.01,-0.51l0.74,-0.05ZM874.85,67.94l-5.63,0.48l-0.26,-0.84l3.15,-1.89l1.94,0.01l3.19,1.16l-2.39,1.09ZM797.39,48.49l-2.0,1.36l-3.8,-0.42l-4.25,-1.8l0.35,-0.97l9.69,1.83ZM783.67,46.12l-1.63,3.09l-8.98,-0.13l-4.09,1.14l-4.54,-2.97l1.16,-3.01l3.05,-0.89l6.5,0.22l8.54,2.56ZM778.2,134.98l-0.56,-0.9l0.27,-0.12l0.29,1.01ZM778.34,135.48l0.94,3.53l-0.05,3.38l1.05,3.39l2.18,5.0l-2.89,-0.83l-0.49,0.26l-1.54,4.65l2.42,3.5l-0.04,1.13l-1.24,-1.24l-0.61,0.06l-1.09,1.61l-0.28,-1.61l0.27,-3.1l-0.28,-3.4l0.58,-2.47l0.11,-4.39l-1.46,-3.36l0.21,-4.32l2.15,-1.46l0.07,-0.34ZM771.95,56.61l1.76,-1.42l2.89,-0.42l3.28,1.71l0.14,0.6l-3.27,0.03l-4.81,-0.5ZM683.76,31.09l-13.01,1.93l4.03,-6.35l1.82,-0.56l1.73,0.34l5.99,2.98l-0.56,1.66ZM670.85,27.93l-5.08,0.64l-6.86,-1.57l-3.99,-2.05l-2.1,-4.16l-2.6,-0.87l5.72,-3.5l5.2,-1.28l4.69,2.85l5.59,5.4l-0.56,4.53ZM564.15,68.94l-0.64,0.17l-7.85,-0.57l-0.86,-2.04l-4.28,-1.17l-0.28,-1.94l2.27,-0.89l0.25,-0.39l-0.08,-2.38l4.81,-3.97l-0.15,-0.7l-1.47,-0.38l5.3,-3.81l0.15,-0.44l-0.58,-1.94l5.28,-2.51l8.21,-3.27l8.28,-0.96l4.35,-1.94l4.6,-0.64l1.36,1.61l-1.34,1.28l-16.43,4.94l-7.97,4.88l-7.74,9.63l0.66,4.14l4.16,3.27ZM548.81,18.48l-5.5,1.18l-0.58,1.02l-2.59,0.84l-2.13,-1.07l1.12,-1.42l-0.3,-0.65l-2.33,-0.07l1.68,-0.36l3.47,-0.06l0.42,1.29l0.66,0.16l1.38,-1.34l2.15,-0.88l2.94,1.01l-0.39,0.36ZM477.37,133.15l-4.08,0.05l-2.56,-0.32l0.33,-0.87l3.17,-1.03l3.24,0.96l-0.09,1.23Z"
      ,"name": "روسیه"}, "RW": {"path": "M497.0,288.25l0.71,1.01l-0.11,1.09l-1.63,0.03l-1.04,1.39l-0.83,-0.11l0.51,-1.2l0.08,-1.34l0.42,-0.41l0.7,0.14l1.19,-0.61Z", "name": "رواندا"}, "RS": {"path": "M469.4,163.99l0.42,-0.5l-0.01,-0.52l-1.15,-1.63l1.43,-0.62l1.33,0.12l1.17,1.06l0.46,1.13l1.34,0.64l0.35,1.35l1.46,0.9l0.76,-0.29l0.2,0.69l-0.48,0.78l0.22,1.12l1.05,1.22l-0.77,0.8l-0.37,1.52l-1.21,0.08l0.24,-0.64l-0.39,-0.54l-2.08,-1.64l-0.9,0.05l-0.48,0.94l-2.12,-1.37l0.53,-1.6l-1.11,-1.37l0.51,-1.1l-0.41,-0.57Z", "name": "صربستان"}, "LT": {"path": "M486.93,129.3l0.17,1.12l-1.81,0.98l-0.72,2.02l-2.47,1.18l-2.1,-0.02l-0.73,-1.05l-1.06,-0.3l-0.09,-1.87l-3.56,-1.13l-0.43,-2.36l2.48,-0.94l4.12,0.22l2.25,-0.31l0.52,0.69l1.24,0.21l2.19,1.56Z", "name": "لیتوانی"}, "LU": {"path": "M436.08,149.45l-0.48,-0.07l0.3,-1.28l0.27,0.4l-0.09,0.96Z", "name": "لوکزامبورگ"}, "LR": {"path": "M399.36,265.97l0.18,1.54l-0.48,0.99l0.08,0.47l2.47,1.8l-0.33,2.8l-2.65,-1.13l-5.78,-4.61l0.58,-1.32l2.1,-2.33l0.86,-0.22l0.77,1.14l-0.14,0.85l0.59,0.87l1.0,0.14l0.76,-0.99Z", "name": "لیبریا"}, "RO": {"path": "M487.53,154.23l0.6,0.24l2.87,3.98l-0.17,2.69l0.45,1.42l1.32,0.81l1.35,-0.42l0.76,0.36l0.02,0.31l-0.83,0.45l-0.59,-0.22l-0.54,0.3l-0.62,3.3l-1.0,-0.22l-2.07,-1.13l-2.95,0.71l-1.25,0.76l-3.51,-0.15l-1.89,-0.47l-0.87,0.16l-0.82,-1.3l0.29,-0.26l-0.06,-0.64l-1.09,-0.34l-0.56,0.5l-1.05,-0.64l-0.39,-1.39l-1.36,-0.65l-0.35,-1.0l-0.83,-0.75l1.54,-0.54l2.66,-4.21l2.4,-1.24l2.96,0.34l1.48,0.73l0.79,-0.45l1.78,-0.3l0.75,-0.74l0.79,0.0Z", "name": "رومانی"}, "GW": {"path": "M386.23,253.6l-0.29,0.84l0.15,0.6l-2.21,0.59l-0.86,0.96l-1.04,-0.83l-1.09,-0.23l-0.54,-1.06l-0.66,-0.49l2.41,-0.48l4.13,0.1Z", "name": "گینه بیسائو"}, "GT": {"path": "M195.08,249.77l-2.48,-0.37l-1.03,-0.45l-1.14,-0.89l0.3,-0.99l-0.24,-0.68l0.96,-1.66l2.98,-0.01l0.4,-0.37l-0.19,-1.28l-1.67,-1.4l0.51,-0.4l0.0,-1.05l3.85,0.02l-0.21,4.53l0.4,0.43l1.46,0.38l-1.48,0.98l-0.35,0.7l0.12,0.57l-2.2,1.96Z", "name": "گواتمالا"}, "GR": {"path": "M487.07,174.59l-0.59,1.43l-0.37,0.21l-2.84,-0.35l-3.03,0.77l-0.18,0.68l1.28,1.23l-0.61,0.23l-1.14,0.0l-1.2,-1.39l-0.63,0.03l-0.53,1.01l0.56,1.76l1.03,1.19l-0.56,0.38l-0.05,0.62l2.52,2.12l0.02,0.87l-1.78,-0.59l-0.48,0.56l0.5,1.0l-1.07,0.2l-0.3,0.53l0.75,2.01l-0.98,0.02l-1.84,-1.12l-1.37,-4.2l-2.21,-2.95l-0.11,-0.56l1.04,-1.28l0.2,-0.95l0.85,-0.66l0.03,-0.46l1.32,-0.21l1.01,-0.64l1.22,0.05l0.65,-0.56l2.26,-0.0l1.82,-0.75l1.85,1.0l2.28,-0.28l0.35,-0.39l0.01,-0.77l0.34,0.22ZM480.49,192.16l0.58,0.4l-0.68,-0.12l0.11,-0.28ZM482.52,192.82l2.51,0.06l0.24,0.32l-1.99,0.13l-0.77,-0.51Z", "name": "یونان"}, "GQ": {"path": "M448.79,279.62l0.02,2.22l-4.09,0.0l0.69,-2.27l3.38,0.05Z", "name": "معادله گینه"}, "GY": {"path": "M277.42,270.07l-0.32,1.83l-1.32,0.57l-0.23,0.46l-0.28,2.0l1.11,1.82l0.83,0.19l0.32,1.25l1.13,1.62l-1.21,-0.19l-1.08,0.71l-1.77,0.5l-0.44,0.46l-0.86,-0.09l-1.32,-1.01l-0.77,-2.27l0.36,-1.9l0.68,-1.23l-0.57,-1.17l-0.74,-0.43l0.12,-1.16l-0.9,-0.69l-1.1,0.09l-1.31,-1.48l0.53,-0.72l-0.04,-0.84l1.99,-0.86l0.05,-0.59l-0.71,-0.78l0.14,-0.57l1.66,-1.24l1.36,0.77l1.41,1.49l0.06,1.15l0.37,0.38l0.8,0.05l2.06,1.86Z", "name": "گایانا"}, "GE": {"path": "M521.71,168.93l5.29,0.89l4.07,2.01l1.41,-0.44l2.07,0.56l0.68,1.1l1.07,0.55l-0.12,0.59l0.98,1.29l-1.01,-0.13l-1.81,-0.83l-0.94,0.47l-3.23,0.43l-2.29,-1.39l-2.33,0.05l0.21,-0.97l-0.76,-2.26l-1.45,-1.12l-1.43,-0.39l-0.41,-0.42Z", "name": "گرجستان"}, "GB": {"path": "M412.61,118.72l-2.19,3.22l-0.0,0.45l5.13,-0.3l-0.53,2.37l-2.2,3.12l0.29,0.63l2.37,0.21l2.33,4.3l1.76,0.69l2.2,5.12l2.94,0.77l-0.23,1.62l-1.15,0.88l-0.1,0.52l0.82,1.42l-1.86,1.43l-3.3,-0.02l-4.12,0.87l-1.04,-0.58l-0.47,0.06l-1.51,1.41l-2.12,-0.34l-1.86,1.18l-0.6,-0.29l3.19,-3.0l2.16,-0.69l0.28,-0.41l-0.34,-0.36l-3.73,-0.53l-0.4,-0.76l2.2,-0.87l0.17,-0.61l-1.26,-1.67l0.36,-1.7l3.38,0.28l0.43,-0.33l0.37,-1.99l-1.79,-2.49l-3.11,-0.72l-0.38,-0.59l0.79,-1.35l-0.04,-0.46l-0.82,-0.97l-0.61,0.01l-0.68,0.84l-0.1,-2.34l-1.23,-1.88l0.85,-3.47l1.77,-2.68l1.85,0.26l2.17,-0.22ZM406.26,132.86l-1.01,1.77l-1.57,-0.59l-1.16,0.01l0.37,-1.54l-0.39,-1.39l1.45,-0.1l2.3,1.84Z", "name": "انگلستان"}, "GA": {"path": "M453.24,279.52l-0.08,0.98l0.7,1.29l2.36,0.24l-0.98,2.63l1.18,1.79l0.25,1.78l-0.29,1.52l-0.6,0.93l-1.84,-0.09l-1.23,-1.11l-0.66,0.23l-0.15,0.84l-1.42,0.26l-1.02,0.7l-0.11,0.52l0.77,1.35l-1.34,0.97l-3.94,-4.3l-1.44,-2.45l0.06,-0.6l0.54,-0.81l1.05,-3.46l4.17,-0.07l0.4,-0.4l-0.02,-2.66l2.39,0.21l1.25,-0.27Z", "name": "گابون"}, "GN": {"path": "M391.8,254.11l0.47,0.8l1.11,-0.32l0.98,0.7l1.07,0.2l2.26,-1.22l0.64,0.44l1.13,1.56l-0.48,1.4l0.8,0.3l-0.08,0.48l0.46,0.68l-0.35,1.36l1.05,2.61l-1.0,0.69l0.03,1.41l-0.72,-0.06l-1.08,1.0l-0.24,-0.27l0.07,-1.11l-1.05,-1.54l-1.79,0.21l-0.35,-2.01l-1.6,-2.18l-2.0,-0.0l-1.31,0.54l-1.95,2.18l-1.86,-2.19l-1.2,-0.78l-0.3,-1.11l-0.8,-0.85l0.65,-0.72l0.81,-0.03l1.64,-0.8l0.23,-1.87l2.67,0.64l0.89,-0.3l1.21,0.15Z", "name": "گینه"}, "GM": {"path": "M379.31,251.39l0.1,-0.35l2.43,-0.07l0.74,-0.61l0.51,-0.03l0.77,0.49l-1.03,-0.3l-1.87,0.9l-1.65,-0.04ZM384.03,250.91l0.91,0.05l0.75,-0.24l-0.59,0.31l-1.08,-0.13Z", "name": "گامبیا"}, "GL": {"path": "M353.02,1.2l14.69,4.67l-3.68,1.89l-22.97,0.86l-0.36,0.27l0.12,0.43l1.55,1.18l8.79,-0.66l7.48,2.07l4.86,-1.77l1.66,1.73l-2.53,3.19l-0.01,0.48l0.46,0.15l6.35,-2.2l12.06,-2.31l7.24,1.13l1.09,1.99l-9.79,4.01l-1.44,1.32l-7.87,0.98l-0.35,0.41l0.38,0.38l5.07,0.24l-2.53,3.58l-2.07,3.81l0.08,6.05l2.57,3.11l-3.22,0.2l-4.12,1.66l-0.05,0.72l4.45,2.65l0.51,3.75l-2.3,0.4l-0.25,0.64l2.79,3.69l-4.82,0.31l-0.36,0.29l0.16,0.44l2.62,1.8l-0.59,1.22l-3.3,0.7l-3.45,0.01l-0.29,0.68l3.03,3.12l0.02,1.34l-4.4,-1.73l-1.72,1.35l0.15,0.66l3.31,1.15l3.13,2.71l0.81,3.16l-3.85,0.75l-4.89,-4.26l-0.47,-0.03l-0.17,0.44l0.79,2.86l-2.71,2.21l-0.13,0.44l0.37,0.27l8.73,0.34l-12.32,6.64l-7.24,1.48l-2.94,0.08l-2.69,1.75l-3.43,4.41l-5.24,2.84l-1.73,0.18l-7.12,2.1l-2.15,2.52l-0.13,2.99l-1.19,2.45l-4.01,3.09l-0.14,0.44l0.97,2.9l-2.28,6.48l-3.1,0.2l-3.83,-3.07l-4.86,-0.02l-2.25,-1.93l-1.7,-3.79l-4.3,-4.84l-1.21,-2.49l-0.44,-3.8l-3.32,-3.63l0.84,-2.86l-1.56,-1.7l2.28,-4.6l3.83,-1.74l1.03,-1.96l0.52,-3.47l-0.59,-0.41l-4.17,2.21l-2.07,0.58l-2.72,-1.28l-0.15,-2.71l0.85,-2.09l2.01,-0.06l5.06,1.2l0.46,-0.23l-0.14,-0.49l-6.54,-4.47l-2.67,0.55l-1.58,-0.86l2.56,-4.01l-0.03,-0.48l-1.5,-1.74l-4.98,-8.5l-3.13,-1.96l0.03,-1.88l-0.24,-0.37l-6.85,-3.02l-5.36,-0.38l-12.7,0.58l-2.78,-1.57l-3.66,-2.77l5.73,-1.45l5.0,-0.28l0.38,-0.38l-0.35,-0.41l-10.67,-1.38l-5.3,-2.06l0.25,-1.54l18.41,-5.26l1.22,-2.27l-0.25,-0.55l-6.14,-1.86l1.68,-1.77l8.55,-4.03l3.59,-0.63l0.3,-0.54l-0.88,-2.27l5.47,-1.47l7.65,-0.95l7.55,-0.05l3.04,1.85l6.48,-3.27l5.81,2.22l3.56,0.5l5.16,1.94l0.5,-0.21l-0.17,-0.52l-5.71,-3.13l0.28,-2.13l8.12,-3.6l8.7,0.28l3.35,-2.34l8.71,-0.6l19.93,0.8Z", "name": "Greenland"}, "KW": {"path": "M540.81,207.91l0.37,0.86l-0.17,0.76l0.6,1.53l-0.95,0.04l-0.82,-1.28l-1.57,-0.18l1.31,-1.88l1.22,0.17Z", "name": "Kuwait"}, "GH": {"path": "M420.53,257.51l-0.01,0.72l0.96,1.2l0.24,3.73l0.59,0.95l-0.51,2.1l0.19,1.41l1.02,2.21l-6.97,2.84l-1.8,-0.57l0.04,-0.89l-1.02,-2.04l0.61,-2.65l1.07,-2.32l-0.96,-6.47l5.01,0.07l0.94,-0.39l0.61,0.11Z", "name": "Ghana"}, "OM": {"path": "M568.09,230.93l-0.91,1.67l-1.22,0.04l-0.6,0.76l-0.41,1.51l0.27,1.58l-1.16,0.05l-1.56,0.97l-0.76,1.74l-1.62,0.05l-0.98,0.65l-0.17,1.15l-0.89,0.52l-1.49,-0.18l-2.4,0.94l-2.47,-5.4l7.35,-2.71l1.67,-5.23l-1.12,-2.09l0.05,-0.83l0.67,-1.0l0.07,-1.05l0.9,-0.42l-0.05,-2.07l0.7,-0.01l1.0,1.62l1.51,1.08l3.3,0.84l1.73,2.29l0.81,0.37l-1.23,2.35l-0.99,0.79Z", "name": "Oman"}, "_1": {"path": "M531.15,258.94l1.51,0.12l5.13,-0.95l5.3,-1.48l-0.01,4.4l-2.67,3.39l-1.85,0.01l-8.04,-2.94l-2.55,-3.17l1.12,-1.71l2.04,2.34Z", "name": "Somaliland"}, "_0": {"path": "M472.77,172.64l-1.08,-1.29l0.96,-0.77l0.29,-0.83l1.98,1.64l-0.36,0.67l-1.79,0.58Z", "name": "Kosovo"}, "JO": {"path": "M518.64,201.38l-5.14,1.56l-0.19,0.65l2.16,2.39l-0.89,1.14l-1.71,0.34l-1.71,1.8l-2.34,-0.37l1.21,-4.32l0.56,-4.07l2.8,0.94l4.46,-2.71l0.79,2.66Z", "name": "Jordan"}, "HR": {"path": "M455.59,162.84l1.09,0.07l-0.82,0.94l-0.27,-1.01ZM456.96,162.92l0.62,-0.41l1.73,0.45l0.42,-0.4l-0.01,-0.59l0.86,-0.52l0.2,-1.05l1.63,-0.68l2.57,1.68l2.07,0.6l0.87,-0.31l1.05,1.57l-0.52,0.63l-1.05,-0.56l-1.68,0.04l-2.1,-0.5l-1.29,0.06l-0.57,0.49l-0.59,-0.47l-0.62,0.16l-0.46,1.7l1.79,2.42l2.79,2.75l-1.18,-0.87l-2.21,-0.87l-1.67,-1.78l0.13,-0.63l-1.05,-1.19l-0.32,-1.27l-1.42,-0.43Z", "name": "Croatia"}, "HT": {"path": "M237.05,238.38l-1.16,0.43l-0.91,-0.55l0.05,-0.2l2.02,0.31ZM237.53,238.43l1.06,0.12l-0.05,0.01l-1.01,-0.12ZM239.25,238.45l0.79,-0.51l0.06,-0.62l-1.02,-1.0l0.02,-0.82l-0.3,-0.4l-0.93,-0.32l3.16,0.45l0.02,1.84l-0.48,0.34l-0.08,0.58l0.54,0.72l-1.78,-0.26Z", "name": "Haiti"}, "HU": {"path": "M462.08,157.89l0.65,-1.59l-0.09,-0.44l0.64,-0.0l0.39,-0.34l0.1,-0.69l1.75,0.87l2.32,-0.37l0.43,-0.66l3.49,-0.78l0.69,-0.78l0.57,-0.14l2.57,0.93l0.67,-0.23l1.03,0.65l0.08,0.37l-1.42,0.71l-2.59,4.14l-1.8,0.53l-1.68,-0.1l-2.74,1.23l-1.85,-0.54l-2.54,-1.66l-0.66,-1.1Z", "name": "Hungary"}, "HN": {"path": "M199.6,249.52l-1.7,-1.21l0.06,-0.94l3.04,-2.14l2.37,0.28l1.27,-0.09l1.1,-0.52l1.3,0.28l1.14,-0.25l1.38,0.37l2.23,1.37l-2.36,0.93l-1.23,-0.39l-0.88,1.3l-1.28,0.99l-0.98,-0.22l-0.42,0.52l-0.96,0.05l-0.36,0.41l0.04,0.88l-0.52,0.6l-0.3,0.04l-0.3,-0.55l-0.66,-0.31l0.11,-0.67l-0.48,-0.65l-0.87,-0.26l-0.73,0.2Z", "name": "Honduras"}, "PR": {"path": "M256.17,238.73l-0.26,0.27l-2.83,0.05l-0.07,-0.55l1.95,-0.1l1.22,0.33Z", "name": "Puerto Rico"}, "PS": {"path": "M509.21,203.07l0.1,-0.06l-0.02,0.03l-0.09,0.03ZM509.36,202.91l-0.02,-0.63l-0.33,-0.16l0.31,-1.09l0.24,0.1l-0.2,1.78Z", "name": "Palestine"}, "PT": {"path": "M401.84,187.38l-0.64,0.47l-1.13,-0.35l-0.91,0.17l0.28,-1.78l-0.24,-1.78l-1.25,-0.56l-0.45,-0.84l0.17,-1.66l1.01,-1.18l0.69,-2.92l-0.04,-1.39l-0.59,-1.9l1.3,-0.85l0.84,1.35l3.1,-0.3l0.46,0.99l-1.05,0.94l-0.03,2.16l-0.41,0.57l-0.08,1.1l-0.79,0.18l-0.26,0.59l0.91,1.6l-0.63,1.75l0.76,1.09l-1.1,1.52l0.07,1.05Z", "name": "Portugal"}, "PY": {"path": "M274.9,336.12l0.74,1.52l-0.16,3.45l0.32,0.41l2.64,0.5l1.11,-0.47l1.4,0.59l0.36,0.6l0.53,3.42l1.27,0.4l0.98,-0.38l0.51,0.27l-0.0,1.18l-1.21,5.32l-2.09,1.9l-1.8,0.4l-4.71,-0.98l2.2,-3.63l-0.32,-1.5l-2.78,-1.28l-3.03,-1.94l-2.07,-0.44l-4.34,-4.06l0.91,-2.9l0.08,-1.42l1.07,-2.04l4.13,-0.72l2.18,0.03l2.05,1.17l0.03,0.59Z", "name": "Paraguay"}, "PA": {"path": "M213.8,263.68l0.26,-1.52l-0.36,-0.26l-0.01,-0.49l0.44,-0.1l0.93,1.4l1.26,0.03l0.77,0.49l1.38,-0.23l2.51,-1.11l0.86,-0.72l3.45,0.85l1.4,1.18l0.41,1.74l-0.21,0.34l-0.53,-0.12l-0.47,0.29l-0.16,0.6l-0.68,-1.28l0.45,-0.49l-0.19,-0.66l-0.47,-0.13l-0.54,-0.84l-1.5,-0.75l-1.1,0.16l-0.75,0.99l-1.62,0.84l-0.18,0.96l0.85,0.97l-0.58,0.45l-0.69,0.08l-0.34,-1.18l-1.27,0.03l-0.71,-1.05l-2.59,-0.46Z", "name": "Panama"}, "PG": {"path": "M808.58,298.86l2.54,2.56l-0.13,0.26l-0.33,0.12l-0.87,-0.78l-1.22,-2.16ZM801.41,293.04l0.5,0.29l0.26,0.27l-0.49,-0.35l-0.27,-0.21ZM803.17,294.58l0.59,0.5l0.08,1.06l-0.29,-0.91l-0.38,-0.65ZM796.68,298.41l0.52,0.75l1.43,-0.19l2.27,-1.81l-0.01,-1.43l1.12,0.16l-0.04,1.1l-0.7,1.28l-1.12,0.18l-0.62,0.79l-2.46,1.11l-1.17,-0.0l-3.08,-1.25l3.41,0.0l0.45,-0.68ZM789.15,303.55l2.31,1.8l1.59,2.61l1.34,0.13l-0.06,0.66l0.31,0.43l1.06,0.24l0.06,0.65l2.25,1.05l-1.22,0.13l-0.72,-0.63l-4.56,-0.65l-3.22,-2.87l-1.49,-2.34l-3.27,-1.1l-2.38,0.72l-1.59,0.86l-0.2,0.42l0.27,1.55l-1.55,0.68l-1.36,-0.4l-2.21,-0.09l-0.08,-15.41l8.39,2.93l2.95,2.4l0.6,1.64l4.02,1.49l0.31,0.68l-1.76,0.21l-0.33,0.52l0.55,1.68Z", "name": "Papua New Guinea"}, "PE": {"path": "M244.96,295.21l-1.26,-0.07l-0.57,0.42l-1.93,0.45l-2.98,1.75l-0.36,1.36l-0.58,0.8l0.12,1.37l-1.24,0.59l-0.22,1.22l-0.62,0.84l1.04,2.27l1.28,1.44l-0.41,0.84l0.32,0.57l1.48,0.13l1.16,1.37l2.21,0.07l1.63,-1.08l-0.13,3.02l0.3,0.4l1.14,0.29l1.31,-0.34l1.9,3.59l-0.48,0.85l-0.17,3.85l-0.94,1.59l0.35,0.75l-0.47,1.07l0.98,1.97l-2.1,3.82l-0.98,0.5l-2.17,-1.28l-0.39,-1.16l-4.95,-2.58l-4.46,-2.79l-1.84,-1.51l-0.91,-1.84l0.3,-0.96l-2.11,-3.33l-4.82,-9.68l-1.04,-1.2l-0.87,-1.94l-3.4,-2.48l0.58,-1.18l-1.13,-2.23l0.66,-1.49l1.45,-1.15l-0.6,0.98l0.07,0.92l0.47,0.36l1.74,0.03l0.97,1.17l0.54,0.07l1.42,-1.03l0.6,-1.84l1.42,-2.02l3.04,-1.04l2.73,-2.62l0.86,-1.74l-0.1,-1.87l1.44,1.02l0.9,1.25l1.06,0.59l1.7,2.73l1.86,0.31l1.45,-0.61l0.96,0.39l1.36,-0.19l1.45,0.89l-1.4,2.21l0.31,0.61l0.59,0.05l0.47,0.5Z", "name": "Peru"}, "PK": {"path": "M615.09,192.34l-1.83,1.81l-2.6,0.39l-3.73,-0.68l-1.58,1.33l-0.09,0.42l1.77,4.39l1.7,1.23l-1.69,1.27l-0.12,2.14l-2.33,2.64l-1.6,2.8l-2.46,2.67l-3.03,-0.07l-2.76,2.83l0.05,0.6l1.5,1.11l0.26,1.9l1.44,1.5l0.37,1.68l-5.01,-0.01l-1.78,1.7l-1.42,-0.52l-0.76,-1.87l-2.27,-2.15l-11.61,0.86l0.71,-2.34l3.43,-1.32l0.25,-0.44l-0.21,-1.24l-1.2,-0.65l-0.28,-2.46l-2.29,-1.14l-1.28,-1.94l2.82,0.94l2.62,-0.38l1.42,0.33l0.76,-0.56l1.71,0.19l3.25,-1.14l0.27,-0.36l0.08,-2.19l1.18,-1.32l1.68,0.0l0.58,-0.82l1.6,-0.3l1.19,0.16l0.98,-0.78l0.02,-1.88l0.93,-1.47l1.48,-0.66l0.19,-0.55l-0.66,-1.25l2.04,-0.11l0.69,-1.01l-0.02,-1.16l1.11,-1.06l-0.17,-1.78l-0.49,-1.03l1.15,-0.98l5.42,-0.91l2.6,-0.82l1.6,1.16l0.97,2.34l3.45,0.97Z", "name": "Pakistan"}, "PH": {"path": "M737.01,263.84l0.39,2.97l-0.44,1.18l-0.55,-1.53l-0.67,-0.14l-1.17,1.28l0.65,2.09l-0.42,0.69l-2.48,-1.23l-0.57,-1.49l0.65,-1.03l-0.1,-0.54l-1.59,-1.19l-0.56,0.08l-0.65,0.87l-1.23,0.0l-1.58,0.97l0.83,-1.8l2.56,-1.42l0.65,0.84l0.45,0.13l1.9,-0.69l0.56,-1.11l1.5,-0.06l0.38,-0.43l-0.09,-1.19l1.21,0.71l0.36,2.02ZM733.59,256.58l0.05,0.75l0.08,0.26l-0.8,-0.42l-0.18,-0.71l0.85,0.12ZM734.08,256.1l-0.12,-1.12l-1.0,-1.27l1.36,0.03l0.53,0.73l0.51,2.04l-1.27,-0.4ZM733.76,257.68l0.38,0.98l-0.32,0.15l-0.07,-1.13ZM724.65,238.43l1.46,0.7l0.72,-0.31l-0.32,1.17l0.79,1.71l-0.57,1.84l-1.53,1.04l-0.39,2.25l0.56,2.04l1.63,0.57l1.16,-0.27l2.71,1.23l-0.19,1.08l0.76,0.84l-0.08,0.36l-1.4,-0.9l-0.88,-1.27l-0.66,0.0l-0.38,0.55l-1.6,-1.31l-2.15,0.36l-0.87,-0.39l0.07,-0.61l0.66,-0.55l-0.01,-0.62l-0.75,-0.59l-0.72,0.44l-0.74,-0.87l-0.39,-2.49l0.32,0.27l0.66,-0.28l0.26,-3.97l0.7,-2.02l1.14,0.0ZM731.03,258.87l-0.88,0.85l-1.19,1.94l-1.05,-1.19l0.93,-1.1l0.32,-1.47l0.52,-0.06l-0.27,1.15l0.22,0.45l0.49,-0.12l1.0,-1.32l-0.08,0.85ZM726.83,255.78l0.83,0.38l1.17,-0.0l-0.02,0.48l-2.0,1.4l0.03,-2.26ZM724.81,252.09l-0.38,1.27l-1.42,-1.95l1.2,0.05l0.6,0.63ZM716.55,261.82l1.1,-0.95l0.03,-0.03l-0.28,0.36l-0.85,0.61ZM719.22,259.06l0.04,-0.06l0.8,-1.53l0.16,0.75l-1.0,0.84Z", "name": "Philippines"}, "PL": {"path": "M468.44,149.42l-1.11,-1.54l-1.86,-0.33l-0.48,-1.05l-1.72,-0.37l-0.65,0.69l-0.72,-0.36l0.11,-0.61l-0.33,-0.46l-1.75,-0.27l-1.04,-0.93l-0.94,-1.94l0.16,-1.22l-0.62,-1.8l-0.78,-1.07l0.57,-1.04l-0.48,-1.43l1.41,-0.83l6.91,-2.71l2.14,0.5l0.52,0.91l5.51,0.44l4.55,-0.05l1.07,0.31l0.48,0.84l0.15,1.58l0.65,1.2l-0.01,0.99l-1.27,0.58l-0.19,0.54l0.73,1.48l0.08,1.55l1.2,2.76l-0.17,0.58l-1.23,0.44l-2.27,2.72l0.18,0.95l-1.97,-1.03l-1.98,0.4l-1.36,-0.28l-1.24,0.58l-1.07,-0.97l-1.16,0.24Z", "name": "Poland"}, "-99": {"path": "M504.91,192.87l0.34,0.01l0.27,-0.07l-0.29,0.26l-0.31,-0.2Z", "name": "N. Cyprus"}, "ZM": {"path": "M481.47,313.3l0.39,0.31l2.52,0.14l0.99,1.17l2.01,0.35l1.4,-0.64l0.69,1.17l1.78,0.33l1.84,2.35l2.23,0.18l0.4,-0.43l-0.21,-2.74l-0.62,-0.3l-0.48,0.32l-1.98,-1.17l0.72,-5.29l-0.51,-1.18l0.57,-1.3l3.68,-0.62l0.26,0.63l1.21,0.63l0.9,-0.22l2.16,0.67l1.33,0.71l1.07,1.02l0.56,1.87l-0.88,2.7l0.43,2.09l-0.73,0.87l-0.76,2.37l0.59,0.68l-6.6,1.83l-0.29,0.44l0.19,1.45l-1.68,0.35l-1.43,1.02l-0.38,0.87l-0.87,0.26l-3.48,3.69l-4.16,-0.53l-1.52,-1.0l-1.77,-0.13l-1.83,0.52l-3.04,-3.4l0.11,-7.59l4.82,0.03l0.39,-0.49l-0.18,-0.76l0.33,-0.83l-0.4,-1.36l0.24,-1.05Z", "name": "Zambia"}, "EH": {"path": "M384.42,230.28l0.25,-0.79l1.06,-1.29l0.8,-3.51l3.38,-2.78l0.7,-1.81l0.06,4.84l-1.98,0.2l-0.94,1.59l0.39,3.56l-3.7,-0.01ZM392.01,218.1l0.7,-1.8l1.77,-0.24l2.09,0.34l0.95,-0.62l1.28,-0.07l-0.0,2.51l-6.79,-0.12Z", "name": "W. Sahara"}, "EE": {"path": "M485.71,115.04l2.64,0.6l2.56,0.11l-1.6,1.91l0.61,3.54l-0.81,0.87l-1.78,-0.01l-3.22,-1.76l-1.8,0.45l0.21,-1.53l-0.58,-0.41l-0.69,0.34l-1.26,-1.03l-0.17,-1.63l2.83,-0.92l3.05,-0.52Z", "name": "Estonia"}, "EG": {"path": "M492.06,205.03l1.46,0.42l2.95,-1.64l2.04,-0.21l1.53,0.3l0.59,1.19l0.69,0.04l0.41,-0.64l1.81,0.58l1.95,0.16l1.04,-0.51l1.42,4.08l-2.03,4.54l-1.66,-1.77l-1.76,-3.85l-0.64,-0.12l-0.36,0.67l1.04,2.88l3.44,6.95l1.78,3.04l2.03,2.65l-0.36,0.53l0.23,2.01l2.7,2.19l-28.41,0.0l0.0,-18.96l-0.73,-2.2l0.59,-1.56l-0.32,-1.26l0.68,-0.99l3.06,-0.04l4.82,1.52Z", "name": "Egypt"}, "ZA": {"path": "M467.14,373.21l-0.13,-1.96l-0.68,-1.56l0.7,-0.68l-0.13,-2.33l-4.56,-8.19l0.77,-0.86l0.6,0.45l0.69,1.31l2.83,0.72l1.5,-0.26l2.24,-1.39l0.19,-9.55l1.35,2.3l-0.21,1.5l0.61,1.2l0.4,0.19l1.79,-0.27l2.6,-2.07l0.69,-1.32l0.96,-0.48l2.19,1.04l2.04,0.13l1.77,-0.65l0.85,-2.12l1.38,-0.33l1.59,-2.76l2.15,-1.89l3.41,-1.87l2.0,0.45l1.02,-0.28l0.99,0.2l1.75,5.29l-0.38,3.25l-0.81,-0.23l-1.0,0.46l-0.87,1.68l-0.05,1.16l1.97,1.84l1.47,-0.29l0.69,-1.18l1.09,0.01l-0.76,3.69l-0.58,1.09l-2.2,1.79l-3.17,4.76l-2.8,2.83l-3.57,2.88l-2.53,1.05l-1.22,0.14l-0.51,0.7l-1.18,-0.32l-1.39,0.5l-2.59,-0.52l-1.61,0.33l-1.18,-0.11l-2.55,1.1l-2.1,0.44l-1.6,1.07l-0.85,0.05l-0.93,-0.89l-0.93,-0.15l-0.97,-1.13l-0.25,0.05ZM491.45,364.19l0.62,-0.93l1.48,-0.59l1.18,-2.19l-0.07,-0.49l-1.99,-1.69l-1.66,0.56l-1.43,1.14l-1.34,1.73l0.02,0.51l1.88,2.11l1.31,-0.16Z", "name": "South Africa"}, "EC": {"path": "M231.86,285.53l0.29,1.59l-0.69,1.45l-2.61,2.51l-3.13,1.11l-1.53,2.18l-0.49,1.68l-1.0,0.73l-1.02,-1.11l-1.78,-0.16l0.67,-1.15l-0.24,-0.86l1.25,-2.13l-0.54,-1.09l-0.67,-0.08l-0.72,0.87l-0.87,-0.64l0.35,-0.69l-0.36,-1.96l0.81,-0.51l0.45,-1.51l0.92,-1.57l-0.07,-0.97l2.65,-1.33l2.75,1.35l0.77,1.05l2.12,0.35l0.76,-0.32l1.96,1.21Z", "name": "Ecuador"}, "AL": {"path": "M470.32,171.8l0.74,0.03l0.92,0.89l-0.17,1.95l0.36,1.28l1.01,0.82l-1.82,2.83l-0.19,-0.61l-1.25,-0.89l-0.18,-1.2l0.53,-2.82l-0.54,-1.47l0.6,-0.83Z", "name": "Albania"}, "AO": {"path": "M461.55,300.03l1.26,3.15l1.94,2.36l2.47,-0.53l1.25,0.32l0.44,-0.18l0.93,-1.92l1.31,-0.08l0.41,-0.44l0.47,-0.0l-0.1,0.41l0.39,0.49l2.65,-0.02l0.03,1.19l0.48,1.01l-0.34,1.52l0.18,1.55l0.83,1.04l-0.13,2.85l0.54,0.39l3.96,-0.41l-0.1,1.79l0.39,1.05l-0.24,1.43l-4.7,-0.03l-0.4,0.39l-0.12,8.13l2.92,3.49l-3.83,0.88l-5.89,-0.36l-1.88,-1.24l-10.47,0.22l-1.3,-1.01l-1.85,-0.16l-2.4,0.77l-0.15,-1.06l0.33,-2.16l1.0,-3.45l1.35,-3.2l2.24,-2.8l0.33,-2.06l-0.13,-1.53l-0.8,-1.08l-1.21,-2.87l0.87,-1.62l-1.27,-4.12l-1.17,-1.53l2.47,-0.63l7.03,0.03ZM451.71,298.87l-0.47,-1.25l1.25,-1.11l0.32,0.3l-0.99,1.03l-0.12,1.03Z", "name": "Angola"}, "KZ": {"path": "M552.8,172.89l0.46,-1.27l-0.48,-1.05l-2.96,-1.19l-1.06,-2.58l-1.37,-0.87l-0.03,-0.3l1.95,0.23l0.45,-0.38l0.08,-1.96l1.75,-0.41l2.1,0.45l0.48,-0.33l0.45,-3.04l-0.45,-2.09l-0.41,-0.31l-2.42,0.15l-2.36,-0.73l-2.87,1.37l-2.17,0.61l-0.85,-0.34l0.13,-1.61l-1.6,-2.12l-2.02,-0.08l-1.78,-1.82l1.29,-2.18l-0.57,-0.95l1.62,-2.91l2.21,1.63l0.63,-0.27l0.29,-2.22l4.92,-3.43l3.71,-0.08l8.4,3.6l2.92,-1.36l3.77,-0.06l3.11,1.66l0.51,-0.11l0.6,-0.81l3.31,0.13l0.39,-0.25l0.63,-1.57l-0.17,-0.5l-3.5,-1.98l1.87,-1.27l-0.13,-1.03l1.98,-0.72l0.18,-0.62l-1.59,-2.06l0.81,-0.82l9.23,-1.18l1.33,-0.88l6.18,-1.26l2.26,-1.42l4.08,0.68l0.73,3.33l0.51,0.3l2.48,-0.8l2.79,1.02l-0.17,1.56l0.43,0.44l2.55,-0.24l4.89,-2.53l0.03,0.32l3.15,2.61l5.56,8.47l0.65,0.02l1.12,-1.46l3.15,1.74l3.76,-0.78l1.15,0.49l1.14,1.8l1.84,0.76l0.99,1.29l3.35,-0.25l1.02,1.52l-1.6,1.81l-1.93,0.28l-0.34,0.38l-0.11,3.05l-1.13,1.16l-4.75,-1.0l-0.46,0.27l-1.76,5.47l-1.1,0.59l-4.91,1.23l-0.27,0.54l2.1,4.97l-1.37,0.63l-0.23,0.41l0.13,1.13l-0.88,-0.25l-1.42,-1.13l-7.89,-0.4l-0.92,0.31l-3.73,-1.22l-1.42,0.63l-0.53,1.66l-3.72,-0.94l-1.85,0.43l-0.76,1.4l-4.65,2.62l-1.13,2.08l-0.44,0.01l-0.92,-1.4l-2.87,-0.09l-0.45,-2.14l-0.38,-0.32l-0.8,-0.01l0.0,-2.96l-3.0,-2.22l-7.31,0.58l-2.35,-2.68l-6.71,-3.69l-6.45,1.83l-0.29,0.39l0.1,10.85l-0.7,0.08l-1.62,-2.17l-1.83,-0.96l-3.11,0.59l-0.64,0.51Z", "name": "Kazakhstan"}, "ET": {"path": "M516.04,247.79l1.1,0.84l1.63,-0.45l0.68,0.47l1.63,0.03l2.01,0.94l1.73,1.66l1.64,2.07l-1.52,2.04l0.16,1.72l0.39,0.38l2.05,0.0l-0.36,1.03l2.86,3.58l8.32,3.08l1.31,0.02l-6.32,6.75l-3.1,0.11l-2.36,1.77l-1.47,0.04l-0.86,0.79l-1.38,-0.0l-1.32,-0.81l-2.29,1.05l-0.76,0.98l-3.29,-0.41l-3.07,-2.07l-1.8,-0.07l-0.62,-0.6l0.0,-1.24l-0.28,-0.38l-1.15,-0.37l-1.4,-2.59l-1.19,-0.68l-0.47,-1.0l-1.27,-1.23l-1.16,-0.22l0.43,-0.72l1.45,-0.28l0.41,-0.95l-0.03,-2.21l0.68,-2.44l1.05,-0.63l1.43,-3.06l1.57,-1.37l1.02,-2.51l0.35,-1.88l2.52,0.46l0.44,-0.24l0.58,-1.43Z", "name": "Ethiopia"}, "ZW": {"path": "M498.91,341.09l-1.11,-0.22l-0.92,0.28l-2.09,-0.44l-1.5,-1.11l-1.89,-0.43l-0.62,-1.4l-0.01,-0.84l-0.3,-0.38l-0.97,-0.25l-2.71,-2.74l-1.92,-3.32l3.83,0.45l3.73,-3.82l1.08,-0.44l0.26,-0.77l1.25,-0.9l1.41,-0.26l0.5,0.89l1.99,-0.05l1.72,1.17l1.11,0.17l1.05,0.66l0.01,2.99l-0.59,3.76l0.38,0.86l-0.23,1.23l-0.39,0.35l-0.63,1.81l-2.43,2.75Z", "name": "Zimbabwe"}, "ES": {"path": "M416.0,169.21l1.07,1.17l4.61,1.38l1.06,-0.57l2.6,1.26l2.71,-0.3l0.09,1.12l-2.14,1.8l-3.11,0.61l-0.31,0.31l-0.2,0.89l-1.54,1.69l-0.97,2.4l0.84,1.74l-1.32,1.27l-0.48,1.68l-1.88,0.65l-1.66,2.07l-5.36,-0.01l-1.79,1.08l-0.89,0.98l-0.88,-0.17l-0.79,-0.82l-0.68,-1.59l-2.37,-0.63l-0.11,-0.5l1.21,-1.82l-0.77,-1.13l0.61,-1.68l-0.76,-1.62l0.87,-0.49l0.09,-1.25l0.42,-0.6l0.03,-2.11l0.99,-0.69l0.13,-0.5l-1.03,-1.73l-1.46,-0.11l-0.61,0.38l-1.06,0.0l-0.52,-1.23l-0.53,-0.21l-1.32,0.67l-0.01,-1.49l-0.75,-0.96l3.03,-1.88l2.99,0.53l3.32,-0.02l2.63,0.51l6.01,-0.06Z", "name": "Spain"}, "ER": {"path": "M520.38,246.23l3.42,2.43l3.5,3.77l0.84,0.54l-0.95,-0.01l-3.51,-3.89l-2.33,-1.15l-1.73,-0.07l-0.91,-0.51l-1.26,0.51l-1.34,-1.02l-0.61,0.17l-0.66,1.61l-2.35,-0.43l-0.17,-0.67l1.29,-5.29l0.61,-0.61l1.95,-0.53l0.87,-1.01l1.17,2.41l0.68,2.33l1.49,1.43Z", "name": "Eritrea"}, "ME": {"path": "M468.91,172.53l-1.22,-1.02l0.47,-1.81l0.89,-0.72l2.26,1.51l-0.5,0.57l-0.75,-0.27l-1.14,1.73Z", "name": "Montenegro"}, "MD": {"path": "M488.41,153.73l1.4,-0.27l1.72,0.93l1.07,0.15l0.85,0.65l-0.14,0.84l0.96,0.85l1.12,2.47l-1.15,-0.07l-0.66,-0.41l-0.52,0.25l-0.09,0.86l-1.08,1.89l-0.27,-0.86l0.25,-1.34l-0.16,-1.6l-3.29,-4.34Z", "name": "Moldova"}, "MG": {"path": "M545.91,319.14l0.4,3.03l0.62,1.21l-0.21,1.02l-0.57,-0.8l-0.69,-0.01l-0.47,0.76l0.41,2.12l-0.18,0.87l-0.73,0.78l-0.15,2.14l-4.71,15.2l-1.06,2.88l-3.92,1.64l-3.12,-1.49l-0.6,-1.21l-0.19,-2.4l-0.86,-2.05l-0.21,-1.77l0.38,-1.62l1.21,-0.75l0.01,-0.76l1.19,-2.04l0.23,-1.66l-1.06,-2.99l-0.19,-2.21l0.81,-1.33l0.32,-1.46l4.63,-1.22l3.44,-3.0l0.85,-1.4l-0.08,-0.7l0.78,-0.04l1.38,-1.77l0.13,-1.64l0.45,-0.61l1.16,1.69l0.59,1.6Z", "name": "Madagascar"}, "MA": {"path": "M378.78,230.02l0.06,-0.59l0.92,-0.73l0.82,-1.37l-0.09,-1.04l0.79,-1.7l1.31,-1.58l0.96,-0.59l0.66,-1.55l0.09,-1.47l0.81,-1.48l1.72,-1.07l1.55,-2.69l1.16,-0.96l2.44,-0.39l1.94,-1.82l1.31,-0.78l2.09,-2.28l-0.51,-3.65l1.24,-3.7l1.5,-1.75l4.46,-2.57l2.37,-4.47l1.44,0.01l1.68,1.21l2.32,-0.19l3.47,0.65l0.8,1.54l0.16,1.71l0.86,2.96l0.56,0.59l-0.26,0.61l-3.05,0.44l-1.26,1.05l-1.33,0.22l-0.33,0.37l-0.09,1.78l-2.68,1.0l-1.07,1.42l-4.47,1.13l-4.04,2.01l-0.54,4.64l-1.15,0.06l-0.92,0.61l-1.96,-0.35l-2.42,0.54l-0.74,1.9l-0.86,0.4l-1.14,3.26l-3.53,3.01l-0.8,3.55l-0.96,1.1l-0.29,0.82l-4.95,0.18Z", "name": "Morocco"}, "UZ": {"path": "M598.64,172.75l-1.63,1.52l0.06,0.64l1.85,1.12l1.97,-0.64l2.21,1.17l-2.52,1.68l-2.59,-0.22l-0.18,-0.41l0.46,-1.23l-0.45,-0.53l-3.35,0.69l-2.1,3.51l-1.87,-0.12l-1.03,1.51l0.22,0.55l1.64,0.62l0.46,1.83l-1.19,2.49l-2.66,-0.53l0.05,-1.36l-0.26,-0.39l-3.3,-1.23l-2.56,-1.4l-4.4,-3.34l-1.34,-3.14l-1.08,-0.6l-2.58,0.13l-0.69,-0.44l-0.47,-2.52l-3.37,-1.6l-0.43,0.05l-2.07,1.72l-2.1,1.01l-0.21,0.47l0.28,1.01l-1.91,0.03l-0.09,-10.5l5.99,-1.7l6.19,3.54l2.71,2.84l7.05,-0.67l2.71,2.01l-0.17,2.81l0.39,0.42l0.9,0.02l0.44,2.14l0.38,0.32l2.94,0.09l0.95,1.42l1.28,-0.24l1.05,-2.04l4.43,-2.5Z", "name": "Uzbekistan"}, "MM": {"path": "M673.9,230.21l-1.97,1.57l-0.57,0.96l-1.4,0.6l-1.36,1.05l-1.99,0.36l-1.08,2.66l-0.91,0.4l-0.19,0.55l1.21,2.27l2.52,3.43l-0.79,1.91l-0.74,0.41l-0.17,0.52l0.65,1.37l1.61,1.95l0.25,2.58l0.9,2.13l-1.92,3.57l0.68,-2.25l-0.81,-1.74l0.19,-2.65l-1.05,-1.53l-1.24,-6.17l-1.12,-2.26l-0.6,-0.13l-4.34,3.02l-2.39,-0.65l0.77,-2.84l-0.52,-2.61l-1.91,-2.96l0.25,-0.75l-0.29,-0.51l-1.33,-0.3l-1.61,-1.93l-0.1,-1.3l0.82,-0.24l0.04,-1.64l1.02,-0.52l0.21,-0.45l-0.23,-0.95l0.54,-0.96l0.08,-2.22l1.46,0.45l0.47,-0.2l1.12,-2.19l0.16,-1.35l1.33,-2.16l-0.0,-1.52l2.89,-1.66l1.63,0.44l0.5,-0.44l-0.17,-1.4l0.64,-0.36l0.08,-1.04l0.77,-0.11l0.71,1.35l1.06,0.69l-0.03,3.86l-2.38,2.37l-0.3,3.15l0.46,0.43l2.28,-0.38l0.51,2.08l1.47,0.67l-0.6,1.8l0.19,0.48l2.97,1.48l1.64,-0.55l0.02,0.32Z", "name": "Myanmar"}, "ML": {"path": "M392.61,254.08l-0.19,-2.37l-0.99,-0.87l-0.44,-1.3l-0.09,-1.28l0.81,-0.58l0.35,-1.24l2.37,0.65l1.31,-0.47l0.86,0.15l0.66,-0.56l9.83,-0.04l0.38,-0.28l0.56,-1.8l-0.44,-0.65l-2.35,-21.95l3.27,-0.04l16.7,11.38l0.74,1.31l2.5,1.09l0.02,1.38l0.44,0.39l2.34,-0.21l0.01,5.38l-1.28,1.61l-0.26,1.49l-5.31,0.57l-1.07,0.92l-2.9,0.1l-0.86,-0.48l-1.38,0.36l-2.4,1.08l-0.6,0.87l-1.85,1.09l-0.43,0.7l-0.79,0.39l-1.44,-0.21l-0.81,0.84l-0.34,1.64l-1.91,2.02l-0.06,1.03l-0.67,1.22l0.13,1.16l-0.97,0.39l-0.23,-0.64l-0.52,-0.24l-1.35,0.4l-0.34,0.55l-2.69,-0.28l-0.37,-0.35l-0.02,-0.9l-0.65,-0.35l0.45,-0.64l-0.03,-0.53l-2.12,-2.44l-0.76,-0.01l-2.0,1.16l-0.78,-0.15l-0.8,-0.67l-1.21,0.23Z", "name": "Mali"}, "MN": {"path": "M676.61,146.48l3.81,1.68l5.67,-1.0l2.37,0.41l2.34,1.5l1.79,1.75l2.29,-0.03l3.12,0.52l2.47,-0.81l3.41,-0.59l3.53,-2.21l1.25,0.29l1.53,1.13l2.27,-0.21l-2.66,5.01l0.64,1.68l0.47,0.21l1.32,-0.38l2.38,0.48l2.02,-1.11l1.76,0.89l2.06,2.02l-0.13,0.53l-1.72,-0.29l-3.77,0.46l-1.88,0.99l-1.76,1.99l-3.71,1.17l-2.45,1.6l-3.83,-0.87l-0.41,0.17l-1.31,1.99l1.04,2.24l-1.52,0.9l-1.74,1.57l-2.79,1.02l-3.78,0.13l-4.05,1.05l-2.77,1.52l-1.16,-0.85l-2.94,0.0l-3.62,-1.79l-2.58,-0.49l-3.4,0.41l-5.12,-0.67l-2.63,0.06l-1.31,-1.6l-1.4,-3.0l-1.48,-0.33l-3.13,-1.94l-6.16,-0.93l-0.71,-1.06l0.86,-3.82l-1.93,-2.71l-3.5,-1.18l-1.95,-1.58l-0.5,-1.72l2.34,-0.52l4.75,-2.8l3.62,-1.47l2.18,0.97l2.46,0.05l1.81,1.53l2.46,0.12l3.95,0.71l2.43,-2.28l0.08,-0.48l-0.9,-1.72l2.24,-2.98l2.62,1.27l4.94,1.17l0.43,2.24Z", "name": "Mongolia"}, "MK": {"path": "M472.8,173.98l0.49,-0.71l3.57,-0.71l1.0,0.77l0.13,1.45l-0.65,0.53l-1.15,-0.05l-1.12,0.67l-1.39,0.22l-0.79,-0.55l-0.29,-1.03l0.19,-0.6Z", "name": "Macedonia"}, "MW": {"path": "M505.5,309.31l0.85,1.95l0.15,2.86l-0.69,1.65l0.71,1.8l0.06,1.28l0.49,0.64l0.07,1.06l0.4,0.55l0.8,-0.23l0.55,0.61l0.69,-0.21l0.34,0.6l0.19,2.94l-1.04,0.62l-0.54,1.25l-1.11,-1.08l-0.16,-1.56l0.51,-1.31l-0.32,-1.3l-0.99,-0.65l-0.82,0.12l-2.36,-1.64l0.63,-1.96l0.82,-1.18l-0.46,-2.01l0.9,-2.86l-0.94,-2.51l0.96,0.18l0.29,0.4Z", "name": "Malawi"}, "MR": {"path": "M407.36,220.66l-2.58,0.03l-0.39,0.44l2.42,22.56l0.36,0.43l-0.39,1.24l-9.75,0.04l-0.56,0.53l-0.91,-0.11l-1.27,0.45l-1.61,-0.66l-0.97,0.03l-0.36,0.29l-0.38,1.35l-0.42,0.23l-2.93,-3.4l-2.96,-1.52l-1.62,-0.03l-1.27,0.54l-1.12,-0.2l-0.65,0.4l-0.08,-0.49l0.68,-1.29l0.31,-2.43l-0.57,-3.91l0.23,-1.21l-0.69,-1.5l-1.15,-1.02l0.25,-0.39l9.58,0.02l0.4,-0.45l-0.46,-3.68l0.47,-1.04l2.12,-0.21l0.36,-0.4l-0.08,-6.4l7.81,0.13l0.41,-0.4l0.01,-3.31l7.76,5.35Z", "name": "Mauritania"}, "UG": {"path": "M498.55,276.32l0.7,-0.46l1.65,0.5l1.96,-0.57l1.7,0.01l1.45,-0.98l0.91,1.33l1.33,3.95l-2.57,4.03l-1.46,-0.4l-2.54,0.91l-1.37,1.61l-0.01,0.81l-2.42,-0.01l-2.26,1.01l-0.17,-1.59l0.58,-1.04l0.14,-1.94l1.37,-2.28l1.78,-1.58l-0.17,-0.65l-0.72,-0.24l0.13,-2.43Z", "name": "Uganda"}, "MY": {"path": "M717.47,273.46l-1.39,0.65l-2.12,-0.41l-2.88,-0.0l-0.38,0.28l-0.84,2.75l-0.99,0.96l-1.21,3.29l-1.73,0.45l-2.45,-0.68l-1.39,0.31l-1.33,1.15l-1.59,-0.14l-1.41,0.44l-1.44,-1.19l-0.18,-0.73l1.34,0.53l1.93,-0.47l0.75,-2.22l4.02,-1.03l2.75,-3.21l0.82,0.94l0.64,-0.05l0.4,-0.65l0.96,0.06l0.42,-0.36l0.24,-2.68l1.81,-1.64l1.21,-1.86l0.63,-0.01l1.07,1.05l0.34,1.28l3.44,1.35l-0.06,0.35l-1.37,0.1l-0.35,0.54l0.32,0.88ZM673.68,269.59l0.17,1.09l0.47,0.33l1.65,-0.3l0.87,-0.94l1.61,1.52l0.98,1.56l-0.12,2.81l0.41,2.29l0.95,0.9l0.88,2.44l-1.27,0.12l-5.1,-3.67l-0.34,-1.29l-1.37,-1.59l-0.33,-1.97l-0.88,-1.4l0.25,-1.68l-0.46,-1.05l1.63,0.84Z", "name": "Malaysia"}, "MX": {"path": "M133.12,200.41l0.2,0.47l9.63,3.33l6.96,-0.02l0.4,-0.4l0.0,-0.74l3.77,0.0l3.55,2.93l1.39,2.83l1.52,1.04l2.08,0.82l0.47,-0.14l1.46,-2.0l1.73,-0.04l1.59,0.98l2.05,3.35l1.47,1.56l1.26,3.14l2.18,1.02l2.26,0.58l-1.18,3.72l-0.42,5.04l1.79,4.89l1.62,1.89l0.61,1.52l1.2,1.42l2.55,0.66l1.37,1.1l7.54,-1.89l1.86,-1.3l1.14,-4.3l4.1,-1.21l3.57,-0.11l0.32,0.3l-0.06,0.94l-1.26,1.45l-0.67,1.71l0.38,0.7l-0.72,2.27l-0.49,-0.3l-1.0,0.08l-1.0,1.39l-0.47,-0.11l-0.53,0.47l-4.26,-0.02l-0.4,0.4l-0.0,1.06l-1.1,0.26l0.1,0.44l1.82,1.44l0.56,0.91l-3.19,0.21l-1.21,2.09l0.24,0.72l-0.2,0.44l-2.24,-2.18l-1.45,-0.93l-2.22,-0.69l-1.52,0.22l-3.07,1.16l-10.55,-3.85l-2.86,-1.96l-3.78,-0.92l-1.08,-1.19l-2.62,-1.43l-1.18,-1.54l-0.38,-0.81l0.66,-0.63l-0.18,-0.53l0.52,-0.76l0.01,-0.91l-2.0,-3.82l-2.21,-2.63l-2.53,-2.09l-1.19,-1.62l-2.2,-1.17l-0.3,-0.43l0.34,-1.48l-0.21,-0.45l-1.23,-0.6l-1.36,-1.2l-0.59,-1.78l-1.54,-0.47l-2.44,-2.55l-0.16,-0.9l-1.33,-2.03l-0.84,-1.99l-0.16,-1.33l-1.81,-1.1l-0.97,0.05l-1.31,-0.7l-0.57,0.22l-0.4,1.12l0.72,3.77l3.51,3.89l0.28,0.78l0.53,0.26l0.41,1.43l1.33,1.73l1.58,1.41l0.8,2.39l1.43,2.41l0.13,1.32l0.37,0.36l1.04,0.08l1.67,2.28l-0.85,0.76l-0.66,-1.51l-1.68,-1.54l-2.91,-1.87l0.06,-1.82l-0.54,-1.68l-2.91,-2.03l-0.55,0.09l-1.95,-1.1l-0.88,-0.94l0.68,-0.08l0.93,-1.01l0.08,-1.78l-1.93,-1.94l-1.46,-0.77l-3.75,-7.56l4.88,-0.42Z", "name": "Mexico"}, "VU": {"path": "M839.04,322.8l0.22,1.14l-0.44,0.03l-0.2,-1.45l0.42,0.27Z", "name": "Vanuatu"}, "FR": {"path": "M444.48,172.62l-0.64,1.78l-0.58,-0.31l-0.49,-1.72l0.4,-0.89l1.0,-0.72l0.3,1.85ZM429.64,147.1l1.78,1.58l1.46,-0.13l2.1,1.42l1.35,0.27l1.23,0.83l3.04,0.5l-1.03,1.85l-0.3,2.12l-0.41,0.32l-0.95,-0.24l-0.5,0.43l0.06,0.61l-1.81,1.92l-0.04,1.42l0.55,0.38l0.88,-0.36l0.61,0.97l-0.03,1.0l0.57,0.91l-0.75,1.09l0.65,2.39l1.27,0.57l-0.18,0.82l-2.01,1.53l-4.77,-0.8l-3.82,1.0l-0.53,1.85l-2.49,0.34l-2.71,-1.31l-1.16,0.57l-4.31,-1.29l-0.72,-0.86l1.19,-1.78l0.39,-6.45l-2.58,-3.3l-1.9,-1.66l-3.72,-1.23l-0.19,-1.72l2.81,-0.61l4.12,0.81l0.47,-0.48l-0.6,-2.77l1.94,0.95l5.83,-2.54l0.92,-2.74l1.6,-0.49l0.24,0.78l1.36,0.33l1.05,1.19ZM289.01,278.39l-0.81,0.8l-0.78,0.12l-0.5,-0.66l-0.56,-0.1l-0.91,0.6l-0.46,-0.22l1.09,-2.96l-0.96,-1.77l-0.17,-1.49l1.07,-1.77l2.32,0.75l2.51,2.01l0.3,0.74l-2.14,3.96Z", "name": "France"}, "FI": {"path": "M492.17,76.39l-0.23,3.5l3.52,2.63l-2.08,2.88l-0.02,0.44l2.8,4.56l-1.59,3.31l2.16,3.24l-0.94,2.39l0.14,0.47l3.44,2.51l-0.77,1.62l-7.52,6.95l-4.5,0.31l-4.38,1.37l-3.8,0.74l-1.44,-1.96l-2.17,-1.11l0.5,-3.66l-1.16,-3.33l1.09,-2.08l2.21,-2.42l5.67,-4.32l1.64,-0.83l0.21,-0.42l-0.46,-2.02l-3.38,-1.89l-0.75,-1.43l-0.22,-6.74l-6.79,-4.8l0.8,-0.62l2.54,2.12l3.46,-0.12l3.0,0.96l2.51,-2.11l1.17,-3.08l3.55,-1.38l2.76,1.53l-0.95,2.79Z", "name": "Finland"}, "FJ": {"path": "M871.53,326.34l-2.8,1.05l-0.08,-0.23l2.97,-1.21l-0.1,0.39ZM867.58,329.25l0.43,0.37l-0.27,0.88l-1.24,0.28l-1.04,-0.24l-0.14,-0.66l0.63,-0.58l0.92,0.26l0.7,-0.31Z", "name": "Fiji"}, "FK": {"path": "M274.36,425.85l1.44,1.08l-0.47,0.73l-3.0,0.89l-0.96,-1.0l-0.52,-0.05l-1.83,1.29l-0.73,-0.88l2.46,-1.64l1.93,0.76l1.67,-1.19Z", "name": "Falkland Is."}, "NI": {"path": "M202.33,252.67l0.81,-0.18l1.03,-1.02l-0.04,-0.88l0.68,-0.0l0.63,-0.54l0.97,0.22l1.53,-1.26l0.58,-0.99l1.17,0.34l2.41,-0.94l0.13,1.32l-0.81,1.94l0.1,2.74l-0.36,0.37l-0.11,1.75l-0.47,0.81l0.18,1.14l-1.73,-0.85l-0.71,0.27l-1.47,-0.6l-0.52,0.16l-4.01,-3.81Z", "name": "Nicaragua"}, "NL": {"path": "M430.31,143.39l0.6,-0.5l2.13,-4.8l3.2,-1.33l1.74,0.08l0.33,0.8l-0.59,2.92l-0.5,0.99l-1.26,0.0l-0.4,0.45l0.33,2.7l-2.2,-1.78l-2.62,0.58l-0.75,-0.11Z", "name": "Netherlands"}, "NO": {"path": "M491.44,67.41l6.8,2.89l-2.29,0.86l-0.15,0.65l2.33,2.38l-4.98,1.79l0.84,-2.45l-0.18,-0.48l-3.55,-1.8l-3.89,1.52l-1.42,3.38l-2.12,1.72l-2.64,-1.0l-3.11,0.21l-2.66,-2.22l-0.5,-0.01l-1.41,1.1l-1.44,0.17l-0.35,0.35l-0.32,2.47l-4.32,-0.64l-0.44,0.29l-0.58,2.11l-2.45,0.2l-4.15,7.68l-3.88,5.76l0.78,1.62l-0.64,1.16l-2.24,-0.06l-0.38,0.24l-1.66,3.89l0.15,5.17l1.57,2.04l-0.78,4.16l-2.02,2.48l-0.85,1.63l-1.3,-1.75l-0.58,-0.07l-4.87,4.19l-3.1,0.79l-3.16,-1.7l-0.85,-3.77l-0.77,-8.55l2.14,-2.31l6.55,-3.27l5.02,-4.17l10.63,-13.84l10.98,-8.7l5.35,-1.91l4.34,0.12l3.69,-3.64l4.49,0.19l4.37,-0.89ZM484.55,20.04l4.26,1.75l-3.1,2.55l-7.1,0.65l-7.08,-0.9l-0.37,-1.31l-0.37,-0.29l-3.44,-0.1l-2.08,-2.0l6.87,-1.44l3.9,1.31l2.39,-1.64l6.13,1.4ZM481.69,33.93l-4.45,1.74l-3.54,-0.99l1.12,-0.9l0.05,-0.58l-1.06,-1.22l4.22,-0.89l1.09,1.97l2.57,0.87ZM466.44,24.04l7.43,3.77l-5.41,1.86l-1.58,4.08l-2.26,1.2l-1.12,4.11l-2.61,0.18l-4.79,-2.86l1.84,-1.54l-0.1,-0.68l-3.69,-1.53l-4.77,-4.51l-1.73,-3.89l6.11,-1.82l1.54,1.92l3.57,-0.08l1.2,-1.96l3.32,-0.18l3.05,1.92Z", "name": "Norway"}, "NA": {"path": "M474.26,330.66l-0.97,0.04l-0.38,0.4l-0.07,8.9l-2.09,0.08l-0.39,0.4l-0.0,17.42l-1.98,1.23l-1.17,0.17l-2.44,-0.66l-0.48,-1.13l-0.99,-0.74l-0.54,0.05l-0.9,1.01l-1.53,-1.68l-0.93,-1.88l-1.99,-8.56l-0.06,-3.12l-0.33,-1.52l-2.3,-3.34l-1.91,-4.83l-1.96,-2.43l-0.12,-1.57l2.33,-0.79l1.43,0.07l1.81,1.13l10.23,-0.25l1.84,1.23l5.87,0.35ZM474.66,330.64l6.51,-1.6l1.9,0.39l-1.69,0.4l-1.31,0.83l-1.12,-0.94l-4.29,0.92Z", "name": "Namibia"}, "NC": {"path": "M838.78,341.24l-0.33,0.22l-2.9,-1.75l-3.26,-3.37l1.65,0.83l4.85,4.07Z", "name": "New Caledonia"}, "NE": {"path": "M454.75,226.53l1.33,1.37l0.48,0.07l1.27,-0.7l0.53,3.52l0.94,0.83l0.17,0.92l0.81,0.69l-0.44,0.95l-0.96,5.26l-0.13,3.22l-3.04,2.31l-1.22,3.57l1.02,1.24l-0.0,1.46l0.39,0.4l1.13,0.04l-0.9,1.25l-1.47,-2.42l-0.86,-0.29l-2.09,1.37l-1.74,-0.67l-1.45,-0.17l-0.85,0.35l-1.36,-0.07l-1.64,1.09l-1.06,0.05l-2.94,-1.28l-1.44,0.59l-1.01,-0.03l-0.97,-0.94l-2.7,-0.98l-2.69,0.3l-0.87,0.64l-0.47,1.6l-0.75,1.16l-0.12,1.53l-1.57,-1.1l-1.31,0.24l0.03,-0.81l-0.32,-0.41l-2.59,-0.52l-0.15,-1.16l-1.35,-1.6l-0.29,-1.0l0.13,-0.84l1.29,-0.08l1.08,-0.92l3.31,-0.22l2.22,-0.41l0.32,-0.34l0.2,-1.47l1.39,-1.88l-0.01,-5.66l3.36,-1.12l7.24,-5.12l8.42,-4.92l3.69,1.06Z", "name": "Niger"}, "NG": {"path": "M456.32,253.89l0.64,0.65l-0.28,1.04l-2.11,2.01l-2.03,5.18l-1.37,1.16l-1.15,3.18l-1.33,0.66l-1.46,-0.97l-1.21,0.16l-1.38,1.36l-0.91,0.24l-1.79,4.06l-2.33,0.81l-1.11,-0.07l-0.86,0.5l-1.71,-0.05l-1.19,-1.39l-0.89,-1.89l-1.77,-1.66l-3.95,-0.08l0.07,-5.21l0.42,-1.43l1.95,-2.3l-0.14,-0.91l0.43,-1.18l-0.53,-1.41l0.25,-2.92l0.72,-1.07l0.32,-1.34l0.46,-0.39l2.47,-0.28l2.34,0.89l1.15,1.02l1.28,0.04l1.22,-0.58l3.03,1.27l1.49,-0.14l1.36,-1.0l1.33,0.07l0.82,-0.35l3.45,0.8l1.82,-1.32l1.84,2.67l0.66,0.16Z", "name": "Nigeria"}, "NZ": {"path": "M857.8,379.65l1.86,3.12l0.44,0.18l0.3,-0.38l0.03,-1.23l0.38,0.27l0.57,2.31l2.02,0.94l1.81,0.27l1.57,-1.06l0.7,0.18l-1.15,3.59l-1.98,0.11l-0.74,1.2l0.2,1.11l-2.42,3.98l-1.49,0.92l-1.04,-0.85l1.21,-2.05l-0.81,-2.01l-2.63,-1.25l0.04,-0.57l1.82,-1.19l0.43,-2.34l-0.16,-2.03l-0.95,-1.82l-0.06,-0.72l-3.11,-3.64l-0.79,-1.52l1.56,1.45l1.76,0.66l0.65,2.34ZM853.83,393.59l0.57,1.24l0.59,0.16l1.42,-0.97l0.46,0.79l0.0,1.03l-2.47,3.48l-1.26,1.2l-0.06,0.5l0.55,0.87l-1.41,0.07l-2.33,1.38l-2.03,5.02l-3.02,2.16l-2.06,-0.06l-1.71,-1.04l-2.47,-0.2l-0.27,-0.73l1.22,-2.1l3.05,-2.94l1.62,-0.59l4.02,-2.82l1.57,-1.67l1.07,-2.16l0.88,-0.7l0.48,-1.75l1.24,-0.97l0.35,0.79Z", "name": "New Zealand"}, "NP": {"path": "M641.14,213.62l0.01,3.19l-1.74,0.04l-4.8,-0.86l-1.58,-1.39l-3.37,-0.34l-7.65,-3.7l0.8,-2.09l2.33,-1.7l1.77,0.75l2.49,1.76l1.38,0.41l0.99,1.35l1.9,0.52l1.99,1.17l5.49,0.9Z", "name": "Nepal"}, "CI": {"path": "M407.4,259.27l0.86,0.42l0.56,0.9l1.13,0.53l1.19,-0.61l0.97,-0.08l1.42,0.54l0.6,3.24l-1.03,2.08l-0.65,2.84l1.06,2.33l-0.06,0.53l-2.54,-0.47l-1.66,0.03l-3.06,0.46l-4.11,1.6l0.32,-3.06l-1.18,-1.31l-1.32,-0.66l0.42,-0.85l-0.2,-1.4l0.5,-0.67l0.01,-1.59l0.84,-0.32l0.26,-0.5l-1.15,-3.01l0.12,-0.5l0.51,-0.25l0.66,0.31l1.93,0.02l0.67,-0.71l0.71,-0.14l0.25,0.69l0.57,0.22l1.4,-0.61Z", "name": "C\u00f4te d'Ivoire"}, "CH": {"path": "M444.62,156.35l-0.29,0.87l0.18,0.53l1.13,0.58l1.0,0.1l-0.1,0.65l-0.79,0.38l-1.72,-0.37l-0.45,0.23l-0.45,1.04l-0.75,0.06l-0.84,-0.4l-1.32,1.0l-0.96,0.12l-0.88,-0.55l-0.81,-1.3l-0.49,-0.16l-0.63,0.26l0.02,-0.65l1.71,-1.66l0.1,-0.56l0.93,0.08l0.58,-0.46l1.99,0.02l0.66,-0.61l2.19,0.79Z", "name": "Switzerland"}, "CO": {"path": "M242.07,254.93l-1.7,0.59l-0.59,1.18l-1.7,1.69l-0.38,1.93l-0.67,1.43l0.31,0.57l1.03,0.13l0.25,0.9l0.57,0.64l-0.04,2.34l1.64,1.42l3.16,-0.24l1.26,0.28l1.67,2.06l0.41,0.13l4.09,-0.39l0.45,0.22l-0.92,1.95l-0.2,1.8l0.52,1.83l0.75,1.05l-1.12,1.1l0.07,0.63l0.84,0.51l0.74,1.29l-0.39,-0.45l-0.59,-0.01l-0.71,0.74l-4.71,-0.05l-0.4,0.41l0.03,1.57l0.33,0.39l1.11,0.2l-1.68,0.4l-0.29,0.38l-0.01,1.82l1.16,1.14l0.34,1.25l-1.05,7.05l-1.04,-0.87l1.26,-1.99l-0.13,-0.56l-2.18,-1.23l-1.38,0.2l-1.14,-0.38l-1.27,0.61l-1.55,-0.26l-1.38,-2.46l-1.23,-0.75l-0.85,-1.2l-1.67,-1.19l-0.86,0.13l-2.11,-1.32l-1.01,0.31l-1.8,-0.29l-0.52,-0.91l-3.09,-1.68l0.77,-0.52l-0.1,-1.12l0.41,-0.64l1.34,-0.32l2.0,-2.88l-0.11,-0.57l-0.66,-0.43l0.39,-1.38l-0.52,-2.1l0.49,-0.83l-0.4,-2.13l-0.97,-1.35l0.17,-0.66l0.86,-0.08l0.47,-0.75l-0.46,-1.63l1.41,-0.07l1.8,-1.69l0.93,-0.24l0.3,-0.38l0.45,-2.76l1.22,-1.0l1.44,-0.04l0.45,-0.5l1.91,0.12l2.93,-1.84l1.15,-1.14l0.91,0.46l-0.25,0.45Z", "name": "Colombia"}, "CN": {"path": "M740.23,148.97l4.57,1.3l2.8,2.17l0.98,2.9l0.38,0.27l3.8,0.0l2.32,-1.28l3.29,-0.75l-0.96,2.09l-1.02,1.28l-0.85,3.4l-1.52,2.73l-2.76,-0.5l-2.4,1.13l-0.21,0.45l0.64,2.57l-0.32,3.2l-0.94,0.06l-0.37,0.89l-0.91,-1.01l-0.64,0.07l-0.92,1.57l-3.73,1.25l-0.26,0.48l0.26,1.06l-1.5,-0.08l-1.09,-0.86l-0.56,0.06l-1.67,2.06l-2.7,1.56l-2.03,1.88l-3.4,0.83l-1.93,1.4l-1.15,0.34l0.33,-0.7l-0.41,-0.89l1.79,-1.79l0.02,-0.54l-1.32,-1.56l-0.48,-0.1l-2.24,1.09l-2.83,2.06l-1.51,1.83l-2.28,0.13l-1.55,1.49l-0.04,0.5l1.32,1.97l2.0,0.58l0.31,1.35l1.98,0.84l3.0,-1.96l2.0,1.02l1.49,0.11l0.22,0.83l-3.37,0.86l-1.12,1.48l-2.5,1.52l-1.29,1.99l0.14,0.56l2.57,1.48l0.97,2.7l3.17,4.63l-0.03,1.66l-1.35,0.65l-0.2,0.51l0.6,1.47l1.4,0.91l-0.89,3.82l-1.43,0.38l-3.85,6.44l-2.27,3.11l-6.78,4.57l-2.73,0.29l-1.45,1.04l-0.62,-0.61l-0.55,-0.01l-1.36,1.25l-3.39,1.27l-2.61,0.4l-1.1,2.79l-0.81,0.09l-0.49,-1.42l0.5,-0.85l-0.25,-0.59l-3.36,-0.84l-1.3,0.4l-2.31,-0.62l-0.94,-0.84l0.33,-1.28l-0.3,-0.49l-2.19,-0.46l-1.13,-0.93l-0.47,-0.02l-2.06,1.36l-4.29,0.28l-2.76,1.05l-0.28,0.43l0.32,2.53l-0.59,-0.03l-0.19,-1.34l-0.55,-0.34l-1.68,0.7l-2.46,-1.23l0.62,-1.87l-0.26,-0.51l-1.37,-0.44l-0.54,-2.22l-0.45,-0.3l-2.13,0.35l0.24,-2.48l2.39,-2.4l0.03,-4.31l-1.19,-0.92l-0.78,-1.49l-0.41,-0.21l-1.41,0.19l-1.98,-0.3l0.46,-1.07l-1.17,-1.7l-0.55,-0.11l-1.63,1.05l-2.25,-0.57l-2.89,1.73l-2.25,1.98l-1.75,0.29l-1.17,-0.71l-3.31,-0.65l-1.48,0.79l-1.04,1.27l-0.12,-1.17l-0.54,-0.34l-1.44,0.54l-5.55,-0.86l-1.98,-1.16l-1.89,-0.54l-0.99,-1.35l-1.34,-0.37l-2.55,-1.79l-2.01,-0.84l-1.21,0.56l-5.57,-3.45l-0.53,-2.31l1.19,0.25l0.48,-0.37l0.08,-1.42l-0.98,-1.56l0.15,-2.44l-2.69,-3.32l-4.12,-1.23l-0.67,-2.0l-1.92,-1.48l-0.38,-0.7l-0.51,-3.01l-1.52,-0.66l-0.7,0.13l-0.48,-2.05l0.55,-0.51l-0.09,-0.82l2.03,-1.19l1.6,-0.54l2.56,0.38l0.42,-0.22l0.85,-1.7l3.0,-0.33l1.1,-1.26l4.05,-1.77l0.39,-0.91l-0.17,-1.44l1.45,-0.67l0.2,-0.52l-2.07,-4.9l4.51,-1.12l1.37,-0.73l1.89,-5.51l4.98,0.86l1.51,-1.7l0.11,-2.87l1.99,-0.38l1.83,-2.06l0.49,-0.13l0.68,2.08l2.23,1.77l3.44,1.16l1.55,2.29l-0.92,3.49l0.96,1.67l6.54,1.13l2.95,1.87l1.47,0.35l1.06,2.62l1.53,1.91l3.05,0.08l5.14,0.67l3.37,-0.41l2.36,0.43l3.65,1.8l3.06,0.04l1.45,0.88l2.87,-1.59l3.95,-1.02l3.83,-0.14l3.06,-1.14l1.77,-1.6l1.72,-1.01l0.17,-0.49l-1.1,-2.05l1.02,-1.54l4.02,0.8l2.45,-1.61l3.76,-1.19l1.96,-2.13l1.63,-0.83l3.51,-0.4l1.92,0.34l0.46,-0.3l0.17,-1.5l-2.27,-2.22l-2.11,-1.09l-2.18,1.11l-2.32,-0.47l-1.29,0.32l-0.4,-0.82l2.73,-5.16l3.02,1.06l3.53,-2.06l0.18,-1.68l2.16,-3.35l1.49,-1.35l-0.03,-1.85l-1.07,-0.85l1.54,-1.26l2.98,-0.59l3.23,-0.09l3.64,0.99l2.04,1.16l3.29,6.71l0.92,3.19ZM696.92,237.31l-1.87,1.08l-1.63,-0.64l-0.06,-1.79l1.03,-0.98l2.58,-0.69l1.16,0.05l0.3,0.54l-0.98,1.06l-0.53,1.37Z", "name": "China"}, "CM": {"path": "M457.92,257.49l1.05,1.91l-1.4,0.16l-1.05,-0.23l-0.45,0.22l-0.54,1.19l0.08,0.45l1.48,1.47l1.05,0.45l1.01,2.46l-1.52,2.99l-0.68,0.68l-0.13,3.69l2.38,3.84l1.09,0.8l0.24,2.48l-3.67,-1.14l-11.27,-0.13l0.23,-1.79l-0.98,-1.66l-1.19,-0.54l-0.44,-0.97l-0.6,-0.42l1.71,-4.27l0.75,-0.13l1.38,-1.36l0.65,-0.03l1.71,0.99l1.93,-1.12l1.14,-3.18l1.38,-1.17l2.0,-5.14l2.17,-2.13l0.3,-1.64l-0.86,-0.88l0.03,-0.33l0.94,1.28l0.07,3.22Z", "name": "Cameroon"}, "CL": {"path": "M246.5,429.18l-3.14,1.83l-0.57,3.16l-0.64,0.05l-2.68,-1.06l-2.82,-2.33l-3.04,-1.89l-0.69,-1.85l0.63,-2.14l-1.21,-2.11l-0.31,-5.37l1.01,-2.91l2.57,-2.38l-0.18,-0.68l-3.16,-0.77l2.05,-2.47l0.77,-4.65l2.32,0.9l0.54,-0.29l1.31,-6.31l-0.22,-0.44l-1.68,-0.8l-0.56,0.28l-0.7,3.36l-0.81,-0.22l1.56,-9.41l1.15,-2.24l-0.71,-2.82l-0.18,-2.84l1.01,-0.33l3.26,-9.14l1.07,-4.22l-0.56,-4.21l0.74,-2.34l-0.29,-3.27l1.46,-3.34l2.04,-16.59l-0.66,-7.76l1.03,-0.53l0.54,-0.9l0.79,1.14l0.32,1.78l1.25,1.16l-0.69,2.55l1.33,2.9l0.97,3.59l0.46,0.29l1.5,-0.3l0.11,0.23l-0.76,2.44l-2.57,1.23l-0.23,0.37l0.08,4.33l-0.46,0.77l0.56,1.21l-1.58,1.51l-1.68,2.62l-0.89,2.47l0.2,2.7l-1.48,2.73l1.12,5.09l0.64,0.61l-0.01,2.29l-1.38,2.68l0.01,2.4l-1.89,2.04l0.02,2.75l0.69,2.57l-1.43,1.13l-1.26,5.68l0.39,3.51l-0.97,0.89l0.58,3.5l1.02,1.14l-0.65,1.02l0.15,0.57l1.0,0.53l0.16,0.69l-1.03,0.85l0.26,1.75l-0.89,4.03l-1.31,2.66l0.24,1.75l-0.71,1.83l-1.99,1.7l0.3,3.67l0.88,1.19l1.58,0.01l0.01,2.21l1.04,1.95l5.98,0.63ZM248.69,430.79l0.0,7.33l0.4,0.4l3.52,0.05l-0.44,0.75l-1.94,0.98l-2.49,-0.37l-1.88,-1.06l-2.55,-0.49l-5.59,-3.71l-2.38,-2.63l4.1,2.48l3.32,1.23l0.45,-0.12l1.29,-1.57l0.83,-2.32l2.05,-1.24l1.31,0.29Z", "name": "Chile"}, "CA": {"path": "M280.06,145.6l-1.67,2.88l0.07,0.49l0.5,0.04l1.46,-0.98l1.0,0.42l-0.56,0.72l0.17,0.62l2.22,0.89l1.35,-0.71l1.95,0.78l-0.66,2.01l0.5,0.51l1.32,-0.42l0.98,3.17l-0.91,2.41l-0.8,0.08l-1.23,-0.45l0.47,-2.25l-0.89,-0.83l-0.48,0.06l-2.78,2.63l-0.34,-0.02l1.02,-0.85l-0.14,-0.69l-2.4,-0.77l-7.4,0.08l-0.17,-0.41l1.3,-0.94l0.02,-0.64l-0.73,-0.58l1.85,-1.74l2.57,-5.16l1.47,-1.79l1.99,-1.05l0.46,0.06l-1.53,2.45ZM68.32,74.16l4.13,0.95l4.02,2.14l2.61,0.4l2.47,-1.89l2.88,-1.31l3.85,0.48l3.71,-1.94l3.82,-1.04l1.56,1.68l0.49,0.08l1.87,-1.04l0.65,-1.98l1.24,0.35l4.16,3.94l0.54,0.01l2.75,-2.49l0.26,2.59l0.49,0.35l3.08,-0.73l1.04,-1.27l2.73,0.23l3.83,1.86l5.86,1.61l3.47,0.75l2.44,-0.26l2.73,1.78l-2.98,1.81l-0.19,0.41l0.31,0.32l4.53,0.92l6.87,-0.5l2.0,-0.69l2.49,2.39l0.53,0.02l2.72,-2.16l-0.02,-0.64l-2.16,-1.54l1.15,-1.06l4.83,-0.61l1.84,0.95l2.48,2.31l3.01,-0.23l4.55,1.92l3.85,-0.67l3.61,0.1l0.41,-0.44l-0.25,-2.36l1.79,-0.61l3.49,1.32l-0.01,3.77l0.31,0.39l0.45,-0.22l1.48,-3.16l1.74,0.1l0.41,-0.3l1.13,-4.37l-2.78,-3.11l-2.8,-1.74l0.19,-4.64l2.71,-3.07l2.98,0.67l2.41,1.95l3.19,4.8l-1.99,1.97l0.21,0.68l4.33,0.84l-0.01,4.15l0.25,0.37l0.44,-0.09l3.07,-3.15l2.54,2.39l-0.61,3.33l2.42,2.88l0.61,0.0l2.61,-3.08l1.88,-3.82l0.17,-4.58l6.72,0.94l3.13,2.04l0.13,1.82l-1.76,2.19l-0.01,0.49l1.66,2.16l-0.26,1.71l-4.68,2.8l-3.28,0.61l-2.47,-1.2l-0.55,0.23l-0.73,2.04l-2.38,3.43l-0.74,1.77l-2.74,2.57l-3.44,0.25l-2.21,1.78l-0.28,2.53l-2.82,0.55l-3.12,3.22l-2.72,4.31l-1.03,3.17l-0.14,4.31l0.33,0.41l3.44,0.57l2.24,5.95l0.45,0.23l3.4,-0.69l4.52,1.51l2.43,1.31l1.91,1.73l3.1,0.96l2.62,1.46l6.6,0.54l-0.35,2.74l0.81,3.53l1.81,3.78l3.83,3.3l0.45,0.04l2.1,-1.28l1.37,-3.69l-1.31,-5.38l-1.45,-1.58l3.57,-1.47l2.84,-2.46l1.52,-2.8l-0.25,-2.55l-1.7,-3.07l-2.85,-2.61l2.8,-3.95l-1.08,-3.37l-0.79,-5.67l1.36,-0.7l6.76,1.41l2.12,-0.96l5.12,3.36l1.05,1.61l4.08,0.26l-0.06,2.87l0.83,4.7l0.3,0.32l2.16,0.54l1.73,2.06l0.5,0.09l3.63,-2.03l2.52,-4.19l1.26,-1.32l7.6,11.72l-0.92,2.04l0.16,0.51l3.3,1.97l2.22,1.98l4.1,0.98l1.43,0.99l0.95,2.79l2.1,0.68l0.84,1.08l0.17,3.45l-3.37,2.26l-4.22,1.24l-3.06,2.63l-4.06,0.51l-5.35,-0.69l-6.39,0.2l-2.3,2.41l-3.26,1.51l-6.47,7.15l-0.06,0.48l0.44,0.19l2.13,-0.52l4.17,-4.24l5.12,-2.62l3.52,-0.3l1.69,1.21l-2.12,2.21l0.81,3.47l1.02,2.61l3.47,1.6l4.14,-0.45l2.15,-2.8l0.26,1.48l1.14,0.8l-2.56,1.69l-5.5,1.82l-2.54,1.27l-2.74,2.15l-1.4,-0.16l-0.07,-2.01l4.14,-2.44l0.18,-0.45l-0.39,-0.29l-6.63,0.45l-1.39,-1.49l-0.14,-4.43l-1.11,-0.91l-1.82,0.39l-0.66,-0.66l-0.6,0.03l-1.91,2.39l-0.82,2.52l-0.8,1.27l-1.67,0.56l-0.46,0.76l-8.31,0.07l-1.21,0.62l-2.35,1.97l-0.71,-0.14l-1.37,0.96l-1.12,-0.48l-4.74,1.26l-0.9,1.17l0.21,0.62l1.73,0.3l-1.81,0.31l-1.85,0.81l-2.11,-0.13l-2.95,1.78l-0.69,-0.09l1.39,-2.1l1.73,-1.21l0.1,-2.29l1.16,-1.99l0.49,0.53l2.03,0.42l1.2,-1.16l0.02,-0.47l-2.66,-3.51l-2.28,-0.61l-5.64,-0.71l-0.4,-0.57l-0.79,0.13l0.2,-0.41l-0.22,-0.55l-0.68,-0.26l0.19,-1.26l-0.78,-0.73l0.31,-0.64l-0.29,-0.57l-2.6,-0.44l-0.75,-1.63l-0.94,-0.66l-4.31,-0.65l-1.13,1.19l-1.48,0.59l-0.85,1.06l-2.83,-0.76l-2.09,0.39l-2.39,-0.97l-4.24,-0.7l-0.57,-0.4l-0.41,-1.63l-0.4,-0.3l-0.85,0.02l-0.39,0.4l-0.01,0.85l-69.13,-0.01l-6.51,-4.52l-4.5,-1.38l-1.26,-2.66l0.33,-1.93l-0.23,-0.43l-3.01,-1.35l-0.55,-2.77l-2.89,-2.38l-0.04,-1.45l1.39,-1.83l-0.28,-2.55l-4.16,-2.2l-4.07,-6.6l-4.02,-3.22l-1.3,-1.88l-0.5,-0.13l-2.51,1.21l-2.23,1.87l-3.85,-3.88l-2.44,-1.04l-2.22,-0.13l0.03,-37.49ZM260.37,148.65l3.04,0.76l2.26,1.2l-3.78,-0.95l-1.53,-1.01ZM249.4,3.81l6.68,0.49l5.32,0.79l4.26,1.57l-0.07,1.1l-5.85,2.53l-6.02,1.21l-2.39,1.39l-0.18,0.45l0.39,0.29l4.01,-0.02l-4.65,2.82l-4.2,1.74l-4.19,4.59l-5.03,0.92l-1.67,1.15l-7.47,0.59l-0.37,0.37l0.32,0.42l2.41,0.49l-0.81,0.47l-0.12,0.59l1.83,2.41l-2.02,1.59l-3.81,1.51l-1.32,2.16l-3.38,1.53l-0.22,0.48l0.35,1.19l0.4,0.29l3.88,-0.18l0.03,0.61l-6.33,2.95l-6.41,-1.4l-7.43,0.79l-3.72,-0.62l-4.4,-0.25l-0.23,-1.83l4.29,-1.11l0.28,-0.51l-1.1,-3.45l1.0,-0.25l6.58,2.28l0.47,-0.16l-0.05,-0.49l-3.41,-3.45l-3.58,-0.98l1.48,-1.55l4.34,-1.29l0.97,-2.19l-0.16,-0.48l-3.42,-2.13l-0.81,-2.26l6.2,0.22l2.24,0.58l3.91,-2.1l0.2,-0.43l-0.35,-0.32l-5.64,-0.67l-8.73,0.36l-4.26,-1.9l-2.12,-2.4l-2.78,-1.66l-0.41,-1.52l3.31,-1.03l2.93,-0.2l4.91,-0.99l3.7,-2.27l2.87,0.3l2.62,1.67l0.56,-0.14l1.82,-3.2l3.13,-0.94l4.44,-0.69l7.53,-0.26l1.48,0.67l7.19,-1.06l10.8,0.79ZM203.85,57.54l0.01,0.42l1.97,2.97l0.68,-0.02l2.24,-3.72l5.95,-1.86l4.01,4.64l-0.35,2.91l0.5,0.43l4.95,-1.36l2.32,-1.8l5.31,2.28l3.27,2.11l0.3,1.84l0.48,0.33l4.42,-0.99l2.64,2.87l5.97,1.77l2.06,1.72l2.11,3.71l-4.19,1.86l-0.01,0.73l5.9,2.83l3.94,0.94l3.78,3.95l3.46,0.25l-0.63,2.37l-4.11,4.47l-2.76,-1.56l-3.9,-3.94l-3.59,0.41l-0.33,0.34l-0.19,2.72l2.63,2.38l3.42,1.89l0.94,0.97l1.55,3.75l-0.7,2.29l-2.74,-0.92l-6.25,-3.15l-0.51,0.13l0.05,0.52l6.07,5.69l0.18,0.59l-6.09,-1.39l-5.31,-2.24l-2.63,-1.66l0.6,-0.77l-0.12,-0.6l-7.39,-4.01l-0.59,0.37l0.03,0.79l-6.73,0.6l-1.69,-1.1l1.36,-2.46l4.51,-0.07l5.15,-0.52l0.31,-0.6l-0.74,-1.3l0.78,-1.84l3.21,-4.05l-0.67,-2.35l-1.11,-1.6l-3.84,-2.1l-4.35,-1.28l0.91,-0.63l0.06,-0.61l-2.65,-2.75l-2.34,-0.36l-1.89,-1.46l-0.53,0.03l-1.24,1.23l-4.36,0.55l-9.04,-0.99l-9.26,-1.98l-1.6,-1.22l2.22,-1.77l0.13,-0.44l-0.38,-0.27l-3.22,-0.02l-0.72,-4.25l1.83,-4.04l2.42,-1.85l5.5,-1.1l-1.39,2.35ZM261.19,159.33l2.07,0.61l1.44,-0.04l-1.15,0.63l-2.94,-1.23l-0.4,-0.68l0.36,-0.37l0.61,1.07ZM230.83,84.39l-2.37,0.18l-0.49,-1.63l0.93,-2.09l1.94,-0.51l1.62,0.99l0.02,1.52l-1.66,1.54ZM229.43,58.25l0.11,0.65l-4.87,-0.21l-2.72,0.62l-3.1,-2.57l0.08,-1.26l0.86,-0.23l5.57,0.51l4.08,2.5ZM222.0,105.02l-0.72,1.49l-0.63,-0.19l-0.48,-0.84l0.81,-0.99l0.65,0.05l0.37,0.46ZM183.74,38.32l2.9,1.7l4.79,-0.01l1.84,1.46l-0.49,1.68l0.23,0.48l2.82,1.14l1.76,1.26l7.01,0.65l4.1,-1.1l5.03,-0.43l3.93,0.35l2.48,1.77l0.46,1.7l-1.3,1.1l-3.56,1.01l-3.23,-0.59l-7.17,0.76l-5.09,0.09l-3.99,-0.6l-6.42,-1.54l-0.79,-2.51l-0.3,-2.49l-2.64,-2.5l-5.32,-0.72l-2.52,-1.4l0.68,-1.57l4.78,0.31ZM207.38,91.35l0.4,1.56l0.56,0.26l1.06,-0.52l1.32,0.96l5.42,2.57l0.2,1.68l0.46,0.35l1.68,-0.28l1.15,0.85l-1.55,0.87l-3.61,-0.88l-1.32,-1.69l-0.57,-0.06l-2.45,2.1l-3.12,1.79l-0.7,-1.87l-0.42,-0.26l-2.16,0.24l1.39,-1.39l0.32,-3.14l0.76,-3.35l1.18,0.22ZM215.49,102.6l-2.67,1.95l-1.4,-0.07l-0.3,-0.58l1.53,-1.48l2.84,0.18ZM202.7,24.12l2.53,1.59l-2.87,1.4l-4.53,4.05l-4.25,0.38l-5.03,-0.68l-2.45,-2.04l0.03,-1.62l1.82,-1.37l0.14,-0.45l-0.38,-0.27l-4.45,0.04l-2.59,-1.76l-1.41,-2.29l1.57,-2.32l1.62,-1.66l2.44,-0.39l0.25,-0.65l-0.6,-0.74l4.86,-0.25l3.24,3.11l8.16,2.3l1.9,3.61ZM187.47,59.2l-2.76,3.49l-2.38,-0.15l-1.44,-3.84l0.04,-2.2l1.19,-1.88l2.3,-1.23l5.07,0.17l4.11,1.02l-3.24,3.72l-2.88,0.89ZM186.07,48.79l-1.08,1.53l-3.34,-0.34l-2.56,-1.1l1.03,-1.75l3.25,-1.23l1.95,1.58l0.75,1.3ZM185.71,35.32l-5.3,-0.2l-0.32,-0.71l4.31,0.07l1.3,0.84ZM180.68,32.48l-3.34,1.0l-1.79,-1.1l-0.98,-1.87l-0.15,-1.73l4.1,0.53l2.67,1.7l-0.51,1.47ZM180.9,76.31l-1.1,1.08l-3.13,-1.23l-2.12,0.43l-2.71,-1.57l1.72,-1.09l1.55,-1.72l3.81,1.9l1.98,2.2ZM169.74,54.87l2.96,0.97l4.17,-0.57l0.41,0.88l-2.14,2.11l0.09,0.64l3.55,1.92l-0.4,3.72l-3.79,1.65l-2.17,-0.35l-1.72,-1.74l-6.02,-3.5l0.03,-0.85l4.68,0.54l0.4,-0.21l-0.05,-0.45l-2.48,-2.81l2.46,-1.95ZM174.45,40.74l1.37,1.73l0.07,2.44l-1.05,3.45l-3.79,0.47l-2.32,-0.69l0.05,-2.64l-0.44,-0.41l-3.68,0.35l-0.12,-3.1l2.45,0.1l3.67,-1.73l3.41,0.29l0.37,-0.26ZM170.05,31.55l0.67,1.56l-3.33,-0.49l-4.22,-1.77l-4.35,-0.16l1.4,-0.94l-0.06,-0.7l-2.81,-1.23l-0.12,-1.39l4.39,0.68l6.62,1.98l1.81,2.47ZM134.5,58.13l-1.02,1.82l0.45,0.58l5.4,-1.39l3.33,2.29l0.49,-0.03l2.6,-2.23l1.94,1.32l2.0,4.5l0.7,0.06l1.3,-2.29l-1.63,-4.46l1.69,-0.54l2.31,0.71l2.65,1.81l2.49,7.92l8.48,4.27l-0.19,1.35l-3.79,0.33l-0.26,0.67l1.4,1.49l-0.58,1.1l-4.23,-0.64l-4.43,-1.19l-3.0,0.28l-4.66,1.47l-10.52,1.04l-1.43,-2.02l-3.42,-1.2l-2.21,0.43l-2.51,-2.86l4.84,-1.05l3.6,0.19l3.27,-0.78l0.31,-0.39l-0.31,-0.39l-4.84,-1.06l-8.79,0.27l-0.85,-1.07l5.26,-1.66l0.27,-0.45l-0.4,-0.34l-3.8,0.06l-3.81,-1.06l1.81,-3.01l1.66,-1.79l6.48,-2.81l1.97,0.71ZM158.7,56.61l-1.7,2.44l-3.2,-2.75l0.37,-0.3l3.11,-0.18l1.42,0.79ZM149.61,42.73l1.01,1.89l0.5,0.18l2.14,-0.82l2.23,0.19l0.36,2.04l-1.33,2.09l-8.28,0.76l-6.35,2.15l-3.41,0.1l-0.19,-0.96l4.9,-2.08l0.23,-0.46l-0.41,-0.31l-11.25,0.59l-2.89,-0.74l3.04,-4.44l2.14,-1.32l6.81,1.69l4.58,3.06l4.37,0.39l0.36,-0.63l-3.36,-4.6l1.85,-1.53l2.18,0.51l0.77,2.26ZM144.76,34.41l-4.36,1.44l-3.0,-1.4l1.46,-1.24l3.47,-0.52l2.96,0.71l-0.52,1.01ZM145.13,29.83l-1.9,0.66l-3.67,-0.0l2.27,-1.61l3.3,0.95ZM118.92,65.79l-6.03,2.02l-1.33,-1.9l-5.38,-2.28l2.59,-5.05l2.16,-3.14l-0.02,-0.48l-1.97,-2.41l7.64,-0.7l3.6,1.02l6.3,0.27l4.42,2.95l-2.53,0.98l-6.24,3.43l-3.1,3.28l-0.11,2.01ZM129.54,35.53l-0.28,3.37l-1.72,1.62l-2.33,0.28l-4.61,2.19l-3.86,0.76l-2.64,-0.87l3.72,-3.4l5.01,-3.34l3.72,0.07l3.0,-0.67ZM111.09,152.69l-0.67,0.24l-3.85,-1.37l-0.83,-1.17l-2.12,-1.07l-0.66,-1.02l-2.4,-0.55l-0.74,-1.71l6.02,1.45l2.0,2.55l2.52,1.39l0.73,1.27ZM87.8,134.64l0.89,0.29l1.86,-0.21l-0.65,3.34l1.69,2.33l-1.31,-1.33l-0.99,-1.62l-1.17,-0.98l-0.33,-1.82Z", "name": "Canada"}, "CG": {"path": "M466.72,276.48l-0.1,1.03l-1.25,2.97l-0.19,3.62l-0.46,1.78l-0.23,0.63l-1.61,1.19l-1.21,1.39l-1.09,2.43l0.04,2.09l-3.25,3.24l-0.5,-0.24l-0.5,-0.83l-1.36,-0.02l-0.98,0.89l-1.68,-0.99l-1.54,1.24l-1.52,-1.96l1.57,-1.14l0.11,-0.52l-0.77,-1.35l2.1,-0.66l0.39,-0.73l1.05,0.82l2.21,0.11l1.12,-1.37l0.37,-1.81l-0.27,-2.09l-1.13,-1.5l1.0,-2.69l-0.13,-0.45l-0.92,-0.58l-1.6,0.17l-0.51,-0.94l0.1,-0.61l2.75,0.09l3.97,1.24l0.51,-0.33l0.17,-1.28l1.24,-2.21l1.28,-1.14l2.76,0.49Z", "name": "Congo"}, "CF": {"path": "M461.16,278.2l-0.26,-1.19l-1.09,-0.77l-0.84,-1.17l-0.29,-1.0l-1.04,-1.15l0.08,-3.43l0.58,-0.49l1.16,-2.35l1.85,-0.17l0.61,-0.62l0.97,0.58l3.15,-0.96l2.48,-1.92l0.02,-0.96l2.81,0.02l2.36,-1.17l1.93,-2.85l1.16,-0.93l1.11,-0.3l0.27,0.86l1.34,1.47l-0.39,2.01l0.3,1.01l4.01,2.75l0.17,0.93l2.63,2.31l0.6,1.44l2.08,1.4l-3.84,-0.21l-1.94,0.88l-1.23,-0.49l-2.67,1.2l-1.29,-0.18l-0.51,0.36l-0.6,1.22l-3.35,-0.65l-1.57,-0.91l-2.42,-0.83l-1.45,0.91l-0.97,1.27l-0.26,1.56l-3.22,-0.43l-1.49,1.33l-0.94,1.62Z", "name": "Central African Rep."}, "CD": {"path": "M487.01,272.38l2.34,-0.14l1.35,1.84l1.34,0.45l0.86,-0.39l1.21,0.12l1.07,-0.41l0.54,0.89l2.04,1.54l-0.14,2.72l0.7,0.54l-1.38,1.13l-1.53,2.54l-0.17,2.05l-0.59,1.08l-0.02,1.72l-0.72,0.84l-0.66,3.01l0.63,1.32l-0.44,4.26l0.64,1.47l-0.37,1.22l0.86,1.8l1.53,1.41l0.3,1.26l0.44,0.5l-4.08,0.75l-0.92,1.81l0.51,1.34l-0.74,5.43l0.17,0.38l2.45,1.46l0.54,-0.1l0.12,1.62l-1.28,-0.01l-1.85,-2.35l-1.94,-0.45l-0.48,-1.13l-0.55,-0.2l-1.41,0.74l-1.71,-0.3l-1.01,-1.18l-2.49,-0.19l-0.44,-0.77l-1.98,-0.21l-2.88,0.36l0.11,-2.41l-0.85,-1.13l-0.16,-1.36l0.32,-1.73l-0.46,-0.89l-0.04,-1.49l-0.4,-0.39l-2.53,0.02l0.1,-0.41l-0.39,-0.49l-1.28,0.01l-0.43,0.45l-1.62,0.32l-0.83,1.79l-1.09,-0.28l-2.4,0.52l-1.37,-1.91l-1.3,-3.3l-0.38,-0.27l-7.39,-0.03l-2.46,0.42l0.5,-0.45l0.37,-1.47l0.66,-0.38l0.92,0.08l0.73,-0.82l0.87,0.02l0.31,0.68l1.4,0.36l3.59,-3.63l0.01,-2.23l1.02,-2.29l2.69,-2.39l0.43,-0.99l0.49,-1.96l0.17,-3.51l1.25,-2.95l0.36,-3.14l0.86,-1.13l1.1,-0.66l3.57,1.73l3.65,0.73l0.46,-0.21l0.8,-1.46l1.24,0.19l2.61,-1.17l0.81,0.44l1.04,-0.03l0.59,-0.66l0.7,-0.16l1.81,0.25Z", "name": "Dem. Rep. Congo"}, "CZ": {"path": "M458.46,144.88l1.22,1.01l1.47,0.23l0.13,0.93l1.36,0.68l0.54,-0.2l0.24,-0.55l1.15,0.25l0.53,1.09l1.68,0.18l0.6,0.84l-1.04,0.73l-0.96,1.28l-1.6,0.17l-0.55,0.56l-1.04,-0.46l-1.05,0.15l-2.12,-0.96l-1.05,0.34l-1.2,1.12l-1.56,-0.87l-2.57,-2.1l-0.53,-1.88l4.7,-2.52l0.71,0.26l0.9,-0.28Z", "name": "Czech Rep."}, "CY": {"path": "M504.36,193.47l0.43,0.28l-1.28,0.57l-0.92,-0.28l-0.24,-0.46l2.01,-0.13Z", "name": "Cyprus"}, "CR": {"path": "M211.34,258.05l0.48,0.99l1.6,1.6l-0.54,0.45l0.29,1.42l-0.25,1.19l-1.09,-0.59l-0.05,-1.25l-2.46,-1.42l-0.28,-0.77l-0.66,-0.45l-0.45,-0.0l-0.11,1.04l-1.32,-0.95l0.31,-1.3l-0.36,-0.6l0.31,-0.27l1.42,0.58l1.29,-0.14l0.56,0.56l0.74,0.17l0.55,-0.27Z", "name": "Costa Rica"}, "CU": {"path": "M221.21,227.25l1.27,1.02l2.19,-0.28l4.43,3.33l2.08,0.43l-0.1,0.38l0.36,0.5l1.75,0.1l1.48,0.84l-3.11,0.51l-4.15,-0.03l0.77,-0.67l-0.04,-0.64l-1.2,-0.74l-1.49,-0.16l-0.7,-0.61l-0.56,-1.4l-0.4,-0.25l-1.34,0.1l-2.2,-0.66l-0.88,-0.58l-3.18,-0.4l-0.27,-0.16l0.58,-0.74l-0.36,-0.29l-2.72,-0.05l-1.7,1.29l-0.91,0.03l-0.61,0.69l-1.01,0.22l1.11,-1.29l1.01,-0.52l3.69,-1.01l3.98,0.21l2.21,0.84Z", "name": "Cuba"}, "SZ": {"path": "M500.35,351.36l0.5,2.04l-0.38,0.89l-1.05,0.21l-1.23,-1.2l-0.02,-0.64l0.83,-1.57l1.34,0.27Z", "name": "Swaziland"}, "SY": {"path": "M511.0,199.79l0.05,-1.33l0.54,-1.36l1.28,-0.99l0.13,-0.45l-0.41,-1.11l-1.14,-0.36l-0.19,-1.74l0.52,-1.0l1.29,-1.21l0.2,-1.18l0.59,0.23l2.62,-0.76l1.36,0.52l2.06,-0.01l2.95,-1.08l3.25,-0.26l-0.67,0.94l-1.28,0.66l-0.21,0.4l0.23,2.01l-0.88,3.19l-10.15,5.73l-2.15,-0.85Z", "name": "Syria"}, "KG": {"path": "M621.35,172.32l-3.87,1.69l-0.96,1.18l-3.04,0.34l-1.13,1.86l-2.36,-0.35l-1.99,0.63l-2.39,1.4l0.06,0.95l-0.4,0.37l-4.52,0.43l-3.02,-0.93l-2.37,0.17l0.11,-0.79l2.32,0.42l1.13,-0.88l1.99,0.2l3.21,-2.14l-0.03,-0.69l-2.97,-1.57l-1.94,0.65l-1.22,-0.74l1.71,-1.58l-0.12,-0.67l-0.36,-0.15l0.32,-0.77l1.36,-0.35l4.02,1.02l0.49,-0.3l0.35,-1.59l1.09,-0.48l3.42,1.22l1.11,-0.31l7.64,0.39l1.16,1.0l1.23,0.39Z", "name": "Kyrgyzstan"}, "KE": {"path": "M506.26,284.69l1.87,-2.56l0.93,-2.15l-1.38,-4.08l-1.06,-1.6l2.82,-2.75l0.79,0.26l0.12,1.41l0.86,0.83l1.9,0.11l3.28,2.13l3.57,0.44l1.05,-1.12l1.96,-0.9l0.82,0.68l1.16,0.09l-1.78,2.45l0.03,9.12l1.3,1.94l-1.37,0.78l-0.67,1.03l-1.08,0.46l-0.34,1.67l-0.81,1.07l-0.45,1.55l-0.68,0.56l-3.2,-2.23l-0.35,-1.58l-8.86,-4.98l0.14,-1.6l-0.57,-1.04Z", "name": "Kenya"}, "SS": {"path": "M481.71,263.34l1.07,-0.72l1.2,-3.18l1.36,-0.26l1.61,1.99l0.87,0.34l1.1,-0.41l1.5,0.07l0.57,0.53l2.49,0.0l0.44,-0.63l1.07,-0.4l0.45,-0.84l0.59,-0.33l1.9,1.33l1.6,-0.2l2.83,-3.33l-0.32,-2.21l1.59,-0.52l-0.24,1.6l0.3,1.83l1.35,1.18l0.2,1.87l0.35,0.41l0.02,1.53l-0.23,0.47l-1.42,0.25l-0.85,1.44l0.3,0.6l1.4,0.16l1.11,1.08l0.59,1.13l1.03,0.53l1.28,2.36l-4.41,3.98l-1.74,0.01l-1.89,0.55l-1.47,-0.52l-1.15,0.57l-2.96,-2.62l-1.3,0.49l-1.06,-0.15l-0.79,0.39l-0.82,-0.22l-1.8,-2.7l-1.91,-1.1l-0.66,-1.5l-2.62,-2.32l-0.18,-0.94l-2.37,-1.6Z", "name": "S. Sudan"}, "SR": {"path": "M283.12,270.19l2.1,0.53l-1.08,1.95l0.2,1.72l0.93,1.49l-0.59,2.03l-0.43,0.71l-1.12,-0.42l-1.32,0.22l-0.93,-0.2l-0.46,0.26l-0.25,0.73l0.33,0.7l-0.89,-0.13l-1.39,-1.97l-0.31,-1.34l-0.97,-0.31l-0.89,-1.47l0.35,-1.61l1.45,-0.82l0.33,-1.87l2.61,0.44l0.57,-0.47l1.75,-0.16Z", "name": "Suriname"}, "KH": {"path": "M689.52,249.39l0.49,1.45l-0.28,2.74l-4.0,1.86l-0.16,0.6l0.68,0.95l-2.06,0.17l-2.05,0.97l-1.82,-0.32l-2.12,-3.7l-0.55,-2.85l1.4,-1.85l3.02,-0.45l2.23,0.35l2.01,0.98l0.51,-0.14l0.95,-1.48l1.74,0.74Z", "name": "Cambodia"}, "SV": {"path": "M195.8,250.13l1.4,-1.19l2.24,1.45l0.98,-0.27l0.44,0.2l-0.27,1.05l-1.14,-0.03l-3.64,-1.21Z", "name": "El Salvador"}, "SK": {"path": "M476.82,151.17l-1.14,1.9l-2.73,-0.92l-0.82,0.2l-0.74,0.8l-3.46,0.73l-0.47,0.69l-1.76,0.33l-1.88,-1.0l-0.18,-0.81l0.38,-0.75l1.87,-0.32l1.74,-1.89l0.83,0.16l0.79,-0.34l1.51,1.04l1.34,-0.63l1.25,0.3l1.65,-0.42l1.81,0.95Z", "name": "Slovakia"}, "KR": {"path": "M737.51,185.84l0.98,-0.1l0.87,-1.17l2.69,-0.32l0.33,-0.29l1.76,2.79l0.58,1.76l0.02,3.12l-0.8,1.32l-2.21,0.55l-1.93,1.13l-1.8,0.19l-0.2,-1.1l0.43,-2.28l-0.95,-2.56l1.43,-0.37l0.23,-0.62l-1.43,-2.06Z", "name": "Korea"}, "SI": {"path": "M456.18,162.07l-0.51,-1.32l0.18,-1.05l1.69,0.2l1.42,-0.71l2.09,-0.07l0.62,-0.51l0.21,0.47l-1.61,0.67l-0.44,1.34l-0.66,0.24l-0.26,0.82l-1.22,-0.49l-0.84,0.46l-0.69,-0.04Z", "name": "Slovenia"}, "KP": {"path": "M736.77,185.16l-0.92,-0.42l-0.88,0.62l-1.21,-0.88l0.96,-1.15l0.59,-2.59l-0.46,-0.74l-2.09,-0.77l1.64,-1.52l2.72,-1.58l1.58,-1.91l1.11,0.78l2.17,0.11l0.41,-0.5l-0.3,-1.22l3.52,-1.18l0.94,-1.4l0.98,1.08l-2.19,2.18l0.01,2.14l-1.06,0.54l-1.41,1.4l-1.7,0.52l-1.25,1.09l-0.14,1.98l0.94,0.45l1.15,1.04l-0.13,0.26l-2.6,0.29l-1.13,1.29l-1.22,0.08Z", "name": "Dem. Rep. Korea"}, "SO": {"path": "M525.13,288.48l-1.13,-1.57l-0.03,-8.86l2.66,-3.38l1.67,-0.13l2.13,-1.69l3.41,-0.23l7.08,-7.55l2.91,-3.69l0.08,-4.82l2.98,-0.67l1.24,-0.86l0.45,-0.0l-0.2,3.0l-1.21,3.62l-2.73,5.97l-2.13,3.65l-5.03,6.16l-8.56,6.4l-2.78,3.08l-0.8,1.56Z", "name": "Somalia"}, "SN": {"path": "M390.09,248.21l0.12,1.55l0.49,1.46l0.96,0.82l0.05,1.28l-1.26,-0.19l-0.75,0.33l-1.84,-0.61l-5.84,-0.13l-2.54,0.51l-0.22,-1.03l1.77,0.04l2.01,-0.91l1.03,0.48l1.09,0.04l1.29,-0.62l0.14,-0.58l-0.51,-0.74l-1.81,0.25l-1.13,-0.63l-0.79,0.04l-0.72,0.61l-2.31,0.06l-0.92,-1.77l-0.81,-0.64l0.64,-0.35l2.46,-3.74l1.04,0.19l1.38,-0.56l1.19,-0.02l2.72,1.37l3.03,3.48Z", "name": "Senegal"}, "SL": {"path": "M394.46,264.11l-1.73,1.98l-0.58,1.33l-2.07,-1.06l-1.22,-1.26l-0.65,-2.39l1.16,-0.96l0.67,-1.17l1.21,-0.52l1.66,0.0l1.03,1.64l0.52,2.41Z", "name": "Sierra Leone"}, "SB": {"path": "M826.69,311.6l-0.61,0.09l-0.2,-0.33l0.37,0.15l0.44,0.09ZM824.18,307.38l-0.26,-0.3l-0.31,-0.91l0.03,0.0l0.54,1.21ZM823.04,309.33l-1.66,-0.22l-0.2,-0.52l1.16,0.28l0.69,0.46ZM819.28,304.68l1.14,0.65l0.02,0.03l-0.81,-0.44l-0.35,-0.23Z", "name": "Solomon Is."}, "SA": {"path": "M537.53,210.34l2.0,0.24l0.9,1.32l1.49,-0.06l0.87,2.08l1.29,0.76l0.51,0.99l1.56,1.03l-0.1,1.9l0.32,0.9l1.58,2.47l0.76,0.53l0.7,-0.04l1.68,4.23l7.53,1.33l0.51,-0.29l0.77,1.25l-1.55,4.87l-7.29,2.52l-7.3,1.03l-2.34,1.17l-1.88,2.74l-0.76,0.28l-0.82,-0.78l-0.91,0.12l-2.88,-0.51l-3.51,0.25l-0.86,-0.56l-0.57,0.15l-0.66,1.27l0.16,1.11l-0.43,0.32l-0.93,-1.4l-0.33,-1.16l-1.23,-0.88l-1.27,-2.06l-0.78,-2.22l-1.73,-1.79l-1.14,-0.48l-1.54,-2.31l-0.21,-3.41l-1.44,-2.93l-1.27,-1.16l-1.33,-0.57l-1.31,-3.37l-0.77,-0.67l-0.97,-1.97l-2.8,-4.03l-1.06,-0.17l0.37,-1.96l0.2,-0.72l2.74,0.3l1.08,-0.84l0.6,-0.94l1.74,-0.35l0.65,-1.03l0.71,-0.4l0.1,-0.62l-2.06,-2.28l4.39,-1.22l0.48,-0.37l2.77,0.69l3.66,1.9l7.03,5.5l4.87,0.3Z", "name": "Saudi Arabia"}, "SE": {"path": "M480.22,89.3l-4.03,1.17l-2.43,2.86l0.26,2.57l-8.77,6.64l-1.78,5.79l1.78,2.68l2.22,1.96l-2.07,3.77l-2.72,1.13l-0.95,6.04l-1.29,3.01l-2.74,-0.31l-0.4,0.22l-1.31,2.59l-2.34,0.13l-0.75,-3.09l-2.08,-4.03l-1.83,-4.96l1.0,-1.93l2.14,-2.7l0.83,-4.45l-1.6,-2.17l-0.15,-4.94l1.48,-3.39l2.58,-0.15l0.87,-1.59l-0.78,-1.57l3.76,-5.59l4.04,-7.48l2.17,0.01l0.39,-0.29l0.57,-2.07l4.37,0.64l0.46,-0.34l0.33,-2.56l1.1,-0.13l6.94,4.87l0.06,6.32l0.66,1.36Z", "name": "Sweden"}, "SD": {"path": "M505.98,259.4l-0.34,-0.77l-1.17,-0.9l-0.26,-1.61l0.29,-1.81l-0.34,-0.46l-1.16,-0.17l-0.54,0.59l-1.23,0.11l-0.28,0.65l0.53,0.65l0.17,1.22l-2.44,3.0l-0.96,0.19l-2.39,-1.4l-0.95,0.52l-0.38,0.78l-1.11,0.41l-0.29,0.5l-1.94,0.0l-0.54,-0.52l-1.81,-0.09l-0.95,0.4l-2.45,-2.35l-2.07,0.54l-0.73,1.26l-0.6,2.1l-1.25,0.58l-0.75,-0.62l0.27,-2.65l-1.48,-1.78l-0.22,-1.48l-0.92,-0.96l-0.02,-1.29l-0.57,-1.16l-0.68,-0.16l0.69,-1.29l-0.18,-1.14l0.65,-0.62l0.03,-0.55l-0.36,-0.41l1.55,-2.97l1.91,0.16l0.43,-0.4l-0.1,-10.94l2.49,-0.01l0.4,-0.4l-0.0,-4.82l29.02,0.0l0.64,2.04l-0.49,0.66l0.36,2.69l0.93,3.16l2.12,1.55l-0.89,1.04l-1.72,0.39l-0.98,0.9l-1.43,5.65l0.24,1.15l-0.38,2.06l-0.96,2.38l-1.53,1.31l-1.32,2.91l-1.22,0.86l-0.37,1.34Z", "name": "Sudan"}, "DO": {"path": "M241.8,239.2l0.05,-0.65l-0.46,-0.73l0.42,-0.44l0.19,-1.0l-0.09,-1.53l1.66,0.01l1.99,0.63l0.33,0.67l1.28,0.19l0.33,0.76l1.0,0.08l0.8,0.62l-0.45,0.51l-1.13,-0.47l-1.88,-0.01l-1.27,0.59l-0.75,-0.55l-1.01,0.54l-0.79,1.4l-0.23,-0.61Z", "name": "Dominican Rep."}, "DJ": {"path": "M528.43,256.18l-0.45,0.66l-0.58,-0.25l-1.51,0.13l-0.18,-1.01l1.45,-1.95l0.83,0.17l0.77,-0.44l0.2,1.0l-1.2,0.51l-0.06,0.7l0.73,0.47Z", "name": "Djibouti"}, "DK": {"path": "M452.28,129.07l-1.19,2.24l-2.13,-1.6l-0.23,-0.95l2.98,-0.95l0.57,1.26ZM447.74,126.31l-0.26,0.57l-0.88,-0.07l-1.8,2.53l0.48,1.69l-1.09,0.36l-1.61,-0.39l-0.89,-1.69l-0.07,-3.43l0.96,-1.73l2.02,-0.2l1.09,-1.07l1.33,-0.67l-0.05,1.06l-0.73,1.41l0.3,1.0l1.2,0.64Z", "name": "Denmark"}, "DE": {"path": "M453.14,155.55l-0.55,-0.36l-1.2,-0.1l-1.87,0.57l-2.13,-0.13l-0.56,0.63l-0.86,-0.6l-0.96,0.09l-2.57,-0.93l-0.85,0.67l-1.47,-0.02l0.24,-1.75l1.23,-2.14l-0.28,-0.59l-3.52,-0.58l-0.92,-0.66l0.12,-1.2l-0.48,-0.88l0.27,-2.17l-0.37,-3.03l1.41,-0.22l0.63,-1.26l0.66,-3.19l-0.41,-1.18l0.26,-0.39l1.66,-0.15l0.33,0.54l0.62,0.07l1.7,-1.69l-0.54,-3.02l1.37,0.33l1.31,-0.37l0.31,1.18l2.25,0.71l-0.02,0.92l0.5,0.4l2.55,-0.65l1.34,-0.87l2.57,1.24l1.06,0.98l0.48,1.44l-0.57,0.74l-0.0,0.48l0.87,1.15l0.57,1.64l-0.14,1.29l0.82,1.7l-1.5,-0.07l-0.56,0.57l-4.47,2.15l-0.22,0.54l0.68,2.26l2.58,2.16l-0.66,1.11l-0.79,0.36l-0.23,0.43l0.32,1.87Z", "name": "Germany"}, "YE": {"path": "M528.27,246.72l0.26,-0.42l-0.22,-1.01l0.19,-1.5l0.92,-0.69l-0.07,-1.35l0.39,-0.75l1.01,0.47l3.34,-0.27l3.76,0.41l0.95,0.81l1.36,-0.58l1.74,-2.62l2.18,-1.09l6.86,-0.94l2.48,5.41l-1.64,0.76l-0.56,1.9l-6.23,2.16l-2.29,1.8l-1.93,0.05l-1.41,1.02l-4.24,0.74l-1.72,1.49l-3.28,0.19l-0.52,-1.18l0.02,-1.51l-1.34,-3.29Z", "name": "Yemen"}, "AT": {"path": "M462.89,152.8l0.04,2.25l-1.07,0.0l-0.33,0.63l0.36,0.51l-1.04,2.13l-2.02,0.07l-1.33,0.7l-5.29,-0.99l-0.47,-0.93l-0.44,-0.21l-2.47,0.55l-0.42,0.51l-3.18,-0.81l0.43,-0.91l1.12,0.78l0.6,-0.17l0.25,-0.58l1.93,0.12l1.86,-0.56l1.0,0.08l0.68,0.57l0.62,-0.15l0.26,-0.77l-0.3,-1.78l0.8,-0.44l0.68,-1.15l1.52,0.85l0.47,-0.06l1.34,-1.25l0.64,-0.17l1.81,0.92l1.28,-0.11l0.7,0.37Z", "name": "Austria"}, "DZ": {"path": "M441.46,188.44l-0.32,1.07l0.39,2.64l-0.54,2.16l-1.58,1.82l0.37,2.39l1.91,1.55l0.18,0.8l1.42,1.03l1.84,7.23l0.12,1.16l-0.57,5.0l0.2,1.51l-0.87,0.99l-0.02,0.51l1.41,1.86l0.14,1.2l0.89,1.48l0.5,0.16l0.98,-0.41l1.73,1.08l0.82,1.23l-8.22,4.81l-7.23,5.11l-3.43,1.13l-2.3,0.21l-0.28,-1.59l-2.56,-1.09l-0.67,-1.25l-26.12,-17.86l0.01,-3.47l3.77,-1.88l2.44,-0.41l2.12,-0.75l1.08,-1.42l2.81,-1.05l0.35,-2.08l1.33,-0.29l1.04,-0.94l3.47,-0.69l0.46,-1.08l-0.1,-0.45l-0.58,-0.52l-0.82,-2.81l-0.19,-1.83l-0.78,-1.49l2.03,-1.31l2.63,-0.48l1.7,-1.22l2.31,-0.84l8.24,-0.73l1.49,0.38l2.28,-1.1l2.46,-0.02l0.92,0.6l1.35,-0.05Z", "name": "Algeria"}, "US": {"path": "M892.72,99.2l1.31,0.53l1.41,-0.37l1.89,0.98l1.89,0.42l-1.32,0.58l-2.9,-1.53l-2.08,0.22l-0.26,-0.15l0.07,-0.67ZM183.22,150.47l0.37,1.47l1.12,0.85l4.23,0.7l2.39,0.98l2.17,-0.38l1.85,0.5l-1.55,0.65l-3.49,2.61l-0.16,0.77l0.5,0.39l2.33,-0.61l1.77,1.02l5.15,-2.4l-0.31,0.65l0.25,0.56l1.36,0.38l1.71,1.16l4.7,-0.88l0.67,0.85l1.31,0.21l0.58,0.58l-1.34,0.17l-2.18,-0.32l-3.6,0.89l-2.71,3.25l0.35,0.9l0.59,-0.0l0.55,-0.6l-1.36,4.65l0.29,3.09l0.67,1.58l0.61,0.45l1.77,-0.44l1.6,-1.96l0.14,-2.21l-0.82,-1.96l0.11,-1.13l1.19,-2.37l0.44,-0.33l0.48,0.75l0.4,-0.29l0.4,-1.37l0.6,-0.47l0.24,-0.8l1.69,0.49l1.65,1.08l-0.03,2.37l-1.27,1.13l-0.0,1.13l0.87,0.36l1.66,-1.29l0.5,0.17l0.5,2.6l-2.49,3.75l0.17,0.61l1.54,0.62l1.48,0.17l1.92,-0.44l4.72,-2.15l2.16,-1.8l-0.05,-1.24l0.75,-0.22l3.92,0.36l2.12,-1.05l0.21,-0.4l-0.28,-1.48l3.27,-2.4l8.32,-0.02l0.56,-0.82l1.9,-0.77l0.93,-1.51l0.74,-2.37l1.58,-1.98l0.92,0.62l1.47,-0.47l0.8,0.66l-0.0,4.09l1.96,2.6l-2.34,1.31l-5.37,2.09l-1.83,2.72l0.02,1.79l0.83,1.59l0.54,0.23l-6.19,0.94l-2.2,0.89l-0.23,0.48l0.45,0.29l2.99,-0.46l-2.19,0.56l-1.13,0.0l-0.15,-0.32l-0.48,0.08l-0.76,0.82l0.22,0.67l0.32,0.06l-0.41,1.62l-1.27,1.58l-1.48,-1.07l-0.49,-0.04l-0.16,0.46l0.52,1.58l0.61,0.59l0.03,0.79l-0.95,1.38l-1.21,-1.22l-0.27,-2.27l-0.35,-0.35l-0.42,0.25l-0.48,1.27l0.33,1.41l-0.97,-0.27l-0.48,0.24l0.18,0.5l1.52,0.83l0.1,2.52l0.79,0.51l0.52,3.42l-1.42,1.88l-2.47,0.8l-1.71,1.66l-1.31,0.25l-1.27,1.03l-0.43,0.99l-2.69,1.78l-2.64,3.03l-0.45,2.12l0.45,2.08l0.85,2.38l1.09,1.9l0.04,1.2l1.16,3.06l-0.18,2.69l-0.55,1.43l-0.47,0.21l-0.89,-0.23l-0.49,-1.18l-0.87,-0.56l-2.75,-5.16l0.48,-1.68l-0.72,-1.78l-2.01,-2.38l-1.12,-0.53l-2.72,1.18l-1.47,-1.35l-1.57,-0.68l-2.99,0.31l-2.17,-0.3l-2.0,0.19l-1.15,0.46l-0.19,0.58l0.39,0.63l0.14,1.34l-0.84,-0.2l-0.84,0.46l-1.58,-0.07l-2.08,-1.44l-2.09,0.33l-1.91,-0.62l-3.73,0.84l-2.39,2.07l-2.54,1.22l-1.45,1.41l-0.61,1.38l0.34,3.71l-0.29,0.02l-3.5,-1.33l-1.25,-3.11l-1.44,-1.5l-2.24,-3.56l-1.76,-1.09l-2.27,-0.01l-1.71,2.07l-1.76,-0.69l-1.16,-0.74l-1.52,-2.98l-3.93,-3.16l-4.34,-0.0l-0.4,0.4l-0.0,0.74l-6.5,0.02l-9.02,-3.14l-0.34,-0.71l-5.7,0.49l-0.43,-1.29l-1.62,-1.61l-1.14,-0.38l-0.55,-0.88l-1.28,-0.13l-1.01,-0.77l-2.22,-0.27l-0.43,-0.3l-0.36,-1.58l-2.4,-2.83l-2.01,-3.85l-0.06,-0.9l-2.92,-3.26l-0.33,-2.29l-1.3,-1.66l0.52,-2.37l-0.09,-2.57l-0.78,-2.3l0.95,-2.82l0.61,-5.68l-0.47,-4.27l-1.46,-4.08l3.19,0.79l1.26,2.83l0.69,0.08l0.69,-1.14l-1.1,-4.79l68.76,-0.0l0.4,-0.4l0.14,-0.86ZM32.44,67.52l1.73,1.97l0.55,0.05l0.99,-0.79l3.65,0.24l-0.09,0.62l0.32,0.45l3.83,0.77l2.61,-0.43l5.19,1.4l4.84,0.43l1.89,0.57l3.42,-0.7l6.14,1.87l-0.03,38.06l0.38,0.4l2.39,0.11l2.31,0.98l3.9,3.99l0.55,0.04l2.4,-2.03l2.16,-1.04l1.2,1.71l3.95,3.14l4.09,6.63l4.2,2.29l0.06,1.83l-1.02,1.23l-1.16,-1.08l-2.04,-1.03l-0.67,-2.89l-3.28,-3.03l-1.65,-3.57l-6.35,-0.32l-2.82,-1.01l-5.26,-3.85l-6.77,-2.04l-3.53,0.3l-4.81,-1.69l-3.25,-1.63l-2.78,0.8l-0.28,0.46l0.44,2.21l-3.91,0.96l-2.26,1.27l-2.3,0.65l-0.27,-1.65l1.05,-3.42l2.49,-1.09l0.16,-0.6l-0.69,-0.96l-0.55,-0.1l-3.19,2.12l-1.78,2.56l-3.55,2.61l-0.04,0.61l1.56,1.52l-2.07,2.29l-5.11,2.57l-0.77,1.66l-3.76,1.77l-0.92,1.73l-2.69,1.38l-1.81,-0.22l-6.95,3.32l-3.97,0.91l4.85,-2.5l2.59,-1.86l3.26,-0.52l1.19,-1.4l3.42,-2.1l2.59,-2.27l0.42,-2.68l1.23,-2.1l-0.04,-0.46l-0.45,-0.11l-2.68,1.03l-0.63,-0.49l-0.53,0.03l-1.05,1.04l-1.36,-1.54l-0.66,0.08l-0.32,0.62l-0.58,-1.14l-0.56,-0.16l-2.41,1.42l-1.07,-0.0l-0.17,-1.75l0.3,-1.71l-1.61,-1.33l-3.41,0.59l-1.96,-1.63l-1.57,-0.84l-0.15,-2.21l-1.7,-1.43l0.82,-1.88l1.99,-2.12l0.88,-1.92l1.71,-0.24l2.04,0.51l1.87,-1.77l1.91,0.25l1.91,-1.23l0.17,-0.43l-0.47,-1.82l-1.07,-0.7l1.39,-1.17l0.12,-0.45l-0.39,-0.26l-1.65,0.07l-2.66,0.88l-0.75,0.78l-1.92,-0.8l-3.46,0.44l-3.44,-0.91l-1.06,-1.61l-2.65,-1.99l2.91,-1.43l5.5,-2.0l1.52,0.0l-0.26,1.62l0.41,0.46l5.29,-0.16l0.3,-0.65l-2.03,-2.59l-3.14,-1.68l-1.79,-2.12l-2.4,-1.83l-3.09,-1.24l1.04,-1.69l4.23,-0.14l3.36,-2.07l0.73,-2.27l2.39,-1.99l2.42,-0.52l4.65,-1.97l2.46,0.23l3.71,-2.35l3.5,0.89ZM37.6,123.41l-2.25,1.23l-0.95,-0.69l-0.29,-1.24l3.21,-1.63l1.42,0.21l0.67,0.7l-1.8,1.42ZM31.06,234.03l0.98,0.47l0.74,0.87l-1.77,1.07l-0.44,-1.53l0.49,-0.89ZM29.34,232.07l0.18,0.05l0.08,0.05l-0.16,0.03l-0.11,-0.14ZM25.16,230.17l0.05,-0.03l0.18,0.22l-0.13,-0.01l-0.1,-0.18ZM5.89,113.26l-1.08,0.41l-2.21,-1.12l1.53,-0.4l1.62,0.28l0.14,0.83Z", "name": "United States"}, "LV": {"path": "M489.16,122.85l0.96,0.66l0.22,1.65l0.68,1.76l-3.65,1.7l-2.23,-1.58l-1.29,-0.26l-0.68,-0.77l-2.42,0.34l-4.16,-0.23l-2.47,0.9l0.06,-1.98l1.13,-2.06l1.95,-1.02l2.12,2.58l2.01,-0.07l0.38,-0.33l0.44,-2.52l1.76,-0.53l3.06,1.7l2.15,0.07Z", "name": "Latvia"}, "UY": {"path": "M286.85,372.74l-0.92,1.5l-2.59,1.44l-1.69,-0.52l-1.42,0.26l-2.39,-1.19l-1.52,0.08l-1.27,-1.3l0.16,-1.5l0.56,-0.79l-0.02,-2.73l1.21,-4.74l1.19,-0.21l2.37,2.0l1.08,0.03l4.36,3.17l1.22,1.6l-0.96,1.5l0.61,1.4Z", "name": "Uruguay"}, "LB": {"path": "M510.37,198.01l-0.88,0.51l1.82,-3.54l0.62,0.08l0.22,0.61l-1.13,0.88l-0.65,1.47Z", "name": "Lebanon"}, "LA": {"path": "M689.54,248.53l-1.76,-0.74l-0.49,0.15l-0.94,1.46l-1.32,-0.64l0.62,-0.98l0.11,-2.17l-2.04,-2.42l-0.25,-2.65l-1.9,-2.1l-2.15,-0.31l-0.78,0.91l-1.12,0.06l-1.05,-0.4l-2.06,1.2l-0.04,-1.59l0.61,-2.68l-0.36,-0.49l-1.35,-0.1l-0.11,-1.23l-0.96,-0.88l1.96,-1.89l0.39,0.36l1.33,0.07l0.42,-0.45l-0.34,-2.66l0.7,-0.21l1.28,1.81l1.11,2.35l0.36,0.23l2.82,0.02l0.71,1.67l-1.39,0.65l-0.72,0.93l0.13,0.6l2.91,1.51l3.6,5.25l1.88,1.78l0.56,1.62l-0.35,1.96Z", "name": "Lao PDR"}, "TW": {"path": "M724.01,226.68l-0.74,1.48l-0.9,-1.52l-0.25,-1.74l1.38,-2.44l1.73,-1.74l0.64,0.44l-1.85,5.52Z", "name": "Taiwan"}, "TT": {"path": "M266.64,259.32l0.28,-1.16l1.13,-0.22l-0.06,1.2l-1.35,0.18Z", "name": "Trinidad and Tobago"}, "TR": {"path": "M513.21,175.47l3.64,1.17l3.05,-0.44l2.1,0.26l3.11,-1.56l2.46,-0.13l2.19,1.33l0.33,0.82l-0.22,1.33l0.25,0.44l2.28,1.13l-1.17,0.57l-0.21,0.45l0.75,3.2l-0.41,1.16l1.13,1.92l-0.55,0.22l-0.9,-0.67l-2.91,-0.37l-1.24,0.46l-4.23,0.41l-2.81,1.05l-1.91,0.01l-1.52,-0.53l-2.58,0.75l-0.66,-0.45l-0.62,0.3l-0.12,1.45l-0.89,0.84l-0.47,-0.67l0.79,-1.3l-0.41,-0.2l-1.43,0.23l-2.0,-0.63l-2.02,1.65l-3.51,0.3l-2.13,-1.53l-2.7,-0.1l-0.86,1.24l-1.38,0.27l-2.29,-1.44l-2.71,-0.01l-1.37,-2.65l-1.68,-1.52l1.07,-1.99l-0.09,-0.49l-1.27,-1.12l2.37,-2.41l3.7,-0.11l1.28,-2.24l4.49,0.37l3.21,-1.97l2.81,-0.82l3.99,-0.06l4.29,2.07ZM488.79,176.72l-1.72,1.31l-0.5,-0.88l1.37,-2.57l-0.7,-0.85l1.7,-0.63l1.8,0.34l0.46,1.17l1.76,0.78l-2.87,0.32l-1.3,1.01Z", "name": "Turkey"}, "LK": {"path": "M624.16,268.99l-1.82,0.48l-0.99,-1.67l-0.42,-3.46l0.95,-3.43l1.21,0.98l2.26,4.19l-0.34,2.33l-0.85,0.58Z", "name": "Sri Lanka"}, "TN": {"path": "M448.1,188.24l-1.0,1.27l-0.02,1.32l0.84,0.88l-0.28,2.09l-1.53,1.32l-0.12,0.42l0.48,1.54l1.42,0.32l0.53,1.11l0.9,0.52l-0.11,1.67l-3.54,2.64l-0.1,2.38l-0.58,0.3l-0.96,-4.45l-1.54,-1.25l-0.16,-0.78l-1.92,-1.56l-0.18,-1.76l1.51,-1.62l0.59,-2.34l-0.38,-2.78l0.42,-1.21l2.45,-1.05l1.29,0.26l-0.06,1.11l0.58,0.38l1.47,-0.73Z", "name": "Tunisia"}, "TL": {"path": "M734.55,307.93l-0.1,-0.97l4.5,-0.86l-2.82,1.28l-1.59,0.55Z", "name": "Timor-Leste"}, "TM": {"path": "M553.03,173.76l-0.04,0.34l-0.09,-0.22l0.13,-0.12ZM555.87,172.66l0.45,-0.1l1.48,0.74l2.06,2.43l4.07,-0.18l0.38,-0.51l-0.32,-1.19l1.92,-0.94l1.91,-1.59l2.94,1.39l0.43,2.47l1.19,0.67l2.58,-0.13l0.62,0.4l1.32,3.12l4.54,3.44l2.67,1.45l3.06,1.14l-0.04,1.05l-1.33,-0.75l-0.59,0.19l-0.32,0.84l-2.2,0.81l-0.46,2.13l-1.21,0.74l-1.91,0.42l-0.73,1.33l-1.56,0.31l-2.22,-0.94l-0.2,-2.17l-0.38,-0.36l-1.73,-0.09l-2.76,-2.46l-2.14,-0.4l-2.84,-1.48l-1.78,-0.27l-1.24,0.53l-1.57,-0.08l-2.0,1.69l-1.7,0.43l-0.36,-1.58l0.36,-2.98l-0.22,-0.4l-1.65,-0.84l0.54,-1.69l-0.34,-0.52l-1.22,-0.13l0.36,-1.64l2.22,0.59l2.2,-0.95l0.12,-0.65l-1.77,-1.74l-0.66,-1.57Z", "name": "Turkmenistan"}, "TJ": {"path": "M597.75,178.82l-2.54,-0.44l-0.47,0.34l-0.24,1.7l0.43,0.45l2.64,-0.22l3.18,0.95l4.39,-0.41l0.56,2.37l0.52,0.29l0.67,-0.24l1.11,0.49l0.21,2.13l-3.76,-0.21l-1.8,1.32l-1.76,0.74l-0.61,-0.58l0.21,-2.23l-0.64,-0.49l-0.07,-0.93l-1.36,-0.66l-0.45,0.07l-1.08,1.01l-0.55,1.48l-1.31,-0.05l-0.95,1.16l-0.9,-0.35l-1.86,0.74l1.26,-2.83l-0.54,-2.17l-1.67,-0.82l0.33,-0.66l2.18,-0.04l1.19,-1.63l0.76,-1.79l2.43,-0.5l-0.26,1.0l0.73,1.05Z", "name": "Tajikistan"}, "LS": {"path": "M491.06,363.48l-0.49,0.15l-1.49,-1.67l1.1,-1.43l2.19,-1.44l1.51,1.27l-0.98,1.82l-1.23,0.38l-0.62,0.93Z", "name": "Lesotho"}, "TH": {"path": "M670.27,255.86l-1.41,3.87l0.15,2.0l0.38,0.36l1.38,0.07l0.9,2.04l0.55,2.34l1.4,1.44l1.61,0.38l0.96,0.97l-0.5,0.64l-1.1,0.2l-0.34,-1.18l-2.04,-1.1l-0.63,0.23l-0.63,-0.62l-0.48,-1.3l-2.56,-2.63l-0.73,0.41l0.95,-3.89l2.16,-4.22ZM670.67,254.77l-0.92,-2.18l-0.26,-2.61l-2.14,-3.06l0.71,-0.49l0.89,-2.59l-3.61,-5.45l0.87,-0.51l1.05,-2.58l1.74,-0.18l2.6,-1.59l0.76,0.56l0.13,1.39l0.37,0.36l1.23,0.09l-0.51,2.28l0.05,2.42l0.6,0.34l2.43,-1.42l0.77,0.39l1.47,-0.07l0.71,-0.88l1.48,0.14l1.71,1.88l0.25,2.65l1.92,2.11l-0.1,1.89l-0.61,0.86l-2.22,-0.33l-3.5,0.64l-1.6,2.12l0.36,2.58l-1.51,-0.79l-1.84,-0.01l0.28,-1.52l-0.4,-0.47l-2.21,0.01l-0.4,0.37l-0.19,2.74l-0.34,0.93Z", "name": "Thailand"}, "TF": {"path": "M596.68,420.38l-3.2,0.18l-0.05,-1.26l0.39,-1.41l1.3,0.78l2.08,0.35l-0.52,1.36Z", "name": "Fr. S. Antarctic Lands"}, "TG": {"path": "M422.7,257.63l-0.09,1.23l1.53,1.52l0.08,1.09l0.5,0.65l-0.11,5.62l0.49,1.47l-1.31,0.35l-1.02,-2.13l-0.18,-1.12l0.53,-2.19l-0.63,-1.16l-0.22,-3.68l-1.01,-1.4l0.07,-0.28l1.37,0.03Z", "name": "Togo"}, "TD": {"path": "M480.25,235.49l0.12,9.57l-2.1,0.05l-1.14,1.89l-0.69,1.63l0.34,0.73l-0.66,0.91l0.24,0.89l-0.86,1.95l0.45,0.5l0.6,-0.1l0.34,0.64l0.03,1.38l0.9,1.04l-1.45,0.43l-1.27,1.03l-1.83,2.76l-2.16,1.07l-2.31,-0.15l-0.86,0.25l-0.26,0.49l0.17,0.61l-2.11,1.68l-2.85,0.87l-1.09,-0.57l-0.73,0.66l-1.12,0.1l-1.1,-3.12l-1.25,-0.64l-1.22,-1.22l0.29,-0.64l3.01,0.04l0.35,-0.6l-1.3,-2.2l-0.08,-3.31l-0.97,-1.66l0.22,-1.04l-0.38,-0.48l-1.22,-0.04l0.0,-1.25l-0.98,-1.07l0.96,-3.01l3.25,-2.65l0.13,-3.33l0.95,-5.18l0.52,-1.07l-0.1,-0.48l-0.91,-0.78l-0.2,-0.96l-0.8,-0.58l-0.55,-3.65l2.1,-1.2l19.57,9.83Z", "name": "Chad"}, "LY": {"path": "M483.48,203.15l-0.75,1.1l0.29,1.39l-0.6,1.83l0.73,2.14l0.0,24.12l-2.48,0.01l-0.41,0.85l-19.41,-9.76l-4.41,2.28l-1.37,-1.33l-3.82,-1.1l-1.14,-1.65l-1.98,-1.23l-1.22,0.32l-0.66,-1.11l-0.17,-1.26l-1.28,-1.69l0.87,-1.19l-0.07,-4.34l0.43,-2.27l-0.86,-3.45l1.13,-0.76l0.22,-1.16l-0.2,-1.03l3.48,-2.61l0.29,-1.94l2.45,0.8l1.18,-0.21l1.98,0.44l3.15,1.18l1.37,2.54l5.72,1.67l2.64,1.35l1.61,-0.72l1.29,-1.34l-0.44,-2.34l0.66,-1.13l1.67,-1.21l1.57,-0.35l3.14,0.53l1.08,1.28l3.99,0.78l0.36,0.54Z", "name": "Libya"}, "AE": {"path": "M550.76,223.97l1.88,-0.4l3.84,0.02l4.78,-4.75l0.19,0.36l0.26,1.58l-0.81,0.01l-0.39,0.35l-0.08,2.04l-0.81,0.63l-0.01,0.96l-0.66,0.99l-0.39,1.41l-7.08,-1.25l-0.7,-1.96Z", "name": "United Arab Emirates"}, "VE": {"path": "M240.68,256.69l0.53,0.75l-0.02,1.06l-1.07,1.78l0.95,2.0l0.42,0.22l1.4,-0.44l0.56,-1.83l-0.77,-1.17l-0.1,-1.47l2.82,-0.93l0.26,-0.49l-0.28,-0.96l0.3,-0.28l0.66,1.31l1.96,0.26l1.4,1.22l0.08,0.68l0.39,0.35l4.81,-0.22l1.49,1.11l1.92,0.31l1.67,-0.84l0.22,-0.6l3.44,-0.14l-0.17,0.55l0.86,1.19l2.19,0.35l1.67,1.1l0.37,1.86l0.41,0.32l1.55,0.17l-1.66,1.35l-0.22,0.92l0.65,0.97l-1.67,0.54l-0.3,0.4l0.04,0.99l-0.56,0.57l-0.01,0.55l1.85,2.27l-0.66,0.69l-4.47,1.29l-0.72,0.54l-3.69,-0.9l-0.71,0.27l-0.02,0.7l0.91,0.53l-0.08,1.54l0.35,1.58l0.35,0.31l1.66,0.17l-1.3,0.52l-0.48,1.13l-2.68,0.91l-0.6,0.77l-1.57,0.13l-1.17,-1.13l-0.8,-2.52l-1.25,-1.26l1.02,-1.23l-1.29,-2.95l0.18,-1.62l1.0,-2.21l-0.2,-0.49l-1.14,-0.46l-4.02,0.36l-1.82,-2.1l-1.57,-0.33l-2.99,0.22l-1.06,-0.97l0.25,-1.23l-0.2,-1.01l-0.59,-0.69l-0.29,-1.06l-1.08,-0.39l0.78,-2.79l1.9,-2.11Z", "name": "Venezuela"}, "AF": {"path": "M600.7,188.88l-1.57,1.3l-0.1,0.48l0.8,2.31l-1.09,1.04l-0.03,1.27l-0.48,0.71l-2.16,-0.08l-0.37,0.59l0.78,1.48l-1.38,0.69l-1.06,1.69l0.06,1.7l-0.65,0.52l-0.91,-0.21l-1.91,0.36l-0.48,0.77l-1.88,0.13l-1.4,1.56l-0.18,2.32l-2.91,1.02l-1.65,-0.23l-0.71,0.55l-1.41,-0.3l-2.41,0.39l-3.52,-1.17l1.96,-2.35l-0.21,-1.78l-0.3,-0.34l-1.63,-0.4l-0.19,-1.58l-0.75,-2.03l0.95,-1.36l-0.19,-0.6l-0.73,-0.28l1.47,-4.8l2.14,0.9l2.12,-0.36l0.74,-1.34l1.77,-0.39l1.54,-0.92l0.63,-2.31l1.87,-0.5l0.49,-0.81l0.94,0.56l2.13,0.11l2.55,0.92l1.95,-0.83l0.65,0.43l0.56,-0.13l0.69,-1.12l1.57,-0.08l0.72,-1.66l0.79,-0.74l0.8,0.39l-0.17,0.56l0.71,0.58l-0.08,2.39l1.11,0.95ZM601.37,188.71l1.73,-0.71l1.43,-1.18l4.03,0.35l-2.23,0.74l-4.95,0.8Z", "name": "Afghanistan"}, "IQ": {"path": "M530.82,187.47l0.79,0.66l1.26,-0.28l1.46,3.08l1.63,0.94l0.14,1.23l-1.22,1.05l-0.53,2.52l1.73,2.67l3.12,1.62l1.15,1.88l-0.38,1.85l0.39,0.48l0.41,-0.0l0.02,1.07l0.76,0.94l-2.47,-0.1l-1.71,2.44l-4.31,-0.2l-7.02,-5.48l-3.73,-1.94l-2.88,-0.73l-0.85,-2.87l5.45,-3.02l0.95,-3.43l-0.19,-1.96l1.27,-0.7l1.22,-1.7l0.87,-0.36l2.69,0.34Z", "name": "Iraq"}, "IS": {"path": "M384.14,88.06l-0.37,2.61l2.54,2.51l-2.9,2.75l-9.19,3.4l-9.25,-1.66l1.7,-1.22l-0.1,-0.7l-4.05,-1.47l2.96,-0.53l0.33,-0.43l-0.11,-1.2l-0.33,-0.36l-4.67,-0.85l1.28,-2.04l3.45,-0.56l3.77,2.72l0.44,0.02l3.64,-2.16l3.3,1.08l3.98,-2.16l3.58,0.26Z", "name": "Iceland"}, "IR": {"path": "M533.43,187.16l-1.27,-2.15l0.42,-0.98l-0.71,-3.04l1.03,-0.5l0.33,0.83l1.26,1.35l2.05,0.51l1.11,-0.16l2.89,-2.11l0.62,-0.14l0.39,0.46l-0.72,1.2l0.06,0.49l1.56,1.53l0.65,0.04l0.67,1.81l2.56,0.83l1.87,1.48l3.69,0.49l3.91,-0.76l0.47,-0.73l2.17,-0.6l1.66,-1.54l1.51,0.08l1.18,-0.53l1.59,0.24l2.83,1.48l1.88,0.3l2.77,2.47l1.77,0.18l0.18,1.99l-1.68,5.49l0.24,0.5l0.61,0.23l-0.82,1.48l0.8,2.18l0.19,1.71l0.3,0.34l1.63,0.4l0.15,1.32l-2.15,2.35l-0.01,0.53l2.21,3.03l2.34,1.24l0.06,2.14l1.24,0.72l0.11,0.69l-3.31,1.27l-1.08,3.03l-9.68,-1.68l-0.99,-3.05l-1.43,-0.73l-2.17,0.46l-2.47,1.26l-2.83,-0.82l-2.46,-2.02l-2.41,-0.8l-3.42,-6.06l-0.48,-0.2l-1.18,0.39l-1.44,-0.82l-0.5,0.08l-0.65,0.74l-0.97,-1.01l-0.02,-1.31l-0.71,-0.39l0.26,-1.81l-1.29,-2.11l-3.13,-1.63l-1.58,-2.43l0.5,-1.9l1.31,-1.26l-0.19,-1.66l-1.74,-1.1l-1.57,-3.3Z", "name": "Iran"}, "AM": {"path": "M536.99,182.33l-0.28,0.03l-1.23,-2.13l-0.93,0.01l-0.62,-0.66l-0.69,-0.07l-0.96,-0.81l-1.56,-0.62l0.19,-1.12l-0.26,-0.79l2.72,-0.36l1.09,1.01l-0.17,0.92l1.02,0.78l-0.47,0.62l0.08,0.56l2.04,1.23l0.04,1.4Z", "name": "Armenia"}, "IT": {"path": "M451.59,158.63l3.48,0.94l-0.21,1.17l0.3,0.83l-1.49,-0.24l-2.04,1.1l-0.21,0.39l0.13,1.45l-0.25,1.12l0.82,1.57l2.39,1.63l1.31,2.54l2.79,2.43l2.05,0.08l0.21,0.23l-0.39,0.33l0.09,0.67l4.05,1.97l2.17,1.76l-0.16,0.36l-1.17,-1.08l-2.18,-0.49l-0.44,0.2l-1.05,1.91l0.14,0.54l1.57,0.95l-0.19,0.98l-1.06,0.33l-1.25,2.34l-0.37,0.08l0.0,-0.33l1.0,-2.45l-1.73,-3.17l-1.12,-0.51l-0.88,-1.33l-1.51,-0.51l-1.27,-1.25l-1.75,-0.18l-4.12,-3.21l-1.62,-1.65l-1.03,-3.19l-3.53,-1.36l-1.3,0.51l-1.69,1.41l0.16,-0.72l-0.28,-0.47l-1.14,-0.33l-0.53,-1.96l0.72,-0.78l0.04,-0.48l-0.65,-1.17l0.8,0.39l1.4,-0.23l1.11,-0.84l0.52,0.35l1.19,-0.1l0.75,-1.2l1.53,0.33l1.36,-0.56l0.35,-1.14l1.08,0.32l0.68,-0.64l1.98,-0.44l0.42,0.82ZM459.19,184.75l-0.65,1.65l0.32,1.05l-0.31,0.89l-1.5,-0.85l-4.5,-1.67l0.19,-0.82l2.67,0.23l3.78,-0.48ZM443.93,176.05l1.18,1.66l-0.3,3.32l-1.06,-0.01l-0.77,0.73l-0.53,-0.44l-0.1,-3.37l-0.39,-1.22l1.04,0.01l0.92,-0.68Z", "name": "Italy"}, "VN": {"path": "M690.56,230.25l-2.7,1.82l-2.09,2.46l-0.63,1.95l4.31,6.45l2.32,1.65l1.43,1.94l1.11,4.59l-0.32,4.24l-1.93,1.54l-2.84,1.61l-2.11,2.15l-2.73,2.06l-0.59,-1.05l0.63,-1.53l-0.13,-0.47l-1.34,-1.04l1.51,-0.71l2.55,-0.18l0.3,-0.63l-0.82,-1.14l4.0,-2.07l0.31,-3.05l-0.57,-1.77l0.42,-2.66l-0.73,-1.97l-1.86,-1.76l-3.63,-5.29l-2.72,-1.46l0.36,-0.47l1.5,-0.64l0.21,-0.52l-0.97,-2.27l-0.37,-0.24l-2.83,-0.02l-2.24,-3.9l0.83,-0.4l4.39,-0.29l2.06,-1.31l1.15,0.89l1.88,0.4l-0.17,1.51l1.35,1.16l1.67,0.45Z", "name": "Vietnam"}, "AR": {"path": "M249.29,428.93l-2.33,-0.52l-5.83,-0.43l-0.89,-1.66l0.05,-2.37l-0.45,-0.4l-1.43,0.18l-0.67,-0.91l-0.2,-3.13l1.88,-1.47l0.79,-2.04l-0.25,-1.7l1.3,-2.68l0.91,-4.15l-0.22,-1.69l0.85,-0.45l0.2,-0.44l-0.27,-1.16l-0.98,-0.68l0.59,-0.92l-0.05,-0.5l-1.04,-1.07l-0.52,-3.1l0.97,-0.86l-0.42,-3.58l1.2,-5.43l1.38,-0.98l0.16,-0.43l-0.75,-2.79l-0.01,-2.43l1.78,-1.75l0.06,-2.57l1.43,-2.85l0.01,-2.58l-0.69,-0.74l-1.09,-4.52l1.47,-2.7l-0.18,-2.79l0.85,-2.35l1.59,-2.46l1.73,-1.64l0.05,-0.52l-0.6,-0.84l0.44,-0.85l-0.07,-4.19l2.7,-1.44l0.86,-2.75l-0.21,-0.71l1.76,-2.01l2.9,0.57l1.38,1.78l0.68,-0.08l0.87,-1.87l2.39,0.09l4.95,4.77l2.17,0.49l3.0,1.92l2.47,1.0l0.25,0.82l-2.37,3.93l0.23,0.59l5.39,1.16l2.12,-0.44l2.45,-2.16l0.5,-2.38l0.76,-0.31l0.98,1.2l-0.04,1.8l-3.67,2.51l-2.85,2.66l-3.43,3.88l-1.3,5.07l0.01,2.72l-0.54,0.73l-0.36,3.28l3.14,2.64l-0.16,2.11l1.4,1.11l-0.1,1.09l-2.29,3.52l-3.55,1.49l-4.92,0.6l-2.71,-0.29l-0.43,0.51l0.5,1.65l-0.49,2.1l0.38,1.42l-1.19,0.83l-2.36,0.38l-2.3,-1.04l-1.38,0.83l0.41,3.64l1.69,0.91l1.4,-0.71l0.36,0.76l-2.04,0.86l-2.01,1.89l-0.97,4.63l-2.34,0.1l-2.09,1.78l-0.61,2.75l2.46,2.31l2.17,0.63l-0.7,2.32l-2.83,1.73l-1.73,3.86l-2.17,1.22l-1.16,1.67l0.75,3.76l1.04,1.28ZM256.71,438.88l-2.0,0.15l-1.4,-1.22l-3.82,-0.1l-0.0,-5.83l1.6,3.05l3.26,2.07l3.08,0.78l-0.71,1.1Z", "name": "Argentina"}, "AU": {"path": "M705.8,353.26l0.26,0.04l0.17,-0.47l-0.48,-1.42l0.92,1.11l0.45,0.15l0.27,-0.39l-0.1,-1.56l-1.98,-3.63l1.09,-3.31l-0.24,-1.57l0.34,-0.62l0.38,1.06l0.43,-0.19l0.99,-1.7l1.91,-0.83l1.29,-1.15l1.81,-0.91l0.96,-0.17l0.92,0.26l1.92,-0.95l1.47,-0.28l1.03,-0.8l1.43,0.04l2.78,-0.84l1.36,-1.15l0.71,-1.45l1.41,-1.26l0.3,-2.58l1.27,-1.59l0.78,1.65l0.54,0.19l1.07,-0.51l0.15,-0.6l-0.73,-1.0l0.45,-0.71l0.78,0.39l0.58,-0.3l0.28,-1.82l1.87,-2.14l1.12,-0.39l0.28,-0.58l0.62,0.17l0.53,-0.73l1.87,-0.57l1.65,1.05l1.35,1.48l3.39,0.38l0.43,-0.54l-0.46,-1.23l1.05,-1.79l1.04,-0.61l0.14,-0.55l-0.25,-0.41l0.88,-1.17l1.31,-0.77l1.3,0.27l2.1,-0.48l0.31,-0.4l-0.05,-1.3l-0.92,-0.77l1.48,0.56l1.41,1.07l2.11,0.65l0.81,-0.2l1.4,0.7l1.69,-0.66l0.8,0.19l0.64,-0.33l0.71,0.77l-1.33,1.94l-0.71,0.07l-0.35,0.51l0.24,0.86l-1.52,2.35l0.12,1.05l2.15,1.65l1.97,0.85l3.04,2.36l1.97,0.65l0.55,0.88l2.72,0.85l1.84,-1.1l2.07,-5.97l-0.42,-3.59l0.3,-1.73l0.47,-0.87l-0.31,-0.68l1.09,-3.28l0.46,-0.47l0.4,0.71l0.16,1.51l0.65,0.52l0.16,1.04l0.85,1.21l0.12,2.38l0.9,2.0l0.57,0.18l1.3,-0.78l1.69,1.7l-0.2,1.08l0.53,2.2l0.39,1.3l0.68,0.48l0.6,1.95l-0.19,1.48l0.81,1.76l6.01,3.69l-0.11,0.76l1.38,1.58l0.95,2.77l0.58,0.22l0.72,-0.41l0.8,0.9l0.61,0.01l0.46,2.41l4.81,4.71l0.66,2.02l-0.07,3.31l1.14,2.2l-0.13,2.24l-1.1,3.68l0.03,1.64l-0.47,1.89l-1.05,2.4l-1.9,1.47l-1.72,3.51l-2.38,6.09l-0.24,2.82l-1.14,0.8l-2.85,0.15l-2.31,1.19l-2.51,2.25l-3.09,-1.57l0.3,-1.15l-0.54,-0.47l-1.5,0.63l-2.01,1.94l-7.12,-2.18l-1.48,-1.63l-1.14,-3.74l-1.45,-1.26l-1.81,-0.26l0.56,-1.18l-0.61,-2.1l-0.72,-0.1l-1.14,1.82l-0.9,0.21l0.63,-0.82l0.36,-1.55l0.92,-1.31l-0.13,-2.34l-0.7,-0.22l-2.0,2.34l-1.51,0.93l-0.94,2.01l-1.35,-0.81l-0.02,-1.52l-1.57,-2.04l-1.09,-0.88l0.24,-0.33l-0.14,-0.59l-3.21,-1.69l-1.83,-0.12l-2.54,-1.35l-4.58,0.28l-6.02,1.9l-2.53,-0.13l-2.62,1.41l-2.13,0.63l-1.49,2.6l-3.49,0.31l-2.29,-0.5l-3.48,0.43l-1.6,1.47l-0.81,-0.04l-2.37,1.63l-3.26,-0.1l-3.72,-2.21l0.04,-1.05l1.19,-0.46l0.49,-0.89l0.21,-2.97l-0.28,-1.64l-1.34,-2.86l-0.38,-1.47l0.05,-1.72l-0.95,-1.7l-0.18,-0.97l-1.01,-0.99l-0.29,-1.98l-1.13,-1.75ZM784.92,393.44l2.65,1.02l3.23,-0.96l1.09,0.14l0.15,3.06l-0.85,1.13l-0.17,1.63l-0.87,-0.24l-1.57,1.91l-1.68,-0.18l-1.4,-2.36l-0.37,-2.04l-1.39,-2.51l0.04,-0.8l1.15,0.18Z", "name": "Australia"}, "IL": {"path": "M507.76,203.05l0.4,-0.78l0.18,0.4l-0.33,1.03l0.52,0.44l0.68,-0.22l-0.86,3.6l-1.16,-3.32l0.59,-0.74l-0.03,-0.41ZM508.73,200.34l0.37,-1.02l0.64,0.0l0.52,-0.51l-0.49,1.53l-0.56,-0.24l-0.48,0.23Z", "name": "Israel"}, "IN": {"path": "M623.34,207.03l-1.24,1.04l-0.97,2.55l0.22,0.51l8.04,3.87l3.42,0.37l1.57,1.38l4.92,0.88l2.18,-0.04l0.38,-0.3l0.29,-1.24l-0.32,-1.64l0.14,-0.87l0.82,-0.31l0.45,2.48l2.28,1.02l1.77,-0.38l4.14,0.1l0.38,-0.36l0.18,-1.66l-0.5,-0.65l1.37,-0.29l2.25,-1.99l2.7,-1.62l1.93,0.62l1.8,-0.98l0.79,1.14l-0.68,0.91l0.26,0.63l2.42,0.36l0.09,0.47l-0.83,0.75l0.13,1.07l-1.52,-0.29l-3.24,1.86l-0.13,1.78l-1.32,2.14l-0.18,1.39l-0.93,1.82l-1.64,-0.5l-0.52,0.37l-0.09,2.63l-0.56,1.11l0.19,0.81l-0.53,0.27l-1.18,-3.73l-1.08,-0.27l-0.38,0.31l-0.24,1.0l-0.66,-0.66l0.54,-1.06l1.22,-0.34l1.15,-2.25l-0.24,-0.56l-1.57,-0.47l-4.34,-0.28l-0.18,-1.56l-0.35,-0.35l-1.11,-0.12l-1.91,-1.12l-0.56,0.17l-0.88,1.82l0.11,0.49l1.36,1.07l-1.09,0.69l-0.69,1.11l0.18,0.56l1.24,0.57l-0.32,1.54l0.85,1.94l0.36,2.01l-0.22,0.59l-4.58,0.52l-0.33,0.42l0.13,1.8l-1.17,1.36l-3.65,1.81l-2.79,3.03l-4.32,3.28l-0.18,1.27l-4.65,1.79l-0.77,2.16l0.64,5.3l-1.06,2.49l-0.01,3.94l-1.24,0.28l-1.14,1.93l0.39,0.84l-1.68,0.53l-1.04,1.83l-0.65,0.47l-2.06,-2.05l-2.1,-6.02l-2.2,-3.64l-1.05,-4.75l-2.29,-3.57l-1.76,-8.2l0.01,-3.11l-0.49,-2.53l-0.55,-0.29l-3.53,1.52l-1.53,-0.27l-2.86,-2.77l0.85,-0.67l0.08,-0.55l-0.74,-1.03l-2.67,-2.06l1.24,-1.32l5.34,0.01l0.39,-0.49l-0.5,-2.29l-1.42,-1.46l-0.27,-1.93l-1.43,-1.2l2.31,-2.37l3.05,0.06l2.62,-2.85l1.6,-2.81l2.4,-2.73l0.07,-2.04l1.97,-1.48l-0.02,-0.65l-1.93,-1.31l-0.82,-1.78l-0.8,-2.21l0.9,-0.89l3.59,0.65l2.92,-0.42l2.33,-2.19l2.31,2.85l-0.24,2.13l0.99,1.59l-0.05,0.82l-1.34,-0.28l-0.47,0.48l0.7,3.06l2.62,1.99l2.99,1.65Z", "name": "India"}, "TZ": {"path": "M495.56,296.42l2.8,-3.12l-0.02,-0.81l-0.64,-1.3l0.68,-0.52l0.14,-1.47l-0.76,-1.25l0.31,-0.11l2.26,0.03l-0.51,2.76l0.76,1.3l0.5,0.12l1.05,-0.53l1.19,-0.12l0.61,0.24l1.43,-0.62l0.1,-0.67l-0.71,-0.62l1.57,-1.7l8.65,4.86l0.32,1.53l3.34,2.33l-1.05,2.8l0.13,1.61l1.63,1.12l-0.6,1.76l-0.01,2.33l1.89,4.03l0.57,0.43l-1.46,1.08l-2.61,0.94l-1.43,-0.04l-1.06,0.77l-2.29,0.36l-2.87,-0.68l-0.83,0.07l-0.63,-0.75l-0.31,-2.78l-1.32,-1.35l-3.25,-0.77l-3.96,-1.58l-1.18,-2.41l-0.32,-1.75l-1.76,-1.49l0.42,-1.05l-0.44,-0.89l0.08,-0.96l-0.46,-0.58l0.06,-0.56Z", "name": "Tanzania"}, "AZ": {"path": "M539.29,175.73l1.33,0.32l1.94,-1.8l2.3,3.34l1.43,0.43l-1.26,0.15l-0.35,0.32l-0.8,3.14l-0.99,0.96l0.05,1.11l-1.26,-1.13l0.7,-1.18l-0.04,-0.47l-0.74,-0.86l-1.48,0.15l-2.34,1.71l-0.03,-1.27l-2.03,-1.35l0.47,-0.62l-0.08,-0.56l-1.03,-0.79l0.29,-0.43l-0.14,-0.58l-1.13,-0.86l1.89,0.68l1.69,0.06l0.37,-0.87l-0.81,-1.37l0.42,0.06l1.63,1.72ZM533.78,180.57l0.61,0.46l0.69,-0.0l0.59,1.15l-0.68,-0.15l-1.21,-1.45Z", "name": "Azerbaijan"}, "IE": {"path": "M405.08,135.42l0.35,2.06l-1.75,2.78l-4.22,1.88l-2.84,-0.4l1.73,-3.0l-1.18,-3.53l4.6,-3.74l0.32,1.15l-0.49,1.74l0.4,0.51l1.47,-0.04l1.6,0.6Z", "name": "Ireland"}, "ID": {"path": "M756.47,287.89l0.69,4.01l2.79,1.78l0.51,-0.1l2.04,-2.59l2.71,-1.43l2.05,-0.0l3.9,1.73l2.46,0.45l0.08,15.12l-1.75,-1.54l-2.54,-0.51l-0.88,0.71l-2.32,0.06l0.69,-1.33l1.45,-0.64l0.23,-0.46l-0.65,-2.74l-1.24,-2.21l-5.04,-2.29l-2.09,-0.23l-3.68,-2.27l-0.55,0.13l-0.65,1.07l-0.52,0.12l-0.55,-1.89l-1.21,-0.78l1.84,-0.62l1.72,0.05l0.39,-0.52l-0.21,-0.66l-0.38,-0.28l-3.45,-0.0l-1.13,-1.48l-2.1,-0.43l-0.52,-0.6l2.69,-0.48l1.28,-0.78l3.66,0.94l0.3,0.71ZM757.91,300.34l-0.62,0.82l-0.1,-0.8l0.59,-1.12l0.13,1.1ZM747.38,292.98l0.34,0.72l-1.22,-0.57l-4.68,-0.1l0.27,-0.62l2.78,-0.09l2.52,0.67ZM741.05,285.25l-0.67,-2.88l0.64,-2.01l0.41,0.86l1.21,0.18l0.16,0.7l-0.1,1.68l-0.84,-0.16l-0.46,0.3l-0.34,1.34ZM739.05,293.5l-0.5,0.44l-1.34,-0.36l-0.17,-0.37l1.73,-0.08l0.27,0.36ZM721.45,284.51l-0.19,1.97l2.24,2.23l0.54,0.02l1.27,-1.07l2.75,-0.5l-0.9,1.21l-2.11,0.93l-0.16,0.6l2.22,3.01l-0.3,1.07l1.36,1.74l-2.26,0.85l-0.28,-0.31l0.12,-1.19l-1.64,-1.34l0.17,-2.23l-0.56,-0.39l-1.67,0.76l-0.23,0.39l0.3,6.17l-1.1,0.25l-0.69,-0.47l0.64,-2.21l-0.39,-2.42l-0.39,-0.34l-0.8,-0.01l-0.58,-1.29l0.98,-1.6l0.35,-1.96l1.32,-3.87ZM728.59,296.27l0.38,0.49l-0.02,1.28l-0.88,0.49l-0.53,-0.47l1.04,-1.79ZM729.04,286.98l0.27,-0.05l-0.02,0.13l-0.24,-0.08ZM721.68,284.05l0.16,-0.32l1.89,-1.65l1.83,0.68l3.16,0.35l2.94,-0.1l2.39,-1.66l-1.73,2.13l-1.66,0.43l-2.41,-0.48l-4.17,0.13l-2.39,0.51ZM730.55,310.47l1.11,-1.93l2.03,-0.82l0.08,0.62l-1.45,1.67l-1.77,0.46ZM728.12,305.88l-0.1,0.38l-3.46,0.66l-2.91,-0.27l-0.0,-0.25l1.54,-0.41l1.66,0.73l1.67,-0.19l1.61,-0.65ZM722.9,310.24l-0.64,0.03l-2.26,-1.2l1.11,-0.24l1.78,1.41ZM716.26,305.77l0.88,0.51l1.28,-0.17l0.2,0.35l-4.65,0.73l0.39,-0.67l1.15,-0.02l0.75,-0.73ZM711.66,293.84l-0.38,-0.16l-2.54,1.01l-1.12,-1.44l-1.69,-0.13l-1.16,-0.75l-3.04,0.77l-1.1,-1.15l-3.31,-0.11l-0.35,-3.05l-1.35,-0.95l-1.11,-1.98l-0.33,-2.06l0.27,-2.14l0.9,-1.01l0.37,1.15l2.09,1.49l1.53,-0.48l1.82,0.08l1.38,-1.19l1.0,-0.18l2.28,0.67l2.26,-0.53l1.52,-3.64l1.01,-0.99l0.78,-2.57l4.1,0.3l-1.11,1.77l0.02,0.46l1.7,2.2l-0.23,1.39l2.07,1.71l-2.33,0.42l-0.88,1.9l0.1,2.05l-2.4,1.9l-0.06,2.45l-0.7,2.79ZM692.58,302.03l0.35,0.26l4.8,0.25l0.78,-0.97l4.17,1.09l1.13,1.68l3.69,0.45l2.13,1.04l-1.8,0.6l-2.77,-0.99l-4.8,-0.12l-5.24,-1.41l-1.84,-0.25l-1.11,0.3l-4.26,-0.97l-0.7,-1.14l-1.59,-0.13l1.18,-1.65l2.74,0.13l2.87,1.13l0.26,0.68ZM685.53,299.17l-2.22,0.04l-2.06,-2.03l-3.15,-2.01l-2.93,-3.51l-3.11,-5.33l-2.2,-2.12l-1.64,-4.06l-2.32,-1.69l-1.27,-2.07l-1.96,-1.5l-2.51,-2.65l-0.11,-0.66l4.81,0.53l2.15,2.38l3.31,2.74l2.35,2.66l2.7,0.17l1.95,1.59l1.54,2.17l1.59,0.95l-0.84,1.71l0.15,0.52l1.44,0.87l0.79,0.1l0.4,1.58l0.87,1.4l1.96,0.39l1.0,1.31l-0.6,3.01l-0.09,3.5Z", "name": "Indonesia"}, "UA": {"path": "M492.5,162.44l1.28,-2.49l1.82,0.19l0.66,-0.23l0.09,-0.71l-0.25,-0.75l-0.79,-0.72l-0.33,-1.21l-0.86,-0.62l-0.02,-1.19l-1.13,-0.86l-1.15,-0.19l-2.04,-1.0l-1.66,0.32l-0.66,0.47l-0.92,-0.0l-0.84,0.78l-2.48,0.7l-1.18,-0.71l-3.07,-0.36l-0.89,0.43l-0.24,-0.55l-1.11,-0.7l0.35,-0.93l1.26,-1.02l-0.54,-1.23l2.04,-2.43l1.4,-0.62l0.25,-1.19l-1.04,-2.39l0.83,-0.13l1.28,-0.84l1.8,-0.07l2.47,0.26l2.86,0.81l1.88,0.06l0.86,0.44l1.04,-0.41l0.77,0.66l2.18,-0.15l0.92,0.3l0.52,-0.34l0.15,-1.53l0.56,-0.54l2.85,-0.05l0.84,-0.72l3.04,-0.18l1.23,1.46l-0.48,0.77l0.21,1.03l0.36,0.32l1.8,0.14l0.93,2.08l3.18,1.15l1.94,-0.45l1.67,1.49l1.4,-0.03l3.35,0.96l0.02,0.54l-0.96,1.59l0.47,1.97l-0.26,0.7l-2.36,0.28l-1.29,0.89l-0.23,1.38l-1.83,0.27l-1.58,0.97l-2.41,0.21l-2.16,1.17l-0.21,0.38l0.34,2.26l1.23,0.75l2.13,-0.08l-0.14,0.31l-2.65,0.53l-3.23,1.69l-0.87,-0.39l0.42,-1.1l-0.25,-0.52l-2.21,-0.73l2.35,-1.06l0.12,-0.65l-0.93,-0.82l-3.62,-0.74l-0.13,-0.89l-0.46,-0.34l-2.61,0.59l-0.91,1.69l-1.71,2.04l-0.86,-0.4l-1.62,0.27Z", "name": "Ukraine"}, "QA": {"path": "M549.33,221.64l-0.76,-0.23l-0.14,-1.64l0.84,-1.29l0.47,0.52l0.04,1.34l-0.45,1.3Z", "name": "Qatar"}, "MZ": {"path": "M508.58,318.75l-0.34,-2.57l0.51,-2.05l3.55,0.63l2.5,-0.38l1.02,-0.76l1.49,0.01l2.74,-0.98l1.66,-1.2l0.5,9.24l0.41,1.23l-0.68,1.67l-0.93,1.71l-1.5,1.5l-5.16,2.28l-2.78,2.73l-1.02,0.53l-1.71,1.8l-0.98,0.57l-0.35,2.41l1.16,1.94l0.49,2.17l0.43,0.31l-0.06,2.06l-0.39,1.17l0.5,0.72l-0.25,0.73l-0.92,0.83l-5.12,2.39l-1.22,1.36l0.21,1.13l0.58,0.39l-0.11,0.72l-1.22,-0.01l-0.73,-2.97l0.42,-3.09l-1.78,-5.37l2.49,-2.81l0.69,-1.89l0.44,-0.43l0.28,-1.53l-0.39,-0.93l0.59,-3.65l-0.01,-3.26l-1.49,-1.16l-1.2,-0.22l-1.74,-1.17l-1.92,0.01l-0.29,-2.08l7.06,-1.96l1.28,1.09l0.89,-0.1l0.67,0.44l0.1,0.73l-0.51,1.29l0.19,1.81l1.75,1.83l0.65,-0.13l0.71,-1.65l1.17,-0.86l-0.26,-3.47l-1.05,-1.85l-1.04,-0.94Z", "name": "Mozambique"}}, "height": 440.70631074413296, "projection": {"type": "mill", "centralMeridian": 11.5}, "width": 900.0});

// Copyright 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


// Known Issues:
//
// * Patterns are not implemented.
// * Radial gradient are not implemented. The VML version of these look very
//   different from the canvas one.
// * Clipping paths are not implemented.
// * Coordsize. The width and height attribute have higher priority than the
//   width and height style values which isn't correct.
// * Painting mode isn't implemented.
// * Canvas width/height should is using content-box by default. IE in
//   Quirks mode will draw the canvas using border-box. Either change your
//   doctype to HTML5
//   (http://www.whatwg.org/specs/web-apps/current-work/#the-doctype)
//   or use Box Sizing Behavior from WebFX
//   (http://webfx.eae.net/dhtml/boxsizing/boxsizing.html)
// * Non uniform scaling does not correctly scale strokes.
// * Optimize. There is always room for speed improvements.

// Only add this code if we do not already have a canvas implementation
if (!document.createElement('canvas').getContext) {

  (function() {

    // alias some functions to make (compiled) code shorter
    var m = Math;
    var mr = m.round;
    var ms = m.sin;
    var mc = m.cos;
    var abs = m.abs;
    var sqrt = m.sqrt;

    // this is used for sub pixel precision
    var Z = 10;
    var Z2 = Z / 2;

    /**
     * This funtion is assigned to the <canvas> elements as element.getContext().
     * @this {HTMLElement}
     * @return {CanvasRenderingContext2D_}
     */
    function getContext() {
      return this.context_ ||
        (this.context_ = new CanvasRenderingContext2D_(this));
    }

    var slice = Array.prototype.slice;

    /**
     * Binds a function to an object. The returned function will always use the
     * passed in {@code obj} as {@code this}.
     *
     * Example:
     *
     *   g = bind(f, obj, a, b)
     *   g(c, d) // will do f.call(obj, a, b, c, d)
     *
     * @param {Function} f The function to bind the object to
     * @param {Object} obj The object that should act as this when the function
     *     is called
     * @param {*} var_args Rest arguments that will be used as the initial
     *     arguments when the function is called
     * @return {Function} A new function that has bound this
     */
    function bind(f, obj, var_args) {
      var a = slice.call(arguments, 2);
      return function() {
        return f.apply(obj, a.concat(slice.call(arguments)));
      };
    }

    var G_vmlCanvasManager_ = {
      init: function(opt_doc) {
        if (/MSIE/.test(navigator.userAgent) && !window.opera) {
          var doc = opt_doc || document;
          // Create a dummy element so that IE will allow canvas elements to be
          // recognized.
          doc.createElement('canvas');
          doc.attachEvent('onreadystatechange', bind(this.init_, this, doc));
        }
      },

      init_: function(doc) {
        // create xmlns
        if (!doc.namespaces['g_vml_']) {
          doc.namespaces.add('g_vml_', 'urn:schemas-microsoft-com:vml',
            '#default#VML');

        }
        if (!doc.namespaces['g_o_']) {
          doc.namespaces.add('g_o_', 'urn:schemas-microsoft-com:office:office',
            '#default#VML');
        }

        // Setup default CSS.  Only add one style sheet per document
        if (!doc.styleSheets['ex_canvas_']) {
          var ss = doc.createStyleSheet();
          ss.owningElement.id = 'ex_canvas_';
          ss.cssText = 'canvas{display:inline-block;overflow:hidden;' +
            // default size is 300x150 in Gecko and Opera
            'text-align:left;width:300px;height:150px}' +
            'g_vml_\\:*{behavior:url(#default#VML)}' +
            'g_o_\\:*{behavior:url(#default#VML)}';

        }

        // find all canvas elements
        var els = doc.getElementsByTagName('canvas');
        for (var i = 0; i < els.length; i++) {
          this.initElement(els[i]);
        }
      },

      /**
       * Public initializes a canvas element so that it can be used as canvas
       * element from now on. This is called automatically before the page is
       * loaded but if you are creating elements using createElement you need to
       * make sure this is called on the element.
       * @param {HTMLElement} el The canvas element to initialize.
       * @return {HTMLElement} the element that was created.
       */
      initElement: function(el) {
        if (!el.getContext) {

          el.getContext = getContext;

          // Remove fallback content. There is no way to hide text nodes so we
          // just remove all childNodes. We could hide all elements and remove
          // text nodes but who really cares about the fallback content.
          el.innerHTML = '';

          // do not use inline function because that will leak memory
          el.attachEvent('onpropertychange', onPropertyChange);
          el.attachEvent('onresize', onResize);

          var attrs = el.attributes;
          if (attrs.width && attrs.width.specified) {
            // TODO: use runtimeStyle and coordsize
            // el.getContext().setWidth_(attrs.width.nodeValue);
            el.style.width = attrs.width.nodeValue + 'px';
          } else {
            el.width = el.clientWidth;
          }
          if (attrs.height && attrs.height.specified) {
            // TODO: use runtimeStyle and coordsize
            // el.getContext().setHeight_(attrs.height.nodeValue);
            el.style.height = attrs.height.nodeValue + 'px';
          } else {
            el.height = el.clientHeight;
          }
          //el.getContext().setCoordsize_()
        }
        return el;
      }
    };

    function onPropertyChange(e) {
      var el = e.srcElement;

      switch (e.propertyName) {
        case 'width':
          el.style.width = el.attributes.width.nodeValue + 'px';
          el.getContext().clearRect();
          break;
        case 'height':
          el.style.height = el.attributes.height.nodeValue + 'px';
          el.getContext().clearRect();
          break;
      }
    }

    function onResize(e) {
      var el = e.srcElement;
      if (el.firstChild) {
        el.firstChild.style.width =  el.clientWidth + 'px';
        el.firstChild.style.height = el.clientHeight + 'px';
      }
    }

    G_vmlCanvasManager_.init();

    // precompute "00" to "FF"
    var dec2hex = [];
    for (var i = 0; i < 16; i++) {
      for (var j = 0; j < 16; j++) {
        dec2hex[i * 16 + j] = i.toString(16) + j.toString(16);
      }
    }

    function createMatrixIdentity() {
      return [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
      ];
    }

    function matrixMultiply(m1, m2) {
      var result = createMatrixIdentity();

      for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
          var sum = 0;

          for (var z = 0; z < 3; z++) {
            sum += m1[x][z] * m2[z][y];
          }

          result[x][y] = sum;
        }
      }
      return result;
    }

    function copyState(o1, o2) {
      o2.fillStyle     = o1.fillStyle;
      o2.lineCap       = o1.lineCap;
      o2.lineJoin      = o1.lineJoin;
      o2.lineWidth     = o1.lineWidth;
      o2.miterLimit    = o1.miterLimit;
      o2.shadowBlur    = o1.shadowBlur;
      o2.shadowColor   = o1.shadowColor;
      o2.shadowOffsetX = o1.shadowOffsetX;
      o2.shadowOffsetY = o1.shadowOffsetY;
      o2.strokeStyle   = o1.strokeStyle;
      o2.globalAlpha   = o1.globalAlpha;
      o2.arcScaleX_    = o1.arcScaleX_;
      o2.arcScaleY_    = o1.arcScaleY_;
      o2.lineScale_    = o1.lineScale_;
    }

    function processStyle(styleString) {
      var str, alpha = 1;

      styleString = String(styleString);
      if (styleString.substring(0, 3) == 'rgb') {
        var start = styleString.indexOf('(', 3);
        var end = styleString.indexOf(')', start + 1);
        var guts = styleString.substring(start + 1, end).split(',');

        str = '#';
        for (var i = 0; i < 3; i++) {
          str += dec2hex[Number(guts[i])];
        }

        if (guts.length == 4 && styleString.substr(3, 1) == 'a') {
          alpha = guts[3];
        }
      } else {
        str = styleString;
      }

      return {color: str, alpha: alpha};
    }

    function processLineCap(lineCap) {
      switch (lineCap) {
        case 'butt':
          return 'flat';
        case 'round':
          return 'round';
        case 'square':
        default:
          return 'square';
      }
    }

    /**
     * This class implements CanvasRenderingContext2D interface as described by
     * the WHATWG.
     * @param {HTMLElement} surfaceElement The element that the 2D context should
     * be associated with
     */
    function CanvasRenderingContext2D_(surfaceElement) {
      this.m_ = createMatrixIdentity();

      this.mStack_ = [];
      this.aStack_ = [];
      this.currentPath_ = [];

      // Canvas context properties
      this.strokeStyle = '#000';
      this.fillStyle = '#000';

      this.lineWidth = 1;
      this.lineJoin = 'miter';
      this.lineCap = 'butt';
      this.miterLimit = Z * 1;
      this.globalAlpha = 1;
      this.canvas = surfaceElement;

      var el = surfaceElement.ownerDocument.createElement('div');
      el.style.width =  surfaceElement.clientWidth + 'px';
      el.style.height = surfaceElement.clientHeight + 'px';
      el.style.overflow = 'hidden';
      el.style.position = 'absolute';
      surfaceElement.appendChild(el);

      this.element_ = el;
      this.arcScaleX_ = 1;
      this.arcScaleY_ = 1;
      this.lineScale_ = 1;
    }

    var contextPrototype = CanvasRenderingContext2D_.prototype;
    contextPrototype.clearRect = function() {
      this.element_.innerHTML = '';
    };

    contextPrototype.beginPath = function() {
      // TODO: Branch current matrix so that save/restore has no effect
      //       as per safari docs.
      this.currentPath_ = [];
    };

    contextPrototype.moveTo = function(aX, aY) {
      var p = this.getCoords_(aX, aY);
      this.currentPath_.push({type: 'moveTo', x: p.x, y: p.y});
      this.currentX_ = p.x;
      this.currentY_ = p.y;
    };

    contextPrototype.lineTo = function(aX, aY) {
      var p = this.getCoords_(aX, aY);
      this.currentPath_.push({type: 'lineTo', x: p.x, y: p.y});

      this.currentX_ = p.x;
      this.currentY_ = p.y;
    };

    contextPrototype.bezierCurveTo = function(aCP1x, aCP1y,
                                              aCP2x, aCP2y,
                                              aX, aY) {
      var p = this.getCoords_(aX, aY);
      var cp1 = this.getCoords_(aCP1x, aCP1y);
      var cp2 = this.getCoords_(aCP2x, aCP2y);
      bezierCurveTo(this, cp1, cp2, p);
    };

    // Helper function that takes the already fixed cordinates.
    function bezierCurveTo(self, cp1, cp2, p) {
      self.currentPath_.push({
        type: 'bezierCurveTo',
        cp1x: cp1.x,
        cp1y: cp1.y,
        cp2x: cp2.x,
        cp2y: cp2.y,
        x: p.x,
        y: p.y
      });
      self.currentX_ = p.x;
      self.currentY_ = p.y;
    }

    contextPrototype.quadraticCurveTo = function(aCPx, aCPy, aX, aY) {
      // the following is lifted almost directly from
      // http://developer.mozilla.org/en/docs/Canvas_tutorial:Drawing_shapes

      var cp = this.getCoords_(aCPx, aCPy);
      var p = this.getCoords_(aX, aY);

      var cp1 = {
        x: this.currentX_ + 2.0 / 3.0 * (cp.x - this.currentX_),
        y: this.currentY_ + 2.0 / 3.0 * (cp.y - this.currentY_)
      };
      var cp2 = {
        x: cp1.x + (p.x - this.currentX_) / 3.0,
        y: cp1.y + (p.y - this.currentY_) / 3.0
      };

      bezierCurveTo(this, cp1, cp2, p);
    };

    contextPrototype.arc = function(aX, aY, aRadius,
                                    aStartAngle, aEndAngle, aClockwise) {
      aRadius *= Z;
      var arcType = aClockwise ? 'at' : 'wa';

      var xStart = aX + mc(aStartAngle) * aRadius - Z2;
      var yStart = aY + ms(aStartAngle) * aRadius - Z2;

      var xEnd = aX + mc(aEndAngle) * aRadius - Z2;
      var yEnd = aY + ms(aEndAngle) * aRadius - Z2;

      // IE won't render arches drawn counter clockwise if xStart == xEnd.
      if (xStart == xEnd && !aClockwise) {
        xStart += 0.125; // Offset xStart by 1/80 of a pixel. Use something
                         // that can be represented in binary
      }

      var p = this.getCoords_(aX, aY);
      var pStart = this.getCoords_(xStart, yStart);
      var pEnd = this.getCoords_(xEnd, yEnd);

      this.currentPath_.push({type: arcType,
        x: p.x,
        y: p.y,
        radius: aRadius,
        xStart: pStart.x,
        yStart: pStart.y,
        xEnd: pEnd.x,
        yEnd: pEnd.y});

    };

    contextPrototype.rect = function(aX, aY, aWidth, aHeight) {
      this.moveTo(aX, aY);
      this.lineTo(aX + aWidth, aY);
      this.lineTo(aX + aWidth, aY + aHeight);
      this.lineTo(aX, aY + aHeight);
      this.closePath();
    };

    contextPrototype.strokeRect = function(aX, aY, aWidth, aHeight) {
      var oldPath = this.currentPath_;
      this.beginPath();

      this.moveTo(aX, aY);
      this.lineTo(aX + aWidth, aY);
      this.lineTo(aX + aWidth, aY + aHeight);
      this.lineTo(aX, aY + aHeight);
      this.closePath();
      this.stroke();

      this.currentPath_ = oldPath;
    };

    contextPrototype.fillRect = function(aX, aY, aWidth, aHeight) {
      var oldPath = this.currentPath_;
      this.beginPath();

      this.moveTo(aX, aY);
      this.lineTo(aX + aWidth, aY);
      this.lineTo(aX + aWidth, aY + aHeight);
      this.lineTo(aX, aY + aHeight);
      this.closePath();
      this.fill();

      this.currentPath_ = oldPath;
    };

    contextPrototype.createLinearGradient = function(aX0, aY0, aX1, aY1) {
      var gradient = new CanvasGradient_('gradient');
      gradient.x0_ = aX0;
      gradient.y0_ = aY0;
      gradient.x1_ = aX1;
      gradient.y1_ = aY1;
      return gradient;
    };

    contextPrototype.createRadialGradient = function(aX0, aY0, aR0,
                                                     aX1, aY1, aR1) {
      var gradient = new CanvasGradient_('gradientradial');
      gradient.x0_ = aX0;
      gradient.y0_ = aY0;
      gradient.r0_ = aR0;
      gradient.x1_ = aX1;
      gradient.y1_ = aY1;
      gradient.r1_ = aR1;
      return gradient;
    };

    contextPrototype.drawImage = function(image, var_args) {
      var dx, dy, dw, dh, sx, sy, sw, sh;

      // to find the original width we overide the width and height
      var oldRuntimeWidth = image.runtimeStyle.width;
      var oldRuntimeHeight = image.runtimeStyle.height;
      image.runtimeStyle.width = 'auto';
      image.runtimeStyle.height = 'auto';

      // get the original size
      var w = image.width;
      var h = image.height;

      // and remove overides
      image.runtimeStyle.width = oldRuntimeWidth;
      image.runtimeStyle.height = oldRuntimeHeight;

      if (arguments.length == 3) {
        dx = arguments[1];
        dy = arguments[2];
        sx = sy = 0;
        sw = dw = w;
        sh = dh = h;
      } else if (arguments.length == 5) {
        dx = arguments[1];
        dy = arguments[2];
        dw = arguments[3];
        dh = arguments[4];
        sx = sy = 0;
        sw = w;
        sh = h;
      } else if (arguments.length == 9) {
        sx = arguments[1];
        sy = arguments[2];
        sw = arguments[3];
        sh = arguments[4];
        dx = arguments[5];
        dy = arguments[6];
        dw = arguments[7];
        dh = arguments[8];
      } else {
        throw Error('Invalid number of arguments');
      }

      var d = this.getCoords_(dx, dy);

      var w2 = sw / 2;
      var h2 = sh / 2;

      var vmlStr = [];

      var W = 10;
      var H = 10;

      // For some reason that I've now forgotten, using divs didn't work
      vmlStr.push(' <g_vml_:group',
        ' coordsize="', Z * W, ',', Z * H, '"',
        ' coordorigin="0,0"' ,
        ' style="width:', W, 'px;height:', H, 'px;position:absolute;');

      // If filters are necessary (rotation exists), create them
      // filters are bog-slow, so only create them if abbsolutely necessary
      // The following check doesn't account for skews (which don't exist
      // in the canvas spec (yet) anyway.

      if (this.m_[0][0] != 1 || this.m_[0][1]) {
        var filter = [];

        // Note the 12/21 reversal
        filter.push('M11=', this.m_[0][0], ',',
          'M12=', this.m_[1][0], ',',
          'M21=', this.m_[0][1], ',',
          'M22=', this.m_[1][1], ',',
          'Dx=', mr(d.x / Z), ',',
          'Dy=', mr(d.y / Z), '');

        // Bounding box calculation (need to minimize displayed area so that
        // filters don't waste time on unused pixels.
        var max = d;
        var c2 = this.getCoords_(dx + dw, dy);
        var c3 = this.getCoords_(dx, dy + dh);
        var c4 = this.getCoords_(dx + dw, dy + dh);

        max.x = m.max(max.x, c2.x, c3.x, c4.x);
        max.y = m.max(max.y, c2.y, c3.y, c4.y);

        vmlStr.push('padding:0 ', mr(max.x / Z), 'px ', mr(max.y / Z),
          'px 0;filter:progid:DXImageTransform.Microsoft.Matrix(',
          filter.join(''), ", sizingmethod='clip');")
      } else {
        vmlStr.push('top:', mr(d.y / Z), 'px;left:', mr(d.x / Z), 'px;');
      }

      vmlStr.push(' ">' ,
        '<g_vml_:image src="', image.src, '"',
        ' style="width:', Z * dw, 'px;',
        ' height:', Z * dh, 'px;"',
        ' cropleft="', sx / w, '"',
        ' croptop="', sy / h, '"',
        ' cropright="', (w - sx - sw) / w, '"',
        ' cropbottom="', (h - sy - sh) / h, '"',
        ' />',
        '</g_vml_:group>');

      this.element_.insertAdjacentHTML('BeforeEnd',
        vmlStr.join(''));
    };

    contextPrototype.stroke = function(aFill) {
      var lineStr = [];
      var lineOpen = false;
      var a = processStyle(aFill ? this.fillStyle : this.strokeStyle);
      var color = a.color;
      var opacity = a.alpha * this.globalAlpha;

      var W = 10;
      var H = 10;

      lineStr.push('<g_vml_:shape',
        ' filled="', !!aFill, '"',
        ' style="position:absolute;width:', W, 'px;height:', H, 'px;"',
        ' coordorigin="0 0" coordsize="', Z * W, ' ', Z * H, '"',
        ' stroked="', !aFill, '"',
        ' path="');

      var newSeq = false;
      var min = {x: null, y: null};
      var max = {x: null, y: null};

      for (var i = 0; i < this.currentPath_.length; i++) {
        var p = this.currentPath_[i];
        var c;

        switch (p.type) {
          case 'moveTo':
            c = p;
            lineStr.push(' m ', mr(p.x), ',', mr(p.y));
            break;
          case 'lineTo':
            lineStr.push(' l ', mr(p.x), ',', mr(p.y));
            break;
          case 'close':
            lineStr.push(' x ');
            p = null;
            break;
          case 'bezierCurveTo':
            lineStr.push(' c ',
              mr(p.cp1x), ',', mr(p.cp1y), ',',
              mr(p.cp2x), ',', mr(p.cp2y), ',',
              mr(p.x), ',', mr(p.y));
            break;
          case 'at':
          case 'wa':
            lineStr.push(' ', p.type, ' ',
              mr(p.x - this.arcScaleX_ * p.radius), ',',
              mr(p.y - this.arcScaleY_ * p.radius), ' ',
              mr(p.x + this.arcScaleX_ * p.radius), ',',
              mr(p.y + this.arcScaleY_ * p.radius), ' ',
              mr(p.xStart), ',', mr(p.yStart), ' ',
              mr(p.xEnd), ',', mr(p.yEnd));
            break;
        }


        // TODO: Following is broken for curves due to
        //       move to proper paths.

        // Figure out dimensions so we can do gradient fills
        // properly
        if (p) {
          if (min.x == null || p.x < min.x) {
            min.x = p.x;
          }
          if (max.x == null || p.x > max.x) {
            max.x = p.x;
          }
          if (min.y == null || p.y < min.y) {
            min.y = p.y;
          }
          if (max.y == null || p.y > max.y) {
            max.y = p.y;
          }
        }
      }
      lineStr.push(' ">');

      if (!aFill) {
        var lineWidth = this.lineScale_ * this.lineWidth;

        // VML cannot correctly render a line if the width is less than 1px.
        // In that case, we dilute the color to make the line look thinner.
        if (lineWidth < 1) {
          opacity *= lineWidth;
        }

        lineStr.push(
          '<g_vml_:stroke',
          ' opacity="', opacity, '"',
          ' joinstyle="', this.lineJoin, '"',
          ' miterlimit="', this.miterLimit, '"',
          ' endcap="', processLineCap(this.lineCap), '"',
          ' weight="', lineWidth, 'px"',
          ' color="', color, '" />'
        );
      } else if (typeof this.fillStyle == 'object') {
        var fillStyle = this.fillStyle;
        var angle = 0;
        var focus = {x: 0, y: 0};

        // additional offset
        var shift = 0;
        // scale factor for offset
        var expansion = 1;

        if (fillStyle.type_ == 'gradient') {
          var x0 = fillStyle.x0_ / this.arcScaleX_;
          var y0 = fillStyle.y0_ / this.arcScaleY_;
          var x1 = fillStyle.x1_ / this.arcScaleX_;
          var y1 = fillStyle.y1_ / this.arcScaleY_;
          var p0 = this.getCoords_(x0, y0);
          var p1 = this.getCoords_(x1, y1);
          var dx = p1.x - p0.x;
          var dy = p1.y - p0.y;
          angle = Math.atan2(dx, dy) * 180 / Math.PI;

          // The angle should be a non-negative number.
          if (angle < 0) {
            angle += 360;
          }

          // Very small angles produce an unexpected result because they are
          // converted to a scientific notation string.
          if (angle < 1e-6) {
            angle = 0;
          }
        } else {
          var p0 = this.getCoords_(fillStyle.x0_, fillStyle.y0_);
          var width  = max.x - min.x;
          var height = max.y - min.y;
          focus = {
            x: (p0.x - min.x) / width,
            y: (p0.y - min.y) / height
          };

          width  /= this.arcScaleX_ * Z;
          height /= this.arcScaleY_ * Z;
          var dimension = m.max(width, height);
          shift = 2 * fillStyle.r0_ / dimension;
          expansion = 2 * fillStyle.r1_ / dimension - shift;
        }

        // We need to sort the color stops in ascending order by offset,
        // otherwise IE won't interpret it correctly.
        var stops = fillStyle.colors_;
        stops.sort(function(cs1, cs2) {
          return cs1.offset - cs2.offset;
        });

        var length = stops.length;
        var color1 = stops[0].color;
        var color2 = stops[length - 1].color;
        var opacity1 = stops[0].alpha * this.globalAlpha;
        var opacity2 = stops[length - 1].alpha * this.globalAlpha;

        var colors = [];
        for (var i = 0; i < length; i++) {
          var stop = stops[i];
          colors.push(stop.offset * expansion + shift + ' ' + stop.color);
        }

        // When colors attribute is used, the meanings of opacity and o:opacity2
        // are reversed.
        lineStr.push('<g_vml_:fill type="', fillStyle.type_, '"',
          ' method="none" focus="100%"',
          ' color="', color1, '"',
          ' color2="', color2, '"',
          ' colors="', colors.join(','), '"',
          ' opacity="', opacity2, '"',
          ' g_o_:opacity2="', opacity1, '"',
          ' angle="', angle, '"',
          ' focusposition="', focus.x, ',', focus.y, '" />');
      } else {
        lineStr.push('<g_vml_:fill color="', color, '" opacity="', opacity,
          '" />');
      }

      lineStr.push('</g_vml_:shape>');

      this.element_.insertAdjacentHTML('beforeEnd', lineStr.join(''));
    };

    contextPrototype.fill = function() {
      this.stroke(true);
    }

    contextPrototype.closePath = function() {
      this.currentPath_.push({type: 'close'});
    };

    /**
     * @private
     */
    contextPrototype.getCoords_ = function(aX, aY) {
      var m = this.m_;
      return {
        x: Z * (aX * m[0][0] + aY * m[1][0] + m[2][0]) - Z2,
        y: Z * (aX * m[0][1] + aY * m[1][1] + m[2][1]) - Z2
      }
    };

    contextPrototype.save = function() {
      var o = {};
      copyState(this, o);
      this.aStack_.push(o);
      this.mStack_.push(this.m_);
      this.m_ = matrixMultiply(createMatrixIdentity(), this.m_);
    };

    contextPrototype.restore = function() {
      copyState(this.aStack_.pop(), this);
      this.m_ = this.mStack_.pop();
    };

    function matrixIsFinite(m) {
      for (var j = 0; j < 3; j++) {
        for (var k = 0; k < 2; k++) {
          if (!isFinite(m[j][k]) || isNaN(m[j][k])) {
            return false;
          }
        }
      }
      return true;
    }

    function setM(ctx, m, updateLineScale) {
      if (!matrixIsFinite(m)) {
        return;
      }
      ctx.m_ = m;

      if (updateLineScale) {
        // Get the line scale.
        // Determinant of this.m_ means how much the area is enlarged by the
        // transformation. So its square root can be used as a scale factor
        // for width.
        var det = m[0][0] * m[1][1] - m[0][1] * m[1][0];
        ctx.lineScale_ = sqrt(abs(det));
      }
    }

    contextPrototype.translate = function(aX, aY) {
      var m1 = [
        [1,  0,  0],
        [0,  1,  0],
        [aX, aY, 1]
      ];

      setM(this, matrixMultiply(m1, this.m_), false);
    };

    contextPrototype.rotate = function(aRot) {
      var c = mc(aRot);
      var s = ms(aRot);

      var m1 = [
        [c,  s, 0],
        [-s, c, 0],
        [0,  0, 1]
      ];

      setM(this, matrixMultiply(m1, this.m_), false);
    };

    contextPrototype.scale = function(aX, aY) {
      this.arcScaleX_ *= aX;
      this.arcScaleY_ *= aY;
      var m1 = [
        [aX, 0,  0],
        [0,  aY, 0],
        [0,  0,  1]
      ];

      setM(this, matrixMultiply(m1, this.m_), true);
    };

    contextPrototype.transform = function(m11, m12, m21, m22, dx, dy) {
      var m1 = [
        [m11, m12, 0],
        [m21, m22, 0],
        [dx,  dy,  1]
      ];

      setM(this, matrixMultiply(m1, this.m_), true);
    };

    contextPrototype.setTransform = function(m11, m12, m21, m22, dx, dy) {
      var m = [
        [m11, m12, 0],
        [m21, m22, 0],
        [dx,  dy,  1]
      ];

      setM(this, m, true);
    };

    /******** STUBS ********/
    contextPrototype.clip = function() {
      // TODO: Implement
    };

    contextPrototype.arcTo = function() {
      // TODO: Implement
    };

    contextPrototype.createPattern = function() {
      return new CanvasPattern_;
    };

    // Gradient / Pattern Stubs
    function CanvasGradient_(aType) {
      this.type_ = aType;
      this.x0_ = 0;
      this.y0_ = 0;
      this.r0_ = 0;
      this.x1_ = 0;
      this.y1_ = 0;
      this.r1_ = 0;
      this.colors_ = [];
    }

    CanvasGradient_.prototype.addColorStop = function(aOffset, aColor) {
      aColor = processStyle(aColor);
      this.colors_.push({offset: aOffset,
        color: aColor.color,
        alpha: aColor.alpha});
    };

    function CanvasPattern_() {}

    // set up externs
    G_vmlCanvasManager = G_vmlCanvasManager_;
    CanvasRenderingContext2D = CanvasRenderingContext2D_;
    CanvasGradient = CanvasGradient_;
    CanvasPattern = CanvasPattern_;

  })();

} // if



/*!jQuery Knob*/
/**
 * Downward compatible, touchable dial
 *
 * Version: 1.2.0 (15/07/2012)
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2012 Anthony Terrien
 * Under MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Thanks to vor, eskimoblood, spiffistan, FabrizioC
 */
(function($) {

  /**
   * Kontrol library
   */
  "use strict";

  /**
   * Definition of globals and core
   */
  var k = {}, // kontrol
    max = Math.max,
    min = Math.min;

  k.c = {};
  k.c.d = $(document);
  k.c.t = function (e) {
    return e.originalEvent.touches.length - 1;
  };

  /**
   * Kontrol Object
   *
   * Definition of an abstract UI control
   *
   * Each concrete component must call this one.
   * <code>
   * k.o.call(this);
   * </code>
   */
  k.o = function () {
    var s = this;

    this.o = null; // array of options
    this.$ = null; // jQuery wrapped element
    this.i = null; // mixed HTMLInputElement or array of HTMLInputElement
    this.g = null; // deprecated 2D graphics context for 'pre-rendering'
    this.v = null; // value ; mixed array or integer
    this.cv = null; // change value ; not commited value
    this.x = 0; // canvas x position
    this.y = 0; // canvas y position
    this.w = 0; // canvas width
    this.h = 0; // canvas height
    this.$c = null; // jQuery canvas element
    this.c = null; // rendered canvas context
    this.t = 0; // touches index
    this.isInit = false;
    this.fgColor = null; // main color
    this.pColor = null; // previous color
    this.dH = null; // draw hook
    this.cH = null; // change hook
    this.eH = null; // cancel hook
    this.rH = null; // release hook
    this.scale = 1; // scale factor
    this.relative = false;
    this.relativeWidth = false;
    this.relativeHeight = false;
    this.$div = null; // component div

    this.run = function () {
      var cf = function (e, conf) {
        var k;
        for (k in conf) {
          s.o[k] = conf[k];
        }
        s._carve().init();
        s._configure()
          ._draw();
      };

      if(this.$.data('kontroled')) return;
      this.$.data('kontroled', true);

      this.extend();
      this.o = $.extend(
        {
          // Config
          min : this.$.data('min') || 0,
          max : this.$.data('max') || 100,
          stopper : true,
          readOnly : this.$.data('readonly') || (this.$.attr('readonly') === 'readonly'),

          // UI
          cursor : (this.$.data('cursor') === true && 30) ||
            this.$.data('cursor') || 0,
          thickness : (
            this.$.data('thickness') &&
            Math.max(Math.min(this.$.data('thickness'), 1), 0.01)
          ) || 0.35,
          lineCap : this.$.data('linecap') || 'butt',
          width : this.$.data('width') || 200,
          height : this.$.data('height') || 200,
          displayInput : this.$.data('displayinput') == null || this.$.data('displayinput'),
          displayPrevious : this.$.data('displayprevious'),
          fgColor : this.$.data('fgcolor') || '#87CEEB',
          inputColor: this.$.data('inputcolor'),
          font: this.$.data('font') || 'yekan',
          fontWeight: this.$.data('font-weight') || 'bold',
          inline : false,
          step : this.$.data('step') || 1,

          // Hooks
          draw : null, // function () {}
          change : null, // function (value) {}
          cancel : null, // function () {}
          release : null // function (value) {}
        }, this.o
      );

      // finalize options
      if(!this.o.inputColor) {
        this.o.inputColor = this.o.fgColor;
      }

      // routing value
      if(this.$.is('fieldset')) {

        // fieldset = array of integer
        this.v = {};
        this.i = this.$.find('input');
        this.i.each(function(k) {
          var $this = $(this);
          s.i[k] = $this;
          s.v[k] = $this.val();

          $this.bind(
            'change blur'
            , function () {
              var val = {};
              val[k] = $this.val();
              s.val(val);
            }
          );
        });
        this.$.find('legend').remove();

      } else {

        // input = integer
        this.i = this.$;
        this.v = this.$.val();
        (this.v === '') && (this.v = this.o.min);

        this.$.bind(
          'change blur'
          , function () {
            s.val(s._validate(s.$.val()));
          }
        );

      }

      (!this.o.displayInput) && this.$.hide();

      // adds needed DOM elements (canvas, div)
      this.$c = $(document.createElement('canvas')).attr({
        width: this.o.width,
        height: this.o.height
      });

      // wraps all elements in a div
      // add to DOM before Canvas init is triggered
      this.$div = $('<div style="'
        + (this.o.inline ? 'display:inline;' : '')
        + 'width:' + this.o.width + 'px;height:' + this.o.height + 'px;'
        + '"></div>');

      this.$.wrap(this.$div).before(this.$c);
      this.$div = this.$.parent();

      if (typeof G_vmlCanvasManager !== 'undefined') {
        G_vmlCanvasManager.initElement(this.$c[0]);
      }

      this.c = this.$c[0].getContext ? this.$c[0].getContext('2d') : null;

      if (!this.c) {
        throw {
          name:        "CanvasNotSupportedException",
          message:     "Canvas not supported. Please use excanvas on IE8.0.",
          toString:    function(){return this.name + ": " + this.message}
        }
      }

      // hdpi support
      this.scale = (window.devicePixelRatio || 1) /
        (
          this.c.webkitBackingStorePixelRatio ||
          this.c.mozBackingStorePixelRatio ||
          this.c.msBackingStorePixelRatio ||
          this.c.oBackingStorePixelRatio ||
          this.c.backingStorePixelRatio || 1
        );

      // detects relative width / height
      this.relativeWidth = ((this.o.width % 1 !== 0) &&
        this.o.width.indexOf('%'));
      this.relativeHeight = ((this.o.height % 1 !== 0) &&
        this.o.height.indexOf('%'));
      this.relative = (this.relativeWidth || this.relativeHeight);

      // computes size and carves the component
      this._carve();

      // prepares props for transaction
      if (this.v instanceof Object) {
        this.cv = {};
        this.copy(this.v, this.cv);
      } else {
        this.cv = this.v;
      }

      // binds configure event
      this.$
        .bind("configure", cf)
        .parent()
        .bind("configure", cf);

      // finalize init
      this._listen()
        ._configure()
        ._xy()
        .init();

      this.isInit = true;

      // the most important !
      this._draw();

      return this;
    };

    this._carve = function() {
      if(this.relative) {
        var w = this.relativeWidth ?
          this.$div.parent().width() *
          parseInt(this.o.width) / 100 :
          this.$div.parent().width(),
          h = this.relativeHeight ?
            this.$div.parent().height() *
            parseInt(this.o.height) / 100 :
            this.$div.parent().height();

        // apply relative
        this.w = this.h = Math.min(w, h);
      } else {
        this.w = this.o.width;
        this.h = this.o.height;
      }

      // finalize div
      this.$div.css({
        'width': this.w + 'px',
        'height': this.h + 'px'
      });

      // finalize canvas with computed width
      this.$c.attr({
        width: this.w,
        height: this.h
      });

      // scaling
      if (this.scale !== 1) {
        this.$c[0].width = this.$c[0].width * this.scale;
        this.$c[0].height = this.$c[0].height * this.scale;
        this.$c.width(this.w);
        this.$c.height(this.h);
      }

      return this;
    }

    this._draw = function () {

      // canvas pre-rendering
      var d = true;

      s.g = s.c;

      s.clear();

      s.dH
      && (d = s.dH());

      (d !== false) && s.draw();

    };

    this._touch = function (e) {

      var touchMove = function (e) {

        var v = s.xy2val(
          e.originalEvent.touches[s.t].pageX,
          e.originalEvent.touches[s.t].pageY
        );

        if (v == s.cv) return;

        if (s.cH && (s.cH(v) === false)) return;

        s.change(s._validate(v));
        s._draw();
      };

      // get touches index
      this.t = k.c.t(e);

      // First touch
      touchMove(e);

      // Touch events listeners
      k.c.d
        .bind("touchmove.k", touchMove)
        .bind(
          "touchend.k"
          , function () {
            k.c.d.unbind('touchmove.k touchend.k');
            s.val(s.cv);
          }
        );

      return this;
    };

    this._mouse = function (e) {

      var mouseMove = function (e) {
        var v = s.xy2val(e.pageX, e.pageY);

        if (v == s.cv) return;

        if (s.cH && (s.cH(v) === false)) return;

        s.change(s._validate(v));
        s._draw();
      };

      // First click
      mouseMove(e);

      // Mouse events listeners
      k.c.d
        .bind("mousemove.k", mouseMove)
        .bind(
          // Escape key cancel current change
          "keyup.k"
          , function (e) {
            if (e.keyCode === 27) {
              k.c.d.unbind("mouseup.k mousemove.k keyup.k");

              if (
                s.eH
                && (s.eH() === false)
              ) return;

              s.cancel();
            }
          }
        )
        .bind(
          "mouseup.k"
          , function (e) {
            k.c.d.unbind('mousemove.k mouseup.k keyup.k');
            s.val(s.cv);
          }
        );

      return this;
    };

    this._xy = function () {
      var o = this.$c.offset();
      this.x = o.left;
      this.y = o.top;
      return this;
    };

    this._listen = function () {

      if (!this.o.readOnly) {
        this.$c
          .bind(
            "mousedown"
            , function (e) {
              e.preventDefault();
              s._xy()._mouse(e);
            }
          )
          .bind(
            "touchstart"
            , function (e) {
              e.preventDefault();
              s._xy()._touch(e);
            }
          );

        this.listen();
      } else {
        this.$.attr('readonly', 'readonly');
      }

      if(this.relative) {
        $(window).resize(function() {
          s._carve()
            .init();
          s._draw();
        });
      }

      return this;
    };

    this._configure = function () {

      // Hooks
      if (this.o.draw) this.dH = this.o.draw;
      if (this.o.change) this.cH = this.o.change;
      if (this.o.cancel) this.eH = this.o.cancel;
      if (this.o.release) this.rH = this.o.release;

      if (this.o.displayPrevious) {
        this.pColor = this.h2rgba(this.o.fgColor, "0.4");
        this.fgColor = this.h2rgba(this.o.fgColor, "0.6");
      } else {
        this.fgColor = this.o.fgColor;
      }

      return this;
    };

    this._clear = function () {
      this.$c[0].width = this.$c[0].width;
    };

    this._validate = function(v) {
      return (~~ (((v < 0) ? -0.5 : 0.5) + (v/this.o.step))) * this.o.step;
    };

    // Abstract methods
    this.listen = function () {}; // on start, one time
    this.extend = function () {}; // each time configure triggered
    this.init = function () {}; // each time configure triggered
    this.change = function (v) {}; // on change
    this.val = function (v) {}; // on release
    this.xy2val = function (x, y) {}; //
    this.draw = function () {}; // on change / on release
    this.clear = function () { this._clear(); };

    // Utils
    this.h2rgba = function (h, a) {
      var rgb;
      h = h.substring(1,7)
      rgb = [parseInt(h.substring(0,2),16)
        ,parseInt(h.substring(2,4),16)
        ,parseInt(h.substring(4,6),16)];
      return "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + a + ")";
    };

    this.copy = function (f, t) {
      for (var i in f) { t[i] = f[i]; }
    };
  };


  /**
   * k.Dial
   */
  k.Dial = function () {
    k.o.call(this);

    this.startAngle = null;
    this.xy = null;
    this.radius = null;
    this.lineWidth = null;
    this.cursorExt = null;
    this.w2 = null;
    this.PI2 = 2*Math.PI;

    this.extend = function () {
      this.o = $.extend(
        {
          bgColor : this.$.data('bgcolor') || '#EEEEEE',
          angleOffset : this.$.data('angleoffset') || 0,
          angleArc : this.$.data('anglearc') || 360,
          inline : true
        }, this.o
      );
    };

    this.val = function (v, triggerRelease) {
      if (null != v) {

        if (
          triggerRelease !== false && (v != this.v) && this.rH &&
          (this.rH(v) === false)
        ) return;

        this.cv = this.o.stopper ? max(min(v, this.o.max), this.o.min) : v;
        this.v = this.cv;
        this.$.val(this.v);
        this._draw();
      } else {
        return this.v;
      }
    };

    this.xy2val = function (x, y) {
      var a, ret;

      a = Math.atan2(
        x - (this.x + this.w2)
        , - (y - this.y - this.w2)
      ) - this.angleOffset;

      if(this.angleArc != this.PI2 && (a < 0) && (a > -0.5)) {
        // if isset angleArc option, set to min if .5 under min
        a = 0;
      } else if (a < 0) {
        a += this.PI2;
      }

      ret = ~~ (0.5 + (a * (this.o.max - this.o.min) / this.angleArc))
        + this.o.min;

      this.o.stopper && (ret = max(min(ret, this.o.max), this.o.min));

      return ret;
    };

    this.listen = function () {
      // bind MouseWheel
      var s = this, mwTimerStop, mwTimerRelease,
        mw = function (e) {
          e.preventDefault();

          var ori = e.originalEvent
            ,deltaX = ori.detail || ori.wheelDeltaX
            ,deltaY = ori.detail || ori.wheelDeltaY
            ,v = s._validate(s.$.val())
            + (deltaX>0 || deltaY>0 ? s.o.step : deltaX<0 || deltaY<0 ? -s.o.step : 0);

          v = max(min(v, s.o.max), s.o.min);

          s.val(v, false);

          if(s.rH) {
            // Handle mousewheel stop
            clearTimeout(mwTimerStop);
            mwTimerStop = setTimeout(function() {
              s.rH(v);
              mwTimerStop = null;
            }, 100);

            // Handle mousewheel releases
            if(!mwTimerRelease) {
              mwTimerRelease = setTimeout(function() {
                if(mwTimerStop) s.rH(v);
                mwTimerRelease = null;
              }, 200);
            }
          }
        }
        , kval, to, m = 1, kv = {37:-s.o.step, 38:s.o.step, 39:s.o.step, 40:-s.o.step};

      this.$
        .bind(
          "keydown"
          ,function (e) {
            var kc = e.keyCode;

            // numpad support
            if(kc >= 96 && kc <= 105) {
              kc = e.keyCode = kc - 48;
            }

            kval = parseInt(String.fromCharCode(kc));

            if (isNaN(kval)) {

              (kc !== 13)         // enter
              && (kc !== 8)       // bs
              && (kc !== 9)       // tab
              && (kc !== 189)     // -
              && e.preventDefault();

              // arrows
              if ($.inArray(kc,[37,38,39,40]) > -1) {
                e.preventDefault();

                var v = parseInt(s.$.val()) + kv[kc] * m;

                s.o.stopper && (v = max(min(v, s.o.max), s.o.min));

                s.change(v);
                s._draw();

                // long time keydown speed-up
                to = window.setTimeout(
                  function () { m *= 2; }, 30
                );
              }
            }
          }
        )
        .bind(
          "keyup"
          ,function (e) {
            if (isNaN(kval)) {
              if (to) {
                window.clearTimeout(to);
                to = null;
                m = 1;
                s.val(s.$.val());
              }
            } else {
              // kval postcond
              (s.$.val() > s.o.max && s.$.val(s.o.max))
              || (s.$.val() < s.o.min && s.$.val(s.o.min));
            }

          }
        );

      this.$c.bind("mousewheel DOMMouseScroll", mw);
      this.$.bind("mousewheel DOMMouseScroll", mw)
    };

    this.init = function () {

      if (
        this.v < this.o.min
        || this.v > this.o.max
      ) this.v = this.o.min;

      this.$.val(this.v);
      this.w2 = this.w / 2;
      this.cursorExt = this.o.cursor / 100;
      this.xy = this.w2 * this.scale;
      this.lineWidth = this.xy * this.o.thickness;
      this.lineCap = this.o.lineCap;
      this.radius = this.xy - this.lineWidth / 2;

      this.o.angleOffset
      && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset);

      this.o.angleArc
      && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc);

      // deg to rad
      this.angleOffset = this.o.angleOffset * Math.PI / 180;
      this.angleArc = this.o.angleArc * Math.PI / 180;

      // compute start and end angles
      this.startAngle = 1.5 * Math.PI + this.angleOffset;
      this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;

      var s = max(
        String(Math.abs(this.o.max)).length
        , String(Math.abs(this.o.min)).length
        , 2
      ) + 2;

      this.o.displayInput
      && this.i.css({
        'width' : ((this.w / 2 + 4) >> 0) + 'px'
        ,'height' : ((this.w / 3) >> 0) + 'px'
        ,'position' : 'absolute'
        ,'vertical-align' : 'middle'
        ,'margin-top' : ((this.w / 3) >> 0) + 'px'
        ,'margin-right' : '-' + ((this.w * 3 / 4 + 2) >> 0) + 'px'
        ,'border' : 0
        ,'background' : 'none'
        ,'font' : this.o.fontWeight + ' ' + ((this.w / s) >> 0) + 'px ' + this.o.font
        ,'text-align' : 'center'
        ,'color' : this.o.inputColor || this.o.fgColor
        ,'padding' : '0px'
        ,'-webkit-appearance': 'none'
      })
      || this.i.css({
        'width' : '0px'
        ,'visibility' : 'hidden'
      });
    };

    this.change = function (v) {
      this.cv = v;
      this.$.val(v);
    };

    this.angle = function (v) {
      return (v - this.o.min) * this.angleArc / (this.o.max - this.o.min);
    };

    this.draw = function () {

      var c = this.g,                 // context
        a = this.angle(this.cv)    // Angle
        , sat = this.startAngle     // Start angle
        , eat = sat + a             // End angle
        , sa, ea                    // Previous angles
        , r = 1;

      c.lineWidth = this.lineWidth;

      c.lineCap = this.lineCap;

      this.o.cursor
      && (sat = eat - this.cursorExt)
      && (eat = eat + this.cursorExt);

      c.beginPath();
      c.strokeStyle = this.o.bgColor;
      c.arc(this.xy, this.xy, this.radius, this.endAngle - 0.00001, this.startAngle + 0.00001, true);
      c.stroke();

      if (this.o.displayPrevious) {
        ea = this.startAngle + this.angle(this.v);
        sa = this.startAngle;
        this.o.cursor
        && (sa = ea - this.cursorExt)
        && (ea = ea + this.cursorExt);

        c.beginPath();
        c.strokeStyle = this.pColor;
        c.arc(this.xy, this.xy, this.radius, sa - 0.00001, ea + 0.00001, false);
        c.stroke();
        r = (this.cv == this.v);
      }

      c.beginPath();
      c.strokeStyle = r ? this.o.fgColor : this.fgColor ;
      c.arc(this.xy, this.xy, this.radius, sat - 0.00001, eat + 0.00001, false);
      c.stroke();
    };

    this.cancel = function () {
      this.val(this.v);
    };
  };

  $.fn.dial = $.fn.knob = function (o) {
    return this.each(
      function () {
        var d = new k.Dial();
        d.o = o;
        d.$ = $(this);
        d.run();
      }
    ).parent();
  };

})(jQuery);



/*!
 DataTables 1.10.16
 ©2008-2017 SpryMedia Ltd - datatables.net/license
*/
(function (h) {
  "function" === typeof define && define.amd ? define(["jquery"], function (E) {
    return h(E, window, document)
  }) : "object" === typeof exports ? module.exports = function (E, G) {
    E || (E = window);
    G || (G = "undefined" !== typeof window ? require("jquery") : require("jquery")(E));
    return h(G, E, E.document)
  } : h(jQuery, window, document)
})(function (h, E, G, k) {
  function X(a) {
    var b, c, d = {};
    h.each(a, function (e) {
      if ((b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ")) c = e.replace(b[0], b[2].toLowerCase()),
        d[c] = e, "o" === b[1] && X(a[e])
    });
    a._hungarianMap = d
  }

  function I(a, b, c) {
    a._hungarianMap || X(a);
    var d;
    h.each(b, function (e) {
      d = a._hungarianMap[e];
      if (d !== k && (c || b[d] === k)) "o" === d.charAt(0) ? (b[d] || (b[d] = {}), h.extend(!0, b[d], b[e]), I(a[d], b[d], c)) : b[d] = b[e]
    })
  }

  function Ca(a) {
    var b = m.defaults.oLanguage,
      c = a.sZeroRecords;
    !a.sEmptyTable && (c && "No data available in table" === b.sEmptyTable) && F(a, a, "sZeroRecords", "sEmptyTable");
    !a.sLoadingRecords && (c && "Loading..." === b.sLoadingRecords) && F(a, a, "sZeroRecords", "sLoadingRecords");
    a.sInfoThousands && (a.sThousands = a.sInfoThousands);
    (a = a.sDecimal) && cb(a)
  }

  function db(a) {
    A(a, "ordering", "bSort");
    A(a, "orderMulti", "bSortMulti");
    A(a, "orderClasses", "bSortClasses");
    A(a, "orderCellsTop", "bSortCellsTop");
    A(a, "order", "aaSorting");
    A(a, "orderFixed", "aaSortingFixed");
    A(a, "paging", "bPaginate");
    A(a, "pagingType", "sPaginationType");
    A(a, "pageLength", "iDisplayLength");
    A(a, "searching", "bFilter");
    "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : "");
    "boolean" === typeof a.scrollX && (a.scrollX =
      a.scrollX ? "100%" : "");
    if (a = a.aoSearchCols)
      for (var b = 0, c = a.length; b < c; b++) a[b] && I(m.models.oSearch, a[b])
  }

  function eb(a) {
    A(a, "orderable", "bSortable");
    A(a, "orderData", "aDataSort");
    A(a, "orderSequence", "asSorting");
    A(a, "orderDataType", "sortDataType");
    var b = a.aDataSort;
    "number" === typeof b && !h.isArray(b) && (a.aDataSort = [b])
  }

  function fb(a) {
    if (!m.__browser) {
      var b = {};
      m.__browser = b;
      var c = h("<div/>").css({
          position: "fixed",
          top: 0,
          left: -1 * h(E).scrollLeft(),
          height: 1,
          width: 1,
          overflow: "hidden"
        }).append(h("<div/>").css({
          position: "absolute",
          top: 1,
          left: 1,
          width: 100,
          overflow: "scroll"
        }).append(h("<div/>").css({
          width: "100%",
          height: 10
        }))).appendTo("body"),
        d = c.children(),
        e = d.children();
      b.barWidth = d[0].offsetWidth - d[0].clientWidth;
      b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
      b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
      b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
      c.remove()
    }
    h.extend(a.oBrowser, m.__browser);
    a.oScroll.iBarWidth = m.__browser.barWidth
  }

  function gb(a, b, c, d, e, f) {
    var g, j = !1;
    c !== k && (g = c, j = !0);
    for (; d !==
           e;) a.hasOwnProperty(d) && (g = j ? b(g, a[d], d, a) : a[d], j = !0, d += f);
    return g
  }

  function Da(a, b) {
    var c = m.defaults.column,
      d = a.aoColumns.length,
      c = h.extend({}, m.models.oColumn, c, {
        nTh: b ? b : G.createElement("th"),
        sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
        aDataSort: c.aDataSort ? c.aDataSort : [d],
        mData: c.mData ? c.mData : d,
        idx: d
      });
    a.aoColumns.push(c);
    c = a.aoPreSearchCols;
    c[d] = h.extend({}, m.models.oSearch, c[d]);
    ja(a, d, h(b).data())
  }

  function ja(a, b, c) {
    var b = a.aoColumns[b],
      d = a.oClasses,
      e = h(b.nTh);
    if (!b.sWidthOrig) {
      b.sWidthOrig =
        e.attr("width") || null;
      var f = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
      f && (b.sWidthOrig = f[1])
    }
    c !== k && null !== c && (eb(c), I(m.defaults.column, c), c.mDataProp !== k && !c.mData && (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), c.sClass && e.addClass(c.sClass), h.extend(b, c), F(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== k && (b.aDataSort = [c.iDataSort]), F(b, c, "aDataSort"));
    var g = b.mData,
      j = Q(g),
      i = b.mRender ? Q(b.mRender) : null,
      c = function (a) {
        return "string" ===
          typeof a && -1 !== a.indexOf("@")
      };
    b._bAttrSrc = h.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));
    b._setter = null;
    b.fnGetData = function (a, b, c) {
      var d = j(a, b, k, c);
      return i && b ? i(d, b, a, c) : d
    };
    b.fnSetData = function (a, b, c) {
      return R(g)(a, b, c)
    };
    "number" !== typeof g && (a._rowReadObject = !0);
    a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone));
    a = -1 !== h.inArray("asc", b.asSorting);
    c = -1 !== h.inArray("desc", b.asSorting);
    !b.bSortable || !a && !c ? (b.sSortingClass = d.sSortableNone, b.sSortingClassJUI = "") : a && !c ? (b.sSortingClass =
      d.sSortableAsc, b.sSortingClassJUI = d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI)
  }

  function Y(a) {
    if (!1 !== a.oFeatures.bAutoWidth) {
      var b = a.aoColumns;
      Ea(a);
      for (var c = 0, d = b.length; c < d; c++) b[c].nTh.style.width = b[c].sWidth
    }
    b = a.oScroll;
    ("" !== b.sY || "" !== b.sX) && ka(a);
    r(a, null, "column-sizing", [a])
  }

  function Z(a, b) {
    var c = la(a, "bVisible");
    return "number" === typeof c[b] ? c[b] : null
  }

  function $(a, b) {
    var c =
        la(a, "bVisible"),
      c = h.inArray(b, c);
    return -1 !== c ? c : null
  }

  function aa(a) {
    var b = 0;
    h.each(a.aoColumns, function (a, d) {
      d.bVisible && "none" !== h(d.nTh).css("display") && b++
    });
    return b
  }

  function la(a, b) {
    var c = [];
    h.map(a.aoColumns, function (a, e) {
      a[b] && c.push(e)
    });
    return c
  }

  function Fa(a) {
    var b = a.aoColumns,
      c = a.aoData,
      d = m.ext.type.detect,
      e, f, g, j, i, h, l, q, t;
    e = 0;
    for (f = b.length; e < f; e++)
      if (l = b[e], t = [], !l.sType && l._sManualType) l.sType = l._sManualType;
      else if (!l.sType) {
        g = 0;
        for (j = d.length; g < j; g++) {
          i = 0;
          for (h = c.length; i < h; i++) {
            t[i] ===
            k && (t[i] = B(a, i, e, "type"));
            q = d[g](t[i], a);
            if (!q && g !== d.length - 1) break;
            if ("html" === q) break
          }
          if (q) {
            l.sType = q;
            break
          }
        }
        l.sType || (l.sType = "string")
      }
  }

  function hb(a, b, c, d) {
    var e, f, g, j, i, n, l = a.aoColumns;
    if (b)
      for (e = b.length - 1; 0 <= e; e--) {
        n = b[e];
        var q = n.targets !== k ? n.targets : n.aTargets;
        h.isArray(q) || (q = [q]);
        f = 0;
        for (g = q.length; f < g; f++)
          if ("number" === typeof q[f] && 0 <= q[f]) {
            for (; l.length <= q[f];) Da(a);
            d(q[f], n)
          } else if ("number" === typeof q[f] && 0 > q[f]) d(l.length + q[f], n);
          else if ("string" === typeof q[f]) {
            j = 0;
            for (i = l.length; j <
            i; j++)("_all" == q[f] || h(l[j].nTh).hasClass(q[f])) && d(j, n)
          }
      }
    if (c) {
      e = 0;
      for (a = c.length; e < a; e++) d(e, c[e])
    }
  }

  function M(a, b, c, d) {
    var e = a.aoData.length,
      f = h.extend(!0, {}, m.models.oRow, {
        src: c ? "dom" : "data",
        idx: e
      });
    f._aData = b;
    a.aoData.push(f);
    for (var g = a.aoColumns, j = 0, i = g.length; j < i; j++) g[j].sType = null;
    a.aiDisplayMaster.push(e);
    b = a.rowIdFn(b);
    b !== k && (a.aIds[b] = f);
    (c || !a.oFeatures.bDeferRender) && Ga(a, e, c, d);
    return e
  }

  function ma(a, b) {
    var c;
    b instanceof h || (b = h(b));
    return b.map(function (b, e) {
      c = Ha(a, e);
      return M(a,
        c.data, e, c.cells)
    })
  }

  function B(a, b, c, d) {
    var e = a.iDraw,
      f = a.aoColumns[c],
      g = a.aoData[b]._aData,
      j = f.sDefaultContent,
      i = f.fnGetData(g, d, {
        settings: a,
        row: b,
        col: c
      });
    if (i === k) return a.iDrawError != e && null === j && (J(a, 0, "Requested unknown parameter " + ("function" == typeof f.mData ? "{function}" : "'" + f.mData + "'") + " for row " + b + ", column " + c, 4), a.iDrawError = e), j;
    if ((i === g || null === i) && null !== j && d !== k) i = j;
    else if ("function" === typeof i) return i.call(g);
    return null === i && "display" == d ? "" : i
  }

  function ib(a, b, c, d) {
    a.aoColumns[c].fnSetData(a.aoData[b]._aData,
      d, {
        settings: a,
        row: b,
        col: c
      })
  }

  function Ia(a) {
    return h.map(a.match(/(\\.|[^\.])+/g) || [""], function (a) {
      return a.replace(/\\\./g, ".")
    })
  }

  function Q(a) {
    if (h.isPlainObject(a)) {
      var b = {};
      h.each(a, function (a, c) {
        c && (b[a] = Q(c))
      });
      return function (a, c, f, g) {
        var j = b[c] || b._;
        return j !== k ? j(a, c, f, g) : a
      }
    }
    if (null === a) return function (a) {
      return a
    };
    if ("function" === typeof a) return function (b, c, f, g) {
      return a(b, c, f, g)
    };
    if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
      var c = function (a,
                        b, f) {
        var g, j;
        if ("" !== f) {
          j = Ia(f);
          for (var i = 0, n = j.length; i < n; i++) {
            f = j[i].match(ba);
            g = j[i].match(U);
            if (f) {
              j[i] = j[i].replace(ba, "");
              "" !== j[i] && (a = a[j[i]]);
              g = [];
              j.splice(0, i + 1);
              j = j.join(".");
              if (h.isArray(a)) {
                i = 0;
                for (n = a.length; i < n; i++) g.push(c(a[i], b, j))
              }
              a = f[0].substring(1, f[0].length - 1);
              a = "" === a ? g : g.join(a);
              break
            } else if (g) {
              j[i] = j[i].replace(U, "");
              a = a[j[i]]();
              continue
            }
            if (null === a || a[j[i]] === k) return k;
            a = a[j[i]]
          }
        }
        return a
      };
      return function (b, e) {
        return c(b, e, a)
      }
    }
    return function (b) {
      return b[a]
    }
  }

  function R(a) {
    if (h.isPlainObject(a)) return R(a._);
    if (null === a) return function () {};
    if ("function" === typeof a) return function (b, d, e) {
      a(b, "set", d, e)
    };
    if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
      var b = function (a, d, e) {
        var e = Ia(e),
          f;
        f = e[e.length - 1];
        for (var g, j, i = 0, n = e.length - 1; i < n; i++) {
          g = e[i].match(ba);
          j = e[i].match(U);
          if (g) {
            e[i] = e[i].replace(ba, "");
            a[e[i]] = [];
            f = e.slice();
            f.splice(0, i + 1);
            g = f.join(".");
            if (h.isArray(d)) {
              j = 0;
              for (n = d.length; j < n; j++) f = {}, b(f, d[j], g), a[e[i]].push(f)
            } else a[e[i]] = d;
            return
          }
          j && (e[i] = e[i].replace(U,
            ""), a = a[e[i]](d));
          if (null === a[e[i]] || a[e[i]] === k) a[e[i]] = {};
          a = a[e[i]]
        }
        if (f.match(U)) a[f.replace(U, "")](d);
        else a[f.replace(ba, "")] = d
      };
      return function (c, d) {
        return b(c, d, a)
      }
    }
    return function (b, d) {
      b[a] = d
    }
  }

  function Ja(a) {
    return D(a.aoData, "_aData")
  }

  function na(a) {
    a.aoData.length = 0;
    a.aiDisplayMaster.length = 0;
    a.aiDisplay.length = 0;
    a.aIds = {}
  }

  function oa(a, b, c) {
    for (var d = -1, e = 0, f = a.length; e < f; e++) a[e] == b ? d = e : a[e] > b && a[e]--; - 1 != d && c === k && a.splice(d, 1)
  }

  function ca(a, b, c, d) {
    var e = a.aoData[b],
      f, g = function (c, d) {
        for (; c.childNodes.length;) c.removeChild(c.firstChild);
        c.innerHTML = B(a, b, d, "display")
      };
    if ("dom" === c || (!c || "auto" === c) && "dom" === e.src) e._aData = Ha(a, e, d, d === k ? k : e._aData).data;
    else {
      var j = e.anCells;
      if (j)
        if (d !== k) g(j[d], d);
        else {
          c = 0;
          for (f = j.length; c < f; c++) g(j[c], c)
        }
    }
    e._aSortData = null;
    e._aFilterData = null;
    g = a.aoColumns;
    if (d !== k) g[d].sType = null;
    else {
      c = 0;
      for (f = g.length; c < f; c++) g[c].sType = null;
      Ka(a, e)
    }
  }

  function Ha(a, b, c, d) {
    var e = [],
      f = b.firstChild,
      g, j, i = 0,
      n, l = a.aoColumns,
      q = a._rowReadObject,
      d = d !== k ? d : q ? {} : [],
      t = function (a, b) {
        if ("string" === typeof a) {
          var c = a.indexOf("@"); -
            1 !== c && (c = a.substring(c + 1), R(a)(d, b.getAttribute(c)))
        }
      },
      m = function (a) {
        if (c === k || c === i) j = l[i], n = h.trim(a.innerHTML), j && j._bAttrSrc ? (R(j.mData._)(d, n), t(j.mData.sort, a), t(j.mData.type, a), t(j.mData.filter, a)) : q ? (j._setter || (j._setter = R(j.mData)), j._setter(d, n)) : d[i] = n;
        i++
      };
    if (f)
      for (; f;) {
        g = f.nodeName.toUpperCase();
        if ("TD" == g || "TH" == g) m(f), e.push(f);
        f = f.nextSibling
      } else {
      e = b.anCells;
      f = 0;
      for (g = e.length; f < g; f++) m(e[f])
    }
    if (b = b.firstChild ? b : b.nTr)(b = b.getAttribute("id")) && R(a.rowId)(d, b);
    return {
      data: d,
      cells: e
    }
  }

  function Ga(a, b, c, d) {
    var e = a.aoData[b],
      f = e._aData,
      g = [],
      j, i, n, l, q;
    if (null === e.nTr) {
      j = c || G.createElement("tr");
      e.nTr = j;
      e.anCells = g;
      j._DT_RowIndex = b;
      Ka(a, e);
      l = 0;
      for (q = a.aoColumns.length; l < q; l++) {
        n = a.aoColumns[l];
        i = c ? d[l] : G.createElement(n.sCellType);
        i._DT_CellIndex = {
          row: b,
          column: l
        };
        g.push(i);
        if ((!c || n.mRender || n.mData !== l) && (!h.isPlainObject(n.mData) || n.mData._ !== l + ".display")) i.innerHTML = B(a, b, l, "display");
        n.sClass && (i.className += " " + n.sClass);
        n.bVisible && !c ? j.appendChild(i) : !n.bVisible && c && i.parentNode.removeChild(i);
        n.fnCreatedCell && n.fnCreatedCell.call(a.oInstance, i, B(a, b, l), f, b, l)
      }
      r(a, "aoRowCreatedCallback", null, [j, f, b])
    }
    e.nTr.setAttribute("role", "row")
  }

  function Ka(a, b) {
    var c = b.nTr,
      d = b._aData;
    if (c) {
      var e = a.rowIdFn(d);
      e && (c.id = e);
      d.DT_RowClass && (e = d.DT_RowClass.split(" "), b.__rowc = b.__rowc ? qa(b.__rowc.concat(e)) : e, h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
      d.DT_RowAttr && h(c).attr(d.DT_RowAttr);
      d.DT_RowData && h(c).data(d.DT_RowData)
    }
  }

  function jb(a) {
    var b, c, d, e, f, g = a.nTHead,
      j = a.nTFoot,
      i = 0 ===
        h("th, td", g).length,
      n = a.oClasses,
      l = a.aoColumns;
    i && (e = h("<tr/>").appendTo(g));
    b = 0;
    for (c = l.length; b < c; b++) f = l[b], d = h(f.nTh).addClass(f.sClass), i && d.appendTo(e), a.oFeatures.bSort && (d.addClass(f.sSortingClass), !1 !== f.bSortable && (d.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), La(a, f.nTh, b))), f.sTitle != d[0].innerHTML && d.html(f.sTitle), Ma(a, "header")(a, d, f, n);
    i && da(a.aoHeader, g);
    h(g).find(">tr").attr("role", "row");
    h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH);
    h(j).find(">tr>th, >tr>td").addClass(n.sFooterTH);
    if (null !== j) {
      a = a.aoFooter[0];
      b = 0;
      for (c = a.length; b < c; b++) f = l[b], f.nTf = a[b].cell, f.sClass && h(f.nTf).addClass(f.sClass)
    }
  }

  function ea(a, b, c) {
    var d, e, f, g = [],
      j = [],
      i = a.aoColumns.length,
      n;
    if (b) {
      c === k && (c = !1);
      d = 0;
      for (e = b.length; d < e; d++) {
        g[d] = b[d].slice();
        g[d].nTr = b[d].nTr;
        for (f = i - 1; 0 <= f; f--) !a.aoColumns[f].bVisible && !c && g[d].splice(f, 1);
        j.push([])
      }
      d = 0;
      for (e = g.length; d < e; d++) {
        if (a = g[d].nTr)
          for (; f = a.firstChild;) a.removeChild(f);
        f = 0;
        for (b = g[d].length; f < b; f++)
          if (n = i = 1, j[d][f] === k) {
            a.appendChild(g[d][f].cell);
            for (j[d][f] = 1; g[d + i] !== k && g[d][f].cell == g[d + i][f].cell;) j[d + i][f] = 1, i++;
            for (; g[d][f + n] !== k && g[d][f].cell == g[d][f + n].cell;) {
              for (c = 0; c < i; c++) j[d + c][f + n] = 1;
              n++
            }
            h(g[d][f].cell).attr("rowspan", i).attr("colspan", n)
          }
      }
    }
  }

  function N(a) {
    var b = r(a, "aoPreDrawCallback", "preDraw", [a]);
    if (-1 !== h.inArray(!1, b)) C(a, !1);
    else {
      var b = [],
        c = 0,
        d = a.asStripeClasses,
        e = d.length,
        f = a.oLanguage,
        g = a.iInitDisplayStart,
        j = "ssp" == y(a),
        i = a.aiDisplay;
      a.bDrawing = !0;
      g !== k && -1 !== g && (a._iDisplayStart = j ? g : g >= a.fnRecordsDisplay() ? 0 : g, a.iInitDisplayStart = -1);
      var g = a._iDisplayStart,
        n = a.fnDisplayEnd();
      if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, C(a, !1);
      else if (j) {
        if (!a.bDestroying && !kb(a)) return
      } else a.iDraw++;
      if (0 !== i.length) {
        f = j ? a.aoData.length : n;
        for (j = j ? 0 : g; j < f; j++) {
          var l = i[j],
            q = a.aoData[l];
          null === q.nTr && Ga(a, l);
          l = q.nTr;
          if (0 !== e) {
            var t = d[c % e];
            q._sRowStripe != t && (h(l).removeClass(q._sRowStripe).addClass(t), q._sRowStripe = t)
          }
          r(a, "aoRowCallback", null, [l, q._aData, c, j]);
          b.push(l);
          c++
        }
      } else c = f.sZeroRecords, 1 == a.iDraw && "ajax" == y(a) ? c = f.sLoadingRecords :
        f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable), b[0] = h("<tr/>", {
        "class": e ? d[0] : ""
      }).append(h("<td />", {
        valign: "top",
        colSpan: aa(a),
        "class": a.oClasses.sRowEmpty
      }).html(c))[0];
      r(a, "aoHeaderCallback", "header", [h(a.nTHead).children("tr")[0], Ja(a), g, n, i]);
      r(a, "aoFooterCallback", "footer", [h(a.nTFoot).children("tr")[0], Ja(a), g, n, i]);
      d = h(a.nTBody);
      d.children().detach();
      d.append(h(b));
      r(a, "aoDrawCallback", "draw", [a]);
      a.bSorted = !1;
      a.bFiltered = !1;
      a.bDrawing = !1
    }
  }

  function S(a, b) {
    var c = a.oFeatures,
      d = c.bFilter;
    c.bSort && lb(a);
    d ? fa(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice();
    !0 !== b && (a._iDisplayStart = 0);
    a._drawHold = b;
    N(a);
    a._drawHold = !1
  }

  function mb(a) {
    var b = a.oClasses,
      c = h(a.nTable),
      c = h("<div/>").insertBefore(c),
      d = a.oFeatures,
      e = h("<div/>", {
        id: a.sTableId + "_wrapper",
        "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter)
      });
    a.nHolding = c[0];
    a.nTableWrapper = e[0];
    a.nTableReinsertBefore = a.nTable.nextSibling;
    for (var f = a.sDom.split(""), g, j, i, n, l, q, k = 0; k < f.length; k++) {
      g = null;
      j = f[k];
      if ("<" == j) {
        i = h("<div/>")[0];
        n = f[k + 1];
        if ("'" == n || '"' == n) {
          l = "";
          for (q = 2; f[k + q] != n;) l += f[k + q], q++;
          "H" == l ? l = b.sJUIHeader : "F" == l && (l = b.sJUIFooter); - 1 != l.indexOf(".") ? (n = l.split("."), i.id = n[0].substr(1, n[0].length - 1), i.className = n[1]) : "#" == l.charAt(0) ? i.id = l.substr(1, l.length - 1) : i.className = l;
          k += q
        }
        e.append(i);
        e = h(i)
      } else if (">" == j) e = e.parent();
      else if ("l" == j && d.bPaginate && d.bLengthChange) g = nb(a);
      else if ("f" == j && d.bFilter) g = ob(a);
      else if ("r" == j && d.bProcessing) g = pb(a);
      else if ("t" == j) g = qb(a);
      else if ("i" == j && d.bInfo) g = rb(a);
      else if ("p" ==
        j && d.bPaginate) g = sb(a);
      else if (0 !== m.ext.feature.length) {
        i = m.ext.feature;
        q = 0;
        for (n = i.length; q < n; q++)
          if (j == i[q].cFeature) {
            g = i[q].fnInit(a);
            break
          }
      }
      g && (i = a.aanFeatures, i[j] || (i[j] = []), i[j].push(g), e.append(g))
    }
    c.replaceWith(e);
    a.nHolding = null
  }

  function da(a, b) {
    var c = h(b).children("tr"),
      d, e, f, g, j, i, n, l, q, k;
    a.splice(0, a.length);
    f = 0;
    for (i = c.length; f < i; f++) a.push([]);
    f = 0;
    for (i = c.length; f < i; f++) {
      d = c[f];
      for (e = d.firstChild; e;) {
        if ("TD" == e.nodeName.toUpperCase() || "TH" == e.nodeName.toUpperCase()) {
          l = 1 * e.getAttribute("colspan");
          q = 1 * e.getAttribute("rowspan");
          l = !l || 0 === l || 1 === l ? 1 : l;
          q = !q || 0 === q || 1 === q ? 1 : q;
          g = 0;
          for (j = a[f]; j[g];) g++;
          n = g;
          k = 1 === l ? !0 : !1;
          for (j = 0; j < l; j++)
            for (g = 0; g < q; g++) a[f + g][n + j] = {
              cell: e,
              unique: k
            }, a[f + g].nTr = d
        }
        e = e.nextSibling
      }
    }
  }

  function ra(a, b, c) {
    var d = [];
    c || (c = a.aoHeader, b && (c = [], da(c, b)));
    for (var b = 0, e = c.length; b < e; b++)
      for (var f = 0, g = c[b].length; f < g; f++)
        if (c[b][f].unique && (!d[f] || !a.bSortCellsTop)) d[f] = c[b][f].cell;
    return d
  }

  function sa(a, b, c) {
    r(a, "aoServerParams", "serverParams", [b]);
    if (b && h.isArray(b)) {
      var d = {},
        e = /(.*?)\[\]$/;
      h.each(b, function (a, b) {
        var c = b.name.match(e);
        c ? (c = c[0], d[c] || (d[c] = []), d[c].push(b.value)) : d[b.name] = b.value
      });
      b = d
    }
    var f, g = a.ajax,
      j = a.oInstance,
      i = function (b) {
        r(a, null, "xhr", [a, b, a.jqXHR]);
        c(b)
      };
    if (h.isPlainObject(g) && g.data) {
      f = g.data;
      var n = h.isFunction(f) ? f(b, a) : f,
        b = h.isFunction(f) && n ? n : h.extend(!0, b, n);
      delete g.data
    }
    n = {
      data: b,
      success: function (b) {
        var c = b.error || b.sError;
        c && J(a, 0, c);
        a.json = b;
        i(b)
      },
      dataType: "json",
      cache: !1,
      type: a.sServerMethod,
      error: function (b, c) {
        var d = r(a, null, "xhr",
          [a, null, a.jqXHR]); - 1 === h.inArray(!0, d) && ("parsererror" == c ? J(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && J(a, 0, "Ajax error", 7));
        C(a, !1)
      }
    };
    a.oAjaxData = b;
    r(a, null, "preXhr", [a, b]);
    a.fnServerData ? a.fnServerData.call(j, a.sAjaxSource, h.map(b, function (a, b) {
      return {
        name: b,
        value: a
      }
    }), i, a) : a.sAjaxSource || "string" === typeof g ? a.jqXHR = h.ajax(h.extend(n, {
      url: g || a.sAjaxSource
    })) : h.isFunction(g) ? a.jqXHR = g.call(j, b, i, a) : (a.jqXHR = h.ajax(h.extend(n, g)), g.data = f)
  }

  function kb(a) {
    return a.bAjaxDataGet ? (a.iDraw++, C(a,
      !0), sa(a, tb(a), function (b) {
      ub(a, b)
    }), !1) : !0
  }

  function tb(a) {
    var b = a.aoColumns,
      c = b.length,
      d = a.oFeatures,
      e = a.oPreviousSearch,
      f = a.aoPreSearchCols,
      g, j = [],
      i, n, l, k = V(a);
    g = a._iDisplayStart;
    i = !1 !== d.bPaginate ? a._iDisplayLength : -1;
    var t = function (a, b) {
      j.push({
        name: a,
        value: b
      })
    };
    t("sEcho", a.iDraw);
    t("iColumns", c);
    t("sColumns", D(b, "sName").join(","));
    t("iDisplayStart", g);
    t("iDisplayLength", i);
    var pa = {
      draw: a.iDraw,
      columns: [],
      order: [],
      start: g,
      length: i,
      search: {
        value: e.sSearch,
        regex: e.bRegex
      }
    };
    for (g = 0; g < c; g++) n = b[g],
      l = f[g], i = "function" == typeof n.mData ? "function" : n.mData, pa.columns.push({
      data: i,
      name: n.sName,
      searchable: n.bSearchable,
      orderable: n.bSortable,
      search: {
        value: l.sSearch,
        regex: l.bRegex
      }
    }), t("mDataProp_" + g, i), d.bFilter && (t("sSearch_" + g, l.sSearch), t("bRegex_" + g, l.bRegex), t("bSearchable_" + g, n.bSearchable)), d.bSort && t("bSortable_" + g, n.bSortable);
    d.bFilter && (t("sSearch", e.sSearch), t("bRegex", e.bRegex));
    d.bSort && (h.each(k, function (a, b) {
      pa.order.push({
        column: b.col,
        dir: b.dir
      });
      t("iSortCol_" + a, b.col);
      t("sSortDir_" +
        a, b.dir)
    }), t("iSortingCols", k.length));
    b = m.ext.legacy.ajax;
    return null === b ? a.sAjaxSource ? j : pa : b ? j : pa
  }

  function ub(a, b) {
    var c = ta(a, b),
      d = b.sEcho !== k ? b.sEcho : b.draw,
      e = b.iTotalRecords !== k ? b.iTotalRecords : b.recordsTotal,
      f = b.iTotalDisplayRecords !== k ? b.iTotalDisplayRecords : b.recordsFiltered;
    if (d) {
      if (1 * d < a.iDraw) return;
      a.iDraw = 1 * d
    }
    na(a);
    a._iRecordsTotal = parseInt(e, 10);
    a._iRecordsDisplay = parseInt(f, 10);
    d = 0;
    for (e = c.length; d < e; d++) M(a, c[d]);
    a.aiDisplay = a.aiDisplayMaster.slice();
    a.bAjaxDataGet = !1;
    N(a);
    a._bInitComplete ||
    ua(a, b);
    a.bAjaxDataGet = !0;
    C(a, !1)
  }

  function ta(a, b) {
    var c = h.isPlainObject(a.ajax) && a.ajax.dataSrc !== k ? a.ajax.dataSrc : a.sAjaxDataProp;
    return "data" === c ? b.aaData || b[c] : "" !== c ? Q(c)(b) : b
  }

  function ob(a) {
    var b = a.oClasses,
      c = a.sTableId,
      d = a.oLanguage,
      e = a.oPreviousSearch,
      f = a.aanFeatures,
      g = '<input type="search" class="' + b.sFilterInput + '"/>',
      j = d.sSearch,
      j = j.match(/_INPUT_/) ? j.replace("_INPUT_", g) : j + g,
      b = h("<div/>", {
        id: !f.f ? c + "_filter" : null,
        "class": b.sFilter
      }).append(h("<label/>").append(j)),
      f = function () {
        var b = !this.value ?
          "" : this.value;
        b != e.sSearch && (fa(a, {
          sSearch: b,
          bRegex: e.bRegex,
          bSmart: e.bSmart,
          bCaseInsensitive: e.bCaseInsensitive
        }), a._iDisplayStart = 0, N(a))
      },
      g = null !== a.searchDelay ? a.searchDelay : "ssp" === y(a) ? 400 : 0,
      i = h("input", b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", g ? Na(f, g) : f).on("keypress.DT", function (a) {
        if (13 == a.keyCode) return !1
      }).attr("aria-controls", c);
    h(a.nTable).on("search.dt.DT", function (b, c) {
      if (a === c) try {
        i[0] !== G.activeElement && i.val(e.sSearch)
      } catch (d) {}
    });
    return b[0]
  }

  function fa(a, b, c) {
    var d = a.oPreviousSearch,
      e = a.aoPreSearchCols,
      f = function (a) {
        d.sSearch = a.sSearch;
        d.bRegex = a.bRegex;
        d.bSmart = a.bSmart;
        d.bCaseInsensitive = a.bCaseInsensitive
      };
    Fa(a);
    if ("ssp" != y(a)) {
      vb(a, b.sSearch, c, b.bEscapeRegex !== k ? !b.bEscapeRegex : b.bRegex, b.bSmart, b.bCaseInsensitive);
      f(b);
      for (b = 0; b < e.length; b++) wb(a, e[b].sSearch, b, e[b].bEscapeRegex !== k ? !e[b].bEscapeRegex : e[b].bRegex, e[b].bSmart, e[b].bCaseInsensitive);
      xb(a)
    } else f(b);
    a.bFiltered = !0;
    r(a, null, "search", [a])
  }

  function xb(a) {
    for (var b =
      m.ext.search, c = a.aiDisplay, d, e, f = 0, g = b.length; f < g; f++) {
      for (var j = [], i = 0, n = c.length; i < n; i++) e = c[i], d = a.aoData[e], b[f](a, d._aFilterData, e, d._aData, i) && j.push(e);
      c.length = 0;
      h.merge(c, j)
    }
  }

  function wb(a, b, c, d, e, f) {
    if ("" !== b) {
      for (var g = [], j = a.aiDisplay, d = Oa(b, d, e, f), e = 0; e < j.length; e++) b = a.aoData[j[e]]._aFilterData[c], d.test(b) && g.push(j[e]);
      a.aiDisplay = g
    }
  }

  function vb(a, b, c, d, e, f) {
    var d = Oa(b, d, e, f),
      f = a.oPreviousSearch.sSearch,
      g = a.aiDisplayMaster,
      j, e = [];
    0 !== m.ext.search.length && (c = !0);
    j = yb(a);
    if (0 >= b.length) a.aiDisplay =
      g.slice();
    else {
      if (j || c || f.length > b.length || 0 !== b.indexOf(f) || a.bSorted) a.aiDisplay = g.slice();
      b = a.aiDisplay;
      for (c = 0; c < b.length; c++) d.test(a.aoData[b[c]]._sFilterRow) && e.push(b[c]);
      a.aiDisplay = e
    }
  }

  function Oa(a, b, c, d) {
    a = b ? a : Pa(a);
    c && (a = "^(?=.*?" + h.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (a) {
      if ('"' === a.charAt(0)) var b = a.match(/^"(.*)"$/),
        a = b ? b[1] : a;
      return a.replace('"', "")
    }).join(")(?=.*?") + ").*$");
    return RegExp(a, d ? "i" : "")
  }

  function yb(a) {
    var b = a.aoColumns,
      c, d, e, f, g, j, i, h, l = m.ext.type.search;
    c = !1;
    d = 0;
    for (f = a.aoData.length; d < f; d++)
      if (h = a.aoData[d], !h._aFilterData) {
        j = [];
        e = 0;
        for (g = b.length; e < g; e++) c = b[e], c.bSearchable ? (i = B(a, d, e, "filter"), l[c.sType] && (i = l[c.sType](i)), null === i && (i = ""), "string" !== typeof i && i.toString && (i = i.toString())) : i = "", i.indexOf && -1 !== i.indexOf("&") && (va.innerHTML = i, i = Wb ? va.textContent : va.innerText), i.replace && (i = i.replace(/[\r\n]/g, "")), j.push(i);
        h._aFilterData = j;
        h._sFilterRow = j.join("  ");
        c = !0
      }
    return c
  }

  function zb(a) {
    return {
      search: a.sSearch,
      smart: a.bSmart,
      regex: a.bRegex,
      caseInsensitive: a.bCaseInsensitive
    }
  }

  function Ab(a) {
    return {
      sSearch: a.search,
      bSmart: a.smart,
      bRegex: a.regex,
      bCaseInsensitive: a.caseInsensitive
    }
  }

  function rb(a) {
    var b = a.sTableId,
      c = a.aanFeatures.i,
      d = h("<div/>", {
        "class": a.oClasses.sInfo,
        id: !c ? b + "_info" : null
      });
    c || (a.aoDrawCallback.push({
      fn: Bb,
      sName: "information"
    }), d.attr("role", "status").attr("aria-live", "polite"), h(a.nTable).attr("aria-describedby", b + "_info"));
    return d[0]
  }

  function Bb(a) {
    var b = a.aanFeatures.i;
    if (0 !== b.length) {
      var c = a.oLanguage,
        d = a._iDisplayStart +
          1,
        e = a.fnDisplayEnd(),
        f = a.fnRecordsTotal(),
        g = a.fnRecordsDisplay(),
        j = g ? c.sInfo : c.sInfoEmpty;
      g !== f && (j += " " + c.sInfoFiltered);
      j += c.sInfoPostFix;
      j = Cb(a, j);
      c = c.fnInfoCallback;
      null !== c && (j = c.call(a.oInstance, a, d, e, f, g, j));
      h(b).html(j)
    }
  }

  function Cb(a, b) {
    var c = a.fnFormatNumber,
      d = a._iDisplayStart + 1,
      e = a._iDisplayLength,
      f = a.fnRecordsDisplay(),
      g = -1 === e;
    return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a,
      f)).replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e))).replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f / e)))
  }

  function ga(a) {
    var b, c, d = a.iInitDisplayStart,
      e = a.aoColumns,
      f;
    c = a.oFeatures;
    var g = a.bDeferLoading;
    if (a.bInitialised) {
      mb(a);
      jb(a);
      ea(a, a.aoHeader);
      ea(a, a.aoFooter);
      C(a, !0);
      c.bAutoWidth && Ea(a);
      b = 0;
      for (c = e.length; b < c; b++) f = e[b], f.sWidth && (f.nTh.style.width = v(f.sWidth));
      r(a, null, "preInit", [a]);
      S(a);
      e = y(a);
      if ("ssp" != e || g) "ajax" == e ? sa(a, [], function (c) {
        var f = ta(a, c);
        for (b = 0; b < f.length; b++) M(a, f[b]);
        a.iInitDisplayStart =
          d;
        S(a);
        C(a, !1);
        ua(a, c)
      }, a) : (C(a, !1), ua(a))
    } else setTimeout(function () {
      ga(a)
    }, 200)
  }

  function ua(a, b) {
    a._bInitComplete = !0;
    (b || a.oInit.aaData) && Y(a);
    r(a, null, "plugin-init", [a, b]);
    r(a, "aoInitComplete", "init", [a, b])
  }

  function Qa(a, b) {
    var c = parseInt(b, 10);
    a._iDisplayLength = c;
    Ra(a);
    r(a, null, "length", [a, c])
  }

  function nb(a) {
    for (var b = a.oClasses, c = a.sTableId, d = a.aLengthMenu, e = h.isArray(d[0]), f = e ? d[0] : d, d = e ? d[1] : d, e = h("<select/>", {
      name: c + "_length",
      "aria-controls": c,
      "class": b.sLengthSelect
    }), g = 0, j = f.length; g < j; g++) e[0][g] =
      new Option("number" === typeof d[g] ? a.fnFormatNumber(d[g]) : d[g], f[g]);
    var i = h("<div><label/></div>").addClass(b.sLength);
    a.aanFeatures.l || (i[0].id = c + "_length");
    i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML));
    h("select", i).val(a._iDisplayLength).on("change.DT", function () {
      Qa(a, h(this).val());
      N(a)
    });
    h(a.nTable).on("length.dt.DT", function (b, c, d) {
      a === c && h("select", i).val(d)
    });
    return i[0]
  }

  function sb(a) {
    var b = a.sPaginationType,
      c = m.ext.pager[b],
      d = "function" === typeof c,
      e = function (a) {
        N(a)
      },
      b = h("<div/>").addClass(a.oClasses.sPaging + b)[0],
      f = a.aanFeatures;
    d || c.fnInit(a, b, e);
    f.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({
      fn: function (a) {
        if (d) {
          var b = a._iDisplayStart,
            i = a._iDisplayLength,
            h = a.fnRecordsDisplay(),
            l = -1 === i,
            b = l ? 0 : Math.ceil(b / i),
            i = l ? 1 : Math.ceil(h / i),
            h = c(b, i),
            k, l = 0;
          for (k = f.p.length; l < k; l++) Ma(a, "pageButton")(a, f.p[l], l, h, b, i)
        } else c.fnUpdate(a, e)
      },
      sName: "pagination"
    }));
    return b
  }

  function Sa(a, b, c) {
    var d = a._iDisplayStart,
      e = a._iDisplayLength,
      f = a.fnRecordsDisplay();
    0 === f || -1 ===
    e ? d = 0 : "number" === typeof b ? (d = b * e, d > f && (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0, 0 > d && (d = 0)) : "next" == b ? d + e < f && (d += e) : "last" == b ? d = Math.floor((f - 1) / e) * e : J(a, 0, "Unknown paging action: " + b, 5);
    b = a._iDisplayStart !== d;
    a._iDisplayStart = d;
    b && (r(a, null, "page", [a]), c && N(a));
    return b
  }

  function pb(a) {
    return h("<div/>", {
      id: !a.aanFeatures.r ? a.sTableId + "_processing" : null,
      "class": a.oClasses.sProcessing
    }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]
  }

  function C(a, b) {
    a.oFeatures.bProcessing && h(a.aanFeatures.r).css("display",
      b ? "block" : "none");
    r(a, null, "processing", [a, b])
  }

  function qb(a) {
    var b = h(a.nTable);
    b.attr("role", "grid");
    var c = a.oScroll;
    if ("" === c.sX && "" === c.sY) return a.nTable;
    var d = c.sX,
      e = c.sY,
      f = a.oClasses,
      g = b.children("caption"),
      j = g.length ? g[0]._captionSide : null,
      i = h(b[0].cloneNode(!1)),
      n = h(b[0].cloneNode(!1)),
      l = b.children("tfoot");
    l.length || (l = null);
    i = h("<div/>", {
      "class": f.sScrollWrapper
    }).append(h("<div/>", {
      "class": f.sScrollHead
    }).css({
      overflow: "hidden",
      position: "relative",
      border: 0,
      width: d ? !d ? null : v(d) : "100%"
    }).append(h("<div/>", {
      "class": f.sScrollHeadInner
    }).css({
      "box-sizing": "content-box",
      width: c.sXInner || "100%"
    }).append(i.removeAttr("id").css("margin-left", 0).append("top" === j ? g : null).append(b.children("thead"))))).append(h("<div/>", {
      "class": f.sScrollBody
    }).css({
      position: "relative",
      overflow: "auto",
      width: !d ? null : v(d)
    }).append(b));
    l && i.append(h("<div/>", {
      "class": f.sScrollFoot
    }).css({
      overflow: "hidden",
      border: 0,
      width: d ? !d ? null : v(d) : "100%"
    }).append(h("<div/>", {
      "class": f.sScrollFootInner
    }).append(n.removeAttr("id").css("margin-left",
      0).append("bottom" === j ? g : null).append(b.children("tfoot")))));
    var b = i.children(),
      k = b[0],
      f = b[1],
      t = l ? b[2] : null;
    if (d) h(f).on("scroll.DT", function () {
      var a = this.scrollLeft;
      k.scrollLeft = a;
      l && (t.scrollLeft = a)
    });
    h(f).css(e && c.bCollapse ? "max-height" : "height", e);
    a.nScrollHead = k;
    a.nScrollBody = f;
    a.nScrollFoot = t;
    a.aoDrawCallback.push({
      fn: ka,
      sName: "scrolling"
    });
    return i[0]
  }

  function ka(a) {
    var b = a.oScroll,
      c = b.sX,
      d = b.sXInner,
      e = b.sY,
      b = b.iBarWidth,
      f = h(a.nScrollHead),
      g = f[0].style,
      j = f.children("div"),
      i = j[0].style,
      n = j.children("table"),
      j = a.nScrollBody,
      l = h(j),
      q = j.style,
      t = h(a.nScrollFoot).children("div"),
      m = t.children("table"),
      o = h(a.nTHead),
      p = h(a.nTable),
      s = p[0],
      r = s.style,
      u = a.nTFoot ? h(a.nTFoot) : null,
      x = a.oBrowser,
      T = x.bScrollOversize,
      Xb = D(a.aoColumns, "nTh"),
      O, K, P, w, Ta = [],
      y = [],
      z = [],
      A = [],
      B, C = function (a) {
        a = a.style;
        a.paddingTop = "0";
        a.paddingBottom = "0";
        a.borderTopWidth = "0";
        a.borderBottomWidth = "0";
        a.height = 0
      };
    K = j.scrollHeight > j.clientHeight;
    if (a.scrollBarVis !== K && a.scrollBarVis !== k) a.scrollBarVis = K, Y(a);
    else {
      a.scrollBarVis = K;
      p.children("thead, tfoot").remove();
      u && (P = u.clone().prependTo(p), O = u.find("tr"), P = P.find("tr"));
      w = o.clone().prependTo(p);
      o = o.find("tr");
      K = w.find("tr");
      w.find("th, td").removeAttr("tabindex");
      c || (q.width = "100%", f[0].style.width = "100%");
      h.each(ra(a, w), function (b, c) {
        B = Z(a, b);
        c.style.width = a.aoColumns[B].sWidth
      });
      u && H(function (a) {
        a.style.width = ""
      }, P);
      f = p.outerWidth();
      if ("" === c) {
        r.width = "100%";
        if (T && (p.find("tbody").height() > j.offsetHeight || "scroll" == l.css("overflow-y"))) r.width = v(p.outerWidth() - b);
        f = p.outerWidth()
      } else "" !== d && (r.width =
        v(d), f = p.outerWidth());
      H(C, K);
      H(function (a) {
        z.push(a.innerHTML);
        Ta.push(v(h(a).css("width")))
      }, K);
      H(function (a, b) {
        if (h.inArray(a, Xb) !== -1) a.style.width = Ta[b]
      }, o);
      h(K).height(0);
      u && (H(C, P), H(function (a) {
        A.push(a.innerHTML);
        y.push(v(h(a).css("width")))
      }, P), H(function (a, b) {
        a.style.width = y[b]
      }, O), h(P).height(0));
      H(function (a, b) {
        a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + z[b] + "</div>";
        a.style.width = Ta[b]
      }, K);
      u && H(function (a, b) {
        a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' +
          A[b] + "</div>";
        a.style.width = y[b]
      }, P);
      if (p.outerWidth() < f) {
        O = j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y") ? f + b : f;
        if (T && (j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y"))) r.width = v(O - b);
        ("" === c || "" !== d) && J(a, 1, "Possible column misalignment", 6)
      } else O = "100%";
      q.width = v(O);
      g.width = v(O);
      u && (a.nScrollFoot.style.width = v(O));
      !e && T && (q.height = v(s.offsetHeight + b));
      c = p.outerWidth();
      n[0].style.width = v(c);
      i.width = v(c);
      d = p.height() > j.clientHeight || "scroll" == l.css("overflow-y");
      e = "padding" +
        (x.bScrollbarLeft ? "Left" : "Right");
      i[e] = d ? b + "px" : "0px";
      u && (m[0].style.width = v(c), t[0].style.width = v(c), t[0].style[e] = d ? b + "px" : "0px");
      p.children("colgroup").insertBefore(p.children("thead"));
      l.scroll();
      if ((a.bSorted || a.bFiltered) && !a._drawHold) j.scrollTop = 0
    }
  }

  function H(a, b, c) {
    for (var d = 0, e = 0, f = b.length, g, j; e < f;) {
      g = b[e].firstChild;
      for (j = c ? c[e].firstChild : null; g;) 1 === g.nodeType && (c ? a(g, j, d) : a(g, d), d++), g = g.nextSibling, j = c ? j.nextSibling : null;
      e++
    }
  }

  function Ea(a) {
    var b = a.nTable,
      c = a.aoColumns,
      d = a.oScroll,
      e = d.sY,
      f = d.sX,
      g = d.sXInner,
      j = c.length,
      i = la(a, "bVisible"),
      n = h("th", a.nTHead),
      l = b.getAttribute("width"),
      k = b.parentNode,
      t = !1,
      m, o, p = a.oBrowser,
      d = p.bScrollOversize;
    (m = b.style.width) && -1 !== m.indexOf("%") && (l = m);
    for (m = 0; m < i.length; m++) o = c[i[m]], null !== o.sWidth && (o.sWidth = Db(o.sWidthOrig, k), t = !0);
    if (d || !t && !f && !e && j == aa(a) && j == n.length)
      for (m = 0; m < j; m++) i = Z(a, m), null !== i && (c[i].sWidth = v(n.eq(m).width()));
    else {
      j = h(b).clone().css("visibility", "hidden").removeAttr("id");
      j.find("tbody tr").remove();
      var s = h("<tr/>").appendTo(j.find("tbody"));
      j.find("thead, tfoot").remove();
      j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());
      j.find("tfoot th, tfoot td").css("width", "");
      n = ra(a, j.find("thead")[0]);
      for (m = 0; m < i.length; m++) o = c[i[m]], n[m].style.width = null !== o.sWidthOrig && "" !== o.sWidthOrig ? v(o.sWidthOrig) : "", o.sWidthOrig && f && h(n[m]).append(h("<div/>").css({
        width: o.sWidthOrig,
        margin: 0,
        padding: 0,
        border: 0,
        height: 1
      }));
      if (a.aoData.length)
        for (m = 0; m < i.length; m++) t = i[m], o = c[t], h(Eb(a, t)).clone(!1).append(o.sContentPadding).appendTo(s);
      h("[name]",
        j).removeAttr("name");
      o = h("<div/>").css(f || e ? {
        position: "absolute",
        top: 0,
        left: 0,
        height: 1,
        right: 0,
        overflow: "hidden"
      } : {}).append(j).appendTo(k);
      f && g ? j.width(g) : f ? (j.css("width", "auto"), j.removeAttr("width"), j.width() < k.clientWidth && l && j.width(k.clientWidth)) : e ? j.width(k.clientWidth) : l && j.width(l);
      for (m = e = 0; m < i.length; m++) k = h(n[m]), g = k.outerWidth() - k.width(), k = p.bBounding ? Math.ceil(n[m].getBoundingClientRect().width) : k.outerWidth(), e += k, c[i[m]].sWidth = v(k - g);
      b.style.width = v(e);
      o.remove()
    }
    l && (b.style.width =
      v(l));
    if ((l || f) && !a._reszEvt) b = function () {
      h(E).on("resize.DT-" + a.sInstance, Na(function () {
        Y(a)
      }))
    }, d ? setTimeout(b, 1E3) : b(), a._reszEvt = !0
  }

  function Db(a, b) {
    if (!a) return 0;
    var c = h("<div/>").css("width", v(a)).appendTo(b || G.body),
      d = c[0].offsetWidth;
    c.remove();
    return d
  }

  function Eb(a, b) {
    var c = Fb(a, b);
    if (0 > c) return null;
    var d = a.aoData[c];
    return !d.nTr ? h("<td/>").html(B(a, c, b, "display"))[0] : d.anCells[b]
  }

  function Fb(a, b) {
    for (var c, d = -1, e = -1, f = 0, g = a.aoData.length; f < g; f++) c = B(a, f, b, "display") + "", c = c.replace(Yb,
      ""), c = c.replace(/&nbsp;/g, " "), c.length > d && (d = c.length, e = f);
    return e
  }

  function v(a) {
    return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a
  }

  function V(a) {
    var b, c, d = [],
      e = a.aoColumns,
      f, g, j, i;
    b = a.aaSortingFixed;
    c = h.isPlainObject(b);
    var n = [];
    f = function (a) {
      a.length && !h.isArray(a[0]) ? n.push(a) : h.merge(n, a)
    };
    h.isArray(b) && f(b);
    c && b.pre && f(b.pre);
    f(a.aaSorting);
    c && b.post && f(b.post);
    for (a = 0; a < n.length; a++) {
      i = n[a][0];
      f = e[i].aDataSort;
      b = 0;
      for (c = f.length; b < c; b++) g = f[b], j = e[g].sType ||
        "string", n[a]._idx === k && (n[a]._idx = h.inArray(n[a][1], e[g].asSorting)), d.push({
        src: i,
        col: g,
        dir: n[a][1],
        index: n[a]._idx,
        type: j,
        formatter: m.ext.type.order[j + "-pre"]
      })
    }
    return d
  }

  function lb(a) {
    var b, c, d = [],
      e = m.ext.type.order,
      f = a.aoData,
      g = 0,
      j, i = a.aiDisplayMaster,
      h;
    Fa(a);
    h = V(a);
    b = 0;
    for (c = h.length; b < c; b++) j = h[b], j.formatter && g++, Gb(a, j.col);
    if ("ssp" != y(a) && 0 !== h.length) {
      b = 0;
      for (c = i.length; b < c; b++) d[i[b]] = b;
      g === h.length ? i.sort(function (a, b) {
        var c, e, g, j, i = h.length,
          k = f[a]._aSortData,
          m = f[b]._aSortData;
        for (g =
               0; g < i; g++)
          if (j = h[g], c = k[j.col], e = m[j.col], c = c < e ? -1 : c > e ? 1 : 0, 0 !== c) return "asc" === j.dir ? c : -c;
        c = d[a];
        e = d[b];
        return c < e ? -1 : c > e ? 1 : 0
      }) : i.sort(function (a, b) {
        var c, g, j, i, k = h.length,
          m = f[a]._aSortData,
          o = f[b]._aSortData;
        for (j = 0; j < k; j++)
          if (i = h[j], c = m[i.col], g = o[i.col], i = e[i.type + "-" + i.dir] || e["string-" + i.dir], c = i(c, g), 0 !== c) return c;
        c = d[a];
        g = d[b];
        return c < g ? -1 : c > g ? 1 : 0
      })
    }
    a.bSorted = !0
  }

  function Hb(a) {
    for (var b, c, d = a.aoColumns, e = V(a), a = a.oLanguage.oAria, f = 0, g = d.length; f < g; f++) {
      c = d[f];
      var j = c.asSorting;
      b = c.sTitle.replace(/<.*?>/g,
        "");
      var i = c.nTh;
      i.removeAttribute("aria-sort");
      c.bSortable && (0 < e.length && e[0].col == f ? (i.setAttribute("aria-sort", "asc" == e[0].dir ? "ascending" : "descending"), c = j[e[0].index + 1] || j[0]) : c = j[0], b += "asc" === c ? a.sSortAscending : a.sSortDescending);
      i.setAttribute("aria-label", b)
    }
  }

  function Ua(a, b, c, d) {
    var e = a.aaSorting,
      f = a.aoColumns[b].asSorting,
      g = function (a, b) {
        var c = a._idx;
        c === k && (c = h.inArray(a[1], f));
        return c + 1 < f.length ? c + 1 : b ? null : 0
      };
    "number" === typeof e[0] && (e = a.aaSorting = [e]);
    c && a.oFeatures.bSortMulti ? (c = h.inArray(b,
      D(e, "0")), -1 !== c ? (b = g(e[c], !0), null === b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = f[b], e[c]._idx = b)) : (e.push([b, f[0], 0]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = g(e[0]), e.length = 1, e[0][1] = f[b], e[0]._idx = b) : (e.length = 0, e.push([b, f[0]]), e[0]._idx = 0);
    S(a);
    "function" == typeof d && d(a)
  }

  function La(a, b, c, d) {
    var e = a.aoColumns[c];
    Va(b, {}, function (b) {
      !1 !== e.bSortable && (a.oFeatures.bProcessing ? (C(a, !0), setTimeout(function () {
        Ua(a, c, b.shiftKey, d);
        "ssp" !== y(a) && C(a, !1)
      }, 0)) : Ua(a, c, b.shiftKey, d))
    })
  }

  function wa(a) {
    var b = a.aLastSort,
      c = a.oClasses.sSortColumn,
      d = V(a),
      e = a.oFeatures,
      f, g;
    if (e.bSort && e.bSortClasses) {
      e = 0;
      for (f = b.length; e < f; e++) g = b[e].src, h(D(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3));
      e = 0;
      for (f = d.length; e < f; e++) g = d[e].src, h(D(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3))
    }
    a.aLastSort = d
  }

  function Gb(a, b) {
    var c = a.aoColumns[b],
      d = m.ext.order[c.sSortDataType],
      e;
    d && (e = d.call(a.oInstance, a, b, $(a, b)));
    for (var f, g = m.ext.type.order[c.sType + "-pre"], j = 0, i = a.aoData.length; j < i; j++)
      if (c = a.aoData[j],
      c._aSortData || (c._aSortData = []), !c._aSortData[b] || d) f = d ? e[j] : B(a, j, b, "sort"), c._aSortData[b] = g ? g(f) : f
  }

  function xa(a) {
    if (a.oFeatures.bStateSave && !a.bDestroying) {
      var b = {
        time: +new Date,
        start: a._iDisplayStart,
        length: a._iDisplayLength,
        order: h.extend(!0, [], a.aaSorting),
        search: zb(a.oPreviousSearch),
        columns: h.map(a.aoColumns, function (b, d) {
          return {
            visible: b.bVisible,
            search: zb(a.aoPreSearchCols[d])
          }
        })
      };
      r(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
      a.oSavedState = b;
      a.fnStateSaveCallback.call(a.oInstance, a,
        b)
    }
  }

  function Ib(a, b, c) {
    var d, e, f = a.aoColumns,
      b = function (b) {
        if (b && b.time) {
          var g = r(a, "aoStateLoadParams", "stateLoadParams", [a, b]);
          if (-1 === h.inArray(!1, g) && (g = a.iStateDuration, !(0 < g && b.time < +new Date - 1E3 * g) && !(b.columns && f.length !== b.columns.length))) {
            a.oLoadedState = h.extend(!0, {}, b);
            b.start !== k && (a._iDisplayStart = b.start, a.iInitDisplayStart = b.start);
            b.length !== k && (a._iDisplayLength = b.length);
            b.order !== k && (a.aaSorting = [], h.each(b.order, function (b, c) {
              a.aaSorting.push(c[0] >= f.length ? [0, c[1]] : c)
            }));
            b.search !==
            k && h.extend(a.oPreviousSearch, Ab(b.search));
            if (b.columns) {
              d = 0;
              for (e = b.columns.length; d < e; d++) g = b.columns[d], g.visible !== k && (f[d].bVisible = g.visible), g.search !== k && h.extend(a.aoPreSearchCols[d], Ab(g.search))
            }
            r(a, "aoStateLoaded", "stateLoaded", [a, b])
          }
        }
        c()
      };
    if (a.oFeatures.bStateSave) {
      var g = a.fnStateLoadCallback.call(a.oInstance, a, b);
      g !== k && b(g)
    } else c()
  }

  function ya(a) {
    var b = m.settings,
      a = h.inArray(a, D(b, "nTable"));
    return -1 !== a ? b[a] : null
  }

  function J(a, b, c, d) {
    c = "DataTables warning: " + (a ? "table id=" + a.sTableId +
      " - " : "") + c;
    d && (c += ". For more information about this error, please see http://datatables.net/tn/" + d);
    if (b) E.console && console.log && console.log(c);
    else if (b = m.ext, b = b.sErrMode || b.errMode, a && r(a, null, "error", [a, d, c]), "alert" == b) alert(c);
    else {
      if ("throw" == b) throw Error(c);
      "function" == typeof b && b(a, d, c)
    }
  }

  function F(a, b, c, d) {
    h.isArray(c) ? h.each(c, function (c, d) {
      h.isArray(d) ? F(a, b, d[0], d[1]) : F(a, b, d)
    }) : (d === k && (d = c), b[c] !== k && (a[d] = b[c]))
  }

  function Jb(a, b, c) {
    var d, e;
    for (e in b) b.hasOwnProperty(e) && (d = b[e],
      h.isPlainObject(d) ? (h.isPlainObject(a[e]) || (a[e] = {}), h.extend(!0, a[e], d)) : a[e] = c && "data" !== e && "aaData" !== e && h.isArray(d) ? d.slice() : d);
    return a
  }

  function Va(a, b, c) {
    h(a).on("click.DT", b, function (b) {
      a.blur();
      c(b)
    }).on("keypress.DT", b, function (a) {
      13 === a.which && (a.preventDefault(), c(a))
    }).on("selectstart.DT", function () {
      return !1
    })
  }

  function z(a, b, c, d) {
    c && a[b].push({
      fn: c,
      sName: d
    })
  }

  function r(a, b, c, d) {
    var e = [];
    b && (e = h.map(a[b].slice().reverse(), function (b) {
      return b.fn.apply(a.oInstance, d)
    }));
    null !== c && (b = h.Event(c +
      ".dt"), h(a.nTable).trigger(b, d), e.push(b.result));
    return e
  }

  function Ra(a) {
    var b = a._iDisplayStart,
      c = a.fnDisplayEnd(),
      d = a._iDisplayLength;
    b >= c && (b = c - d);
    b -= b % d;
    if (-1 === d || 0 > b) b = 0;
    a._iDisplayStart = b
  }

  function Ma(a, b) {
    var c = a.renderer,
      d = m.ext.renderer[b];
    return h.isPlainObject(c) && c[b] ? d[c[b]] || d._ : "string" === typeof c ? d[c] || d._ : d._
  }

  function y(a) {
    return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom"
  }

  function ha(a, b) {
    var c = [],
      c = Kb.numbers_length,
      d = Math.floor(c / 2);
    b <= c ? c = W(0, b) : a <= d ? (c = W(0,
      c - 2), c.push("ellipsis"), c.push(b - 1)) : (a >= b - 1 - d ? c = W(b - (c - 2), b) : (c = W(a - d + 2, a + d - 1), c.push("ellipsis"), c.push(b - 1)), c.splice(0, 0, "ellipsis"), c.splice(0, 0, 0));
    c.DT_el = "span";
    return c
  }

  function cb(a) {
    h.each({
      num: function (b) {
        return za(b, a)
      },
      "num-fmt": function (b) {
        return za(b, a, Wa)
      },
      "html-num": function (b) {
        return za(b, a, Aa)
      },
      "html-num-fmt": function (b) {
        return za(b, a, Aa, Wa)
      }
    }, function (b, c) {
      x.type.order[b + a + "-pre"] = c;
      b.match(/^html\-/) && (x.type.search[b + a] = x.type.search.html)
    })
  }

  function Lb(a) {
    return function () {
      var b = [ya(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
      return m.ext.internal[a].apply(this, b)
    }
  }
  var m = function (a) {
      this.$ = function (a, b) {
        return this.api(!0).$(a, b)
      };
      this._ = function (a, b) {
        return this.api(!0).rows(a, b).data()
      };
      this.api = function (a) {
        return a ? new s(ya(this[x.iApiIndex])) : new s(this)
      };
      this.fnAddData = function (a, b) {
        var c = this.api(!0),
          d = h.isArray(a) && (h.isArray(a[0]) || h.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a);
        (b === k || b) && c.draw();
        return d.flatten().toArray()
      };
      this.fnAdjustColumnSizing =
        function (a) {
          var b = this.api(!0).columns.adjust(),
            c = b.settings()[0],
            d = c.oScroll;
          a === k || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && ka(c)
        };
      this.fnClearTable = function (a) {
        var b = this.api(!0).clear();
        (a === k || a) && b.draw()
      };
      this.fnClose = function (a) {
        this.api(!0).row(a).child.hide()
      };
      this.fnDeleteRow = function (a, b, c) {
        var d = this.api(!0),
          a = d.rows(a),
          e = a.settings()[0],
          h = e.aoData[a[0][0]];
        a.remove();
        b && b.call(this, e, h);
        (c === k || c) && d.draw();
        return h
      };
      this.fnDestroy = function (a) {
        this.api(!0).destroy(a)
      };
      this.fnDraw = function (a) {
        this.api(!0).draw(a)
      };
      this.fnFilter = function (a, b, c, d, e, h) {
        e = this.api(!0);
        null === b || b === k ? e.search(a, c, d, h) : e.column(b).search(a, c, d, h);
        e.draw()
      };
      this.fnGetData = function (a, b) {
        var c = this.api(!0);
        if (a !== k) {
          var d = a.nodeName ? a.nodeName.toLowerCase() : "";
          return b !== k || "td" == d || "th" == d ? c.cell(a, b).data() : c.row(a).data() || null
        }
        return c.data().toArray()
      };
      this.fnGetNodes = function (a) {
        var b = this.api(!0);
        return a !== k ? b.row(a).node() : b.rows().nodes().flatten().toArray()
      };
      this.fnGetPosition = function (a) {
        var b = this.api(!0),
          c = a.nodeName.toUpperCase();
        return "TR" == c ? b.row(a).index() : "TD" == c || "TH" == c ? (a = b.cell(a).index(), [a.row, a.columnVisible, a.column]) : null
      };
      this.fnIsOpen = function (a) {
        return this.api(!0).row(a).child.isShown()
      };
      this.fnOpen = function (a, b, c) {
        return this.api(!0).row(a).child(b, c).show().child()[0]
      };
      this.fnPageChange = function (a, b) {
        var c = this.api(!0).page(a);
        (b === k || b) && c.draw(!1)
      };
      this.fnSetColumnVis = function (a, b, c) {
        a = this.api(!0).column(a).visible(b);
        (c === k || c) && a.columns.adjust().draw()
      };
      this.fnSettings = function () {
        return ya(this[x.iApiIndex])
      };
      this.fnSort = function (a) {
        this.api(!0).order(a).draw()
      };
      this.fnSortListener = function (a, b, c) {
        this.api(!0).order.listener(a, b, c)
      };
      this.fnUpdate = function (a, b, c, d, e) {
        var h = this.api(!0);
        c === k || null === c ? h.row(b).data(a) : h.cell(b, c).data(a);
        (e === k || e) && h.columns.adjust();
        (d === k || d) && h.draw();
        return 0
      };
      this.fnVersionCheck = x.fnVersionCheck;
      var b = this,
        c = a === k,
        d = this.length;
      c && (a = {});
      this.oApi = this.internal = x.internal;
      for (var e in m.ext.internal) e && (this[e] = Lb(e));
      this.each(function () {
        var e = {},
          g = 1 < d ? Jb(e, a, !0) :
            a,
          j = 0,
          i, e = this.getAttribute("id"),
          n = !1,
          l = m.defaults,
          q = h(this);
        if ("table" != this.nodeName.toLowerCase()) J(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
        else {
          db(l);
          eb(l.column);
          I(l, l, !0);
          I(l.column, l.column, !0);
          I(l, h.extend(g, q.data()));
          var t = m.settings,
            j = 0;
          for (i = t.length; j < i; j++) {
            var o = t[j];
            if (o.nTable == this || o.nTHead.parentNode == this || o.nTFoot && o.nTFoot.parentNode == this) {
              var s = g.bRetrieve !== k ? g.bRetrieve : l.bRetrieve;
              if (c || s) return o.oInstance;
              if (g.bDestroy !== k ? g.bDestroy : l.bDestroy) {
                o.oInstance.fnDestroy();
                break
              } else {
                J(o, 0, "Cannot reinitialise DataTable", 3);
                return
              }
            }
            if (o.sTableId == this.id) {
              t.splice(j, 1);
              break
            }
          }
          if (null === e || "" === e) this.id = e = "DataTables_Table_" + m.ext._unique++;
          var p = h.extend(!0, {}, m.models.oSettings, {
            sDestroyWidth: q[0].style.width,
            sInstance: e,
            sTableId: e
          });
          p.nTable = this;
          p.oApi = b.internal;
          p.oInit = g;
          t.push(p);
          p.oInstance = 1 === b.length ? b : q.dataTable();
          db(g);
          g.oLanguage && Ca(g.oLanguage);
          g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = h.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]);
          g = Jb(h.extend(!0, {}, l), g);
          F(p.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
          F(p, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"],
            ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"]]);
          F(p.oScroll, g, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]);
          F(p.oLanguage, g, "fnInfoCallback");
          z(p, "aoDrawCallback", g.fnDrawCallback, "user");
          z(p, "aoServerParams", g.fnServerParams, "user");
          z(p, "aoStateSaveParams", g.fnStateSaveParams, "user");
          z(p, "aoStateLoadParams", g.fnStateLoadParams, "user");
          z(p, "aoStateLoaded", g.fnStateLoaded, "user");
          z(p, "aoRowCallback",
            g.fnRowCallback, "user");
          z(p, "aoRowCreatedCallback", g.fnCreatedRow, "user");
          z(p, "aoHeaderCallback", g.fnHeaderCallback, "user");
          z(p, "aoFooterCallback", g.fnFooterCallback, "user");
          z(p, "aoInitComplete", g.fnInitComplete, "user");
          z(p, "aoPreDrawCallback", g.fnPreDrawCallback, "user");
          p.rowIdFn = Q(g.rowId);
          fb(p);
          var u = p.oClasses;
          h.extend(u, m.ext.classes, g.oClasses);
          q.addClass(u.sTable);
          p.iInitDisplayStart === k && (p.iInitDisplayStart = g.iDisplayStart, p._iDisplayStart = g.iDisplayStart);
          null !== g.iDeferLoading && (p.bDeferLoading = !0, e = h.isArray(g.iDeferLoading), p._iRecordsDisplay = e ? g.iDeferLoading[0] : g.iDeferLoading, p._iRecordsTotal = e ? g.iDeferLoading[1] : g.iDeferLoading);
          var v = p.oLanguage;
          h.extend(!0, v, g.oLanguage);
          v.sUrl && (h.ajax({
            dataType: "json",
            url: v.sUrl,
            success: function (a) {
              Ca(a);
              I(l.oLanguage, a);
              h.extend(true, v, a);
              ga(p)
            },
            error: function () {
              ga(p)
            }
          }), n = !0);
          null === g.asStripeClasses && (p.asStripeClasses = [u.sStripeOdd, u.sStripeEven]);
          var e = p.asStripeClasses,
            x = q.children("tbody").find("tr").eq(0); - 1 !== h.inArray(!0, h.map(e, function (a) {
            return x.hasClass(a)
          })) &&
          (h("tbody tr", this).removeClass(e.join(" ")), p.asDestroyStripes = e.slice());
          e = [];
          t = this.getElementsByTagName("thead");
          0 !== t.length && (da(p.aoHeader, t[0]), e = ra(p));
          if (null === g.aoColumns) {
            t = [];
            j = 0;
            for (i = e.length; j < i; j++) t.push(null)
          } else t = g.aoColumns;
          j = 0;
          for (i = t.length; j < i; j++) Da(p, e ? e[j] : null);
          hb(p, g.aoColumnDefs, t, function (a, b) {
            ja(p, a, b)
          });
          if (x.length) {
            var w = function (a, b) {
              return a.getAttribute("data-" + b) !== null ? b : null
            };
            h(x[0]).children("th, td").each(function (a, b) {
              var c = p.aoColumns[a];
              if (c.mData ===
                a) {
                var d = w(b, "sort") || w(b, "order"),
                  e = w(b, "filter") || w(b, "search");
                if (d !== null || e !== null) {
                  c.mData = {
                    _: a + ".display",
                    sort: d !== null ? a + ".@data-" + d : k,
                    type: d !== null ? a + ".@data-" + d : k,
                    filter: e !== null ? a + ".@data-" + e : k
                  };
                  ja(p, a)
                }
              }
            })
          }
          var T = p.oFeatures,
            e = function () {
              if (g.aaSorting === k) {
                var a = p.aaSorting;
                j = 0;
                for (i = a.length; j < i; j++) a[j][1] = p.aoColumns[j].asSorting[0]
              }
              wa(p);
              T.bSort && z(p, "aoDrawCallback", function () {
                if (p.bSorted) {
                  var a = V(p),
                    b = {};
                  h.each(a, function (a, c) {
                    b[c.src] = c.dir
                  });
                  r(p, null, "order", [p, a, b]);
                  Hb(p)
                }
              });
              z(p, "aoDrawCallback", function () {
                (p.bSorted || y(p) === "ssp" || T.bDeferRender) && wa(p)
              }, "sc");
              var a = q.children("caption").each(function () {
                  this._captionSide = h(this).css("caption-side")
                }),
                b = q.children("thead");
              b.length === 0 && (b = h("<thead/>").appendTo(q));
              p.nTHead = b[0];
              b = q.children("tbody");
              b.length === 0 && (b = h("<tbody/>").appendTo(q));
              p.nTBody = b[0];
              b = q.children("tfoot");
              if (b.length === 0 && a.length > 0 && (p.oScroll.sX !== "" || p.oScroll.sY !== "")) b = h("<tfoot/>").appendTo(q);
              if (b.length === 0 || b.children().length === 0) q.addClass(u.sNoFooter);
              else if (b.length > 0) {
                p.nTFoot = b[0];
                da(p.aoFooter, p.nTFoot)
              }
              if (g.aaData)
                for (j = 0; j < g.aaData.length; j++) M(p, g.aaData[j]);
              else(p.bDeferLoading || y(p) == "dom") && ma(p, h(p.nTBody).children("tr"));
              p.aiDisplay = p.aiDisplayMaster.slice();
              p.bInitialised = true;
              n === false && ga(p)
            };
          g.bStateSave ? (T.bStateSave = !0, z(p, "aoDrawCallback", xa, "state_save"), Ib(p, g, e)) : e()
        }
      });
      b = null;
      return this
    },
    x, s, o, u, Xa = {},
    Mb = /[\r\n]/g,
    Aa = /<.*?>/g,
    Zb = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
    $b = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)",
      "g"),
    Wa = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,
    L = function (a) {
      return !a || !0 === a || "-" === a ? !0 : !1
    },
    Nb = function (a) {
      var b = parseInt(a, 10);
      return !isNaN(b) && isFinite(a) ? b : null
    },
    Ob = function (a, b) {
      Xa[b] || (Xa[b] = RegExp(Pa(b), "g"));
      return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace(Xa[b], ".") : a
    },
    Ya = function (a, b, c) {
      var d = "string" === typeof a;
      if (L(a)) return !0;
      b && d && (a = Ob(a, b));
      c && d && (a = a.replace(Wa, ""));
      return !isNaN(parseFloat(a)) && isFinite(a)
    },
    Pb = function (a, b, c) {
      return L(a) ? !0 : !(L(a) || "string" ===
        typeof a) ? null : Ya(a.replace(Aa, ""), b, c) ? !0 : null
    },
    D = function (a, b, c) {
      var d = [],
        e = 0,
        f = a.length;
      if (c !== k)
        for (; e < f; e++) a[e] && a[e][b] && d.push(a[e][b][c]);
      else
        for (; e < f; e++) a[e] && d.push(a[e][b]);
      return d
    },
    ia = function (a, b, c, d) {
      var e = [],
        f = 0,
        g = b.length;
      if (d !== k)
        for (; f < g; f++) a[b[f]][c] && e.push(a[b[f]][c][d]);
      else
        for (; f < g; f++) e.push(a[b[f]][c]);
      return e
    },
    W = function (a, b) {
      var c = [],
        d;
      b === k ? (b = 0, d = a) : (d = b, b = a);
      for (var e = b; e < d; e++) c.push(e);
      return c
    },
    Qb = function (a) {
      for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]);
      return b
    },
    qa = function (a) {
      var b;
      a: {
        if (!(2 > a.length)) {
          b = a.slice().sort();
          for (var c = b[0], d = 1, e = b.length; d < e; d++) {
            if (b[d] === c) {
              b = !1;
              break a
            }
            c = b[d]
          }
        }
        b = !0
      }
      if (b) return a.slice();
      b = [];
      var e = a.length,
        f, g = 0,
        d = 0;
      a: for (; d < e; d++) {
        c = a[d];
        for (f = 0; f < g; f++)
          if (b[f] === c) continue a;
        b.push(c);
        g++
      }
      return b
    };
  m.util = {
    throttle: function (a, b) {
      var c = b !== k ? b : 200,
        d, e;
      return function () {
        var b = this,
          g = +new Date,
          j = arguments;
        d && g < d + c ? (clearTimeout(e), e = setTimeout(function () {
          d = k;
          a.apply(b, j)
        }, c)) : (d = g, a.apply(b, j))
      }
    },
    escapeRegex: function (a) {
      return a.replace($b,
        "\\$1")
    }
  };
  var A = function (a, b, c) {
      a[b] !== k && (a[c] = a[b])
    },
    ba = /\[.*?\]$/,
    U = /\(\)$/,
    Pa = m.util.escapeRegex,
    va = h("<div>")[0],
    Wb = va.textContent !== k,
    Yb = /<.*?>/g,
    Na = m.util.throttle,
    Rb = [],
    w = Array.prototype,
    ac = function (a) {
      var b, c, d = m.settings,
        e = h.map(d, function (a) {
          return a.nTable
        });
      if (a) {
        if (a.nTable && a.oApi) return [a];
        if (a.nodeName && "table" === a.nodeName.toLowerCase()) return b = h.inArray(a, e), -1 !== b ? [d[b]] : null;
        if (a && "function" === typeof a.settings) return a.settings().toArray();
        "string" === typeof a ? c = h(a) : a instanceof
          h && (c = a)
      } else return [];
      if (c) return c.map(function () {
        b = h.inArray(this, e);
        return -1 !== b ? d[b] : null
      }).toArray()
    };
  s = function (a, b) {
    if (!(this instanceof s)) return new s(a, b);
    var c = [],
      d = function (a) {
        (a = ac(a)) && (c = c.concat(a))
      };
    if (h.isArray(a))
      for (var e = 0, f = a.length; e < f; e++) d(a[e]);
    else d(a);
    this.context = qa(c);
    b && h.merge(this, b);
    this.selector = {
      rows: null,
      cols: null,
      opts: null
    };
    s.extend(this, this, Rb)
  };
  m.Api = s;
  h.extend(s.prototype, {
    any: function () {
      return 0 !== this.count()
    },
    concat: w.concat,
    context: [],
    count: function () {
      return this.flatten().length
    },
    each: function (a) {
      for (var b = 0, c = this.length; b < c; b++) a.call(this, this[b], b, this);
      return this
    },
    eq: function (a) {
      var b = this.context;
      return b.length > a ? new s(b[a], this[a]) : null
    },
    filter: function (a) {
      var b = [];
      if (w.filter) b = w.filter.call(this, a, this);
      else
        for (var c = 0, d = this.length; c < d; c++) a.call(this, this[c], c, this) && b.push(this[c]);
      return new s(this.context, b)
    },
    flatten: function () {
      var a = [];
      return new s(this.context, a.concat.apply(a, this.toArray()))
    },
    join: w.join,
    indexOf: w.indexOf || function (a, b) {
      for (var c = b || 0,
             d = this.length; c < d; c++)
        if (this[c] === a) return c;
      return -1
    },
    iterator: function (a, b, c, d) {
      var e = [],
        f, g, j, h, n, l = this.context,
        m, o, u = this.selector;
      "string" === typeof a && (d = c, c = b, b = a, a = !1);
      g = 0;
      for (j = l.length; g < j; g++) {
        var r = new s(l[g]);
        if ("table" === b) f = c.call(r, l[g], g), f !== k && e.push(f);
        else if ("columns" === b || "rows" === b) f = c.call(r, l[g], this[g], g), f !== k && e.push(f);
        else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) {
          o = this[g];
          "column-rows" === b && (m = Ba(l[g], u.opts));
          h = 0;
          for (n = o.length; h < n; h++) f = o[h], f =
            "cell" === b ? c.call(r, l[g], f.row, f.column, g, h) : c.call(r, l[g], f, g, h, m), f !== k && e.push(f)
        }
      }
      return e.length || d ? (a = new s(l, a ? e.concat.apply([], e) : e), b = a.selector, b.rows = u.rows, b.cols = u.cols, b.opts = u.opts, a) : this
    },
    lastIndexOf: w.lastIndexOf || function (a, b) {
      return this.indexOf.apply(this.toArray.reverse(), arguments)
    },
    length: 0,
    map: function (a) {
      var b = [];
      if (w.map) b = w.map.call(this, a, this);
      else
        for (var c = 0, d = this.length; c < d; c++) b.push(a.call(this, this[c], c));
      return new s(this.context, b)
    },
    pluck: function (a) {
      return this.map(function (b) {
        return b[a]
      })
    },
    pop: w.pop,
    push: w.push,
    reduce: w.reduce || function (a, b) {
      return gb(this, a, b, 0, this.length, 1)
    },
    reduceRight: w.reduceRight || function (a, b) {
      return gb(this, a, b, this.length - 1, -1, -1)
    },
    reverse: w.reverse,
    selector: null,
    shift: w.shift,
    slice: function () {
      return new s(this.context, this)
    },
    sort: w.sort,
    splice: w.splice,
    toArray: function () {
      return w.slice.call(this)
    },
    to$: function () {
      return h(this)
    },
    toJQuery: function () {
      return h(this)
    },
    unique: function () {
      return new s(this.context, qa(this))
    },
    unshift: w.unshift
  });
  s.extend = function (a,
                       b, c) {
    if (c.length && b && (b instanceof s || b.__dt_wrapper)) {
      var d, e, f, g = function (a, b, c) {
        return function () {
          var d = b.apply(a, arguments);
          s.extend(d, d, c.methodExt);
          return d
        }
      };
      d = 0;
      for (e = c.length; d < e; d++) f = c[d], b[f.name] = "function" === typeof f.val ? g(a, f.val, f) : h.isPlainObject(f.val) ? {} : f.val, b[f.name].__dt_wrapper = !0, s.extend(a, b[f.name], f.propExt)
    }
  };
  s.register = o = function (a, b) {
    if (h.isArray(a))
      for (var c = 0, d = a.length; c < d; c++) s.register(a[c], b);
    else
      for (var e = a.split("."), f = Rb, g, j, c = 0, d = e.length; c < d; c++) {
        g = (j = -1 !==
          e[c].indexOf("()")) ? e[c].replace("()", "") : e[c];
        var i;
        a: {
          i = 0;
          for (var n = f.length; i < n; i++)
            if (f[i].name === g) {
              i = f[i];
              break a
            }
          i = null
        }
        i || (i = {
          name: g,
          val: {},
          methodExt: [],
          propExt: []
        }, f.push(i));
        c === d - 1 ? i.val = b : f = j ? i.methodExt : i.propExt
      }
  };
  s.registerPlural = u = function (a, b, c) {
    s.register(a, c);
    s.register(b, function () {
      var a = c.apply(this, arguments);
      return a === this ? this : a instanceof s ? a.length ? h.isArray(a[0]) ? new s(a.context, a[0]) : a[0] : k : a
    })
  };
  o("tables()", function (a) {
    var b;
    if (a) {
      b = s;
      var c = this.context;
      if ("number" ===
        typeof a) a = [c[a]];
      else var d = h.map(c, function (a) {
          return a.nTable
        }),
        a = h(d).filter(a).map(function () {
          var a = h.inArray(this, d);
          return c[a]
        }).toArray();
      b = new b(a)
    } else b = this;
    return b
  });
  o("table()", function (a) {
    var a = this.tables(a),
      b = a.context;
    return b.length ? new s(b[0]) : a
  });
  u("tables().nodes()", "table().node()", function () {
    return this.iterator("table", function (a) {
      return a.nTable
    }, 1)
  });
  u("tables().body()", "table().body()", function () {
    return this.iterator("table", function (a) {
      return a.nTBody
    }, 1)
  });
  u("tables().header()",
    "table().header()",
    function () {
      return this.iterator("table", function (a) {
        return a.nTHead
      }, 1)
    });
  u("tables().footer()", "table().footer()", function () {
    return this.iterator("table", function (a) {
      return a.nTFoot
    }, 1)
  });
  u("tables().containers()", "table().container()", function () {
    return this.iterator("table", function (a) {
      return a.nTableWrapper
    }, 1)
  });
  o("draw()", function (a) {
    return this.iterator("table", function (b) {
      "page" === a ? N(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), S(b, !1 === a))
    })
  });
  o("page()", function (a) {
    return a ===
    k ? this.page.info().page : this.iterator("table", function (b) {
      Sa(b, a)
    })
  });
  o("page.info()", function () {
    if (0 === this.context.length) return k;
    var a = this.context[0],
      b = a._iDisplayStart,
      c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
      d = a.fnRecordsDisplay(),
      e = -1 === c;
    return {
      page: e ? 0 : Math.floor(b / c),
      pages: e ? 1 : Math.ceil(d / c),
      start: b,
      end: a.fnDisplayEnd(),
      length: c,
      recordsTotal: a.fnRecordsTotal(),
      recordsDisplay: d,
      serverSide: "ssp" === y(a)
    }
  });
  o("page.len()", function (a) {
    return a === k ? 0 !== this.context.length ? this.context[0]._iDisplayLength :
      k : this.iterator("table", function (b) {
      Qa(b, a)
    })
  });
  var Sb = function (a, b, c) {
    if (c) {
      var d = new s(a);
      d.one("draw", function () {
        c(d.ajax.json())
      })
    }
    if ("ssp" == y(a)) S(a, b);
    else {
      C(a, !0);
      var e = a.jqXHR;
      e && 4 !== e.readyState && e.abort();
      sa(a, [], function (c) {
        na(a);
        for (var c = ta(a, c), d = 0, e = c.length; d < e; d++) M(a, c[d]);
        S(a, b);
        C(a, !1)
      })
    }
  };
  o("ajax.json()", function () {
    var a = this.context;
    if (0 < a.length) return a[0].json
  });
  o("ajax.params()", function () {
    var a = this.context;
    if (0 < a.length) return a[0].oAjaxData
  });
  o("ajax.reload()", function (a,
                               b) {
    return this.iterator("table", function (c) {
      Sb(c, !1 === b, a)
    })
  });
  o("ajax.url()", function (a) {
    var b = this.context;
    if (a === k) {
      if (0 === b.length) return k;
      b = b[0];
      return b.ajax ? h.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource
    }
    return this.iterator("table", function (b) {
      h.isPlainObject(b.ajax) ? b.ajax.url = a : b.ajax = a
    })
  });
  o("ajax.url().load()", function (a, b) {
    return this.iterator("table", function (c) {
      Sb(c, !1 === b, a)
    })
  });
  var Za = function (a, b, c, d, e) {
      var f = [],
        g, j, i, n, l, m;
      i = typeof b;
      if (!b || "string" === i || "function" ===
        i || b.length === k) b = [b];
      i = 0;
      for (n = b.length; i < n; i++) {
        j = b[i] && b[i].split && !b[i].match(/[\[\(:]/) ? b[i].split(",") : [b[i]];
        l = 0;
        for (m = j.length; l < m; l++)(g = c("string" === typeof j[l] ? h.trim(j[l]) : j[l])) && g.length && (f = f.concat(g))
      }
      a = x.selector[a];
      if (a.length) {
        i = 0;
        for (n = a.length; i < n; i++) f = a[i](d, e, f)
      }
      return qa(f)
    },
    $a = function (a) {
      a || (a = {});
      a.filter && a.search === k && (a.search = a.filter);
      return h.extend({
        search: "none",
        order: "current",
        page: "all"
      }, a)
    },
    ab = function (a) {
      for (var b = 0, c = a.length; b < c; b++)
        if (0 < a[b].length) return a[0] =
          a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a;
      a.length = 0;
      return a
    },
    Ba = function (a, b) {
      var c, d, e, f = [],
        g = a.aiDisplay;
      c = a.aiDisplayMaster;
      var j = b.search;
      d = b.order;
      e = b.page;
      if ("ssp" == y(a)) return "removed" === j ? [] : W(0, c.length);
      if ("current" == e) {
        c = a._iDisplayStart;
        for (d = a.fnDisplayEnd(); c < d; c++) f.push(g[c])
      } else if ("current" == d || "applied" == d) f = "none" == j ? c.slice() : "applied" == j ? g.slice() : h.map(c, function (a) {
        return -1 === h.inArray(a, g) ? a : null
      });
      else if ("index" == d || "original" == d) {
        c = 0;
        for (d = a.aoData.length; c <
        d; c++) "none" == j ? f.push(c) : (e = h.inArray(c, g), (-1 === e && "removed" == j || 0 <= e && "applied" == j) && f.push(c))
      }
      return f
    };
  o("rows()", function (a, b) {
    a === k ? a = "" : h.isPlainObject(a) && (b = a, a = "");
    var b = $a(b),
      c = this.iterator("table", function (c) {
        var e = b,
          f;
        return Za("row", a, function (a) {
          var b = Nb(a);
          if (b !== null && !e) return [b];
          f || (f = Ba(c, e));
          if (b !== null && h.inArray(b, f) !== -1) return [b];
          if (a === null || a === k || a === "") return f;
          if (typeof a === "function") return h.map(f, function (b) {
            var e = c.aoData[b];
            return a(b, e._aData, e.nTr) ? b : null
          });
          b = Qb(ia(c.aoData, f, "nTr"));
          if (a.nodeName) {
            if (a._DT_RowIndex !== k) return [a._DT_RowIndex];
            if (a._DT_CellIndex) return [a._DT_CellIndex.row];
            b = h(a).closest("*[data-dt-row]");
            return b.length ? [b.data("dt-row")] : []
          }
          if (typeof a === "string" && a.charAt(0) === "#") {
            var i = c.aIds[a.replace(/^#/, "")];
            if (i !== k) return [i.idx]
          }
          return h(b).filter(a).map(function () {
            return this._DT_RowIndex
          }).toArray()
        }, c, e)
      }, 1);
    c.selector.rows = a;
    c.selector.opts = b;
    return c
  });
  o("rows().nodes()", function () {
    return this.iterator("row", function (a,
                                          b) {
      return a.aoData[b].nTr || k
    }, 1)
  });
  o("rows().data()", function () {
    return this.iterator(!0, "rows", function (a, b) {
      return ia(a.aoData, b, "_aData")
    }, 1)
  });
  u("rows().cache()", "row().cache()", function (a) {
    return this.iterator("row", function (b, c) {
      var d = b.aoData[c];
      return "search" === a ? d._aFilterData : d._aSortData
    }, 1)
  });
  u("rows().invalidate()", "row().invalidate()", function (a) {
    return this.iterator("row", function (b, c) {
      ca(b, c, a)
    })
  });
  u("rows().indexes()", "row().index()", function () {
    return this.iterator("row", function (a,
                                          b) {
      return b
    }, 1)
  });
  u("rows().ids()", "row().id()", function (a) {
    for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++)
      for (var f = 0, g = this[d].length; f < g; f++) {
        var h = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);
        b.push((!0 === a ? "#" : "") + h)
      }
    return new s(c, b)
  });
  u("rows().remove()", "row().remove()", function () {
    var a = this;
    this.iterator("row", function (b, c, d) {
      var e = b.aoData,
        f = e[c],
        g, h, i, n, l;
      e.splice(c, 1);
      g = 0;
      for (h = e.length; g < h; g++)
        if (i = e[g], l = i.anCells, null !== i.nTr && (i.nTr._DT_RowIndex = g), null !== l) {
          i = 0;
          for (n = l.length; i <
          n; i++) l[i]._DT_CellIndex.row = g
        }
      oa(b.aiDisplayMaster, c);
      oa(b.aiDisplay, c);
      oa(a[d], c, !1);
      0 < b._iRecordsDisplay && b._iRecordsDisplay--;
      Ra(b);
      c = b.rowIdFn(f._aData);
      c !== k && delete b.aIds[c]
    });
    this.iterator("table", function (a) {
      for (var c = 0, d = a.aoData.length; c < d; c++) a.aoData[c].idx = c
    });
    return this
  });
  o("rows.add()", function (a) {
    var b = this.iterator("table", function (b) {
        var c, f, g, h = [];
        f = 0;
        for (g = a.length; f < g; f++) c = a[f], c.nodeName && "TR" === c.nodeName.toUpperCase() ? h.push(ma(b, c)[0]) : h.push(M(b, c));
        return h
      }, 1),
      c = this.rows(-1);
    c.pop();
    h.merge(c, b);
    return c
  });
  o("row()", function (a, b) {
    return ab(this.rows(a, b))
  });
  o("row().data()", function (a) {
    var b = this.context;
    if (a === k) return b.length && this.length ? b[0].aoData[this[0]]._aData : k;
    b[0].aoData[this[0]]._aData = a;
    ca(b[0], this[0], "data");
    return this
  });
  o("row().node()", function () {
    var a = this.context;
    return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null
  });
  o("row.add()", function (a) {
    a instanceof h && a.length && (a = a[0]);
    var b = this.iterator("table", function (b) {
      return a.nodeName &&
      "TR" === a.nodeName.toUpperCase() ? ma(b, a)[0] : M(b, a)
    });
    return this.row(b[0])
  });
  var bb = function (a, b) {
      var c = a.context;
      if (c.length && (c = c[0].aoData[b !== k ? b : a[0]]) && c._details) c._details.remove(), c._detailsShow = k, c._details = k
    },
    Tb = function (a, b) {
      var c = a.context;
      if (c.length && a.length) {
        var d = c[0].aoData[a[0]];
        if (d._details) {
          (d._detailsShow = b) ? d._details.insertAfter(d.nTr): d._details.detach();
          var e = c[0],
            f = new s(e),
            g = e.aoData;
          f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
          0 < D(g,
            "_details").length && (f.on("draw.dt.DT_details", function (a, b) {
            e === b && f.rows({
              page: "current"
            }).eq(0).each(function (a) {
              a = g[a];
              a._detailsShow && a._details.insertAfter(a.nTr)
            })
          }), f.on("column-visibility.dt.DT_details", function (a, b) {
            if (e === b)
              for (var c, d = aa(b), f = 0, h = g.length; f < h; f++) c = g[f], c._details && c._details.children("td[colspan]").attr("colspan", d)
          }), f.on("destroy.dt.DT_details", function (a, b) {
            if (e === b)
              for (var c = 0, d = g.length; c < d; c++) g[c]._details && bb(f, c)
          }))
        }
      }
    };
  o("row().child()", function (a, b) {
    var c = this.context;
    if (a === k) return c.length && this.length ? c[0].aoData[this[0]]._details : k;
    if (!0 === a) this.child.show();
    else if (!1 === a) bb(this);
    else if (c.length && this.length) {
      var d = c[0],
        c = c[0].aoData[this[0]],
        e = [],
        f = function (a, b) {
          if (h.isArray(a) || a instanceof h)
            for (var c = 0, k = a.length; c < k; c++) f(a[c], b);
          else a.nodeName && "tr" === a.nodeName.toLowerCase() ? e.push(a) : (c = h("<tr><td/></tr>").addClass(b), h("td", c).addClass(b).html(a)[0].colSpan = aa(d), e.push(c[0]))
        };
      f(a, b);
      c._details && c._details.detach();
      c._details = h(e);
      c._detailsShow &&
      c._details.insertAfter(c.nTr)
    }
    return this
  });
  o(["row().child.show()", "row().child().show()"], function () {
    Tb(this, !0);
    return this
  });
  o(["row().child.hide()", "row().child().hide()"], function () {
    Tb(this, !1);
    return this
  });
  o(["row().child.remove()", "row().child().remove()"], function () {
    bb(this);
    return this
  });
  o("row().child.isShown()", function () {
    var a = this.context;
    return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1
  });
  var bc = /^([^:]+):(name|visIdx|visible)$/,
    Ub = function (a, b, c, d, e) {
      for (var c = [], d = 0, f = e.length; d < f; d++) c.push(B(a, e[d], b));
      return c
    };
  o("columns()", function (a, b) {
    a === k ? a = "" : h.isPlainObject(a) && (b = a, a = "");
    var b = $a(b),
      c = this.iterator("table", function (c) {
        var e = a,
          f = b,
          g = c.aoColumns,
          j = D(g, "sName"),
          i = D(g, "nTh");
        return Za("column", e, function (a) {
          var b = Nb(a);
          if (a === "") return W(g.length);
          if (b !== null) return [b >= 0 ? b : g.length + b];
          if (typeof a === "function") {
            var e = Ba(c, f);
            return h.map(g, function (b, f) {
              return a(f, Ub(c, f, 0, 0, e), i[f]) ? f : null
            })
          }
          var k = typeof a === "string" ? a.match(bc) : "";
          if (k) switch (k[2]) {
            case "visIdx":
            case "visible":
              b =
                parseInt(k[1], 10);
              if (b < 0) {
                var m = h.map(g, function (a, b) {
                  return a.bVisible ? b : null
                });
                return [m[m.length + b]]
              }
              return [Z(c, b)];
            case "name":
              return h.map(j, function (a, b) {
                return a === k[1] ? b : null
              });
            default:
              return []
          }
          if (a.nodeName && a._DT_CellIndex) return [a._DT_CellIndex.column];
          b = h(i).filter(a).map(function () {
            return h.inArray(this, i)
          }).toArray();
          if (b.length || !a.nodeName) return b;
          b = h(a).closest("*[data-dt-column]");
          return b.length ? [b.data("dt-column")] : []
        }, c, f)
      }, 1);
    c.selector.cols = a;
    c.selector.opts = b;
    return c
  });
  u("columns().header()",
    "column().header()",
    function () {
      return this.iterator("column", function (a, b) {
        return a.aoColumns[b].nTh
      }, 1)
    });
  u("columns().footer()", "column().footer()", function () {
    return this.iterator("column", function (a, b) {
      return a.aoColumns[b].nTf
    }, 1)
  });
  u("columns().data()", "column().data()", function () {
    return this.iterator("column-rows", Ub, 1)
  });
  u("columns().dataSrc()", "column().dataSrc()", function () {
    return this.iterator("column", function (a, b) {
      return a.aoColumns[b].mData
    }, 1)
  });
  u("columns().cache()", "column().cache()",
    function (a) {
      return this.iterator("column-rows", function (b, c, d, e, f) {
        return ia(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c)
      }, 1)
    });
  u("columns().nodes()", "column().nodes()", function () {
    return this.iterator("column-rows", function (a, b, c, d, e) {
      return ia(a.aoData, e, "anCells", b)
    }, 1)
  });
  u("columns().visible()", "column().visible()", function (a, b) {
    var c = this.iterator("column", function (b, c) {
      if (a === k) return b.aoColumns[c].bVisible;
      var f = b.aoColumns,
        g = f[c],
        j = b.aoData,
        i, n, l;
      if (a !== k && g.bVisible !== a) {
        if (a) {
          var m =
            h.inArray(!0, D(f, "bVisible"), c + 1);
          i = 0;
          for (n = j.length; i < n; i++) l = j[i].nTr, f = j[i].anCells, l && l.insertBefore(f[c], f[m] || null)
        } else h(D(b.aoData, "anCells", c)).detach();
        g.bVisible = a;
        ea(b, b.aoHeader);
        ea(b, b.aoFooter);
        xa(b)
      }
    });
    a !== k && (this.iterator("column", function (c, e) {
      r(c, null, "column-visibility", [c, e, a, b])
    }), (b === k || b) && this.columns.adjust());
    return c
  });
  u("columns().indexes()", "column().index()", function (a) {
    return this.iterator("column", function (b, c) {
      return "visible" === a ? $(b, c) : c
    }, 1)
  });
  o("columns.adjust()",
    function () {
      return this.iterator("table", function (a) {
        Y(a)
      }, 1)
    });
  o("column.index()", function (a, b) {
    if (0 !== this.context.length) {
      var c = this.context[0];
      if ("fromVisible" === a || "toData" === a) return Z(c, b);
      if ("fromData" === a || "toVisible" === a) return $(c, b)
    }
  });
  o("column()", function (a, b) {
    return ab(this.columns(a, b))
  });
  o("cells()", function (a, b, c) {
    h.isPlainObject(a) && (a.row === k ? (c = a, a = null) : (c = b, b = null));
    h.isPlainObject(b) && (c = b, b = null);
    if (null === b || b === k) return this.iterator("table", function (b) {
      var d = a,
        e = $a(c),
        f =
          b.aoData,
        g = Ba(b, e),
        j = Qb(ia(f, g, "anCells")),
        i = h([].concat.apply([], j)),
        l, n = b.aoColumns.length,
        m, o, u, s, r, v;
      return Za("cell", d, function (a) {
        var c = typeof a === "function";
        if (a === null || a === k || c) {
          m = [];
          o = 0;
          for (u = g.length; o < u; o++) {
            l = g[o];
            for (s = 0; s < n; s++) {
              r = {
                row: l,
                column: s
              };
              if (c) {
                v = f[l];
                a(r, B(b, l, s), v.anCells ? v.anCells[s] : null) && m.push(r)
              } else m.push(r)
            }
          }
          return m
        }
        if (h.isPlainObject(a)) return [a];
        c = i.filter(a).map(function (a, b) {
          return {
            row: b._DT_CellIndex.row,
            column: b._DT_CellIndex.column
          }
        }).toArray();
        if (c.length ||
          !a.nodeName) return c;
        v = h(a).closest("*[data-dt-row]");
        return v.length ? [{
          row: v.data("dt-row"),
          column: v.data("dt-column")
        }] : []
      }, b, e)
    });
    var d = this.columns(b, c),
      e = this.rows(a, c),
      f, g, j, i, n, l = this.iterator("table", function (a, b) {
        f = [];
        g = 0;
        for (j = e[b].length; g < j; g++) {
          i = 0;
          for (n = d[b].length; i < n; i++) f.push({
            row: e[b][g],
            column: d[b][i]
          })
        }
        return f
      }, 1);
    h.extend(l.selector, {
      cols: b,
      rows: a,
      opts: c
    });
    return l
  });
  u("cells().nodes()", "cell().node()", function () {
    return this.iterator("cell", function (a, b, c) {
      return (a = a.aoData[b]) &&
      a.anCells ? a.anCells[c] : k
    }, 1)
  });
  o("cells().data()", function () {
    return this.iterator("cell", function (a, b, c) {
      return B(a, b, c)
    }, 1)
  });
  u("cells().cache()", "cell().cache()", function (a) {
    a = "search" === a ? "_aFilterData" : "_aSortData";
    return this.iterator("cell", function (b, c, d) {
      return b.aoData[c][a][d]
    }, 1)
  });
  u("cells().render()", "cell().render()", function (a) {
    return this.iterator("cell", function (b, c, d) {
      return B(b, c, d, a)
    }, 1)
  });
  u("cells().indexes()", "cell().index()", function () {
    return this.iterator("cell", function (a,
                                           b, c) {
      return {
        row: b,
        column: c,
        columnVisible: $(a, c)
      }
    }, 1)
  });
  u("cells().invalidate()", "cell().invalidate()", function (a) {
    return this.iterator("cell", function (b, c, d) {
      ca(b, c, a, d)
    })
  });
  o("cell()", function (a, b, c) {
    return ab(this.cells(a, b, c))
  });
  o("cell().data()", function (a) {
    var b = this.context,
      c = this[0];
    if (a === k) return b.length && c.length ? B(b[0], c[0].row, c[0].column) : k;
    ib(b[0], c[0].row, c[0].column, a);
    ca(b[0], c[0].row, "data", c[0].column);
    return this
  });
  o("order()", function (a, b) {
    var c = this.context;
    if (a === k) return 0 !==
    c.length ? c[0].aaSorting : k;
    "number" === typeof a ? a = [[a, b]] : a.length && !h.isArray(a[0]) && (a = Array.prototype.slice.call(arguments));
    return this.iterator("table", function (b) {
      b.aaSorting = a.slice()
    })
  });
  o("order.listener()", function (a, b, c) {
    return this.iterator("table", function (d) {
      La(d, a, b, c)
    })
  });
  o("order.fixed()", function (a) {
    if (!a) {
      var b = this.context,
        b = b.length ? b[0].aaSortingFixed : k;
      return h.isArray(b) ? {
        pre: b
      } : b
    }
    return this.iterator("table", function (b) {
      b.aaSortingFixed = h.extend(!0, {}, a)
    })
  });
  o(["columns().order()",
    "column().order()"], function (a) {
    var b = this;
    return this.iterator("table", function (c, d) {
      var e = [];
      h.each(b[d], function (b, c) {
        e.push([c, a])
      });
      c.aaSorting = e
    })
  });
  o("search()", function (a, b, c, d) {
    var e = this.context;
    return a === k ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : k : this.iterator("table", function (e) {
      e.oFeatures.bFilter && fa(e, h.extend({}, e.oPreviousSearch, {
        sSearch: a + "",
        bRegex: null === b ? !1 : b,
        bSmart: null === c ? !0 : c,
        bCaseInsensitive: null === d ? !0 : d
      }), 1)
    })
  });
  u("columns().search()", "column().search()", function (a,
                                                         b, c, d) {
    return this.iterator("column", function (e, f) {
      var g = e.aoPreSearchCols;
      if (a === k) return g[f].sSearch;
      e.oFeatures.bFilter && (h.extend(g[f], {
        sSearch: a + "",
        bRegex: null === b ? !1 : b,
        bSmart: null === c ? !0 : c,
        bCaseInsensitive: null === d ? !0 : d
      }), fa(e, e.oPreviousSearch, 1))
    })
  });
  o("state()", function () {
    return this.context.length ? this.context[0].oSavedState : null
  });
  o("state.clear()", function () {
    return this.iterator("table", function (a) {
      a.fnStateSaveCallback.call(a.oInstance, a, {})
    })
  });
  o("state.loaded()", function () {
    return this.context.length ?
      this.context[0].oLoadedState : null
  });
  o("state.save()", function () {
    return this.iterator("table", function (a) {
      xa(a)
    })
  });
  m.versionCheck = m.fnVersionCheck = function (a) {
    for (var b = m.version.split("."), a = a.split("."), c, d, e = 0, f = a.length; e < f; e++)
      if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d) return c > d;
    return !0
  };
  m.isDataTable = m.fnIsDataTable = function (a) {
    var b = h(a).get(0),
      c = !1;
    if (a instanceof m.Api) return !0;
    h.each(m.settings, function (a, e) {
      var f = e.nScrollHead ? h("table", e.nScrollHead)[0] : null,
        g = e.nScrollFoot ?
          h("table", e.nScrollFoot)[0] : null;
      if (e.nTable === b || f === b || g === b) c = !0
    });
    return c
  };
  m.tables = m.fnTables = function (a) {
    var b = !1;
    h.isPlainObject(a) && (b = a.api, a = a.visible);
    var c = h.map(m.settings, function (b) {
      if (!a || a && h(b.nTable).is(":visible")) return b.nTable
    });
    return b ? new s(c) : c
  };
  m.camelToHungarian = I;
  o("$()", function (a, b) {
    var c = this.rows(b).nodes(),
      c = h(c);
    return h([].concat(c.filter(a).toArray(), c.find(a).toArray()))
  });
  h.each(["on", "one", "off"], function (a, b) {
    o(b + "()", function () {
      var a = Array.prototype.slice.call(arguments);
      a[0] = h.map(a[0].split(/\s/), function (a) {
        return !a.match(/\.dt\b/) ? a + ".dt" : a
      }).join(" ");
      var d = h(this.tables().nodes());
      d[b].apply(d, a);
      return this
    })
  });
  o("clear()", function () {
    return this.iterator("table", function (a) {
      na(a)
    })
  });
  o("settings()", function () {
    return new s(this.context, this.context)
  });
  o("init()", function () {
    var a = this.context;
    return a.length ? a[0].oInit : null
  });
  o("data()", function () {
    return this.iterator("table", function (a) {
      return D(a.aoData, "_aData")
    }).flatten()
  });
  o("destroy()", function (a) {
    a = a ||
      !1;
    return this.iterator("table", function (b) {
      var c = b.nTableWrapper.parentNode,
        d = b.oClasses,
        e = b.nTable,
        f = b.nTBody,
        g = b.nTHead,
        j = b.nTFoot,
        i = h(e),
        f = h(f),
        k = h(b.nTableWrapper),
        l = h.map(b.aoData, function (a) {
          return a.nTr
        }),
        o;
      b.bDestroying = !0;
      r(b, "aoDestroyCallback", "destroy", [b]);
      a || (new s(b)).columns().visible(!0);
      k.off(".DT").find(":not(tbody *)").off(".DT");
      h(E).off(".DT-" + b.sInstance);
      e != g.parentNode && (i.children("thead").detach(), i.append(g));
      j && e != j.parentNode && (i.children("tfoot").detach(), i.append(j));
      b.aaSorting = [];
      b.aaSortingFixed = [];
      wa(b);
      h(l).removeClass(b.asStripeClasses.join(" "));
      h("th, td", g).removeClass(d.sSortable + " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone);
      f.children().detach();
      f.append(l);
      g = a ? "remove" : "detach";
      i[g]();
      k[g]();
      !a && c && (c.insertBefore(e, b.nTableReinsertBefore), i.css("width", b.sDestroyWidth).removeClass(d.sTable), (o = b.asDestroyStripes.length) && f.children().each(function (a) {
        h(this).addClass(b.asDestroyStripes[a % o])
      }));
      c = h.inArray(b, m.settings); - 1 !== c && m.settings.splice(c,
        1)
    })
  });
  h.each(["column", "row", "cell"], function (a, b) {
    o(b + "s().every()", function (a) {
      var d = this.selector.opts,
        e = this;
      return this.iterator(b, function (f, g, h, i, n) {
        a.call(e[b](g, "cell" === b ? h : d, "cell" === b ? d : k), g, h, i, n)
      })
    })
  });
  o("i18n()", function (a, b, c) {
    var d = this.context[0],
      a = Q(a)(d.oLanguage);
    a === k && (a = b);
    c !== k && h.isPlainObject(a) && (a = a[c] !== k ? a[c] : a._);
    return a.replace("%d", c)
  });
  m.version = "1.10.16";
  m.settings = [];
  m.models = {};
  m.models.oSearch = {
    bCaseInsensitive: !0,
    sSearch: "",
    bRegex: !1,
    bSmart: !0
  };
  m.models.oRow = {
    nTr: null,
    anCells: null,
    _aData: [],
    _aSortData: null,
    _aFilterData: null,
    _sFilterRow: null,
    _sRowStripe: "",
    src: null,
    idx: -1
  };
  m.models.oColumn = {
    idx: null,
    aDataSort: null,
    asSorting: null,
    bSearchable: null,
    bSortable: null,
    bVisible: null,
    _sManualType: null,
    _bAttrSrc: !1,
    fnCreatedCell: null,
    fnGetData: null,
    fnSetData: null,
    mData: null,
    mRender: null,
    nTh: null,
    nTf: null,
    sClass: null,
    sContentPadding: null,
    sDefaultContent: null,
    sName: null,
    sSortDataType: "std",
    sSortingClass: null,
    sSortingClassJUI: null,
    sTitle: null,
    sType: null,
    sWidth: null,
    sWidthOrig: null
  };
  m.defaults = {
    aaData: null,
    aaSorting: [[0, "asc"]],
    aaSortingFixed: [],
    ajax: null,
    aLengthMenu: [10, 25, 50, 100],
    aoColumns: null,
    aoColumnDefs: null,
    aoSearchCols: [],
    asStripeClasses: null,
    bAutoWidth: !0,
    bDeferRender: !1,
    bDestroy: !1,
    bFilter: !0,
    bInfo: !0,
    bLengthChange: !0,
    bPaginate: !0,
    bProcessing: !1,
    bRetrieve: !1,
    bScrollCollapse: !1,
    bServerSide: !1,
    bSort: !0,
    bSortMulti: !0,
    bSortCellsTop: !1,
    bSortClasses: !0,
    bStateSave: !1,
    fnCreatedRow: null,
    fnDrawCallback: null,
    fnFooterCallback: null,
    fnFormatNumber: function (a) {
      return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
        this.oLanguage.sThousands)
    },
    fnHeaderCallback: null,
    fnInfoCallback: null,
    fnInitComplete: null,
    fnPreDrawCallback: null,
    fnRowCallback: null,
    fnServerData: null,
    fnServerParams: null,
    fnStateLoadCallback: function (a) {
      try {
        return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname))
      } catch (b) {}
    },
    fnStateLoadParams: null,
    fnStateLoaded: null,
    fnStateSaveCallback: function (a, b) {
      try {
        (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance +
          "_" + location.pathname, JSON.stringify(b))
      } catch (c) {}
    },
    fnStateSaveParams: null,
    iStateDuration: 7200,
    iDeferLoading: null,
    iDisplayLength: 10,
    iDisplayStart: 0,
    iTabIndex: 0,
    oClasses: {},
    oLanguage: {
      oAria: {
        sSortAscending: ": فعال کردن ستون صعودی را مرتب کنید",
        sSortDescending: ": فعال کردن برای مرتب کردن ستون نزولی"
      },
      oPaginate: {
        sFirst: "اولی",
        sLast: "اخری",
        sNext: "بعدی",
        sPrevious: "قبلی"
      },
      sEmptyTable: "داده ای در جدول وجود ندارد",
      sInfo: "نمایش _START_ تا _END_ از _TOTAL_ نوشته",
      sInfoEmpty: "نمایش 0 تا 0 از 0 entries",
      sInfoFiltered: "(فیلتر شده از _MAX_ total نوشته)",
      sInfoPostFix: "",
      sDecimal: "",
      sThousands: ",",
      sLengthMenu: " _MENU_ ",
      sLoadingRecords: "در حال بارگیری...",
      sProcessing: "در حال پردازش...",
      sSearch: ""/*"جستجو:"*/,
      sSearchPlaceholder: "",
      sUrl: "",
      sZeroRecords: "هیچ رکوردی یافت نشد"
    },
    oSearch: h.extend({}, m.models.oSearch),
    sAjaxDataProp: "data",
    sAjaxSource: null,
    sDom: "lfrtip",
    searchDelay: null,
    sPaginationType: "simple_numbers",
    sScrollX: "",
    sScrollXInner: "",
    sScrollY: "",
    sServerMethod: "GET",
    renderer: null,
    rowId: "DT_RowId"
  };
  X(m.defaults);
  m.defaults.column = {
    aDataSort: null,
    iDataSort: -1,
    asSorting: ["asc", "desc"],
    bSearchable: !0,
    bSortable: !0,
    bVisible: !0,
    fnCreatedCell: null,
    mData: null,
    mRender: null,
    sCellType: "td",
    sClass: "",
    sContentPadding: "",
    sDefaultContent: null,
    sName: "",
    sSortDataType: "std",
    sTitle: null,
    sType: null,
    sWidth: null
  };
  X(m.defaults.column);
  m.models.oSettings = {
    oFeatures: {
      bAutoWidth: null,
      bDeferRender: null,
      bFilter: null,
      bInfo: null,
      bLengthChange: null,
      bPaginate: null,
      bProcessing: null,
      bServerSide: null,
      bSort: null,
      bSortMulti: null,
      bSortClasses: null,
      bStateSave: null
    },
    oScroll: {
      bCollapse: null,
      iBarWidth: 0,
      sX: null,
      sXInner: null,
      sY: null
    },
    oLanguage: {
      fnInfoCallback: null
    },
    oBrowser: {
      bScrollOversize: !1,
      bScrollbarLeft: !1,
      bBounding: !1,
      barWidth: 0
    },
    ajax: null,
    aanFeatures: [],
    aoData: [],
    aiDisplay: [],
    aiDisplayMaster: [],
    aIds: {},
    aoColumns: [],
    aoHeader: [],
    aoFooter: [],
    oPreviousSearch: {},
    aoPreSearchCols: [],
    aaSorting: null,
    aaSortingFixed: [],
    asStripeClasses: null,
    asDestroyStripes: [],
    sDestroyWidth: 0,
    aoRowCallback: [],
    aoHeaderCallback: [],
    aoFooterCallback: [],
    aoDrawCallback: [],
    aoRowCreatedCallback: [],
    aoPreDrawCallback: [],
    aoInitComplete: [],
    aoStateSaveParams: [],
    aoStateLoadParams: [],
    aoStateLoaded: [],
    sTableId: "",
    nTable: null,
    nTHead: null,
    nTFoot: null,
    nTBody: null,
    nTableWrapper: null,
    bDeferLoading: !1,
    bInitialised: !1,
    aoOpenRows: [],
    sDom: null,
    searchDelay: null,
    sPaginationType: "two_button",
    iStateDuration: 0,
    aoStateSave: [],
    aoStateLoad: [],
    oSavedState: null,
    oLoadedState: null,
    sAjaxSource: null,
    sAjaxDataProp: null,
    bAjaxDataGet: !0,
    jqXHR: null,
    json: k,
    oAjaxData: k,
    fnServerData: null,
    aoServerParams: [],
    sServerMethod: null,
    fnFormatNumber: null,
    aLengthMenu: null,
    iDraw: 0,
    bDrawing: !1,
    iDrawError: -1,
    _iDisplayLength: 10,
    _iDisplayStart: 0,
    _iRecordsTotal: 0,
    _iRecordsDisplay: 0,
    oClasses: {},
    bFiltered: !1,
    bSorted: !1,
    bSortCellsTop: null,
    oInit: null,
    aoDestroyCallback: [],
    fnRecordsTotal: function () {
      return "ssp" == y(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
    },
    fnRecordsDisplay: function () {
      return "ssp" == y(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
    },
    fnDisplayEnd: function () {
      var a = this._iDisplayLength,
        b = this._iDisplayStart,
        c = b + a,
        d = this.aiDisplay.length,
        e = this.oFeatures,
        f = e.bPaginate;
      return e.bServerSide ? !1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d : c
    },
    oInstance: null,
    sInstance: null,
    iTabIndex: 0,
    nScrollHead: null,
    nScrollFoot: null,
    aLastSort: [],
    oPlugins: {},
    rowIdFn: null,
    rowId: null
  };
  m.ext = x = {
    buttons: {},
    classes: {},
    builder: "-source-",
    errMode: "alert",
    feature: [],
    search: [],
    selector: {
      cell: [],
      column: [],
      row: []
    },
    internal: {},
    legacy: {
      ajax: null
    },
    pager: {},
    renderer: {
      pageButton: {},
      header: {}
    },
    order: {},
    type: {
      detect: [],
      search: {},
      order: {}
    },
    _unique: 0,
    fnVersionCheck: m.fnVersionCheck,
    iApiIndex: 0,
    oJUIClasses: {},
    sVersion: m.version
  };
  h.extend(x, {
    afnFiltering: x.search,
    aTypes: x.type.detect,
    ofnSearch: x.type.search,
    oSort: x.type.order,
    afnSortData: x.order,
    aoFeatures: x.feature,
    oApi: x.internal,
    oStdClasses: x.classes,
    oPagination: x.pager
  });
  h.extend(m.ext.classes, {
    sTable: "dataTable",
    sNoFooter: "no-footer",
    sPageButton: "paginate_button",
    sPageButtonActive: "current",
    sPageButtonDisabled: "disabled",
    sStripeOdd: "odd",
    sStripeEven: "even",
    sRowEmpty: "dataTables_empty",
    sWrapper: "dataTables_wrapper",
    sFilter: "dataTables_filter",
    sInfo: "dataTables_info",
    sPaging: "dataTables_paginate paging_",
    sLength: "dataTables_length",
    sProcessing: "dataTables_processing",
    sSortAsc: "sorting_asc",
    sSortDesc: "sorting_desc",
    sSortable: "sorting",
    sSortableAsc: "sorting_asc_disabled",
    sSortableDesc: "sorting_desc_disabled",
    sSortableNone: "sorting_disabled",
    sSortColumn: "sorting_",
    sFilterInput: "",
    sLengthSelect: "",
    sScrollWrapper: "dataTables_scroll",
    sScrollHead: "dataTables_scrollHead",
    sScrollHeadInner: "dataTables_scrollHeadInner",
    sScrollBody: "dataTables_scrollBody",
    sScrollFoot: "dataTables_scrollFoot",
    sScrollFootInner: "dataTables_scrollFootInner",
    sHeaderTH: "",
    sFooterTH: "",
    sSortJUIAsc: "",
    sSortJUIDesc: "",
    sSortJUI: "",
    sSortJUIAscAllowed: "",
    sSortJUIDescAllowed: "",
    sSortJUIWrapper: "",
    sSortIcon: "",
    sJUIHeader: "",
    sJUIFooter: ""
  });
  var Kb = m.ext.pager;
  h.extend(Kb, {
    simple: function () {
      return ["previous", "next"]
    },
    full: function () {
      return ["first", "previous", "next", "last"]
    },
    numbers: function (a, b) {
      return [ha(a,
        b)]
    },
    simple_numbers: function (a, b) {
      return ["previous", ha(a, b), "next"]
    },
    full_numbers: function (a, b) {
      return ["first", "previous", ha(a, b), "next", "last"]
    },
    first_last_numbers: function (a, b) {
      return ["first", ha(a, b), "last"]
    },
    _numbers: ha,
    numbers_length: 7
  });
  h.extend(!0, m.ext.renderer, {
    pageButton: {
      _: function (a, b, c, d, e, f) {
        var g = a.oClasses,
          j = a.oLanguage.oPaginate,
          i = a.oLanguage.oAria.paginate || {},
          n, l, m = 0,
          o = function (b, d) {
            var k, s, u, r, v = function (b) {
              Sa(a, b.data.action, true)
            };
            k = 0;
            for (s = d.length; k < s; k++) {
              r = d[k];
              if (h.isArray(r)) {
                u =
                  h("<" + (r.DT_el || "div") + "/>").appendTo(b);
                o(u, r)
              } else {
                n = null;
                l = "";
                switch (r) {
                  case "ellipsis":
                    b.append('<span class="ellipsis">&#x2026;</span>');
                    break;
                  case "first":
                    n = j.sFirst;
                    l = r + (e > 0 ? "" : " " + g.sPageButtonDisabled);
                    break;
                  case "previous":
                    n = j.sPrevious;
                    l = r + (e > 0 ? "" : " " + g.sPageButtonDisabled);
                    break;
                  case "next":
                    n = j.sNext;
                    l = r + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
                    break;
                  case "last":
                    n = j.sLast;
                    l = r + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
                    break;
                  default:
                    n = r + 1;
                    l = e === r ? g.sPageButtonActive : ""
                }
                if (n !== null) {
                  u = h("<a>", {
                    "class": g.sPageButton +
                      " " + l,
                    "aria-controls": a.sTableId,
                    "aria-label": i[r],
                    "data-dt-idx": m,
                    tabindex: a.iTabIndex,
                    id: c === 0 && typeof r === "string" ? a.sTableId + "_" + r : null
                  }).html(n).appendTo(b);
                  Va(u, {
                    action: r
                  }, v);
                  m++
                }
              }
            }
          },
          s;
        try {
          s = h(b).find(G.activeElement).data("dt-idx")
        } catch (u) {}
        o(h(b).empty(), d);
        s !== k && h(b).find("[data-dt-idx=" + s + "]").focus()
      }
    }
  });
  h.extend(m.ext.type.detect, [function (a, b) {
    var c = b.oLanguage.sDecimal;
    return Ya(a, c) ? "num" + c : null
  }, function (a) {
    if (a && !(a instanceof Date) && !Zb.test(a)) return null;
    var b = Date.parse(a);
    return null !== b && !isNaN(b) || L(a) ? "date" : null
  }, function (a, b) {
    var c = b.oLanguage.sDecimal;
    return Ya(a, c, !0) ? "num-fmt" + c : null
  }, function (a, b) {
    var c = b.oLanguage.sDecimal;
    return Pb(a, c) ? "html-num" + c : null
  }, function (a, b) {
    var c = b.oLanguage.sDecimal;
    return Pb(a, c, !0) ? "html-num-fmt" + c : null
  }, function (a) {
    return L(a) || "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null
  }]);
  h.extend(m.ext.type.search, {
    html: function (a) {
      return L(a) ? a : "string" === typeof a ? a.replace(Mb, " ").replace(Aa, "") : ""
    },
    string: function (a) {
      return L(a) ?
        a : "string" === typeof a ? a.replace(Mb, " ") : a
    }
  });
  var za = function (a, b, c, d) {
    if (0 !== a && (!a || "-" === a)) return -Infinity;
    b && (a = Ob(a, b));
    a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
    return 1 * a
  };
  h.extend(x.type.order, {
    "date-pre": function (a) {
      return Date.parse(a) || -Infinity
    },
    "html-pre": function (a) {
      return L(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + ""
    },
    "string-pre": function (a) {
      return L(a) ? "" : "string" === typeof a ? a.toLowerCase() : !a.toString ? "" : a.toString()
    },
    "string-asc": function (a, b) {
      return a <
      b ? -1 : a > b ? 1 : 0
    },
    "string-desc": function (a, b) {
      return a < b ? 1 : a > b ? -1 : 0
    }
  });
  cb("");
  h.extend(!0, m.ext.renderer, {
    header: {
      _: function (a, b, c, d) {
        h(a.nTable).on("order.dt.DT", function (e, f, g, h) {
          if (a === f) {
            e = c.idx;
            b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass)
          }
        })
      },
      jqueryui: function (a, b, c, d) {
        h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b);
        h(a.nTable).on("order.dt.DT", function (e, f, g, h) {
          if (a === f) {
            e = c.idx;
            b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass);
            b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass(h[e] == "asc" ? d.sSortJUIAsc : h[e] == "desc" ? d.sSortJUIDesc : c.sSortingClassJUI)
          }
        })
      }
    }
  });
  var Vb = function (a) {
    return "string" === typeof a ? a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g,
      "&quot;") : a
  };
  m.render = {
    number: function (a, b, c, d, e) {
      return {
        display: function (f) {
          if ("number" !== typeof f && "string" !== typeof f) return f;
          var g = 0 > f ? "-" : "",
            h = parseFloat(f);
          if (isNaN(h)) return Vb(f);
          h = h.toFixed(c);
          f = Math.abs(h);
          h = parseInt(f, 10);
          f = c ? b + (f - h).toFixed(c).substring(2) : "";
          return g + (d || "") + h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + f + (e || "")
        }
      }
    },
    text: function () {
      return {
        display: Vb
      }
    }
  };
  h.extend(m.ext.internal, {
    _fnExternApiFunc: Lb,
    _fnBuildAjax: sa,
    _fnAjaxUpdate: kb,
    _fnAjaxParameters: tb,
    _fnAjaxUpdateDraw: ub,
    _fnAjaxDataSrc: ta,
    _fnAddColumn: Da,
    _fnColumnOptions: ja,
    _fnAdjustColumnSizing: Y,
    _fnVisibleToColumnIndex: Z,
    _fnColumnIndexToVisible: $,
    _fnVisbleColumns: aa,
    _fnGetColumns: la,
    _fnColumnTypes: Fa,
    _fnApplyColumnDefs: hb,
    _fnHungarianMap: X,
    _fnCamelToHungarian: I,
    _fnLanguageCompat: Ca,
    _fnBrowserDetect: fb,
    _fnAddData: M,
    _fnAddTr: ma,
    _fnNodeToDataIndex: function (a, b) {
      return b._DT_RowIndex !== k ? b._DT_RowIndex : null
    },
    _fnNodeToColumnIndex: function (a, b, c) {
      return h.inArray(c, a.aoData[b].anCells)
    },
    _fnGetCellData: B,
    _fnSetCellData: ib,
    _fnSplitObjNotation: Ia,
    _fnGetObjectDataFn: Q,
    _fnSetObjectDataFn: R,
    _fnGetDataMaster: Ja,
    _fnClearTable: na,
    _fnDeleteIndex: oa,
    _fnInvalidate: ca,
    _fnGetRowElements: Ha,
    _fnCreateTr: Ga,
    _fnBuildHead: jb,
    _fnDrawHead: ea,
    _fnDraw: N,
    _fnReDraw: S,
    _fnAddOptionsHtml: mb,
    _fnDetectHeader: da,
    _fnGetUniqueThs: ra,
    _fnFeatureHtmlFilter: ob,
    _fnFilterComplete: fa,
    _fnFilterCustom: xb,
    _fnFilterColumn: wb,
    _fnFilter: vb,
    _fnFilterCreateSearch: Oa,
    _fnEscapeRegex: Pa,
    _fnFilterData: yb,
    _fnFeatureHtmlInfo: rb,
    _fnUpdateInfo: Bb,
    _fnInfoMacros: Cb,
    _fnInitialise: ga,
    _fnInitComplete: ua,
    _fnLengthChange: Qa,
    _fnFeatureHtmlLength: nb,
    _fnFeatureHtmlPaginate: sb,
    _fnPageChange: Sa,
    _fnFeatureHtmlProcessing: pb,
    _fnProcessingDisplay: C,
    _fnFeatureHtmlTable: qb,
    _fnScrollDraw: ka,
    _fnApplyToChildren: H,
    _fnCalculateColumnWidths: Ea,
    _fnThrottle: Na,
    _fnConvertToWidth: Db,
    _fnGetWidestNode: Eb,
    _fnGetMaxLenString: Fb,
    _fnStringToCss: v,
    _fnSortFlatten: V,
    _fnSort: lb,
    _fnSortAria: Hb,
    _fnSortListener: Ua,
    _fnSortAttachListener: La,
    _fnSortingClasses: wa,
    _fnSortData: Gb,
    _fnSaveState: xa,
    _fnLoadState: Ib,
    _fnSettingsFromNode: ya,
    _fnLog: J,
    _fnMap: F,
    _fnBindAction: Va,
    _fnCallbackReg: z,
    _fnCallbackFire: r,
    _fnLengthOverflow: Ra,
    _fnRenderer: Ma,
    _fnDataSource: y,
    _fnRowAttributes: Ka,
    _fnCalculateEnd: function () {}
  });
  h.fn.dataTable = m;
  m.$ = h;
  h.fn.dataTableSettings = m.settings;
  h.fn.dataTableExt = m.ext;
  h.fn.DataTable = function (a) {
    return h(this).dataTable(a).api()
  };
  h.each(m, function (a, b) {
    h.fn.DataTable[a] = b
  });
  return h.fn.dataTable
});


/*!
 DataTables Bootstrap 3 integration
 ©2011-2015 SpryMedia Ltd - datatables.net/license
*/
(function(b){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(a){return b(a,window,document)}):"object"===typeof exports?module.exports=function(a,d){a||(a=window);if(!d||!d.fn.dataTable)d=require("datatables.net")(a,d).$;return b(d,a,a.document)}:b(jQuery,window,document)})(function(b,a,d,m){var f=b.fn.dataTable;b.extend(!0,f.defaults,{dom:"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
  renderer:"bootstrap"});b.extend(f.ext.classes,{sWrapper:"dataTables_wrapper container-fluid dt-bootstrap4",sFilterInput:"form-control form-control-sm",sLengthSelect:"form-control form-control-sm",sProcessing:"dataTables_processing card",sPageButton:"paginate_button page-item"});f.ext.renderer.pageButton.bootstrap=function(a,h,r,s,j,n){var o=new f.Api(a),t=a.oClasses,k=a.oLanguage.oPaginate,u=a.oLanguage.oAria.paginate||{},e,g,p=0,q=function(d,f){var l,h,i,c,m=function(a){a.preventDefault();!b(a.currentTarget).hasClass("disabled")&&
o.page()!=a.data.action&&o.page(a.data.action).draw("page")};l=0;for(h=f.length;l<h;l++)if(c=f[l],b.isArray(c))q(d,c);else{g=e="";switch(c){case "ellipsis":e="&#x2026;";g="disabled";break;case "first":e=k.sFirst;g=c+(0<j?"":" disabled");break;case "previous":e=k.sPrevious;g=c+(0<j?"":" disabled");break;case "next":e=k.sNext;g=c+(j<n-1?"":" disabled");break;case "last":e=k.sLast;g=c+(j<n-1?"":" disabled");break;default:e=c+1,g=j===c?"active":""}e&&(i=b("<li>",{"class":t.sPageButton+" "+g,id:0===r&&
  "string"===typeof c?a.sTableId+"_"+c:null}).append(b("<a>",{href:"#","aria-controls":a.sTableId,"aria-label":u[c],"data-dt-idx":p,tabindex:a.iTabIndex,"class":"page-link"}).html(e)).appendTo(d),a.oApi._fnBindAction(i,{action:c},m),p++)}},i;try{i=b(h).find(d.activeElement).data("dt-idx")}catch(v){}q(b(h).empty().html('<ul class="pagination"/>').children("ul"),s);i!==m&&b(h).find("[data-dt-idx="+i+"]").focus()};return f});



/*!
 Buttons for DataTables 1.5.2
 ©2016-2018 SpryMedia Ltd - datatables.net/license
*/
(function (d) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (n) {
    return d(n, window, document)
  }) : "object" === typeof exports ? module.exports = function (n, o) {
    n || (n = window);
    if (!o || !o.fn.dataTable) o = require("datatables.net")(n, o).$;
    return d(o, n, n.document)
  } : d(jQuery, window, document)
})(function (d, n, o, m) {
  var i = d.fn.dataTable,
    x = 0,
    y = 0,
    k = i.ext.buttons,
    l = function (a, b) {
      "undefined" === typeof b && (b = {});
      !0 === b && (b = {});
      d.isArray(b) && (b = {
        buttons: b
      });
      this.c = d.extend(!0, {}, l.defaults, b);
      b.buttons && (this.c.buttons = b.buttons);
      this.s = {
        dt: new i.Api(a),
        buttons: [],
        listenKeys: "",
        namespace: "dtb" + x++
      };
      this.dom = {
        container: d("<" + this.c.dom.container.tag + "/>").addClass(this.c.dom.container.className)
      };
      this._constructor()
    };
  d.extend(l.prototype, {
    action: function (a, b) {
      var c = this._nodeToButton(a);
      if (b === m) return c.conf.action;
      c.conf.action = b;
      return this
    },
    active: function (a, b) {
      var c = this._nodeToButton(a),
        e = this.c.dom.button.active,
        c = d(c.node);
      if (b === m) return c.hasClass(e);
      c.toggleClass(e, b === m ? !0 :
        b);
      return this
    },
    add: function (a, b) {
      var c = this.s.buttons;
      if ("string" === typeof b) {
        for (var e = b.split("-"), c = this.s, d = 0, h = e.length - 1; d < h; d++) c = c.buttons[1 * e[d]];
        c = c.buttons;
        b = 1 * e[e.length - 1]
      }
      this._expandButton(c, a, !1, b);
      this._draw();
      return this
    },
    container: function () {
      return this.dom.container
    },
    disable: function (a) {
      a = this._nodeToButton(a);
      d(a.node).addClass(this.c.dom.button.disabled);
      return this
    },
    destroy: function () {
      d("body").off("keyup." + this.s.namespace);
      var a = this.s.buttons.slice(),
        b, c;
      b = 0;
      for (c = a.length; b <
      c; b++) this.remove(a[b].node);
      this.dom.container.remove();
      a = this.s.dt.settings()[0];
      b = 0;
      for (c = a.length; b < c; b++)
        if (a.inst === this) {
          a.splice(b, 1);
          break
        }
      return this
    },
    enable: function (a, b) {
      if (!1 === b) return this.disable(a);
      var c = this._nodeToButton(a);
      d(c.node).removeClass(this.c.dom.button.disabled);
      return this
    },
    name: function () {
      return this.c.name
    },
    node: function (a) {
      a = this._nodeToButton(a);
      return d(a.node)
    },
    processing: function (a, b) {
      var c = this._nodeToButton(a);
      if (b === m) return d(c.node).hasClass("processing");
      d(c.node).toggleClass("processing", b);
      return this
    },
    remove: function (a) {
      var b = this._nodeToButton(a),
        c = this._nodeToHost(a),
        e = this.s.dt;
      if (b.buttons.length)
        for (var g = b.buttons.length - 1; 0 <= g; g--) this.remove(b.buttons[g].node);
      b.conf.destroy && b.conf.destroy.call(e.button(a), e, d(a), b.conf);
      this._removeKey(b.conf);
      d(b.node).remove();
      a = d.inArray(b, c);
      c.splice(a, 1);
      return this
    },
    text: function (a, b) {
      var c = this._nodeToButton(a),
        e = this.c.dom.collection.buttonLiner,
        e = c.inCollection && e && e.tag ? e.tag : this.c.dom.buttonLiner.tag,
        g = this.s.dt,
        h = d(c.node),
        f = function (a) {
          return "function" === typeof a ? a(g, h, c.conf) : a
        };
      if (b === m) return f(c.conf.text);
      c.conf.text = b;
      e ? h.children(e).html(f(b)) : h.html(f(b));
      return this
    },
    _constructor: function () {
      var a = this,
        b = this.s.dt,
        c = b.settings()[0],
        e = this.c.buttons;
      c._buttons || (c._buttons = []);
      c._buttons.push({
        inst: this,
        name: this.c.name
      });
      for (var g = 0, h = e.length; g < h; g++) this.add(e[g]);
      b.on("destroy", function (b, e) {
        e === c && a.destroy()
      });
      d("body").on("keyup." + this.s.namespace, function (b) {
        if (!o.activeElement ||
          o.activeElement === o.body) {
          var c = String.fromCharCode(b.keyCode).toLowerCase();
          a.s.listenKeys.toLowerCase().indexOf(c) !== -1 && a._keypress(c, b)
        }
      })
    },
    _addKey: function (a) {
      a.key && (this.s.listenKeys += d.isPlainObject(a.key) ? a.key.key : a.key)
    },
    _draw: function (a, b) {
      a || (a = this.dom.container, b = this.s.buttons);
      a.children().detach();
      for (var c = 0, e = b.length; c < e; c++) a.append(b[c].inserter), a.append(" "), b[c].buttons && b[c].buttons.length && this._draw(b[c].collection, b[c].buttons)
    },
    _expandButton: function (a, b, c, e) {
      for (var g =
        this.s.dt, h = 0, b = !d.isArray(b) ? [b] : b, f = 0, q = b.length; f < q; f++) {
        var j = this._resolveExtends(b[f]);
        if (j)
          if (d.isArray(j)) this._expandButton(a, j, c, e);
          else {
            var p = this._buildButton(j, c);
            if (p) {
              e !== m ? (a.splice(e, 0, p), e++) : a.push(p);
              if (p.conf.buttons) {
                var u = this.c.dom.collection;
                p.collection = d("<" + u.tag + "/>").addClass(u.className).attr("role", "menu");
                p.conf._collection = p.collection;
                this._expandButton(p.buttons, p.conf.buttons, !0, e)
              }
              j.init && j.init.call(g.button(p.node), g, d(p.node), j);
              h++
            }
          }
      }
    },
    _buildButton: function (a,
                            b) {
      var c = this.c.dom.button,
        e = this.c.dom.buttonLiner,
        g = this.c.dom.collection,
        h = this.s.dt,
        f = function (b) {
          return "function" === typeof b ? b(h, j, a) : b
        };
      b && g.button && (c = g.button);
      b && g.buttonLiner && (e = g.buttonLiner);
      if (a.available && !a.available(h, a)) return !1;
      var q = function (a, b, c, e) {
          e.action.call(b.button(c), a, b, c, e);
          d(b.table().node()).triggerHandler("buttons-action.dt", [b.button(c), b, c, e])
        },
        g = a.tag || c.tag,
        j = d("<" + g + "/>").addClass(c.className).attr("tabindex", this.s.dt.settings()[0].iTabIndex).attr("aria-controls",
          this.s.dt.table().node().id).on("click.dtb", function (b) {
          b.preventDefault();
          !j.hasClass(c.disabled) && a.action && q(b, h, j, a);
          j.blur()
        }).on("keyup.dtb", function (b) {
          b.keyCode === 13 && !j.hasClass(c.disabled) && a.action && q(b, h, j, a)
        });
      "a" === g.toLowerCase() && j.attr("href", "#");
      "button" === g.toLowerCase() && j.attr("type", "button");
      e.tag ? (g = d("<" + e.tag + "/>").html(f(a.text)).addClass(e.className), "a" === e.tag.toLowerCase() && g.attr("href", "#"), j.append(g)) : j.html(f(a.text));
      !1 === a.enabled && j.addClass(c.disabled);
      a.className &&
      j.addClass(a.className);
      a.titleAttr && j.attr("title", f(a.titleAttr));
      a.attr && j.attr(a.attr);
      a.namespace || (a.namespace = ".dt-button-" + y++);
      e = (e = this.c.dom.buttonContainer) && e.tag ? d("<" + e.tag + "/>").addClass(e.className).append(j) : j;
      this._addKey(a);
      return {
        conf: a,
        node: j.get(0),
        inserter: e,
        buttons: [],
        inCollection: b,
        collection: null
      }
    },
    _nodeToButton: function (a, b) {
      b || (b = this.s.buttons);
      for (var c = 0, e = b.length; c < e; c++) {
        if (b[c].node === a) return b[c];
        if (b[c].buttons.length) {
          var d = this._nodeToButton(a, b[c].buttons);
          if (d) return d
        }
      }
    },
    _nodeToHost: function (a, b) {
      b || (b = this.s.buttons);
      for (var c = 0, e = b.length; c < e; c++) {
        if (b[c].node === a) return b;
        if (b[c].buttons.length) {
          var d = this._nodeToHost(a, b[c].buttons);
          if (d) return d
        }
      }
    },
    _keypress: function (a, b) {
      if (!b._buttonsHandled) {
        var c = function (e) {
          for (var g = 0, h = e.length; g < h; g++) {
            var f = e[g].conf,
              q = e[g].node;
            if (f.key)
              if (f.key === a) b._buttonsHandled = !0, d(q).click();
              else if (d.isPlainObject(f.key) && f.key.key === a && (!f.key.shiftKey || b.shiftKey))
                if (!f.key.altKey || b.altKey)
                  if (!f.key.ctrlKey ||
                    b.ctrlKey)
                    if (!f.key.metaKey || b.metaKey) b._buttonsHandled = !0, d(q).click();
            e[g].buttons.length && c(e[g].buttons)
          }
        };
        c(this.s.buttons)
      }
    },
    _removeKey: function (a) {
      if (a.key) {
        var b = d.isPlainObject(a.key) ? a.key.key : a.key,
          a = this.s.listenKeys.split(""),
          b = d.inArray(b, a);
        a.splice(b, 1);
        this.s.listenKeys = a.join("")
      }
    },
    _resolveExtends: function (a) {
      for (var b = this.s.dt, c, e, g = function (c) {
        for (var e = 0; !d.isPlainObject(c) && !d.isArray(c);) {
          if (c === m) return;
          if ("function" === typeof c) {
            if (c = c(b, a), !c) return !1
          } else if ("string" ===
            typeof c) {
            if (!k[c]) throw "Unknown button type: " + c;
            c = k[c]
          }
          e++;
          if (30 < e) throw "Buttons: Too many iterations";
        }
        return d.isArray(c) ? c : d.extend({}, c)
      }, a = g(a); a && a.extend;) {
        if (!k[a.extend]) throw "Cannot extend unknown button type: " + a.extend;
        var h = g(k[a.extend]);
        if (d.isArray(h)) return h;
        if (!h) return !1;
        c = h.className;
        a = d.extend({}, h, a);
        c && a.className !== c && (a.className = c + " " + a.className);
        var f = a.postfixButtons;
        if (f) {
          a.buttons || (a.buttons = []);
          c = 0;
          for (e = f.length; c < e; c++) a.buttons.push(f[c]);
          a.postfixButtons = null
        }
        if (f =
          a.prefixButtons) {
          a.buttons || (a.buttons = []);
          c = 0;
          for (e = f.length; c < e; c++) a.buttons.splice(c, 0, f[c]);
          a.prefixButtons = null
        }
        a.extend = h.extend
      }
      return a
    }
  });
  l.background = function (a, b, c) {
    c === m && (c = 400);
    a ? d("<div/>").addClass(b).css("display", "none").appendTo("body").fadeIn(c) : d("body > div." + b).fadeOut(c, function () {
      d(this).removeClass(b).remove()
    })
  };
  l.instanceSelector = function (a, b) {
    if (!a) return d.map(b, function (a) {
      return a.inst
    });
    var c = [],
      e = d.map(b, function (a) {
        return a.name
      }),
      g = function (a) {
        if (d.isArray(a))
          for (var f =
            0, q = a.length; f < q; f++) g(a[f]);
        else "string" === typeof a ? -1 !== a.indexOf(",") ? g(a.split(",")) : (a = d.inArray(d.trim(a), e), -1 !== a && c.push(b[a].inst)) : "number" === typeof a && c.push(b[a].inst)
      };
    g(a);
    return c
  };
  l.buttonSelector = function (a, b) {
    for (var c = [], e = function (a, b, c) {
      for (var d, g, f = 0, h = b.length; f < h; f++)
        if (d = b[f]) g = c !== m ? c + f : f + "", a.push({
          node: d.node,
          name: d.conf.name,
          idx: g
        }), d.buttons && e(a, d.buttons, g + "-")
    }, g = function (a, b) {
      var f, h, i = [];
      e(i, b.s.buttons);
      f = d.map(i, function (a) {
        return a.node
      });
      if (d.isArray(a) || a instanceof d) {
        f = 0;
        for (h = a.length; f < h; f++) g(a[f], b)
      } else if (null === a || a === m || "*" === a) {
        f = 0;
        for (h = i.length; f < h; f++) c.push({
          inst: b,
          node: i[f].node
        })
      } else if ("number" === typeof a) c.push({
        inst: b,
        node: b.s.buttons[a].node
      });
      else if ("string" === typeof a)
        if (-1 !== a.indexOf(",")) {
          i = a.split(",");
          f = 0;
          for (h = i.length; f < h; f++) g(d.trim(i[f]), b)
        } else if (a.match(/^\d+(\-\d+)*$/)) f = d.map(i, function (a) {
          return a.idx
        }), c.push({
          inst: b,
          node: i[d.inArray(a, f)].node
        });
        else if (-1 !== a.indexOf(":name")) {
          var k = a.replace(":name", "");
          f = 0;
          for (h =
                 i.length; f < h; f++) i[f].name === k && c.push({
            inst: b,
            node: i[f].node
          })
        } else d(f).filter(a).each(function () {
          c.push({
            inst: b,
            node: this
          })
        });
      else "object" === typeof a && a.nodeName && (i = d.inArray(a, f), -1 !== i && c.push({
          inst: b,
          node: f[i]
        }))
    }, h = 0, f = a.length; h < f; h++) g(b, a[h]);
    return c
  };
  l.defaults = {
    buttons: ["کپی", "اکسل", "csv", "پی دی اف", "چاپ"],
    name: "main",
    tabIndex: 0,
    dom: {
      container: {
        tag: "div",
        className: "dt-buttons"
      },
      collection: {
        tag: "div",
        className: "dt-button-collection"
      },
      button: {
        tag: "button",
        className: "dt-button",
        active: "active",
        disabled: "disabled"
      },
      buttonLiner: {
        tag: "span",
        className: ""
      }
    }
  };
  l.version = "1.5.2";
  d.extend(k, {
    collection: {
      text: function (a) {
        return a.i18n("buttons.collection", "Collection")
      },
      className: "buttons-collection",
      action: function (a, b, c, e) {
        var g = d(c).parents("div.dt-button-collection"),
          a = c.position(),
          h = d(b.table().container()),
          f = !1,
          i = c;
        g.length && (f = d(".dt-button-collection").position(), i = g, d("body").trigger("click.dtb-collection"));
        i.parents("body")[0] !== o.body && (i = o.body.lastChild);
        e._collection.addClass(e.collectionLayout).css("display",
          "none").insertAfter(i).fadeIn(e.fade);
        g = e._collection.css("position");
        f && "absolute" === g ? e._collection.css({
          top: f.top,
          left: f.left
        }) : "absolute" === g ? (e._collection.css({
          top: a.top + c.outerHeight(),
          left: a.left
        }), f = h.offset().top + h.height(), f = a.top + c.outerHeight() + e._collection.outerHeight() - f, g = a.top - e._collection.outerHeight(), g = h.offset().top - g, (f > g || e.dropup) && e._collection.css("top", a.top - e._collection.outerHeight() - 5), f = a.left + e._collection.outerWidth(), h = h.offset().left + h.width(), f > h && e._collection.css("left",
          a.left - (f - h)), c = c.offset().left + e._collection.outerWidth(), c > d(n).width() && e._collection.css("left", a.left - (c - d(n).width()))) : (c = e._collection.height() / 2, c > d(n).height() / 2 && (c = d(n).height() / 2), e._collection.css("marginTop", -1 * c));
        e.background && l.background(!0, e.backgroundClassName, e.fade);
        var j = function () {
          e._collection.fadeOut(e.fade, function () {
            e._collection.detach()
          });
          d("div.dt-button-background").off("click.dtb-collection");
          l.background(false, e.backgroundClassName, e.fade);
          d("body").off(".dtb-collection");
          b.off("buttons-action.b-internal")
        };
        setTimeout(function () {
          d("div.dt-button-background").on("click.dtb-collection", function () {});
          d("body").on("click.dtb-collection", function (a) {
            var b = d.fn.addBack ? "addBack" : "andSelf";
            d(a.target).parents()[b]().filter(e._collection).length || j()
          }).on("keyup.dtb-collection", function (a) {
            a.keyCode === 27 && j()
          });
          if (e.autoClose) b.on("buttons-action.b-internal", function () {
            j()
          })
        }, 10)
      },
      background: !0,
      collectionLayout: "",
      backgroundClassName: "dt-button-background",
      autoClose: !1,
      fade: 400,
      attr: {
        "aria-haspopup": !0
      }
    },
    copy: function (a, b) {
      if (k.copyHtml5) return "copyHtml5";
      if (k.copyFlash && k.copyFlash.available(a, b)) return "copyFlash"
    },
    csv: function (a, b) {
      if (k.csvHtml5 && k.csvHtml5.available(a, b)) return "csvHtml5";
      if (k.csvFlash && k.csvFlash.available(a, b)) return "csvFlash"
    },
    excel: function (a, b) {
      if (k.excelHtml5 && k.excelHtml5.available(a, b)) return "excelHtml5";
      if (k.excelFlash && k.excelFlash.available(a, b)) return "excelFlash"
    },
    pdf: function (a, b) {
      if (k.pdfHtml5 && k.pdfHtml5.available(a, b)) return "pdfHtml5";
      if (k.pdfFlash && k.pdfFlash.available(a, b)) return "pdfFlash"
    },
    pageLength: function (a) {
      var a = a.settings()[0].aLengthMenu,
        b = d.isArray(a[0]) ? a[0] : a,
        c = d.isArray(a[0]) ? a[1] : a,
        e = function (a) {
          return a.i18n("buttons.pageLength", {
            "-1": "Show all rows",
            _: "Show %d rows"
          }, a.page.len())
        };
      return {
        extend: "collection",
        text: e,
        className: "buttons-page-length",
        autoClose: !0,
        buttons: d.map(b, function (a, b) {
          return {
            text: c[b],
            className: "button-page-length",
            action: function (b, c) {
              c.page.len(a).draw()
            },
            init: function (b, c, e) {
              var d = this,
                c = function () {
                  d.active(b.page.len() === a)
                };
              b.on("length.dt" + e.namespace, c);
              c()
            },
            destroy: function (a, b, c) {
              a.off("length.dt" + c.namespace)
            }
          }
        }),
        init: function (a, b, c) {
          var d = this;
          a.on("length.dt" + c.namespace, function () {
            d.text(e(a))
          })
        },
        destroy: function (a, b, c) {
          a.off("length.dt" + c.namespace)
        }
      }
    }
  });
  i.Api.register("buttons()", function (a, b) {
    b === m && (b = a, a = m);
    this.selector.buttonGroup = a;
    var c = this.iterator(!0, "table", function (c) {
      if (c._buttons) return l.buttonSelector(l.instanceSelector(a, c._buttons), b)
    }, !0);
    c._groupSelector =
      a;
    return c
  });
  i.Api.register("button()", function (a, b) {
    var c = this.buttons(a, b);
    1 < c.length && c.splice(1, c.length);
    return c
  });
  i.Api.registerPlural("buttons().active()", "button().active()", function (a) {
    return a === m ? this.map(function (a) {
      return a.inst.active(a.node)
    }) : this.each(function (b) {
      b.inst.active(b.node, a)
    })
  });
  i.Api.registerPlural("buttons().action()", "button().action()", function (a) {
    return a === m ? this.map(function (a) {
      return a.inst.action(a.node)
    }) : this.each(function (b) {
      b.inst.action(b.node, a)
    })
  });
  i.Api.register(["buttons().enable()",
    "button().enable()"], function (a) {
    return this.each(function (b) {
      b.inst.enable(b.node, a)
    })
  });
  i.Api.register(["buttons().disable()", "button().disable()"], function () {
    return this.each(function (a) {
      a.inst.disable(a.node)
    })
  });
  i.Api.registerPlural("buttons().nodes()", "button().node()", function () {
    var a = d();
    d(this.each(function (b) {
      a = a.add(b.inst.node(b.node))
    }));
    return a
  });
  i.Api.registerPlural("buttons().processing()", "button().processing()", function (a) {
    return a === m ? this.map(function (a) {
        return a.inst.processing(a.node)
      }) :
      this.each(function (b) {
        b.inst.processing(b.node, a)
      })
  });
  i.Api.registerPlural("buttons().text()", "button().text()", function (a) {
    return a === m ? this.map(function (a) {
      return a.inst.text(a.node)
    }) : this.each(function (b) {
      b.inst.text(b.node, a)
    })
  });
  i.Api.registerPlural("buttons().trigger()", "button().trigger()", function () {
    return this.each(function (a) {
      a.inst.node(a.node).trigger("click")
    })
  });
  i.Api.registerPlural("buttons().containers()", "buttons().container()", function () {
    var a = d(),
      b = this._groupSelector;
    this.iterator(!0,
      "table",
      function (c) {
        if (c._buttons)
          for (var c = l.instanceSelector(b, c._buttons), d = 0, g = c.length; d < g; d++) a = a.add(c[d].container())
      });
    return a
  });
  i.Api.register("button().add()", function (a, b) {
    var c = this.context;
    c.length && (c = l.instanceSelector(this._groupSelector, c[0]._buttons), c.length && c[0].add(b, a));
    return this.button(this._groupSelector, a)
  });
  i.Api.register("buttons().destroy()", function () {
    this.pluck("inst").unique().each(function (a) {
      a.destroy()
    });
    return this
  });
  i.Api.registerPlural("buttons().remove()",
    "buttons().remove()",
    function () {
      this.each(function (a) {
        a.inst.remove(a.node)
      });
      return this
    });
  var r;
  i.Api.register("buttons.info()", function (a, b, c) {
    var e = this;
    if (!1 === a) return d("#datatables_buttons_info").fadeOut(function () {
      d(this).remove()
    }), clearTimeout(r), r = null, this;
    r && clearTimeout(r);
    d("#datatables_buttons_info").length && d("#datatables_buttons_info").remove();
    d('<div id="datatables_buttons_info" class="dt-button-info"/>').html(a ? "<h2>" + a + "</h2>" : "").append(d("<div/>")["string" === typeof b ? "html" :
      "append"](b)).css("display", "none").appendTo("body").fadeIn();
    c !== m && 0 !== c && (r = setTimeout(function () {
      e.buttons.info(!1)
    }, c));
    return this
  });
  i.Api.register("buttons.exportData()", function (a) {
    if (this.context.length) {
      var b = new i.Api(this.context[0]),
        c = d.extend(!0, {}, {
          rows: null,
          columns: "",
          modifier: {
            search: "applied",
            order: "applied"
          },
          orthogonal: "display",
          stripHtml: !0,
          stripNewlines: !0,
          decodeEntities: !0,
          trim: !0,
          format: {
            header: function (a) {
              return e(a)
            },
            footer: function (a) {
              return e(a)
            },
            body: function (a) {
              return e(a)
            }
          },
          customizeData: null
        }, a),
        e = function (a) {
          if ("string" !== typeof a) return a;
          a = a.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
          a = a.replace(/<!\-\-.*?\-\->/g, "");
          c.stripHtml && (a = a.replace(/<[^>]*>/g, ""));
          c.trim && (a = a.replace(/^\s+|\s+$/g, ""));
          c.stripNewlines && (a = a.replace(/\n/g, " "));
          c.decodeEntities && (v.innerHTML = a, a = v.value);
          return a
        },
        a = b.columns(c.columns).indexes().map(function (a) {
          var d = b.column(a).header();
          return c.format.header(d.innerHTML, a, d)
        }).toArray(),
        g = b.table().footer() ? b.columns(c.columns).indexes().map(function (a) {
          var d =
            b.column(a).footer();
          return c.format.footer(d ? d.innerHTML : "", a, d)
        }).toArray() : null,
        h = d.extend({}, c.modifier);
      b.select && "function" === typeof b.select.info && h.selected === m && b.rows(c.rows, d.extend({
        selected: !0
      }, h)).any() && d.extend(h, {
        selected: !0
      });
      for (var h = b.rows(c.rows, h).indexes().toArray(), f = b.cells(h, c.columns), h = f.render(c.orthogonal).toArray(), f = f.nodes().toArray(), k = a.length, j = [], l = 0, n = 0, o = 0 < k ? h.length / k : 0; n < o; n++) {
        for (var r = [k], s = 0; s < k; s++) r[s] = c.format.body(h[l], n, s, f[l]), l++;
        j[n] = r
      }
      a = {
        header: a,
        footer: g,
        body: j
      };
      c.customizeData && c.customizeData(a);
      return a
    }
  });
  i.Api.register("buttons.exportInfo()", function (a) {
    a || (a = {});
    var b;
    var c = a;
    b = "*" === c.filename && "*" !== c.title && c.title !== m && null !== c.title && "" !== c.title ? c.title : c.filename;
    "function" === typeof b && (b = b());
    b === m || null === b ? b = null : (-1 !== b.indexOf("*") && (b = d.trim(b.replace("*", d("head > title").text()))), b = b.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g, ""), (c = t(c.extension)) || (c = ""), b += c);
    c = t(a.title);
    c = null === c ? null : -1 !== c.indexOf("*") ?
      c.replace("*", d("head > title").text() || "Exported data") : c;
    return {
      filename: b,
      title: c,
      messageTop: w(this, a.message || a.messageTop, "top"),
      messageBottom: w(this, a.messageBottom, "bottom")
    }
  });
  var t = function (a) {
      return null === a || a === m ? null : "function" === typeof a ? a() : a
    },
    w = function (a, b, c) {
      b = t(b);
      if (null === b) return null;
      a = d("caption", a.table().container()).eq(0);
      return "*" === b ? a.css("caption-side") !== c ? null : a.length ? a.text() : "" : b
    },
    v = d("<textarea/>")[0];
  d.fn.dataTable.Buttons = l;
  d.fn.DataTable.Buttons = l;
  d(o).on("init.dt plugin-init.dt",
    function (a, b) {
      if ("dt" === a.namespace) {
        var c = b.oInit.buttons || i.defaults.buttons;
        c && !b._buttons && (new l(b, c)).container()
      }
    });
  i.ext.feature.push({
    fnInit: function (a) {
      var a = new i.Api(a),
        b = a.init().buttons || i.defaults.buttons;
      return (new l(a, b)).container()
    },
    cFeature: "B"
  });
  return l
});


/*!
 Bootstrap integration for DataTables' Buttons
 ©2016 SpryMedia Ltd - datatables.net/license
*/
(function(c) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-buttons"], function(a) {
    return c(a, window, document)
  }) : "object" === typeof exports ? module.exports = function(a, b) {
    a || (a = window);
    if (!b || !b.fn.dataTable) b = require("datatables.net-bs4")(a, b).$;
    b.fn.dataTable.Buttons || require("datatables.net-buttons")(a, b);
    return c(b, a, a.document)
  } : c(jQuery, window, document)
})(function(c) {
  var a = c.fn.dataTable;
  c.extend(!0, a.Buttons.defaults, {
    dom: {
      container: {
        className: "dt-buttons btn-group"
      },
      button: {
        className: "btn btn-light"
      },
      collection: {
        tag: "div",
        className: "dt-button-collection dropdown-menu",
        button: {
          tag: "a",
          className: "dt-button dropdown-item",
          active: "active",
          disabled: "disabled"
        }
      }
    }
  });
  a.ext.buttons.collection.className += " dropdown-toggle";
  return a.Buttons
});

/*!

JSZip v3.1.3 - A Javascript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.JSZip=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";var d=a("./utils"),e=a("./support"),f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";c.encode=function(a){for(var b,c,e,g,h,i,j,k=[],l=0,m=a.length,n=m,o="string"!==d.getTypeOf(a);l<a.length;)n=m-l,o?(b=a[l++],c=l<m?a[l++]:0,e=l<m?a[l++]:0):(b=a.charCodeAt(l++),c=l<m?a.charCodeAt(l++):0,e=l<m?a.charCodeAt(l++):0),g=b>>2,h=(3&b)<<4|c>>4,i=n>1?(15&c)<<2|e>>6:64,j=n>2?63&e:64,k.push(f.charAt(g)+f.charAt(h)+f.charAt(i)+f.charAt(j));return k.join("")},c.decode=function(a){var b,c,d,g,h,i,j,k=0,l=0,m="data:";if(a.substr(0,m.length)===m)throw new Error("Invalid base64 input, it looks like a data url.");a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");var n=3*a.length/4;if(a.charAt(a.length-1)===f.charAt(64)&&n--,a.charAt(a.length-2)===f.charAt(64)&&n--,n%1!==0)throw new Error("Invalid base64 input, bad content length.");var o;for(o=e.uint8array?new Uint8Array(0|n):new Array(0|n);k<a.length;)g=f.indexOf(a.charAt(k++)),h=f.indexOf(a.charAt(k++)),i=f.indexOf(a.charAt(k++)),j=f.indexOf(a.charAt(k++)),b=g<<2|h>>4,c=(15&h)<<4|i>>2,d=(3&i)<<6|j,o[l++]=b,64!==i&&(o[l++]=c),64!==j&&(o[l++]=d);return o}},{"./support":30,"./utils":32}],2:[function(a,b,c){"use strict";function d(a,b,c,d,e){this.compressedSize=a,this.uncompressedSize=b,this.crc32=c,this.compression=d,this.compressedContent=e}var e=a("./external"),f=a("./stream/DataWorker"),g=a("./stream/DataLengthProbe"),h=a("./stream/Crc32Probe"),g=a("./stream/DataLengthProbe");d.prototype={getContentWorker:function(){var a=new f(e.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new g("data_length")),b=this;return a.on("end",function(){if(this.streamInfo.data_length!==b.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),a},getCompressedWorker:function(){return new f(e.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},d.createWorkerFrom=function(a,b,c){return a.pipe(new h).pipe(new g("uncompressedSize")).pipe(b.compressWorker(c)).pipe(new g("compressedSize")).withStreamInfo("compression",b)},b.exports=d},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(a,b,c){"use strict";var d=a("./stream/GenericWorker");c.STORE={magic:"\0\0",compressWorker:function(a){return new d("STORE compression")},uncompressWorker:function(){return new d("STORE decompression")}},c.DEFLATE=a("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(a,b,c){"use strict";function d(){for(var a,b=[],c=0;c<256;c++){a=c;for(var d=0;d<8;d++)a=1&a?3988292384^a>>>1:a>>>1;b[c]=a}return b}function e(a,b,c,d){var e=h,f=d+c;a^=-1;for(var g=d;g<f;g++)a=a>>>8^e[255&(a^b[g])];return a^-1}function f(a,b,c,d){var e=h,f=d+c;a^=-1;for(var g=d;g<f;g++)a=a>>>8^e[255&(a^b.charCodeAt(g))];return a^-1}var g=a("./utils"),h=d();b.exports=function(a,b){if("undefined"==typeof a||!a.length)return 0;var c="string"!==g.getTypeOf(a);return c?e(0|b,a,a.length,0):f(0|b,a,a.length,0)}},{"./utils":32}],5:[function(a,b,c){"use strict";c.base64=!1,c.binary=!1,c.dir=!1,c.createFolders=!0,c.date=null,c.compression=null,c.compressionOptions=null,c.comment=null,c.unixPermissions=null,c.dosPermissions=null},{}],6:[function(a,b,c){"use strict";var d=null;d="undefined"!=typeof Promise?Promise:a("lie"),b.exports={Promise:d}},{lie:58}],7:[function(a,b,c){"use strict";function d(a,b){h.call(this,"FlateWorker/"+a),this._pako=new f[a]({raw:!0,level:b.level||-1}),this.meta={};var c=this;this._pako.onData=function(a){c.push({data:a,meta:c.meta})}}var e="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,f=a("pako"),g=a("./utils"),h=a("./stream/GenericWorker"),i=e?"uint8array":"array";c.magic="\b\0",g.inherits(d,h),d.prototype.processChunk=function(a){this.meta=a.meta,this._pako.push(g.transformTo(i,a.data),!1)},d.prototype.flush=function(){h.prototype.flush.call(this),this._pako.push([],!0)},d.prototype.cleanUp=function(){h.prototype.cleanUp.call(this),this._pako=null},c.compressWorker=function(a){return new d("Deflate",a)},c.uncompressWorker=function(){return new d("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:59}],8:[function(a,b,c){"use strict";function d(a,b,c,d){f.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=b,this.zipPlatform=c,this.encodeFileName=d,this.streamFiles=a,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}var e=a("../utils"),f=a("../stream/GenericWorker"),g=a("../utf8"),h=a("../crc32"),i=a("../signature"),j=function(a,b){var c,d="";for(c=0;c<b;c++)d+=String.fromCharCode(255&a),a>>>=8;return d},k=function(a,b){var c=a;return a||(c=b?16893:33204),(65535&c)<<16},l=function(a,b){return 63&(a||0)},m=function(a,b,c,d,f,m){var n,o,p=a.file,q=a.compression,r=m!==g.utf8encode,s=e.transformTo("string",m(p.name)),t=e.transformTo("string",g.utf8encode(p.name)),u=p.comment,v=e.transformTo("string",m(u)),w=e.transformTo("string",g.utf8encode(u)),x=t.length!==p.name.length,y=w.length!==u.length,z="",A="",B="",C=p.dir,D=p.date,E={crc32:0,compressedSize:0,uncompressedSize:0};b&&!c||(E.crc32=a.crc32,E.compressedSize=a.compressedSize,E.uncompressedSize=a.uncompressedSize);var F=0;b&&(F|=8),r||!x&&!y||(F|=2048);var G=0,H=0;C&&(G|=16),"UNIX"===f?(H=798,G|=k(p.unixPermissions,C)):(H=20,G|=l(p.dosPermissions,C)),n=D.getUTCHours(),n<<=6,n|=D.getUTCMinutes(),n<<=5,n|=D.getUTCSeconds()/2,o=D.getUTCFullYear()-1980,o<<=4,o|=D.getUTCMonth()+1,o<<=5,o|=D.getUTCDate(),x&&(A=j(1,1)+j(h(s),4)+t,z+="up"+j(A.length,2)+A),y&&(B=j(1,1)+j(h(v),4)+w,z+="uc"+j(B.length,2)+B);var I="";I+="\n\0",I+=j(F,2),I+=q.magic,I+=j(n,2),I+=j(o,2),I+=j(E.crc32,4),I+=j(E.compressedSize,4),I+=j(E.uncompressedSize,4),I+=j(s.length,2),I+=j(z.length,2);var J=i.LOCAL_FILE_HEADER+I+s+z,K=i.CENTRAL_FILE_HEADER+j(H,2)+I+j(v.length,2)+"\0\0\0\0"+j(G,4)+j(d,4)+s+z+v;return{fileRecord:J,dirRecord:K}},n=function(a,b,c,d,f){var g="",h=e.transformTo("string",f(d));return g=i.CENTRAL_DIRECTORY_END+"\0\0\0\0"+j(a,2)+j(a,2)+j(b,4)+j(c,4)+j(h.length,2)+h},o=function(a){var b="";return b=i.DATA_DESCRIPTOR+j(a.crc32,4)+j(a.compressedSize,4)+j(a.uncompressedSize,4)};e.inherits(d,f),d.prototype.push=function(a){var b=a.meta.percent||0,c=this.entriesCount,d=this._sources.length;this.accumulate?this.contentBuffer.push(a):(this.bytesWritten+=a.data.length,f.prototype.push.call(this,{data:a.data,meta:{currentFile:this.currentFile,percent:c?(b+100*(c-d-1))/c:100}}))},d.prototype.openedSource=function(a){this.currentSourceOffset=this.bytesWritten,this.currentFile=a.file.name;var b=this.streamFiles&&!a.file.dir;if(b){var c=m(a,b,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:c.fileRecord,meta:{percent:0}})}else this.accumulate=!0},d.prototype.closedSource=function(a){this.accumulate=!1;var b=this.streamFiles&&!a.file.dir,c=m(a,b,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(c.dirRecord),b)this.push({data:o(a),meta:{percent:100}});else for(this.push({data:c.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},d.prototype.flush=function(){for(var a=this.bytesWritten,b=0;b<this.dirRecords.length;b++)this.push({data:this.dirRecords[b],meta:{percent:100}});var c=this.bytesWritten-a,d=n(this.dirRecords.length,c,a,this.zipComment,this.encodeFileName);this.push({data:d,meta:{percent:100}})},d.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},d.prototype.registerPrevious=function(a){this._sources.push(a);var b=this;return a.on("data",function(a){b.processChunk(a)}),a.on("end",function(){b.closedSource(b.previous.streamInfo),b._sources.length?b.prepareNextSource():b.end()}),a.on("error",function(a){b.error(a)}),this},d.prototype.resume=function(){return!!f.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},d.prototype.error=function(a){var b=this._sources;if(!f.prototype.error.call(this,a))return!1;for(var c=0;c<b.length;c++)try{b[c].error(a)}catch(a){}return!0},d.prototype.lock=function(){f.prototype.lock.call(this);for(var a=this._sources,b=0;b<a.length;b++)a[b].lock()},b.exports=d},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(a,b,c){"use strict";var d=a("../compressions"),e=a("./ZipFileWorker"),f=function(a,b){var c=a||b,e=d[c];if(!e)throw new Error(c+" is not a valid compression method !");return e};c.generateWorker=function(a,b,c){var d=new e(b.streamFiles,c,b.platform,b.encodeFileName),g=0;try{a.forEach(function(a,c){g++;var e=f(c.options.compression,b.compression),h=c.options.compressionOptions||b.compressionOptions||{},i=c.dir,j=c.date;c._compressWorker(e,h).withStreamInfo("file",{name:a,dir:i,date:j,comment:c.comment||"",unixPermissions:c.unixPermissions,dosPermissions:c.dosPermissions}).pipe(d)}),d.entriesCount=g}catch(h){d.error(h)}return d}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(a,b,c){"use strict";function d(){if(!(this instanceof d))return new d;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files={},this.comment=null,this.root="",this.clone=function(){var a=new d;for(var b in this)"function"!=typeof this[b]&&(a[b]=this[b]);return a}}d.prototype=a("./object"),d.prototype.loadAsync=a("./load"),d.support=a("./support"),d.defaults=a("./defaults"),d.version="3.1.3",d.loadAsync=function(a,b){return(new d).loadAsync(a,b)},d.external=a("./external"),b.exports=d},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(a,b,c){"use strict";function d(a){return new f.Promise(function(b,c){var d=a.decompressed.getContentWorker().pipe(new i);d.on("error",function(a){c(a)}).on("end",function(){d.streamInfo.crc32!==a.decompressed.crc32?c(new Error("Corrupted zip : CRC32 mismatch")):b()}).resume()})}var e=a("./utils"),f=a("./external"),g=a("./utf8"),e=a("./utils"),h=a("./zipEntries"),i=a("./stream/Crc32Probe"),j=a("./nodejsUtils");b.exports=function(a,b){var c=this;return b=e.extend(b||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:g.utf8decode}),j.isNode&&j.isStream(a)?f.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):e.prepareContent("the loaded zip file",a,!0,b.optimizedBinaryString,b.base64).then(function(a){var c=new h(b);return c.load(a),c}).then(function(a){var c=[f.Promise.resolve(a)],e=a.files;if(b.checkCRC32)for(var g=0;g<e.length;g++)c.push(d(e[g]));return f.Promise.all(c)}).then(function(a){for(var d=a.shift(),e=d.files,f=0;f<e.length;f++){var g=e[f];c.file(g.fileNameStr,g.decompressed,{binary:!0,optimizedBinaryString:!0,date:g.date,dir:g.dir,comment:g.fileCommentStr.length?g.fileCommentStr:null,unixPermissions:g.unixPermissions,dosPermissions:g.dosPermissions,createFolders:b.createFolders})}return d.zipComment.length&&(c.comment=d.zipComment),c})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(a,b,c){"use strict";function d(a,b){f.call(this,"Nodejs stream input adapter for "+a),this._upstreamEnded=!1,this._bindStream(b)}var e=a("../utils"),f=a("../stream/GenericWorker");e.inherits(d,f),d.prototype._bindStream=function(a){var b=this;this._stream=a,a.pause(),a.on("data",function(a){b.push({data:a,meta:{percent:0}})}).on("error",function(a){b.isPaused?this.generatedError=a:b.error(a)}).on("end",function(){b.isPaused?b._upstreamEnded=!0:b.end()})},d.prototype.pause=function(){return!!f.prototype.pause.call(this)&&(this._stream.pause(),!0)},d.prototype.resume=function(){return!!f.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},b.exports=d},{"../stream/GenericWorker":28,"../utils":32}],13:[function(a,b,c){"use strict";function d(a,b,c){e.call(this,b),this._helper=a;var d=this;a.on("data",function(a,b){d.push(a)||d._helper.pause(),c&&c(b)}).on("error",function(a){d.emit("error",a)}).on("end",function(){d.push(null)})}var e=a("readable-stream").Readable,f=a("util");f.inherits(d,e),d.prototype._read=function(){this._helper.resume()},b.exports=d},{"readable-stream":16,util:void 0}],14:[function(a,b,c){"use strict";b.exports={isNode:"undefined"!=typeof Buffer,newBuffer:function(a,b){return new Buffer(a,b)},isBuffer:function(a){return Buffer.isBuffer(a)},isStream:function(a){return a&&"function"==typeof a.on&&"function"==typeof a.pause&&"function"==typeof a.resume}}},{}],15:[function(a,b,c){"use strict";function d(a){return"[object RegExp]"===Object.prototype.toString.call(a)}var e=a("./utf8"),f=a("./utils"),g=a("./stream/GenericWorker"),h=a("./stream/StreamHelper"),i=a("./defaults"),j=a("./compressedObject"),k=a("./zipObject"),l=a("./generate"),m=a("./nodejsUtils"),n=a("./nodejs/NodejsStreamInputAdapter"),o=function(a,b,c){var d,e=f.getTypeOf(b),h=f.extend(c||{},i);h.date=h.date||new Date,null!==h.compression&&(h.compression=h.compression.toUpperCase()),"string"==typeof h.unixPermissions&&(h.unixPermissions=parseInt(h.unixPermissions,8)),h.unixPermissions&&16384&h.unixPermissions&&(h.dir=!0),h.dosPermissions&&16&h.dosPermissions&&(h.dir=!0),h.dir&&(a=q(a)),h.createFolders&&(d=p(a))&&r.call(this,d,!0);var l="string"===e&&h.binary===!1&&h.base64===!1;c&&"undefined"!=typeof c.binary||(h.binary=!l);var o=b instanceof j&&0===b.uncompressedSize;(o||h.dir||!b||0===b.length)&&(h.base64=!1,h.binary=!0,b="",h.compression="STORE",e="string");var s=null;s=b instanceof j||b instanceof g?b:m.isNode&&m.isStream(b)?new n(a,b):f.prepareContent(a,b,h.binary,h.optimizedBinaryString,h.base64);var t=new k(a,s,h);this.files[a]=t},p=function(a){"/"===a.slice(-1)&&(a=a.substring(0,a.length-1));var b=a.lastIndexOf("/");return b>0?a.substring(0,b):""},q=function(a){return"/"!==a.slice(-1)&&(a+="/"),a},r=function(a,b){return b="undefined"!=typeof b?b:i.createFolders,a=q(a),this.files[a]||o.call(this,a,null,{dir:!0,createFolders:b}),this.files[a]},s={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(a){var b,c,d;for(b in this.files)this.files.hasOwnProperty(b)&&(d=this.files[b],c=b.slice(this.root.length,b.length),c&&b.slice(0,this.root.length)===this.root&&a(c,d))},filter:function(a){var b=[];return this.forEach(function(c,d){a(c,d)&&b.push(d)}),b},file:function(a,b,c){if(1===arguments.length){if(d(a)){var e=a;return this.filter(function(a,b){return!b.dir&&e.test(a)})}var f=this.files[this.root+a];return f&&!f.dir?f:null}return a=this.root+a,o.call(this,a,b,c),this},folder:function(a){if(!a)return this;if(d(a))return this.filter(function(b,c){return c.dir&&a.test(b)});var b=this.root+a,c=r.call(this,b),e=this.clone();return e.root=c.name,e},remove:function(a){a=this.root+a;var b=this.files[a];if(b||("/"!==a.slice(-1)&&(a+="/"),b=this.files[a]),b&&!b.dir)delete this.files[a];else for(var c=this.filter(function(b,c){return c.name.slice(0,a.length)===a}),d=0;d<c.length;d++)delete this.files[c[d].name];return this},generate:function(a){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(a){var b,c={};try{if(c=f.extend(a||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:e.utf8encode}),c.type=c.type.toLowerCase(),c.compression=c.compression.toUpperCase(),"binarystring"===c.type&&(c.type="string"),!c.type)throw new Error("No output type specified.");f.checkSupport(c.type),"darwin"!==c.platform&&"freebsd"!==c.platform&&"linux"!==c.platform&&"sunos"!==c.platform||(c.platform="UNIX"),"win32"===c.platform&&(c.platform="DOS");var d=c.comment||this.comment||"";b=l.generateWorker(this,c,d)}catch(i){b=new g("error"),b.error(i)}return new h(b,c.type||"string",c.mimeType)},generateAsync:function(a,b){return this.generateInternalStream(a).accumulate(b)},generateNodeStream:function(a,b){return a=a||{},a.type||(a.type="nodebuffer"),this.generateInternalStream(a).toNodejsStream(b)}};b.exports=s},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(a,b,c){b.exports=a("stream")},{stream:void 0}],17:[function(a,b,c){"use strict";function d(a){e.call(this,a);for(var b=0;b<this.data.length;b++)a[b]=255&a[b]}var e=a("./DataReader"),f=a("../utils");f.inherits(d,e),d.prototype.byteAt=function(a){return this.data[this.zero+a]},d.prototype.lastIndexOfSignature=function(a){for(var b=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),e=a.charCodeAt(3),f=this.length-4;f>=0;--f)if(this.data[f]===b&&this.data[f+1]===c&&this.data[f+2]===d&&this.data[f+3]===e)return f-this.zero;return-1},d.prototype.readAndCheckSignature=function(a){var b=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),e=a.charCodeAt(3),f=this.readData(4);return b===f[0]&&c===f[1]&&d===f[2]&&e===f[3]},d.prototype.readData=function(a){if(this.checkOffset(a),0===a)return[];var b=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,b},b.exports=d},{"../utils":32,"./DataReader":18}],18:[function(a,b,c){"use strict";function d(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}var e=a("../utils");d.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(a){},readInt:function(a){var b,c=0;for(this.checkOffset(a),b=this.index+a-1;b>=this.index;b--)c=(c<<8)+this.byteAt(b);return this.index+=a,c},readString:function(a){return e.transformTo("string",this.readData(a))},readData:function(a){},lastIndexOfSignature:function(a){},readAndCheckSignature:function(a){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC((a>>25&127)+1980,(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},b.exports=d},{"../utils":32}],19:[function(a,b,c){"use strict";function d(a){e.call(this,a)}var e=a("./Uint8ArrayReader"),f=a("../utils");f.inherits(d,e),d.prototype.readData=function(a){this.checkOffset(a);var b=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,b},b.exports=d},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(a,b,c){"use strict";function d(a){e.call(this,a)}var e=a("./DataReader"),f=a("../utils");f.inherits(d,e),d.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},d.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},d.prototype.readAndCheckSignature=function(a){var b=this.readData(4);return a===b},d.prototype.readData=function(a){this.checkOffset(a);var b=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,b},b.exports=d},{"../utils":32,"./DataReader":18}],21:[function(a,b,c){"use strict";function d(a){e.call(this,a)}var e=a("./ArrayReader"),f=a("../utils");f.inherits(d,e),d.prototype.readData=function(a){if(this.checkOffset(a),0===a)return new Uint8Array(0);var b=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,b},b.exports=d},{"../utils":32,"./ArrayReader":17}],22:[function(a,b,c){"use strict";var d=a("../utils"),e=a("../support"),f=a("./ArrayReader"),g=a("./StringReader"),h=a("./NodeBufferReader"),i=a("./Uint8ArrayReader");b.exports=function(a){var b=d.getTypeOf(a);return d.checkSupport(b),"string"!==b||e.uint8array?"nodebuffer"===b?new h(a):e.uint8array?new i(d.transformTo("uint8array",a)):new f(d.transformTo("array",a)):new g(a)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(a,b,c){"use strict";c.LOCAL_FILE_HEADER="PK",c.CENTRAL_FILE_HEADER="PK",c.CENTRAL_DIRECTORY_END="PK",c.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",c.ZIP64_CENTRAL_DIRECTORY_END="PK",c.DATA_DESCRIPTOR="PK\b"},{}],24:[function(a,b,c){"use strict";function d(a){e.call(this,"ConvertWorker to "+a),this.destType=a}var e=a("./GenericWorker"),f=a("../utils");f.inherits(d,e),d.prototype.processChunk=function(a){this.push({data:f.transformTo(this.destType,a.data),meta:a.meta})},b.exports=d},{"../utils":32,"./GenericWorker":28}],25:[function(a,b,c){"use strict";function d(){e.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}var e=a("./GenericWorker"),f=a("../crc32"),g=a("../utils");g.inherits(d,e),d.prototype.processChunk=function(a){this.streamInfo.crc32=f(a.data,this.streamInfo.crc32||0),this.push(a)},b.exports=d},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(a,b,c){"use strict";function d(a){f.call(this,"DataLengthProbe for "+a),this.propName=a,this.withStreamInfo(a,0)}var e=a("../utils"),f=a("./GenericWorker");e.inherits(d,f),d.prototype.processChunk=function(a){if(a){var b=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=b+a.data.length}f.prototype.processChunk.call(this,a)},b.exports=d},{"../utils":32,"./GenericWorker":28}],27:[function(a,b,c){"use strict";function d(a){f.call(this,"DataWorker");var b=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,a.then(function(a){b.dataIsReady=!0,b.data=a,b.max=a&&a.length||0,b.type=e.getTypeOf(a),b.isPaused||b._tickAndRepeat()},function(a){b.error(a)})}var e=a("../utils"),f=a("./GenericWorker"),g=16384;e.inherits(d,f),d.prototype.cleanUp=function(){f.prototype.cleanUp.call(this),this.data=null},d.prototype.resume=function(){return!!f.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,e.delay(this._tickAndRepeat,[],this)),!0)},d.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(e.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},d.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var a=g,b=null,c=Math.min(this.max,this.index+a);if(this.index>=this.max)return this.end();switch(this.type){case"string":b=this.data.substring(this.index,c);break;case"uint8array":b=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":b=this.data.slice(this.index,c)}return this.index=c,this.push({data:b,meta:{percent:this.max?this.index/this.max*100:0}})},b.exports=d},{"../utils":32,"./GenericWorker":28}],28:[function(a,b,c){"use strict";function d(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}d.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,b){return this._listeners[a].push(b),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,b){if(this._listeners[a])for(var c=0;c<this._listeners[a].length;c++)this._listeners[a][c].call(this,b)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var b=this;return a.on("data",function(a){b.processChunk(a)}),a.on("end",function(){b.end()}),a.on("error",function(a){b.error(a)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;this.isPaused=!1;var a=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,b){return this.extraStreamInfo[a]=b,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)this.extraStreamInfo.hasOwnProperty(a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},b.exports=d},{}],29:[function(a,b,c){"use strict";function d(a,b,c,d){var f=null;switch(a){case"blob":return h.newBlob(c,d);case"base64":return f=e(b,c),k.encode(f);default:return f=e(b,c),h.transformTo(a,f)}}function e(a,b){var c,d=0,e=null,f=0;for(c=0;c<b.length;c++)f+=b[c].length;switch(a){case"string":return b.join("");case"array":return Array.prototype.concat.apply([],b);case"uint8array":for(e=new Uint8Array(f),c=0;c<b.length;c++)e.set(b[c],d),d+=b[c].length;return e;case"nodebuffer":return Buffer.concat(b);default:throw new Error("concat : unsupported type '"+a+"'")}}function f(a,b){return new m.Promise(function(c,e){var f=[],g=a._internalType,h=a._outputType,i=a._mimeType;a.on("data",function(a,c){f.push(a),b&&b(c)}).on("error",function(a){f=[],e(a)}).on("end",function(){try{var a=d(h,g,f,i);c(a)}catch(b){e(b)}f=[]}).resume()})}function g(a,b,c){var d=b;switch(b){case"blob":d="arraybuffer";break;case"arraybuffer":d="uint8array";break;case"base64":d="string"}try{this._internalType=d,this._outputType=b,this._mimeType=c,h.checkSupport(d),this._worker=a.pipe(new i(d)),a.lock()}catch(e){this._worker=new j("error"),this._worker.error(e)}}var h=a("../utils"),i=a("./ConvertWorker"),j=a("./GenericWorker"),k=a("../base64"),l=a("../support"),m=a("../external"),n=null;if(l.nodestream)try{n=a("../nodejs/NodejsStreamOutputAdapter")}catch(o){}g.prototype={accumulate:function(a){return f(this,a)},on:function(a,b){var c=this;return"data"===a?this._worker.on(a,function(a){b.call(c,a.data,a.meta)}):this._worker.on(a,function(){h.delay(b,arguments,c)}),this},resume:function(){return h.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(a){if(h.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new n(this,{objectMode:"nodebuffer"!==this._outputType},a)}},b.exports=g},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(a,b,c){"use strict";if(c.base64=!0,c.array=!0,c.string=!0,c.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,c.nodebuffer="undefined"!=typeof Buffer,c.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)c.blob=!1;else{var d=new ArrayBuffer(0);try{c.blob=0===new Blob([d],{type:"application/zip"}).size}catch(e){try{var f=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,g=new f;g.append(d),c.blob=0===g.getBlob("application/zip").size}catch(e){c.blob=!1}}}try{c.nodestream=!!a("readable-stream").Readable}catch(e){c.nodestream=!1}},{"readable-stream":16}],31:[function(a,b,c){"use strict";function d(){i.call(this,"utf-8 decode"),this.leftOver=null}function e(){i.call(this,"utf-8 encode")}for(var f=a("./utils"),g=a("./support"),h=a("./nodejsUtils"),i=a("./stream/GenericWorker"),j=new Array(256),k=0;k<256;k++)j[k]=k>=252?6:k>=248?5:k>=240?4:k>=224?3:k>=192?2:1;j[254]=j[254]=1;var l=function(a){var b,c,d,e,f,h=a.length,i=0;for(e=0;e<h;e++)c=a.charCodeAt(e),55296===(64512&c)&&e+1<h&&(d=a.charCodeAt(e+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),e++)),i+=c<128?1:c<2048?2:c<65536?3:4;for(b=g.uint8array?new Uint8Array(i):new Array(i),f=0,e=0;f<i;e++)c=a.charCodeAt(e),55296===(64512&c)&&e+1<h&&(d=a.charCodeAt(e+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),e++)),c<128?b[f++]=c:c<2048?(b[f++]=192|c>>>6,b[f++]=128|63&c):c<65536?(b[f++]=224|c>>>12,b[f++]=128|c>>>6&63,b[f++]=128|63&c):(b[f++]=240|c>>>18,b[f++]=128|c>>>12&63,b[f++]=128|c>>>6&63,b[f++]=128|63&c);return b},m=function(a,b){var c;for(b=b||a.length,b>a.length&&(b=a.length),c=b-1;c>=0&&128===(192&a[c]);)c--;return c<0?b:0===c?b:c+j[a[c]]>b?c:b},n=function(a){var b,c,d,e,g=a.length,h=new Array(2*g);for(c=0,b=0;b<g;)if(d=a[b++],d<128)h[c++]=d;else if(e=j[d],e>4)h[c++]=65533,b+=e-1;else{for(d&=2===e?31:3===e?15:7;e>1&&b<g;)d=d<<6|63&a[b++],e--;e>1?h[c++]=65533:d<65536?h[c++]=d:(d-=65536,h[c++]=55296|d>>10&1023,h[c++]=56320|1023&d)}return h.length!==c&&(h.subarray?h=h.subarray(0,c):h.length=c),f.applyFromCharCode(h)};c.utf8encode=function(a){return g.nodebuffer?h.newBuffer(a,"utf-8"):l(a)},c.utf8decode=function(a){return g.nodebuffer?f.transformTo("nodebuffer",a).toString("utf-8"):(a=f.transformTo(g.uint8array?"uint8array":"array",a),n(a))},f.inherits(d,i),d.prototype.processChunk=function(a){var b=f.transformTo(g.uint8array?"uint8array":"array",a.data);if(this.leftOver&&this.leftOver.length){if(g.uint8array){var d=b;b=new Uint8Array(d.length+this.leftOver.length),b.set(this.leftOver,0),b.set(d,this.leftOver.length)}else b=this.leftOver.concat(b);this.leftOver=null}var e=m(b),h=b;e!==b.length&&(g.uint8array?(h=b.subarray(0,e),this.leftOver=b.subarray(e,b.length)):(h=b.slice(0,e),this.leftOver=b.slice(e,b.length))),this.push({data:c.utf8decode(h),meta:a.meta})},d.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:c.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},c.Utf8DecodeWorker=d,f.inherits(e,i),e.prototype.processChunk=function(a){this.push({data:c.utf8encode(a.data),meta:a.meta})},c.Utf8EncodeWorker=e},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(a,b,c){"use strict";function d(a){var b=null;return b=i.uint8array?new Uint8Array(a.length):new Array(a.length),f(a,b)}function e(a){return a}function f(a,b){for(var c=0;c<a.length;++c)b[c]=255&a.charCodeAt(c);return b}function g(a){var b=65536,d=c.getTypeOf(a),e=!0;if("uint8array"===d?e=n.applyCanBeUsed.uint8array:"nodebuffer"===d&&(e=n.applyCanBeUsed.nodebuffer),e)for(;b>1;)try{return n.stringifyByChunk(a,d,b)}catch(f){b=Math.floor(b/2)}return n.stringifyByChar(a)}function h(a,b){for(var c=0;c<a.length;c++)b[c]=a[c];return b}var i=a("./support"),j=a("./base64"),k=a("./nodejsUtils"),l=a("core-js/library/fn/set-immediate"),m=a("./external");c.newBlob=function(a,b){c.checkSupport("blob");try{return new Blob(a,{type:b})}catch(d){try{for(var e=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,f=new e,g=0;g<a.length;g++)f.append(a[g]);
    return f.getBlob(b)}catch(d){throw new Error("Bug : can't construct the Blob.")}}};var n={stringifyByChunk:function(a,b,c){var d=[],e=0,f=a.length;if(f<=c)return String.fromCharCode.apply(null,a);for(;e<f;)"array"===b||"nodebuffer"===b?d.push(String.fromCharCode.apply(null,a.slice(e,Math.min(e+c,f)))):d.push(String.fromCharCode.apply(null,a.subarray(e,Math.min(e+c,f)))),e+=c;return d.join("")},stringifyByChar:function(a){for(var b="",c=0;c<a.length;c++)b+=String.fromCharCode(a[c]);return b},applyCanBeUsed:{uint8array:function(){try{return i.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(a){return!1}}(),nodebuffer:function(){try{return i.nodebuffer&&1===String.fromCharCode.apply(null,k.newBuffer(1)).length}catch(a){return!1}}()}};c.applyFromCharCode=g;var o={};o.string={string:e,array:function(a){return f(a,new Array(a.length))},arraybuffer:function(a){return o.string.uint8array(a).buffer},uint8array:function(a){return f(a,new Uint8Array(a.length))},nodebuffer:function(a){return f(a,k.newBuffer(a.length))}},o.array={string:g,array:e,arraybuffer:function(a){return new Uint8Array(a).buffer},uint8array:function(a){return new Uint8Array(a)},nodebuffer:function(a){return k.newBuffer(a)}},o.arraybuffer={string:function(a){return g(new Uint8Array(a))},array:function(a){return h(new Uint8Array(a),new Array(a.byteLength))},arraybuffer:e,uint8array:function(a){return new Uint8Array(a)},nodebuffer:function(a){return k.newBuffer(new Uint8Array(a))}},o.uint8array={string:g,array:function(a){return h(a,new Array(a.length))},arraybuffer:function(a){var b=new Uint8Array(a.length);return a.length&&b.set(a,0),b.buffer},uint8array:e,nodebuffer:function(a){return k.newBuffer(a)}},o.nodebuffer={string:g,array:function(a){return h(a,new Array(a.length))},arraybuffer:function(a){return o.nodebuffer.uint8array(a).buffer},uint8array:function(a){return h(a,new Uint8Array(a.length))},nodebuffer:e},c.transformTo=function(a,b){if(b||(b=""),!a)return b;c.checkSupport(a);var d=c.getTypeOf(b),e=o[d][a](b);return e},c.getTypeOf=function(a){return"string"==typeof a?"string":"[object Array]"===Object.prototype.toString.call(a)?"array":i.nodebuffer&&k.isBuffer(a)?"nodebuffer":i.uint8array&&a instanceof Uint8Array?"uint8array":i.arraybuffer&&a instanceof ArrayBuffer?"arraybuffer":void 0},c.checkSupport=function(a){var b=i[a.toLowerCase()];if(!b)throw new Error(a+" is not supported by this platform")},c.MAX_VALUE_16BITS=65535,c.MAX_VALUE_32BITS=-1,c.pretty=function(a){var b,c,d="";for(c=0;c<(a||"").length;c++)b=a.charCodeAt(c),d+="\\x"+(b<16?"0":"")+b.toString(16).toUpperCase();return d},c.delay=function(a,b,c){l(function(){a.apply(c||null,b||[])})},c.inherits=function(a,b){var c=function(){};c.prototype=b.prototype,a.prototype=new c},c.extend=function(){var a,b,c={};for(a=0;a<arguments.length;a++)for(b in arguments[a])arguments[a].hasOwnProperty(b)&&"undefined"==typeof c[b]&&(c[b]=arguments[a][b]);return c},c.prepareContent=function(a,b,e,f,g){var h=m.Promise.resolve(b).then(function(a){var b=i.blob&&(a instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(a))!==-1);return b&&"undefined"!=typeof FileReader?new m.Promise(function(b,c){var d=new FileReader;d.onload=function(a){b(a.target.result)},d.onerror=function(a){c(a.target.error)},d.readAsArrayBuffer(a)}):a});return h.then(function(b){var h=c.getTypeOf(b);return h?("arraybuffer"===h?b=c.transformTo("uint8array",b):"string"===h&&(g?b=j.decode(b):e&&f!==!0&&(b=d(b))),b):m.Promise.reject(new Error("The data of '"+a+"' is in an unsupported format !"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,"core-js/library/fn/set-immediate":36}],33:[function(a,b,c){"use strict";function d(a){this.files=[],this.loadOptions=a}var e=a("./reader/readerFor"),f=a("./utils"),g=a("./signature"),h=a("./zipEntry"),i=(a("./utf8"),a("./support"));d.prototype={checkSignature:function(a){if(!this.reader.readAndCheckSignature(a)){this.reader.index-=4;var b=this.reader.readString(4);throw new Error("Corrupted zip or bug : unexpected signature ("+f.pretty(b)+", expected "+f.pretty(a)+")")}},isSignature:function(a,b){var c=this.reader.index;this.reader.setIndex(a);var d=this.reader.readString(4),e=d===b;return this.reader.setIndex(c),e},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var a=this.reader.readData(this.zipCommentLength),b=i.uint8array?"uint8array":"array",c=f.transformTo(b,a);this.zipComment=this.loadOptions.decodeFileName(c)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var a,b,c,d=this.zip64EndOfCentralSize-44,e=0;e<d;)a=this.reader.readInt(2),b=this.reader.readInt(4),c=this.reader.readData(b),this.zip64ExtensibleData[a]={id:a,length:b,value:c}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),this.disksCount>1)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var a,b;for(a=0;a<this.files.length;a++)b=this.files[a],this.reader.setIndex(b.localHeaderOffset),this.checkSignature(g.LOCAL_FILE_HEADER),b.readLocalPart(this.reader),b.handleUTF8(),b.processAttributes()},readCentralDir:function(){var a;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(g.CENTRAL_FILE_HEADER);)a=new h({zip64:this.zip64},this.loadOptions),a.readCentralPart(this.reader),this.files.push(a);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var a=this.reader.lastIndexOfSignature(g.CENTRAL_DIRECTORY_END);if(a<0){var b=!this.isSignature(0,g.LOCAL_FILE_HEADER);throw b?new Error("Can't find end of central directory : is this a zip file ? If it is, see http://stuk.github.io/jszip/documentation/howto/read_zip.html"):new Error("Corrupted zip : can't find end of central directory")}this.reader.setIndex(a);var c=a;if(this.checkSignature(g.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===f.MAX_VALUE_16BITS||this.diskWithCentralDirStart===f.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===f.MAX_VALUE_16BITS||this.centralDirRecords===f.MAX_VALUE_16BITS||this.centralDirSize===f.MAX_VALUE_32BITS||this.centralDirOffset===f.MAX_VALUE_32BITS){if(this.zip64=!0,a=this.reader.lastIndexOfSignature(g.ZIP64_CENTRAL_DIRECTORY_LOCATOR),a<0)throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(a),this.checkSignature(g.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,g.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(g.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip : can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(g.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var d=this.centralDirOffset+this.centralDirSize;this.zip64&&(d+=20,d+=12+this.zip64EndOfCentralSize);var e=c-d;if(e>0)this.isSignature(c,g.CENTRAL_FILE_HEADER)||(this.reader.zero=e);else if(e<0)throw new Error("Corrupted zip: missing "+Math.abs(e)+" bytes.")},prepareReader:function(a){this.reader=e(a)},load:function(a){this.prepareReader(a),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},b.exports=d},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utf8":31,"./utils":32,"./zipEntry":34}],34:[function(a,b,c){"use strict";function d(a,b){this.options=a,this.loadOptions=b}var e=a("./reader/readerFor"),f=a("./utils"),g=a("./compressedObject"),h=a("./crc32"),i=a("./utf8"),j=a("./compressions"),k=a("./support"),l=0,m=3,n=function(a){for(var b in j)if(j.hasOwnProperty(b)&&j[b].magic===a)return j[b];return null};d.prototype={isEncrypted:function(){return 1===(1&this.bitFlag)},useUTF8:function(){return 2048===(2048&this.bitFlag)},readLocalPart:function(a){var b,c;if(a.skip(22),this.fileNameLength=a.readInt(2),c=a.readInt(2),this.fileName=a.readData(this.fileNameLength),a.skip(c),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(b=n(this.compressionMethod),null===b)throw new Error("Corrupted zip : compression "+f.pretty(this.compressionMethod)+" unknown (inner file : "+f.transformTo("string",this.fileName)+")");this.decompressed=new g(this.compressedSize,this.uncompressedSize,this.crc32,b,a.readData(this.compressedSize))},readCentralPart:function(a){this.versionMadeBy=a.readInt(2),a.skip(2),this.bitFlag=a.readInt(2),this.compressionMethod=a.readString(2),this.date=a.readDate(),this.crc32=a.readInt(4),this.compressedSize=a.readInt(4),this.uncompressedSize=a.readInt(4);var b=a.readInt(2);if(this.extraFieldsLength=a.readInt(2),this.fileCommentLength=a.readInt(2),this.diskNumberStart=a.readInt(2),this.internalFileAttributes=a.readInt(2),this.externalFileAttributes=a.readInt(4),this.localHeaderOffset=a.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");a.skip(b),this.readExtraFields(a),this.parseZIP64ExtraField(a),this.fileComment=a.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var a=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),a===l&&(this.dosPermissions=63&this.externalFileAttributes),a===m&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(a){if(this.extraFields[1]){var b=e(this.extraFields[1].value);this.uncompressedSize===f.MAX_VALUE_32BITS&&(this.uncompressedSize=b.readInt(8)),this.compressedSize===f.MAX_VALUE_32BITS&&(this.compressedSize=b.readInt(8)),this.localHeaderOffset===f.MAX_VALUE_32BITS&&(this.localHeaderOffset=b.readInt(8)),this.diskNumberStart===f.MAX_VALUE_32BITS&&(this.diskNumberStart=b.readInt(4))}},readExtraFields:function(a){var b,c,d,e=a.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});a.index<e;)b=a.readInt(2),c=a.readInt(2),d=a.readData(c),this.extraFields[b]={id:b,length:c,value:d}},handleUTF8:function(){var a=k.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=i.utf8decode(this.fileName),this.fileCommentStr=i.utf8decode(this.fileComment);else{var b=this.findExtraFieldUnicodePath();if(null!==b)this.fileNameStr=b;else{var c=f.transformTo(a,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(c)}var d=this.findExtraFieldUnicodeComment();if(null!==d)this.fileCommentStr=d;else{var e=f.transformTo(a,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(e)}}},findExtraFieldUnicodePath:function(){var a=this.extraFields[28789];if(a){var b=e(a.value);return 1!==b.readInt(1)?null:h(this.fileName)!==b.readInt(4)?null:i.utf8decode(b.readData(a.length-5))}return null},findExtraFieldUnicodeComment:function(){var a=this.extraFields[25461];if(a){var b=e(a.value);return 1!==b.readInt(1)?null:h(this.fileComment)!==b.readInt(4)?null:i.utf8decode(b.readData(a.length-5))}return null}},b.exports=d},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(a,b,c){"use strict";var d=a("./stream/StreamHelper"),e=a("./stream/DataWorker"),f=a("./utf8"),g=a("./compressedObject"),h=a("./stream/GenericWorker"),i=function(a,b,c){this.name=a,this.dir=c.dir,this.date=c.date,this.comment=c.comment,this.unixPermissions=c.unixPermissions,this.dosPermissions=c.dosPermissions,this._data=b,this._dataBinary=c.binary,this.options={compression:c.compression,compressionOptions:c.compressionOptions}};i.prototype={internalStream:function(a){var b=a.toLowerCase(),c="string"===b||"text"===b;"binarystring"!==b&&"text"!==b||(b="string");var e=this._decompressWorker(),g=!this._dataBinary;return g&&!c&&(e=e.pipe(new f.Utf8EncodeWorker)),!g&&c&&(e=e.pipe(new f.Utf8DecodeWorker)),new d(e,b,"")},async:function(a,b){return this.internalStream(a).accumulate(b)},nodeStream:function(a,b){return this.internalStream(a||"nodebuffer").toNodejsStream(b)},_compressWorker:function(a,b){if(this._data instanceof g&&this._data.compression.magic===a.magic)return this._data.getCompressedWorker();var c=this._decompressWorker();return this._dataBinary||(c=c.pipe(new f.Utf8EncodeWorker)),g.createWorkerFrom(c,a,b)},_decompressWorker:function(){return this._data instanceof g?this._data.getContentWorker():this._data instanceof h?this._data:new e(this._data)}};for(var j=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],k=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},l=0;l<j.length;l++)i.prototype[j[l]]=k;b.exports=i},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(a,b,c){a("../modules/web.immediate"),b.exports=a("../modules/_core").setImmediate},{"../modules/_core":40,"../modules/web.immediate":56}],37:[function(a,b,c){b.exports=function(a){if("function"!=typeof a)throw TypeError(a+" is not a function!");return a}},{}],38:[function(a,b,c){var d=a("./_is-object");b.exports=function(a){if(!d(a))throw TypeError(a+" is not an object!");return a}},{"./_is-object":51}],39:[function(a,b,c){var d={}.toString;b.exports=function(a){return d.call(a).slice(8,-1)}},{}],40:[function(a,b,c){var d=b.exports={version:"2.3.0"};"number"==typeof __e&&(__e=d)},{}],41:[function(a,b,c){var d=a("./_a-function");b.exports=function(a,b,c){if(d(a),void 0===b)return a;switch(c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)}}return function(){return a.apply(b,arguments)}}},{"./_a-function":37}],42:[function(a,b,c){b.exports=!a("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./_fails":45}],43:[function(a,b,c){var d=a("./_is-object"),e=a("./_global").document,f=d(e)&&d(e.createElement);b.exports=function(a){return f?e.createElement(a):{}}},{"./_global":46,"./_is-object":51}],44:[function(a,b,c){var d=a("./_global"),e=a("./_core"),f=a("./_ctx"),g=a("./_hide"),h="prototype",i=function(a,b,c){var j,k,l,m=a&i.F,n=a&i.G,o=a&i.S,p=a&i.P,q=a&i.B,r=a&i.W,s=n?e:e[b]||(e[b]={}),t=s[h],u=n?d:o?d[b]:(d[b]||{})[h];n&&(c=b);for(j in c)k=!m&&u&&void 0!==u[j],k&&j in s||(l=k?u[j]:c[j],s[j]=n&&"function"!=typeof u[j]?c[j]:q&&k?f(l,d):r&&u[j]==l?function(a){var b=function(b,c,d){if(this instanceof a){switch(arguments.length){case 0:return new a;case 1:return new a(b);case 2:return new a(b,c)}return new a(b,c,d)}return a.apply(this,arguments)};return b[h]=a[h],b}(l):p&&"function"==typeof l?f(Function.call,l):l,p&&((s.virtual||(s.virtual={}))[j]=l,a&i.R&&t&&!t[j]&&g(t,j,l)))};i.F=1,i.G=2,i.S=4,i.P=8,i.B=16,i.W=32,i.U=64,i.R=128,b.exports=i},{"./_core":40,"./_ctx":41,"./_global":46,"./_hide":47}],45:[function(a,b,c){b.exports=function(a){try{return!!a()}catch(b){return!0}}},{}],46:[function(a,b,c){var d=b.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=d)},{}],47:[function(a,b,c){var d=a("./_object-dp"),e=a("./_property-desc");b.exports=a("./_descriptors")?function(a,b,c){return d.f(a,b,e(1,c))}:function(a,b,c){return a[b]=c,a}},{"./_descriptors":42,"./_object-dp":52,"./_property-desc":53}],48:[function(a,b,c){b.exports=a("./_global").document&&document.documentElement},{"./_global":46}],49:[function(a,b,c){b.exports=!a("./_descriptors")&&!a("./_fails")(function(){return 7!=Object.defineProperty(a("./_dom-create")("div"),"a",{get:function(){return 7}}).a})},{"./_descriptors":42,"./_dom-create":43,"./_fails":45}],50:[function(a,b,c){b.exports=function(a,b,c){var d=void 0===c;switch(b.length){case 0:return d?a():a.call(c);case 1:return d?a(b[0]):a.call(c,b[0]);case 2:return d?a(b[0],b[1]):a.call(c,b[0],b[1]);case 3:return d?a(b[0],b[1],b[2]):a.call(c,b[0],b[1],b[2]);case 4:return d?a(b[0],b[1],b[2],b[3]):a.call(c,b[0],b[1],b[2],b[3])}return a.apply(c,b)}},{}],51:[function(a,b,c){b.exports=function(a){return"object"==typeof a?null!==a:"function"==typeof a}},{}],52:[function(a,b,c){var d=a("./_an-object"),e=a("./_ie8-dom-define"),f=a("./_to-primitive"),g=Object.defineProperty;c.f=a("./_descriptors")?Object.defineProperty:function(a,b,c){if(d(a),b=f(b,!0),d(c),e)try{return g(a,b,c)}catch(h){}if("get"in c||"set"in c)throw TypeError("Accessors not supported!");return"value"in c&&(a[b]=c.value),a}},{"./_an-object":38,"./_descriptors":42,"./_ie8-dom-define":49,"./_to-primitive":55}],53:[function(a,b,c){b.exports=function(a,b){return{enumerable:!(1&a),configurable:!(2&a),writable:!(4&a),value:b}}},{}],54:[function(a,b,c){var d,e,f,g=a("./_ctx"),h=a("./_invoke"),i=a("./_html"),j=a("./_dom-create"),k=a("./_global"),l=k.process,m=k.setImmediate,n=k.clearImmediate,o=k.MessageChannel,p=0,q={},r="onreadystatechange",s=function(){var a=+this;if(q.hasOwnProperty(a)){var b=q[a];delete q[a],b()}},t=function(a){s.call(a.data)};m&&n||(m=function(a){for(var b=[],c=1;arguments.length>c;)b.push(arguments[c++]);return q[++p]=function(){h("function"==typeof a?a:Function(a),b)},d(p),p},n=function(a){delete q[a]},"process"==a("./_cof")(l)?d=function(a){l.nextTick(g(s,a,1))}:o?(e=new o,f=e.port2,e.port1.onmessage=t,d=g(f.postMessage,f,1)):k.addEventListener&&"function"==typeof postMessage&&!k.importScripts?(d=function(a){k.postMessage(a+"","*")},k.addEventListener("message",t,!1)):d=r in j("script")?function(a){i.appendChild(j("script"))[r]=function(){i.removeChild(this),s.call(a)}}:function(a){setTimeout(g(s,a,1),0)}),b.exports={set:m,clear:n}},{"./_cof":39,"./_ctx":41,"./_dom-create":43,"./_global":46,"./_html":48,"./_invoke":50}],55:[function(a,b,c){var d=a("./_is-object");b.exports=function(a,b){if(!d(a))return a;var c,e;if(b&&"function"==typeof(c=a.toString)&&!d(e=c.call(a)))return e;if("function"==typeof(c=a.valueOf)&&!d(e=c.call(a)))return e;if(!b&&"function"==typeof(c=a.toString)&&!d(e=c.call(a)))return e;throw TypeError("Can't convert object to primitive value")}},{"./_is-object":51}],56:[function(a,b,c){var d=a("./_export"),e=a("./_task");d(d.G+d.B,{setImmediate:e.set,clearImmediate:e.clear})},{"./_export":44,"./_task":54}],57:[function(a,b,c){(function(a){"use strict";function c(){k=!0;for(var a,b,c=l.length;c;){for(b=l,l=[],a=-1;++a<c;)b[a]();c=l.length}k=!1}function d(a){1!==l.push(a)||k||e()}var e,f=a.MutationObserver||a.WebKitMutationObserver;if(f){var g=0,h=new f(c),i=a.document.createTextNode("");h.observe(i,{characterData:!0}),e=function(){i.data=g=++g%2}}else if(a.setImmediate||"undefined"==typeof a.MessageChannel)e="document"in a&&"onreadystatechange"in a.document.createElement("script")?function(){var b=a.document.createElement("script");b.onreadystatechange=function(){c(),b.onreadystatechange=null,b.parentNode.removeChild(b),b=null},a.document.documentElement.appendChild(b)}:function(){setTimeout(c,0)};else{var j=new a.MessageChannel;j.port1.onmessage=c,e=function(){j.port2.postMessage(0)}}var k,l=[];b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],58:[function(a,b,c){"use strict";function d(){}function e(a){if("function"!=typeof a)throw new TypeError("resolver must be a function");this.state=s,this.queue=[],this.outcome=void 0,a!==d&&i(this,a)}function f(a,b,c){this.promise=a,"function"==typeof b&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),"function"==typeof c&&(this.onRejected=c,this.callRejected=this.otherCallRejected)}function g(a,b,c){o(function(){var d;try{d=b(c)}catch(e){return p.reject(a,e)}d===a?p.reject(a,new TypeError("Cannot resolve promise with itself")):p.resolve(a,d)})}function h(a){var b=a&&a.then;if(a&&"object"==typeof a&&"function"==typeof b)return function(){b.apply(a,arguments)}}function i(a,b){function c(b){f||(f=!0,p.reject(a,b))}function d(b){f||(f=!0,p.resolve(a,b))}function e(){b(d,c)}var f=!1,g=j(e);"error"===g.status&&c(g.value)}function j(a,b){var c={};try{c.value=a(b),c.status="success"}catch(d){c.status="error",c.value=d}return c}function k(a){return a instanceof this?a:p.resolve(new this(d),a)}function l(a){var b=new this(d);return p.reject(b,a)}function m(a){function b(a,b){function d(a){g[b]=a,++h!==e||f||(f=!0,p.resolve(j,g))}c.resolve(a).then(d,function(a){f||(f=!0,p.reject(j,a))})}var c=this;if("[object Array]"!==Object.prototype.toString.call(a))return this.reject(new TypeError("must be an array"));var e=a.length,f=!1;if(!e)return this.resolve([]);for(var g=new Array(e),h=0,i=-1,j=new this(d);++i<e;)b(a[i],i);return j}function n(a){function b(a){c.resolve(a).then(function(a){f||(f=!0,p.resolve(h,a))},function(a){f||(f=!0,p.reject(h,a))})}var c=this;if("[object Array]"!==Object.prototype.toString.call(a))return this.reject(new TypeError("must be an array"));var e=a.length,f=!1;if(!e)return this.resolve([]);for(var g=-1,h=new this(d);++g<e;)b(a[g]);return h}var o=a("immediate"),p={},q=["REJECTED"],r=["FULFILLED"],s=["PENDING"];b.exports=e,e.prototype["catch"]=function(a){return this.then(null,a)},e.prototype.then=function(a,b){if("function"!=typeof a&&this.state===r||"function"!=typeof b&&this.state===q)return this;var c=new this.constructor(d);if(this.state!==s){var e=this.state===r?a:b;g(c,e,this.outcome)}else this.queue.push(new f(c,a,b));return c},f.prototype.callFulfilled=function(a){p.resolve(this.promise,a)},f.prototype.otherCallFulfilled=function(a){g(this.promise,this.onFulfilled,a)},f.prototype.callRejected=function(a){p.reject(this.promise,a)},f.prototype.otherCallRejected=function(a){g(this.promise,this.onRejected,a)},p.resolve=function(a,b){var c=j(h,b);if("error"===c.status)return p.reject(a,c.value);var d=c.value;if(d)i(a,d);else{a.state=r,a.outcome=b;for(var e=-1,f=a.queue.length;++e<f;)a.queue[e].callFulfilled(b)}return a},p.reject=function(a,b){a.state=q,a.outcome=b;for(var c=-1,d=a.queue.length;++c<d;)a.queue[c].callRejected(b);return a},e.resolve=k,e.reject=l,e.all=m,e.race=n},{immediate:57}],59:[function(a,b,c){"use strict";var d=a("./lib/utils/common").assign,e=a("./lib/deflate"),f=a("./lib/inflate"),g=a("./lib/zlib/constants"),h={};d(h,e,f,g),b.exports=h},{"./lib/deflate":60,"./lib/inflate":61,"./lib/utils/common":62,"./lib/zlib/constants":65}],60:[function(a,b,c){"use strict";function d(a){if(!(this instanceof d))return new d(a);this.options=i.assign({level:s,method:u,chunkSize:16384,windowBits:15,memLevel:8,strategy:t,to:""},a||{});var b=this.options;b.raw&&b.windowBits>0?b.windowBits=-b.windowBits:b.gzip&&b.windowBits>0&&b.windowBits<16&&(b.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var c=h.deflateInit2(this.strm,b.level,b.method,b.windowBits,b.memLevel,b.strategy);if(c!==p)throw new Error(k[c]);if(b.header&&h.deflateSetHeader(this.strm,b.header),b.dictionary){var e;if(e="string"==typeof b.dictionary?j.string2buf(b.dictionary):"[object ArrayBuffer]"===m.call(b.dictionary)?new Uint8Array(b.dictionary):b.dictionary,c=h.deflateSetDictionary(this.strm,e),c!==p)throw new Error(k[c]);this._dict_set=!0}}function e(a,b){var c=new d(b);if(c.push(a,!0),c.err)throw c.msg;return c.result}function f(a,b){return b=b||{},b.raw=!0,e(a,b)}function g(a,b){return b=b||{},b.gzip=!0,e(a,b)}var h=a("./zlib/deflate"),i=a("./utils/common"),j=a("./utils/strings"),k=a("./zlib/messages"),l=a("./zlib/zstream"),m=Object.prototype.toString,n=0,o=4,p=0,q=1,r=2,s=-1,t=0,u=8;d.prototype.push=function(a,b){var c,d,e=this.strm,f=this.options.chunkSize;if(this.ended)return!1;d=b===~~b?b:b===!0?o:n,"string"==typeof a?e.input=j.string2buf(a):"[object ArrayBuffer]"===m.call(a)?e.input=new Uint8Array(a):e.input=a,e.next_in=0,e.avail_in=e.input.length;do{if(0===e.avail_out&&(e.output=new i.Buf8(f),e.next_out=0,e.avail_out=f),c=h.deflate(e,d),c!==q&&c!==p)return this.onEnd(c),this.ended=!0,!1;0!==e.avail_out&&(0!==e.avail_in||d!==o&&d!==r)||("string"===this.options.to?this.onData(j.buf2binstring(i.shrinkBuf(e.output,e.next_out))):this.onData(i.shrinkBuf(e.output,e.next_out)))}while((e.avail_in>0||0===e.avail_out)&&c!==q);return d===o?(c=h.deflateEnd(this.strm),this.onEnd(c),this.ended=!0,c===p):d!==r||(this.onEnd(p),e.avail_out=0,!0)},d.prototype.onData=function(a){this.chunks.push(a)},d.prototype.onEnd=function(a){a===p&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=a,this.msg=this.strm.msg},c.Deflate=d,c.deflate=e,c.deflateRaw=f,c.gzip=g},{"./utils/common":62,"./utils/strings":63,"./zlib/deflate":67,"./zlib/messages":72,"./zlib/zstream":74}],61:[function(a,b,c){"use strict";function d(a){if(!(this instanceof d))return new d(a);this.options=h.assign({chunkSize:16384,windowBits:0,to:""},a||{});var b=this.options;b.raw&&b.windowBits>=0&&b.windowBits<16&&(b.windowBits=-b.windowBits,0===b.windowBits&&(b.windowBits=-15)),!(b.windowBits>=0&&b.windowBits<16)||a&&a.windowBits||(b.windowBits+=32),b.windowBits>15&&b.windowBits<48&&0===(15&b.windowBits)&&(b.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var c=g.inflateInit2(this.strm,b.windowBits);if(c!==j.Z_OK)throw new Error(k[c]);this.header=new m,g.inflateGetHeader(this.strm,this.header)}function e(a,b){var c=new d(b);if(c.push(a,!0),c.err)throw c.msg;return c.result}function f(a,b){return b=b||{},b.raw=!0,e(a,b)}var g=a("./zlib/inflate"),h=a("./utils/common"),i=a("./utils/strings"),j=a("./zlib/constants"),k=a("./zlib/messages"),l=a("./zlib/zstream"),m=a("./zlib/gzheader"),n=Object.prototype.toString;d.prototype.push=function(a,b){var c,d,e,f,k,l,m=this.strm,o=this.options.chunkSize,p=this.options.dictionary,q=!1;if(this.ended)return!1;d=b===~~b?b:b===!0?j.Z_FINISH:j.Z_NO_FLUSH,"string"==typeof a?m.input=i.binstring2buf(a):"[object ArrayBuffer]"===n.call(a)?m.input=new Uint8Array(a):m.input=a,m.next_in=0,m.avail_in=m.input.length;do{if(0===m.avail_out&&(m.output=new h.Buf8(o),m.next_out=0,m.avail_out=o),c=g.inflate(m,j.Z_NO_FLUSH),c===j.Z_NEED_DICT&&p&&(l="string"==typeof p?i.string2buf(p):"[object ArrayBuffer]"===n.call(p)?new Uint8Array(p):p,c=g.inflateSetDictionary(this.strm,l)),c===j.Z_BUF_ERROR&&q===!0&&(c=j.Z_OK,q=!1),c!==j.Z_STREAM_END&&c!==j.Z_OK)return this.onEnd(c),this.ended=!0,!1;m.next_out&&(0!==m.avail_out&&c!==j.Z_STREAM_END&&(0!==m.avail_in||d!==j.Z_FINISH&&d!==j.Z_SYNC_FLUSH)||("string"===this.options.to?(e=i.utf8border(m.output,m.next_out),f=m.next_out-e,k=i.buf2string(m.output,e),m.next_out=f,m.avail_out=o-f,f&&h.arraySet(m.output,m.output,e,f,0),this.onData(k)):this.onData(h.shrinkBuf(m.output,m.next_out)))),0===m.avail_in&&0===m.avail_out&&(q=!0)}while((m.avail_in>0||0===m.avail_out)&&c!==j.Z_STREAM_END);return c===j.Z_STREAM_END&&(d=j.Z_FINISH),d===j.Z_FINISH?(c=g.inflateEnd(this.strm),this.onEnd(c),this.ended=!0,c===j.Z_OK):d!==j.Z_SYNC_FLUSH||(this.onEnd(j.Z_OK),m.avail_out=0,!0)},d.prototype.onData=function(a){this.chunks.push(a)},d.prototype.onEnd=function(a){a===j.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=h.flattenChunks(this.chunks)),this.chunks=[],this.err=a,this.msg=this.strm.msg},c.Inflate=d,c.inflate=e,c.inflateRaw=f,c.ungzip=e},{"./utils/common":62,"./utils/strings":63,"./zlib/constants":65,"./zlib/gzheader":68,"./zlib/inflate":70,"./zlib/messages":72,"./zlib/zstream":74}],62:[function(a,b,c){"use strict";var d="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;c.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!=typeof c)throw new TypeError(c+"must be non-object");for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d])}}return a},c.shrinkBuf=function(a,b){return a.length===b?a:a.subarray?a.subarray(0,b):(a.length=b,a)};var e={arraySet:function(a,b,c,d,e){if(b.subarray&&a.subarray)return void a.set(b.subarray(c,c+d),e);for(var f=0;f<d;f++)a[e+f]=b[c+f]},flattenChunks:function(a){var b,c,d,e,f,g;for(d=0,b=0,c=a.length;b<c;b++)d+=a[b].length;for(g=new Uint8Array(d),e=0,b=0,c=a.length;b<c;b++)f=a[b],g.set(f,e),e+=f.length;return g}},f={arraySet:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},flattenChunks:function(a){return[].concat.apply([],a)}};c.setTyped=function(a){a?(c.Buf8=Uint8Array,c.Buf16=Uint16Array,c.Buf32=Int32Array,c.assign(c,e)):(c.Buf8=Array,c.Buf16=Array,c.Buf32=Array,c.assign(c,f))},c.setTyped(d)},{}],63:[function(a,b,c){"use strict";function d(a,b){if(b<65537&&(a.subarray&&g||!a.subarray&&f))return String.fromCharCode.apply(null,e.shrinkBuf(a,b));for(var c="",d=0;d<b;d++)c+=String.fromCharCode(a[d]);return c}var e=a("./common"),f=!0,g=!0;try{String.fromCharCode.apply(null,[0])}catch(h){f=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(h){g=!1}for(var i=new e.Buf8(256),j=0;j<256;j++)i[j]=j>=252?6:j>=248?5:j>=240?4:j>=224?3:j>=192?2:1;i[254]=i[254]=1,c.string2buf=function(a){var b,c,d,f,g,h=a.length,i=0;for(f=0;f<h;f++)c=a.charCodeAt(f),55296===(64512&c)&&f+1<h&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),i+=c<128?1:c<2048?2:c<65536?3:4;for(b=new e.Buf8(i),g=0,f=0;g<i;f++)c=a.charCodeAt(f),55296===(64512&c)&&f+1<h&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),c<128?b[g++]=c:c<2048?(b[g++]=192|c>>>6,b[g++]=128|63&c):c<65536?(b[g++]=224|c>>>12,b[g++]=128|c>>>6&63,b[g++]=128|63&c):(b[g++]=240|c>>>18,b[g++]=128|c>>>12&63,b[g++]=128|c>>>6&63,b[g++]=128|63&c);return b},c.buf2binstring=function(a){return d(a,a.length)},c.binstring2buf=function(a){for(var b=new e.Buf8(a.length),c=0,d=b.length;c<d;c++)b[c]=a.charCodeAt(c);return b},c.buf2string=function(a,b){var c,e,f,g,h=b||a.length,j=new Array(2*h);for(e=0,c=0;c<h;)if(f=a[c++],f<128)j[e++]=f;else if(g=i[f],g>4)j[e++]=65533,c+=g-1;else{for(f&=2===g?31:3===g?15:7;g>1&&c<h;)f=f<<6|63&a[c++],g--;g>1?j[e++]=65533:f<65536?j[e++]=f:(f-=65536,j[e++]=55296|f>>10&1023,j[e++]=56320|1023&f)}return d(j,e)},c.utf8border=function(a,b){var c;for(b=b||a.length,b>a.length&&(b=a.length),c=b-1;c>=0&&128===(192&a[c]);)c--;return c<0?b:0===c?b:c+i[a[c]]>b?c:b}},{"./common":62}],64:[function(a,b,c){"use strict";function d(a,b,c,d){for(var e=65535&a|0,f=a>>>16&65535|0,g=0;0!==c;){g=c>2e3?2e3:c,c-=g;do e=e+b[d++]|0,f=f+e|0;while(--g);e%=65521,f%=65521}return e|f<<16|0}b.exports=d},{}],65:[function(a,b,c){"use strict";b.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],66:[function(a,b,c){"use strict";function d(){
    for(var a,b=[],c=0;c<256;c++){a=c;for(var d=0;d<8;d++)a=1&a?3988292384^a>>>1:a>>>1;b[c]=a}return b}function e(a,b,c,d){var e=f,g=d+c;a^=-1;for(var h=d;h<g;h++)a=a>>>8^e[255&(a^b[h])];return a^-1}var f=d();b.exports=e},{}],67:[function(a,b,c){"use strict";function d(a,b){return a.msg=I[b],b}function e(a){return(a<<1)-(a>4?9:0)}function f(a){for(var b=a.length;--b>=0;)a[b]=0}function g(a){var b=a.state,c=b.pending;c>a.avail_out&&(c=a.avail_out),0!==c&&(E.arraySet(a.output,b.pending_buf,b.pending_out,c,a.next_out),a.next_out+=c,b.pending_out+=c,a.total_out+=c,a.avail_out-=c,b.pending-=c,0===b.pending&&(b.pending_out=0))}function h(a,b){F._tr_flush_block(a,a.block_start>=0?a.block_start:-1,a.strstart-a.block_start,b),a.block_start=a.strstart,g(a.strm)}function i(a,b){a.pending_buf[a.pending++]=b}function j(a,b){a.pending_buf[a.pending++]=b>>>8&255,a.pending_buf[a.pending++]=255&b}function k(a,b,c,d){var e=a.avail_in;return e>d&&(e=d),0===e?0:(a.avail_in-=e,E.arraySet(b,a.input,a.next_in,e,c),1===a.state.wrap?a.adler=G(a.adler,b,e,c):2===a.state.wrap&&(a.adler=H(a.adler,b,e,c)),a.next_in+=e,a.total_in+=e,e)}function l(a,b){var c,d,e=a.max_chain_length,f=a.strstart,g=a.prev_length,h=a.nice_match,i=a.strstart>a.w_size-la?a.strstart-(a.w_size-la):0,j=a.window,k=a.w_mask,l=a.prev,m=a.strstart+ka,n=j[f+g-1],o=j[f+g];a.prev_length>=a.good_match&&(e>>=2),h>a.lookahead&&(h=a.lookahead);do if(c=b,j[c+g]===o&&j[c+g-1]===n&&j[c]===j[f]&&j[++c]===j[f+1]){f+=2,c++;do;while(j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&f<m);if(d=ka-(m-f),f=m-ka,d>g){if(a.match_start=b,g=d,d>=h)break;n=j[f+g-1],o=j[f+g]}}while((b=l[b&k])>i&&0!==--e);return g<=a.lookahead?g:a.lookahead}function m(a){var b,c,d,e,f,g=a.w_size;do{if(e=a.window_size-a.lookahead-a.strstart,a.strstart>=g+(g-la)){E.arraySet(a.window,a.window,g,g,0),a.match_start-=g,a.strstart-=g,a.block_start-=g,c=a.hash_size,b=c;do d=a.head[--b],a.head[b]=d>=g?d-g:0;while(--c);c=g,b=c;do d=a.prev[--b],a.prev[b]=d>=g?d-g:0;while(--c);e+=g}if(0===a.strm.avail_in)break;if(c=k(a.strm,a.window,a.strstart+a.lookahead,e),a.lookahead+=c,a.lookahead+a.insert>=ja)for(f=a.strstart-a.insert,a.ins_h=a.window[f],a.ins_h=(a.ins_h<<a.hash_shift^a.window[f+1])&a.hash_mask;a.insert&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[f+ja-1])&a.hash_mask,a.prev[f&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=f,f++,a.insert--,!(a.lookahead+a.insert<ja)););}while(a.lookahead<la&&0!==a.strm.avail_in)}function n(a,b){var c=65535;for(c>a.pending_buf_size-5&&(c=a.pending_buf_size-5);;){if(a.lookahead<=1){if(m(a),0===a.lookahead&&b===J)return ua;if(0===a.lookahead)break}a.strstart+=a.lookahead,a.lookahead=0;var d=a.block_start+c;if((0===a.strstart||a.strstart>=d)&&(a.lookahead=a.strstart-d,a.strstart=d,h(a,!1),0===a.strm.avail_out))return ua;if(a.strstart-a.block_start>=a.w_size-la&&(h(a,!1),0===a.strm.avail_out))return ua}return a.insert=0,b===M?(h(a,!0),0===a.strm.avail_out?wa:xa):a.strstart>a.block_start&&(h(a,!1),0===a.strm.avail_out)?ua:ua}function o(a,b){for(var c,d;;){if(a.lookahead<la){if(m(a),a.lookahead<la&&b===J)return ua;if(0===a.lookahead)break}if(c=0,a.lookahead>=ja&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+ja-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),0!==c&&a.strstart-c<=a.w_size-la&&(a.match_length=l(a,c)),a.match_length>=ja)if(d=F._tr_tally(a,a.strstart-a.match_start,a.match_length-ja),a.lookahead-=a.match_length,a.match_length<=a.max_lazy_match&&a.lookahead>=ja){a.match_length--;do a.strstart++,a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+ja-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart;while(0!==--a.match_length);a.strstart++}else a.strstart+=a.match_length,a.match_length=0,a.ins_h=a.window[a.strstart],a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+1])&a.hash_mask;else d=F._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++;if(d&&(h(a,!1),0===a.strm.avail_out))return ua}return a.insert=a.strstart<ja-1?a.strstart:ja-1,b===M?(h(a,!0),0===a.strm.avail_out?wa:xa):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?ua:va}function p(a,b){for(var c,d,e;;){if(a.lookahead<la){if(m(a),a.lookahead<la&&b===J)return ua;if(0===a.lookahead)break}if(c=0,a.lookahead>=ja&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+ja-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),a.prev_length=a.match_length,a.prev_match=a.match_start,a.match_length=ja-1,0!==c&&a.prev_length<a.max_lazy_match&&a.strstart-c<=a.w_size-la&&(a.match_length=l(a,c),a.match_length<=5&&(a.strategy===U||a.match_length===ja&&a.strstart-a.match_start>4096)&&(a.match_length=ja-1)),a.prev_length>=ja&&a.match_length<=a.prev_length){e=a.strstart+a.lookahead-ja,d=F._tr_tally(a,a.strstart-1-a.prev_match,a.prev_length-ja),a.lookahead-=a.prev_length-1,a.prev_length-=2;do++a.strstart<=e&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+ja-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart);while(0!==--a.prev_length);if(a.match_available=0,a.match_length=ja-1,a.strstart++,d&&(h(a,!1),0===a.strm.avail_out))return ua}else if(a.match_available){if(d=F._tr_tally(a,0,a.window[a.strstart-1]),d&&h(a,!1),a.strstart++,a.lookahead--,0===a.strm.avail_out)return ua}else a.match_available=1,a.strstart++,a.lookahead--}return a.match_available&&(d=F._tr_tally(a,0,a.window[a.strstart-1]),a.match_available=0),a.insert=a.strstart<ja-1?a.strstart:ja-1,b===M?(h(a,!0),0===a.strm.avail_out?wa:xa):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?ua:va}function q(a,b){for(var c,d,e,f,g=a.window;;){if(a.lookahead<=ka){if(m(a),a.lookahead<=ka&&b===J)return ua;if(0===a.lookahead)break}if(a.match_length=0,a.lookahead>=ja&&a.strstart>0&&(e=a.strstart-1,d=g[e],d===g[++e]&&d===g[++e]&&d===g[++e])){f=a.strstart+ka;do;while(d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&e<f);a.match_length=ka-(f-e),a.match_length>a.lookahead&&(a.match_length=a.lookahead)}if(a.match_length>=ja?(c=F._tr_tally(a,1,a.match_length-ja),a.lookahead-=a.match_length,a.strstart+=a.match_length,a.match_length=0):(c=F._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++),c&&(h(a,!1),0===a.strm.avail_out))return ua}return a.insert=0,b===M?(h(a,!0),0===a.strm.avail_out?wa:xa):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?ua:va}function r(a,b){for(var c;;){if(0===a.lookahead&&(m(a),0===a.lookahead)){if(b===J)return ua;break}if(a.match_length=0,c=F._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++,c&&(h(a,!1),0===a.strm.avail_out))return ua}return a.insert=0,b===M?(h(a,!0),0===a.strm.avail_out?wa:xa):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?ua:va}function s(a,b,c,d,e){this.good_length=a,this.max_lazy=b,this.nice_length=c,this.max_chain=d,this.func=e}function t(a){a.window_size=2*a.w_size,f(a.head),a.max_lazy_match=D[a.level].max_lazy,a.good_match=D[a.level].good_length,a.nice_match=D[a.level].nice_length,a.max_chain_length=D[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=ja-1,a.match_available=0,a.ins_h=0}function u(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=$,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new E.Buf16(2*ha),this.dyn_dtree=new E.Buf16(2*(2*fa+1)),this.bl_tree=new E.Buf16(2*(2*ga+1)),f(this.dyn_ltree),f(this.dyn_dtree),f(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new E.Buf16(ia+1),this.heap=new E.Buf16(2*ea+1),f(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new E.Buf16(2*ea+1),f(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function v(a){var b;return a&&a.state?(a.total_in=a.total_out=0,a.data_type=Z,b=a.state,b.pending=0,b.pending_out=0,b.wrap<0&&(b.wrap=-b.wrap),b.status=b.wrap?na:sa,a.adler=2===b.wrap?0:1,b.last_flush=J,F._tr_init(b),O):d(a,Q)}function w(a){var b=v(a);return b===O&&t(a.state),b}function x(a,b){return a&&a.state?2!==a.state.wrap?Q:(a.state.gzhead=b,O):Q}function y(a,b,c,e,f,g){if(!a)return Q;var h=1;if(b===T&&(b=6),e<0?(h=0,e=-e):e>15&&(h=2,e-=16),f<1||f>_||c!==$||e<8||e>15||b<0||b>9||g<0||g>X)return d(a,Q);8===e&&(e=9);var i=new u;return a.state=i,i.strm=a,i.wrap=h,i.gzhead=null,i.w_bits=e,i.w_size=1<<i.w_bits,i.w_mask=i.w_size-1,i.hash_bits=f+7,i.hash_size=1<<i.hash_bits,i.hash_mask=i.hash_size-1,i.hash_shift=~~((i.hash_bits+ja-1)/ja),i.window=new E.Buf8(2*i.w_size),i.head=new E.Buf16(i.hash_size),i.prev=new E.Buf16(i.w_size),i.lit_bufsize=1<<f+6,i.pending_buf_size=4*i.lit_bufsize,i.pending_buf=new E.Buf8(i.pending_buf_size),i.d_buf=1*i.lit_bufsize,i.l_buf=3*i.lit_bufsize,i.level=b,i.strategy=g,i.method=c,w(a)}function z(a,b){return y(a,b,$,aa,ba,Y)}function A(a,b){var c,h,k,l;if(!a||!a.state||b>N||b<0)return a?d(a,Q):Q;if(h=a.state,!a.output||!a.input&&0!==a.avail_in||h.status===ta&&b!==M)return d(a,0===a.avail_out?S:Q);if(h.strm=a,c=h.last_flush,h.last_flush=b,h.status===na)if(2===h.wrap)a.adler=0,i(h,31),i(h,139),i(h,8),h.gzhead?(i(h,(h.gzhead.text?1:0)+(h.gzhead.hcrc?2:0)+(h.gzhead.extra?4:0)+(h.gzhead.name?8:0)+(h.gzhead.comment?16:0)),i(h,255&h.gzhead.time),i(h,h.gzhead.time>>8&255),i(h,h.gzhead.time>>16&255),i(h,h.gzhead.time>>24&255),i(h,9===h.level?2:h.strategy>=V||h.level<2?4:0),i(h,255&h.gzhead.os),h.gzhead.extra&&h.gzhead.extra.length&&(i(h,255&h.gzhead.extra.length),i(h,h.gzhead.extra.length>>8&255)),h.gzhead.hcrc&&(a.adler=H(a.adler,h.pending_buf,h.pending,0)),h.gzindex=0,h.status=oa):(i(h,0),i(h,0),i(h,0),i(h,0),i(h,0),i(h,9===h.level?2:h.strategy>=V||h.level<2?4:0),i(h,ya),h.status=sa);else{var m=$+(h.w_bits-8<<4)<<8,n=-1;n=h.strategy>=V||h.level<2?0:h.level<6?1:6===h.level?2:3,m|=n<<6,0!==h.strstart&&(m|=ma),m+=31-m%31,h.status=sa,j(h,m),0!==h.strstart&&(j(h,a.adler>>>16),j(h,65535&a.adler)),a.adler=1}if(h.status===oa)if(h.gzhead.extra){for(k=h.pending;h.gzindex<(65535&h.gzhead.extra.length)&&(h.pending!==h.pending_buf_size||(h.gzhead.hcrc&&h.pending>k&&(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending!==h.pending_buf_size));)i(h,255&h.gzhead.extra[h.gzindex]),h.gzindex++;h.gzhead.hcrc&&h.pending>k&&(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),h.gzindex===h.gzhead.extra.length&&(h.gzindex=0,h.status=pa)}else h.status=pa;if(h.status===pa)if(h.gzhead.name){k=h.pending;do{if(h.pending===h.pending_buf_size&&(h.gzhead.hcrc&&h.pending>k&&(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending===h.pending_buf_size)){l=1;break}l=h.gzindex<h.gzhead.name.length?255&h.gzhead.name.charCodeAt(h.gzindex++):0,i(h,l)}while(0!==l);h.gzhead.hcrc&&h.pending>k&&(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),0===l&&(h.gzindex=0,h.status=qa)}else h.status=qa;if(h.status===qa)if(h.gzhead.comment){k=h.pending;do{if(h.pending===h.pending_buf_size&&(h.gzhead.hcrc&&h.pending>k&&(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending===h.pending_buf_size)){l=1;break}l=h.gzindex<h.gzhead.comment.length?255&h.gzhead.comment.charCodeAt(h.gzindex++):0,i(h,l)}while(0!==l);h.gzhead.hcrc&&h.pending>k&&(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),0===l&&(h.status=ra)}else h.status=ra;if(h.status===ra&&(h.gzhead.hcrc?(h.pending+2>h.pending_buf_size&&g(a),h.pending+2<=h.pending_buf_size&&(i(h,255&a.adler),i(h,a.adler>>8&255),a.adler=0,h.status=sa)):h.status=sa),0!==h.pending){if(g(a),0===a.avail_out)return h.last_flush=-1,O}else if(0===a.avail_in&&e(b)<=e(c)&&b!==M)return d(a,S);if(h.status===ta&&0!==a.avail_in)return d(a,S);if(0!==a.avail_in||0!==h.lookahead||b!==J&&h.status!==ta){var o=h.strategy===V?r(h,b):h.strategy===W?q(h,b):D[h.level].func(h,b);if(o!==wa&&o!==xa||(h.status=ta),o===ua||o===wa)return 0===a.avail_out&&(h.last_flush=-1),O;if(o===va&&(b===K?F._tr_align(h):b!==N&&(F._tr_stored_block(h,0,0,!1),b===L&&(f(h.head),0===h.lookahead&&(h.strstart=0,h.block_start=0,h.insert=0))),g(a),0===a.avail_out))return h.last_flush=-1,O}return b!==M?O:h.wrap<=0?P:(2===h.wrap?(i(h,255&a.adler),i(h,a.adler>>8&255),i(h,a.adler>>16&255),i(h,a.adler>>24&255),i(h,255&a.total_in),i(h,a.total_in>>8&255),i(h,a.total_in>>16&255),i(h,a.total_in>>24&255)):(j(h,a.adler>>>16),j(h,65535&a.adler)),g(a),h.wrap>0&&(h.wrap=-h.wrap),0!==h.pending?O:P)}function B(a){var b;return a&&a.state?(b=a.state.status,b!==na&&b!==oa&&b!==pa&&b!==qa&&b!==ra&&b!==sa&&b!==ta?d(a,Q):(a.state=null,b===sa?d(a,R):O)):Q}function C(a,b){var c,d,e,g,h,i,j,k,l=b.length;if(!a||!a.state)return Q;if(c=a.state,g=c.wrap,2===g||1===g&&c.status!==na||c.lookahead)return Q;for(1===g&&(a.adler=G(a.adler,b,l,0)),c.wrap=0,l>=c.w_size&&(0===g&&(f(c.head),c.strstart=0,c.block_start=0,c.insert=0),k=new E.Buf8(c.w_size),E.arraySet(k,b,l-c.w_size,c.w_size,0),b=k,l=c.w_size),h=a.avail_in,i=a.next_in,j=a.input,a.avail_in=l,a.next_in=0,a.input=b,m(c);c.lookahead>=ja;){d=c.strstart,e=c.lookahead-(ja-1);do c.ins_h=(c.ins_h<<c.hash_shift^c.window[d+ja-1])&c.hash_mask,c.prev[d&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=d,d++;while(--e);c.strstart=d,c.lookahead=ja-1,m(c)}return c.strstart+=c.lookahead,c.block_start=c.strstart,c.insert=c.lookahead,c.lookahead=0,c.match_length=c.prev_length=ja-1,c.match_available=0,a.next_in=i,a.input=j,a.avail_in=h,c.wrap=g,O}var D,E=a("../utils/common"),F=a("./trees"),G=a("./adler32"),H=a("./crc32"),I=a("./messages"),J=0,K=1,L=3,M=4,N=5,O=0,P=1,Q=-2,R=-3,S=-5,T=-1,U=1,V=2,W=3,X=4,Y=0,Z=2,$=8,_=9,aa=15,ba=8,ca=29,da=256,ea=da+1+ca,fa=30,ga=19,ha=2*ea+1,ia=15,ja=3,ka=258,la=ka+ja+1,ma=32,na=42,oa=69,pa=73,qa=91,ra=103,sa=113,ta=666,ua=1,va=2,wa=3,xa=4,ya=3;D=[new s(0,0,0,0,n),new s(4,4,8,4,o),new s(4,5,16,8,o),new s(4,6,32,32,o),new s(4,4,16,16,p),new s(8,16,32,32,p),new s(8,16,128,128,p),new s(8,32,128,256,p),new s(32,128,258,1024,p),new s(32,258,258,4096,p)],c.deflateInit=z,c.deflateInit2=y,c.deflateReset=w,c.deflateResetKeep=v,c.deflateSetHeader=x,c.deflate=A,c.deflateEnd=B,c.deflateSetDictionary=C,c.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":62,"./adler32":64,"./crc32":66,"./messages":72,"./trees":73}],68:[function(a,b,c){"use strict";function d(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}b.exports=d},{}],69:[function(a,b,c){"use strict";var d=30,e=12;b.exports=function(a,b){var c,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;c=a.state,f=a.next_in,B=a.input,g=f+(a.avail_in-5),h=a.next_out,C=a.output,i=h-(b-a.avail_out),j=h+(a.avail_out-257),k=c.dmax,l=c.wsize,m=c.whave,n=c.wnext,o=c.window,p=c.hold,q=c.bits,r=c.lencode,s=c.distcode,t=(1<<c.lenbits)-1,u=(1<<c.distbits)-1;a:do{q<15&&(p+=B[f++]<<q,q+=8,p+=B[f++]<<q,q+=8),v=r[p&t];b:for(;;){if(w=v>>>24,p>>>=w,q-=w,w=v>>>16&255,0===w)C[h++]=65535&v;else{if(!(16&w)){if(0===(64&w)){v=r[(65535&v)+(p&(1<<w)-1)];continue b}if(32&w){c.mode=e;break a}a.msg="invalid literal/length code",c.mode=d;break a}x=65535&v,w&=15,w&&(q<w&&(p+=B[f++]<<q,q+=8),x+=p&(1<<w)-1,p>>>=w,q-=w),q<15&&(p+=B[f++]<<q,q+=8,p+=B[f++]<<q,q+=8),v=s[p&u];c:for(;;){if(w=v>>>24,p>>>=w,q-=w,w=v>>>16&255,!(16&w)){if(0===(64&w)){v=s[(65535&v)+(p&(1<<w)-1)];continue c}a.msg="invalid distance code",c.mode=d;break a}if(y=65535&v,w&=15,q<w&&(p+=B[f++]<<q,q+=8,q<w&&(p+=B[f++]<<q,q+=8)),y+=p&(1<<w)-1,y>k){a.msg="invalid distance too far back",c.mode=d;break a}if(p>>>=w,q-=w,w=h-i,y>w){if(w=y-w,w>m&&c.sane){a.msg="invalid distance too far back",c.mode=d;break a}if(z=0,A=o,0===n){if(z+=l-w,w<x){x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}}else if(n<w){if(z+=l+n-w,w-=n,w<x){x-=w;do C[h++]=o[z++];while(--w);if(z=0,n<x){w=n,x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}}}else if(z+=n-w,w<x){x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}for(;x>2;)C[h++]=A[z++],C[h++]=A[z++],C[h++]=A[z++],x-=3;x&&(C[h++]=A[z++],x>1&&(C[h++]=A[z++]))}else{z=h-y;do C[h++]=C[z++],C[h++]=C[z++],C[h++]=C[z++],x-=3;while(x>2);x&&(C[h++]=C[z++],x>1&&(C[h++]=C[z++]))}break}}break}}while(f<g&&h<j);x=q>>3,f-=x,q-=x<<3,p&=(1<<q)-1,a.next_in=f,a.next_out=h,a.avail_in=f<g?5+(g-f):5-(f-g),a.avail_out=h<j?257+(j-h):257-(h-j),c.hold=p,c.bits=q}},{}],70:[function(a,b,c){"use strict";function d(a){return(a>>>24&255)+(a>>>8&65280)+((65280&a)<<8)+((255&a)<<24)}function e(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function f(a){var b;return a&&a.state?(b=a.state,a.total_in=a.total_out=b.total=0,a.msg="",b.wrap&&(a.adler=1&b.wrap),b.mode=L,b.last=0,b.havedict=0,b.dmax=32768,b.head=null,b.hold=0,b.bits=0,b.lencode=b.lendyn=new s.Buf32(pa),b.distcode=b.distdyn=new s.Buf32(qa),b.sane=1,b.back=-1,D):G}function g(a){var b;return a&&a.state?(b=a.state,b.wsize=0,b.whave=0,b.wnext=0,f(a)):G}function h(a,b){var c,d;return a&&a.state?(d=a.state,b<0?(c=0,b=-b):(c=(b>>4)+1,b<48&&(b&=15)),b&&(b<8||b>15)?G:(null!==d.window&&d.wbits!==b&&(d.window=null),d.wrap=c,d.wbits=b,g(a))):G}function i(a,b){var c,d;return a?(d=new e,a.state=d,d.window=null,c=h(a,b),c!==D&&(a.state=null),c):G}function j(a){return i(a,sa)}function k(a){if(ta){var b;for(q=new s.Buf32(512),r=new s.Buf32(32),b=0;b<144;)a.lens[b++]=8;for(;b<256;)a.lens[b++]=9;for(;b<280;)a.lens[b++]=7;for(;b<288;)a.lens[b++]=8;for(w(y,a.lens,0,288,q,0,a.work,{bits:9}),b=0;b<32;)a.lens[b++]=5;w(z,a.lens,0,32,r,0,a.work,{bits:5}),ta=!1}a.lencode=q,a.lenbits=9,a.distcode=r,a.distbits=5}function l(a,b,c,d){var e,f=a.state;return null===f.window&&(f.wsize=1<<f.wbits,f.wnext=0,f.whave=0,f.window=new s.Buf8(f.wsize)),d>=f.wsize?(s.arraySet(f.window,b,c-f.wsize,f.wsize,0),f.wnext=0,f.whave=f.wsize):(e=f.wsize-f.wnext,e>d&&(e=d),s.arraySet(f.window,b,c-d,e,f.wnext),d-=e,d?(s.arraySet(f.window,b,c-d,d,0),f.wnext=d,f.whave=f.wsize):(f.wnext+=e,f.wnext===f.wsize&&(f.wnext=0),f.whave<f.wsize&&(f.whave+=e))),0}function m(a,b){var c,e,f,g,h,i,j,m,n,o,p,q,r,pa,qa,ra,sa,ta,ua,va,wa,xa,ya,za,Aa=0,Ba=new s.Buf8(4),Ca=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!a||!a.state||!a.output||!a.input&&0!==a.avail_in)return G;c=a.state,c.mode===W&&(c.mode=X),h=a.next_out,f=a.output,j=a.avail_out,g=a.next_in,e=a.input,i=a.avail_in,m=c.hold,n=c.bits,o=i,p=j,xa=D;a:for(;;)switch(c.mode){case L:if(0===c.wrap){c.mode=X;break}for(;n<16;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(2&c.wrap&&35615===m){c.check=0,Ba[0]=255&m,Ba[1]=m>>>8&255,c.check=u(c.check,Ba,2,0),m=0,n=0,c.mode=M;break}if(c.flags=0,c.head&&(c.head.done=!1),!(1&c.wrap)||(((255&m)<<8)+(m>>8))%31){a.msg="incorrect header check",c.mode=ma;break}if((15&m)!==K){a.msg="unknown compression method",c.mode=ma;break}if(m>>>=4,n-=4,wa=(15&m)+8,0===c.wbits)c.wbits=wa;else if(wa>c.wbits){a.msg="invalid window size",c.mode=ma;break}c.dmax=1<<wa,a.adler=c.check=1,c.mode=512&m?U:W,m=0,n=0;break;case M:for(;n<16;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(c.flags=m,(255&c.flags)!==K){a.msg="unknown compression method",c.mode=ma;break}if(57344&c.flags){a.msg="unknown header flags set",c.mode=ma;break}c.head&&(c.head.text=m>>8&1),512&c.flags&&(Ba[0]=255&m,Ba[1]=m>>>8&255,c.check=u(c.check,Ba,2,0)),m=0,n=0,c.mode=N;case N:for(;n<32;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.head&&(c.head.time=m),512&c.flags&&(Ba[0]=255&m,Ba[1]=m>>>8&255,Ba[2]=m>>>16&255,Ba[3]=m>>>24&255,c.check=u(c.check,Ba,4,0)),m=0,n=0,c.mode=O;case O:for(;n<16;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.head&&(c.head.xflags=255&m,c.head.os=m>>8),512&c.flags&&(Ba[0]=255&m,Ba[1]=m>>>8&255,c.check=u(c.check,Ba,2,0)),m=0,n=0,c.mode=P;case P:if(1024&c.flags){for(;n<16;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.length=m,c.head&&(c.head.extra_len=m),512&c.flags&&(Ba[0]=255&m,Ba[1]=m>>>8&255,c.check=u(c.check,Ba,2,0)),m=0,n=0}else c.head&&(c.head.extra=null);c.mode=Q;case Q:if(1024&c.flags&&(q=c.length,q>i&&(q=i),q&&(c.head&&(wa=c.head.extra_len-c.length,c.head.extra||(c.head.extra=new Array(c.head.extra_len)),s.arraySet(c.head.extra,e,g,q,wa)),512&c.flags&&(c.check=u(c.check,e,q,g)),i-=q,g+=q,c.length-=q),c.length))break a;c.length=0,c.mode=R;case R:if(2048&c.flags){if(0===i)break a;q=0;do wa=e[g+q++],c.head&&wa&&c.length<65536&&(c.head.name+=String.fromCharCode(wa));while(wa&&q<i);if(512&c.flags&&(c.check=u(c.check,e,q,g)),i-=q,g+=q,wa)break a}else c.head&&(c.head.name=null);c.length=0,c.mode=S;case S:if(4096&c.flags){if(0===i)break a;q=0;do wa=e[g+q++],c.head&&wa&&c.length<65536&&(c.head.comment+=String.fromCharCode(wa));while(wa&&q<i);if(512&c.flags&&(c.check=u(c.check,e,q,g)),i-=q,g+=q,wa)break a}else c.head&&(c.head.comment=null);c.mode=T;case T:if(512&c.flags){for(;n<16;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(m!==(65535&c.check)){a.msg="header crc mismatch",c.mode=ma;break}m=0,n=0}c.head&&(c.head.hcrc=c.flags>>9&1,c.head.done=!0),a.adler=c.check=0,c.mode=W;break;case U:for(;n<32;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}a.adler=c.check=d(m),m=0,n=0,c.mode=V;case V:if(0===c.havedict)return a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,F;a.adler=c.check=1,c.mode=W;case W:if(b===B||b===C)break a;case X:if(c.last){m>>>=7&n,n-=7&n,c.mode=ja;break}for(;n<3;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}switch(c.last=1&m,m>>>=1,n-=1,3&m){case 0:c.mode=Y;break;case 1:if(k(c),c.mode=ca,b===C){m>>>=2,n-=2;break a}break;case 2:c.mode=_;break;case 3:a.msg="invalid block type",c.mode=ma}m>>>=2,n-=2;break;case Y:for(m>>>=7&n,n-=7&n;n<32;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if((65535&m)!==(m>>>16^65535)){a.msg="invalid stored block lengths",c.mode=ma;break}if(c.length=65535&m,m=0,n=0,c.mode=Z,b===C)break a;case Z:c.mode=$;case $:if(q=c.length){if(q>i&&(q=i),q>j&&(q=j),0===q)break a;s.arraySet(f,e,g,q,h),i-=q,g+=q,j-=q,h+=q,c.length-=q;break}c.mode=W;break;case _:for(;n<14;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(c.nlen=(31&m)+257,m>>>=5,n-=5,c.ndist=(31&m)+1,m>>>=5,n-=5,c.ncode=(15&m)+4,m>>>=4,n-=4,c.nlen>286||c.ndist>30){a.msg="too many length or distance symbols",c.mode=ma;break}c.have=0,c.mode=aa;case aa:for(;c.have<c.ncode;){for(;n<3;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.lens[Ca[c.have++]]=7&m,m>>>=3,n-=3}for(;c.have<19;)c.lens[Ca[c.have++]]=0;if(c.lencode=c.lendyn,c.lenbits=7,ya={bits:c.lenbits},xa=w(x,c.lens,0,19,c.lencode,0,c.work,ya),c.lenbits=ya.bits,xa){a.msg="invalid code lengths set",c.mode=ma;break}c.have=0,c.mode=ba;case ba:for(;c.have<c.nlen+c.ndist;){for(;Aa=c.lencode[m&(1<<c.lenbits)-1],qa=Aa>>>24,ra=Aa>>>16&255,sa=65535&Aa,!(qa<=n);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(sa<16)m>>>=qa,n-=qa,c.lens[c.have++]=sa;else{if(16===sa){for(za=qa+2;n<za;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(m>>>=qa,n-=qa,0===c.have){a.msg="invalid bit length repeat",c.mode=ma;break}wa=c.lens[c.have-1],q=3+(3&m),m>>>=2,n-=2}else if(17===sa){for(za=qa+3;n<za;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=qa,n-=qa,wa=0,q=3+(7&m),m>>>=3,n-=3}else{for(za=qa+7;n<za;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=qa,n-=qa,wa=0,q=11+(127&m),m>>>=7,n-=7}if(c.have+q>c.nlen+c.ndist){a.msg="invalid bit length repeat",c.mode=ma;break}for(;q--;)c.lens[c.have++]=wa}}if(c.mode===ma)break;if(0===c.lens[256]){a.msg="invalid code -- missing end-of-block",c.mode=ma;break}if(c.lenbits=9,ya={bits:c.lenbits},xa=w(y,c.lens,0,c.nlen,c.lencode,0,c.work,ya),c.lenbits=ya.bits,xa){a.msg="invalid literal/lengths set",c.mode=ma;break}if(c.distbits=6,c.distcode=c.distdyn,ya={bits:c.distbits},xa=w(z,c.lens,c.nlen,c.ndist,c.distcode,0,c.work,ya),c.distbits=ya.bits,xa){a.msg="invalid distances set",c.mode=ma;break}if(c.mode=ca,b===C)break a;case ca:c.mode=da;case da:if(i>=6&&j>=258){a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,v(a,p),h=a.next_out,f=a.output,j=a.avail_out,g=a.next_in,e=a.input,i=a.avail_in,m=c.hold,n=c.bits,c.mode===W&&(c.back=-1);break}for(c.back=0;Aa=c.lencode[m&(1<<c.lenbits)-1],qa=Aa>>>24,ra=Aa>>>16&255,sa=65535&Aa,!(qa<=n);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(ra&&0===(240&ra)){for(ta=qa,ua=ra,va=sa;Aa=c.lencode[va+((m&(1<<ta+ua)-1)>>ta)],qa=Aa>>>24,ra=Aa>>>16&255,sa=65535&Aa,!(ta+qa<=n);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=ta,n-=ta,c.back+=ta}if(m>>>=qa,n-=qa,c.back+=qa,c.length=sa,0===ra){c.mode=ia;break}if(32&ra){c.back=-1,c.mode=W;break}if(64&ra){a.msg="invalid literal/length code",c.mode=ma;break}c.extra=15&ra,c.mode=ea;case ea:if(c.extra){for(za=c.extra;n<za;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.length+=m&(1<<c.extra)-1,m>>>=c.extra,n-=c.extra,c.back+=c.extra}c.was=c.length,c.mode=fa;case fa:for(;Aa=c.distcode[m&(1<<c.distbits)-1],qa=Aa>>>24,ra=Aa>>>16&255,sa=65535&Aa,!(qa<=n);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(0===(240&ra)){for(ta=qa,ua=ra,va=sa;Aa=c.distcode[va+((m&(1<<ta+ua)-1)>>ta)],qa=Aa>>>24,ra=Aa>>>16&255,sa=65535&Aa,!(ta+qa<=n);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=ta,n-=ta,c.back+=ta}if(m>>>=qa,n-=qa,c.back+=qa,64&ra){a.msg="invalid distance code",c.mode=ma;break}c.offset=sa,c.extra=15&ra,c.mode=ga;case ga:if(c.extra){for(za=c.extra;n<za;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.offset+=m&(1<<c.extra)-1,m>>>=c.extra,n-=c.extra,c.back+=c.extra}if(c.offset>c.dmax){a.msg="invalid distance too far back",c.mode=ma;break}c.mode=ha;case ha:if(0===j)break a;if(q=p-j,c.offset>q){if(q=c.offset-q,q>c.whave&&c.sane){a.msg="invalid distance too far back",c.mode=ma;break}q>c.wnext?(q-=c.wnext,r=c.wsize-q):r=c.wnext-q,q>c.length&&(q=c.length),pa=c.window}else pa=f,r=h-c.offset,q=c.length;q>j&&(q=j),j-=q,c.length-=q;do f[h++]=pa[r++];while(--q);0===c.length&&(c.mode=da);break;case ia:if(0===j)break a;f[h++]=c.length,j--,c.mode=da;break;case ja:if(c.wrap){for(;n<32;){if(0===i)break a;i--,m|=e[g++]<<n,n+=8}if(p-=j,a.total_out+=p,c.total+=p,p&&(a.adler=c.check=c.flags?u(c.check,f,p,h-p):t(c.check,f,p,h-p)),p=j,(c.flags?m:d(m))!==c.check){a.msg="incorrect data check",c.mode=ma;break}m=0,n=0}c.mode=ka;case ka:if(c.wrap&&c.flags){for(;n<32;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(m!==(4294967295&c.total)){a.msg="incorrect length check",c.mode=ma;break}m=0,n=0}c.mode=la;case la:xa=E;break a;case ma:xa=H;break a;case na:return I;case oa:default:return G}return a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,(c.wsize||p!==a.avail_out&&c.mode<ma&&(c.mode<ja||b!==A))&&l(a,a.output,a.next_out,p-a.avail_out)?(c.mode=na,I):(o-=a.avail_in,p-=a.avail_out,a.total_in+=o,a.total_out+=p,c.total+=p,c.wrap&&p&&(a.adler=c.check=c.flags?u(c.check,f,p,a.next_out-p):t(c.check,f,p,a.next_out-p)),a.data_type=c.bits+(c.last?64:0)+(c.mode===W?128:0)+(c.mode===ca||c.mode===Z?256:0),(0===o&&0===p||b===A)&&xa===D&&(xa=J),xa)}function n(a){if(!a||!a.state)return G;var b=a.state;return b.window&&(b.window=null),a.state=null,D}function o(a,b){var c;return a&&a.state?(c=a.state,0===(2&c.wrap)?G:(c.head=b,b.done=!1,D)):G}function p(a,b){var c,d,e,f=b.length;return a&&a.state?(c=a.state,0!==c.wrap&&c.mode!==V?G:c.mode===V&&(d=1,d=t(d,b,f,0),d!==c.check)?H:(e=l(a,b,f,f))?(c.mode=na,I):(c.havedict=1,D)):G}var q,r,s=a("../utils/common"),t=a("./adler32"),u=a("./crc32"),v=a("./inffast"),w=a("./inftrees"),x=0,y=1,z=2,A=4,B=5,C=6,D=0,E=1,F=2,G=-2,H=-3,I=-4,J=-5,K=8,L=1,M=2,N=3,O=4,P=5,Q=6,R=7,S=8,T=9,U=10,V=11,W=12,X=13,Y=14,Z=15,$=16,_=17,aa=18,ba=19,ca=20,da=21,ea=22,fa=23,ga=24,ha=25,ia=26,ja=27,ka=28,la=29,ma=30,na=31,oa=32,pa=852,qa=592,ra=15,sa=ra,ta=!0;c.inflateReset=g,c.inflateReset2=h,c.inflateResetKeep=f,c.inflateInit=j,c.inflateInit2=i,c.inflate=m,c.inflateEnd=n,c.inflateGetHeader=o,c.inflateSetDictionary=p,c.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":62,"./adler32":64,"./crc32":66,"./inffast":69,"./inftrees":71}],71:[function(a,b,c){"use strict";var d=a("../utils/common"),e=15,f=852,g=592,h=0,i=1,j=2,k=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],l=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],m=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],n=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];b.exports=function(a,b,c,o,p,q,r,s){var t,u,v,w,x,y,z,A,B,C=s.bits,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=null,O=0,P=new d.Buf16(e+1),Q=new d.Buf16(e+1),R=null,S=0;for(D=0;D<=e;D++)P[D]=0;for(E=0;E<o;E++)P[b[c+E]]++;for(H=C,G=e;G>=1&&0===P[G];G--);if(H>G&&(H=G),0===G)return p[q++]=20971520,p[q++]=20971520,s.bits=1,0;for(F=1;F<G&&0===P[F];F++);for(H<F&&(H=F),K=1,D=1;D<=e;D++)if(K<<=1,K-=P[D],K<0)return-1;if(K>0&&(a===h||1!==G))return-1;for(Q[1]=0,D=1;D<e;D++)Q[D+1]=Q[D]+P[D];for(E=0;E<o;E++)0!==b[c+E]&&(r[Q[b[c+E]]++]=E);if(a===h?(N=R=r,y=19):a===i?(N=k,O-=257,R=l,S-=257,y=256):(N=m,R=n,y=-1),M=0,E=0,D=F,x=q,I=H,J=0,v=-1,L=1<<H,w=L-1,a===i&&L>f||a===j&&L>g)return 1;for(var T=0;;){T++,z=D-J,r[E]<y?(A=0,B=r[E]):r[E]>y?(A=R[S+r[E]],B=N[O+r[E]]):(A=96,B=0),t=1<<D-J,u=1<<I,F=u;do u-=t,p[x+(M>>J)+u]=z<<24|A<<16|B|0;while(0!==u);for(t=1<<D-1;M&t;)t>>=1;if(0!==t?(M&=t-1,M+=t):M=0,E++,0===--P[D]){if(D===G)break;D=b[c+r[E]]}if(D>H&&(M&w)!==v){for(0===J&&(J=H),x+=F,I=D-J,K=1<<I;I+J<G&&(K-=P[I+J],!(K<=0));)I++,K<<=1;if(L+=1<<I,a===i&&L>f||a===j&&L>g)return 1;v=M&w,p[v]=H<<24|I<<16|x-q|0}}return 0!==M&&(p[x+M]=D-J<<24|64<<16|0),s.bits=H,0}},{"../utils/common":62}],72:[function(a,b,c){"use strict";b.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],73:[function(a,b,c){"use strict";function d(a){for(var b=a.length;--b>=0;)a[b]=0}function e(a,b,c,d,e){this.static_tree=a,this.extra_bits=b,this.extra_base=c,this.elems=d,this.max_length=e,this.has_stree=a&&a.length}function f(a,b){this.dyn_tree=a,this.max_code=0,this.stat_desc=b}function g(a){return a<256?ia[a]:ia[256+(a>>>7)]}function h(a,b){a.pending_buf[a.pending++]=255&b,a.pending_buf[a.pending++]=b>>>8&255}function i(a,b,c){a.bi_valid>X-c?(a.bi_buf|=b<<a.bi_valid&65535,h(a,a.bi_buf),a.bi_buf=b>>X-a.bi_valid,a.bi_valid+=c-X):(a.bi_buf|=b<<a.bi_valid&65535,a.bi_valid+=c)}function j(a,b,c){i(a,c[2*b],c[2*b+1])}function k(a,b){var c=0;do c|=1&a,a>>>=1,c<<=1;while(--b>0);return c>>>1}function l(a){16===a.bi_valid?(h(a,a.bi_buf),a.bi_buf=0,a.bi_valid=0):a.bi_valid>=8&&(a.pending_buf[a.pending++]=255&a.bi_buf,a.bi_buf>>=8,a.bi_valid-=8)}function m(a,b){var c,d,e,f,g,h,i=b.dyn_tree,j=b.max_code,k=b.stat_desc.static_tree,l=b.stat_desc.has_stree,m=b.stat_desc.extra_bits,n=b.stat_desc.extra_base,o=b.stat_desc.max_length,p=0;for(f=0;f<=W;f++)a.bl_count[f]=0;for(i[2*a.heap[a.heap_max]+1]=0,c=a.heap_max+1;c<V;c++)d=a.heap[c],f=i[2*i[2*d+1]+1]+1,f>o&&(f=o,p++),i[2*d+1]=f,d>j||(a.bl_count[f]++,g=0,d>=n&&(g=m[d-n]),h=i[2*d],a.opt_len+=h*(f+g),l&&(a.static_len+=h*(k[2*d+1]+g)));if(0!==p){do{for(f=o-1;0===a.bl_count[f];)f--;a.bl_count[f]--,a.bl_count[f+1]+=2,a.bl_count[o]--,p-=2}while(p>0);for(f=o;0!==f;f--)for(d=a.bl_count[f];0!==d;)e=a.heap[--c],e>j||(i[2*e+1]!==f&&(a.opt_len+=(f-i[2*e+1])*i[2*e],i[2*e+1]=f),d--)}}function n(a,b,c){var d,e,f=new Array(W+1),g=0;
    for(d=1;d<=W;d++)f[d]=g=g+c[d-1]<<1;for(e=0;e<=b;e++){var h=a[2*e+1];0!==h&&(a[2*e]=k(f[h]++,h))}}function o(){var a,b,c,d,f,g=new Array(W+1);for(c=0,d=0;d<Q-1;d++)for(ka[d]=c,a=0;a<1<<ba[d];a++)ja[c++]=d;for(ja[c-1]=d,f=0,d=0;d<16;d++)for(la[d]=f,a=0;a<1<<ca[d];a++)ia[f++]=d;for(f>>=7;d<T;d++)for(la[d]=f<<7,a=0;a<1<<ca[d]-7;a++)ia[256+f++]=d;for(b=0;b<=W;b++)g[b]=0;for(a=0;a<=143;)ga[2*a+1]=8,a++,g[8]++;for(;a<=255;)ga[2*a+1]=9,a++,g[9]++;for(;a<=279;)ga[2*a+1]=7,a++,g[7]++;for(;a<=287;)ga[2*a+1]=8,a++,g[8]++;for(n(ga,S+1,g),a=0;a<T;a++)ha[2*a+1]=5,ha[2*a]=k(a,5);ma=new e(ga,ba,R+1,S,W),na=new e(ha,ca,0,T,W),oa=new e(new Array(0),da,0,U,Y)}function p(a){var b;for(b=0;b<S;b++)a.dyn_ltree[2*b]=0;for(b=0;b<T;b++)a.dyn_dtree[2*b]=0;for(b=0;b<U;b++)a.bl_tree[2*b]=0;a.dyn_ltree[2*Z]=1,a.opt_len=a.static_len=0,a.last_lit=a.matches=0}function q(a){a.bi_valid>8?h(a,a.bi_buf):a.bi_valid>0&&(a.pending_buf[a.pending++]=a.bi_buf),a.bi_buf=0,a.bi_valid=0}function r(a,b,c,d){q(a),d&&(h(a,c),h(a,~c)),G.arraySet(a.pending_buf,a.window,b,c,a.pending),a.pending+=c}function s(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}function t(a,b,c){for(var d=a.heap[c],e=c<<1;e<=a.heap_len&&(e<a.heap_len&&s(b,a.heap[e+1],a.heap[e],a.depth)&&e++,!s(b,d,a.heap[e],a.depth));)a.heap[c]=a.heap[e],c=e,e<<=1;a.heap[c]=d}function u(a,b,c){var d,e,f,h,k=0;if(0!==a.last_lit)do d=a.pending_buf[a.d_buf+2*k]<<8|a.pending_buf[a.d_buf+2*k+1],e=a.pending_buf[a.l_buf+k],k++,0===d?j(a,e,b):(f=ja[e],j(a,f+R+1,b),h=ba[f],0!==h&&(e-=ka[f],i(a,e,h)),d--,f=g(d),j(a,f,c),h=ca[f],0!==h&&(d-=la[f],i(a,d,h)));while(k<a.last_lit);j(a,Z,b)}function v(a,b){var c,d,e,f=b.dyn_tree,g=b.stat_desc.static_tree,h=b.stat_desc.has_stree,i=b.stat_desc.elems,j=-1;for(a.heap_len=0,a.heap_max=V,c=0;c<i;c++)0!==f[2*c]?(a.heap[++a.heap_len]=j=c,a.depth[c]=0):f[2*c+1]=0;for(;a.heap_len<2;)e=a.heap[++a.heap_len]=j<2?++j:0,f[2*e]=1,a.depth[e]=0,a.opt_len--,h&&(a.static_len-=g[2*e+1]);for(b.max_code=j,c=a.heap_len>>1;c>=1;c--)t(a,f,c);e=i;do c=a.heap[1],a.heap[1]=a.heap[a.heap_len--],t(a,f,1),d=a.heap[1],a.heap[--a.heap_max]=c,a.heap[--a.heap_max]=d,f[2*e]=f[2*c]+f[2*d],a.depth[e]=(a.depth[c]>=a.depth[d]?a.depth[c]:a.depth[d])+1,f[2*c+1]=f[2*d+1]=e,a.heap[1]=e++,t(a,f,1);while(a.heap_len>=2);a.heap[--a.heap_max]=a.heap[1],m(a,b),n(f,j,a.bl_count)}function w(a,b,c){var d,e,f=-1,g=b[1],h=0,i=7,j=4;for(0===g&&(i=138,j=3),b[2*(c+1)+1]=65535,d=0;d<=c;d++)e=g,g=b[2*(d+1)+1],++h<i&&e===g||(h<j?a.bl_tree[2*e]+=h:0!==e?(e!==f&&a.bl_tree[2*e]++,a.bl_tree[2*$]++):h<=10?a.bl_tree[2*_]++:a.bl_tree[2*aa]++,h=0,f=e,0===g?(i=138,j=3):e===g?(i=6,j=3):(i=7,j=4))}function x(a,b,c){var d,e,f=-1,g=b[1],h=0,k=7,l=4;for(0===g&&(k=138,l=3),d=0;d<=c;d++)if(e=g,g=b[2*(d+1)+1],!(++h<k&&e===g)){if(h<l){do j(a,e,a.bl_tree);while(0!==--h)}else 0!==e?(e!==f&&(j(a,e,a.bl_tree),h--),j(a,$,a.bl_tree),i(a,h-3,2)):h<=10?(j(a,_,a.bl_tree),i(a,h-3,3)):(j(a,aa,a.bl_tree),i(a,h-11,7));h=0,f=e,0===g?(k=138,l=3):e===g?(k=6,l=3):(k=7,l=4)}}function y(a){var b;for(w(a,a.dyn_ltree,a.l_desc.max_code),w(a,a.dyn_dtree,a.d_desc.max_code),v(a,a.bl_desc),b=U-1;b>=3&&0===a.bl_tree[2*ea[b]+1];b--);return a.opt_len+=3*(b+1)+5+5+4,b}function z(a,b,c,d){var e;for(i(a,b-257,5),i(a,c-1,5),i(a,d-4,4),e=0;e<d;e++)i(a,a.bl_tree[2*ea[e]+1],3);x(a,a.dyn_ltree,b-1),x(a,a.dyn_dtree,c-1)}function A(a){var b,c=4093624447;for(b=0;b<=31;b++,c>>>=1)if(1&c&&0!==a.dyn_ltree[2*b])return I;if(0!==a.dyn_ltree[18]||0!==a.dyn_ltree[20]||0!==a.dyn_ltree[26])return J;for(b=32;b<R;b++)if(0!==a.dyn_ltree[2*b])return J;return I}function B(a){pa||(o(),pa=!0),a.l_desc=new f(a.dyn_ltree,ma),a.d_desc=new f(a.dyn_dtree,na),a.bl_desc=new f(a.bl_tree,oa),a.bi_buf=0,a.bi_valid=0,p(a)}function C(a,b,c,d){i(a,(L<<1)+(d?1:0),3),r(a,b,c,!0)}function D(a){i(a,M<<1,3),j(a,Z,ga),l(a)}function E(a,b,c,d){var e,f,g=0;a.level>0?(a.strm.data_type===K&&(a.strm.data_type=A(a)),v(a,a.l_desc),v(a,a.d_desc),g=y(a),e=a.opt_len+3+7>>>3,f=a.static_len+3+7>>>3,f<=e&&(e=f)):e=f=c+5,c+4<=e&&b!==-1?C(a,b,c,d):a.strategy===H||f===e?(i(a,(M<<1)+(d?1:0),3),u(a,ga,ha)):(i(a,(N<<1)+(d?1:0),3),z(a,a.l_desc.max_code+1,a.d_desc.max_code+1,g+1),u(a,a.dyn_ltree,a.dyn_dtree)),p(a),d&&q(a)}function F(a,b,c){return a.pending_buf[a.d_buf+2*a.last_lit]=b>>>8&255,a.pending_buf[a.d_buf+2*a.last_lit+1]=255&b,a.pending_buf[a.l_buf+a.last_lit]=255&c,a.last_lit++,0===b?a.dyn_ltree[2*c]++:(a.matches++,b--,a.dyn_ltree[2*(ja[c]+R+1)]++,a.dyn_dtree[2*g(b)]++),a.last_lit===a.lit_bufsize-1}var G=a("../utils/common"),H=4,I=0,J=1,K=2,L=0,M=1,N=2,O=3,P=258,Q=29,R=256,S=R+1+Q,T=30,U=19,V=2*S+1,W=15,X=16,Y=7,Z=256,$=16,_=17,aa=18,ba=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ca=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],da=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ea=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],fa=512,ga=new Array(2*(S+2));d(ga);var ha=new Array(2*T);d(ha);var ia=new Array(fa);d(ia);var ja=new Array(P-O+1);d(ja);var ka=new Array(Q);d(ka);var la=new Array(T);d(la);var ma,na,oa,pa=!1;c._tr_init=B,c._tr_stored_block=C,c._tr_flush_block=E,c._tr_tally=F,c._tr_align=D},{"../utils/common":62}],74:[function(a,b,c){"use strict";function d(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}b.exports=d},{}]},{},[10])(10)});


/*! pdfmake v0.1.36, @license MIT, @link http://pdfmake.org */



this.pdfMake = this.pdfMake || {}; this.pdfMake.vfs = {
  "Roboto-Italic.ttf": "AAEAAAASAQAABAAgR0RFRtRX1FkAAgp8AAACREdQT1NKcuCzAAIMwAAAUiRHU1VCw4aZEQACXuQAABfoT1MvMqCnsO0AAAGoAAAAYGNtYXBAbb9DAAAafAAABoBjdnQgJEEG5QAAI5QAAABMZnBnbWf0XKsAACD8AAABvGdhc3AACAATAAIKcAAAAAxnbHlmoLsktAAALagAAdn2aGRteCEe/AUAABWQAAAE7GhlYWT4gasAAAABLAAAADZoaGVhDKYSegAAAWQAAAAkaG10eHJO1ygAAAIIAAATiGxvY2EXM5zBAAAj4AAACcZtYXhwBxICWwAAAYgAAAAgbmFtZTlLZFAAAgegAAACrnBvc3T/YQBkAAIKUAAAACBwcmVwdKCP7AAAIrgAAADbAAEAAAACAAAcadIiXw889QAbCAAAAAAAxPARLgAAAADQ206M+jj91QlMCHMAAgAJAAIAAAAAAAAAAQAAB2z+DAAACRb6OP52CUwIAAGzAAAAAAAAAAAAAAAABOIAAQAABOIAkAAWAFYABQABAAAAAAAOAAACAAFzAAYAAQADBAsBkAAFAAAFmgUzAAABHwWaBTMAAAPRAGYCAAAAAgAAAAAAAAAAAOAACv9QACF/AAAAIQAAAABHT09HAAEAAP/9BgD+AABmB5oCACAAAZ8AAAAABDoFsAAgACAAAgOWAGQACgAAAAoAAAH2AAAB9gAAAgkAQwKFAMgE0QBSBGYASgW5ALsE3QA6AWQAqgKxAG0Cvf+PA2IAawRwAEwBkP+PAi4AGQIVADUDPf+PBGYAaARmAPkEZgAXBGYANARmAAUEZgByBGYAcARmAJ0EZgBBBGYAlAHrACsBrv+bA/wAQQRMAHAEGAA6A7QApQcCAEQFGv+vBN8AOwUXAHQFIQA7BHMAOwRUADsFUwB5BZIAOwImAEkEUgAKBOcAOwQ3ADsG0AA7BZIAOwVgAHcE7wA7BWAAbwTRADoEpQAnBKsAqAUSAGcE+gCkBuwAwwTn/9QEswCoBK//6wIZ//8DOQC/Ahn/egNIAE8Div+BAnAAzwRDADMEZQAfBBoARgRqAEsEJgBFArwAdARlAAQEUAAfAewALwHk/xQD+QAgAewALwbXAB4EUgAfBHcARQRl/9cEcwBJAqoAHwQKAC4CkwBDBFEAWwPMAG4F3wCAA+P/xAO2/6UD4//tAqoAOAHuACECqv+MBVEAaQHu//EESABSBIz/8wWSABIEvQBTAeb/9wTM/90DSADbBiMAYgOCAMMDrgBZBFYAgQYkAGEDmADjAvAA6AQvACUC4gBcAuIAbgJ5ANUEb//lA9UAewIQAKUB9v/IAuIA3wORAMADrQAPBbkAuQYPALQGEwCeA7b/0wdL/4QELQAoBWAAIASgADgEpwAeBpcAEwSWAFwEeABEBG8AOQSD/+AFeQA1AfUALgRbAC0EOAAiAiIAIwVqADUEbwAkB3AAVAcWAEcB9wAzBWcAUQKu/0kFXgBnBHkAQgVvAGcE1wBaAf7/CQQhAD4DsQEXA3wBJgOZAOMDWgEHAewBDgKiAQECI/+vA7MA3QLvAMICUv/pAAr9agAK/esACv0LAAr99QAK/NsB6vy7AgcBIQP2APMCEQClBFsAQwWD/7EFUQBpBSD/xAR4AAwFkwBEBHj/2gWZAFQFaACGBTMACgRsAEgEo//wA+0AhARvAEMEOQApBA8AggRvACQEdQBzAo0AhQRW/7cD2AA/BKkAYARv/9wENgBOBG8ASgQWAIcERQBnBYIAQQV5AE8GbgBmBIcAUQQrAGcGIgBmBdsAoQVFAHgIWf/MCGwAQwZaALQFkgBCBO4ANAXg/4sHFf+sBKUAJQWSAEMFiP/KBOoAkwYHAFsFtgBBBVoAzgdXAEIHjgBCBe0AiQbAAEUE6AA2BUUAdAb6AEkE+//oBFQARgR5ADADSwAtBLn/jQX7/6UD+wAhBIUALwQ7AC8Ehv/IBcsAMASEAC8EhQAvA8QAYAWqAEwEowAvBEIAewZQAC8GdQAkBNsAVgYQADAEQQAwBDYANAZfADAETP+/BFAAHwQ2AE4Gn//DBrkALwRwAB8EhQAvBtwAbwYGAE8EPwAuBv4ASQXUACwEt/+6BC//ogbfAFoF5wBOBqcAJgW+ACkIyQBIB58ALgQN/84Dx//KBVEAaQRyAEIE7QCtA+4AhAVRAGoEbwBEBtUAdAX/AFIG3ABvBgYATwUUAGYEMABNBOEAQAAK/OgACv0LAAr+FwAK/jsACvo4AAr6TwQ/AC4E/gA6BHD/1wRLADUDfwAkBMAAQwPwACQE7AA2BGYALQZkALsFYwB0B50AOgWSACQH/ABCBskAJAXKAHEEuABfBv8ArAU9AFcFTwDEBFIAmAVQAOwGCgCKBKMABwTsADUEQwAtBZAAQwRvACQFZwBRBI4APASO//wEnf/4Azr/6QTaADEGawAyBrkATAYvAK0FDQBoBDIArwPyAKAHj//fBk3/2gfIADsGeAAjBNoAagQHAEwFiwCaBQMAfQVFAGoDEgDyA/8AAAf0AAAD/wAAB/QAAAKuAAACBAAAAVwAAARmAAACKQAAAZ8AAADVAAAACgAAAi0AGQItABkFIgCnBhkAmQOU/18BlwCuAZcAiQGV/5gBlwDUAsgAtgLPAJUCtv+UBFEAdwR2//YCpwCgA7EAOQU7ADkA+QAaB3kAlwJeAF8CXgACA5H/7wLiAGEDUAB+BIz/8wYuAAoGaAA5CD8AOgc0ACIGBgAfBGYAUQW3AEMEDABJBFwACgUp//IFMP/lBcQAzAO7AEsIBQA1BOUA6gT6AIIGAQC1BqwAkgalAI8GQwC+BHYATQVtACQElf+sBHkAqwSqAEEIBQBNAgb/GgRpADEETABwA/z/1AQZABkD8wBBAkQAeAKFAHAB/v/jBNcAdARWAFgEcgB0BqoAdAaqAHQE0gB0BnIAKQAKAAAH/v+rCDUAXAQKAGIEhQBBAff/DwGP/70DkgETA4wBEgONARED4ADNA/kAzgPfACID2wDSA5IBEQH4APwEbP+lBDkAHQRkAEcEZwAdA9IAHQO4AB0EkgBMBMcAHQHjACoDvP/2BD0AHQOiAB0F3gAdBMcAHQShAEoERQAdBKEARQQzAB0ECgARBBAAbQRkAEUETwB6BfAAlQQ9/7YEFQB0BA3/3ALiAB0C4gBrAuL/6QLi//sC4v/wAuIAFgLiAB4C4gAvAuIACwLiADYDhACTAqoBCwQk/5oEqABLBS0AQwUHAEQD/gAlBR8ARAP6ACUECgASBB0ABgQlADQDnQAdBE//sAShAEoET/+wA3j/0wSzAB0D2//VBUgAUQT6AH4E1gAMBVIAbARkAEcHE//EByEAHQVUAG0EsgAdBEIAHwUH/4kF5/+vBCgAEQTQAB8ENwAeBKb/xAQJAFgFCgAdBFIAWgYqAB0GgwAdBQAAUAXNAB8ENwAfBGMAIAZOAB0Ebv/fA/z/+gYh/68EYQAeBOwAHgUZAGkFoABQBEcAdASO/7YGOgBsBFIAWgRSAB0FoQAvBK8AQQQoABEEoQBKBB3//wPPAB4H7gAdBJH/3QRlAB8EHABDBHoARwRzACQDaACpBHT/1wSDAEYEJgBFBGUANQVhAIEFjACEBXIARAW9AIUFwACFA8IAuwRpADkDnQAdBEH/gQS0/9MC4gCQAuIAYQLiAIkC4gCRAuIAogLiAH4C4gCpBFP/1QQYACsGewBJBJ8APwTkAGQCAP8JAf//CQH2AC4B9v96AfYALgH2//EEOQAdAfYAAAIuABkFPwAvBT8ALwRuAD0EqwCoApP/9AUa/68FGv+vBRr/rwUa/68FGv+vBRr/rwUa/68FFwB0BHMAOwRzADsEcwA7BHMAOwImAEkCJgBJAiYASQImAEkFkgA7BWAAdwVgAHcFYAB3BWAAdwVgAHcFEgBnBRIAZwUSAGcFEgBnBLMAqARDADMEQwAzBEMAMwRDADMEQwAzBEMAMwRDADMEGgBGBCYARQQmAEUEJgBFBCYARQH1AC4B9QAuAfUALgH1AC4EUgAfBHcARQR3AEUEdwBFBHcARQR3AEUEUQBbBFEAWwRRAFsEUQBbA7b/pQO2/6UFGv+vBEMAMwUa/68EQwAzBRr/rwRDADMFFwB0BBoARgUXAHQEGgBGBRcAdAQaAEYFFwB0BBoARgUhADsFAABLBHMAOwQmAEUEcwA7BCYARQRzADsEJgBFBHMAOwQmAEUEcwA7BCYARQVTAHkEZQAEBVMAeQRlAAQFUwB5BGUABAVTAHkEZQAEBZIAOwRQAB8CJgBJAfUAEQImAEkB9QAaAiYASQH1AC4CJv+OAez/cAImAEkGeABJA9AALwRSAAoB/v8JBOcAOwP5ACAENwA7AewALwQ3ADsB7P+jBDcAOwKCAC8ENwA7AsgALwWSADsEUgAfBZIAOwRSAB8FkgA7BFIAHwRSAB8FYAB3BHcARQVgAHcEdwBFBWAAdwR3AEUE0QA6AqoAHwTRADoCqv+fBNEAOgKqAB8EpQAnBAoALgSlACcECgAuBKUAJwQKAC4EpQAnBAoALgSlACcECgAuBKsAqAKTAEMEqwCoApMAQwSrAKgCuwBDBRIAZwRRAFsFEgBnBFEAWwUSAGcEUQBbBRIAZwRRAFsFEgBnBFEAWwUSAGcEUQBbBuwAwwXfAIAEswCoA7b/pQSzAKgEr//rA+P/7QSv/+sD4//tBK//6wPj/+0HS/+EBpcAEwVgACAEbwA5BGf/sARn/7AEEABtBGz/pQRs/6UEbP+lBGz/pQRs/6UEbP+lBGz/pQRkAEcD0gAdA9IAHQPSAB0D0gAdAeMAKgHjACoB4wAqAeMAKgTHAB0EoQBKBKEASgShAEoEoQBKBKEASgRkAEUEZABFBGQARQRkAEUEFQB0BGz/pQRs/6UEbP+lBGQARwRkAEcEZABHBGQARwRnAB0D0gAdA9IAHQPSAB0D0gAdA9IAHQSSAEwEkgBMBJIATASSAEwExwAdAeMADwHjABgB4wAqAeP/egHjACoDvP/2BD0AHQOiAB0DogAdA6IAHQOiAB0ExwAdBMcAHQTHAB0EoQBKBKEASgShAEoEMwAdBDMAHQQzAB0ECgARBAoAEQQKABEECgARBBAAbQQQAG0EEABtBGQARQRkAEUEZABFBGQARQRkAEUEZABFBfAAlQQVAHQEFQB0BA3/3AQN/9wEDf/cBRr/rwTXAGMF9gBxAooAdwV0AGoFF//uBUcAHgKNACAFGv+vBN8AOwRzADsEr//rBZIAOwImAEkE5wA7BtAAOwWSADsFYAB3BO8AOwSrAKgEswCoBOf/1AImAEkEswCoBGwASAQ5ACkEbwAkAo0AhQRFAGcEWwAtBHcARQRv/+UDzABuA+P/xAKNAGcERQBnBHcARQRFAGcGbgBmBHMAOwRbAEMEpQAnAiYASQImAEkEUgAKBQcARATnADsE6gCTBRr/rwTfADsEWwBDBHMAOwWSAEMG0AA7BZIAOwVgAHcFkwBEBO8AOwUXAHQEqwCoBOf/1ARDADMEJgBFBIUALwR3AEUEZf/XBBoARgO2/6UD4//EBCYARQNLAC0ECgAuAewALwH1AC4B5P8UBDsALwO2/6UG7ADDBd8AgAbsAMMF3wCABuwAwwXfAIAEswCoA7b/pQFkAKoChQDIBBIAQwH+/wkBlwCJBtAAOwbXAB4FGv+vBEMAMwRzADsFkgBDBCYARQSFAC8FaACGBXkATwTtAK0D7gCECC0ARQkWAHcEpQAlA/sAIQUXAHQEGgBGBLMAqAPtAIQCJgBJBxX/rAX7/6UCJgBJBRr/rwRDADMFGv+vBEMAMwdL/4QGlwATBHMAOwQmAEUFZwBRBCEAPgQhAD4HFf+sBfv/pQSlACUD+wAhBZIAQwSFAC8FkgBDBIUALwVgAHcEdwBFBVEAaQRyAEIFUQBpBHIAQgVFAHQENgA0BOoAkwO2/6UE6gCTA7b/pQTqAJMDtv+lBVoAzgRCAHsGwABFBhAAMATn/9QD4//EBGoASwWI/8oEhv/IBRr/rwRDADMFGv+vBEMAMwUa/68EQwAzBRr/rwRDADMFGv+vBEMAMwUa/68EQwAzBRr/rwRDADMFGv+vBEMAMwUa/68EQwAzBRr/rwRDADMFGv+vBEMAMwUa/68EQwAzBHMAOwQmAEUEcwA7BCYARQRzADsEJgBFBHMAOwQmAEUEcwA7BCYARQRzADsEJgBFBHMAOwQmAEUEcwA7BCYARQImAEkB9QAuAiYADgHs//EFYAB3BHcARQVgAHcEdwBFBWAAdwR3AEUFYAB3BHcARQVgAHcEdwBFBWAAdwR3AEUFYAB3BHcARQVeAGcEeQBCBV4AZwR5AEIFXgBnBHkAQgVeAGcEeQBCBV4AZwR5AEIFEgBnBFEAWwUSAGcEUQBbBW8AZwTXAFoFbwBnBNcAWgVvAGcE1wBaBW8AZwTXAFoFbwBnBNcAWgSzAKgDtv+lBLMAqAO2/6UEswCoA7b/pQSIAEsEiAAABQcARAQ7AC8FkgA7BIQALwSrAKgDxABgBOf/1APj/8QFWgDOBEIAewVaAM4EQgB7BFsAQwNLAC0HFf+sBfv/pQYKAIoEowAHBFAAHwToACsE6AArBFsAEANL/+YFGwBYBBIAOQWSAEMEhQAvBZIAOwSEAC8G0AA7BcsAMAWI/8oEhv/IBLMAqAPtAF0E5//UA+P/xAQ5ACkEVP/XBhkAmQRmABcEZgA0BGYABQRmAHIEegCUBI4AfAVTAHkEZQAEBZIAOwRSAB8FGv+vBEMAMwRzADsEJgBFAib/3wH1/40FYAB3BHcARQTRADoCqgAfBRIAZwRRAFsEj/+yBN8AOwRlAB8FIQA7BGoASwUhADsEagBLBZIAOwRQAB8E5wA7A/kAIATnADsD+QAgBDcAOwHs//IG0AA7BtcAHgWSADsEUgAfBO8AOwRl/9cE0QA6Aqr/7gSlACcECgAuBKsAqAKTAEME+gCkA8wAbgT6AKQDzABuBuwAwwXfAIAEr//rA+P/7QWm/wwEbP+lBA7/4QUD//0CHwABBKsAHQRR/5sE4AAWBGz/pQQ5AB0D0gAdBA3/3ATHAB0B4wAqBD0AHQXeAB0EoQBKBEUAHQQQAG0EFQB0BD3/tgHjACoEFQB0A9IAHQOdAB0ECgARAeMAKgHjACoDvP/2BD0AHQQJAFgEbP+lBDkAHQOdAB0D0gAdBNAAHwXeAB0ExwAdBKEASgSzAB0ERQAdBGQARwQQAG0EPf+2BCgAEQTHAB0EZABIBBUAdAWhAC8E0AAfBAkAWAVIAFEFGv+vBEMAMwRzADsEJgBFAAAAAQAABOQJCgQAAAICAgMFBQYFAgMDBAUCAgIEBQUFBQUFBQUFBQICBAUFBAgGBQYGBQUGBgIFBgUIBgYGBgUFBQYGCAYFBQIEAgQEAwUFBQUFAwUFAgIEAggFBQUFAwUDBQQHBAQEAwIDBgIFBQYFAgUEBwQEBQcEAwUDAwMFBAICAwQEBgcHBAgFBgUFBwUFBQUGAgUFAgYFCAgCBgMGBQYFAgUEBAQEAgMCBAMDAAAAAAACAgQCBQYGBgUGBQYGBgUFBAUFBQUFAwUEBQUFBQUFBgYHBQUHBwYJCQcGBgcIBQYGBgcGBggJBwgGBggGBQUEBQcEBQUFBwUFBAYFBQcHBQcFBQcFBQUHCAUFCAcFCAcFBQgHBwYKCQUEBgUGBAYFCAcIBwYFBQAAAAAAAAUGBQUEBQQGBQcGCQYJCAcFCAYGBQYHBQYFBgUGBQUFBAUHCAcGBQQJBwkHBQUGBgYDBQkFCQMCAgUCAgEAAgIGBwQCAgICAwMDBQUDBAYBCAMDBAMEBQcHCQgHBQYFBQYGBgQJBgYHCAcHBQYFBQUJAgUFBAUEAwMCBQUFCAgFBwAJCQUFAgIEBAQEBAQEBAIFBQUFBAQFBQIEBQQHBQUFBQUFBQUFBwUFBQMDAwMDAwMDAwMEAwUFBgYEBgQFBQUEBQUFBAUEBgYFBgUICAYFBQYHBQUFBQUGBQcHBgcFBQcFBAcFBgYGBQUHBQUGBQUFBQQJBQUFBQUEBQUFBQYGBgYGBAUEBQUDAwMDAwMDBQUHBQYCAgICAgIFAgIGBgUFAwYGBgYGBgYGBQUFBQICAgIGBgYGBgYGBgYGBQUFBQUFBQUFBQUFBQICAgIFBQUFBQUFBQUFBAQGBQYFBgUGBQYFBgUGBQYGBQUFBQUFBQUFBQYFBgUGBQYFBgUCAgICAgICAgIHBAUCBgQFAgUCBQMFAwYFBgUGBQUGBQYFBgUFAwUDBQMFBQUFBQUFBQUFBQMFAwUDBgUGBQYFBgUGBQYFCAcFBAUFBAUEBQQIBwYFBQUFBQUF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c3dzd3N/c4dzkXObc7Jz0XPvdA50LnQ6dEZ0d3S4dR11QnVOdV51cnZGdmJ2f3aSdqZ273d6eBx4qXi1eXh503pZewR7ZnvpfEd8uH1dfcl+W368fyR/Pn9Yf3J/jH//gCeAYYB9gLKBO4GBgfiCOYJHglWCjoKbgsKC24Lng0qDo4Q3hMKFQ4YXhheHlIfxiCKIgIiviMWJKIl6ibqKLIqFisWLCItIi2KLqIwejHqMx40TjU+Nto4EjiKOWI6cjsSPFo9Uj7OQA5BhkLWRI5FPkYuRvpISkleSi5LIkxuTRpOVlAaUSJSolQiVNZW+liCWN5aBlz6XuZgtmHyYwpkEmUyZzJo4mq+a2psQm4ibuZwHnDqcepzunVCdu54enoyfA597n9KgDaBpoMGhN6G8ofqiS6KUotijE6Nbo5uj5aRApEyknaURpZyl+aZIptCnM6eYp/iooqiuqQGpTamiqeuqZarSqzerq6xHrM6tb63irk+uqK8Tr5yvpLAQsH6w6bFysdWyQLKSsvSzWrOFs9q0BLRdtKG0tbTJtNu077UBtRi1LLWOtba2RLa0tw23FbcdtyW3MLc4t0S3sLewt7i4KLiYuPq5QLmoub+51rntugS6HLovuju6R7peunC6h7qaurG6w7rauu27BLsbuy27RLtbu267hbuXu667wbvTu+q7/LwSvCO8NrxJvFW8Ybx4vIq8oLyzvMm82rzxvQm9Gr0xvUO9Wb1qvX29lL2mvby9z73hvfO+Cr4gvje+Sb62v2S/dr+Iv5q/q7+9v8+/4b/ywATAEMAiwDPARcBXwGnAe8DvwX3Bj8GgwbLBw8HVwefB+cILwhfCKcI7wk/CYcJzwoXCl8KpwrvCxsLRwuPC78L7ww3DH8MrwzfDScNbw2fDc8OIw5TDoMOsw77D0MPcw+jD+sQLxBfEKcQ6xEzEXsRxxITElsSoxLTEwMTSxOPE9cUHxRnFKsU2xULFTsVaxWzFfcWJxZXFocWtxb/Fy8Xdxe7GAMYRxiPGNcZIxlvGbsaBxuLHUcdjx3XHh8eYx6vHvcfPx+HH88gFyBbILchEyFvIcsiVyLjIyMjfyPHJB8kYySvJPslKyVbJbcl/yZDJosm4ycnJ28nuygDKF8opyjvKTcpgynfKicqayq3Kv8rQyuLLSctby2zLfsuQy6HLssvDy9XMT8xg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AdMAAAEHAKEBFwAeAAkAsAcvsBPcMDEA////3AAABA4GIAImAdMAAAEGAJ5VHwAJALAHL7AO3DAxAP///68AAASLBj8CJgAlAAAABgCtBAD//wBjAAAFFQY/ACYAKWQAAAcArf9CAAD//wBxAAAF2wZBACYALGQAAAcArf9QAAL//wB3AAACZQZAACYALWQAAAcArf9WAAH//wBq/+cFIQY/ACYAMxQAAAcArf9JAAD////uAAAFlgY/ACYAPWQAAAcArf7NAAD//wAeAAAE7gY/ACYAuRQAAAcArf9MAAD//wAg//QDGwZ0AiYAwgAAAQcArv8t/+wAHACwAEVYsA4vG7EOGD5ZsBvcsBHQsBsQsCTQMDH///+vAAAEiwWwAgYAJQAA//8AOwAABKAFsAIGACYAAP//ADsAAASxBbACBgApAAD////rAAAEzgWwAgYAPgAA//8AOwAABXcFsAIGACwAAP//AEkAAAIBBbACBgAtAAD//wA7AAAFUAWwAgYALwAA//8AOwAABrcFsAIGADEAAP//ADsAAAV3BbACBgAyAAD//wB3/+cFDQXIAgYAMwAA//8AOwAABPMFsAIGADQAAP//AKgAAAUJBbACBgA4AAD//wCoAAAFMgWwAgYAPQAA////1AAABSsFsAIGADwAAP//AEkAAAMKBwkCJgAtAAABBwBq/7gBQgAMALACL7AZ3LAE0DAx//8AqAAABTIG/QImAD0AAAEHAGoA/QE2AAwAsAEvsB7csAnQMDH//wBI/+cEMgY6AiYAugAAAQcArQFo//sACQCwFS+wKNwwMQD//wAp/+cD5QY5AiYAvgAAAQcArQEh//oACQCwGi+wK9wwMQD//wAk/mED8wY6AiYAwAAAAQcArQE7//sACQCwAy+wFdwwMQD//wCF//QCZQYlAiYAwgAAAQYArSTmAAkAsAAvsBHcMDEA//8AZ//lBAoGdAImAMoAAAEGAK4c7AASALALL7Ar3LAW0LArELAa0DAx//8ALQAABFcEOgIGAI0AAP//AEX/6AQfBFICBgBTAAD////l/mAEJQQ6AgYAdgAA//8AbgAAA+0EOgIGAFoAAP///8QAAAP0BDoCBgBcAAD//wBn//QC3gWzAiYAwgAAAQYAaozsAAwAsAAvsCTcsA/QMDH//wBn/+UD+gWzAiYAygAAAQYAanvs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3LAi0DAx//8Ak//mBUAG+gImAN0AAAEHAHAA7AFKAAkAsAEvsBHcMDEA////pf5FA+wFuAImAF0AAAEGAHAvCAAJALABL7AQ3DAxAP//AJP/5gVABwkCJgDdAAABBwBqARsBQgAMALABL7Am3LAR0DAx////pf5FA+wFxwImAF0AAAEGAGpeAAAMALABL7Al3LAQ0DAx//8Ak//mBUAHQQImAN0AAAEHAKUBXQFCABYAsABFWLABLxuxARw+WbAT3LAX0DAx////pf5FBF4F/wImAF0AAAEHAKUAoAAAABYAsABFWLABLxuxARg+WbAS3LAW0DAx//8AzgAABUQHCQImAOAAAAEHAGoBRAFCABYAsABFWLASLxuxEhw+WbAo3LAc0DAx//8AewAABAAFswImAPgAAAEGAGpp7AAMALAIL7Ao3LAT0DAx//8ARQAABpYHCQAmAOUPAAAnAC0ElQAAAQcAagIIAUIAFgCwAEVYsAovG7EKHD5ZsCHcsC3QMDH//wAwAAAFqQWzACYA/QAAACcAjAQKAAABBwBqAWr/7AAWALAARViwCi8bsQoYPlmwIdywLdAwMf///9T+RQUrBbACJgA8AAAABwGvA5UAAP///8T+RQP0BDoCJgBcAAAABwGvAqoAAP//AEv/6AR1BgACBgBIAAD////K/kUFZQWwAiYA3AAAAAcBrwQkAAD////I/kUESgQ6AiYA8QAAAAcBrwM7AAD///+v/p8EiwWwAiYAJQAAAAcArATcAAD//wAz/p8DzwRRAiYARQAAAAcArAQpAAD///+vAAAEiwe5AiYAJQAAAQcAqgUBAUYACQCwBC+wGNwwMQD//wAz/+gDzwaDAiYARQAAAQcAqgRzABAACQCwGC+wOdwwMQD///+vAAAF7QfDAiYAJQAAAQcBtwDyAS4AFgCwAEVYsAUvG7EFHD5ZsA7csBTQMDH//wAz/+gFXwaOAiYARQAAAQYBt2T5ABYAsABFWLAYLxuxGBg+WbAv3LA10DAx////rwAABIsHvwImACUAAAEHAbYA+AE9ABYAsABFWLAFLxuxBRw+WbAM3LAT0DAx//8AM//oA/0GiQImAEUAAAEGAbZqBwAWALAARViwGC8bsRgYPlmwL9ywNNAwMf///68AAAVsB+oCJgAlAAABBwG1APMBGwAWALAARViwBS8bsQUc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ALAARViwBC8bsQQcPlmwDNywENAwMf//ADP/6APPBesCJgBFAAABBwCrA/L//QAWALAARViwGC8bsRgYPlmwLdywMdAwMf//ADsAAASxBywCJgApAAABBwCrBE4BPgAWALAARViwBi8bsQYcPlmwDdywEdAwMf//AEX/6gPgBesCJgBJAAABBwCrA9f//QAWALAARViwCC8bsQgYPlmwIdywJdAwMf///98AAAKKBywCJgAtAAABBwCrAwQBPgAWALAARViwAi8bsQIcPlmwBdywCdAwMf///40AAAI4BekCJgCMAAABBwCrArL/+wAWALAARViwAi8bsQIYPlmwBdywCdAwMf//AHf/5wUNByICJgAzAAABBwCrBKEBNAAWALAARViwCi8bsQocPlmwJNywKNAwMf//AEX/6AQfBesCJgBTAAABBwCrA+D//QAWALAARViwAC8bsQAYPlmwJNywKNAwMf//ADoAAATCByACJgA2AAABBwCrBEMBMgAWALAARViwBC8bsQQcPlmwGdywHdAwMf//AB8AAALUBesCJgBWAAABBwCrA0n//QAWALAARViwCi8bsQoYPlmwEtywDdAwMf//AGf/5wUgByACJgA5AAABBwCrBHsBMgAWALAARViwCi8bsQocPlmwFNywGNAwMf//AFv/6AQeBesCJgBZAAABBwCrA+T//QAWALAARViwBy8bsQcYPlmwFdywGdAwMf///7IAAAU8Bj8AJgDPZAAABwCt/pEAAP//ADv+qQSgBbACJgAmAAAABwCsBJgACv//AB/+lgP+BgACJgBGAAAABwCsBIb/9///ADv+qQTVBbACJgAoAAAABwCsBJcACv//AEv+nwR1BgACJgBIAAAABwCsBJkAAP//ADv+CQTVBbACJgAoAAAABwGiAR/+qv//AEv9/wR1BgACJgBIAAAABwGiASH+oP//ADv+qQV3BbACJgAsAAAABwCsBPoACv//AB/+qQPjBgACJgBMAAAABwCsBH8ACv//ADsAAAVQBy4CJgAvAAABBwB1AbABMAATALAARViwBS8bsQUcPlmwDtwwMQD//wAgAAAEIgc/AiYATwAAAQcAdQF9AUEACQCwBS+wD9wwMQD//wA7/vgFUAWwAiYALwAAAAcArATSAFn//wAg/uUEGgYAAiYATwAAAAcArARQAEb//wA7/qkDsQWwAiYAMAAAAAcArASdAAr////y/qkB7gYAAiYAUAAAAAcArAM3AAr//wA7/qkGtwWwAiYAMQAAAAcArAWnAAr//wAe/qkGagRSAiYAUQAAAAcArAWrAAr//wA7/qkFdwWwAiYAMgAAAAcArAT+AAr//wAf/qkD4wRSAiYAUgAAAAcArARmAAr//wA7AAAE8wdAAiYANAAAAQcAdQG0AUIAEwCwAEVYsAMvG7EDHD5ZsBbcMDEA////1/5gBDYF9QImAFQAAAEHAHUBkf/3ABMAsABFWLANLxuxDRg+WbAh3DAxAP//ADr+qQTCBbACJgA2AAAABwCsBJUACv///+7+qQLUBFQCJgBWAAAABwCsAzMACv//ACf+nwSjBccCJgA3AAAABwCsBKQAAP//AC7+lwO2BFACJgBXAAAABwCsBG3/+P//AKj+nwUJBbACJgA4AAAABwCsBJYAAP//AEP+nwKUBUACJgBYAAAABwCsA/oAAP//AKQAAAVhBy0CJgA6AAABBwCkAOEBRgATALAARViwAS8bsQEcPlmwCtwwMQD//wBuAAAD7QXiAiYAWgAAAQYApBv7ABMAsABFWLABLxuxARg+WbAK3DAxAP//AKT+qQVhBbACJgA6AAAABwCsBMoACv//AG7+qQPtBDoCJgBaAAAABwCsBDgACv//AMP+qQdBBbACJgA7AAAABwCsBc0ACv//AID+qQX+BDoCJgBbAAAABwCsBSwACv///+v+qQTOBbACJgA+AAAABwCsBJgACv///+3+qQPOBDoCJgBeAAAABwCsBEIACv///wz/5wVTBdYAJgAzRgAABwFa/hoAAP///6UAAAPjBRwCJgG6AAAABwCt/6v+3f///+EAAAQrBR8AJgG+PAAABwCt/sD+4P////0AAATWBRwAJgHBPAAABwCt/tz+3f//AAEAAAHmBR4AJgHCPAAABwCt/uD+3///AB3/6gRYBRwAJgHICgAABwCt/vz+3f///5sAAAShBRwAJgHSPAAABwCt/nr+3f//ABYAAAR0BRsAJgHzCgAABwCt/xT+3P///6UAAAPjBI0CBgG6AAD//wAdAAAD5wSNAgYBuwAA//8AHQAAA+8EjQIGAb4AAP///9wAAAQOBI0CBgHTAAD//wAdAAAEmgSNAgYBwQAA//8AKgAAAaoEjQIGAcIAAP//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DAAGiA7uDu4MRg6gCiIO7g7uD5oKigaSDGYMRgrYCqwNUg8QCl4L4gsQDBYGmA22DbYNtgwgCxAKUAxMDbAMTAsQBqYN5gtwD5oLcAasBrIGvAbCBsgMTAbOBtgNtgb+BxQHKgcwB0YHTAdSB4QHigeQDcANwAe+Du4H4AgCDVIIMA7uDu4LJg7uDu4IRg3ADcAIeAiCCIwIpg1ICLgNsAjSCOgLEAkyCUwJaAloCxAJYgloCWgJaAtwDCAK2AxMCxAN5g1IDqAOoA1ICtIK0grSCtIK0gmKCbAJugnECeIJ9AoGChgK/g+aD5oPmg+aDGYLcAtwC3ALcAtwC3ALcAr+DAAMAAwADAAO7g7uDu4O7g7uD5oPmg+aD5oPmgxGDEYMRgxGDxAL4gviC+IL4gviC+IL4gwWDBYMFgwWDbYMIAwgDCAMIAwgDEwMTAtwC+ILcAviC3AL4gr+Cv4K/gr+D5oMAAwWDAAMFgwADBYMAAwWDAAMFg7uDbYO7g7uDu4O7g7uDEYOoAoiCiIKIgoiDu4Ntg7uDbYO7g22DbYPmgwgD5oMIA+aDCAKUApQClAMZgxmDGYMRgxGDEYMRgxGDEYKrA8QDEwPEApeCl4KXgtwDAAO7g7uD5oPEAtwCoAMAApeDu4O7g6gDu4O7g+aCooMZg8QDVIO7g8QDbYMIAxMDCAMAA3mDu4O7gxGDqAOoAsmC3AKgA3mDAAO7g7uD5oKigr+DGYNUgviDBYMIAsQDEwNsAwWDUgMTAqsCqwKrA8QDEwK0grSCtIO7g22C3AL4gwADBYK2AxMCv4PEAxMDu4NUg2wDu4LcAviC3AL4gwADBYMFgwWDVINsA+aDCAMIAsQCyYMTAsmDEwLJgxMDVINsAtwC+ILcAviC3AL4gtwC+ILcAviC3AL4gtwC+ILcAviC3AL4gtwC+ILcAviC3AL4gwADBYMAAwWDAAMFgwADBYMAAwWDAAMFgwADBYMAAwWDu4O7g+aDCAPmgwgD5oMIA+aDCAPmgwgD5oMIA+aDCAMIAxGDEYPEAxMDxAMTA8QDEwOoA7uDGYNUg2wDeYNSA1SDbANtg3ADeYOoA7uDu4PEA+aAAIAhwAGAAYAAAALAAsAAQATABMAAgAlACoAAwAsADUACQA4AD4AEwBFAEYAGgBJAEoAHABMAEwAHgBRAFQAHwBWAFYAIwBaAFoAJABcAF0AJQCKAIoAJwCcAJwAKACwALQAKQC2ALgALgC6ALoAMQC8AL0AMgC/AMAANADCAMQANgDGAMsAOQDRANEAPwDTAN0AQADfAN8ASwDhAOMATADlAOcATwDpAO0AUgDwAPAAVwD1APcAWAD6APsAWwD9AP8AXQEDAQQAYAEJAQkAYgEMAQwAYwEXARkAZAErAS0AZwEwATAAagEyATIAawFJAUkAbAFsAW0AbQFvAXEAbwG6AboAcgG9Ab0AcwHEAcUAdAHIAcgAdgHKAcsAdwHNAc0AeQIoAigAegIqAisAewJHAkgAfQJKAkoAfwJMAm0AgAJvAnIAogJ3AnwApgKBAokArAKLAosAtQKNAo0AtgKPAo8AtwKRApEAuAKTApwAuQKlAqcAwwKpAqkAxgKrAqsAxwKtAq0AyAKvAq8AyQKyArIAygK0ArQAywK2ArYAzAK4ArgAzQK6AroAzgK8ArwAzwK+AsoA0ALMAswA3QLOAs4A3gLQAtAA3wLbAtsA4ALdAt0A4QLfAt8A4gLhAuEA4wLjAuMA5ALlAuUA5QLnAucA5gLpAukA5wLrAusA6ALtAu0A6QLvAvIA6gL0AvQA7gL2AvYA7wNTA1gA8ANbA2oA9gNtA20BBgNxA3EBBwNzA3MBCAN3A3cBCQN6A3sBCgN9A4YBDAOIA4oBFgOMA5EBGQOTA5QBHwOWA5kBIQOfA6ABJQOiA6IBJwOkA6QBKAOmA6kBKQOsA7EBLQOzA7MBMwO3A7gBNAO9A70BNgO/A8gBNwPLA8wBQQPOA9EBQwPYA9kBRwPdA90BSQPfA+UBSgPqA+sBUQPvBBcBUwQZBBkBfAQbBCgBfQQwBDABiwQzBDMBjAQ1BDUBjQRBBEYBjgRJBEkBlARLBEsBlQRNBE0BlgRPBFABlwRVBFgBmQRbBFsBnQRdBF4BngRgBGABoARkBGQBoQRmBGYBogRqBGoBowSqBKoBpAABABP/IAACAFb/5gG6/8AAAQG6AA4AAwANABQAQQASAGEAEwABAPX/9QABAMMADQACALf/wgDDABAAAQDD/+IAAQDG//IAAQDDAA4AAgDJ/+0A9f/AAAkAvv/mAMH/6wDC/+kAxP/wAMX/5wDJ/+MAy//OAMz/1ADN/9sABQDB/+wAwwAPAMX/6gDJ/8QAy//nAAUASv/pAMH/7gDD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Aor/6wKM/+sCjv/rApD/6wKS/+sClP/rApb/6wKY/+sCmv/rApz/6wKe/+sCoP/rAqL/6wKk/+sCsv74Asb/6wLI/+sCyv/rAtsAFALdABQC3wAUAuL/6gLk/+oC5v/qAuj/6gLq/+oC7P/qAvD/6ANT/1YDW/9WA2v/6wNv/+oDcf/rA3P/6AN2/+oDd//rA3j/6gN//vgDg/9WA44AFAOQ/94Dkf/rA5P/6wOV/+sDlv/oA5j/6wOf/+gDp//oA6//VgOw/94Ds//rA7j/6AO5/+sDvv/rA8D/6APF/1YDxv/eA8f/VgPI/94DzP/rA87/6wPP/+sD2f/rA9v/6wPd/+sD4f/oA+P/6APl/+gD7P/rA+//VgPw/94D8f9WA/L/3gPz/1YD9P/eA/X/VgP2/94D9/9WA/j/3gP5/1YD+v/eA/v/VgP8/94D/f9WA/7/3gP//1YEAP/eBAH/VgQC/94EA/9WBAT/3gQF/1YEBv/eBAj/6wQK/+sEDP/rBA7/6wQQ/+sEEv/rBBT/6wQW/+sEHP/rBB7/6wQg/+sEIv/rBCT/6wQm/+sEKP/rBCr/6wQs/+sELv/rBDD/6wQy/+sENP/qBDb/6gQ4/+oEOv/qBDz/6gQ+/+oEQP/qBEL/6ARE/+gERv/oBE0AFAAfADj/1QA6/+QAO//sAD3/3QDR/9UA1f/VARj/5AEy/9UBOv/VAmb/3QLb/9UC3f/VAt//1QLt/+wC7//dAvH/3QNY/90DZ//dA2r/3QOO/9UDoP/sA6L/7AOk/+wDpv/dA7f/5AO//90EQf/dBEP/3QRF/90ETf/VBGr/3QAaADj/sAA6/+0APf/QANH/sADV/7ABGP/tATL/sAE6/7ACZv/QAtv/sALd/7AC3/+wAu//0ALx/9ADWP/QA2f/0ANq/9ADjv+wA6b/0AO3/+0Dv//QBEH/0ARD/9AERf/QBE3/sARq/9AAEAAu/+4AOf/uAmL/7gJj/+4CZP/uAmX/7gKy/+4C4f/uAuP/7gLl/+4C5//uAun/7gLr/+4Df//uBDP/7gQ1/+4ARwAGABAACwAQAEf/6ABI/+gASf/oAEv/6ABV/+gAk//oAJj/6AC6/+gAx//oAMj/6AD2/+gBAv/oAR3/6AEh/+gBOf/oAUv/6AFM/+gBVv/oAWwAEAFtABABbwAQAXAAEAFxABACbv/o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/90AWv/hAF3/4QCT/9wAmP/cAJr/3QC6/9wAvP/hAMD/8wDH/9wAyP/cAMr/3QDr//MA7//zAPD/8wDy//MA8//zAPT/8wD2/9wA9//zAPn/8wD6//MA/f/zAP//8wEC/9wBBP/zARf/1gEZ/+EBHf/cASH/3AE1//MBOf/cAUT/8wFJ//MBS//cAUz/3AFW/9wCbv/cAm//3AJw/9wCcf/cAnL/3AJ3//MCeP/WAnn/1gJ6/9YCe//WAnz/1gJ9/90Cfv/dAn//3QKA/90Cgf/hAoL/4QKK/9wCjP/cAo7/3AKQ/9wCkv/cApT/3AKW/9wCmP/cApr/3AKc/9wCnv/cAqD/3AKi/9wCpP/cAr//8wLB//MCw//zAsT/8wLG/9YCyP/WAsr/1gLi/90C5P/dAub/3QLo/90C6v/dAuz/3QLw/+EDa//cA23/8wNv/90Dcf/WA3P/4QN2/90Dd//WA3j/3QOR/9wDkv/zA5P/1gOU//MDlf/cA5b/4QOY/9wDmf/zA57/8wOf/+EDp//hA67/8wOz/9wDtP/zA7j/4QO5/9wDvv/cA8D/4QPM/9wDzv/cA8//3APV//MD1//zA9n/1gPb/9wD3f/WA+H/4QPj/+ED5f/hA+n/8wPs/9wECP/cBAr/3AQM/9wEDv/cBBD/3AQS/9wEFP/cBBb/3AQc/9YEHv/WBCD/1gQi/9YEJP/WBCb/1gQo/9YEKv/cBCz/3AQu/9wEMP/WBDL/3AQ0/90ENv/dBDj/3QQ6/90EPP/dBD7/3QRA/90EQv/hBET/4QRG/+EESv/zBEz/8wRW//MEY//zBGX/8wRn//MAcQAG/9oAC//aAEf/8ABI//AASf/wAEv/8ABV//AAWf/vAFr/3ABd/9wAk//wAJj/8ACa/+8Auv/wALz/3ADH//AAyP/wAMr/7wD2//ABAv/wARn/3AEd//ABIf/wATn/8AFL//ABTP/wAVb/8AFs/9oBbf/aAW//2gFw/9oBcf/aAm7/8AJv//ACcP/wAnH/8AJy//ACff/vAn7/7wJ//+8CgP/vAoH/3AKC/9wCiv/wAoz/8AKO//ACkP/wApL/8AKU//AClv/wApj/8AKa//ACnP/wAp7/8AKg//ACov/wAqT/8ALi/+8C5P/vAub/7wLo/+8C6v/vAuz/7wLw/9wDa//wA2//7wNz/9wDdv/v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//UA1f/xANn/9ADc//UA3f/zARj/9AEy//EBOv/xAVH/9QJm//AC2//xAt3/8QLf//EC7//wAvH/8ANY//ADZ//wA2j/9ANq//ADgv/zA47/8QOP//QDpv/wA7f/9AO///ADwv/0A9D/9APg//MD4v/zA+T/8wPq//QD7f/1BEH/8ARD//AERf/wBE3/8QRP//QEV//0BGj/9QRq//AAWQAlAA8AOP/mADr/5gA8AA4APf/mALEADwCzAA8A0f/mANMADgDV/+YA2QAOANwADgDdAAsA4P/lAPEADwD4/+gBAwAPAQwADwEY/+YBMv/mATr/5gFRAA4CTAAPAk0ADwJOAA8CTwAPAlAADwJRAA8CUgAPAmb/5gKDAA8ChQAPAocADwLb/+YC3f/mAt//5gLv/+YC8f/mA1MADwNY/+YDWwAPA2f/5gNoAA4Dav/mA4IACwODAA8Djv/mA48ADgOm/+YDrwAPA7f/5gO//+YDwgAOA8UADwPHAA8D0AAOA+AACwPiAAsD5AALA+b/5QPn/+gD6gAOA+0ADgPuAA8D7wAPA/EADwPzAA8D9QAPA/cADwP5AA8D+wAPA/0ADwP/AA8EAQAPBAMADwQFAA8EQf/mBEP/5gRF/+YETf/mBE8ADgRR/+UEUv/oBFP/5QRU/+gEVwAOBGgADgRpAA8Eav/mAC4AOP/jADz/5QA9/+QA0f/jANP/5QDV/+MA2f/lANz/5QDd/+kA8f/qAQP/6gEy/+MBOv/jAVH/5QJm/+QC2//jAt3/4wLf/+MC7//kAvH/5ANY/+QDZ//kA2j/5QNq/+QDgv/pA47/4wOP/+UDpv/kA7//5APC/+UD0P/lA+D/6QPi/+kD5P/pA+r/5QPt/+UD7v/qBEH/5ARD/+QERf/kBE3/4wRP/+UEV//lBGj/5QRp/+oEav/kACEAOP/iADz/5ADR/+IA0//kANX/4gDZ/+QA3P/kAN3/6QDx/+sBA//rATL/4gE6/+IBUf/kAtv/4gLd/+IC3//iA2j/5AOC/+kDjv/iA4//5APC/+QD0P/kA+D/6QPi/+kD5P/pA+r/5APt/+QD7v/rBE3/4gRP/+QEV//kBGj/5ARp/+sAFwA4/+sAPf/zANH/6wDV/+sBMv/rATr/6wJm//MC2//rAt3/6wLf/+sC7//zAvH/8wNY//MDZ//zA2r/8wOO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ABgEJwQnAAMEKAQoABgEMAQwABgEMwQzAAwENQQ1AAwEQQRBAA8EQgRCABkEQwRDAA8ERAREABkERQRFAA8ERgRGABkESQRJAAkESwRLAAIETQRNAAYETwRPAA4EUARQABsEVQRVAAcEVgRWAAgEVwRXAA4EWARYABsEWwRbABcEXQRdAB8EXgReAAcEYARgAAkEZARkAAIEZgRmAAIEagRqAA8EqgSqAAMAAgFtAAYABgAHAAsACwAHABAAEAATABEAEQAXABIAEgATACUAJQARACcAJwAFACsAKwAFAC4ALgAcADMAMwAFADUANQAFADcANwAZADgAOAAKADkAOQAGADoAOgANADsAOwAJADwAPAASAD0APQAOAD4APgAUAEUARQAaAEcASQAVAEsASwAVAFEAUgAYAFMAUwAIAFQAVAAYAFUAVQAVAFcAVwAbAFkAWQALAFoAWgACAFwAXAAWAF0AXQACAF4AXgAMAIMAgwAFAJIAkgAFAJMAkwAVAJcAlwAFAJgAmAAVAJoAmgALALEAsQARALIAsgAFALMAswARALoAugAVALwAvAACAMAAwAAYAMcAyAAVAMoAygALANEA0QAKANIA0gAFANMA0wABANUA1QAKANkA2QASANwA3AABAN0A3QAQAOAA4AAPAOsA6wAYAO0A7QAWAO8A8AAYAPEA8QAEAPIA9AAYAPYA9gAVAPcA9wAYAPgA+AADAPkA+gAYAP0A/QAYAP8A/wAYAQIBAgAVAQMBAwAEAQQBBAAYAQcBBwAFAQwBDAARARYBFgAFARcBFwAIARgBGAANARkBGQACARoBGgAFARwBHAAFAR0BHQAVAR4BHgAFASABIAAFASEBIQAVATIBMgAKATUBNQAYATgBOAAFATkBOQAVAToBOgAKAUQBRAAYAUkBSQAYAUsBTAAVAVEBUQABAVUBVQAFAVYBVgAVAWkBagAXAWwBbQAHAW4BbgATAW8BcQAHAXIBcgATAXYBdwATAigCKQAFAisCLAAFAkYCRgAXAkwCUgARAlMCUwAFAl0CYQAFAmICZQAGAmYCZgAOAmcCbQAaAm4CcgAVAncCdwAYAngCfAAIAn0CgAALAoECggACAoMCgwARAoQChAAaAoUChQARAoYChgAaAocChwARAogCiAAaAokCiQAFAooCigAVAosCiwAFAowCjAAVAo0CjQAFAo4CjgAVAo8CjwAFApACkAAVApICkgAVApQClAAVApYClgAVApgCmAAVApoCmgAVApwCnAAVAp0CnQAFAp4CngAVAp8CnwAFAqACoAAVAqECoQAFAqICogAVAqMCowAFAqQCpAAVArICsgAcAr8CvwAYAsECwQAYAsMCxAAYAsUCxQAFAsYCxgAIAscCxwAFAsgCyAAIAskCyQAFAsoCygAIAtEC0QAZAtIC0gAbAtMC0wAZAtQC1AAbAtUC1QAZAtYC1gAbAtcC1wAZAtgC2AAbAtkC2QAZAtoC2gAbAtsC2wAKAt0C3QAKAt8C3wAKAuEC4QAGAuIC4gALAuMC4wAGAuQC5AALAuUC5QAGAuYC5gALAucC5wAGAugC6AALAukC6QAGAuoC6gALAusC6wAGAuwC7AALAu0C7QAJAu8C7wAOAvAC8AACAvEC8QAOAvIC8gAUAvMC8wAMAvQC9AAUAvUC9QAMAvYC9gAUAvcC9wAMAvoC+gAFA1MDUwARA1cDVwAFA1gDWAAOA1sDWwARA14DXgAUA2QDZAAFA2cDZwAOA2gDaAASA2oDagAOA2sDawAVA20DbQAYA28DbwALA3EDcQAIA3MDcwACA3YDdgALA3cDdwAIA3gDeAALA38DfwAcA4IDggAQA4MDgwARA4oDigAFA40DjQAFA44DjgAKA48DjwASA5ADkAAaA5EDkQAVA5IDkgAYA5MDkwAIA5QDlAAYA5UDlQAVA5YDlgACA5cDlwAWA5gDmAAVA5kDmQAYA5oDmgAbA54DngAYA58DnwACA6ADoAAJA6IDogAJA6QDpAAJA6YDpgAOA6cDpwACA6gDqQAHA6wDrAAHA64DrgAYA68DrwARA7ADsAAaA7MDswAVA7QDtAAYA7cDtwANA7gDuAACA7kDuQAVA7oDugAFA70DvQAFA74DvgAVA78DvwAOA8ADwAACA8IDwgASA8MDwwAWA8UDxQARA8YDxgAaA8cDxwARA8gDyAAaA8wDzAAVA84DzwAVA9AD0AASA9ED0QAWA9UD1QAYA9cD1wAYA9gD2AAFA9kD2QAIA9oD2gAFA9sD2wAVA9wD3AAFA90D3QAIA+AD4AAQA+ED4QACA+ID4gAQA+MD4wACA+QD5AAQA+UD5QACA+YD5gAPA+cD5wADA+kD6QAYA+oD6gASA+sD6wAWA+wD7AAVA+0D7QABA+4D7gAEA+8D7wARA/AD8AAaA/ED8QARA/ID8gAaA/MD8wARA/QD9AAaA/UD9QARA/YD9gAaA/cD9wARA/gD+AAaA/kD+QARA/oD+gAaA/sD+wARA/wD/AAaA/0D/QARA/4D/gAaA/8D/wARBAAEAAAaBAEEAQARBAIEAgAaBAMEAwARBAQEBAAaBAUEBQARBAYEBgAaBAgECAAVBAoECgAVBAwEDAAVBA4EDgAVBBAEEAAVBBIEEgAVBBQEFAAVBBYEFgAVBBsEGwAFBBwEHAAIBB0EHQAFBB4EHgAIBB8EHwAFBCAEIAAIBCEEIQAFBCIEIgAIBCMEIwAFBCQEJAAIBCUEJQAFBCYEJgAIBCcEJwAFBCgEKAAIBCkEKQAFBCoEKgAVBCsEKwAFBCwELAAVBC0ELQAFBC4ELgAVBC8ELwAFBDAEMAAIBDEEMQAFBDIEMgAVBDMEMwAGBDQENAALBDUENQAGBDYENgALBDgEOAALBDoEOgALBDwEPAALBD4EPgALBEAEQAALBEEEQQAOBEIEQgACBEMEQwAOBEQERAACBEUERQAOBEYERgACBEoESgAYBEwETAAYBE0ETQAKBE8ETwASBFAEUAAWBFEEUQAPBFIEUgADBFMEUwAPBFQEVAADBFYEVgAYBFcEVwASBFgEWAAWBGMEYwAYBGUEZQAYBGcEZwAYBGgEaAABBGkEaQAEBGoEagAOBHAEcAAXBKoEqgAFAAEAAAAKAgYG8AAEREZMVAAaY3lybABIZ3JlawB2bGF0bgCkAAQAAAAA//8AEgAAAAoAFAAeACgANABBAEsAVQBfAGkAcwB9AIcAkQCbAKUArwAEAAAAAP//ABIAAQALABUAHwApADUAQgBMAFYAYABqAHQAfgCIAJIAnACmALAABAAAAAD//wASAAIADAAWACAAKgA2AEMATQBXAGEAawB1AH8AiQCTAJ0ApwCxACgABkFaRSAAVENSVCAAfk1PTCAAqE5BViAA1FJPTSABAFRVUiABLAAA//8AEwADAA0AFwAhACsAMgA3AEQATgBYAGIAbAB2AIAAigCUAJ4AqACyAAD//wASAAQADgAYACIALAA4AEUATwBZAGMAbQB3AIEAiwCVAJ8AqQCzAAD//wASAAUADwAZACMALQA5AEYAUABaAGQAbgB4AIIAjACWAKAAqgC0AAD//wATAAYAEAAaACQALgA6AD4ARwBRAFsAZQBvAHkAgwCNAJcAoQCrALUAAP//ABMABwARABsAJQAvADsAPwBIAFIAXABmAHAAegCEAI4AmACiAKwAtgAA//8AEwAIABIAHAAmADAAPABAAEkAUwBdAGcAcQB7AIUAjwCZAKMArQC3AAD//wATAAkAEwAdACcAMQAzAD0ASgBUAF4AaAByAHwAhgCQAJoApACuALgAuWMyc2MEWGMyc2MEWGMyc2MEWGMyc2MEWGMyc2MEWGMyc2MEWGMyc2MEWGMyc2MEWGMyc2MEWGMyc2MEWGNjbXAEXmNjbXAEXmNjbXAEXmNjbXAEXmNjbXAEXmNjbXAEXmNjbXAEXmNjbXAEXmNjbXAEXmNjbXAEXmRsaWcEZmRsaWcEZmRsaWcEZmRsaWcEZmRsaWcEZmRsaWcEZmRsaWcEZmRsaWcEZmRsaWcEZmRsaWcEZmRub20EbGRub20EbGRub20EbGRub20EbGRub20EbGRub20EbGRub20EbGRub20EbGRub20EbGRub20EbGZyYWMEcmZyYWMEcmZyYWMEcmZyYWMEcmZyYWMEcmZyYWMEcmZyYWMEcmZyYWMEcmZyYWMEcmZyYWMEcmxpZ2EEfGxpZ2EEhGxudW0EimxudW0EimxudW0EimxudW0EimxudW0EimxudW0EimxudW0EimxudW0EimxudW0EimxudW0EimxvY2wEkGxvY2wElmxvY2wEnG51bXIEom51bXIEom51bXIEom51bXIEom51bXIEom51bXIEom51bXIEom51bXIEom51bXIEom51bXIEom9udW0EqG9udW0EqG9udW0EqG9udW0EqG9udW0EqG9udW0EqG9udW0EqG9udW0EqG9udW0EqG9udW0EqHBudW0ErnBudW0ErnBudW0ErnBudW0ErnBudW0ErnBudW0ErnBudW0ErnBudW0ErnBudW0ErnBudW0ErnNtY3AEtHNtY3AEtHNtY3AEtHNtY3AEtHNtY3AEtHNtY3AEtHNtY3AEtHNtY3AEtHNtY3AEtHNtY3AEtHNzMDEEunNzMDEEunNzMDEEunNzMDEEunNzMDEEunNzMDEEunNzMDEEunNzMDEEunNzMDEEunNzMDEEunNzMDIEwHNzMDIEwHNzMDIEwHNzMDIEwHNzMDIEwHNzMDIEwHNzMDIEwHNzMDIEwHNzMDIEwHNzMDIEwHNzMDMExnNzMDMExnNzMDMExnNzMDMExnNzMDMExnNzMDMExnNzMDMExnNzMDMExnNzMDMExnNzMDMExnNzMDQEzHNzMDQEzHNzMDQEzHNzMDQEzHNzMDQEzHNzMDQEzHNzMDQEzHNzMDQEzHNzMDQEzHNzMDQEzHNzMDUE0nNzMDUE0nNzMDUE0nNzMDUE0nNzMDUE0nNzMDUE0nNzMDUE0nNzMDUE0nNzMDUE0nNzMDUE0nNzMDYE2HNzMDYE2HNzMDYE2HNzMDYE2HNzMDYE2HNzMDYE2HNzMDYE2HNzMDYE2HNzMDYE2HNzMDYE2HNzMDcE3nNzMDcE3nNzMDcE3nNzMDcE3nNzMDcE3nNzMDcE3nNzMDcE3nNzMDcE3nNzMDcE3nNzMDcE3nRudW0E5HRudW0E5HRudW0E5HRudW0E5HRudW0E5HRudW0E5HRudW0E5HRudW0E5HRudW0E5HRudW0E5AAAAAEAAAAAAAIAAgADAAAAAQAHAAAAAQAYAAAAAwAVABYAFwAAAAIACAAJAAAAAQAJAAAAAQAUAAAAAQAEAAAAAQAGAAAAAQAFAAAAAQAZAAAAAQARAAAAAQATAAAAAQABAAAAAQAKAAAAAQALAAAAAQAMAAAAAQANAAAAAQAOAAAAAQAPAAAAAQAQAAAAAQASABsAOAPGBrQHYA3wDfAOBg4oDl4OhA6yDsYO2g7uDwAPGg9cD3oPmA/KD/wQLhBCEHoQbBB6EKYAAQAAAAEACAACAcQA3wHnAboBuwG8Ab0BvgG/AcABwQHCAcMBxAHFAcYBxwHIAckBygHLAcwBzQHOAc8B0AHRAdIB0wHoAekCRAI7AeoB6wHsAe0B7gHvAfAB8QHyAfMB9AH1AfYB9wH4AfkB+gH7AfwB/QH+AgACAQTdAgICAwIEAgUCBgIHAggCCQIKAgsCLwIPAhACEQIUAhUCFgIXAhgCGQIbAhwCHgIdAvwC/QL+Av8DAAMBAwIDAwMEAwUDBgMHAwgDCQMKAwsDDAMNAw4DDwMQAxEDEgMTAxQDFQMWAxcDGAMZAxoDGwMcAx0DHgMfAyADIQMiAyMDJAMlAyYDJwMoAykDKgMrAywDLQMuAy8DMAMxAzIDMwM0AzUDNgM3AzgDOQM6AzsDPAM9Az4DPwNAA0EDQgNDA0QDRgNFA0cDSANJA0oDSwNMA00DTgNPA1ADUQNSBKsErAStBK4ErwSwBLEEsgSzBLQEtQS2BLcEuAS5BLoEuwS8BL0EvgS/BMAEwQTCBMMExATFBMYB/wTHBMgEyQTKBMsEzATNBM4EzwTQBNEE0gTTBNQE1QTWBNgE2QTbAhoE3AIOBNcCEwINBNoCDAISAAEA3wAIACUAJgAnACgAKQAqACsALAAtAC4ALwAwADEAMgAzADQANQA2ADcAOAA5ADoAOwA8AD0APgBlAGcAhQCSALAAsQCyALMAtAC1ALYAtwC4ALkA0QDSANMA1ADVANYA1wDYANkA2gDbANwA3QDeAN8A4ADhAOIA4wDkAOUA5gDnAOgBLAEwATIBOAE6ATwBPgE/AUUBRgF/AYUBigGNAkcCSAJKAkwCTQJOAk8CUAJRAlICUwJUAlUCVgJXAlgCWQJaAlsCXAJdAl4CXwJgAmECYgJjAmQCZQJmAoMChQKHAokCiwKNAo8CkQKTApUClwKZApsCnQKfAqECowKlAqcCqQKrAq0CrwKyArQCtgK4AroCvAK+AsACwgLFAscCyQLLAs0CzwLRAtMC1QLZAtsC3QLfAuEC4wLlAucC6QLrAu0C7wLxAvIC9AL2A1MDVANVA1YDVwNYA1kDWwNcA10DXgNfA2ADYQNiA2QDZQNmA2cDaANpA2oDegN7A3wDfQN+A38DgAOBA4IDgwOEA4UDhgOHA4gDiQOKA4sDjAONA44DjwO7A70DvwPUA9oD4ARJBEsETwRXBFkEXgRqAAEAAAABAAgAAgF0ALcBugG7AbwBvQG+Ab8BwAHBAcIBwwHEAcUBxgHHAcgByQHKAcsBzAHNAc4BzwHQAdEB0gHTAv0DMAI7AfoEygTLAfsB/AH9Af4B/wIABM4EzwTRBNQE3QICAgMCBAIFAgYCBwIIAgkCCgILAfQB9QH2AfcB+AH5Ai8CDwIQAhECFAIVAhcCGQL+Av8DAAMBAwIDAwMEAwUDBgMHAwgDCQMKAwsDDAMNAw4DDwMQAxEDEgMTAxQDFQMWAxcDGAMZA08DGgMbAxwDHQMeAx8DIAMhAyIDIwMkAyUDJgMnAygDKQMqAysDLAMtAy4DLwMxAzIDMwM0AzUDNgM3AzgDOQM6AzsDPAM9Az4DPwNAA0EDQgNDA0QDRgNFA0cDSANJA0oDSwNMA00DTgNQA1EDUgTJBMwEzQTQBNIE0wIBBNUEwQTCBMMExATFBMYExwTIBNYE2ATZAhgE2wIaBNwC/AIOBNcCEwINBNoCFgIMAhIAAQC3AEUARgBHAEgASQBKAEsATABNAE4ATwBQAFEAUgBTAFQAVQBWAFcAWABZAFoAWwBcAF0AXgCHAIwAkwDpAOoA6wDsAO0A7gDvAPAA8QDyAPMA9AD1APYA9wD4APkA+gD7APwA/QD+AP8BAAEBAQIBAwEEAQUBBgEtATEBMwE5ATsBPQFAAUcCSwJnAmgCaQJqAmsCbAJtAm4CbwJwAnECcgJzAnQCdQJ2AncCeAJ5AnoCewJ8An0CfgJ/AoACgQKCAoQChgKIAooCjAKOApACkgKUApYCmAKaApwCngKgAqICpAKmAqgCqgKsAq4CswK1ArcCuQK7Ar0CvwLBAsMCxgLIAsoCzALOAtAC0gLUAtYC2gLcAt4C4ALiAuQC5gLoAuoC7ALuAvAC8wL1AvcDkAORA5IDkwOUA5UDlgOXA5gDmQOaA5sDnAOdA54DnwO8A74DwAPOA9UD2wPhBEcESgRMBFAEWARaBFsEXwRrAAYAAAAGABIAKgBCAFoAcgCKAAMAAAABABIAAQCQAAEAAAAaAAEAAQBNAAMAAAABABIAAQB4AAEAAAAaAAEAAQBOAAMAAAABABIAAQBgAAEAAAAaAAEAAQKuAAMAAAABABIAAQBIAAEAAAAaAAEAAQObAAMAAAABABIAAQAwAAEAAAAaAAEAAQOdAAMAAAABABIAAQAYAAEAAAAaAAEAAQQaAAIAAQCnAKsAAAAEAAAAAQAIAAEGHgA2AHIApACuALgAygD8AQ4BGAFKAWQBfgGQAboB7AH2AhgCMgJEAnYCiAKiAswC3gMQAxoDJAM2A2gDcgN8A4YDoAO6A8wD9gQoBDIEVARuBIAEsgTEBN4FCAUaBSQFLgU4BUIFbAWWBcAF6gYUAAYADgAUABoAIAAmACwCTAACAKcCTQACAKgCTwACAKkD8QACAKoEewACAKsD7wACAKwAAQAEBIgAAgCsAAEABAKJAAIAqAACAAYADASKAAIArASMAAIBogAGAA4AFAAaACAAJgAsAlQAAgCnAlUAAgCoBAsAAgCpBAkAAgCqBH0AAgCrBAcAAgCsAAIABgAMBHcAAgCoAqMAAgGiAAEABASOAAIArAAGAA4AFAAaACAAJgAsAlgAAgCnAlkAAgCoAqcAAgCpBBcAAgCqBH8AAgCrBBkAAgCsAAMACAAOABQEkAACAKgEkgACAKwCtAACAaIAAwAIAA4AFAK2AAIAqASUAAIArAK4AAIBogACAAYADAOtAAIAqASWAAIArAAFAAwAEgAYAB4AJAR5AAIApwK+AAIAqAJcAAIAqQSYAAIArALAAAIBogAGAA4AFAAaACAAJgAsAl0AAgCnAl4AAgCoAmAAAgCpBB0AAgCqBIEAAgCrBBsAAgCsAAEABASaAAIAqAAEAAoAEAAWABwCywACAKgEgwACAKsEnAACAKwCzQACAaIAAwAIAA4AFALRAAIAqASeAAIArALXAAIBogACAAYADASgAAIArALbAAIBogAGAA4AFAAaACAAJgAsAmIAAgCnAmMAAgCoAuEAAgCpBDUAAgCqBIUAAgCrBDMAAgCsAAIABgAMBKIAAgCpBKQAAgCsAAMACAAOABQDoAACAKcDogACAKgEpgACAKwABQAMABIAGAAeACQDpgACAKcCZgACAKgERQACAKkEQwACAKoEQQACAKwAAgAGAAwC8gACAKgEqAACAKwABgAOABQAGgAgACYALAJnAAIApwJoAAIAqAJqAAIAqQPyAAIAqgR8AAIAqwPwAAIArAABAAQEiQACAKwAAQAEAooAAgCoAAIABgAMBIsAAgCsBI0AAgGiAAYADgAUABoAIAAmACwCbwACAKcCcAACAKgEDAACAKkECgACAKoEfgACAKsECAACAKwAAQAEBHgAAgCoAAEABASPAAIArAABAAQEGgACAKwAAwAIAA4AFASRAAIAqASTAAIArAK1AAIBogADAAgADgAUArcAAgCoBJUAAgCsArkAAgGiAAIABgAMA64AAgCoBJcAAgCsAAUADAASABgAHgAkBHoAAgCnAr8AAgCoAncAAgCpBJkAAgCsAsEAAgGiAAYADgAUABoAIAAmACwCeAACAKcCeQACAKgCewACAKkEHgACAKoEggACAKsEHAACAKwAAQAEBJsAAgCoAAQACgAQABYAHALMAAIAqASEAAIAqwSdAAIArALOAAIBogADAAgADgAUAtIAAgCoBJ8AAgCsAtgAAgGiAAIABgAMBKEAAgCsAtwAAgGiAAYADgAUABoAIAAmACwCfQACAKcCfgACAKgC4gACAKkENgACAKoEhgACAKsENAACAKwAAgAGAAwEowACAKkEpQACAKwAAwAIAA4AFAOhAAIApwOjAAIAqASnAAIArAAFAAwAEgAYAB4AJAOnAAIApwKBAAIAqARGAAIAqQREAAIAqgRCAAIArAACAAYADALzAAIAqASpAAIArAABAAQC+AACAKgAAQAEAvoAAgCoAAEABAL5AAIAqAABAAQC+wACAKgABQAMABIAGAAeACQCcwACAKcCdAACAKgCqAACAKkEGAACAKoEgAACAKsABQAMABIAGAAeACQEKwACAKcEKQACAKgELwACAKkELQACAKoEMQACAKwABQAMABIAGAAeACQELAACAKcEKgACAKgEMAACAKkELgACAKoEMgACAKwABQAMABIAGAAeACQEOQACAKcENwACAKgEPQACAKkEOwACAKoEPwACAKwABQAMABIAGAAeACQEOgACAKcEOAACAKgEPgACAKkEPAACAKoEQAACAKwAAQAEBIcAAgCoAAIAEQAlACkAAAArAC0ABQAvADQACAA2ADsADgA9AD4AFABFAEkAFgBLAE0AGwBPAFQAHgBWAFsAJABdAF4AKgCBAIEALACDAIMALQCGAIYALgCJAIkALwCMAIwAMACXAJoAMQDPAM8ANQABAAAAAQAIAAEABgACAAEAAgLVAtYAAQAAAAEACAACAA4ABATeBN8E4AThAAEABAKHAogCmQKaAAQAAAABAAgAAQAmAAIACgAcAAIABgAMAaMAAgBKAagAAgBYAAEABAGpAAIAWAABAAIASgBXAAQAAAABAAgAAQBEAAIACgAUAAEABAGkAAIATQABAAQBpgACAE0ABAAAAAEACAABAB4AAgAKABQAAQAEAaUAAgBQAAEABAGnAAIAUAABAAIASgGjAAEAAAABAAgAAQAGAZUAAQABAEsAAQAAAAEACAABAAYBJwABAAEAugABAAAAAQAIAAEABgGsAAEAAQA2AAEAAAABAAgAAgAcAAIB4wHkAAEAAAABAAgAAgAKAAIB5QHmAAEAAgAvAE8AAQAAAAEACAACAB4ADAIoAioCKQIrAiwCHwIgAiECIgGuAiQCJQABAAwAJwAoACsAMwA1AEYARwBIAEsAUwBUAFUAAQAAAAEACAACAAwAAwImAicCJwABAAMASQBLAiIAAQAAAAEACAACAGYACAI9Ai0CLgIwAjECOQI6AjwAAQAAAAEACAACABYACAAbABUAFgAXABgAGQAdABQAAQAIAa0CIwRxBHIEcwR0BHUEdgABAAAAAQAIAAIAFgAIBHYCIwRxBHIEcwR0Aa0EdQABAAgAFAAVABYAFwAYABkAGwAdAAEAAAABAAgAAgAWAAgAFQAWABcAGAAZABsAHQAUAAEACAItAi4CMAIxAjkCOgI8Aj0AAQAAAAEACAABAAYBaQABAAEAEwAGAAAAAQAIAAMAAQASAAEAUgAAAAEAAAAaAAIAAgF8AXwAAAHUAd0AAQABAAAAAQAIAAEAKAHAAAEAAAABAAgAAgAaAAoCMgB6AHMAdAIzAjQCNQI2AjcCOAACAAEAFAAdAAAAAQAAAAEACAACACYAEAHUAdUB1gHXAdgB2QHaAdsB3AHdAkACPgJBAkICPwJDAAEAEAAUABUAFgAXABgAGQAaABsAHAAdAE0ATgKuA5sDnQQa",
};





(function (i) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net", "datatables.net-buttons"], function (j) {
    return i(j, window, document)
  }) : "object" === typeof exports ? module.exports = function (j, l, v, u) {
    j || (j = window);
    if (!l || !l.fn.dataTable) l = require("datatables.net")(j, l).$;
    l.fn.dataTable.Buttons || require("datatables.net-buttons")(j, l);
    return i(l, j, j.document, v, u)
  } : i(jQuery, window, document)
})(function (i, j, l, v, u, s) {
  function z(a) {
    for (var b = ""; 0 <= a;) b = String.fromCharCode(a % 26 + 65) + b, a = Math.floor(a /
      26) - 1;
    return b
  }

  function A(a, b) {
    w === s && (w = -1 === y.serializeToString(i.parseXML(B["xl/worksheets/sheet1.xml"])).indexOf("xmlns:r"));
    i.each(b, function (d, c) {
      if (i.isPlainObject(c)) {
        var b = a.folder(d);
        A(b, c)
      } else {
        if (w) {
          var b = c.childNodes[0],
            g, e, n = [];
          for (g = b.attributes.length - 1; 0 <= g; g--) {
            e = b.attributes[g].nodeName;
            var h = b.attributes[g].nodeValue; - 1 !== e.indexOf(":") && (n.push({
              name: e,
              value: h
            }), b.removeAttribute(e))
          }
          g = 0;
          for (e = n.length; g < e; g++) h = c.createAttribute(n[g].name.replace(":", "_dt_b_namespace_token_")),
            h.value = n[g].value, b.setAttributeNode(h)
        }
        b = y.serializeToString(c);
        w && (-1 === b.indexOf("<?xml") && (b = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + b), b = b.replace(/_dt_b_namespace_token_/g, ":"));
        b = b.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g, "<$1 $2>");
        a.file(d, b)
      }
    })
  }

  function q(a, b, d) {
    var c = a.createElement(b);
    d && (d.attr && i(c).attr(d.attr), d.children && i.each(d.children, function (a, b) {
      c.appendChild(b)
    }), null !== d.text && d.text !== s && c.appendChild(a.createTextNode(d.text)));
    return c
  }

  function K(a, b) {
    var d =
        a.header[b].length,
      c;
    a.footer && a.footer[b].length > d && (d = a.footer[b].length);
    for (var f = 0, g = a.body.length; f < g; f++)
      if (c = a.body[f][b], c = null !== c && c !== s ? c.toString() : "", -1 !== c.indexOf("\n") ? (c = c.split("\n"), c.sort(function (a, c) {
        return c.length - a.length
      }), c = c[0].length) : c = c.length, c > d && (d = c), 40 < d) return 52;
    d *= 1.3;
    return 6 < d ? d : 6
  }
  var o = i.fn.dataTable,
    t;
  var h = "undefined" !== typeof self && self || "undefined" !== typeof j && j || this.content;
  if ("undefined" === typeof h || "undefined" !== typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent)) t =
    void 0;
  else {
    var x = h.document.createElementNS("http://www.w3.org/1999/xhtml", "a"),
      L = "download" in x,
      M = /constructor/i.test(h.HTMLElement) || h.safari,
      C = /CriOS\/[\d]+/.test(navigator.userAgent),
      N = function (a) {
        (h.setImmediate || h.setTimeout)(function () {
          throw a;
        }, 0)
      },
      D = function (a) {
        setTimeout(function () {
          "string" === typeof a ? (h.URL || h.webkitURL || h).revokeObjectURL(a) : a.remove()
        }, 4E4)
      },
      E = function (a) {
        return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob([String.fromCharCode(65279),
          a], {
          type: a.type
        }) : a
      },
      F = function (a, b, d) {
        d || (a = E(a));
        var c = this,
          d = "application/octet-stream" === a.type,
          f, g = function () {
            for (var a = ["writestart", "progress", "write", "writeend"], a = [].concat(a), b = a.length; b--;) {
              var d = c["on" + a[b]];
              if ("function" === typeof d) try {
                d.call(c, c)
              } catch (e) {
                N(e)
              }
            }
          };
        c.readyState = c.INIT;
        if (L) f = (h.URL || h.webkitURL || h).createObjectURL(a), setTimeout(function () {
          x.href = f;
          x.download = b;
          var a = new MouseEvent("click");
          x.dispatchEvent(a);
          g();
          D(f);
          c.readyState = c.DONE
        });
        else if ((C || d && M) && h.FileReader) {
          var e =
            new FileReader;
          e.onloadend = function () {
            var a = C ? e.result : e.result.replace(/^data:[^;]*;/, "data:attachment/file;");
            h.open(a, "_blank") || (h.location.href = a);
            c.readyState = c.DONE;
            g()
          };
          e.readAsDataURL(a);
          c.readyState = c.INIT
        } else f || (f = (h.URL || h.webkitURL || h).createObjectURL(a)), d ? h.location.href = f : h.open(f, "_blank") || (h.location.href = f), c.readyState = c.DONE, g(), D(f)
      },
      m = F.prototype;
    "undefined" !== typeof navigator && navigator.msSaveOrOpenBlob ? t = function (a, b, d) {
      b = b || a.name || "download";
      d || (a = E(a));
      return navigator.msSaveOrOpenBlob(a,
        b)
    } : (m.abort = function () {}, m.readyState = m.INIT = 0, m.WRITING = 1, m.DONE = 2, m.error = m.onwritestart = m.onprogress = m.onwrite = m.onabort = m.onerror = m.onwriteend = null, t = function (a, b, d) {
      return new F(a, b || a.name || "download", d)
    })
  }
  o.fileSave = t;
  var O = function (a) {
      var b = "Sheet1";
      a.sheetName && (b = a.sheetName.replace(/[\[\]\*\/\\\?\:]/g, ""));
      return b
    },
    G = function (a) {
      return a.newline ? a.newline : navigator.userAgent.match(/Windows/) ? "\r\n" : "\n"
    },
    H = function (a, b) {
      for (var d = G(b), c = a.buttons.exportData(b.exportOptions), f = b.fieldBoundary,
             g = b.fieldSeparator, e = RegExp(f, "g"), n = b.escapeChar !== s ? b.escapeChar : "\\", i = function (a) {
          for (var c = "", b = 0, d = a.length; b < d; b++) 0 < b && (c += g), c += f ? f + ("" + a[b]).replace(e, n + f) + f : a[b];
          return c
        }, h = b.header ? i(c.header) + d : "", j = b.footer && c.footer ? d + i(c.footer) : "", k = [], l = 0, m = c.body.length; l < m; l++) k.push(i(c.body[l]));
      return {
        str: h + k.join(d) + j,
        rows: k.length
      }
    },
    I = function () {
      if (!(-1 !== navigator.userAgent.indexOf("Safari") && -1 === navigator.userAgent.indexOf("Chrome") && -1 === navigator.userAgent.indexOf("Opera"))) return !1;
      var a = navigator.userAgent.match(/AppleWebKit\/(\d+\.\d+)/);
      return a && 1 < a.length && 603.1 > 1 * a[1] ? !0 : !1
    };
  try {
    var y = new XMLSerializer,
      w
  } catch (P) {}
  var B = {
      "_rels/.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
      "xl/_rels/workbook.xml.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',
      "[Content_Types].xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',
      "xl/workbook.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="" sheetId="1" r:id="rId1"/></sheets></workbook>',
      "xl/worksheets/sheet1.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',
      "xl/styles.xml": '<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="67"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'
    },
    J = [{
      match: /^\-?\d+\.\d%$/,
      style: 60,
      fmt: function (a) {
        return a / 100
      }
    }, {
      match: /^\-?\d+\.?\d*%$/,
      style: 56,
      fmt: function (a) {
        return a / 100
      }
    }, {
      match: /^\-?\$[\d,]+.?\d*$/,
      style: 57
    }, {
      match: /^\-?£[\d,]+.?\d*$/,
      style: 58
    }, {
      match: /^\-?€[\d,]+.?\d*$/,
      style: 59
    }, {
      match: /^\-?\d+$/,
      style: 65
    }, {
      match: /^\-?\d+\.\d{2}$/,
      style: 66
    }, {
      match: /^\([\d,]+\)$/,
      style: 61,
      fmt: function (a) {
        return -1 * a.replace(/[\(\)]/g, "")
      }
    }, {
      match: /^\([\d,]+\.\d{2}\)$/,
      style: 62,
      fmt: function (a) {
        return -1 * a.replace(/[\(\)]/g, "")
      }
    }, {
      match: /^\-?[\d,]+$/,
      style: 63
    },
      {
        match: /^\-?[\d,]+\.\d{2}$/,
        style: 64
      }];
  o.ext.buttons.copyHtml5 = {
    className: "buttons-copy buttons-html5",
    text: function (a) {
      return a.i18n("buttons.copy", "کپی")
    },
    action: function (a, b, d, c) {
      this.processing(!0);
      var f = this,
        a = H(b, c),
        g = b.buttons.exportInfo(c),
        e = G(c),
        n = a.str,
        d = i("<div/>").css({
          height: 1,
          width: 1,
          overflow: "hidden",
          position: "fixed",
          top: 0,
          left: 0
        });
      g.title && (n = g.title + e + e + n);
      g.messageTop && (n = g.messageTop + e + e + n);
      g.messageBottom && (n = n + e + e + g.messageBottom);
      c.customize && (n = c.customize(n, c, b));
      c = i("<textarea readonly/>").val(n).appendTo(d);
      if (l.queryCommandSupported("copy")) {
        d.appendTo(b.table().container());
        c[0].focus();
        c[0].select();
        try {
          var h = l.execCommand("copy");
          d.remove();
          if (h) {
            b.buttons.info(b.i18n("buttons.copyTitle", "Copy to clipboard"), b.i18n("buttons.copySuccess", {
              1: "Copied one row to clipboard",
              _: "Copied %d rows to clipboard"
            }, a.rows), 2E3);
            this.processing(!1);
            return
          }
        } catch (j) {}
      }
      h = i("<span>" + b.i18n("buttons.copyKeys", "Press <i>ctrl</i> or <i>⌘</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape.") +
        "</span>").append(d);
      b.buttons.info(b.i18n("buttons.copyTitle", "Copy to clipboard"), h, 0);
      c[0].focus();
      c[0].select();
      var m = i(h).closest(".dt-button-info"),
        k = function () {
          m.off("click.buttons-copy");
          i(l).off(".buttons-copy");
          b.buttons.info(!1)
        };
      m.on("click.buttons-copy", k);
      i(l).on("keydown.buttons-copy", function (a) {
        27 === a.keyCode && (k(), f.processing(!1))
      }).on("copy.buttons-copy cut.buttons-copy", function () {
        k();
        f.processing(!1)
      })
    },
    exportOptions: {},
    fieldSeparator: "\t",
    fieldBoundary: "",
    header: !0,
    footer: !1,
    title: "*",
    messageTop: "*",
    messageBottom: "*"
  };
  o.ext.buttons.csvHtml5 = {
    bom: !1,
    className: "buttons-csv buttons-html5",
    available: function () {
      return j.FileReader !== s && j.Blob
    },
    text: function (a) {
      return a.i18n("buttons.csv", "CSV")
    },
    action: function (a, b, d, c) {
      this.processing(!0);
      var a = H(b, c).str,
        d = b.buttons.exportInfo(c),
        f = c.charset;
      c.customize && (a = c.customize(a, c, b));
      !1 !== f ? (f || (f = l.characterSet || l.charset), f && (f = ";charset=" + f)) : f = "";
      c.bom && (a = "﻿" + a);
      t(new Blob([a], {
        type: "text/csv" + f
      }), d.filename, !0);
      this.processing(!1)
    },
    filename: "*",
    extension: ".csv",
    exportOptions: {},
    fieldSeparator: ",",
    fieldBoundary: '"',
    escapeChar: '"',
    charset: null,
    header: !0,
    footer: !1
  };
  o.ext.buttons.excelHtml5 = {
    className: "buttons-excel buttons-html5",
    available: function () {
      return j.FileReader !== s && (v || j.JSZip) !== s && !I() && y
    },
    text: function (a) {
      return a.i18n("buttons.excel", "اکسل")
    },
    action: function (a, b, d, c) {
      this.processing(!0);
      var f = this,
        g = 0,
        a = function (a) {
          return i.parseXML(B[a])
        },
        e = a("xl/worksheets/sheet1.xml"),
        h = e.getElementsByTagName("sheetData")[0],
        a = {
          _rels: {
            ".rels": a("_rels/.rels")
          },
          xl: {
            _rels: {
              "workbook.xml.rels": a("xl/_rels/workbook.xml.rels")
            },
            "workbook.xml": a("xl/workbook.xml"),
            "styles.xml": a("xl/styles.xml"),
            worksheets: {
              "sheet1.xml": e
            }
          },
          "[Content_Types].xml": a("[Content_Types].xml")
        },
        d = b.buttons.exportData(c.exportOptions),
        l, m, r = function (a) {
          l = g + 1;
          m = q(e, "row", {
            attr: {
              r: l
            }
          });
          for (var b = 0, d = a.length; b < d; b++) {
            var f = z(b) + "" + l,
              j = null;
            if (null === a[b] || a[b] === s || "" === a[b])
              if (!0 === c.createEmptyCells) a[b] = "";
              else continue;
            var k = a[b];
            a[b] = i.trim(a[b]);
            for (var o = 0, r = J.length; o < r; o++) {
              var p = J[o];
              if (a[b].match && !a[b].match(/^0\d+/) && a[b].match(p.match)) {
                j = a[b].replace(/[^\d\.\-]/g, "");
                p.fmt && (j = p.fmt(j));
                j = q(e, "c", {
                  attr: {
                    r: f,
                    s: p.style
                  },
                  children: [q(e, "v", {
                    text: j
                  })]
                });
                break
              }
            }
            j || ("number" === typeof a[b] || a[b].match && a[b].match(/^-?\d+(\.\d+)?$/) && !a[b].match(/^0\d+/) ? j = q(e, "c", {
              attr: {
                t: "n",
                r: f
              },
              children: [q(e, "v", {
                text: a[b]
              })]
            }) : (k = !k.replace ? k : k.replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, ""), j = q(e, "c", {
              attr: {
                t: "inlineStr",
                r: f
              },
              children: {
                row: q(e,
                  "is", {
                    children: {
                      row: q(e, "t", {
                        text: k,
                        attr: {
                          "xml:space": "preserve"
                        }
                      })
                    }
                  })
              }
            })));
            m.appendChild(j)
          }
          h.appendChild(m);
          g++
        };
      i("sheets sheet", a.xl["workbook.xml"]).attr("name", O(c));
      c.customizeData && c.customizeData(d);
      var k = function (a, b) {
          var c = i("mergeCells", e);
          c[0].appendChild(q(e, "mergeCell", {
            attr: {
              ref: "A" + a + ":" + z(b) + a
            }
          }));
          c.attr("count", parseFloat(c.attr("count")) + 1);
          i("row:eq(" + (a - 1) + ") c", e).attr("s", "51")
        },
        p = b.buttons.exportInfo(c);
      p.title && (r([p.title], g), k(g, d.header.length - 1));
      p.messageTop && (r([p.messageTop],
        g), k(g, d.header.length - 1));
      c.header && (r(d.header, g), i("row:last c", e).attr("s", "2"));
      for (var o = 0, u = d.body.length; o < u; o++) r(d.body[o], g);
      c.footer && d.footer && (r(d.footer, g), i("row:last c", e).attr("s", "2"));
      p.messageBottom && (r([p.messageBottom], g), k(g, d.header.length - 1));
      r = q(e, "cols");
      i("worksheet", e).prepend(r);
      k = 0;
      for (o = d.header.length; k < o; k++) r.appendChild(q(e, "col", {
        attr: {
          min: k + 1,
          max: k + 1,
          width: K(d, k),
          customWidth: 1
        }
      }));
      c.customize && c.customize(a, c, b);
      0 === i("mergeCells", e).children().length && i("mergeCells",
        e).remove();
      b = new(v || j.JSZip);
      d = {
        type: "blob",
        mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      };
      A(b, a);
      b.generateAsync ? b.generateAsync(d).then(function (a) {
        t(a, p.filename);
        f.processing(false)
      }) : (t(b.generate(d), p.filename), this.processing(!1))
    },
    filename: "*",
    extension: ".xlsx",
    exportOptions: {},
    header: !0,
    footer: !1,
    title: "*",
    messageTop: "*",
    messageBottom: "*",
    createEmptyCells: !1
  };
  o.ext.buttons.pdfHtml5 = {
    className: "buttons-pdf buttons-html5",
    available: function () {
      return j.FileReader !==
        s && (u || j.pdfMake)
    },
    text: function (a) {
      return a.i18n("buttons.pdf", "پی دی اف")
    },
    action: function (a, b, d, c) {
      this.processing(!0);
      var d = b.buttons.exportData(c.exportOptions),
        a = b.buttons.exportInfo(c),
        f = [];
      c.header && f.push(i.map(d.header, function (a) {
        return {
          text: "string" === typeof a ? a : a + "",
          style: "tableHeader"
        }
      }));
      for (var g = 0, e = d.body.length; g < e; g++) f.push(i.map(d.body[g], function (a) {
        return {
          text: "string" === typeof a ? a : a + "",
          style: g % 2 ? "tableBodyEven" : "tableBodyOdd"
        }
      }));
      c.footer && d.footer && f.push(i.map(d.footer, function (a) {
        return {
          text: "string" ===
          typeof a ? a : a + "",
          style: "tableFooter"
        }
      }));
      d = {
        pageSize: c.pageSize,
        pageOrientation: c.orientation,
        content: [{
          table: {
            headerRows: 1,
            body: f
          },
          layout: "noBorders"
        }],
        styles: {
          tableHeader: {
            bold: !0,
            fontSize: 11,
            color: "white",
            fillColor: "#2d4154",
            alignment: "center"
          },
          tableBodyEven: {},
          tableBodyOdd: {
            fillColor: "#f3f3f3"
          },
          tableFooter: {
            bold: !0,
            fontSize: 11,
            color: "white",
            fillColor: "#2d4154"
          },
          title: {
            alignment: "center",
            fontSize: 15
          },
          message: {}
        },
        defaultStyle: {
          fontSize: 10
        }
      };
      a.messageTop && d.content.unshift({
        text: a.messageTop,
        style: "message",
        margin: [0, 0, 0, 12]
      });
      a.messageBottom && d.content.push({
        text: a.messageBottom,
        style: "message",
        margin: [0, 0, 0, 12]
      });
      a.title && d.content.unshift({
        text: a.title,
        style: "title",
        margin: [0, 0, 0, 12]
      });
      c.customize && c.customize(d, c, b);
      b = (u || j.pdfMake).createPdf(d);
      "open" === c.download && !I() ? b.open() : b.download(a.filename);
      this.processing(!1)
    },
    title: "*",
    filename: "*",
    extension: ".pdf",
    exportOptions: {},
    orientation: "portrait",
    pageSize: "A4",
    header: !0,
    footer: !1,
    messageTop: "*",
    messageBottom: "*",
    customize: null,
    download: "download"
  };
  return o.Buttons
});

(function(c) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net", "datatables.net-buttons"], function(f) {
    return c(f, window, document)
  }) : "object" === typeof exports ? module.exports = function(f, b) {
    f || (f = window);
    if (!b || !b.fn.dataTable) b = require("datatables.net")(f, b).$;
    b.fn.dataTable.Buttons || require("datatables.net-buttons")(f, b);
    return c(b, f, f.document)
  } : c(jQuery, window, document)
})(function(c, f, b, n) {
  var i = c.fn.dataTable,
    e = b.createElement("a"),
    m = function(a) {
      e.href = a;
      a = e.host; - 1 === a.indexOf("/") && 0 !== e.pathname.indexOf("/") && (a += "/");
      return e.protocol + "//" + a + e.pathname + e.search
    };
  i.ext.buttons.print = {
    className: "buttons-print",
    text: function(a) {
      return a.i18n("buttons.print", "چاپ")
    },
    action: function(a, b, e, h) {
      var a = b.buttons.exportData(c.extend({
          decodeEntities: !1
        }, h.exportOptions)),
        e = b.buttons.exportInfo(h),
        i = c.map(b.settings()[0].aoColumns, function(b) {
          return b.sClass
        }),
        k = function(b, a) {
          for (var d = "<tr>", c = 0, e = b.length; c < e; c++) d += "<" + a + " " + (i[c] ? 'class="' + i[c] + '"' : "") + ">" + (null === b[c] || b[c] === n ? "" : b[c]) + "</" + a + ">";
          return d + "</tr>"
        },
        d = '<table class="' + b.table().node().className + '">';
      h.header && (d += "<thead>" + k(a.header, "th") + "</thead>");
      for (var d = d + "<tbody>", l = 0, o = a.body.length; l < o; l++) d += k(a.body[l], "td");
      d += "</tbody>";
      h.footer && a.footer && (d += "<tfoot>" + k(a.footer, "th") + "</tfoot>");
      var d = d + "</table>",
        g = f.open("", "");
      g.document.close();
      var j = "<title>" + e.title + "</title>";
      c("style, link").each(function() {
        var b = j,
          a = c(this).clone()[0];
        "link" === a.nodeName.toLowerCase() && (a.href = m(a.href));
        j = b + a.outerHTML
      });
      try {
        g.document.head.innerHTML = j
      } catch (p) {
        c(g.document.head).html(j)
      }
      g.document.body.innerHTML = "<h1>" + e.title + "</h1><div>" + (e.messageTop || "") + "</div>" + d + "<div>" + (e.messageBottom || "") + "</div>";
      c(g.document.body).addClass("dt-print-view");
      c("img", g.document.body).each(function(b, a) {
        a.setAttribute("src", m(a.getAttribute("src")))
      });
      h.customize && h.customize(g, h, b);
      g.setTimeout(function() {
        h.autoPrint && (g.print(), g.close())
      }, 1E3)
    },
    title: "*",
    messageTop: "*",
    messageBottom: "*",
    exportOptions: {},
    header: !0,
    footer: !1,
    autoPrint: !0,
    customize: null
  };
  return i.Buttons
});

(function (g) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net", "datatables.net-buttons"], function (d) {
    return g(d, window, document)
  }) : "object" === typeof exports ? module.exports = function (d, f) {
    d || (d = window);
    if (!f || !f.fn.dataTable) f = require("datatables.net")(d, f).$;
    f.fn.dataTable.Buttons || require("datatables.net-buttons")(d, f);
    return g(f, d, d.document)
  } : g(jQuery, window, document)
})(function (g, d, f, h) {
  d = g.fn.dataTable;
  g.extend(d.ext.buttons, {
    colvis: function (a, b) {
      return {
        extend: "collection",
        text: function (b) {
          return b.i18n("buttons.colvis", "دید ستون")
        },
        className: "buttons-colvis",
        buttons: [{
          extend: "columnsToggle",
          columns: b.columns,
          columnText: b.columnText
        }]
      }
    },
    columnsToggle: function (a, b) {
      return a.columns(b.columns).indexes().map(function (a) {
        return {
          extend: "columnToggle",
          columns: a,
          columnText: b.columnText
        }
      }).toArray()
    },
    columnToggle: function (a, b) {
      return {
        extend: "columnVisibility",
        columns: b.columns,
        columnText: b.columnText
      }
    },
    columnsVisibility: function (a, b) {
      return a.columns(b.columns).indexes().map(function (a) {
        return {
          extend: "columnVisibility",
          columns: a,
          visibility: b.visibility,
          columnText: b.columnText
        }
      }).toArray()
    },
    columnVisibility: {
      columns: h,
      text: function (a, b, c) {
        return c._columnText(a, c)
      },
      className: "buttons-columnVisibility",
      action: function (a, b, c, e) {
        a = b.columns(e.columns);
        b = a.visible();
        a.visible(e.visibility !== h ? e.visibility : !(b.length && b[0]))
      },
      init: function (a, b, c) {
        var e = this;
        a.on("column-visibility.dt" + c.namespace, function (b, d) {
          !d.bDestroying && d.nTable == a.settings()[0].nTable && e.active(a.column(c.columns).visible())
        }).on("column-reorder.dt" +
          c.namespace,
          function () {
            1 === a.columns(c.columns).count() && (e.text(c._columnText(a, c)), e.active(a.column(c.columns).visible()))
          });
        this.active(a.column(c.columns).visible())
      },
      destroy: function (a, b, c) {
        a.off("column-visibility.dt" + c.namespace).off("column-reorder.dt" + c.namespace)
      },
      _columnText: function (a, b) {
        var c = a.column(b.columns).index(),
          e = a.settings()[0].aoColumns[c].sTitle.replace(/\n/g, " ").replace(/<br\s*\/?>/gi, " ").replace(/<select(.*?)<\/select>/g, "").replace(/<!\-\-.*?\-\->/g, "").replace(/<.*?>/g,
            "").replace(/^\s+|\s+$/g, "");
        return b.columnText ? b.columnText(a, c, e) : e
      }
    },
    colvisRestore: {
      className: "buttons-colvisRestore",
      text: function (a) {
        return a.i18n("buttons.colvisRestore", "بازتاب دید")
      },
      init: function (a, b, c) {
        c._visOriginal = a.columns().indexes().map(function (b) {
          return a.column(b).visible()
        }).toArray()
      },
      action: function (a, b, c, d) {
        b.columns().every(function (a) {
          a = b.colReorder && b.colReorder.transpose ? b.colReorder.transpose(a, "toOriginal") : a;
          this.visible(d._visOriginal[a])
        })
      }
    },
    colvisGroup: {
      className: "buttons-colvisGroup",
      action: function (a, b, c, d) {
        b.columns(d.show).visible(!0, !1);
        b.columns(d.hide).visible(!1, !1);
        b.columns.adjust()
      },
      show: [],
      hide: []
    }
  });
  return d.Buttons
});
