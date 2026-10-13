/* =======================================================================
   SCRIPT-PORTADA.JS — lógica del corazón inicial.
   No necesitas editar este archivo para cambiar textos: eso se hace
   en contenido-portada.js.
   ======================================================================= */

(function () {
  "use strict";

  if (typeof CARTA_INICIAL === "undefined" || typeof VERSOS_EXTRA === "undefined") {
    const overlay = document.getElementById("modalOverlay");
    if (overlay) {
      overlay.classList.add("is-open");
      overlay.querySelector(".modal-card").innerHTML =
        '<div style="padding:1rem;color:#ffdede;font-family:sans-serif;font-size:.92rem;line-height:1.5;">' +
        "<strong>⚠️ No se pudo leer el contenido de la portada.</strong><br><br>" +
        "Revisa que el archivo <code>contenido-portada.js</code> esté en la misma carpeta que <code>index.html</code> y que no haya sido renombrado.</div>";
    }
    return;
  }

  const overlay = document.getElementById("modalOverlay");
  const titulo = document.getElementById("modalTitle");
  const cuerpo = document.getElementById("modalBody");
  const firma = document.getElementById("modalSignature");
  const btnOtro = document.getElementById("btnOtroMensaje");
  const hint = document.getElementById("hint");

  function mostrarCartaInicial() {
    titulo.textContent = CARTA_INICIAL.titulo;
    cuerpo.innerHTML = CARTA_INICIAL.poema.map((p) => "<p>" + p + "</p>").join("");
    firma.textContent = CARTA_INICIAL.firma;
    btnOtro.style.display = "inline-block";
    abrir();
  }

  function mostrarVersoExtra() {
    const verso = VERSOS_EXTRA[Math.floor(Math.random() * VERSOS_EXTRA.length)];
    titulo.textContent = "Un momento más...";
    cuerpo.innerHTML = "<p>" + verso + "</p>";
    firma.textContent = "";
  }

  function abrir() {
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
  }
  function cerrar() {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
  }

  document.getElementById("heartBtn").addEventListener("click", (e) => {
    hint.style.opacity = "0";

    const heart = e.currentTarget;
    heart.classList.add("abriendo");
    setTimeout(() => heart.classList.remove("abriendo"), 500);

    if (window.SorpresaComun) {
      window.SorpresaComun.estallarParticulas(heart, {
        simbolos: ["💗", "💖", "✨", "💫"],
        cantidad: 14,
      });
    }

    if (window.SorpresaReproductor) {
      window.SorpresaReproductor.reproducirCategoria("ambiente");
    }

    mostrarCartaInicial();
  });

  btnOtro.addEventListener("click", (e) => {
    if (window.SorpresaComun) {
      window.SorpresaComun.estallarParticulas(e.currentTarget, {
        simbolos: ["✨", "💫"],
        cantidad: 6,
      });
    }
    mostrarVersoExtra();
  });

  document.getElementById("modalClose").addEventListener("click", cerrar);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) cerrar(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrar(); });
})();
