(this.webpackJsonptime=this.webpackJsonptime||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var s=n(1),c=n(5),i=n.n(c),a=n(3),r=n(0);function l(t){var e=t.start,n=t.stop,s=t.wait,c=t.reset,i=t.styles,a=t.disabled;return Object(r.jsxs)("div",{className:i.btns,children:[Object(r.jsx)("button",{className:i.btn,onClick:function(){return e()},children:"Start"}),Object(r.jsx)("button",{className:i.btn,onClick:function(){return n()},children:"Stop"}),Object(r.jsx)("button",{className:i.btn,onClick:function(){return s()},children:"Wait"}),Object(r.jsx)("button",{disabled:"true"!==a,className:i.btn,onClick:function(){return c()},children:"Reset"})]})}function u(t){var e=t.time,n=t.styles;return Object(r.jsxs)("div",{className:n.time,children:[Object(r.jsxs)("span",{children:[e.h>=10?e.h:"0"+e.h,":"]}),Object(r.jsxs)("span",{children:[e.m>=10?e.m:"0"+e.m,":"]}),Object(r.jsx)("span",{children:e.s>=10?e.s:"0"+e.s})]})}var o=n(2),j=n.n(o);function b(){var t=Object(s.useState)({s:0,m:0,h:0}),e=Object(a.a)(t,2),n=e[0],c=e[1],i=Object(s.useState)(),o=Object(a.a)(i,2),b=o[0],d=o[1],m=Object(s.useState)(),h=Object(a.a)(m,2),O=h[0],v=h[1];function f(){setTimeout((function(){return y()}),300),v("true"),d(setInterval(y,1e3))}var p=n.h,x=n.m,_=n.s;function y(){return 60===_&&(x++,_=0),60===x&&(p++,x=0),console.log(_),_++,c({s:_,m:x,h:p})}return Object(r.jsxs)("div",{className:j.a.content,children:[Object(r.jsx)("div",{children:Object(r.jsx)(u,{time:n,styles:j.a})}),Object(r.jsx)("div",{children:Object(r.jsx)(l,{disabled:O,styles:j.a,start:f,stop:function(){clearInterval(b),c({s:0,m:0,h:0})},wait:function(){clearInterval(b)},reset:function(){clearInterval(b),_=0,x=0,f(),v("false")}})})]})}var d=function(){return Object(r.jsx)(b,{})};i.a.render(Object(r.jsx)(d,{}),document.getElementById("root"))},2:function(t,e,n){t.exports={content:"Display_content__3Fz4s",time:"Display_time__Hj3ei",btn:"Display_btn__2M_A7",active:"Display_active__aUce9",unActive:"Display_unActive__LTeDh"}}},[[11,1,2]]]);
//# sourceMappingURL=main.063469b1.chunk.js.map