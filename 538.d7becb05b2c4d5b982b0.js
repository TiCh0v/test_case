"use strict";(self.webpackChunktest_case=self.webpackChunktest_case||[]).push([[538],{786:(e,t,n)=>{n.d(t,{_:()=>a,n:()=>i});var r=n(508),a=function(e){return e.posts.posts},i=function(e){return(0,r.Mz)([a],(function(t){return t.find((function(t){return t.id===e}))}))}},538:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(848),a=n(540),i=n(468),l=n(786),s=n(525);const o=function(e){var t=e.onSearch,n=e.onFilterByLike,i=(0,a.useState)(""),l=i[0],s=i[1],o=(0,a.useState)("all"),c=o[0],u=o[1];return(0,r.jsxs)("div",{className:"filter-search",children:[(0,r.jsx)("input",{type:"text",placeholder:"Search posts...",value:l,onChange:function(e){var n=e.target.value;s(n),t(n)},className:"searchbar"}),(0,r.jsxs)("select",{value:c,onChange:function(e){var t=e.target.value;u(t),n(t)},children:[(0,r.jsx)("option",{value:"all",children:"All"}),(0,r.jsx)("option",{value:"liked",children:"Liked"})]})]})},c=function(){var e=(0,a.useState)(1),t=e[0],n=e[1],c=(0,a.useState)(""),u=c[0],h=c[1],d=(0,a.useState)("all"),v=d[0],f=d[1],g=(0,i.d4)(l._).filter((function(e){var t=e.title.toLowerCase().includes(u.toLowerCase()),n="all"===v||"liked"===v&&e.like;return t&&n})),p=10*(t-1),m=g.slice(p,p+10),w=Math.ceil(g.length/10);return(0,r.jsxs)("div",{className:"page_wrapper",children:[(0,r.jsx)(o,{onSearch:function(e){h(e),n(1)},onFilterByLike:function(e){f(e),n(1)}}),m.map((function(e){return(0,r.jsx)(s.A,{title:e.title,body:e.body,like:e.like,photoUrl:e.photoUrl,thumbnailUrl:e.thumbnailUrl,id:e.id},e.id)})),(0,r.jsx)("div",{className:"page_buttons",children:Array.from({length:w},(function(e,t){return t+1})).map((function(e){return(0,r.jsx)("button",{onClick:function(){return function(e){n(e)}(e)},disabled:e===t,children:e},e)}))})]})}},525:(e,t,n)=>{n.d(t,{A:()=>y});var r,a=n(848),i=n(540),l=n(767),s=n(807),o=n(75);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(null,arguments)}const u=function(e){return i.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",className:"heart-fill_svg__bi heart-fill_svg__bi-heart-fill",viewBox:"0 0 16 16"},e),r||(r=i.createElement("path",{fillRule:"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"})))};var h;function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(null,arguments)}const v=function(e){return i.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",className:"heart_svg__bi heart_svg__bi-heart",viewBox:"0 0 16 16"},e),h||(h=i.createElement("path",{d:"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"})))};var f,g;function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(null,arguments)}const m=function(e){return i.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",className:"pencil-square_svg__bi pencil-square_svg__bi-pencil-square",viewBox:"0 0 16 16"},e),f||(f=i.createElement("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"})),g||(g=i.createElement("path",{fillRule:"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"})))};var w;function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(null,arguments)}const _=function(e){return i.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",className:"trash-fill_svg__bi trash-fill_svg__bi-trash-fill",viewBox:"0 0 16 16"},e),w||(w=i.createElement("path",{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"})))},j=function(){return(0,a.jsx)("div",{className:"skeleton"})};var x=function(){return x=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},x.apply(this,arguments)};const y=function(e){var t=e.id,n=e.title,r=e.body,c=e.like,h=(e.photoUrl,e.thumbnailUrl),d=(0,i.useState)(!1),f=d[0],g=d[1],p=(0,l.Zp)(),w=(0,s.j)(),b=function(e){var n;e.stopPropagation(),w((0,o.GB)(t)),n=JSON.parse(localStorage.getItem("posts")||"[]").map((function(e){return e.id===t?x(x({},e),{like:!c}):e})),localStorage.setItem("posts",JSON.stringify(n))};return(0,a.jsxs)("div",{className:"card",onClick:function(){p("/product/".concat(t))},children:[(0,a.jsxs)("div",{className:"card_image-container",children:[!f&&(0,a.jsx)(j,{}),h&&(0,a.jsx)("img",{src:h,alt:"",className:"card_image-thumbnail",onLoad:function(){return g(!0)},onError:function(){return g(!1)}})]}),(0,a.jsxs)("div",{className:"card_innerContainer",children:[(0,a.jsx)("p",{className:"card_title",children:n}),(0,a.jsx)("p",{className:"card_body",children:r})]}),(0,a.jsxs)("div",{className:"card_buttonsContainer",children:[c?(0,a.jsx)(u,{width:20,height:20,color:"red",onClick:b}):(0,a.jsx)(v,{width:20,height:20,color:"gray",onClick:b}),(0,a.jsx)(_,{width:20,height:20,color:"gray",onClick:function(e){e.stopPropagation(),w((0,o.ys)(t));var n=JSON.parse(localStorage.getItem("posts")||"[]").filter((function(e){return e.id!==t}));localStorage.setItem("posts",JSON.stringify(n))}}),(0,a.jsx)(m,{width:20,height:20,color:"gray",onClick:function(e){e.stopPropagation(),p("/edit/".concat(t))}})]})]})}}}]);