import{S as L,i as m}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();async function y(e,s,o){}function w({webformatURL:e,largeImageURL:s,tags:o,likes:l,views:t,comments:r,downloads:n}){return`<li class="gallery">
            <a class="list" href="${s}">
              <img class="photo" src="${e}" alt="${o}" />
              <ul class="properties-list">
                <li>
                  <p class="prop">Likes</p>
                  <p class="prop-value">${l}</p>
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
          </li>`}function b(e){return e.map(w).join("")}const P="/goit-js-hw-12/assets/error-7a2045ea.svg",M="/goit-js-hw-12/assets/success-2e1ddc32.svg",S="/goit-js-hw-12/assets/caution-8ff4f164.svg",v=document.querySelector(".js-form"),u=document.querySelector(".js-gallery-list"),f=document.querySelector(".loader"),a=document.querySelector(".load-btn"),C=new L(".gallery a",{captionsData:"alt",captionDelay:250});let c,i=1,O=15,g=null;function p(e){e.classList.add("hidden")}function d(e){e.classList.remove("hidden")}v.addEventListener("submit",q);a.addEventListener("click",E);async function q(e){if(e.preventDefault(),u.innerHTML="",i=1,p(a),c=new FormData(v).get("search").trim(),c==="")return h("The field cannot be empty!");d(f);try{const o=await y(c,i);if(o.hits.length===0)return h("Sorry, there are no images matching your search query. Please try again!");o.totalHits!==0&&T(`We found ${o.totalHits} images for your request!`),o.totalHits>15&&d(a),g=Math.ceil(o.totalHits/O),u.innerHTML=b(o.hits),C.refresh()}catch(o){console.log(o)}finally{p(f),e.target.reset()}}async function E(){p(a),i+=1,d(f);try{const e=await y(c,i);u.insertAdjacentHTML("beforeend",b(e.hits)),C.refresh(),i<g&&d(a),i===g&&$("We're sorry, but you've reached the end of search results.")}catch(e){console.log(e)}finally{p(f),H()}}function H(){const e=u.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}function h(e){return m.error({iconUrl:P,title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",message:e})}function T(e){return m.success({iconUrl:M,title:"OK",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#59a10d",position:"topRight",message:e})}function $(e){return m.warning({iconUrl:S,title:"WARNING",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#09f",position:"topRight",message:e})}
//# sourceMappingURL=commonHelpers.js.map
