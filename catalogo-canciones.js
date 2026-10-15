/* =======================================================================
   CATALOGO-CANCIONES.JS — CATALOGO MUSICAL DE LA PLAYLIST DE ALEJA
   -----------------------------------------------------------------------
   Fuente de canciones: 1caciones.csv.
   Las canciones ajenas a esa lista se eliminan; no se mezclan catálogos.
   Cada entrada publicada aquí tiene una ID de un video de YouTube identificado.
   No se usan enlaces ni reproductores de Spotify o archivos de audio locales.

   Para añadir una canción:
   { titulo: "Título exacto", artista: "Artista", youtubeId: "ID_VERIFICADA"  },
   ======================================================================= */

const CATALOGO_CANCIONES = {
  amor: [
    { titulo: "Moment Of Your Life (feat. Coco Jones)", artista: "Brent Faiyaz; Coco Jones", youtubeId: "Jv17JsayCSI", nota: "canción de entrada que se conserva por petición expresa" },
    { titulo: "Dilemma", artista: "Nelly; Kelly Rowland", youtubeId: "8WYHDfJDPDc" },
    { titulo: "I Think I Love You Again", artista: "Aaron Taylor", youtubeId: "diAiHP1K-g0" },
    { titulo: "Trato de Olvidarte", artista: "Gonzalo Genek; Micro TDH; Lui5", youtubeId: "Z66Bv_N55zQ" },
    { titulo: "No quiero acostumbrarme", artista: "A.C.O", youtubeId: "iJy6xE17h-g" },
    { titulo: "The Way I Love You", artista: "Jorja Smith", youtubeId: "R25qYkkv_t8" },
    { titulo: "Antes de Morir (Scratches Dj Pho)", artista: "LosPetitFellas; Denise Gutiérrez; Dj Pho", youtubeId: "2vdIWr1TCBI" },
    { titulo: "Solo Tú", artista: "Macha y el Bloque Depresivo; Álvaro Henríquez", youtubeId: "lxPDvuV9Z88"  },
  ],
  filosofica: [
    { titulo: "Otra Canción Larga", artista: "Alcolirykoz", youtubeId: "aAwXhAV3LPE" },
    { titulo: "Centro de Acopio", artista: "Anyone/Cualkiera; Rapiphero", youtubeId: "iN4JYAXgqzY" },
    { titulo: "Ojos de Diablo", artista: "Zof Ziro; ZetaZeta", youtubeId: "DnETeFkRvHk" },
    { titulo: "No Copio", artista: "Crudo Means Raw", youtubeId: "OV4hbqYxRh0" },
    { titulo: "Es Épico", artista: "Canserbero", youtubeId: "bB8MTYLR1_w" },
    { titulo: "Stupid Love Story", artista: "Canserbero; Apache", youtubeId: "wmef2TEPGgo" },
    { titulo: "Mama Dejame Fumar", artista: "Asilo 38", youtubeId: "i3dCS-s0LBQ" },
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
    { titulo: "Balada para No Dormir - Bonus Track", artista: "Alcolirykoz", youtubeId: "h1p0N9s5YJw" },
    { titulo: "En Tono Sepia", artista: "No Rules Clan", youtubeId: "y6Uf9bi_Mtk" },
    { titulo: "Tararea", artista: "Alcolirykoz", youtubeId: "nmFdyBUAsfQ" },
    { titulo: "Discúlpame", artista: "Ali Aka Mind", youtubeId: "sqzdMYQKCdU" },
    { titulo: "Falsedades", artista: "Tres Coronas", youtubeId: "n1dgZ5xnQWY" },
    { titulo: "Envidias", artista: "Tres Coronas", youtubeId: "KRS0wPv9esQ" },
    { titulo: "El Imaginario", artista: "Alcolirykoz", youtubeId: "VBnufgtjtxU" },
    { titulo: "Coctel Espacial", artista: "Lianna; Gambeta", youtubeId: "McpW-vn070k" },
    { titulo: "Mi Barrio Es Mi Estado", artista: "Alcolirykoz", youtubeId: "UFmV2yg6Oao" },
    { titulo: "El Barman y el Chef", artista: "Alcolirykoz", youtubeId: "2fGU7PJCTpk" },
    { titulo: "La Eterna - Remix", artista: "Alcolirykoz", youtubeId: "SBOcJT0BeJA" },
    { titulo: "Házmelo Rap", artista: "Alcolirykoz", youtubeId: "P1qamoOHLYM" },
    { titulo: "Laura Ronda", artista: "Alcolirykoz", youtubeId: "1v14wNlGjdM" },
    { titulo: "El Tour de Sing Sing", artista: "Alcolirykoz; ToteKing", youtubeId: "b05PzMJqiaw" },
    { titulo: "Música para Planchar", artista: "Alcolirykoz; Sadat X", youtubeId: "t9mtMVfD6u4" },
    { titulo: "Trabajo Sucio", artista: "Lianna", youtubeId: "eKGrgYjeCNM" },
    { titulo: "Esta Va", artista: "Realidad Mental", youtubeId: "JVEN7Quzpeg" },
    { titulo: "A Veces", artista: "Al2 El Aldeano", youtubeId: "LQYOZFO5aB4" },
    { titulo: "Qué Tú Quieres?", artista: "Mabiland", youtubeId: "7C4t_d898_Q" },
    { titulo: "Bacatá", artista: "1703; El Kalvo; $trasse", youtubeId: "QF2M5IWCJNQ" },
    { titulo: "Vital (Téngase)", artista: "Crudo Means Raw", youtubeId: "cgJvtgZ7rBk" },
    { titulo: "Malpensante", artista: "Noiseferatu", youtubeId: "rThYUXZyTeA" },
    { titulo: "De la Cuna al Ataud", artista: "La Etnnia; Full Nelson", youtubeId: "iNL9MXulJCY" },
    { titulo: "Jaula de Oro - Original", artista: "Laberinto ELC", youtubeId: "BNLL8DJgkfI" },
    { titulo: "El Día de Mi Suerte", artista: "El Redcode", youtubeId: "ApqRPZ8xO6g" },
    { titulo: "Rifo los Lunes", artista: "Alcolirykoz; Gordo Sarkasmus", youtubeId: "Z6vTjCPva5Q" },
    { titulo: "Clapzz", artista: "Alcolirykoz", youtubeId: "W486I2dtYA8" },
    { titulo: "El Sexto Sentido", artista: "Alcolirykoz", youtubeId: "tjHgj-p_XiI" },
    { titulo: "La Revancha de los Timidos", artista: "Alcolirykoz; Jannyval", youtubeId: "SFMtkR0iSj0" },
    { titulo: "Let My People", artista: "Alcolirykoz", youtubeId: "Kjbc9C9ZQAA" },
    { titulo: "Me Volví Loco", artista: "King Kong Click; Bubaseta; Subwoffer", youtubeId: "MsnJzE8Cbw0" },
    { titulo: "Tuyo", artista: "Credo V Daniels", youtubeId: "8onYUmsBMxs" },
    { titulo: "Partículas", artista: "Granuja", youtubeId: "E6oZorQDiN0" },
    { titulo: "Aguanilé", artista: "Alcolirykoz", youtubeId: "983zfhMym8Q" },
    { titulo: "I Get Money", artista: "50 Cent", youtubeId: "GO22Z0T3qPE"  },
  ],
  hot: [
    { titulo: "Parla Pura", artista: "Rap Bang Club", youtubeId: "9Ulu3Ysg6uw" },
    { titulo: "Queen Tings (Santi Remix)", artista: "Masego; Cruel Santino; Santi", youtubeId: "UntyHH7Pfs0" },
    { titulo: "Between the Sheets", artista: "The Isley Brothers", youtubeId: "TNDb8qKZEX8" },
    { titulo: "Boombastic", artista: "Shaggy", youtubeId: "f0sVDGFoIOI"  },
  ],
  ambiente: [
    { titulo: "La Noche y Tú", artista: "Barbaro el Urbano Vargas", youtubeId: "XSN_8UblItk" },
    { titulo: "Déjame Entrar", artista: "Cultura Profética", youtubeId: "IAhVESdwvIU" },
    { titulo: "good denim", artista: "jalen chords", youtubeId: "_2Lnj5N9lCM" },
    { titulo: "Antonia", artista: "Gondwana", youtubeId: "exxkGyu3G1Q" },
    { titulo: "Fui Silencio", artista: "Sofía Gabanna; Jazzmind", youtubeId: "KV2ECDqPyuY" },
    { titulo: "Keep Your Worries", artista: "Guru; Angie Stone", youtubeId: "7R0D6ryRUqQ"  },
  ]
};

if (typeof window !== "undefined") window.CATALOGO_CANCIONES = CATALOGO_CANCIONES;
