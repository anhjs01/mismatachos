/* =======================================================================
   CATALOGO-CANCIONES.JS — CATALOGO MUSICAL DE LA PLAYLIST DE ALEJA
   -----------------------------------------------------------------------
   Fuente de canciones: 1caciones.csv.
   Las canciones ajenas a esa lista se eliminan; no se mezclan catálogos.
   Cada entrada publicada aquí tiene una ID de un video de YouTube identificado.
   No se usan enlaces ni reproductores de Spotify o archivos de audio locales.

   Para añadir una canción:
   { titulo: "Título exacto", artista: "Artista", youtubeId: "ID_VERIFICADA" }
   ======================================================================= */

const CATALOGO_CANCIONES = {
  amor: [
    { titulo: "Moment Of Your Life (feat. Coco Jones)", artista: "Brent Faiyaz; Coco Jones", youtubeId: "Jv17JsayCSI", nota: "canción de entrada que se conserva por petición expresa" }
  ],
  filosofica: [
    { titulo: "Otra Canción Larga", artista: "Alcolirykoz", youtubeId: "aAwXhAV3LPE" },
    { titulo: "Anestesia Local - Episodio 2", artista: "Alcolirykoz", youtubeId: "MRyZ6faVKWQ" },
    { titulo: "El Despilfarro", artista: "Alcolirykoz", youtubeId: "iKvJo5Vs244" },
    { titulo: "Noicanicula", artista: "La Etnnia", youtubeId: "z3ru8GXgHJE" },
    { titulo: "Nrs In Da Area", artista: "No Rules Clan; Ignorancia Sofisticada", youtubeId: "O4pIfDuLk_k" },
    { titulo: "De Pe a Pa", artista: "Granuja", youtubeId: "auAIsRn0mPM" },
    { titulo: "Quien Va", artista: "No Rules Clan; Alcolirykoz; El Arkeologo", youtubeId: "mF_8BMwhH5A" },
    { titulo: "Las Tetas D.", artista: "Crack Family", youtubeId: "LQhERHd-k0E" },
    { titulo: "Murderah", artista: "Rap Bang Club; Norick", youtubeId: "6Xw1_Kuv9ac" },
    { titulo: "La Jungla", artista: "Flaco Flow y Melanina", youtubeId: "NcUvzYvGO2U" },
    { titulo: "Bogotá Mi Barrio", artista: "Todo Copas", youtubeId: "jj8ZIUfWCMM" },
    { titulo: "Algo Anda Mal", artista: "Clan Hueso Duro", youtubeId: "nFCFxtW8Fww" },
    { titulo: "Qué Hay Pa' Hacer", artista: "Granuja", youtubeId: "M6CG-CU07n4" },
    { titulo: "No Está en Venta", artista: "Alcolirykoz", youtubeId: "Se6Cd4sW3ks" },
    { titulo: "Tararea", artista: "Alcolirykoz", youtubeId: "nmFdyBUAsfQ" }
  ],
  hot: [],
  ambiente: [
    { titulo: "La Noche y Tú", artista: "Barbaro el Urbano Vargas", youtubeId: "XSN_8UblItk" }
  ]
};

if (typeof window !== "undefined") window.CATALOGO_CANCIONES = CATALOGO_CANCIONES;
