import{a as y,S as C,i as h}from"./assets/vendor-8cd2069d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();y.defaults.baseURL="https://pixabay.com/api/";const M=15;async function b(e,s,o){const i={params:{key:"45225008-7dd168b8c56fcbfbf82a602af",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:o}},{data:t}=await y.get("",i);return t}function S({webformatURL:e,largeImageURL:s,tags:o,likes:i,views:t,comments:r,downloads:n}){return`<li class="gallery">
            <a class="list" href="${s}">
              <img class="photo" src="${e}" alt="${o}" />
              <ul class="properties-list">
                <li>
                  <p class="prop">Likes</p>
                  <p class="prop-value">${i}</p>
                </li>
                <li>
                  <p class="prop">Views</p>
                  <p class="prop-value">${t}</p>
                </li>
                <li>
                  <p class="prop">Comments</p>
                  <p class="prop-value">${r}</p>
                </li>
                <li>
                  <p class="prop">Downloads</p>
                  <p class="prop-value">${n}</p>
                </li>
              </ul>
            </a>
          </li>`}function L(e){return e.map(S).join("")}const P="/goit-js-hw-12/assets/error-7a2045ea.svg",O="/goit-js-hw-12/assets/success-2e1ddc32.svg",E="/goit-js-hw-12/assets/caution-8ff4f164.svg",v=document.querySelector(".js-form"),f=document.querySelector(".js-gallery-list"),u=document.querySelector(".loader"),l=document.querySelector(".load-btn"),w=new C(".gallery a",{captionsData:"alt",captionDelay:250});let c,a=1,g=null;function p(e){e.classList.add("hidden")}function d(e){e.classList.remove("hidden")}v.addEventListener("submit",H);l.addEventListener("click",T);async function H(e){if(e.preventDefault(),f.innerHTML="",a=1,p(l),c=new FormData(v).get("search").trim(),c==="")return m("The field cannot be empty!");d(u);try{const o=await b(c,a);if(o.hits.length===0)return m("Sorry, there are no images matching your search query. Please try again!");o.totalHits!==0&&j(`We found ${o.totalHits} images for your request!`),o.totalHits>15&&d(l),g=Math.ceil(o.totalHits/M),f.innerHTML=L(o.hits),w.refresh()}catch(o){console.log(o)}finally{p(u),e.target.reset()}}async function T(){p(l),a+=1,d(u);try{const e=await b(c,a);f.insertAdjacentHTML("beforeend",L(e.hits)),w.refresh(),a<g&&d(l),a===g&&q("We're sorry, but you've reached the end of search results.")}catch(e){console.log(e)}finally{p(u),$()}}function $(){const e=f.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}function m(e){return h.error({iconUrl:P,title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",message:e})}function j(e){return h.success({iconUrl:O,title:"OK",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#59a10d",position:"topRight",message:e})}function q(e){return h.warning({iconUrl:E,title:"WARNING",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#09f",position:"topRight",message:e})}
//# sourceMappingURL=commonHelpers.js.map
