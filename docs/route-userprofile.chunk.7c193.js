(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{M9FC:function(t,n,o){"use strict";(function(t){o.d(n,"a",(function(){return u}));var e=o("hosL"),r=o("SwdI"),s=o("aWx2"),a=o("iexX"),i=o("HdoS"),u=function(n){function o(){var t;return(t=n.call(this)||this).onPasswordInputChange=function(n){t.setState({new_password:n.target.value})},t.onButtonClick=function(){t.setState({status:"running"}),fetch("https://rygapi.steffo.eu/api/token/passwd/v1",{method:"POST",body:JSON.stringify({token:t.props.loggedIn.token,new_password:t.state.new_password})}).then((function(t){return t.json()})).then((function(n){t.setState({status:"done",revoked_tokens:n.data.revoked_tokens})}))},t.state={new_password:null,status:"waiting",revoked_tokens:null},t}var e,u;return u=n,(e=o).prototype=Object.create(u.prototype),e.prototype.constructor=e,e.__proto__=u,o.prototype.render=function(){return t(i.a,{left:"Cambia password"},t(r.a,{label:"Nuova password",type:"password",value:this.state.new_password,onChange:this.onPasswordInputChange,disabled:"waiting"!==this.state.status}),t(s.a,{label:"Cambia password",onClick:this.onButtonClick,status:this.state.status}),"done"===this.state.status?t(a.a,null,"Password cambiata con successo! E' stato automaticamente effettuato il logoff da ",this.state.revoked_tokens," accessi."):"")},o}(e.Component)}).call(this,o("hosL").h)},WACb:function(t){t.exports={title:"title__2PYT8",image:"image__2zge7",text:"text__2ez1X"}},XF1l:function(t){t.exports={changenumber:"changenumber__3QTDZ",positive:"positive__2qKdo",neutral:"neutral__1rGMM",negative:"negative__1tWJB"}},aWx2:function(t,n,o){"use strict";(function(t){o.d(n,"a",(function(){return u}));var e=o("hosL"),r=o("Qu3A"),s=o("GAEk"),a=o("WOcO"),i=o("eYWD"),u=function(n){function o(){return n.apply(this,arguments)||this}var e,u;return u=n,(e=o).prototype=Object.create(u.prototype),e.prototype.constructor=e,e.__proto__=u,o.prototype.render=function(){return"waiting"===this.props.status?t(r.a,{label:t("span",null,this.props.label),onClick:this.props.onClick}):"running"===this.props.status?t(r.a,{label:t("span",null,t(s.a,{icon:a.g,pulse:!0})," ",this.props.label),disabled:!0}):"done"===this.props.status?t(r.a,{label:t("span",null,t(s.a,{icon:a.a})," ",this.props.label),disabled:!0}):"error"===this.props.status?t(r.a,{label:t("span",null,t(s.a,{icon:a.e})," ",this.props.label),onClick:this.props.onClick}):t(i.a,null,"Invalid status for HButtonOnce: ",this.props.status.toString())},o}(e.Component)}).call(this,o("hosL").h)},gL7v:function(t,n,o){"use strict";(function(t){o.d(n,"a",(function(){return s}));var e=o("hosL"),r=o("HdoS"),s=function(n){function o(){return n.apply(this,arguments)||this}var e,s;return s=n,(e=o).prototype=Object.create(s.prototype),e.prototype.constructor=e,e.__proto__=s,o.prototype.render=function(){return t(r.a,{left:"Informazioni tecniche"},t("ul",null,t("li",null,"ID: ",t("b",null,this.props.user.uid)),t("li",null,"Tipo utente: ",t("b",null,this.props.user.role))))},o}(e.Component)}).call(this,o("hosL").h)},hA3Z:function(t){t.exports={invisitable:"invisitable__2BeJv"}},iexX:function(t,n,o){"use strict";(function(t){o.d(n,"a",(function(){return p}));var e=o("hosL"),r=o("uBMG"),s=o.n(r),a=o("9yVG"),i=o("GAEk"),u=o("WOcO"),p=function(n){function o(){return n.apply(this,arguments)||this}var e,r;return r=n,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(){return t(a.a,{class:s.a.success},t(i.a,{icon:u.b})," ",this.props.children)},o}(e.Component)}).call(this,o("hosL").h)},lJdf:function(t,n,o){"use strict";(function(t){o.d(n,"a",(function(){return a}));var e=o("hosL"),r=o("WACb"),s=o.n(r),a=function(n){function o(){return n.apply(this,arguments)||this}var e,r;return r=n,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(){return t("div",{class:s.a.title},t("img",{class:s.a.image,src:this.props.imgsrc,alt:this.props.imgalt}),t("span",{class:s.a.text}," ",this.props.text))},o}(e.Component)}).call(this,o("hosL").h)},qFH1:function(t){t.exports={current:"current__24hce",transactiontable:"transactiontable__3P0fZ",amount:"amount__2Nl11",positive:"positive__3nc4y",negative:"negative__1SDlm"}},sXfE:function(t,n,o){"use strict";(function(t){o.d(n,"a",(function(){return a}));var e=o("hosL"),r=o("HdoS"),s=o("Qu3A"),a=function(n){function o(){return n.apply(this,arguments)||this}var e,a;return a=n,(e=o).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,o.prototype.render=function(){return t(r.a,{left:"Logout"},t(s.a,{label:"Logout",onClick:this.props.onLogoutClick}))},o}(e.Component)}).call(this,o("hosL").h)},tK5F:function(t,n,o){"use strict";(function(t){o.d(n,"a",(function(){return a}));var e=o("hosL"),r=o("XF1l"),s=o.n(r),a=function(n){function o(){return n.apply(this,arguments)||this}var e,r;return r=n,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(){var n,o="";return this.props.children>0?(n=s.a.positive,o="+"):n=0===this.props.children?s.a.neutral:s.a.negative,t("span",{class:s.a.changenumber+" "+n+" "+this.props.class},o,this.props.children)},o}(e.Component)}).call(this,o("hosL").h)},tXXO:function(t,n,o){"use strict";(function(t){o.d(n,"a",(function(){return c}));var e=o("hosL"),r=o("PLZj"),s=o("HdoS"),a=o("qFH1"),i=o.n(a),u=o("yVVz"),p=o("tK5F"),c=function(n){function o(){var t;return(t=n.call(this)||this).getData=function(){fetch("https://rygapi.steffo.eu/api/user/fiorygi/get/v1?id="+t.props.user.uid).then((function(t){return t.json()})).then((function(n){t.setState({data:n.data})}))},t.state={data:null},t}var e,a;a=n,(e=o).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var c=o.prototype;return c.componentDidMount=function(){this.getData()},c.render=function(){var n=t(r.a,null);if(null!==this.state.data){var o=this.state.data.transactions.map((function(n,o){return t("tr",{key:o},t("td",{class:i.a.amount},t(p.a,null,n.change)),t("td",null,n.reason))}));n=t("div",null,t(u.a,{class:i.a.transactiontable},t("tbody",null,t("tr",{class:i.a.current},t("td",{class:i.a.amount},t(p.a,null,this.state.data.fiorygi)),t("td",null,"fiorygi totali")),o)))}return t(s.a,{left:"Fiorygi"},n)},o}(e.Component)}).call(this,o("hosL").h)},uBMG:function(t){t.exports={success:"success__30g14"}},vb2E:function(t,n,o){"use strict";o.r(n),function(t){o.d(n,"default",(function(){return l}));var e=o("hosL"),r=o("PLZj"),s=o("lJdf"),a=o("M9FC"),i=o("gL7v"),u=o("HdoS"),p=o("sXfE"),c=o("tXXO"),l=function(n){function o(){var t;return(t=n.call(this)||this).getData=function(){fetch("https://rygapi.steffo.eu/api/user/get/v1?id="+t.props.userId).then((function(t){return t.json()})).then((function(n){t.setState({data:n.data})}))},t.state={data:null},t}var e,l;l=n,(e=o).prototype=Object.create(l.prototype),e.prototype.constructor=e,e.__proto__=l;var h=o.prototype;return h.componentDidMount=function(){this.props.userId&&this.getData()},h.componentDidUpdate=function(t){t.userId!==this.props.userId&&this.props.userId&&this.getData()},h.render=function(){var n=this.props.loggedIn&&this.props.userId===this.props.loggedIn.user.uid;return null===this.state.data?t(u.a,{left:"Caricamento..."},t(r.a,null)):t("div",null,t(s.a,{imgsrc:"https://combo.steffo.eu/open/ryg/GenericUser.png",imgalt:"👤",text:this.state.data.username}),t(c.a,{user:this.state.data}),t(i.a,{user:this.state.data}),n?t(a.a,{loggedIn:this.props.loggedIn}):"",n?t(p.a,{onLogoutClick:this.props.onLogoutClick}):"")},o}(e.Component)}.call(this,o("hosL").h)},yVVz:function(t,n,o){"use strict";(function(t){o.d(n,"a",(function(){return a}));var e=o("hosL"),r=o("hA3Z"),s=o.n(r),a=function(n){function o(){return n.apply(this,arguments)||this}var e,r;return r=n,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(){return t("table",{class:s.a.invisitable+" "+this.props.class},this.props.children)},o}(e.Component)}).call(this,o("hosL").h)}}]);
//# sourceMappingURL=route-userprofile.chunk.7c193.js.map