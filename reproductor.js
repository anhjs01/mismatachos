/* =======================================================================
   REPRODUCTOR.JS — música de fondo real, usando el reproductor oficial
   de YouTube (embebido, sin descargar nada — 100% dentro de las reglas
   de YouTube, igual que insertar un video en cualquier página web).
   -----------------------------------------------------------------------
   No necesitas editar este archivo. El contenido de las canciones vive
   en catalogo-canciones.js.

   La canción del día se solicita tras el clic que abre su tarjeta. El
   reproductor se muestra con tamaño suficiente y controles de YouTube;
   no se intenta reproducir audio desde un iframe diminuto u oculto.
   ======================================================================= */

(function () {
  "use strict";

  let player = null;
  let apiLista = false;
  let pendiente = null;
  let cancionActual = null;
  let sonando = false;
  let elHost = null;
  let elAviso = null;

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
    const wrapper = document.createElement("div");
    wrapper.id = "reproductor-video-wrapper";
    wrapper.className = "reproductor-video-wrapper";
    wrapper.style.display = "none";
    const host = document.createElement("div");
    host.id = "yt-reproductor-host";
    wrapper.appendChild(host);
    const modalCard = document.getElementById("modalCard");
    const pasoContenido = document.getElementById("pasoContenido");
    if (modalCard && pasoContenido) modalCard.insertBefore(wrapper, pasoContenido);
    else { document.body.appendChild(wrapper); wrapper.classList.add("reproductor-video-wrapper--portada"); }
    elHost = wrapper;
    elAviso = document.createElement("p");
    elAviso.id = "reproductorAviso";
    elAviso.className = "reproductor-aviso";
    elAviso.hidden = true;
    wrapper.insertAdjacentElement("afterend", elAviso);
    player = new YT.Player(host.id, {
      height: "200",
      width: "320",
      playerVars: { autoplay: 0, controls: 1, playsinline: 1 },
      events: {
        onReady: function () {
          apiLista = true;
          player.mute();
          if (pendiente) {
            const solicitud = pendiente;
            pendiente = null;
            reproducirId(solicitud.videoId, solicitud.silencioso);
          }
        },
        onStateChange: function (e) {
          if (!cancionActual) return;
          if (e.data === YT.PlayerState.ENDED) {
            sonando = false;
            actualizarUI();
            siguienteDeLaMisma();
            return;
          }
          sonando = e.data === YT.PlayerState.PLAYING;
          actualizarUI();
        },
        onError: function (e) {
          sonando = false;
          if (elAviso && cancionActual && cancionActual.youtubeId) {
            const url = "https://www.youtube.com/watch?v=" + encodeURIComponent(cancionActual.youtubeId);
            elAviso.textContent = "";
            const texto = document.createElement("span");
            texto.textContent = "YouTube no permitió reproducir esta versión dentro de la página. ";
            const enlace = document.createElement("a");
            enlace.href = url;
            enlace.target = "_blank";
            enlace.rel = "noopener noreferrer";
            enlace.textContent = "Abrir la canción en YouTube";
            elAviso.append(texto, enlace);
            elAviso.hidden = false;
          }
          console.warn("Error del reproductor de YouTube:", e.data, cancionActual);
          actualizarUI();
        },
      },
    });
  }

  /* -----------------------------------------------------------------
     3) REPRODUCIR
     ----------------------------------------------------------------- */
  function mostrarReproductor() {
    if (elHost) elHost.style.display = "block";
    if (elAviso) elAviso.hidden = true;
  }

  function ocultarVideoDia() {
    const esCalendario = !!(elHost && document.getElementById("modalCard"));
    if (esCalendario) {
      // Ignora los eventos de pausa que lleguen después del cierre y evita
      // que la barra vuelva a ofrecer "reanudar" un video ya oculto.
      cancionActual = null;
      if (player && apiLista && typeof player.pauseVideo === "function") player.pauseVideo();
      sonando = false;
      elHost.style.display = "none";
      if (elAviso) elAviso.hidden = true;
      if (elBarra) elBarra.classList.remove("is-visible");
      return;
    }
    if (player && apiLista && typeof player.pauseVideo === "function") player.pauseVideo();
    sonando = false;
    actualizarUI();
  }

  function reproducirId(videoId, silencioso) {
    if (!videoId) return;
    mostrarReproductor();
    if (!player) {
      pendiente = { videoId: videoId, silencioso: !!silencioso };
      if (window.YT && window.YT.Player) crearPlayer();
      else cargarAPI();
      return;
    }
    if (!apiLista || !player.loadVideoById) {
      pendiente = { videoId: videoId, silencioso: !!silencioso };
      return;
    }
    player.loadVideoById(videoId);
    if (!silencioso) player.unMute();
    player.playVideo();
  }

  function reproducirCategoria(categoria) {
    if (typeof CATALOGO_CANCIONES === "undefined") return;
    mostrarReproductor();
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
    mostrarReproductor();
    reproducirId(elegida.youtubeId, false);
    sonando = false;
    actualizarUI();
  }

  function reproducirDia(dia) {
    if (!dia) return;
    if (!dia.youtubeId) { console.warn("Este día no tiene youtubeId; no se cambiará a una canción aleatoria."); return; }
    let encontrada = null;
    let categoriaEncontrada = null;
    if (typeof CATALOGO_CANCIONES !== "undefined") {
      for (const categoria of Object.keys(CATALOGO_CANCIONES)) {
        encontrada = (CATALOGO_CANCIONES[categoria] || []).find(c => c.youtubeId === dia.youtubeId);
        if (encontrada) {
          categoriaEncontrada = categoria;
          break;
        }
      }
    }
    cancionActual = encontrada ? { ...encontrada } : { titulo: dia.cancionTitulo || "Canción del día", artista: dia.cancionArtista || "", youtubeId: dia.youtubeId };
    // La categoría real del catálogo permite que el botón "siguiente" y el
    // avance automático sigan funcionando aunque el tono del día sea distinto.
    cancionActual.categoria = categoriaEncontrada ||
      (typeof CATALOGO_CANCIONES !== "undefined" && CATALOGO_CANCIONES[dia.tono] ? dia.tono : "amor");
    mostrarReproductor();
    reproducirId(dia.youtubeId, false);
    sonando = false;
    actualizarUI();
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
    ocultarVideoDia: ocultarVideoDia,
    estaSonando: function () { return sonando; },
    haIniciado: function () { return !!cancionActual; },
  };
})();
