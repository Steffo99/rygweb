(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"62HW":function(t,o,n){"use strict";(function(t){n.d(o,"a",(function(){return u}));var e=n("hosL"),s=n("YPA1"),r=n("T9cN"),a=n("iexX"),i=n("HdoS"),u=function(o){function n(){var t;return(t=o.call(this)||this).onPasswordInputChange=function(o){t.setState({new_password:o.target.value})},t.onButtonClick=function(){t.setState({status:"running"}),fetch("https://rygapi.steffo.eu/api/token/passwd/v1",{method:"POST",body:JSON.stringify({token:t.props.loggedIn.token,new_password:t.state.new_password})}).then((function(t){return t.json()})).then((function(o){t.setState({status:"done",revoked_tokens:o.data.revoked_tokens})}))},t.state={new_password:null,status:"waiting",revoked_tokens:null},t}var e,u;return u=o,(e=n).prototype=Object.create(u.prototype),e.prototype.constructor=e,e.__proto__=u,n.prototype.render=function(){return t(i.a,{left:"Cambia password"},t(s.a,{label:"Nuova password",type:"password",value:this.state.new_password,onChange:this.onPasswordInputChange,disabled:"waiting"!==this.state.status}),t(r.a,{label:"Cambia password",onClick:this.onButtonClick,status:this.state.status}),"done"===this.state.status?t(a.a,null,"Password cambiata con successo! E' stato automaticamente effettuato il logoff da ",this.state.revoked_tokens," accessi."):"")},n}(e.Component)}).call(this,n("hosL").h)},PLZj:function(t,o,n){"use strict";(function(t){n.d(o,"a",(function(){return a}));var e=n("hosL"),s=n("GAEk"),r=n("WOcO"),a=function(o){function n(){return o.apply(this,arguments)||this}var e,a;return a=o,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){return t("span",null,t(s.a,{icon:r.g,pulse:!0})," ",this.props.text?this.props.text:"Loading...")},n}(e.Component)}).call(this,n("hosL").h)},WACb:function(t){t.exports={title:"title__2PYT8",image:"image__2zge7",text:"text__2ez1X"}},iexX:function(t,o,n){"use strict";(function(t){n.d(o,"a",(function(){return u}));var e=n("hosL"),s=n("uBMG"),r=n.n(s),a=n("GAEk"),i=n("WOcO"),u=function(o){function n(){return o.apply(this,arguments)||this}var e,s;return s=o,(e=n).prototype=Object.create(s.prototype),e.prototype.constructor=e,e.__proto__=s,n.prototype.render=function(){return t("div",{class:r.a.successcolor},t(a.a,{icon:i.b})," ",this.props.children)},n}(e.Component)}).call(this,n("hosL").h)},lJdf:function(t,o,n){"use strict";(function(t){n.d(o,"a",(function(){return a}));var e=n("hosL"),s=n("WACb"),r=n.n(s),a=function(o){function n(){return o.apply(this,arguments)||this}var e,s;return s=o,(e=n).prototype=Object.create(s.prototype),e.prototype.constructor=e,e.__proto__=s,n.prototype.render=function(){return t("div",{class:r.a.title},t("img",{class:r.a.image,src:this.props.imgsrc,alt:this.props.imgalt}),t("span",{class:r.a.text}," ",this.props.text))},n}(e.Component)}).call(this,n("hosL").h)},uBMG:function(t){t.exports={successcolor:"successcolor__1EkSB"}},vb2E:function(t,o,n){"use strict";n.r(o),function(t){n.d(o,"default",(function(){return i}));var e=n("hosL"),s=n("PLZj"),r=n("lJdf"),a=n("62HW"),i=function(o){function n(){var t;return(t=o.call(this)||this).getData=function(){fetch("https://rygapi.steffo.eu/api/user/get/v1?id="+t.props.user_id).then((function(t){return t.json()})).then((function(o){t.setState({data:o.data})}))},t.state={data:null},t}var e,i;i=o,(e=n).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i;var u=n.prototype;return u.componentDidMount=function(){this.getData()},u.render=function(){var o=this.props.loggedIn&&this.props.user_id===this.props.loggedIn.user.uid;return null===this.state.data?t(s.a,null):t("div",null,t(r.a,{imgsrc:"https://combo.steffo.eu/open/ryg/GenericUser.png",imgalt:"👤",text:this.state.data.username}),o?t(a.a,{loggedIn:this.props.loggedIn}):"")},n}(e.Component)}.call(this,n("hosL").h)}}]);
//# sourceMappingURL=5.chunk.5854e.js.map