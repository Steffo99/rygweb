(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+bjC":function(t){t.exports={navbar:"navbar__2Eoji",left:"left__3WebR",center:"center__RCn8L",right:"right__2UhXV"}},"0vKm":function(t){t.exports={active:"active__188m8",disabled:"disabled__2CpK8"}},"1KBa":function(t,s,a){"use strict";(function(t){a.d(s,"a",(function(){return i}));var e=a("hosL"),r=a("0vKm"),n=a.n(r);class i extends e.Component{render(){return this.props.pathname===this.props.href?t("span",{class:n.a.active,title:this.props.title},this.props.children):this.props.disabled?t("span",{class:n.a.disabled,title:this.props.title},this.props.children):t("a",{href:this.props.href,class:n.a.inactive,title:this.props.title},this.props.children)}}}).call(this,a("hosL").h)},"7qlj":function(t){t.exports={ryglogo:"ryglogo__3G6V2",avatar:"avatar__1T_5Z"}},hBto:function(t,s,a){"use strict";(function(t){a.d(s,"a",(function(){return i}));var e=a("hosL"),r=a("+bjC"),n=a.n(r);class i extends e.Component{render(){return t("nav",{class:n.a.navbar},t("div",{class:n.a.left},this.props.left),t("div",{class:n.a.center},this.props.center),t("div",{class:n.a.right},this.props.right))}}}).call(this,a("hosL").h)},vKSI:function(t,s,a){"use strict";a.r(s),function(t){a.d(s,"default",(function(){return p}));var e=a("hosL"),r=a("7qlj"),n=a.n(r),i=a("hBto"),o=a("1KBa");class p extends e.Component{render(){let s,a=[t(o.a,{href:"/",pathname:this.props.pathname},t("img",{src:"https://combo.steffo.eu/open/ryg/LogoRoyalGames.svg",class:n.a.ryglogo,alt:"⭐ ️"})," Royal Games")," | ",t(o.a,{href:"/diario",pathname:this.props.pathname},"Diario")," | ",t(o.a,{href:"/wiki",pathname:this.props.pathname},"Wiki")," | ",t(o.a,{href:"/ilmonarcadelvalhalla2",pathname:this.props.pathname},"IMdV2")];return s=null===this.props.loggedIn?t(o.a,{href:"/login",pathname:this.props.pathname},"Login ",t("img",{src:"https://combo.steffo.eu/open/ryg/GenericUser.png",class:n.a.avatar,alt:" 👤"})):t(o.a,{href:"/user/me",pathname:this.props.pathname},this.props.loggedIn.user.username," ",t("img",{src:"https://combo.steffo.eu/open/ryg/GenericUser.png",class:n.a.avatar,alt:" 👤"})),t(i.a,{left:a,right:[s]})}}}.call(this,a("hosL").h)}}]);
//# sourceMappingURL=6.chunk.28322.esm.js.map