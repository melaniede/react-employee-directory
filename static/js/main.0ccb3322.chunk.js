(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(2),s=n.n(r),i=n(12),a=n.n(i),l=(n(20),n(14));n.p,n(21),n(22);var j=function(){return Object(c.jsx)("div",{class:"navbar navbar-light bg-light text-center",children:Object(c.jsx)("h1",{children:"Employee Directory"})})};var o=function(){return Object(c.jsxs)("form",{class:"form-inline",children:[Object(c.jsx)("input",{class:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(c.jsx)("button",{class:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Search"})]})},b=n(13),h=n.n(b),u=function(){return h.a.get("https://randomuser.me/api/?results=200&nat=us")};var d=function(){return Object(c.jsx)("table",{class:"table",children:Object(c.jsx)("tbody",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Employee"}),Object(c.jsx)("th",{children:"Name"}),Object(c.jsx)("th",{children:"Email"}),Object(c.jsx)("th",{children:"Phone"})]})})})};var m=function(e){return Object(c.jsx)("table",{class:"table",children:Object(c.jsx)("tbody",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row",children:Object(c.jsx)("img",{src:e.image})}),Object(c.jsx)("td",{children:e.name}),Object(c.jsx)("td",{children:e.email}),Object(c.jsx)("td",{children:e.phone})]})})})};var O=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1];return Object(r.useEffect)((function(){u().then((function(e){return s(e.data.results)})).catch((function(e){return console.log(e)}))}),[]),console.log(n),Object(c.jsxs)("div",{children:[Object(c.jsx)(j,{}),Object(c.jsx)(o,{}),Object(c.jsx)(d,{}),n.map((function(e){return Object(c.jsx)(m,{image:e.picture.thumbnail,name:e.name.first+" "+e.name.last,email:e.email,phone:e.phone},e.id.value)})),";"]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};n(40);a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),x()}},[[41,1,2]]]);
//# sourceMappingURL=main.0ccb3322.chunk.js.map