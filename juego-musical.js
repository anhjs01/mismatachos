(function(){
"use strict";
const source=typeof CATALOGO_CANCIONES!=="undefined"?CATALOGO_CANCIONES:{};
const songs=Object.values(source).flat().filter((s,i,a)=>s&&s.youtubeId&&s.titulo&&a.findIndex(x=>x.youtubeId===s.youtubeId)===i);
const mesa=document.getElementById("mesa"),layer=document.getElementById("portadas"),player=document.getElementById("reproductorFijo");
const title=document.getElementById("cancionTitulo"),artist=document.getElementById("cancionArtista"),cover=document.getElementById("reproductorPortada"),openBtn=document.getElementById("abrirCancion"),help=document.getElementById("ayuda");
let chosen=null,shakeCount=0,lastShake=0,drag=null,round=0;
const palette=["#e6b6c7","#e4c49b","#b6c8b1","#c8b9df","#e8a9a2"];
function pickSongs(){const arr=songs.slice();for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}return arr.slice(0,Math.min(18,arr.length));}
function render(){
 layer.innerHTML="";const list=pickSongs();const w=mesa.clientWidth,h=mesa.clientHeight;
 list.forEach((s,i)=>{const el=document.createElement("button");el.type="button";el.className="portada-musical";el.setAttribute("aria-label","Escuchar "+s.titulo+" de "+s.artista);el.dataset.id=s.youtubeId;
 const img=document.createElement("img");img.loading=i<8?"eager":"lazy";img.alt="";img.src="https://img.youtube.com/vi/"+encodeURIComponent(s.youtubeId)+"/hqdefault.jpg";img.onerror=()=>{img.src="https://img.youtube.com/vi/"+encodeURIComponent(s.youtubeId)+"/mqdefault.jpg";};
 const x=20+Math.random()*Math.max(1,w-150),y=55+Math.random()*Math.max(1,h-180),rot=Math.random()*28-14;
 el.style.left=x+"px";el.style.top=y+"px";el.style.transform="rotate("+rot+"deg)";el.style.zIndex=String(i+2);el.style.borderColor=palette[i%palette.length];el.appendChild(img);el.song=s;
 el.addEventListener("pointerdown",startDrag);el.addEventListener("pointermove",moveDrag);el.addEventListener("pointerup",endDrag);el.addEventListener("pointercancel",endDrag);el.addEventListener("click",()=>{if(!el.wasDragged)selectSong(el);el.wasDragged=false;});
 layer.appendChild(el);
 });
}
function startDrag(e){const el=e.currentTarget;drag={el,pointer:e.pointerId,startX:e.clientX,startY:e.clientY,left:parseFloat(el.style.left)||0,top:parseFloat(el.style.top)||0,moved:false};el.setPointerCapture(e.pointerId);}
function moveDrag(e){if(!drag||drag.pointer!==e.pointerId)return;const dx=e.clientX-drag.startX,dy=e.clientY-drag.startY;if(Math.abs(dx)+Math.abs(dy)>8)drag.moved=true;if(drag.moved){drag.el.classList.add("is-dragging");drag.el.style.left=Math.max(0,Math.min(mesa.clientWidth-drag.el.offsetWidth,drag.left+dx))+"px";drag.el.style.top=Math.max(0,Math.min(mesa.clientHeight-drag.el.offsetHeight,drag.top+dy))+"px";}}
function endDrag(e){if(!drag||drag.pointer!==e.pointerId)return;const d=drag;drag=null;d.el.classList.remove("is-dragging");if(d.moved){d.el.wasDragged=true;const r=mesa.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,er=d.el.getBoundingClientRect();if(Math.hypot(er.left+er.width/2-cx,er.top+er.height/2-cy)<Math.min(r.width,r.height)*.25)selectSong(d.el);setTimeout(()=>{d.el.wasDragged=false;},100);}}
function selectSong(el){if(chosen)chosen.classList.remove("is-fijada");chosen=el;el.classList.add("is-fijada");title.textContent=el.song.titulo;artist.textContent=el.song.artista;cover.innerHTML="";const img=el.querySelector("img").cloneNode();img.loading="eager";cover.appendChild(img);player.classList.add("is-visible");help.textContent="Portada fijada: pulsa «Escuchar canción» para reproducirla, o mueve otra al centro.";
openBtn.onclick=()=>{const video=document.getElementById("videoInline");video.innerHTML="";const frame=document.createElement("iframe");frame.src="https://www.youtube-nocookie.com/embed/"+encodeURIComponent(el.song.youtubeId)+"?autoplay=1&rel=0";frame.title="Reproductor de "+el.song.titulo;frame.allow="autoplay; encrypted-media; picture-in-picture";frame.allowFullscreen=true;video.appendChild(frame);video.classList.add("is-playing");openBtn.textContent="♫ Reproduciendo aquí";};}
function shuffle(){shakeCount++;layer.querySelectorAll(".portada-musical").forEach((el,i)=>{el.classList.remove("is-fijada");el.style.zIndex=String(i+2);el.style.left=(12+Math.random()*Math.max(1,mesa.clientWidth-el.offsetWidth-24))+"px";el.style.top=(40+Math.random()*Math.max(1,mesa.clientHeight-el.offsetHeight-70))+"px";el.style.transform="rotate("+(Math.random()*54-27)+"deg)";});if(chosen)chosen.classList.remove("is-fijada");chosen=null;player.classList.remove("is-visible");document.getElementById("videoInline").innerHTML="";document.getElementById("videoInline").classList.remove("is-playing");help.textContent="¡Colección revuelta! Elige una portada o arrástrala al centro para descubrir su canción.";}
document.getElementById("mezclar").addEventListener("click",shuffle);
document.getElementById("otraRonda").addEventListener("click",()=>{round++;render();help.textContent="Nueva ronda musical. ¿Cuál portada te llama la atención?";});
document.getElementById("cerrarReproductor").addEventListener("click",()=>{player.classList.remove("is-visible");if(chosen)chosen.classList.remove("is-fijada");chosen=null;});
let lastMotion=0;window.addEventListener("devicemotion",e=>{const a=e.accelerationIncludingGravity;if(!a)return;const strength=Math.abs(a.x||0)+Math.abs(a.y||0)+Math.abs(a.z||0);const now=Date.now();if(strength>28&&now-lastMotion>1200){lastMotion=now;shuffle();help.textContent="¡Sacudiste la colección! No se reproduce nada todavía: elige una portada para escucharla.";}} ,{passive:true});
window.addEventListener("resize",()=>{if(!drag)layer.querySelectorAll(".portada-musical").forEach(el=>{el.style.left=Math.max(0,Math.min(mesa.clientWidth-el.offsetWidth,parseFloat(el.style.left)||0))+"px";});});
render();
})();