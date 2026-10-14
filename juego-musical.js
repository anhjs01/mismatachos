(function(){
"use strict";
const source=typeof CATALOGO_CANCIONES!=="undefined"?CATALOGO_CANCIONES:{};
const songs=Object.values(source).flat().filter((s,i,a)=>s&&s.youtubeId&&s.titulo&&a.findIndex(x=>x.youtubeId===s.youtubeId)===i);
const mesa=document.getElementById("mesa"),layer=document.getElementById("portadas"),player=document.getElementById("reproductorFijo");
const title=document.getElementById("cancionTitulo"),artist=document.getElementById("cancionArtista"),cover=document.getElementById("reproductorPortada"),openBtn=document.getElementById("abrirCancion"),help=document.getElementById("ayuda");
let chosen=null,shakeCount=0,lastShake=0,drag=null,round=0,shownIds=new Set(),motionBaseline=null,motionEnabled=false;
const palette=["#e6b6c7","#e4c49b","#b6c8b1","#c8b9df","#e8a9a2"];
function pickSongs(){let arr=songs.filter(s=>!shownIds.has(s.youtubeId));if(arr.length<12){shownIds.clear();arr=songs.slice();}for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}const picked=arr.slice(0,Math.min(36,arr.length));picked.forEach(s=>shownIds.add(s.youtubeId));return picked;}
function render(){
 layer.innerHTML="";const list=pickSongs();const w=mesa.clientWidth,h=mesa.clientHeight;
 list.forEach((s,i)=>{const el=document.createElement("button");el.type="button";el.className="portada-musical";el.setAttribute("aria-label","Escuchar "+s.titulo+" de "+s.artista);el.dataset.id=s.youtubeId;
 const img=document.createElement("img");img.loading=i<8?"eager":"lazy";img.alt="";img.src="https://img.youtube.com/vi/"+encodeURIComponent(s.youtubeId)+"/hqdefault.jpg";img.onerror=()=>{img.src="https://img.youtube.com/vi/"+encodeURIComponent(s.youtubeId)+"/mqdefault.jpg";};
 const x=10+Math.random()*Math.max(1,w-120),y=45+Math.random()*Math.max(1,h-130),rot=Math.random()*30-15;
 el.style.left=x+"px";el.style.top=y+"px";el.style.setProperty("--rotacion",rot+"deg");el.style.setProperty("--entrada-x",(Math.random()*100-50)+"px");el.style.setProperty("--entrada-rot",(Math.random()*70-35)+"deg");el.style.setProperty("--delay",(i*35)+"ms");el.style.transform="rotate("+rot+"deg)";el.style.zIndex=String(i+2);el.classList.add("caida-inicial");el.addEventListener("animationend",()=>el.classList.remove("caida-inicial"),{once:true});el.style.borderColor=palette[i%palette.length];el.appendChild(img);el.song=s;
 el.addEventListener("pointerdown",startDrag);el.addEventListener("pointermove",moveDrag);el.addEventListener("pointerup",endDrag);el.addEventListener("pointercancel",endDrag);el.addEventListener("click",()=>{if(!el.wasDragged)selectSong(el);el.wasDragged=false;});
 layer.appendChild(el);
 });
}
function startDrag(e){const el=e.currentTarget;drag={el,pointer:e.pointerId,startX:e.clientX,startY:e.clientY,left:parseFloat(el.style.left)||0,top:parseFloat(el.style.top)||0,moved:false};el.setPointerCapture(e.pointerId);}
function moveDrag(e){if(!drag||drag.pointer!==e.pointerId)return;const dx=e.clientX-drag.startX,dy=e.clientY-drag.startY;if(Math.abs(dx)+Math.abs(dy)>8)drag.moved=true;if(drag.moved){drag.el.classList.add("is-dragging");drag.el.style.left=Math.max(0,Math.min(mesa.clientWidth-drag.el.offsetWidth,drag.left+dx))+"px";drag.el.style.top=Math.max(0,Math.min(mesa.clientHeight-drag.el.offsetHeight,drag.top+dy))+"px";}}
function endDrag(e){if(!drag||drag.pointer!==e.pointerId)return;const d=drag;drag=null;d.el.classList.remove("is-dragging");if(d.moved){d.el.wasDragged=true;const r=mesa.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,er=d.el.getBoundingClientRect();if(Math.hypot(er.left+er.width/2-cx,er.top+er.height/2-cy)<Math.min(r.width,r.height)*.25)selectSong(d.el);setTimeout(()=>{d.el.wasDragged=false;},100);}}
function selectSong(el){if(chosen)chosen.classList.remove("is-fijada");chosen=el;el.classList.add("is-fijada");title.textContent=el.song.titulo;artist.textContent=el.song.artista;cover.innerHTML="";const img=el.querySelector("img").cloneNode();img.loading="eager";cover.appendChild(img);player.classList.add("is-visible");help.textContent="Portada fijada: pulsa «Escuchar canción» para reproducirla, o mueve otra al centro.";
openBtn.onclick=()=>{const video=document.getElementById("videoInline");video.innerHTML="";const frame=document.createElement("iframe");frame.src="https://www.youtube-nocookie.com/embed/"+encodeURIComponent(el.song.youtubeId)+"?autoplay=1&rel=0";frame.title="Reproductor de "+el.song.titulo;frame.allow="autoplay; encrypted-media; picture-in-picture";frame.allowFullscreen=true;video.appendChild(frame);video.classList.add("is-playing");openBtn.textContent="♫ Reproduciendo aquí";};}
function shuffle(){shakeCount++;if(chosen)chosen.classList.remove("is-fijada");chosen=null;player.classList.remove("is-visible");const video=document.getElementById("videoInline");if(video){video.innerHTML="";video.classList.remove("is-playing");}openBtn.textContent="▶ Reproducir aquí";mesa.classList.remove("is-revolviendo");void mesa.offsetWidth;mesa.classList.add("is-revolviendo");const cards=[...layer.querySelectorAll(".portada-musical")];cards.forEach((el,i)=>{el.classList.remove("is-fijada","caida-inicial");el.classList.add("volando");el.style.zIndex=String(i+2);el.style.left=(8+Math.random()*Math.max(1,mesa.clientWidth-el.offsetWidth-16))+"px";el.style.top=(35+Math.random()*Math.max(1,mesa.clientHeight-el.offsetHeight-75))+"px";el.style.setProperty("--rotacion",(Math.random()*46-23)+"deg");el.style.setProperty("--rebote-x",(Math.random()*60-30)+"px");el.style.setProperty("--rebote-rot",(Math.random()*35-17)+"deg");el.style.setProperty("--delay",(i*22)+"ms");el.addEventListener("animationend",()=>el.classList.remove("volando"),{once:true});});help.textContent="¡Ahí van las canciones! Cuando una portada te llame la atención, tócala para escucharla.";setTimeout(()=>mesa.classList.remove("is-revolviendo"),1250);}
document.getElementById("mezclar").addEventListener("click",shuffle);
document.getElementById("otraRonda").addEventListener("click",()=>{round++;render();help.textContent="Nueva ronda musical. ¿Cuál portada te llama la atención?";});
document.getElementById("cerrarReproductor").addEventListener("click",()=>{player.classList.remove("is-visible");if(chosen)chosen.classList.remove("is-fijada");chosen=null;const video=document.getElementById("videoInline");video.innerHTML="";video.classList.remove("is-playing");openBtn.textContent="▶ Reproducir aquí";});
let lastMotion=0, previous={x:null,y:null,z:null}, shakeEnergy=0, motionEvents=0;
function listenMotion(){
 if(motionEnabled)return;
 motionEnabled=true;
 help.textContent="Movimiento activado. Agita el teléfono con dos o tres movimientos firmes para revolver las portadas.";
 window.addEventListener("devicemotion",e=>{
  const a=e.accelerationIncludingGravity||e.acceleration;
  if(!a)return;
  const x=Number(a.x),y=Number(a.y),z=Number(a.z);
  if(!Number.isFinite(x)||!Number.isFinite(y)||!Number.isFinite(z))return;
  motionEvents++;
  let delta=0;
  if(previous.x!==null)delta=Math.abs(x-previous.x)+Math.abs(y-previous.y)+Math.abs(z-previous.z);
  previous={x,y,z};
  const now=Date.now();
  shakeEnergy=Math.max(0,shakeEnergy-1.8)+Math.min(delta,35);
  if((delta>8.5||shakeEnergy>20)&&now-lastMotion>1150){
   lastMotion=now;shakeEnergy=0;shuffle();
   help.textContent="¡Sacudida detectada! Las portadas rebotan por la mesa. Toca una para escucharla.";
  }
 },{passive:true});
}
const motionButton=document.getElementById("activarMovimiento");
if(motionButton)motionButton.addEventListener("click",async()=>{try{if(typeof DeviceMotionEvent!=="undefined"&&typeof DeviceMotionEvent.requestPermission==="function"){const permission=await DeviceMotionEvent.requestPermission();if(permission!=="granted"){help.textContent="El permiso de movimiento no se concedió. Puedes usar «Revolver las portadas».";return;}}listenMotion();motionButton.textContent="✓ Agitado activado";motionButton.classList.add("is-active");}catch(err){help.textContent="Este navegador no permite activar el sensor aquí. Usa el botón de revolver."; }});
if(typeof DeviceMotionEvent!=="undefined"&&typeof DeviceMotionEvent.requestPermission!=="function"&&/Android|Linux/i.test(navigator.userAgent)){listenMotion();}
window.addEventListener("resize",()=>{if(!drag)layer.querySelectorAll(".portada-musical").forEach(el=>{el.style.left=Math.max(0,Math.min(mesa.clientWidth-el.offsetWidth,parseFloat(el.style.left)||0))+"px";});});
render();
setTimeout(()=>{layer.querySelectorAll(".portada-musical").forEach(el=>el.classList.remove("caida-inicial"));},1800);
})();