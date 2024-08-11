import{S as f,i as l}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(r){const o="https://pixabay.com/api/",s="45306533-f7c4428500ee3898e492b2a2f",a=new URLSearchParams({key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${o}?${a}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const d=document.querySelector("ul.gallery-list"),y=new f("ul.js-gallery a",{className:"js-lightbox",overlayOpacity:.8,captionsData:"alt",captionDelay:250});function g(r){r.classList.add(".loader")}function c(r){r.classList.remove(".loader")}function h(r){const o=r.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:u,downloads:m})=>`<li class="gallery-item">
	<a class="gallery-link" href="${a}">
		<img
			class="gallery-image"
			src="${s}"
			alt="${e}"
			/>
    <div class="image-stats">
  <p>Likes
${t}</p>
  <p> Views ${i}</p>
  <p>Comments ${u}</P>
  <p>Dowloads ${m}</P>
</div>
	</a>
</li>`).join("");d.innerHTML=o,y.refresh()}const n=document.querySelector(".loader"),L=document.querySelector(".js-form"),S=document.querySelector(".js-gallery");L.addEventListener("submit",b);function b(r){r.preventDefault(),S.innerHTML="",c(n);const o=r.target.elements.search.value.trim().toLowerCase();o===""?l.error({message:"The field cannot be empty!",position:"topRight",timeout:2e3,icon:""}):p(o).then(s=>{s.hits.length===0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,icon:""}),h(s.hits),g(n)}).catch(s=>console.log(s)).finally(()=>{r.target.reset(),c(n)})}
//# sourceMappingURL=commonHelpers.js.map
