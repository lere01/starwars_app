(this.webpackJsonpstarwars=this.webpackJsonpstarwars||[]).push([[0],{34:function(e,t,a){e.exports=a(84)},39:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),i=a.n(l),c=(a(39),a(40),a(32)),o=a(8),s=a(7),u=a(85),d=a(13),m=a.n(d),p=a(26),h=a(14),f=a.n(h),g=function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=a(27),v=a.n(E),y=(a(82),a(83),function(e){var t=e.url,a=e.ind,l=Object(n.useState)({}),i=Object(o.a)(l,2),c=i[0],s=i[1];Object(n.useEffect)((function(){g(t).then((function(e){return s(e)}))}),[]);return r.a.createElement(u.a,{id:a,className:"inset",style:{paddingBottom:"1rem"}},r.a.createElement("span",{id:"close-detail",onClick:function(e){e.target.parentNode.style.display="none"}},"close"),r.a.createElement("p",null,"Height: ",r.a.createElement("span",{className:"detail"},c.height)),r.a.createElement("p",null,"Mass: ",r.a.createElement("span",{className:"detail"},c.mass)),r.a.createElement("p",null,"Hair Colour: ",r.a.createElement("span",{className:"detail"},c.hair_color)," "),r.a.createElement("p",null,"Skin Colour: ",r.a.createElement("span",{className:"detail"},c.skin_color)," "),r.a.createElement("p",null,"Eye Colour: ",r.a.createElement("span",{className:"detail"},c.eye_color)))}),b=Object(s.b)((function(e){var t=e.UpdateReducer;return{data_entering:null===t||void 0===t?void 0:t.namesByUrls,check:null===t||void 0===t?void 0:t.check,isLoading:null===t||void 0===t?void 0:t.isLoading}}),{getAll:function(){return function(e){f.a.get("https://swapi.co/api/people").then((function(t){e({type:"UPDATE_ALL_PERSONS",payload:t.data.results})})).catch((function(e){return e}))}},getOne:g})((function(e){var t=e.getAll,a=e.check,l=e.data_entering,i=e.isLoading,s=Object(n.useState)(Object(c.a)(l)),d=Object(o.a)(s,2),m=d[0],p=d[1],h=0;Object(n.useEffect)((function(){t(),p(l)}),[a]);var f=function(e){e.preventDefault();var t=e.target.nextSibling.id,a=document.getElementById(t);1===h?(h=0,a.style.display="none"):(h+=1,a.style.display="block")};return r.a.createElement(u.a,{id:"main"},r.a.createElement(u.a,{id:"left"},r.a.createElement("div",{id:"list"},r.a.createElement("span",{className:"header-p"},"Your Favourite Starwars Character"),!0===i&&r.a.createElement(u.a,{style:{alignContent:"center",alignItems:"center"}},r.a.createElement(v.a,{style:{display:"inline-block",marginRight:"1rem"},type:"TailSpin",color:"#000",height:30,width:30}),r.a.createElement("h3",{style:{display:"inline"}},"Please hold on, fetching your data")),!1===i&&m.length>1&&m.map((function(e,t){return r.a.createElement(u.a,{key:t},r.a.createElement("a",{href:e[1],id:e[1],onClick:f},e[0]),r.a.createElement(y,{ind:t,url:e[1]}))})))))})),O=a(30),k=a(31),w=a(5),j=a(9),N={listOfAllNames:[],namesByUrls:[],individualRecord:[],isLoading:!0,check:!1,singleDetail:!1},L=Object(w.c)({UpdateReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_ALL_PERSONS":var a=[],n=[];return t.payload.forEach((function(e){a.push(e.name);var t=[e.name,e.url];n.push(t)})),Object(j.a)({},N,{listOfAllNames:a,namesByUrls:n,check:!0,isLoading:!1});default:return e}},GetDetail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{individualRecord:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_SINGLE_DETAILS":return Object(j.a)({},e,{individualRecord:t.payload,singleDetail:!0});default:return e}}}),S=(Object(k.createLogger)(),[O.a]);var _=w.d.apply(void 0,[w.a.apply(void 0,S)].concat([])),A=Object(w.e)(L,_);var R=function(){return r.a.createElement(s.a,{store:A},r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.9cfb2392.chunk.js.map