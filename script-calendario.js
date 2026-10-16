/* =======================================================================
   SCRIPT-CALENDARIO.JS — el corazón (nunca mejor dicho) del calendario.
   No necesitas editar este archivo para cambiar contenido: eso se
   hace en contenido-calendario.js.
   ======================================================================= */

(function () {
  "use strict";

  const CLAVE_PROGRESO = "aleja_fin_2026_progreso_v1";

  /* -----------------------------------------------------------------
     0) VERIFICACIÓN DE SEGURIDAD
     -----------------------------------------------------------------
     Si contenido-calendario.js no se cargó bien (por ejemplo, un
     copiar/pegar incompleto, o el archivo no está en la misma
     carpeta), en vez de quedar la página en blanco, mostramos un
     aviso claro para saber qué revisar.
     ----------------------------------------------------------------- */
  if (typeof CALENDARIO === "undefined" || !Array.isArray(CALENDARIO) || CALENDARIO.length === 0) {
    mostrarErrorCarga(
      "No se pudo leer el contenido del calendario.",
      "Revisa que el archivo <code>contenido-calendario.js</code> esté en la misma carpeta que <code>calendario.html</code>, que no lo hayas renombrado, y que se haya copiado completo (son 78 días, revisa que el archivo esté completo)."
    );
    return;
  }

  const numeros = CALENDARIO.map((d) => d && d.dia);
  const repetidos = numeros.filter((n, i) => numeros.indexOf(n) !== i);
  const diasInvalidos = CALENDARIO
    .map((d, i) => {
      const valido = d &&
        Number.isInteger(d.dia) &&
        d.dia >= 1 &&
        d.dia <= CALENDARIO.length &&
        typeof d.categoria === "string" &&
        typeof d.icono === "string" &&
        typeof d.tono === "string" &&
        d.color &&
        typeof d.buenosDias === "string" &&
        Array.isArray(d.poema) &&
        d.poema.length > 0 &&
        typeof d.buenasNoches === "string";
      return valido ? null : i + 1;
    })
    .filter((v) => v !== null);

  if (diasInvalidos.length > 0 || repetidos.length > 0 || numeros.length !== new Set(numeros).size) {
    mostrarErrorCarga(
      "El contenido del calendario necesita revisión.",
      "Días con estructura incompleta: " + (diasInvalidos.length ? diasInvalidos.join(", ") : "ninguno") +
      ". Días repetidos: " + (repetidos.length ? [...new Set(repetidos)].join(", ") : "ninguno") +
      ". El calendario debe contener una secuencia única de 1 a " + CALENDARIO.length + "."
    );
    return;
  }

  function mostrarErrorCarga(titulo, detalle) {
    const grid = document.getElementById("diasGrid");
    if (!grid) return;
    grid.style.display = "block";
    grid.innerHTML =
      '<div style="max-width:420px;margin:0 auto;padding:1.2rem 1.4rem;border-radius:14px;' +
      'background:rgba(255,80,80,.08);border:1px solid rgba(255,120,120,.35);color:#ffdede;' +
      'font-family:sans-serif;font-size:.92rem;line-height:1.5;text-align:left;">' +
      "<strong>⚠️ " + titulo + "</strong><br><br>" + detalle + "</div>";
  }

  const TOTAL_DIAS = CALENDARIO.length;

  /* -----------------------------------------------------------------
     1) PROGRESO (guardado en el navegador de quien lo abre)
     ----------------------------------------------------------------- */
  function leerProgreso() {
    try {
      const raw = localStorage.getItem(CLAVE_PROGRESO);
      if (!raw) return { completados: [] };
      const data = JSON.parse(raw);
      if (!Array.isArray(data.completados)) return { completados: [] };
      return data;
    } catch (e) {
      return { completados: [] };
    }
  }

  function guardarProgreso(progreso) {
    try {
      localStorage.setItem(CLAVE_PROGRESO, JSON.stringify(progreso));
    } catch (e) {
      /* si el navegador bloquea localStorage, seguimos sin guardar */
    }
  }

  function diaActualDesbloqueado(progreso) {
    if (progreso.completados.length === 0) return 1;
    const maximo = Math.max(...progreso.completados);
    return Math.min(maximo + 1, TOTAL_DIAS);
  }

  /* -----------------------------------------------------------------
     2) RENDER DE LA CUADRÍCULA
     ----------------------------------------------------------------- */
  const grid = document.getElementById("diasGrid");
  const textoProgreso = document.getElementById("textoProgreso");
  const barraRelleno = document.getElementById("barraRelleno");

  function renderGrid() {
    const progreso = leerProgreso();
    const actual = diaActualDesbloqueado(progreso);
    const completos = progreso.completados.length;

    textoProgreso.textContent =
      completos >= TOTAL_DIAS
        ? "¡Completaste los " + TOTAL_DIAS + " días! 🎉"
        : "Día " + actual + " de " + TOTAL_DIAS;
    barraRelleno.style.width = Math.round((completos / TOTAL_DIAS) * 100) + "%";
    actualizarSorpresaFinal(progreso);

    grid.innerHTML = "";
    CALENDARIO.forEach((dia) => {
      const completado = progreso.completados.includes(dia.dia);
      const esActual = !completado && dia.dia === actual;
      const bloqueado = !completado && !esActual;

      const nodo = document.createElement("button");
      nodo.type = "button";
      nodo.className =
        "dia-nodo " +
        (completado ? "esta-completado" : esActual ? "esta-actual" : "esta-bloqueado");
      nodo.disabled = bloqueado;
      nodo.setAttribute("aria-label", "Día " + dia.dia + (dia.fechaTexto ? " · " + dia.fechaTexto : ""));

      if (completado || esActual) {
        nodo.style.setProperty("--item-color", dia.color.principal);
        nodo.style.setProperty("--item-suave", dia.color.suave);
        nodo.style.setProperty("--item-oscuro", dia.color.oscuro);
      }

      const icono = completado || esActual ? dia.icono : "🔒";
      nodo.innerHTML =
        '<span class="dia-nodo__icono">' + icono + "</span>" +
        '<span class="dia-nodo__numero">Día ' + dia.dia + "</span>" +
        (completado ? '<span class="dia-nodo__check">✓</span>' : "");

      if (!bloqueado) {
        nodo.addEventListener("click", (e) => abrirDia(dia.dia, e.currentTarget));
      }

      grid.appendChild(nodo);
    });
  }

  /* -----------------------------------------------------------------
     2.5) SORPRESA SECRETA: solo se revela al completar los 78 días
     ----------------------------------------------------------------- */
  const sorpresaFinal = document.getElementById("sorpresaFinal");
  const abrirSorpresaFinal = document.getElementById("abrirSorpresaFinal");
  const contenidoSorpresaFinal = document.getElementById("sorpresaFinalContenido");
  const CANCION_SORPRESA_FINAL = {
    dia: 79,
    tono: "amor",
    youtubeId: "vBy7FaapGRo",
    cancionTitulo: "Best Part",
    cancionArtista: "Daniel Caesar ft. H.E.R."
  };

  function actualizarSorpresaFinal(progreso) {
    const todosCompletados = CALENDARIO.every((dia) => progreso.completados.includes(dia.dia));
    sorpresaFinal.hidden = !todosCompletados;
    if (!todosCompletados) {
      contenidoSorpresaFinal.hidden = true;
      abrirSorpresaFinal.setAttribute("aria-expanded", "false");
      abrirSorpresaFinal.textContent = "✧ Hay algo más para ti, Aleja ✧";
    }
  }

  abrirSorpresaFinal.addEventListener("click", () => {
    const progreso = leerProgreso();
    const todosCompletados = CALENDARIO.every((dia) => progreso.completados.includes(dia.dia));
    if (!todosCompletados) {
      actualizarSorpresaFinal(progreso);
      return;
    }
    const abierto = abrirSorpresaFinal.getAttribute("aria-expanded") === "true";
    abrirSorpresaFinal.setAttribute("aria-expanded", String(!abierto));
    contenidoSorpresaFinal.hidden = abierto;
    abrirSorpresaFinal.textContent = abierto
      ? "✧ Hay algo más para ti, Aleja ✧"
      : "♡ Una última cosa que quiero decirte ♡";

    if (!abierto) {
      // Usamos el mismo reproductor global que se activa al abrir cualquier día,
      // para que la canción suene por la barra musical habitual del calendario.
      if (window.SorpresaReproductor && typeof window.SorpresaReproductor.reproducirDia === "function") {
        window.SorpresaReproductor.reproducirDia(CANCION_SORPRESA_FINAL);
      }
      contenidoSorpresaFinal.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  /* -----------------------------------------------------------------
     3) MODAL DEL DÍA — con pasos (buenos días → mensaje → buenas noches)
     ----------------------------------------------------------------- */
  const overlay = document.getElementById("modalOverlay");
  const card = document.getElementById("modalCard");
  const elIcono = document.getElementById("modalIcon");
  const elChip = document.getElementById("modalChip");
  const elTitulo = document.getElementById("modalTitle");
  const elPasos = document.getElementById("modalSteps");
  const elContenido = document.getElementById("pasoContenido");
  const btnAnterior = document.getElementById("btnAnterior");
  const btnSiguiente = document.getElementById("btnSiguiente");

  let diaAbierto = null;
  let pasoActual = 0;
  const TOTAL_PASOS = 3;

  function abrirDia(numeroDia, origenEl) {
    diaAbierto = CALENDARIO.find((d) => d.dia === numeroDia);
    if (!diaAbierto) return;
    pasoActual = 0;

    if (origenEl && window.SorpresaComun) {
      window.SorpresaComun.estallarParticulas(origenEl, {
        simbolos: [diaAbierto.icono, "✨"],
        cantidad: 10,
      });
    }

    card.style.setProperty("--card-principal", diaAbierto.color.principal);
    card.style.setProperty("--card-suave", diaAbierto.color.suave);
    card.style.setProperty("--card-oscuro", diaAbierto.color.oscuro);

    elIcono.textContent = diaAbierto.icono;
    elChip.textContent = "Día " + diaAbierto.dia + (diaAbierto.fechaTexto ? " · " + diaAbierto.fechaTexto : "") + " · " + diaAbierto.categoria;

    renderPasos();
    renderPaso();

    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");

    // Mostrar primero la tarjeta y luego solicitar el audio: así el iframe
    // ya está visible cuando recibe la orden de reproducción del clic.
    if (window.SorpresaReproductor) {
      if (typeof window.SorpresaReproductor.reproducirDia === "function") {
        window.SorpresaReproductor.reproducirDia(diaAbierto);
      } else {
        window.SorpresaReproductor.reproducirCategoria(diaAbierto.tono || "amor");
      }
    }
  }

  function renderPasos() {
    elPasos.innerHTML = "";
    for (let i = 0; i < TOTAL_PASOS; i++) {
      const dot = document.createElement("span");
      dot.className = "modal-steps__dot" + (i === pasoActual ? " is-active" : "");
      elPasos.appendChild(dot);
    }
  }

  const FASES_LUNA = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘", "🌙", "🌛", "🌜"];

  function renderPaso() {
    renderPasos();
    const d = diaAbierto;
    const elDecoracion = document.getElementById("pasoDecoracion");

    overlay.classList.remove("modo-manana", "modo-noche");

    if (pasoActual === 0) {
      elTitulo.textContent = "Buenos días";
      elContenido.innerHTML = "<p>" + d.buenosDias + "</p>";
      overlay.classList.add("modo-manana");
      elDecoracion.textContent = "☀️";
    } else if (pasoActual === 1) {
      elTitulo.textContent = "Para hoy";
      let html = d.poema.map((p) => "<p>" + p + "</p>").join("");
      if (d.imagen) {
        html += '<img class="modal-imagen" src="' + d.imagen + '" alt="">';
      }
      if (d.detalle) {
        html += '<p class="modal-detalle">' + d.detalle + "</p>";
      }
      if (d.cancionTitulo) { html += '<p class="modal-cancion">♫ ' + d.cancionTitulo + ' · ' + d.cancionArtista + '</p>'; }
      elContenido.innerHTML = html;
      elDecoracion.textContent = "";
    } else {
      elTitulo.textContent = "Buenas noches";
      elContenido.innerHTML = "<p>" + d.buenasNoches + "</p>";
      overlay.classList.add("modo-noche");
      // una fase de luna distinta cada vez que se abre este paso, sin
      // que tenga que coincidir con la luna real de hoy
      elDecoracion.textContent = FASES_LUNA[Math.floor(Math.random() * FASES_LUNA.length)];
    }

    btnAnterior.style.visibility = pasoActual === 0 ? "hidden" : "visible";

    const progreso = leerProgreso();
    const yaCompletado = progreso.completados.includes(d.dia);

    if (pasoActual === TOTAL_PASOS - 1) {
      btnSiguiente.textContent = yaCompletado ? "Cerrar" : "Cerrar día ✓";
    } else {
      btnSiguiente.textContent = "Siguiente →";
    }
  }

  function siguientePaso() {
    if (pasoActual < TOTAL_PASOS - 1) {
      pasoActual++;
      renderPaso();
      return;
    }
    // último paso: marcar como completado (si no lo estaba) y cerrar
    const progreso = leerProgreso();
    if (!progreso.completados.includes(diaAbierto.dia)) {
      progreso.completados.push(diaAbierto.dia);
      guardarProgreso(progreso);
      renderGrid();
    }
    cerrarModal();
  }

  function anteriorPaso() {
    if (pasoActual > 0) {
      pasoActual--;
      renderPaso();
    }
  }

  function cerrarModal() {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    if (window.SorpresaReproductor && typeof window.SorpresaReproductor.ocultarVideoDia === "function") {
      window.SorpresaReproductor.ocultarVideoDia();
    }
  }

  btnSiguiente.addEventListener("click", siguientePaso);
  btnAnterior.addEventListener("click", anteriorPaso);
  document.getElementById("modalClose").addEventListener("click", cerrarModal);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) cerrarModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrarModal(); });

  /* -----------------------------------------------------------------
     4) REINICIAR PROGRESO (para pruebas, o si ella quiere volver a empezar)
     ----------------------------------------------------------------- */
  document.getElementById("reiniciarLink").addEventListener("click", () => {
    const confirmado = window.confirm(
      "¿Seguro que quieres reiniciar el calendario? Esto vuelve a bloquear todos los días."
    );
    if (confirmado) {
      guardarProgreso({ completados: [] });
      renderGrid();
    }
  });

  /* -----------------------------------------------------------------
     5) ACCESIBILIDAD Y CIERRE DEL MODAL
     ----------------------------------------------------------------- */
  overlay.addEventListener("transitionend", () => {
    if (overlay.classList.contains("is-open")) {
      btnSiguiente.focus({ preventScroll: true });
    }
  });

  /* -----------------------------------------------------------------
     6) INICIO
     ----------------------------------------------------------------- */
  renderGrid();
})();
