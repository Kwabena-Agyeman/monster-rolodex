(this["webpackJsonpmonster-rolodex"]=this["webpackJsonpmonster-rolodex"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(3),o=n.n(s),a=(n(12),n(4)),i=n(5),h=n(7),l=n(6),u=(n(13),n(14),n(0)),d=function(e){return Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(8*e.monster.id,"?set=set2&size=150x150"),alt:"profile"}),Object(u.jsx)("h2",{children:e.monster.name}),Object(u.jsx)("p",{children:e.monster.email})]})},j=function(e){return Object(u.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(u.jsx)(d,{monster:e},e.id)}))})},f=(n(16),function(e){var t=e.placeholder,n=e.handleChange,r=e.searchField;return Object(u.jsx)("div",{children:Object(u.jsx)("input",{className:"search",type:"search",value:r,placeholder:t,onChange:function(e){n(e)}})})}),m=(n(17),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={monsters:[],searchField:""},e.handleChange=function(t){e.setState({searchField:t.target.value})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:" Monsters Rolodex "}),Object(u.jsx)(f,{placeholder:"Search Monsters",searchField:n,handleChange:this.handleChange}),Object(u.jsx)(j,{monsters:r})]})}}]),n}(r.Component)),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.7251a804.chunk.js.map