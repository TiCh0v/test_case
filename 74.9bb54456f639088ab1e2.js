"use strict";(self.webpackChunktest_case=self.webpackChunktest_case||[]).push([[74],{74:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(848),a=n(540),o=n(807),i=n(75);const u=function(){var e=(0,o.j)(),t=(0,a.useState)(""),n=t[0],u=t[1],l=(0,a.useState)(""),s=l[0],c=l[1],f=(0,a.useState)(""),h=f[0],p=f[1],d=(0,a.useState)(""),v=d[0],b=d[1],x=function(e){return/^[a-zA-Z0-9\s\-._~:\/?#[\]@!$&'()*+,;=]*$/.test(e)};return(0,r.jsxs)("div",{className:"create-post-page",children:[(0,r.jsx)("h1",{children:"Create a New Post"}),(0,r.jsx)("div",{className:"form-group",children:(0,r.jsx)("input",{type:"text",value:n,onChange:function(e){return u(e.target.value)},placeholder:"Title"})}),(0,r.jsx)("div",{className:"form-group",children:(0,r.jsx)("textarea",{value:s,onChange:function(e){return c(e.target.value)},placeholder:"Body"})}),(0,r.jsx)("div",{className:"form-group",children:(0,r.jsx)("input",{type:"text",value:h,onChange:function(e){return p(e.target.value)},placeholder:"Image url (optional)"})}),(0,r.jsx)("button",{onClick:function(){return t=void 0,r=void 0,o=function(){var t;return function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(u){return function(l){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(i=0)),i;)try{if(n=1,r&&(a=2&u[0]?r.return:u[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,u[1])).done)return a;switch(r=0,a&&(u=[2&u[0],a.value]),u[0]){case 0:case 1:a=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!a||u[1]>a[0]&&u[1]<a[3])){i.label=u[1];break}if(6===u[0]&&i.label<a[1]){i.label=a[1],a=u;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(u);break}a[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],r=0}finally{n=a=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,l])}}}(this,(function(r){switch(r.label){case 0:if(!n||!s)return b("Title and body are required."),[2];if(!x(n)||!x(s)||h&&!x(h))return b("Invalid characters in input. Use EN symbols"),[2];r.label=1;case 1:return r.trys.push([1,4,,5]),h?[4,(a=h,new Promise((function(e,t){var n=new Image;n.onload=function(){150===n.width&&150===n.height?e(!0):e(!1)},n.onerror=t,n.src=a})))]:[3,3];case 2:if(!r.sent())return b("Image must be 150x150 pixels."),[2];r.label=3;case 3:return b(""),t={id:Date.now(),title:n,body:s,like:!1,photoUrl:"",thumbnailUrl:h||""},e((0,i.SD)(t)),u(""),c(""),p(""),[3,5];case 4:return r.sent(),b("Error checking image size."),[3,5];case 5:return[2]}var a}))},new((a=void 0)||(a=Promise))((function(e,n){function i(e){try{l(o.next(e))}catch(e){n(e)}}function u(e){try{l(o.throw(e))}catch(e){n(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,u)}l((o=o.apply(t,r||[])).next())}));var t,r,a,o},children:"Create Post"}),v&&(0,r.jsx)("p",{className:"error",children:v}),(0,r.jsx)("div",{children:"используйте изображения 150*150 для теста. к примеру любое изображение из карточки продукта"})]})}}}]);