(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[729],{5768:function(e,s,t){Promise.resolve().then(t.bind(t,1912))},1912:function(e,s,t){"use strict";var l=t(7437),a=t(2265),i=t(6648);s.default=()=>{let[e,s]=(0,a.useState)(!1),[t,r]=(0,a.useState)(null),[n,c]=(0,a.useState)(""),[d,o]=(0,a.useState)({customerA:"10:00 AM",customerB:"12:00 PM",customerC:"2:00 PM"}),[x,m]=(0,a.useState)(3e3),[h,u]=(0,a.useState)({customerA:20,customerB:20,customerC:20}),[p,g]=(0,a.useState)(["customerA","customerB","customerC"]),b=e=>{r(e),s(!0)},j=()=>{s(!1),c("")},f=e=>{m(x+h[e]),g(s=>s.filter(s=>s!==e))};return(0,l.jsxs)("div",{className:"h-screen flex flex-col p-6",children:[(0,l.jsxs)("header",{className:"flex justify-between items-center mb-6",children:[(0,l.jsx)("h1",{className:"text-3xl font-bold",children:"Postman Dashboard"}),(0,l.jsxs)("div",{className:"rewards-card bg-white shadow-lg rounded-lg p-4 flex items-center",children:[(0,l.jsx)(i.default,{src:"/assets/rewards.jpeg",alt:"Rewards Icon",width:48,height:48,className:"mr-3"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"text-gray-500",children:"Rewards Points"}),(0,l.jsx)("h2",{id:"rewards-points",className:"text-2xl font-bold text-yellow-500",children:x})]})]})]}),(0,l.jsxs)("main",{className:"flex flex-1",children:[(0,l.jsxs)("section",{id:"map-card",className:"bg-white rounded-lg shadow-md p-4 mb-6 max-w-xl mx-auto mr-8",children:[(0,l.jsx)("h2",{className:"text-xl font-semibold mb-4",children:"Next Delivery"}),(0,l.jsx)("div",{className:"map-container bg-gray-200 rounded-lg overflow-hidden",children:(0,l.jsx)(i.default,{src:"/assets/postman.png",alt:"Map showing direction for next delivery",width:500,height:300,className:"w-full h-auto",style:{marginLeft:"20px"}})})]}),(0,l.jsxs)("section",{id:"next-deliveries",className:"flex-1 bg-white rounded-lg shadow-md p-6",children:[(0,l.jsx)("h2",{className:"text-xl font-semibold mb-4",children:"AI Suggested Next Deliveries"}),(0,l.jsx)("ul",{className:"space-y-4",children:p.map(e=>(0,l.jsxs)("li",{className:"flex justify-between items-center",children:[(0,l.jsxs)("span",{children:["Delivery to ",e.charAt(0).toUpperCase()+e.slice(1)," at"," ",(0,l.jsx)("span",{className:"delivery-time text-gray-500",children:d[e]}),","," ",h[e]," points"]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("button",{className:"bg-blue-500 text-white px-4 py-2 rounded mr-2",onClick:()=>b(e),children:"Reschedule"}),(0,l.jsx)("button",{className:"bg-green-500 text-white px-4 py-2 rounded",onClick:()=>f(e),children:"Complete"})]})]},e))})]})]}),e&&(0,l.jsx)("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center",children:(0,l.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[(0,l.jsx)("h3",{className:"text-lg font-bold mb-4",children:"Reschedule Delivery"}),(0,l.jsx)("p",{children:"Select a new time for the delivery:"}),(0,l.jsx)("input",{type:"time",value:n,onChange:e=>c(e.target.value),className:"mt-4 p-2 border rounded"}),(0,l.jsxs)("div",{className:"mt-4 space-x-2",children:[(0,l.jsx)("button",{className:"bg-blue-500 text-white px-4 py-2 rounded",onClick:()=>{n&&t&&(o(e=>({...e,[t]:n})),j())},children:"Save Time"}),(0,l.jsx)("button",{className:"bg-gray-500 text-white px-4 py-2 rounded",onClick:j,children:"Cancel"})]})]})})]})}}},function(e){e.O(0,[648,971,23,744],function(){return e(e.s=5768)}),_N_E=e.O()}]);