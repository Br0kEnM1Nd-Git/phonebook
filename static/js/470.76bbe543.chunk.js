"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[470],{464:(e,t,n)=>{n.d(t,{C:()=>m});var r=n(420),o=n(829),s=n(690),c=n(517),a=n(184);const i=e=>{let{contact:{id:t,name:n,phone:o}}=e;const s=(0,r.I0)();return(0,a.jsxs)("li",{children:[(0,a.jsxs)("span",{children:[n,": ",o]}),(0,a.jsx)("button",{onClick:()=>s((0,c.xX)(t)),children:"Delete"})]})},l=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t){const t=e.length-5;return e.slice(t).map((e=>(0,a.jsx)(i,{contact:e},e.id)))}return e.map((e=>(0,a.jsx)(i,{contact:e},e.id)))},m=e=>{let{recent:t=!1}=e;const n=(0,r.v9)(o.hF),c=(0,r.v9)(o.AD),i=(0,r.v9)(o.M6),m=(0,r.v9)(o.ry);return(0,a.jsxs)(a.Fragment,{children:[t&&!c&&(0,a.jsx)("h2",{children:"Recent contacts"}),(0,a.jsx)("ul",{className:s.Z.contactsList,children:i?(0,a.jsx)("p",{children:"Loading..."}):m?(0,a.jsx)("p",{children:m}):c?l(n):l(n,t)})]})}},470:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var r=n(420),o=n(686),s=n.n(o),c=n(829),a=n(517);const i="PhonebookForm_contactsForm__1hcL0";var l=n(184);const m=()=>{const{contacts:e}=(0,r.v9)(c.Af),t=(0,r.I0)();return(0,l.jsxs)("form",{className:i,onSubmit:n=>{n.preventDefault();const r=n.target,o=r.name.value,c=r.number.value,i=c.replace(/[\s-]+/g,"");if(i.length>=15)return s().Notify.warning("Phone number is too big!");if(!e.every((e=>e.phone!==c)))return s().Notify.warning("This phone number is already in contacts!");if(!Number(i))return s().Notify.warning("Enter correct number!");r.reset();const l={name:o,phone:c};t((0,a.je)(l))},children:[(0,l.jsx)("label",{htmlFor:"name",children:"Name"}),(0,l.jsx)("input",{type:"text",name:"name",id:"name",required:!0,autoComplete:"name"}),(0,l.jsx)("label",{htmlFor:"number",children:"Number"}),(0,l.jsx)("input",{type:"tel",name:"number",id:"number",required:!0,autoComplete:"tel"}),(0,l.jsx)("button",{type:"submit",children:"Add contact"})]})};var h=n(464),d=n(155);const u="Home_homeContainer__Gr0Me",p="Home_formContainer__HvDrM",x="Home_contactsContainer__UeE3m",j=()=>((0,r.I0)()((0,d.C)("")),(0,l.jsxs)("div",{className:u,children:[(0,l.jsxs)("div",{className:p,children:[(0,l.jsx)("h2",{children:"Add Contact"}),(0,l.jsx)(m,{})]}),(0,l.jsx)("div",{className:x,children:(0,l.jsx)(h.C,{recent:!0})})]}))},829:(e,t,n)=>{n.d(t,{AD:()=>o,Af:()=>s,M6:()=>a,hF:()=>c,ry:()=>i});var r=n(553);const o=e=>e.filter,s=e=>e.contacts,c=(0,r.P1)([s,o],((e,t)=>{let{contacts:n}=e;return n.filter((e=>{let{name:n,phone:r}=e;return!t||(n.toLowerCase().includes(t.toLowerCase())||r.includes(t))}))})),a=e=>e.contacts.isLoading,i=e=>e.contacts.error},690:(e,t,n)=>{n.d(t,{Z:()=>r});const r={filterForm:"PhonebookList_filterForm__LrWaI",contactsList:"PhonebookList_contactsList__mkSCJ"}}}]);
//# sourceMappingURL=470.76bbe543.chunk.js.map