import{a as L,i as s,S as w}from"./assets/vendor-F1LeQrrD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const S="https://pixabay.com/api/",P="54654074-13d582212f11236cf0611e9cc";async function b(t,o,a){try{const i=await L.get(S,{params:{key:P,q:t,page:o,per_page:a,image_type:"photo",orientation:"horizontal",safesearch:!0}});return i.data.hits.length||s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i.data}catch(i){console.log(i),s.error({message:"API error.",position:"topRight"})}}const u=document.querySelector(".gallery"),g=document.querySelector(".loader"),f=document.querySelector("#load-more");function q(t){const o=t.map(({webformatURL:i,largeImageURL:e,tags:r,likes:n,views:y,comments:p,downloads:v})=>`<li class="gallery-item">
            <a class="gallery-link" href="${e}">
                <img
                    class="gallery-image"
                    src="${i}"
                    alt="${r}"
                />
                <ul class="card-info">
                    <li>
                        <div>Likes</div>
                        <div>${n}</div>
                    </li>
                    <li> <div>Views</div>
                        <div>${y}</div>
                    </li>
                    <li> <div>Comments</div>
                        <div>${p}</div>
                    </li>
                    <li> <div>Downloads</div>
                        <div>${v}</div>
                    </li>
                </ul>
            </a>
        </li>`).join("");u.insertAdjacentHTML("beforeend",o),new w(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function R(){u.innerHTML=""}function $(){g.classList.remove("hidden")}function A(){g.classList.add("hidden")}function B(){f.classList.remove("hidden")}function d(){f.classList.add("hidden")}let c="",l=1;const m=15,I=document.querySelector(".form"),M=document.querySelector("#load-more");I.addEventListener("submit",async t=>{if(t.preventDefault(),c=t.target.elements["search-text"].value,!c.trim().length){s.error({message:"The field can't be empty!",position:"topRight"});return}R(),l=1,await h(),t.target.reset()});M.addEventListener("click",async()=>{l+=1,await h()});const h=async()=>{try{$(),d();const t=await b(c,l,m);if(!t.hits.length){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d();return}O(t.totalHits,l)?s.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):B(),q(t.hits);const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:a*2,behavior:"smooth"})}catch(t){console.log(t),s.error({message:"API error.",position:"topRight"})}finally{A()}};function O(t,o){return t<=o*m}
//# sourceMappingURL=index.js.map
