import{a as h,S as P,i as p}from"./assets/vendor-8cd2069d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();h.defaults.baseURL="https://pixabay.com/api/";async function m(e,o,n=15){const r="45225008-7dd168b8c56fcbfbf82a602af";try{return(await h.get("",{params:{key:r,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:n}})).data}catch(t){console.log(t.status)}}function S({webformatURL:e,largeImageURL:o,tags:n,likes:r,views:t,comments:s,downloads:a}){return`<li class="gallery">
            <a class="list" href="${o}">
              <img class="photo" src="${e}" alt="${n}" />
              <ul class="properties-list">
                <li>
                  <p class="prop">Likes</p>
                  <p class="prop-value">${r}</p>
                </li>
                <li>
                  <p class="prop">Views</p>
                  <p class="prop-value">${t}</p>
                </li>
                <li>
                  <p class="prop">Comments</p>
                  <p class="prop-value">${s}</p>
                </li>
                <li>
                  <p class="prop">Downloads</p>
                  <p class="prop-value">${a}</p>
                </li>
              </ul>
            </a>
          </li>`}function y(e){return e.map(S).join("")}const E="/goit-js-hw-12/assets/error-7a2045ea.svg",O="/goit-js-hw-12/assets/success-2e1ddc32.svg",T="/goit-js-hw-12/assets/caution-8ff4f164.svg",H=document.querySelector(".js-form"),c=document.querySelector(".js-gallery-list"),b=document.querySelector(".loader"),d=document.querySelector(".load-btn"),L=new P(".gallery a",{captionsData:"alt",captionDelay:250});let l,i=1,u=null,f=15;function v(){b.classList.remove("hidden")}function w(){b.classList.add("hidden")}function C(){d.classList.remove("hidden")}function M(){d.classList.add("hidden")}H.addEventListener("submit",$);d.addEventListener("click",j);async function $(e){if(e.preventDefault(),i=1,M(),c.innerHTML="",l=e.currentTarget.elements.search.value.trim(),l==="")return g("The field cannot be empty!");v();try{const o=await m(l,i,f);if(o.hits.length===0)return g("Sorry, there are no images matching your search query. Please try again!");o.totalHits!==0&&R(`We found ${o.totalHits} images for your request!`),o.totalHits>15&&C(),u=Math.ceil(o.totalHits/f),console.log(u),c.innerHTML=y(o.hits),L.refresh()}catch(o){console.log(o)}finally{w(),e.target.reset()}}async function j(){M(),i+=1,v();try{const e=await m(l,i,f);c.insertAdjacentHTML("beforeend",y(e.hits)),L.refresh(),i<u&&C(),i===u&&z("We're sorry, but you've reached the end of search results.")}catch(e){console.log(e)}finally{w(),q()}}function q(){const e=c.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}function g(e){return p.error({iconUrl:E,title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",message:e})}function R(e){return p.success({iconUrl:O,title:"OK",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#59a10d",position:"topRight",message:e})}function z(e){return p.warning({iconUrl:T,title:"WARNING",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#09f",position:"topRight",message:e})}
//# sourceMappingURL=commonHelpers.js.map
