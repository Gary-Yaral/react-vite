import{j as i,a as r,c as l,r as u,b as m,d as p,e as f,R as h,f as g,P as v}from"./vendor.146ad913.js";const y=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}};y();function N(){return i("form",{className:"search",children:[r("input",{type:"text",className:"inputSearch",placeholder:"search"}),r("button",{type:"submit",children:r("ion-icon",{name:"search"})})]})}function b(){return r("section",{children:r("h2",{className:"logoname",children:"Shopping"})})}function w(){return i("a",{href:"#",className:"iconCart",children:[r("div",{className:"counterItems",children:"100"}),r("ion-icon",{name:"cart"})]})}function S(){return i("nav",{className:"navbar",children:[r(b,{}),r(N,{}),r(w,{})]})}const d="@item/added",A=t=>({type:d,payload:{id:t}});function _({item:t,addToCart:n}){return i("div",{className:"card",children:[r("img",{src:t.url,alt:"image"}),r("div",{className:"card-title",children:t.name}),i("div",{className:"card-price",children:[r("strong",{children:"Price: "}),"$",t.price]}),r("button",{onClick:()=>n(t.id),children:"Add to Cart"})]})}const x=t=>({addToCart:n=>t(A(n))});var C=l(null,x)(_);function I(t){const{section:n}=t,{id:o,name:c,items:e}=n;return i("section",{className:"section",children:[r("h3",{children:c}),r("div",{className:"items-container",children:e.map(a=>r(C,{item:a},a.id))})]})}const R=[{id:+new Date,name:"Shoes",items:[{id:Math.random(36),name:"Nike",price:29.99,url:"https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw0df3fa19/products/NI_AQ2730-400/NI_AQ2730-400-1.JPG"},{id:Math.random(36),name:"Reebok",price:35.25,url:"https://ferreira.vteximg.com.br/arquivos/ids/334728-1000-1000/re_eg6422.jpg?v=637163373401200000"},{id:Math.random(36),name:"Adidas",price:29.99,url:"https://runastore.pe/media/catalog/product/cache/1/image/1600x/040ec09b1e35df139433887a97daa66f/f/3/f36921-001__2.jpg"},{id:Math.random(36),name:"Volcom",price:29.99,url:"https://www.bfgcdn.com/1500_1500_90/024-0480/volcom-draw-lo-shoe-zapatillas-deportivas-detail-6.jpg"}]}];function j(){const[t,n]=u.exports.useState([...R]);return i("div",{className:"App",children:[r(S,{}),t.map(o=>r(I,{section:o},o.id))]})}function M(t=[],n){switch(n.type){case d:let o=t.find(c=>c.id===n.payload.id);return o?[...t.map(e=>(e.id==n.payload.id&&(e.quantity=e.quantity+1),e))]:[...t,{id:n.payload.id,quantity:1,exists:o}];default:return t}}const P=m({itemsReducer:M}),T=p(P,f());h.render(r(g.StrictMode,{children:r(v,{store:T,children:r(j,{})})}),document.getElementById("root"));
