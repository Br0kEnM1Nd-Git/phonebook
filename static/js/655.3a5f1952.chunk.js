(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[655],{890:(t,e,n)=>{"use strict";n.d(e,{Z:()=>u});var r=n(420),o=n(95),i=n.n(o),c=n(155),s=n(201),a=n(184);const u=()=>{const t=(0,r.I0)();return(0,a.jsxs)("form",{className:s.Z.filterForm,children:[(0,a.jsx)("label",{htmlFor:"filter",children:"Find contacts:"}),(0,a.jsx)("input",{type:"text",name:"filter",id:"filter",onChange:i()((e=>(e=>{const n=e.target.value;t((0,c.C)(n))})(e)),200),autoComplete:"off"})]})}},464:(t,e,n)=>{"use strict";n.d(e,{C:()=>l});var r=n(420),o=n(829),i=n(201),c=n(517),s=n(184);const a=t=>{let{contact:{id:e,name:n,phone:o}}=t;const i=(0,r.I0)();return(0,s.jsxs)("li",{children:[(0,s.jsxs)("span",{children:[n,": ",o]}),(0,s.jsx)("button",{onClick:()=>i((0,c.xX)(e)),children:"Delete"})]})},u=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e){const e=t.length-5;return t.slice(e).map((t=>(0,s.jsx)(a,{contact:t},t.id)))}return t.map((t=>(0,s.jsx)(a,{contact:t},t.id)))},l=t=>{let{recent:e=!1}=t;const n=(0,r.v9)(o.hF),c=(0,r.v9)(o.AD),a=(0,r.v9)(o.M6),l=(0,r.v9)(o.ry);return(0,s.jsxs)(s.Fragment,{children:[e&&!c&&(0,s.jsx)("p",{children:"Recent contacts"}),(0,s.jsx)("ul",{className:i.Z.contactsList,children:a?(0,s.jsx)("p",{children:"Loading..."}):l?(0,s.jsx)("p",{children:l}):c?u(n):u(n,e)})]})}},655:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});var r=n(890),o=n(464),i=n(420),c=n(155),s=n(184);const a=()=>((0,i.I0)()((0,c.C)("")),(0,s.jsxs)("div",{children:[(0,s.jsx)(r.Z,{}),(0,s.jsx)(o.C,{})]}))},829:(t,e,n)=>{"use strict";n.d(e,{AD:()=>o,Af:()=>i,M6:()=>s,hF:()=>c,ry:()=>a});var r=n(553);const o=t=>t.filter,i=t=>t.contacts,c=(0,r.P1)([i,o],((t,e)=>{let{contacts:n}=t;return n.filter((t=>{let{name:n,phone:r}=t;return!e||(n.toLowerCase().includes(e.toLowerCase())||r.includes(e))}))})),s=t=>t.contacts.isLoading,a=t=>t.contacts.error},95:(t,e,n)=>{var r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,a="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,u="object"==typeof self&&self&&self.Object===Object&&self,l=a||u||Function("return this")(),f=Object.prototype.toString,d=Math.max,p=Math.min,v=function(){return l.Date.now()};function h(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==f.call(t)}(t))return NaN;if(h(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=h(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=i.test(t);return n||c.test(t)?s(t.slice(2),n?2:8):o.test(t)?NaN:+t}t.exports=function(t,e,n){var r,o,i,c,s,a,u=0,l=!1,f=!1,j=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function x(e){var n=r,i=o;return r=o=void 0,u=e,c=t.apply(i,n)}function b(t){return u=t,s=setTimeout(y,e),l?x(t):c}function g(t){var n=t-a;return void 0===a||n>=e||n<0||f&&t-u>=i}function y(){var t=v();if(g(t))return C(t);s=setTimeout(y,function(t){var n=e-(t-a);return f?p(n,i-(t-u)):n}(t))}function C(t){return s=void 0,j&&r?x(t):(r=o=void 0,c)}function _(){var t=v(),n=g(t);if(r=arguments,o=this,a=t,n){if(void 0===s)return b(a);if(f)return s=setTimeout(y,e),x(a)}return void 0===s&&(s=setTimeout(y,e)),c}return e=m(e)||0,h(n)&&(l=!!n.leading,i=(f="maxWait"in n)?d(m(n.maxWait)||0,e):i,j="trailing"in n?!!n.trailing:j),_.cancel=function(){void 0!==s&&clearTimeout(s),u=0,r=a=o=s=void 0},_.flush=function(){return void 0===s?c:C(v())},_}},201:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r={filterForm:"Phonebook_filterForm__X+vXc",contactsList:"Phonebook_contactsList__CiGrI"}}}]);
//# sourceMappingURL=655.3a5f1952.chunk.js.map