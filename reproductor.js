/* =======================================================================
   REPRODUCTOR.JS — música de fondo real, usando el reproductor oficial
   de YouTube (embebido, sin descargar nada — 100% dentro de las reglas
   de YouTube, igual que insertar un video en cualquier página web).
   -----------------------------------------------------------------------
   No necesitas editar este archivo. El contenido de las canciones vive
   en catalogo-canciones.js.

   Por las reglas de los navegadores, la música solo puede empezar a
   SONAR (con volumen) después de un clic. Para que arranque lo más
   rápido posible apenas hay ese primer clic, el reproductor deja una
   canción "precargada" en silencio desde que la página abre (los
   navegadores sí permiten reproducir en silencio sin necesidad de
   clic) — así, cuando llega el primer clic real, casi siempre solo
   hace falta quitarle el silencio en vez de cargar la canción desde
   cero, y suena casi al instante.
   ======================================================================= */

(function () {
  "use strict";

  let player = null;
  let apiLista = false;
  let pendiente = null; // videoId en espera si se pidió reproducir antes de tiempo
  let precargada = null; // cancion cargada en silencio de antemano, lista para sonar
  let cancionActual = null;
  let sonando = false;

  /* -----------------------------------------------------------------
     1) CARGAR LA API DE YOUTUBE (una sola vez, lo antes posible)
     ----------------------------------------------------------------- */
  function cargarAPI() {
    if (window.__ytApiCargando) return;
    window.__ytApiCargando = true;

    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(script);

    window.onYouTubeIframeAPIReady = function () {
      crearPlayer();
    };
  }

  function crearPlayer() {
    const host = document.createElement("div");
    host.id = "yt-reproductor-host";
    host.style.position = "fixed";
    host.style.width = "1px";
    host.style.height = "1px";
    host.style.opacity = "0";
    host.style.pointerEvents = "none";
    host.style.bottom = "0";
    host.style.left = "0";
    document.body.appendChild(host);

    player = new YT.Player(host.id, {
      height: "1",
      width: "1",
      playerVars: { autoplay: 0, controls: 0, playsinline: 1 },
      events: {
        onReady: function () {
          apiLista = true;
          player.mute();
          if (pendiente) {
            reproducirId(pendiente, true);
            pendiente = null;
          } else {
            precargarPorAdelantado();
          }
        },
        onStateChange: function (e) {
          if (!cancionActual) return; // ignora eventos de la precarga silenciosa
          sonando = e.data === 1; // 1 = YT.PlayerState.PLAYING
          actualizarUI();
        },
      },
    });
  }

  /* -----------------------------------------------------------------
     2) PRECARGA SILENCIOSA (apenas la página abre, sin esperar clic)
     ----------------------------------------------------------------- */
  function precargarPorAdelantado() {
    if (typeof CATALOGO_CANCIONES === "undefined" || !player || !player.loadVideoById) return;
    // en la portada lo primero que suena es "ambiente"; en el calendario,
    // la mayoria de los dias son "amor" — precargamos la que mas
    // probablemente coincida con el primer toque real de cada página
    const esPortada = !!document.getElementById("heartBtn");
    const categoriaPreferida = esPortada ? "ambiente" : "amor";
    const lista = (CATALOGO_CANCIONES[categoriaPreferida] || []).filter((c) => c.youtubeId);
    if (lista.length === 0) return;
    const elegida = lista[Math.floor(Math.random() * lista.length)];
    precargada = { titulo: elegida.titulo, artista: elegida.artista, youtubeId: elegida.youtubeId, categoria: categoriaPreferida };
    player.mute();
    player.loadVideoById(elegida.youtubeId);
    player.pauseVideo();
  }

  /* -----------------------------------------------------------------
     3) REPRODUCIR
     ----------------------------------------------------------------- */
  function reproducirId(videoId, silencioso) {
    if (!videoId || !player) return;
    if (!apiLista || !player.loadVideoById) {
      pendiente = videoId;
      return;
    }
    player.loadVideoById(videoId);
    if (!silencioso) player.unMute();
    player.playVideo();
  }

  function reproducirCategoria(categoria) {
    if (typeof CATALOGO_CANCIONES === "undefined") return;
    const lista = (CATALOGO_CANCIONES[categoria] || []).filter((c) => c.youtubeId);
    if (lista.length === 0) return;

    // evita repetir la misma si hay más de una opción
    let opciones = lista;
    if (cancionActual) {
      const otras = lista.filter((c) => c.youtubeId !== cancionActual.youtubeId);
      if (otras.length > 0) opciones = otras;
    }

    const elegida = opciones[Math.floor(Math.random() * opciones.length)];
    cancionActual = elegida;
    cancionActual.categoria = categoria;

    // si la precarga silenciosa ya es justo esta cancion, solo hay
    // que quitarle el silencio: suena casi instantaneo, sin recargar
    if (precargada && player && precargada.youtubeId === elegida.youtubeId) {
      player.unMute();
      player.playVideo();
    } else {
      reproducirId(elegida.youtubeId, false);
    }
    precargada = null;
    sonando = true;
    actualizarUI();
  }

  function reproducirDia(dia) {
    if (!dia) return;
    if (!dia.youtubeId) { reproducirCategoria(dia.tono || "amor"); return; }
    let encontrada = null;
    if (typeof CATALOGO_CANCIONES !== "undefined") {
      for (const categoria of Object.keys(CATALOGO_CANCIONES)) {
        encontrada = (CATALOGO_CANCIONES[categoria] || []).find(c => c.youtubeId === dia.youtubeId);
        if (encontrada) break;
      }
    }
    cancionActual = encontrada ? { ...encontrada } : { titulo: dia.cancionTitulo || "Canción del día", artista: dia.cancionArtista || "", youtubeId: dia.youtubeId };
    cancionActual.categoria = dia.tono || (encontrada && encontrada.categoria) || "amor";
    reproducirId(dia.youtubeId, false); precargada = null; sonando = true; actualizarUI();
  }
  function pausarOReanudar() {
    if (!player) return;
    if (sonando) {
      player.pauseVideo();
    } else if (cancionActual) {
      player.playVideo();
    }
  }

  function siguienteDeLaMisma() {
    if (cancionActual && cancionActual.categoria) {
      reproducirCategoria(cancionActual.categoria);
    }
  }

  /* -----------------------------------------------------------------
     4) UI MÍNIMA — barra flotante "sonando ahora"
     ----------------------------------------------------------------- */
  let elBarra = null;

  function crearUI() {
    if (elBarra) return;
    elBarra = document.createElement("div");
    elBarra.className = "reproductor-barra";
    elBarra.innerHTML =
      '<button type="button" class="reproductor-btn" id="reproductorPlayPausa" aria-label="Pausar o reanudar">⏸</button>' +
      '<span class="reproductor-info" id="reproductorInfo">Elegiendo música…</span>' +
      '<button type="button" class="reproductor-btn" id="reproductorSiguiente" aria-label="Cambiar canción">⟳</button>';
    document.body.appendChild(elBarra);

    elBarra.querySelector("#reproductorPlayPausa").addEventListener("click", pausarOReanudar);
    elBarra.querySelector("#reproductorSiguiente").addEventListener("click", siguienteDeLaMisma);
  }

  function actualizarUI() {
    if (!elBarra) crearUI();
    if (!cancionActual) return;
    elBarra.classList.add("is-visible");
    const info = elBarra.querySelector("#reproductorInfo");
    const nombre = cancionActual.artista
      ? cancionActual.titulo + " · " + cancionActual.artista
      : cancionActual.titulo;
    info.textContent = "🎵 " + nombre;
    elBarra.querySelector("#reproductorPlayPausa").textContent = sonando ? "⏸" : "▶";
  }

  /* -----------------------------------------------------------------
     5) INICIO
     ----------------------------------------------------------------- */
  cargarAPI();

  window.SorpresaReproductor = {
    reproducirCategoria: reproducirCategoria,
    reproducirDia: reproducirDia,
    estaSonando: function () { return sonando; },
    haIniciado: function () { return !!cancionActual; },
  };
})();
