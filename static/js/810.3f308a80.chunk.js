"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[810],{464:(e,t,n)=>{n.d(t,{C:()=>m});var r=n(420),o=n(829),s=n(201),c=n(517),a=n(184);const i=e=>{let{contact:{id:t,name:n,phone:o}}=e;const s=(0,r.I0)();return(0,a.jsxs)("li",{children:[(0,a.jsxs)("span",{children:[n,": ",o]}),(0,a.jsx)("button",{onClick:()=>s((0,c.xX)(t)),children:"Delete"})]})},l=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t){const t=e.length-5;return e.slice(t).map((e=>(0,a.jsx)(i,{contact:e},e.id)))}return e.map((e=>(0,a.jsx)(i,{contact:e},e.id)))},m=e=>{let{recent:t=!1}=e;const n=(0,r.v9)(o.hF),c=(0,r.v9)(o.AD),i=(0,r.v9)(o.M6),m=(0,r.v9)(o.ry);return(0,a.jsx)("ul",{className:s.Z.contactsList,children:i?(0,a.jsx)("p",{children:"Loading..."}):m?(0,a.jsx)("p",{children:m}):c?l(n):l(n,t)})}},810:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var r=n(420),o=n(686),s=n.n(o),c=n(829),a=n(517);const i="PhonebookForm_contactsForm__1hcL0";var l=n(184);const m=()=>{const{contacts:e}=(0,r.v9)(c.Af),t=(0,r.I0)();return(0,l.jsxs)("form",{className:i,onSubmit:n=>{n.preventDefault();const r=n.target,o=r.name.value,c=r.number.value,i=c.replace(/[\s-]+/g,"");if(i.length>=15)return s().Notify.warning("Phone number is too big!");if(!e.every((e=>e.phone!==c)))return s().Notify.warning("This phone number is already in contacts!");if(!Number(i))return s().Notify.warning("".concat(c," is not a number!"));r.reset();const l={name:o,phone:c};t((0,a.je)(l))},children:[(0,l.jsx)("label",{htmlFor:"name",children:"Name"}),(0,l.jsx)("input",{type:"text",name:"name",id:"name",required:!0,autoComplete:"name"}),(0,l.jsx)("label",{htmlFor:"number",children:"Number"}),(0,l.jsx)("input",{type:"tel",name:"number",id:"number",required:!0,autoComplete:"tel"}),(0,l.jsx)("button",{type:"submit",children:"Add contact"})]})};var u=n(95),h=n.n(u),d=n(155),p=n(201);const f=()=>{const e=(0,r.I0)();return(0,l.jsxs)("form",{className:p.Z.filterForm,children:[(0,l.jsx)("label",{htmlFor:"filter",children:"Find contacts:"}),(0,l.jsx)("input",{type:"text",name:"filter",id:"filter",onChange:h()((t=>(t=>{const n=t.target.value;e((0,d.C)(n))})(t)),200),autoComplete:"off"})]})};var x=n(464);const j=()=>((0,r.I0)()((0,d.C)("")),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{children:"Phonebook"}),(0,l.jsx)(m,{}),(0,l.jsx)("h2",{children:"Contacts"}),(0,l.jsx)(f,{}),(0,l.jsx)(x.C,{recent:!0})]}))},829:(e,t,n)=>{n.d(t,{AD:()=>o,Af:()=>s,M6:()=>a,hF:()=>c,ry:()=>i});var r=n(553);const o=e=>e.filter,s=e=>e.contacts,c=(0,r.P1)([s,o],((e,t)=>{let{contacts:n}=e;return n.filter((e=>{let{name:n,phone:r}=e;return!t||(n.toLowerCase().includes(t.toLowerCase())||r.includes(t))}))})),a=e=>e.contacts.isLoading,i=e=>e.contacts.error},201:(e,t,n)=>{n.d(t,{Z:()=>r});const r={filterForm:"Phonebook_filterForm__X+vXc",contactsList:"Phonebook_contactsList__CiGrI"}}}]);
//# sourceMappingURL=810.3f308a80.chunk.js.map