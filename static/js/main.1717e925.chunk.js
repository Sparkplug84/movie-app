(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),i=c(8),a=c.n(i),r=(c(16),c(7)),o=c.n(r),j=c(9),l=c(4),b=(c(18),c(0));var d=function(e){return Object(b.jsx)("div",{className:"movies__container",children:e.movies.map((function(e,t){return Object(b.jsxs)("div",{className:"movie",children:[Object(b.jsx)("img",{className:"movie__image",src:"N/A"!==e.Poster?e.Poster:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png",alt:e.Title}),Object(b.jsxs)("div",{className:"movie__info",children:[Object(b.jsx)("p",{children:Object(b.jsx)("strong",{children:"Movie Title:"})}),Object(b.jsx)("p",{children:e.Title}),Object(b.jsx)("p",{children:Object(b.jsx)("strong",{children:"Release Year:"})}),Object(b.jsx)("p",{children:e.Year}),Object(b.jsx)("p",{children:Object(b.jsx)("strong",{children:"IMDB ID:"})}),Object(b.jsx)("p",{children:e.imdbID}),Object(b.jsxs)("a",{href:"https://www.imdb.com/title/".concat(e.imdbID,"/"),target:"_blank",rel:"noreferrer",children:["View details on ",Object(b.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png",alt:"IMDB"})]})]}),Object(b.jsx)("div",{className:"movie__details",children:Object(b.jsx)("h3",{children:e.Title})})]})}))})},u=c(10),h=c(11);c(25);var m=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(n.useRef)();return Object(b.jsx)("div",{className:"search__container",children:Object(b.jsxs)("div",{className:"search ".concat(c?"active":null),children:[Object(b.jsx)("input",{type:"text",className:"search__input",placeholder:"Search for a movie...",ref:i}),Object(b.jsx)("button",{className:"search__button",onClick:function(){s(!c),i.current.focus()},children:Object(b.jsx)(u.a,{icon:h.a})})]})})};c(26);var p=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],i=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.omdbapi.com/?s=back+to+the+future&apikey=aa19cb4",e.next=3,fetch("https://www.omdbapi.com/?s=back+to+the+future&apikey=aa19cb4");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,console.log(c),s(c.Search);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(m,{}),Object(b.jsx)(d,{movies:c})]})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,28)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),O()}},[[27,1,2]]]);
//# sourceMappingURL=main.1717e925.chunk.js.map