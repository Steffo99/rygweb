(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+tVh":function(t){t.exports={list:"list__2ymWY"}},"0vKm":function(t){t.exports={active:"active__188m8",disabled:"disabled__2CpK8"}},"1KBa":function(t,s,i){"use strict";(function(t){i.d(s,"a",(function(){return o}));var e=i("hosL"),n=i("0vKm"),a=i.n(n);class o extends e.Component{render(){return this.props.pathname===this.props.href?t("span",{class:a.a.active,title:this.props.title},this.props.children):this.props.disabled?t("span",{class:a.a.disabled,title:this.props.title},this.props.children):t("a",{href:this.props.href,class:a.a.inactive,title:this.props.title},this.props.children)}}}).call(this,i("hosL").h)},EZm7:function(t,s,i){"use strict";i.r(s),function(t){i.d(s,"default",(function(){return h}));var e=i("hosL"),n=i("+tVh"),a=i.n(n),o=i("PLZj"),r=i("HdoS"),l=i("1KBa");class h extends e.Component{constructor(){super(),this.getData=()=>{fetch("https://rygapi.steffo.eu/api/wiki/list/v1").then(t=>t.json()).then(t=>{this.setState({data:t.data})})},this.state={data:null}}componentDidMount(){this.getData()}render(){let s;s=null===this.state.data?t(o.a,null):this.state.data.map(s=>t("li",null,t(l.a,{href:"/wiki/"+s.page_id},s.title)));let i=t("a",{href:"/wiki/new"},"Nuova");return t(r.a,{left:"Indice Wiki",right:i},t("ul",{class:a.a.list},s))}}}.call(this,i("hosL").h)},PLZj:function(t,s,i){"use strict";(function(t){i.d(s,"a",(function(){return o}));var e=i("hosL"),n=i("GAEk"),a=i("WOcO");class o extends e.Component{render(){return t("span",null,t(n.a,{icon:a.g,pulse:!0})," ",this.props.text?this.props.text:"Loading...")}}}).call(this,i("hosL").h)}}]);
//# sourceMappingURL=8.chunk.1e03e.esm.js.map