(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/DT+":function(a){a.exports={flex:"flex__3809k"}},"5t5+":function(a,e,s){"use strict";(function(a){var t=s("cgGN"),r=s.n(t),n=s("idsZ"),l=s("nnxo"),o=s("hosL");e.a=function(e){var s=a(l.a,{class:r.a.header,icon:!1,href:"https://www.brawlhalla.com/rankings/1v1/?p="+e.steam.brawlhalla.name},a("img",{className:r.a.avatar,src:"https://ryg.s3.fr-par.scw.cloud/resources/brawlhalla/BrawlhallaStandard.png",alt:""})," ",e.steam.brawlhalla.name),t=a(o.Fragment,null,a("div",{className:r.a.section1v1},a("div",{className:r.a.caption},"1v1"),a("div",{class:r.a.value},e.steam.brawlhalla["1v1"]?e.steam.brawlhalla["1v1"].rating:"-"," ",a("small",{class:r.a.mmr},"MMR"))),a("div",{className:r.a.section2v2},a("div",{className:r.a.caption},"2v2"),a("div",{class:r.a.value},e.steam.brawlhalla["2v2"]?e.steam.brawlhalla["2v2"].rating:"-"," ",a("small",{class:r.a.mmr},"MMR")))),i=a("img",{src:"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/291550/c43fac31b8bf8821764603a14d09412bc3d45f66.jpg",alt:"",title:"Brawlhalla"});return a(n.a,{class:r.a.brawlhalla,header:s,body:t,user:e.user,icon:i})}}).call(this,s("hosL").h)},"7CvW":function(a){a.exports={mini:"mini__OuKn2",top:"top__Hp38m",icon:"icon__33pj4",header:"header__3LtT4",body:"body__1Tivj"}},"8U2E":function(a,e,s){"use strict";s.r(e),function(a){function t(a,e){var s;if("undefined"==typeof Symbol||null==a[Symbol.iterator]){if(Array.isArray(a)||(s=function(a,e){if(!a)return;if("string"==typeof a)return r(a,e);var s=Object.prototype.toString.call(a).slice(8,-1);"Object"===s&&a.constructor&&(s=a.constructor.name);if("Map"===s||"Set"===s)return Array.from(a);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return r(a,e)}(a))||e&&a&&"number"==typeof a.length){s&&(a=s);var t=0;return function(){return t>=a.length?{done:!0}:{done:!1,value:a[t++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(s=a[Symbol.iterator]()).next.bind(s)}function r(a,e){(null==e||e>a.length)&&(e=a.length);for(var s=0,t=new Array(e);s<e;s++)t[s]=a[s];return t}var n=s("mbOI"),l=s("w9DP"),o=s("GAEk"),i=s("WOcO"),c=s("PNP/"),m=s("bIlu"),u=s("5t5+"),p=s("XIVL"),d=s("hosL"),_=s("lZnv"),v=s("azzm"),h=s("mAIj");s("idsZ");e.default=function(){var e=Object(n.v)("GET","/api/user/ryg/list/v1"),s=e[0],r=e[1];if(void 0!==r)return a(l.a,{error:r});if(void 0===s)return a(n.k,null,a(o.a,{icon:i.z,pulse:!0})," Caricamento...");for(var f,g=[],w=[],b=[],k=[],y=[],N=[],x=t(s);!(f=x()).done;){for(var L,j=f.value,O=t(j.steam);!(L=O()).done;){var q=L.value;g.push(a(c.a,{user:j,steam:q})),q.dota&&w.push(a(m.a,{user:j,steam:q})),q.brawlhalla&&b.push(a(u.a,{user:j,steam:q})),q.trionfistatus&&N.push(a(h.a,{user:j,steam:q}))}for(var M,Z=t(j.leagueoflegends);!(M=Z()).done;){k.push(a(_.a,{user:j,league:M.value}))}for(var I,D=t(j.osu);!(I=D()).done;){y.push(a(v.a,{user:j,osu:I.value}))}}return g.sort((function(a,e){return a.props.steam.account_level>e.props.steam.account_level?-1:a.props.steam.account_level===e.props.steam.account_level?0:1})),w.sort((function(a,e){return null===a.props.steam.dota.rank&&null===e.props.steam.dota.rank?0:null===e.props.steam.dota.rank?-1:null===a.props.steam.dota.rank?1:a.props.steam.dota.rank.raw>e.props.steam.dota.rank.raw?-1:a.props.steam.dota.rank.raw===e.props.steam.dota.rank.raw?0:1})),b.sort((function(a,e){return null===a.props.steam.brawlhalla["1v1"]&&null===e.props.steam.brawlhalla["1v1"]?0:null===e.props.steam.brawlhalla["1v1"]?-1:null===a.props.steam.brawlhalla["1v1"]?1:a.props.steam.brawlhalla["1v1"].rating>e.props.steam.brawlhalla["1v1"].rating?-1:a.props.steam.brawlhalla["1v1"].rating===e.props.steam.brawlhalla["1v1"].rating?0:1})),k.sort((function(a,e){return a.props.league.summoner_level>e.props.league.summoner_level?-1:a.props.league.summoner_level===e.props.league.summoner_level?0:1})),y.sort((function(a,e){return a.props.osu.standard.pp>e.props.osu.standard.pp?-1:a.props.osu.standard.pp===e.props.osu.standard.pp?0:1})),N.sort((function(a,e){return a.props.steam.trionfistatus.total>e.props.steam.trionfistatus.total?-1:a.props.steam.trionfistatus.total==a.props.steam.trionfistatus.total?0:1})),a(d.Fragment,null,N.length>=1?a(n.k,{title:"Trionfi Reali"},a(p.a,null,N)):null,a(n.k,{title:"Steam"},a(p.a,null,g)),a(n.k,{title:"Dota 2"},a(p.a,null,w)),a(n.k,{title:"Brawlhalla"},a(p.a,null,b)),a(n.k,{title:"League of Legends"},a(p.a,null,k)),a(n.k,{title:"osu!"},a(p.a,null,y)))}}.call(this,s("hosL").h)},HIp8:function(a){a.exports={halloween:"halloween__3pJVF",header:"header__2SXNZ",avatar:"avatar__2KiJw",tarotList:"tarotList__Y6Ell",tarot:"tarot__1eeMI",zawarudo:"zawarudo__2VWOh",lit:"lit__2PTPb",dim:"dim__q8CRE"}},"PNP/":function(a,e,s){"use strict";(function(a){var t=s("Qn9w"),r=s.n(t),n=s("idsZ"),l=s("nnxo"),o=s("hosL"),i=s("mbOI");e.a=function(e){var s=a(l.a,{icon:!1,class:r.a.header,href:e.steam.profile_url},a("span",{class:r.a.frame},a("img",{class:r.a.avatar,src:e.steam.avatar,alt:""})),a("span",{class:r.a.personaName},e.steam.persona_name)),t=a(o.Fragment,null,a("div",{className:r.a.keyvalue},a("div",{className:r.a.caption},"Livello"),a("div",{className:r.a.value},e.steam.account_level)),a("div",{className:r.a.keyvalue},a("div",{className:r.a.caption},"Giochi posseduti"),a("div",{className:r.a.value},e.steam.owned_games_count)),a("div",{className:Object(i.q)(r.a.keyvalue,r.a.bottom)},a("div",{className:r.a.caption},"Più giocato (2 sett.)"),a("div",{className:r.a.value},a("a",{href:"https://store.steampowered.com/app/"+e.steam.most_played_game_2weeks+"/"},a("img",{class:r.a.mostplayed,src:"https://steamcdn-a.akamaihd.net/steam/apps/"+e.steam.most_played_game_2weeks+"/header.jpg",alt:""}))))),c=a("img",{src:"https://ryg.s3.fr-par.scw.cloud/resources/steam/steam.svg",alt:"",title:"Steam"});return a(n.a,{class:r.a.steam,header:s,body:t,user:e.user,icon:c})}}).call(this,s("hosL").h)},Qn9w:function(a){a.exports={steam:"steam__4uDQR",header:"header__1heO2",frame:"frame__3KnHT",avatar:"avatar__2KvsJ",personaName:"personaName__3Fcuz",keyvalue:"keyvalue__79xG8",caption:"caption__2eGtM",value:"value__2rT1e",buttons:"buttons__16-Q_",button:"button__BsOBt",buttoncontent:"buttoncontent__2DOT4",mostplayed:"mostplayed__rptXw",bottom:"bottom__1M3MO"}},XIVL:function(a,e,s){"use strict";(function(a){var t=s("/DT+"),r=s.n(t);e.a=function(e){return a("div",{className:r.a.flex},e.children)}}).call(this,s("hosL").h)},azzm:function(a,e,s){"use strict";(function(a){var t=s("kDMr"),r=s.n(t),n=s("idsZ"),l=s("nnxo"),o=s("hosL"),i=s("mbOI");e.a=function(e){function s(s){var t,n=e.osu[s];return"standard"===s?t=n.pp>=5e3?"expert-plus":n.pp>=2e3?"expert":n.pp>=900?"insane":n.pp>=300?"hard":n.pp>=50?"normal":n.pp>0?"easy":"none":"taiko"===s?t=n.pp>=1e4?"expert-plus":n.pp>=8e3?"expert":n.pp>=4e3?"insane":n.pp>=1500?"hard":n.pp>=500?"normal":n.pp>0?"easy":"none":"catch"===s?t=n.pp>=3600?"expert-plus":n.pp>=1800?"expert":n.pp>=700?"insane":n.pp>=450?"hard":n.pp>=150?"normal":n.pp>0?"easy":"none":"mania"===s&&(t=n.pp>=6500?"expert-plus":n.pp>=3600?"expert":n.pp>=1800?"insane":n.pp>=600?"hard":n.pp>=200?"normal":n.pp>0?"easy":"none"),a("div",{className:Object(i.q)(r.a.gamemode,r.a[s],r.a[t])},a("div",{className:r.a.gmicon},a("span",{className:r.a.fae})),a("div",{class:r.a.performance},Math.floor(e.osu[s].pp)),a("div",{class:r.a.pp},"pp"))}var t=a(l.a,{icon:!1,class:r.a.header,href:"https://osu.ppy.sh/users/"+e.osu.osu_id},a("img",{className:r.a.avatar,src:e.osu.avatar_url&&"/images/layout/avatar-guest.png"!==e.osu.avatar_url?e.osu.avatar_url:"https://osu.ppy.sh/images/layout/avatar-guest.png",alt:""})," ",e.osu.username),c=a(o.Fragment,null,s("standard"),s("taiko"),s("catch"),s("mania")),m=a("img",{class:r.a.icon,src:"https://raw.githubusercontent.com/ppy/osu-resources/master/osu.Game.Resources/Textures/Menu/logo.png",alt:"",title:"osu!"});return a(n.a,{class:r.a.mini,header:t,body:c,user:e.user,icon:m})}}).call(this,s("hosL").h)},bIlu:function(a,e,s){"use strict";(function(a){var t=s("nGxy"),r=s.n(t),n=s("idsZ"),l=s("nnxo"),o=s("hosL");e.a=function(e){var s,t="Unranked";e.steam.dota.rank&&("https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_"+Math.floor(e.steam.dota.rank.raw/10)+".png","https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_"+e.steam.dota.rank.raw%10+".png",t=e.steam.dota.rank.medal.toLowerCase()+" "+e.steam.dota.rank.rank),s=e.steam.dota.rank?a(o.Fragment,null,a("div",{className:r.a.name},e.steam.dota.rank.medal.toLowerCase()+" "+e.steam.dota.rank.rank),a("div",{className:r.a.fullMedal},a("img",{className:r.a.medal,alt:"",src:"https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_"+Math.floor(e.steam.dota.rank.raw/10)+".png"}),a("img",{className:r.a.stars,alt:"",src:"https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_"+e.steam.dota.rank.raw%10+".png"}))):a(o.Fragment,null,a("div",{className:r.a.name},t),a("div",{className:r.a.fullMedal},a("img",{className:r.a.medal,alt:"",src:"https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_0.png"})));var i=a(l.a,{icon:!1,class:r.a.header,href:"https://www.opendota.com/players/"+e.steam.steamid32},a("img",{class:r.a.avatar,src:e.steam.avatar,alt:""})," ",e.steam.persona_name),c=a(o.Fragment,null,a("div",{className:r.a.wl},a("div",{className:r.a.wins},e.steam.dota.wins),a("div",{className:r.a.captionWins},"vittorie"),a("div",{className:r.a.dash}," - "),a("div",{className:r.a.losses},e.steam.dota.losses),a("div",{className:r.a.captionLosses},"sconfitte")),a("div",{className:r.a.rank},s)),m=a("img",{src:"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/570/0bbb630d63262dd66d2fdd0f7d37e8661a410075.jpg",alt:"",title:"Dota 2"});return a(n.a,{class:r.a.dota,header:i,body:c,user:e.user,icon:m})}}).call(this,s("hosL").h)},bjfB:function(a){a.exports={mini:"mini__3Nq8A",header:"header__3WNkN",frame:"frame__kVCu0",grey:"grey__3DZsH",white:"white__1NFUT",green:"green__3aHhv",blue:"blue__1HAdS",red:"red__1dTNq",avatar:"avatar__ezHMW",level:"level__3vNHg",text:"text__1Zjts",value:"value__SOp5-",ranks:"ranks__bVFW9",rank:"rank__3waEw",img:"img__2M2ZT",queue:"queue__3xZzv",name:"name__34k_K"}},cgGN:function(a){a.exports={brawlhalla:"brawlhalla__MdYgm",header:"header__3ZfZL",avatar:"avatar__HmsdG",section1v1:"section1v1__2F3ZK",section2v2:"section2v2__3jfoo",caption:"caption__1t1S6",value:"value__VHZAm",mmr:"mmr__2ZQCm"}},idsZ:function(a,e,s){"use strict";(function(a){var t=s("7CvW"),r=s.n(t),n=s("mbOI"),l=s("BprO");e.a=function(e){return a("div",{class:Object(n.q)(r.a.mini,e.class)},a("div",{class:r.a.top},a("div",null,a(l.a,{data:e.user,class:r.a.user},e.user.username)),a("div",{class:r.a.icon},e.icon)),a("div",{class:r.a.header},e.header),a("div",{class:r.a.body},e.body))}}).call(this,s("hosL").h)},kDMr:function(a){a.exports={mini:"mini__ZSCDm",icon:"icon__2XD9k",header:"header__3L9nQ",avatar:"avatar__22jfq",gamemode:"gamemode__1I1IE",none:"none__4aLkR",easy:"easy__3YicP",normal:"normal__FtniB",hard:"hard__3sGx_",insane:"insane__216V4",expert:"expert__2Gy4R","expert-plus":"expert-plus__36cDc",gmicon:"gmicon__3XnS5",performance:"performance__3CfN4",pp:"pp__23aID",fae:"fae__q9KE0",standard:"standard__jRaNc",catch:"catch__1WPDj",mania:"mania__pXC63",taiko:"taiko__2CiV1"}},lZnv:function(a,e,s){"use strict";(function(a){var t=s("bjfB"),r=s.n(t),n=s("idsZ"),l=s("nnxo"),o=s("hosL"),i=s("mbOI");e.a=function(e){var s,t=e.league.summoner_level%100;e.league.summoner_level<30?s=r.a.grey:t>=0&&t<25?s=r.a.white:t>=25&&t<50?s=r.a.green:t>=50&&t<75?s=r.a.blue:t>=75&&(s=r.a.red);var c=a(l.a,{icon:!1,class:r.a.header,href:"https://euw.op.gg/summoner/userName="+e.league.summoner_name},a("div",{class:Object(i.q)(r.a.frame,s)},a("img",{className:r.a.avatar,src:"http://ddragon.leagueoflegends.com/cdn/10.14.1/img/profileicon/"+e.league.profile_icon_id+".png",alt:""}))," ",e.league.summoner_name),m=a("div",{className:r.a.level},a("span",{class:r.a.text},"Livello"),a("span",{class:r.a.value},e.league.summoner_level)),u=a("div",{class:r.a.rank},a("img",{class:r.a.img,alt:"",src:"https://ryg.s3.fr-par.scw.cloud/resources/lol/Emblem_"+e.league.soloq.tier+".png"}),a("div",{class:r.a.queue},"Solo/Duo"),a("div",{class:r.a.name},null!==e.league.soloq.wins?e.league.soloq.tier+" "+e.league.soloq.rank:"-")),p=a("div",{className:r.a.rank},a("img",{class:r.a.img,alt:"",src:"https://ryg.s3.fr-par.scw.cloud/resources/lol/Emblem_"+e.league.flexq.tier+".png"}),a("div",{className:r.a.queue},"Flex"),a("div",{className:r.a.name},null!==e.league.flexq.wins?e.league.flexq.tier+" "+e.league.flexq.rank:"-")),d=a(o.Fragment,null,m,a("div",{class:r.a.ranks},u,p)),_=a("img",{src:"https://ryg.s3.fr-par.scw.cloud/resources/lol/icon.webp",alt:"",title:"League of Legends"});return a(n.a,{class:r.a.mini,header:c,body:d,user:e.user,icon:_})}}).call(this,s("hosL").h)},mAIj:function(a,e,s){"use strict";(function(a){var t=s("HIp8"),r=s.n(t),n=s("idsZ"),l=s("hosL"),o=s("mbOI");s("nnxo");e.a=function(e){var s=e.steam.trionfistatus,t=a(o.a,{class:r.a.header,href:"/2020/o"},a("img",{class:r.a.avatar,src:e.steam.avatar,alt:""})," ",e.steam.persona_name),i=[];for(var c in s.trionfi)if(s.trionfi.hasOwnProperty(c)){var m=s.trionfi[c],u=m.completed_on?r.a.lit:r.a.dim,p=null;"XXI"===m.roman&&(p=r.a.zawarudo);var d=a("div",{class:Object(o.q)(r.a.tarot,u,p),title:m.roman+" - "+m.name},m.title);i.push(d)}var _=a(l.Fragment,null,a("div",{className:r.a.tarotList},i)),v=a("img",{src:"https://ryg.s3.fr-par.scw.cloud/resources/halloween2020/logo.png",alt:"",title:"Trionfi Reali"});return a(n.a,{class:r.a.halloween,header:t,body:_,user:e.user,icon:v})}}).call(this,s("hosL").h)},nGxy:function(a){a.exports={dota:"dota__3pJBj",header:"header__3B2M6",avatar:"avatar__3cqjg",wl:"wl__-HZG2",wins:"wins__koweC",dash:"dash__BGD3q",losses:"losses__2jdlx",captionWins:"captionWins__2LS3B",captionLosses:"captionLosses__2wpSN",rank:"rank__72K9d",name:"name__3uDCQ",fullMedal:"fullMedal__3OZvt",stars:"stars__l04cB",medal:"medal__2JwEq"}}}]);
//# sourceMappingURL=route-Leaderboards.chunk.d0886.js.map