(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{22:function(e,t,n){e.exports=n(64)},27:function(e,t,n){},28:function(e,t,n){},46:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),i=(n(27),n(28),n(4)),l=n.n(i),s=n(5),u=n(3),m=n(17),v=n.n(m).a.create({baseURL:"https://api.themoviedb.org/3"}),d=(n(46),n(18)),f=n(21),h=n.n(f);var p=function(e){var t=e.title,n=e.fetchUrl,c=e.isLargeRow,o=Object(a.useState)([]),i=Object(u.a)(o,2),m=i[0],f=i[1],p=Object(a.useState)(""),g=Object(u.a)(p,2),b=g[0],_=g[1];return Object(a.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(n);case 2:return t=e.sent,f(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,t),r.a.createElement("div",{className:"row__posters"},m.map((function(e){return r.a.createElement("img",{key:e.id,onClick:function(){return function(e){b?_(""):h()((null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.original_name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);_(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row__poster ".concat(c&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(c?e.poster_path:e.backdrop_path),alt:e.name})}))),b&&r.a.createElement(d.a,{videoId:b,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}))},g="b648e1276cae8d80c6d26a80bd27cb75",b={fetchTrending:"/trending/all/week?api_key=".concat(g,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(g,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(g,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(g,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(g,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(g,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(g,"&with_genres=99")};n(62);var _=function(){var e,t,n=Object(a.useState)([]),c=Object(u.a)(n,2),o=c[0],i=c[1];return Object(a.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(b.fetchNetflixOriginals);case 2:return t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(o),r.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url(\n          "https://image.tmdb.org/t/p/original/'.concat(null===o||void 0===o?void 0:o.backdrop_path,'"\n        )'),backgroundPosition:"center center"}},r.a.createElement("div",{className:"banner__contents"},r.a.createElement("h1",{className:"banner__title"},(null===o||void 0===o?void 0:o.title)||(null===o||void 0===o?void 0:o.name)||(null===o||void 0===o?void 0:o.original_name)),r.a.createElement("div",{className:"banner__buttons"},r.a.createElement("button",{className:"banner__button"},"Play"),r.a.createElement("button",{className:"banner__button"},"My List")),r.a.createElement("h1",{className:"banner__description"},(e=null===o||void 0===o?void 0:o.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e))),r.a.createElement("div",{className:"banner--fadeBottom"}))};n(63);var w=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?c(!0):c(!1)})),function(){window.removeEventListener("scroll")}}),[]),r.a.createElement("div",{className:"nav ".concat(n&&"nav__black")},r.a.createElement("img",{className:"nav__logo",src:"netflix-logo-removebg.png",alt:"Netflix Logo"}),r.a.createElement("img",{className:"nav__avatar",src:"netflixAvtar.png",alt:"Netflix Logo"}))};var E=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(w,null),r.a.createElement(_,null),r.a.createElement(p,{title:"Netflix Original",fetchUrl:b.fetchNetflixOriginals,isLargeRow:!0}),r.a.createElement(p,{title:"Trending Now",fetchUrl:b.fetchTrending}),r.a.createElement(p,{title:"Top Rated",fetchUrl:b.fetchTopRated}),r.a.createElement(p,{title:"Action Movies",fetchUrl:b.fetchActionMovies}),r.a.createElement(p,{title:"Comedy Movies",fetchUrl:b.fetchComedyMovies}),r.a.createElement(p,{title:"Horror Movies",fetchUrl:b.fetchHorrorMovies}),r.a.createElement(p,{title:"Romance Movies",fetchUrl:b.fetchRomanceMovies}),r.a.createElement(p,{title:"Documentaries",fetchUrl:b.fetchDocumentaries}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.1e3152f2.chunk.js.map