import{a as L,i as s,S as w}from"./assets/vendor-F1LeQrrD.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const S="https://pixabay.com/api/",q="54654074-13d582212f11236cf0611e9cc";async function P(t,i,n){try{const o=await L.get(S,{params:{key:q,q:t,page:i,per_page:n,image_type:"photo",orientation:"horizontal",safesearch:!0}});return o.data.hits.length||s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),o.data}catch{console.log(error),s.error({message:"API error.",position:"topRight"})}}const u=document.querySelector(".gallery"),m=document.querySelector(".loader"),f=document.querySelector("#load-more");function b(t){const i=t.map(({webformatURL:o,largeImageURL:e,tags:r,likes:a,views:p,comments:h,downloads:v})=>`<li class="gallery-item">
            <a class="gallery-link" href="${e}">
                <img
                    class="gallery-image"
                    src="${o}"
                    alt="${r}"
                />
                <ul class="card-info">
                    <li>
                        <div>Likes</div>
                        <div>${a}</div>
                    </li>
                    <li> <div>Views</div>
                        <div>${p}</div>
                    </li>
                    <li> <div>Comments</div>
                        <div>${h}</div>
                    </li>
                    <li> <div>Downloads</div>
                        <div>${v}</div>
                    </li>
                </ul>
            </a>
        </li>`).join("");u.insertAdjacentHTML("beforeend",i),new w(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function $(){u.innerHTML=""}function A(){m.classList.remove("hidden")}function I(){m.classList.add("hidden")}function c(){f.classList.remove("hidden")}function d(){f.classList.add("hidden")}let l="",g=1;const M=document.querySelector(".form"),O=document.querySelector("#load-more");M.addEventListener("submit",async t=>{if(t.preventDefault(),l=t.target.elements["search-text"].value,!l.trim().length){s.error({message:"The field can't be empty!",position:"topRight"});return}$(),await y(),t.target.reset()});O.addEventListener("click",async()=>{g+=1,await y()});const y=async()=>{try{A(),d();const t=await P(l,g,15);if(!t.hits.length){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d();return}c(),b(t.hits)}catch(t){console.log(t),s.error({message:"API error.",position:"topRight"})}finally{I(),c()}};
//# sourceMappingURL=index.js.map
