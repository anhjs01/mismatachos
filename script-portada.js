/* =======================================================================
   SCRIPT-PORTADA.JS — apertura segura de la carta inicial.
   El contenido editable vive en contenido-portada.js.
   ======================================================================= */
(function () {
  "use strict";

  function mostrarErrorDeContenido() {
    const overlay = document.getElementById("modalOverlay");
    const card = document.getElementById("modalCard");
    if (!overlay || !card) return;
    card.innerHTML =
      '<button type="button" class="modal-close" id="modalCloseFallback" aria-label="Cerrar">✕</button>' +
      '<span class="modal-icon" aria-hidden="true">♡</span>' +
      '<h2 class="modal-title">Una carta para ti</h2>' +
      '<div class="modal-body"><p>Quería dejarte unas palabras aquí, como un pequeño recordatorio de lo especial que eres para mí.</p><p>Vuelve a cargar la página para abrir la carta completa.</p></div>' +
      '<p class="modal-signature">Con cariño, para Aleja.</p>';
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    const close = document.getElementById("modalCloseFallback");
    if (close) close.addEventListener("click", cerrar);
  }

  const overlay = document.getElementById("modalOverlay");
  const titulo = document.getElementById("modalTitle");
  const cuerpo = document.getElementById("modalBody");
  const firma = document.getElementById("modalSignature");
  const btnOtro = document.getElementById("btnOtroMensaje");
  const hint = document.getElementById("hint");
  const heart = document.getElementById("heartBtn");

  function abrir() {
    if (!overlay) return;
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
  }

  function cerrar() {
    if (!overlay) return;
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
  }

  function mostrarCartaInicial() {
    if (typeof CARTA_INICIAL === "undefined" || !CARTA_INICIAL ||
        !Array.isArray(CARTA_INICIAL.poema) || !titulo || !cuerpo || !firma) {
      mostrarErrorDeContenido();
      return;
    }
    titulo.textContent = CARTA_INICIAL.titulo || "Una carta para ti";
    cuerpo.replaceChildren();
    CARTA_INICIAL.poema.forEach((parrafo) => {
      const p = document.createElement("p");
      p.textContent = parrafo;
      cuerpo.appendChild(p);
    });
    firma.textContent = CARTA_INICIAL.firma || "Con cariño, para Aleja.";
    if (btnOtro) btnOtro.style.display = "inline-block";
    abrir();
  }

  function mostrarVersoExtra() {
    if (typeof VERSOS_EXTRA === "undefined" || !Array.isArray(VERSOS_EXTRA) || !VERSOS_EXTRA.length) {
      mostrarCartaInicial();
      return;
    }
    const verso = VERSOS_EXTRA[Math.floor(Math.random() * VERSOS_EXTRA.length)];
    if (titulo) titulo.textContent = "Un momento más...";
    if (cuerpo) {
      const p = document.createElement("p");
      p.textContent = verso;
      cuerpo.replaceChildren(p);
    }
    if (firma) firma.textContent = "";
  }

  if (heart) {
    heart.addEventListener("click", (event) => {
      if (hint) hint.style.opacity = "0";
      const boton = event.currentTarget;
      boton.classList.add("abriendo");
      window.setTimeout(() => boton.classList.remove("abriendo"), 500);

      // Los efectos decorativos nunca deben impedir que se abra la carta.
      try {
        if (window.SorpresaComun && typeof window.SorpresaComun.estallarParticulas === "function") {
          window.SorpresaComun.estallarParticulas(boton, {
            simbolos: ["💗", "💖", "✨", "💫"],
            cantidad: 14,
          });
        }
      } catch (error) {
        console.warn("No se pudo iniciar la animación decorativa:", error);
      }

      try {
        if (window.SorpresaReproductor && typeof window.SorpresaReproductor.reproducirCategoria === "function") {
          window.SorpresaReproductor.reproducirCategoria("ambiente");
        }
      } catch (error) {
        console.warn("No se pudo iniciar la música ambiental:", error);
      }

      mostrarCartaInicial();
    });
  }

  if (btnOtro) {
    btnOtro.addEventListener("click", (event) => {
      try {
        if (window.SorpresaComun && typeof window.SorpresaComun.estallarParticulas === "function") {
          window.SorpresaComun.estallarParticulas(event.currentTarget, {
            simbolos: ["✨", "💫"],
            cantidad: 6,
          });
        }
      } catch (error) {
        console.warn("No se pudo iniciar la animación decorativa:", error);
      }
      mostrarVersoExtra();
    });
  }

  const closeButton = document.getElementById("modalClose");
  if (closeButton) closeButton.addEventListener("click", cerrar);
  if (overlay) {
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) cerrar();
    });
  }
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") cerrar();
  });
})();
