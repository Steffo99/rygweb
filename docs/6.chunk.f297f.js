(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+nQ1":function(t){t.exports={list:"list__1bP2e"}},"0vKm":function(t){t.exports={active:"active__188m8",disabled:"disabled__2CpK8"}},"1KBa":function(t,n,o){"use strict";(function(t){o.d(n,"a",(function(){return s}));var e=o("hosL"),r=o("0vKm"),i=o.n(r),s=function(n){function o(){return n.apply(this,arguments)||this}var e,r;return r=n,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(){return this.props.pathname===this.props.href?t("span",{class:i.a.active,title:this.props.title},this.props.children):this.props.disabled?t("span",{class:i.a.disabled,title:this.props.title},this.props.children):t("a",{href:this.props.href,class:i.a.inactive,title:this.props.title},this.props.children)},o}(e.Component)}).call(this,o("hosL").h)},"1LgV":function(t,n,o){"use strict";(function(t){o.d(n,"a",(function(){return c}));var e=o("hosL"),r=o("+nQ1"),i=o.n(r),s=o("PLZj"),a=o("HdoS"),p=o("1KBa"),c=function(n){function o(){var t;return(t=n.call(this)||this).getData=function(){fetch("https://rygapi.steffo.eu/api/wiki/list/v1").then((function(t){return t.json()})).then((function(n){t.setState({data:n.data})}))},t.state={data:null},t}var e,r;r=n,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var c=o.prototype;return c.componentDidMount=function(){this.getData()},c.render=function(){var n;n=null===this.state.data?t(s.a,null):this.state.data.map((function(n){return t("li",null,t(p.a,{href:"/wiki/"+n.page_id},n.title))}));var o=t("a",{href:"/wiki/new"},"Nuova");return t(a.a,{left:"Indice Wiki",right:o},t("ul",{class:i.a.list},n))},o}(e.Component)}).call(this,o("hosL").h)},EZm7:function(t,n,o){"use strict";o.r(n),function(t){o.d(n,"default",(function(){return i}));var e=o("hosL"),r=o("1LgV"),i=function(n){function o(){return n.apply(this,arguments)||this}var e,i;return i=n,(e=o).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i,o.prototype.render=function(){return t(r.a,null)},o}(e.Component)}.call(this,o("hosL").h)}}]);
//# sourceMappingURL=6.chunk.f297f.js.map