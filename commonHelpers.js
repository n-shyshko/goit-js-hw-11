import{S as d,i as n}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function m(s){const r="https://pixabay.com/api/",o="45306533-f7c4428500ee3898e492b2a2f",i=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${r}?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const g=document.querySelector("ul.gallery-list"),h=new d("ul.js-gallery a",{className:"js-lightbox",overlayOpacity:.8,captionsData:"alt",captionDelay:250});function y(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:a,comments:f,downloads:u})=>`<li class="gallery-item">
	<a class="gallery-link" href="${i}">
		<img
			class="gallery-image"
			src="${o}"
			alt="${e}"
			/>
    <div class="image-stats">
  <p>Likes
${t}</p>
  <p> Views<br>${a}</p>
  <p>Comments<br>${f}</P>
  <p>Dowloads<br>${u}</P>
</div>
	</a>
</li>`).join("");g.innerHTML=r,h.refresh()}const c="/goit-js-hw-11/assets/nok-d9947029.svg",l=document.querySelector(".loader"),p=document.querySelector(".js-form"),L=document.querySelector(".js-gallery");p.addEventListener("submit",b);function b(s){s.preventDefault(),L.innerHTML="",l.classList.remove("hidden");const r=s.target.elements.search.value.trim().toLowerCase();r===""?(n.error({message:"The field cannot be empty!",position:"topRight",title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",timeout:2e3,iconUrl:c}),l.classList.add("hidden")):m(r).then(o=>{o.hits.length===0&&n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",timeout:2e3,iconUrl:c}),y(o.hits),l.classList.remove("hidden")}).catch(o=>console.log(o)).finally(()=>{s.target.reset(),l.classList.add("hidden")})}
//# sourceMappingURL=commonHelpers.js.map
