(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+nQ1":function(t){t.exports={list:"list__1bP2e"}},"0vKm":function(t){t.exports={active:"active__188m8",disabled:"disabled__2CpK8"}},"1KBa":function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return a}));var o=e("hosL"),r=e("0vKm"),i=e.n(r),a=function(n){function e(){return n.apply(this,arguments)||this}var o,r;return r=n,(o=e).prototype=Object.create(r.prototype),o.prototype.constructor=o,o.__proto__=r,e.prototype.render=function(){return this.props.pathname===this.props.href?t("span",{class:i.a.active,title:this.props.title},this.props.children):this.props.disabled?t("span",{class:i.a.disabled,title:this.props.title},this.props.children):t("a",{href:this.props.href,class:i.a.inactive,title:this.props.title},this.props.children)},e}(o.Component)}).call(this,e("hosL").h)},"1LgV":function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return c}));var o=e("hosL"),r=e("+nQ1"),i=e.n(r),a=e("PLZj"),s=e("HdoS"),p=e("1KBa"),c=function(n){function e(){var t;return(t=n.call(this)||this).getData=function(){fetch("https://rygapi.steffo.eu/api/wiki/list/v1").then((function(t){return t.json()})).then((function(n){t.setState({data:n.data})}))},t.state={data:null},t}var o,r;r=n,(o=e).prototype=Object.create(r.prototype),o.prototype.constructor=o,o.__proto__=r;var c=e.prototype;return c.componentDidMount=function(){this.getData()},c.render=function(){var n;n=null===this.state.data?t(a.a,null):this.state.data.map((function(n){return t("li",null,t(p.a,{href:"/wiki/"+n.page_id},n.title))}));var e=t("a",{href:"/wiki/new"},"Nuova");return t(s.a,{left:"Indice Wiki",right:e},t("ul",{class:i.a.list},n))},e}(o.Component)}).call(this,e("hosL").h)},EZm7:function(t,n,e){"use strict";e.r(n),function(t){e.d(n,"default",(function(){return a}));var o=e("hosL"),r=e("1LgV"),i=e("wVM7"),a=function(n){function e(){return n.apply(this,arguments)||this}var o,a;return a=n,(o=e).prototype=Object.create(a.prototype),o.prototype.constructor=o,o.__proto__=a,e.prototype.render=function(){return t("div",null,t(i.a,{pageId:"7337189e-ab4a-4487-bc8c-3a2285c6b4b3"}),t(r.a,null))},e}(o.Component)}.call(this,e("hosL").h)}}]);
//# sourceMappingURL=7.chunk.7910c.js.map