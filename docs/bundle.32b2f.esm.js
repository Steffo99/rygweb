!function(t){function e(e){for(var n,o,r=e[0],a=e[1],u=0,c=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&c.push(i[o][0]),i[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);for(l&&l(e);c.length;)c.shift()()}function n(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var o={},r={2:0},i={2:0};n.e=function(t){var e=[];r[t]?e.push(r[t]):0!==r[t]&&{4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1}[t]&&e.push(r[t]=new Promise((function(e,o){for(var i=({}[t]||t)+".chunk."+{0:"31d6c",1:"31d6c",4:"c0e23",5:"1b533",6:"dca66",7:"373fc",8:"135ee",9:"3ad38",10:"ca253",11:"7456f"}[t]+".css",a=n.p+i,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=(f=u[c]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===i||l===a))return e()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){var f;if((l=(f=s[c]).getAttribute("data-href"))===i||l===a)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var n=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],h.parentNode.removeChild(h),o(i)},h.href=a,document.getElementsByTagName("head")[0].appendChild(h)})).then((function(){r[t]=0})));var o=i[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,n){o=i[t]=[e,n]}));e.push(o[2]=a);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=function(t){return n.p+""+({}[t]||t)+".chunk."+{0:"89af4",1:"47fe5",4:"c471a",5:"d0029",6:"0fa3c",7:"ca5c1",8:"afbb1",9:"190fe",10:"202e6",11:"9a4c7"}[t]+".esm.js"}(t);var l=new Error;u=function(e){c.onerror=c.onload=null,clearTimeout(s);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}i[t]=void 0}};var s=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},n.m=t,n.c=o,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n.oe=function(t){throw console.error(t),t};var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;n(n.s="mdyV")}({"+zxU":function(t){t.exports=JSON.parse("{}")},"63Ql":function(t,e,n){"use strict";var o=n("SdNZ");e.a=Object(o.a)((function(t){Promise.all([n.e(0),n.e(1),n.e(8)]).then(function(){t(n("m5Um"))}.bind(null,n)).catch(n.oe)}))},"B+Zc":function(t,e,n){"use strict";var o=n("SdNZ");e.a=Object(o.a)((function(t){Promise.all([n.e(0),n.e(1),n.e(5)]).then(function(){t(n("4DnB"))}.bind(null,n)).catch(n.oe)}))},EJQO:function(){},"GEQ+":function(){},QfWi:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"default",(function(){return d}));var o=n("hosL"),r=n("Y3FI"),i=(n("afj4"),n("+zxU"),n("EJQO"),n("GEQ+"),n("xiam")),a=n("g7Jd"),u=n("B+Zc"),c=n("ve3R"),l=n("vLh8"),s=n("pzEo"),f=n("63Ql"),h=n("Sjk4"),p=n("ieAb");class d extends o.Component{constructor(){super(),this.onRouteChange=()=>{this.setState({pathname:window.location.hash.substr(1)})},this.onUsernameChange=t=>{this.setState({login_username:t.target.value})},this.onPasswordChange=t=>{this.setState({login_password:t.target.value})},this.onLoginClick=()=>{this.setState({login_status:"running"}),fetch("https://rygapi.steffo.eu/api/login/royalnet/v1",{method:"POST",headers:{},body:JSON.stringify({username:this.state.login_username,password:this.state.login_password})}).then(t=>t.json()).then(t=>{this.setState({logged_in:t.data,login_status:"done"}),window.localStorage.setItem("logged_in",JSON.stringify(t.data)),Object(r.b)("/")})},this.state={pathname:window.location.hash.substr(1),login_username:"",login_password:"",login_status:"waiting",logged_in:JSON.parse(window.localStorage.getItem("logged_in"))}}render(){return t("div",null,t(a.a,{pathname:this.state.pathname,loggedIn:this.state.logged_in}),t(r.a,{onChange:this.onRouteChange,history:Object(c.a)()},t(i.a,{path:"/"}),t(u.a,{path:"/diario"}),t(s.a,{path:"/wiki"}),t(f.a,{path:"/wiki/:page_id"}),t(h.a,{path:"/wiki/:page_id/edit",loggedIn:this.state.logged_in}),t(h.a,{path:"/wiki/new",page_id:null,loggedIn:this.state.logged_in}),t(p.a,{path:"/login",usernameValue:this.state.login_username,onUsernameChange:this.onUsernameChange,passwordValue:this.state.login_password,onPasswordChange:this.onPasswordChange,loginStatus:this.state.login_status,onLoginClick:this.onLoginClick}),t(l.a,{default:!0})))}}}.call(this,n("hosL").h)},SdNZ:function(t,e,n){"use strict";var o=n("hosL");e.a=function(t){function e(){let e,n;o.Component.call(this),this.componentWillMount=()=>{e=this.base=this.nextBase||this.__b,t(t=>{this.setState({child:t.default||t})})},this.shouldComponentUpdate=(t,r)=>(n=(r=void 0===r.child)&&void 0===n&&e?3===e.nodeType?e.data:Object(o.h)(e.nodeName,{dangerouslySetInnerHTML:{__html:e.innerHTML}}):"",!r),this.render=(t,e)=>e.child?Object(o.h)(e.child,t):n}return(e.prototype=new o.Component).constructor=e,e}},Sjk4:function(t,e,n){"use strict";var o=n("SdNZ");e.a=Object(o.a)((function(t){Promise.all([n.e(0),n.e(1),n.e(4)]).then(function(){t(n("oFWs"))}.bind(null,n)).catch(n.oe)}))},Y3FI:function(t,e,n){"use strict";function o(t,e){for(var n in e)t[n]=e[n];return t}function r(t,e,n){var o,r=/(?:\?([^#]*))?(#.*)?$/,i=t.match(r),a={};if(i&&i[1])for(var c=i[1].split("&"),l=0;l<c.length;l++){var s=c[l].split("=");a[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}t=u(t.replace(r,"")),e=u(e||"");for(var f=Math.max(t.length,e.length),h=0;h<f;h++)if(e[h]&&":"===e[h].charAt(0)){var p=e[h].replace(/(^:|[+*?]+$)/g,""),d=(e[h].match(/[+*?]+$/)||g)[0]||"",_=~d.indexOf("+"),v=~d.indexOf("*"),m=t[h]||"";if(!m&&!v&&(d.indexOf("?")<0||_)){o=!1;break}if(a[p]=decodeURIComponent(m),_||v){a[p]=t.slice(h).map(decodeURIComponent).join("/");break}}else if(e[h]!==t[h]){o=!1;break}return(!0===n.default||!1!==o)&&a}function i(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function a(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:u(t.props.path).map(c).join("")}(t),t.props}function u(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function c(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function l(){var t;return""+((t=m&&m.location?m.location:m&&m.getCurrentLocation?m.getCurrentLocation():"undefined"!=typeof location?location:w).pathname||"")+(t.search||"")}function s(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=y.length;e--;)if(y[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),m&&m[e]?m[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),f(t)}function f(t){for(var e=!1,n=0;n<y.length;n++)!0===y[n].routeTo(t)&&(e=!0);for(var o=b.length;o--;)b[o](t);return e}function h(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return s(e)}}function p(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return h(t.currentTarget||t.target||this),d(t)}function d(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function _(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(h(e))return d(t)}}while(e=e.parentNode)}}n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return C}));var v=n("hosL"),g={},m=null,y=[],b=[],w={},k=!1,C=function(t){function e(e){t.call(this,e),e.history&&(m=e.history),this.state={url:e.url||l()},k||("function"==typeof addEventListener&&(m||addEventListener("popstate",(function(){f(l())})),addEventListener("click",_)),k=!0)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||t.url!==this.props.url||t.onChange!==this.props.onChange},e.prototype.canRoute=function(t){var e=Object(v.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){y.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;m&&(this.unlisten=m.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),y.splice(y.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(a).sort(i).map((function(t){var i=r(e,t.props.path,t.props);if(i){if(!1!==n){var a={url:e,matches:i};return o(a,i),delete a.ref,delete a.key,Object(v.cloneElement)(t,a)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,r=e.url,i=this.getMatchingChildren(Object(v.toChildArray)(n),r,!0),a=i[0]||null,u=this.previousUrl;return r!==u&&(this.previousUrl=r,"function"==typeof o&&o({router:this,url:r,previous:u,active:i,current:a})),a},e}(v.Component);C.subscribers=b,C.getCurrentUrl=l,C.route=s,C.Router=C,C.Route=function(t){return Object(v.createElement)(t.component,t)},C.Link=function(t){return Object(v.createElement)("a",o({onClick:p},t))},C.exec=r},afj4:function(){},g7Jd:function(t,e,n){"use strict";var o=n("SdNZ");e.a=Object(o.a)((function(t){n.e(10).then(function(){t(n("vKSI"))}.bind(null,n)).catch(n.oe)}))},hosL:function(t,e,n){"use strict";function o(t,e){for(var n in e)t[n]=e[n];return t}function r(t){var e=t.parentNode;e&&e.removeChild(t)}function i(t,e,n){var o,r=arguments,i={};for(o in e)"key"!==o&&"ref"!==o&&(i[o]=e[o]);if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(r[o]);if(null!=n&&(i.children=n),"function"==typeof t&&null!=t.defaultProps)for(o in t.defaultProps)void 0===i[o]&&(i[o]=t.defaultProps[o]);return a(t,i,e&&e.key,e&&e.ref)}function a(t,e,n,o){var r={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return A.vnode&&A.vnode(r),r}function u(){return{}}function c(t){return t.children}function l(t,e){this.props=t,this.context=e}function s(t,e){if(null==e)return t.__?s(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?s(t):null}function f(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return f(t)}}function h(t){(!t.__d&&(t.__d=!0)&&1===j.push(t)||T!==A.debounceRendering)&&((T=A.debounceRendering)||U)(p)}function p(){var t,e,n,r,i,a,u;for(j.sort((function(t,e){return e.__v.__b-t.__v.__b}));t=j.pop();)t.__d&&(n=void 0,r=void 0,a=(i=(e=t).__v).__e,(u=e.__P)&&(n=[],r=y(u,i,o({},i),e.__n,void 0!==u.ownerSVGElement,null,n,null==a?s(i):a),b(n,i),r!=a&&f(i)))}function d(t,e,n,o,i,a,u,c,l){var f,h,p,d,v,g,m,b=n&&n.__k||M,w=b.length;if(c==R&&(c=null!=a?a[0]:w?s(n,0):null),f=0,e.__k=_(e.__k,(function(n){if(null!=n){if(n.__=e,n.__b=e.__b+1,null===(p=b[f])||p&&n.key==p.key&&n.type===p.type)b[f]=void 0;else for(h=0;h<w;h++){if((p=b[h])&&n.key==p.key&&n.type===p.type){b[h]=void 0;break}p=null}if(d=y(t,n,p=p||R,o,i,a,u,c,l),(h=n.ref)&&p.ref!=h&&(m||(m=[]),p.ref&&m.push(p.ref,null,n),m.push(h,n.__c||d,n)),null!=d){var r;if(null==g&&(g=d),void 0!==n.__d)r=n.__d,n.__d=void 0;else if(a==p||d!=c||null==d.parentNode){t:if(null==c||c.parentNode!==t)t.appendChild(d),r=null;else{for(v=c,h=0;(v=v.nextSibling)&&h<w;h+=2)if(v==d)break t;t.insertBefore(d,c),r=c}"option"==e.type&&(t.value="")}c=void 0!==r?r:d.nextSibling,"function"==typeof e.type&&(e.__d=c)}}return f++,n})),e.__e=g,null!=a&&"function"!=typeof e.type)for(f=a.length;f--;)null!=a[f]&&r(a[f]);for(f=w;f--;)null!=b[f]&&C(b[f],b[f]);if(m)for(f=0;f<m.length;f++)k(m[f],m[++f],m[++f])}function _(t,e,n){if(null==n&&(n=[]),null==t||"boolean"==typeof t)e&&n.push(e(null));else if(Array.isArray(t))for(var o=0;o<t.length;o++)_(t[o],e,n);else n.push(e?e("string"==typeof t||"number"==typeof t?a(null,t,null,null):null!=t.__e||null!=t.__c?a(t.type,t.props,t.key,null):t):t);return n}function v(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]="number"==typeof n&&!1===D.test(e)?n+"px":null==n?"":n}function g(t,e,n,o,r){var i,a,u,c,l;if(r?"className"===e&&(e="class"):"class"===e&&(e="className"),"key"===e||"children"===e);else if("style"===e)if(i=t.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof o&&(i.cssText="",o=null),o)for(a in o)n&&a in n||v(i,a,"");if(n)for(u in n)o&&n[u]===o[u]||v(i,u,n[u])}else"o"===e[0]&&"n"===e[1]?(c=e!==(e=e.replace(/Capture$/,"")),l=e.toLowerCase(),e=(l in t?l:e).slice(2),n?(o||t.addEventListener(e,m,c),(t.l||(t.l={}))[e]=n):t.removeEventListener(e,m,c)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&!r&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n?t.removeAttribute(e):t.setAttribute(e,n))}function m(t){this.l[t.type](A.event?A.event(t):t)}function y(t,e,n,r,i,a,u,s,f){var h,p,_,v,g,m,y,b,k,C,S=e.type;if(void 0!==e.constructor)return null;(h=A.__b)&&h(e);try{t:if("function"==typeof S){if(b=e.props,k=(h=S.contextType)&&r[h.__c],C=h?k?k.props.value:h.__:r,n.__c?y=(p=e.__c=n.__c).__=p.__E:("prototype"in S&&S.prototype.render?e.__c=p=new S(b,C):(e.__c=p=new l(b,C),p.constructor=S,p.render=O),k&&k.sub(p),p.props=b,p.state||(p.state={}),p.context=C,p.__n=r,_=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=S.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=o({},p.__s)),o(p.__s,S.getDerivedStateFromProps(b,p.__s))),v=p.props,g=p.state,_)null==S.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==S.getDerivedStateFromProps&&b!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,C),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,C)){for(p.props=b,p.state=p.__s,p.__d=!1,p.__v=e,e.__e=n.__e,e.__k=n.__k,p.__h.length&&u.push(p),h=0;h<e.__k.length;h++)e.__k[h]&&(e.__k[h].__=e);break t}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,C),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,g,m)}))}p.context=C,p.props=b,p.state=p.__s,(h=A.__r)&&h(e),p.__d=!1,p.__v=e,p.__P=t,h=p.render(p.props,p.state,p.context),e.__k=null!=h&&h.type==c&&null==h.key?h.props.children:h,null!=p.getChildContext&&(r=o(o({},r),p.getChildContext())),_||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,g)),d(t,e,n,r,i,a,u,s,f),p.base=e.__e,p.__h.length&&u.push(p),y&&(p.__E=p.__=null),p.__e=!1}else e.__e=w(n.__e,e,n,r,i,a,u,f);(h=A.diffed)&&h(e)}catch(t){A.__e(t,e,n)}return e.__e}function b(t,e){A.__c&&A.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){A.__e(t,e.__v)}}))}function w(t,e,n,o,r,i,a,u){var c,l,s,f,h,p=n.props,_=e.props;if(r="svg"===e.type||r,null==t&&null!=i)for(c=0;c<i.length;c++)if(null!=(l=i[c])&&(null===e.type?3===l.nodeType:l.localName===e.type)){t=l,i[c]=null;break}if(null==t){if(null===e.type)return document.createTextNode(_);t=r?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,_.is&&{is:_.is}),i=null}if(null===e.type)null!=i&&(i[i.indexOf(t)]=null),p!==_&&t.data!=_&&(t.data=_);else if(e!==n){if(null!=i&&(i[i.indexOf(t)]=null,i=M.slice.call(t.childNodes)),s=(p=n.props||R).dangerouslySetInnerHTML,f=_.dangerouslySetInnerHTML,!u){if(p===R)for(p={},h=0;h<t.attributes.length;h++)p[t.attributes[h].name]=t.attributes[h].value;(f||s)&&(f&&s&&f.__html==s.__html||(t.innerHTML=f&&f.__html||""))}(function(t,e,n,o,r){var i;for(i in n)i in e||g(t,i,null,n[i],o);for(i in e)r&&"function"!=typeof e[i]||"value"===i||"checked"===i||n[i]===e[i]||g(t,i,e[i],n[i],o)})(t,_,p,r,u),e.__k=e.props.children,f||d(t,e,n,o,"foreignObject"!==e.type&&r,i,a,R,u),u||("value"in _&&void 0!==_.value&&_.value!==t.value&&(t.value=null==_.value?"":_.value),"checked"in _&&void 0!==_.checked&&_.checked!==t.checked&&(t.checked=_.checked))}return t}function k(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){A.__e(t,n)}}function C(t,e,n){var o,i,a;if(A.unmount&&A.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||k(o,null,e)),n||"function"==typeof t.type||(n=null!=(i=t.__e)),t.__e=t.__d=void 0,null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){A.__e(t,e)}o.base=o.__P=null}if(o=t.__k)for(a=0;a<o.length;a++)o[a]&&C(o[a],e,n);null!=i&&r(i)}function O(t,e,n){return this.constructor(t,n)}function S(t,e,n){var o,r,a;A.__&&A.__(t,e),r=(o=n===N)?null:n&&n.__k||e.__k,t=i(c,null,[t]),a=[],y(e,(o?e:n||e).__k=t,r||R,R,void 0!==e.ownerSVGElement,n&&!o?[n]:r?null:M.slice.call(e.childNodes),a,n||R,o),b(a,t)}function P(t,e){S(t,e,N)}function x(t,e){return e=o(o({},t.props),e),arguments.length>2&&(e.children=M.slice.call(arguments,2)),a(t.type,e,e.key||t.key,e.ref||t.ref)}function E(t){var e={},n={__c:"__cC"+I++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var o,r=this;return this.getChildContext||(o=[],this.getChildContext=function(){return e[n.__c]=r,e},this.shouldComponentUpdate=function(e){t.value!==e.value&&o.some((function(t){t.context=e.value,h(t)}))},this.sub=function(t){o.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){o.splice(o.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Consumer.contextType=n,n}n.r(e),n.d(e,"render",(function(){return S})),n.d(e,"hydrate",(function(){return P})),n.d(e,"createElement",(function(){return i})),n.d(e,"h",(function(){return i})),n.d(e,"Fragment",(function(){return c})),n.d(e,"createRef",(function(){return u})),n.d(e,"isValidElement",(function(){return L})),n.d(e,"Component",(function(){return l})),n.d(e,"cloneElement",(function(){return x})),n.d(e,"createContext",(function(){return E})),n.d(e,"toChildArray",(function(){return _})),n.d(e,"_unmount",(function(){return C})),n.d(e,"options",(function(){return A}));var A,L,j,U,T,N,I,R={},M=[],D=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;A={__e:function(t,e){for(var n,o;e=e.__;)if((n=e.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(o=!0,n.setState(n.constructor.getDerivedStateFromError(t))),null!=n.componentDidCatch&&(o=!0,n.componentDidCatch(t)),o)return h(n.__E=n)}catch(e){t=e}throw t}},L=function(t){return null!=t&&void 0===t.constructor},l.prototype.setState=function(t,e){var n;n=this.__s!==this.state?this.__s:this.__s=o({},this.state),"function"==typeof t&&(t=t(n,this.props)),t&&o(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),h(this))},l.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),h(this))},l.prototype.render=c,j=[],U="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,N=R,I=0},ieAb:function(t,e,n){"use strict";var o=n("SdNZ");e.a=Object(o.a)((function(t){Promise.all([n.e(0),n.e(1),n.e(6)]).then(function(){t(n("HgM2"))}.bind(null,n)).catch(n.oe)}))},mdyV:function(t,e,n){"use strict";n.r(e);var o=n("hosL");const{h:r,render:i,hydrate:a}=o,u=t=>t&&t.default?t.default:t;if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw-esm.js"),"function"==typeof u(n("QfWi"))){let t=document.getElementById("preact_root")||document.body.firstElementChild;(()=>{let e=u(n("QfWi")),o={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(o=JSON.parse(c.innerHTML).preRenderData),t=("script"!==t.tagName&&a?a:i)(r(e,{CLI_DATA:{preRenderData:o}}),document.body,t)})()}},pzEo:function(t,e,n){"use strict";var o=n("SdNZ");e.a=Object(o.a)((function(t){Promise.all([n.e(0),n.e(1),n.e(9)]).then(function(){t(n("EZm7"))}.bind(null,n)).catch(n.oe)}))},vLh8:function(t,e,n){"use strict";var o=n("SdNZ");e.a=Object(o.a)((function(t){n.e(11).then(function(){t(n("4FRC"))}.bind(null,n)).catch(n.oe)}))},ve3R:function(t,e,n){"use strict";function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function r(t){return"/"===t.charAt(0)}function i(t,e){for(var n=e,o=n+1,r=t.length;o<r;n+=1,o+=1)t[n]=t[o];t.pop()}function a(t){return"/"===t.charAt(0)?t:"/"+t}function u(t){return"/"===t.charAt(0)?t.substr(1):t}function c(t){var e=t.search,n=t.hash,o=t.pathname||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),n&&"#"!==n&&(o+="#"===n.charAt(0)?n:"#"+n),o}function l(t,e,n,r){var i;"string"==typeof t?(i=function(t){var e=t||"/",n="",o="",r=e.indexOf("#");-1!==r&&(o=e.substr(r),e=e.substr(0,r));var i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===o?"":o}}(t)).state=e:(void 0===(i=o({},t)).pathname&&(i.pathname=""),i.search?"?"!==i.search.charAt(0)&&(i.search="?"+i.search):i.search="",i.hash?"#"!==i.hash.charAt(0)&&(i.hash="#"+i.hash):i.hash="",void 0!==e&&void 0===i.state&&(i.state=e));try{i.pathname=decodeURI(i.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return n&&(i.key=n),r?i.pathname?"/"!==i.pathname.charAt(0)&&(i.pathname=_(i.pathname,r.pathname)):i.pathname=r.pathname:i.pathname||(i.pathname="/"),i}function s(t,e){e(window.confirm(t))}function f(t){var e=t.indexOf("#");return-1===e?t:t.slice(0,e)}function h(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)}function p(t){window.location.replace(f(window.location.href)+"#"+t)}function d(t){function e(){var t=S(h());return k&&(t=function(t,e){return function(t,e){return 0===t.toLowerCase().indexOf(e.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(e.length))}(t,e)?t.substr(e.length):t}(t,k)),l(t)}function n(t){o(I,t),I.length=d.length,P.notifyListeners(I.location,I.action)}function r(){var t,o,r=h(),a=O(r);if(r!==a)p(a);else{var u=e();if(!x&&(t=I.location).pathname===(o=u).pathname&&t.search===o.search&&t.hash===o.hash)return;if(E===c(u))return;E=null,function(t){x?(x=!1,n()):P.confirmTransitionTo(t,"POP",y,(function(e){e?n({action:"POP",location:t}):function(t){var e=U.lastIndexOf(c(I.location));-1===e&&(e=0);var n=U.lastIndexOf(c(t));-1===n&&(n=0);var o=e-n;o&&(x=!0,i(o))}(t)}))}(u)}}function i(t){d.go(t)}function u(t){1===(T+=t)&&1===t?window.addEventListener("hashchange",r):0===T&&window.removeEventListener("hashchange",r)}void 0===t&&(t={}),g||v(!1);var d=window.history,_=(window.navigator.userAgent.indexOf("Firefox"),t.getUserConfirmation),y=void 0===_?s:_,b=t.hashType,w=void 0===b?"slash":b,k=t.basename?function(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}(a(t.basename)):"",C=m[w],O=C.encodePath,S=C.decodePath,P=function(){var t=null,e=[];return{setPrompt:function(e){return t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,o,r){if(null!=t){var i="function"==typeof t?t(e,n):t;"string"==typeof i?"function"==typeof o?o(i,r):r(!0):r(!1!==i)}else r(!0)},appendListener:function(t){function n(){o&&t.apply(void 0,arguments)}var o=!0;return e.push(n),function(){o=!1,e=e.filter((function(t){return t!==n}))}},notifyListeners:function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];e.forEach((function(t){return t.apply(void 0,n)}))}}}(),x=!1,E=null,A=h(),L=O(A);A!==L&&p(L);var j=e(),U=[c(j)],T=0,N=!1,I={length:d.length,action:"POP",location:j,createHref:function(t){var e=document.querySelector("base"),n="";return e&&e.getAttribute("href")&&(n=f(window.location.href)),n+"#"+O(k+c(t))},push:function(t){var e=l(t,void 0,void 0,I.location);P.confirmTransitionTo(e,"PUSH",y,(function(t){if(t){var o=c(e),r=O(k+o);if(h()!==r){E=o,function(t){window.location.hash=t}(r);var i=U.lastIndexOf(c(I.location)),a=U.slice(0,i+1);a.push(o),U=a,n({action:"PUSH",location:e})}else n()}}))},replace:function(t){var e=l(t,void 0,void 0,I.location);P.confirmTransitionTo(e,"REPLACE",y,(function(t){if(t){var o=c(e),r=O(k+o);h()!==r&&(E=o,p(r));var i=U.indexOf(c(I.location));-1!==i&&(U[i]=o),n({action:"REPLACE",location:e})}}))},go:i,goBack:function(){i(-1)},goForward:function(){i(1)},block:function(t){void 0===t&&(t=!1);var e=P.setPrompt(t);return N||(u(1),N=!0),function(){return N&&(N=!1,u(-1)),e()}},listen:function(t){var e=P.appendListener(t);return u(1),function(){u(-1),e()}}};return I}var _=function(t,e){void 0===e&&(e="");var n,o=t&&t.split("/")||[],a=e&&e.split("/")||[],u=t&&r(t),c=e&&r(e),l=u||c;if(t&&r(t)?a=o:o.length&&(a.pop(),a=a.concat(o)),!a.length)return"/";if(a.length){var s=a[a.length-1];n="."===s||".."===s||""===s}else n=!1;for(var f=0,h=a.length;h>=0;h--){var p=a[h];"."===p?i(a,h):".."===p?(i(a,h),f++):f&&(i(a,h),f--)}if(!l)for(;f--;f)a.unshift("..");!l||""===a[0]||a[0]&&r(a[0])||a.unshift("");var d=a.join("/");return n&&"/"!==d.substr(-1)&&(d+="/"),d},v=function(t){if(!t)throw new Error("Invariant failed")};n.d(e,"a",(function(){return d}));var g=!("undefined"==typeof window||!window.document||!window.document.createElement),m={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+u(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:u,decodePath:a},slash:{encodePath:a,decodePath:a}}},xiam:function(t,e,n){"use strict";var o=n("SdNZ");e.a=Object(o.a)((function(t){Promise.all([n.e(0),n.e(7)]).then(function(){t(n("cAcE"))}.bind(null,n)).catch(n.oe)}))}});
//# sourceMappingURL=bundle.32b2f.esm.js.map