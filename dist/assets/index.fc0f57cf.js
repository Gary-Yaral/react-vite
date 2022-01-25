var x=Object.defineProperty,I=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var N=(e,t,o)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,p=(e,t)=>{for(var o in t||(t={}))q.call(t,o)&&N(e,o,t[o]);if(y)for(var o of y(t))R.call(t,o)&&N(e,o,t[o]);return e},g=(e,t)=>I(e,_(t));import{j as c,a as r,c as h,F as E,r as d,b as M,d as k,e as D,R as P,f as L,P as O}from"./vendor.7ef37a87.js";const $=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}};$();function j(){return c("form",{className:"search",children:[r("input",{type:"text",className:"inputSearch",placeholder:"search"}),r("button",{type:"submit",children:r("ion-icon",{name:"search"})})]})}function F(){return r("section",{className:"logo-container",children:r("h2",{className:"logoname",children:"Shopping"})})}const b="@item/added",C="@item/substracted",T="@item/deleted",w="@item/allDeleted",S=e=>({type:b,payload:p({},e)}),B=e=>({type:C,payload:{id:e}}),Q=e=>({type:T,payload:{id:e}}),V=()=>({type:w});function z({isActive:e,items:t,total:o,substractToCart:l,addToCart:n,removeItem:a,removeAll:s}){return c("section",{className:e?"cart-modal":"cart-modal modal-hidden",children:[r("div",{className:"cart-items-container",children:t.length>0?t.map(i=>c("div",{className:"cart-item",children:[r("ion-icon",{name:"trash",onClick:()=>a(i.id)}),r("img",{src:i.url,alt:i.name}),c("section",{children:[r("h3",{className:"item-title",children:i.name}),c("p",{children:["Price: $",i.price]}),c("div",{className:"item-buttons",children:[r("ion-icon",{name:"remove-circle",onClick:()=>l(i.id)}),r("div",{children:i.quantity}),r("ion-icon",{name:"add-circle",onClick:()=>n(i)})]})]})]},"item_"+i.id)):"Not products yet"}),t.length>0?c("section",{className:"cart-footer",children:[c("div",{className:"cart-total",children:[r("strong",{children:"Total: $"}),o.toFixed(2)]}),c("div",{className:"cart-buttons",children:[r("button",{className:"cart-btn btn-clear",onClick:()=>s(),children:"Remove all"}),r("button",{className:"cart-btn btn-pay",children:"To Pay"})]})]}):r(E,{})]})}const G=e=>({substractToCart:t=>e(B(t)),addToCart:t=>e(S(t)),removeItem:t=>e(Q(t)),removeAll:()=>e(V())});var H=h(null,G)(z);function J({cart:e}){const[t,o]=d.exports.useState(0),[l,n]=d.exports.useState([]),[a,s]=d.exports.useState(0),[i,f]=d.exports.useState(!1);d.exports.useEffect(()=>{n([...e])},[e]),d.exports.useEffect(()=>{let u=0,v=0;e.forEach(m=>{u+=m.quantity,v+=m.quantity*m.price}),o(u),n([...e]),s(v)},[t,e]);function A(u){u.preventDefault(),f(!i)}return c("div",{className:"icon-container",children:[c("a",{href:"#",className:"iconCart",onClick:u=>A(u),children:[r("div",{className:"counterItems",children:t}),r("ion-icon",{name:"cart"})]}),r(H,{isActive:i,total:a,items:l})]})}const K=e=>({cart:e.shop});var U=h(K)(J);function W(){return c("nav",{className:"navbar",children:[r(F,{}),r(j,{}),r(U,{})]})}function X({item:e,addToCart:t}){const{name:o,price:l,url:n}=e;return c("div",{className:"card",children:[r("img",{src:n,alt:"image"}),r("div",{className:"card-title",children:o}),c("div",{className:"card-price",children:[r("strong",{children:"Price: "}),"$",l]}),r("button",{onClick:()=>t(e),children:"Add to Cart"})]})}const Y=e=>({addToCart:t=>e(S(t))});var Z=h(null,Y)(X);function ee(e){const{section:t}=e,{id:o,name:l,items:n}=t;return c("section",{className:"section",children:[r("h3",{children:l}),r("div",{className:"items-container",children:n.map(a=>r(Z,{item:a},a.id))})]})}const te=[{id:+new Date,name:"Shoes",items:[{id:Math.random(36),name:"Nike",price:29.99,url:"https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw0df3fa19/products/NI_AQ2730-400/NI_AQ2730-400-1.JPG"},{id:Math.random(36),name:"Reebok",price:35.25,url:"https://ferreira.vteximg.com.br/arquivos/ids/334728-1000-1000/re_eg6422.jpg?v=637163373401200000"},{id:Math.random(36),name:"Adidas",price:29.99,url:"https://runastore.pe/media/catalog/product/cache/1/image/1600x/040ec09b1e35df139433887a97daa66f/f/3/f36921-001__2.jpg"},{id:Math.random(36),name:"Volcom",price:29.99,url:"https://www.bfgcdn.com/1500_1500_90/024-0480/volcom-draw-lo-shoe-zapatillas-deportivas-detail-6.jpg"}]}];function re(){const[e,t]=d.exports.useState([...te]);return c("div",{className:"App",children:[r(W,{}),e.map(o=>r(ee,{section:o},o.id))]})}function ae(e=[],t){switch(t.type){case b:return e.find(a=>a.id===t.payload.id)?[...e.map(s=>(s.id==t.payload.id&&(s.quantity=s.quantity+1),s))]:[...e,g(p({},t.payload),{quantity:1})];case C:return[...e.map(a=>(a.id==t.payload.id&&(a.quantity>1?a.quantity=a.quantity-1:a.quantity),a))];case T:return[...e.filter(a=>a.id!==t.payload.id)];case w:return[];default:return e}}const ne=M({shop:ae}),oe=k(ne,D());P.render(r(L.StrictMode,{children:r(O,{store:oe,children:r(re,{})})}),document.getElementById("root"));
