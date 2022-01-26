var I=Object.defineProperty,_=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var N=(e,t,o)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,f=(e,t)=>{for(var o in t||(t={}))k.call(t,o)&&N(e,o,t[o]);if(v)for(var o of v(t))M.call(t,o)&&N(e,o,t[o]);return e},b=(e,t)=>_(e,E(t));import{j as c,a as r,c as p,F as R,r as d,b as q,d as D,e as L,R as O,f as $,P as j}from"./vendor.7ef37a87.js";const F=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=o(a);fetch(a.href,n)}};F();function B(){return c("form",{className:"search",children:[r("input",{type:"text",className:"inputSearch",placeholder:"search"}),r("button",{type:"submit",children:r("ion-icon",{name:"search"})})]})}function H(){return r("section",{className:"logo-container",children:r("h2",{className:"logoname",children:"Shopping"})})}const g="@item/added",C="@item/substracted",w="@item/deleted",S="@item/allDeleted",T="@payment/showed",A="@payment/hidden",P=e=>({type:g,payload:f({},e)}),Q=e=>({type:C,payload:{id:e}}),V=e=>({type:w,payload:{id:e}}),W=()=>({type:S}),Y=()=>({type:T}),z=()=>({type:A});function G({isActive:e,items:t,total:o,substractToCart:s,addToCart:a,removeItem:n,removeAll:i,showPayment:m}){return c("section",{className:e?"cart-modal":"cart-modal modal-hidden",children:[r("div",{className:"cart-items-container",children:t.length>0?t.map(l=>c("div",{className:"cart-item",children:[r("ion-icon",{name:"trash",onClick:()=>n(l.id)}),r("img",{src:l.url,alt:l.name}),c("section",{children:[r("h3",{className:"item-title",children:l.name}),c("p",{children:["Price: $",l.price]}),c("div",{className:"item-buttons",children:[r("ion-icon",{name:"remove-circle",onClick:()=>s(l.id)}),r("div",{children:l.quantity}),r("ion-icon",{name:"add-circle",onClick:()=>a(l)})]})]})]},"item_"+l.id)):"Not products yet"}),t.length>0?c("section",{className:"cart-footer",children:[c("div",{className:"cart-total",children:[r("strong",{children:"Total: $"}),o.toFixed(2)]}),c("div",{className:"cart-buttons",children:[r("button",{className:"cart-btn btn-clear",onClick:()=>i(),children:"Remove all"}),r("button",{className:"cart-btn btn-pay",onClick:()=>m(),children:"To Pay"})]})]}):r(R,{})]})}const J=e=>({substractToCart:t=>e(Q(t)),addToCart:t=>e(P(t)),removeItem:t=>e(V(t)),removeAll:()=>e(W()),showPayment:()=>e(Y())});var K=p(null,J)(G);function U({cart:e}){const[t,o]=d.exports.useState(0),[s,a]=d.exports.useState([]),[n,i]=d.exports.useState(0),[m,l]=d.exports.useState(!1);d.exports.useEffect(()=>{a([...e])},[e]),d.exports.useEffect(()=>{let u=0,y=0;e.forEach(h=>{u+=h.quantity,y+=h.quantity*h.price}),o(u),a([...e]),i(y)},[t,e]);function x(u){u.preventDefault(),l(!m)}return c("div",{className:"icon-container",children:[c("a",{href:"#",className:"iconCart",onClick:u=>x(u),children:[r("div",{className:"counterItems",children:t}),r("ion-icon",{name:"cart"})]}),r(K,{isActive:m,total:n,items:s})]})}const X=e=>({cart:e.shop});var Z=p(X)(U);function ee(){return c("nav",{className:"navbar",children:[r(H,{}),r(B,{}),r(Z,{})]})}function te({item:e,addToCart:t}){const{name:o,price:s,url:a}=e;return c("div",{className:"card",children:[r("img",{src:a,alt:"image"}),r("div",{className:"card-title",children:o}),c("div",{className:"card-price",children:[r("strong",{children:"Price: "}),"$",s]}),r("button",{onClick:()=>t(e),children:"Add to Cart"})]})}const re=e=>({addToCart:t=>e(P(t))});var ne=p(null,re)(te);function ae(e){const{section:t}=e,{id:o,name:s,items:a}=t;return c("section",{className:"section",children:[r("h3",{children:s}),r("div",{className:"items-container",children:a.map(n=>r(ne,{item:n},n.id))})]})}const oe=[{id:+new Date,name:"Shoes",items:[{id:Math.random(36),name:"Nike",price:29.99,url:"https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw0df3fa19/products/NI_AQ2730-400/NI_AQ2730-400-1.JPG"},{id:Math.random(36),name:"Reebok",price:35.25,url:"https://ferreira.vteximg.com.br/arquivos/ids/334728-1000-1000/re_eg6422.jpg?v=637163373401200000"},{id:Math.random(36),name:"Adidas",price:29.99,url:"https://runastore.pe/media/catalog/product/cache/1/image/1600x/040ec09b1e35df139433887a97daa66f/f/3/f36921-001__2.jpg"},{id:Math.random(36),name:"Volcom",price:29.99,url:"https://www.bfgcdn.com/1500_1500_90/024-0480/volcom-draw-lo-shoe-zapatillas-deportivas-detail-6.jpg"}]}];function ce({paymentState:e,hidePayment:t}){const[o,s]=d.exports.useState([...oe]);return c("div",{className:"App",children:[r(ee,{}),o.map(a=>r(ae,{section:a},a.id)),c("section",{className:e===!0?"payment":"payment payment-hidden",children:[r("button",{className:"payment-close",onClick:()=>t(),children:"Back"}),c("form",{children:[r("h2",{className:"payment-title",children:"Information"}),r("label",{htmlFor:"identifier",children:"ID"}),r("input",{type:"text",id:"identifier"}),r("label",{htmlFor:"user-name",children:"Name"}),r("input",{type:"text",id:"user-name"}),r("label",{htmlFor:"last-name",children:"Lastname"}),r("input",{type:"text",id:"last-name"}),r("input",{type:"submit",value:"Send"})]})]})]})}const se=e=>({paymentState:e.pay}),ie=e=>({hidePayment:()=>e(z())});var le=p(se,ie)(ce);function de(e=[],t){switch(t.type){case g:return e.find(n=>n.id===t.payload.id)?[...e.map(i=>(i.id==t.payload.id&&(i.quantity=i.quantity+1),i))]:[...e,b(f({},t.payload),{quantity:1})];case C:return[...e.map(n=>(n.id==t.payload.id&&(n.quantity>1?n.quantity=n.quantity-1:n.quantity),n))];case w:return[...e.filter(n=>n.id!==t.payload.id)];case S:return[];default:return e}}function ue(e=!1,t){return t.type===T?!0:(t.type===A,!1)}const me=q({shop:de,pay:ue}),pe=D(me,L());O.render(r($.StrictMode,{children:r(j,{store:pe,children:r(le,{})})}),document.getElementById("root"));
