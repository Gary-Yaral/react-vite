var S=Object.defineProperty,x=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var N=(e,r,n)=>r in e?S(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,m=(e,r)=>{for(var n in r||(r={}))A.call(r,n)&&N(e,n,r[n]);if(v)for(var n of v(r))I.call(r,n)&&N(e,n,r[n]);return e},g=(e,r)=>x(e,C(r));import{j as o,a as t,c as y,r as d,F as T,b as _,d as M,e as P,R,f as q,P as j}from"./vendor.7ef37a87.js";const D=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}};D();function k(){return o("form",{className:"search",children:[t("input",{type:"text",className:"inputSearch",placeholder:"search"}),t("button",{type:"submit",children:t("ion-icon",{name:"search"})})]})}function L(){return t("section",{children:t("h2",{className:"logoname",children:"Shopping"})})}function O({cart:e}){const[r,n]=d.exports.useState(0),[s,a]=d.exports.useState([]),[c,l]=d.exports.useState(0),[h,p]=d.exports.useState(!1);d.exports.useEffect(()=>{a([...e])},[e]),d.exports.useEffect(()=>{let i=0,f=0;e.forEach(u=>{i+=u.quantity,f+=u.quantity*u.price}),n(i),a([...e]),l(f)},[r,e]);function w(i){i.preventDefault(),p(!h)}return o("div",{className:"icon-container",children:[o("a",{href:"#",className:"iconCart",onClick:i=>w(i),children:[t("div",{className:"counterItems",children:r}),t("ion-icon",{name:"cart"})]}),o("section",{className:h?"cart-modal":"cart-modal modal-hidden",children:[t("div",{className:"cart-items-container",children:s.length>0?s.map(i=>o("div",{className:"cart-item",children:[t("ion-icon",{name:"trash"}),t("img",{src:i.url,alt:i.name}),o("section",{children:[t("h3",{className:"item-title",children:i.name}),o("p",{children:["Price: $",i.price]}),o("div",{className:"item-buttons",children:[t("ion-icon",{name:"remove-circle"}),t("div",{children:i.quantity}),t("ion-icon",{name:"add-circle"})]})]})]},"item_"+i.id)):"Not products yet"}),s.length>0?o("section",{className:"cart-footer",children:[o("div",{className:"cart-total",children:[t("strong",{children:"Total: $"}),c]}),o("div",{className:"cart-buttons",children:[t("button",{className:"cart-btn btn-clear",children:"Remove all"}),t("button",{className:"cart-btn btn-pay",children:"To Pay"})]})]}):t(T,{})]})]})}const $=e=>({cart:e.shop});var E=y($)(O);function F(){return o("nav",{className:"navbar",children:[t(L,{}),t(k,{}),t(E,{})]})}const b="@item/added",B=e=>({type:b,payload:m({},e)});function Q({item:e,addToCart:r}){const{name:n,price:s,url:a}=e;return o("div",{className:"card",children:[t("img",{src:a,alt:"image"}),t("div",{className:"card-title",children:n}),o("div",{className:"card-price",children:[t("strong",{children:"Price: "}),"$",s]}),t("button",{onClick:()=>r(e),children:"Add to Cart"})]})}const z=e=>({addToCart:r=>e(B(r))});var G=y(null,z)(Q);function H(e){const{section:r}=e,{id:n,name:s,items:a}=r;return o("section",{className:"section",children:[t("h3",{children:s}),t("div",{className:"items-container",children:a.map(c=>t(G,{item:c},c.id))})]})}const J=[{id:+new Date,name:"Shoes",items:[{id:Math.random(36),name:"Nike",price:29.99,url:"https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw0df3fa19/products/NI_AQ2730-400/NI_AQ2730-400-1.JPG"},{id:Math.random(36),name:"Reebok",price:35.25,url:"https://ferreira.vteximg.com.br/arquivos/ids/334728-1000-1000/re_eg6422.jpg?v=637163373401200000"},{id:Math.random(36),name:"Adidas",price:29.99,url:"https://runastore.pe/media/catalog/product/cache/1/image/1600x/040ec09b1e35df139433887a97daa66f/f/3/f36921-001__2.jpg"},{id:Math.random(36),name:"Volcom",price:29.99,url:"https://www.bfgcdn.com/1500_1500_90/024-0480/volcom-draw-lo-shoe-zapatillas-deportivas-detail-6.jpg"}]}];function K(){const[e,r]=d.exports.useState([...J]);return o("div",{className:"App",children:[t(F,{}),e.map(n=>t(H,{section:n},n.id))]})}function V(e=[],r){switch(r.type){case b:return e.find(s=>s.id===r.payload.id)?[...e.map(a=>(a.id==r.payload.id&&(a.quantity=a.quantity+1),a))]:[...e,g(m({},r.payload),{quantity:1})];default:return e}}const W=_({shop:V}),U=M(W,P());R.render(t(q.StrictMode,{children:t(j,{store:U,children:t(K,{})})}),document.getElementById("root"));
