/* =======================================================================
   CATALOGO-CANCIONES.JS — CATALOGO MUSICAL · EDICION ALEJA
   -----------------------------------------------------------------------
   IMPORTANTE: este archivo contiene SOLO canciones con youtubeId valido.
   No hay placeholders ni entradas con ID vacio dentro de las categorias.

   COMO AÑADIR UNA CANCION
   1) Busca el video correcto en YouTube.
   2) Copia el ID de 11 caracteres de la URL, por ejemplo:
      https://www.youtube.com/watch?v=XXXXXXXXXXX
      -> youtubeId: "XXXXXXXXXXX"
   3) Añade el objeto a la categoria que corresponda.
   4) No hace falta modificar reproductor.js.

   Si una cancion es especifica de un dia, puedes fijarla en
   contenido-calendario.js usando cancionUrl:
      cancionUrl: "https://www.youtube.com/watch?v=XXXXXXXXXXX"

   El reproductor mantiene un historial por categoria para no repetir la
   misma cancion hasta haber recorrido las disponibles.
   ======================================================================= */

const CATALOGO_CANCIONES = {
  amor: [
    { titulo: "Hecha Pa' Mí", artista: "Grupo Frontera", youtubeId: "IbE7peGTpmc", nota: "ya se la han compartido antes 💛" },
    { titulo: "Pero No Te Enamores", artista: "Fuerza Regida", youtubeId: "qGTBrBTFKOM", nota: "otra que ya se han compartido" },
    { titulo: "Perfecta", artista: "Camilo", youtubeId: "8BRXjKvWrtQ" },
    { titulo: "Favorito", artista: "Camilo", youtubeId: "2mY7AFTtYwQ" },
    { titulo: "Vivir Mi Vida", artista: "Marc Anthony", youtubeId: "YXnjy5YlDwk", nota: "salsa, para los días más alegres" },
    { titulo: "Cali Pachanguero", artista: "Grupo Niche", youtubeId: "7KxkMLAZlzw", nota: "salsa clásica, para bailar" },
    { titulo: "Cómo Te Atreves", artista: "Morat", youtubeId: "_gm5piKnrS4" },
    { titulo: "pa quererte", artista: "Rels B", youtubeId: "XQeBTVeWkDo" },
    { titulo: "Lo que hay x aquí", artista: "Rels B", youtubeId: "qWCup_EZSWE" },
    { titulo: "Te Quiero Tanto", artista: "Kevin Kaarl", youtubeId: "q07Gd6Q-7dY" },
    { titulo: "Como Me Encanta", artista: "Kevin Kaarl", youtubeId: "OgzNyN2bWac" },
    { titulo: "Die For You", artista: "The Weeknd", youtubeId: "gSo0YiGPgHk" },
    { titulo: "At Last", artista: "Etta James", youtubeId: "1qJU8G7gR_g" },
    { titulo: "Eres", artista: "Café Tacvba", youtubeId: "98Akpf1ph2o" },
    { titulo: "All of Me", artista: "John Legend", youtubeId: "450p7goxZqg" },
    { titulo: "Perfect", artista: "Ed Sheeran", youtubeId: "2Vv-BfVoq4g" },
    { titulo: "Glue Song", artista: "beabadoobee", youtubeId: "y1cBhJLNNXU" },
    { titulo: "Best Part", artista: "Daniel Caesar feat. H.E.R.", youtubeId: "vBy7FaapGRo" },
    { titulo: "Until I Found You", artista: "Stephen Sanchez", youtubeId: "GxldQ9eX2wo" },
    { titulo: "Disfruto", artista: "Carla Morrison", youtubeId: "_ruEj-XK1lA" },
    { titulo: "Te Mando Flores", artista: "Fonseca", youtubeId: "qTLd6u0ZW6c" },
    { titulo: "Bendita Tu Luz", artista: "Maná & Juan Luis Guerra", youtubeId: "44kityInDvM" },
    { titulo: "Darte un Beso", artista: "Prince Royce", youtubeId: "bdOXnTbyk0g" },
    { titulo: "Robarte un Beso", artista: "Carlos Vives & Sebastián Yatra", youtubeId: "mtau4v6foha" },
    { titulo: "Bachata en Fukuoka", artista: "Juan Luis Guerra", youtubeId: "_4NBD3SqBwg" },
    { titulo: "Mi Persona Favorita", artista: "Alejandro Sanz & Camila Cabello", youtubeId: "W4AiOKlOO0Q" },
    { titulo: "Besos en Guerra", artista: "Morat", youtubeId: "1oeD2m2UQAI" },
    { titulo: "There's Nothing Holdin' Me Back", artista: "Shawn Mendes", youtubeId: "dT2owtxkU8k" },
    { titulo: "Something", artista: "The Beatles", youtubeId: "qCY80SdwBVI" },
    { titulo: "A Thousand Years", artista: "Christina Perri", youtubeId: "rtOvBOTyX00" },
    { titulo: "Just The Way You Are", artista: "Bruno Mars", youtubeId: "LjhCEhWiKXk" },
    { titulo: "Ojitos Lindos", artista: "Bad Bunny & Bomba Estéreo", youtubeId: "7GDp7S1HgSk" },
    { titulo: "Make You Feel My Love", artista: "Adele", youtubeId: "0put0_a--Ng" },
    { titulo: "Día Tras Día", artista: "Andrés Cepeda", youtubeId: "g3ZzqseVv6Q" },
    { titulo: "Amor Libre", artista: "Nach (feat. Shuga Wuga)", youtubeId: "tCo16l-X2QQ" },
    { titulo: "Querer Querernos", artista: "Canserbero", youtubeId: "Ei7Hp_4FbGY" },
    { titulo: "Eres Tú", artista: "Mocedades", youtubeId: "Tw69WAn2-_0" },
    { titulo: "Volvamos a Ser Novios", artista: "Silvestre Dangond & Juancho De La Espriella", youtubeId: "gBOuViKzj1Y" },
    { titulo: "La Bachata", artista: "Manuel Turizo", youtubeId: "TiM_TFpT_DE" },
    { titulo: "Todo de Ti", artista: "Rauw Alejandro", youtubeId: "CFPLIaMpGrY" },
    { titulo: "Lo Que en Ti Veo", artista: "Kany García & Nahuel Pennisi", youtubeId: "CrTGrpnlsFI" },
    { titulo: "Volví a Nacer", artista: "Carlos Vives", youtubeId: "CJ_zRSv3Hr8" },
    { titulo: "From The Start", artista: "Laufey", youtubeId: "lSD_L-xic9o", nota: "video oficial completo" },
    { titulo: "Line Without a Hook", artista: "Ricky Montgomery feat. mxmtoon", youtubeId: "TM-LcROZaFs", nota: "lyric video oficial completo" },
    { titulo: "Get You", artista: "Daniel Caesar feat. Kali Uchis", youtubeId: "WFLGrpGemLg", nota: "audio oficial de YouTube" },
    { titulo: "Mi Corazoncito", artista: "Aventura", youtubeId: "z2pt4CN4rhc", nota: "bachata romántica; video oficial completo" },
    { titulo: "Inmortal", artista: "Aventura", youtubeId: "XlmaJ-yU46U", nota: "bachata; video oficial completo" },
    { titulo: "Dile al Amor", artista: "Aventura", youtubeId: "ebakGrBkTog", nota: "bachata; video completo" },
    { titulo: "Una Aventura", artista: "Grupo Niche", youtubeId: "JBUMs9Sil1s", nota: "salsa romántica; audio oficial" },
    { titulo: "Gotas de Lluvia", artista: "Grupo Niche", youtubeId: "Kg15fQkXR98", nota: "salsa romántica; audio oficial" },
    { titulo: "Cásate Conmigo", artista: "Silvestre Dangond & Nicky Jam", youtubeId: "cpN78ZjnCZY", nota: "vallenato/pop; video oficial completo" },
    { titulo: "Las Locuras Mías", artista: "Silvestre Dangond", youtubeId: "LqKscPDW8Y0", nota: "vallenato romántico; video oficial completo" },
    { titulo: "Déjame Entrar", artista: "Carlos Vives", youtubeId: "DqPMV_hpitA", nota: "video oficial completo" },
    { titulo: "Los Caminos de la Vida", artista: "Los Diablitos", youtubeId: "I-cOD2x-qBs", nota: "vallenato; video completo" },
    { titulo: "Me Ilusioné", artista: "Binomio de Oro de América", youtubeId: "wDeZiEZGS3Q", nota: "vallenato; video oficial completo" },
    { titulo: "Amor Completo", artista: "Mon Laferte", youtubeId: "PQlG1gznMBE", nota: "video oficial completo; sugerida en las cartas" },
    { titulo: "Burbujas de Amor", artista: "Juan Luis Guerra 4.40", youtubeId: "PWGwF_B0bxk", nota: "video completo; sugerida en las cartas" },
    { titulo: "Del Mar", artista: "Ozuna, Doja Cat & Sia", youtubeId: "K2kUyHgadQo", nota: "video oficial completo; sugerida en el día 4" },
    { titulo: "La Reina", artista: "Maluma", youtubeId: "VFKu6QBbOa4", nota: "video oficial completo; sugerida en el día 76" },
    { titulo: "Sigo Extrañándote", artista: "J Balvin", youtubeId: "nZ0zbsZOdwg", nota: "video oficial completo; sugerida en varias cartas" },
    { titulo: "Tú Sí Sabes Quererme", artista: "Natalia Lafourcade", youtubeId: "qTd2P94Qhp8", nota: "video oficial completo; sugerida en varias cartas" },
    { titulo: "La Mitad", artista: "Camilo", youtubeId: "yz7oP-JqaXk", nota: "versión completa oficial; sugerida en varias cartas" },
    { titulo: "A Dios Le Pido", artista: "Juanes", youtubeId: "kMIaYXxLnUA", nota: "video oficial completo; canal oficial de Juanes" },
    { titulo: "Me Enamora", artista: "Juanes", youtubeId: "voxgN3Dhjuo", nota: "video oficial completo; canal oficial de Juanes" },
    { titulo: "Entra En Mi Vida", artista: "Sin Bandera", youtubeId: "-hoZpSoKAYE", nota: "video oficial completo; canal oficial de Sin Bandera" },
    { titulo: "Kilómetros", artista: "Sin Bandera", youtubeId: "oR5rpFzaBaA", nota: "video oficial completo; canal oficial de Sin Bandera" },
    { titulo: "Sirena", artista: "Sin Bandera", youtubeId: "QYH8tKRdTzE", nota: "video completo; canal oficial de Sin Bandera" },
    { titulo: "Será", artista: "Sin Bandera", youtubeId: "pqvI-6NRN_A", nota: "video oficial completo; canal oficial de Sin Bandera" },
    { titulo: "Que Lloro", artista: "Sin Bandera", youtubeId: "Fk5oL0mgI08", nota: "video oficial completo; canal oficial de Sin Bandera" },
    { titulo: "Mientes Tan Bien", artista: "Sin Bandera", youtubeId: "tg7QRlINFgQ", nota: "video oficial completo; canal oficial de Sin Bandera" },
    { titulo: "Que Me Alcance La Vida", artista: "Sin Bandera", youtubeId: "fbqXGMXVgB8", nota: "video oficial completo; canal oficial de Sin Bandera" },
    { titulo: "Todo Cambió", artista: "Camila", youtubeId: "gO8-9OWzPOQ", nota: "video oficial completo; canal oficial de Camila" },
    { titulo: "Incondicional", artista: "Prince Royce", youtubeId: "h_fXySfFmM8", nota: "video oficial completo; canal oficial/label verificado" },
    { titulo: "Espacio Sideral", artista: "Jesse & Joy", youtubeId: "BuY7HYSDoTM", nota: "video oficial completo; canal oficial de Jesse & Joy" },
    { titulo: "¡Corre!", artista: "Jesse & Joy", youtubeId: "P2hM9CLAMu4", nota: "video oficial completo; canal oficial de Jesse & Joy" },
    { titulo: "Por Amarte Tanto", artista: "Melendi", youtubeId: "z7Uwv5QuOys", nota: "videoclip oficial completo; canal oficial de Melendi" },
    { titulo: "Prometo", artista: "Pablo Alborán", youtubeId: "lW32zvWW4R4", nota: "audio oficial completo; canal oficial de Pablo Alborán" },
    { titulo: "La Distancia", artista: "Manuel Medrano", youtubeId: "dH7_By3Y2i0", nota: "video oficial completo; canal oficial de Manuel Medrano" },
    { titulo: "Creo en Ti", artista: "Reik", youtubeId: "cqGyeFvhm8U", nota: "video oficial completo; verificación previa" },
  ],

  filosofica: [
    { titulo: "Quién Va", artista: "No Rules Clan feat. Alcolirykoz", youtubeId: "mF_8BMwhH5A", nota: "video oficial de No Rules Clan" },
    { titulo: "La Jungla", artista: "Flaco Flow y Melanina", youtubeId: "NcUvzYvGO2U", nota: "video oficial de Audio Lírica" },
    { titulo: "Bogotá Mi Barrio", artista: "Todo Copas", youtubeId: "jj8ZIUfWCMM", nota: "video oficial del canal de Todo Copas" },
    { titulo: "Otra Canción Larga", artista: "Alcolirykoz", youtubeId: "QAN3hBN5tzE", nota: "video oficial del canal de Alcolirykoz" },
    { titulo: "El Despilfarro", artista: "Alcolirykoz", youtubeId: "iKvJo5Vs244", nota: "video oficial del canal de Alcolirykoz" },
    { titulo: "Tararea", artista: "Alcolirykoz", youtubeId: "gU6HGs32_0M", nota: "versión sinfónica del canal oficial de Alcolirykoz" },
    { titulo: "De Pe a Pa", artista: "Granuja", youtubeId: "auAIsRn0mPM", nota: "video de Moebiuz, canal verificado" },
    { titulo: "NRS In Da Area", artista: "No Rules Clan", youtubeId: "O4pIfDuLk_k", nota: "video oficial del canal de No Rules Clan" },
    { titulo: "Noicanicula", artista: "La Etnnia", youtubeId: "z3ru8GXgHJE", nota: "video oficial del canal de La Etnnia" },
    { titulo: "River Flows in You", artista: "Yiruma", youtubeId: "fiBvOKmuWKg" },
    { titulo: "Nuvole Bianche", artista: "Ludovico Einaudi", youtubeId: "sR2W2scFS4Y" },
    { titulo: "Rayando el Sol", artista: "Maná", youtubeId: "8lbsQyMhMT8" },
    { titulo: "Vivir Sin Aire", artista: "Maná", youtubeId: "Mr1pHZ2_xJU" },
    { titulo: "Mystery of Love", artista: "Sufjan Stevens", youtubeId: "KQT32vW61eI" },
    { titulo: "Just Like Heaven", artista: "The Cure", youtubeId: "n3nPiBai66M" },
    { titulo: "Sweet Disposition", artista: "The Temper Trap", youtubeId: "vN7HQrgakZU" },
    { titulo: "Pensando en Ti", artista: "Canserbero", youtubeId: "kSk0kbHMGxw" },
    { titulo: "Good News", artista: "Mac Miller", youtubeId: "dLWV58BhE7Q" },
    { titulo: "Yellow", artista: "Coldplay", youtubeId: "yKNxeF4KMsY" },
    { titulo: "505", artista: "Arctic Monkeys", youtubeId: "CKI8iQTgZKU" },
    { titulo: "The Reason", artista: "Hoobastank", youtubeId: "qQ0zxuWFxrY", nota: "audio oficial de YouTube Music" },
    { titulo: "Chasing Cars", artista: "Snow Patrol", youtubeId: "GemKqzILV4w", nota: "video oficial completo" },
    { titulo: "Lamento Boliviano", artista: "Los Enanitos Verdes", youtubeId: "hReAuaAuJOE", nota: "video oficial completo" },
    { titulo: "Nuestro Juramento", artista: "Julio Jaramillo", youtubeId: "IkrHakpw02w", nota: "versión completa" },
    { titulo: "Depende", artista: "Jarabe de Palo", youtubeId: "GtujUCURgtM", nota: "video oficial completo" },
    { titulo: "Iris", artista: "Goo Goo Dolls", youtubeId: "Dy_eP-mqWow", nota: "audio completo" },
    { titulo: "Amarte Más No Pude", artista: "Diomedes Díaz", youtubeId: "OVfQD-A2RiY", nota: "audio del canal oficial de Diomedes Díaz" },
    { titulo: "A Puro Dolor", artista: "Son By Four", youtubeId: "kAKVT1HWNsg", nota: "video oficial completo" },
    { titulo: "Sin Sentimiento", artista: "Grupo Niche", youtubeId: "EJdbZIgaSHg", nota: "video completo de Codiscos" },
    { titulo: "Periódico de Ayer", artista: "Héctor Lavoe", youtubeId: "LMIrkCL8Zg0", nota: "visualizador oficial de Héctor Lavoe" },
    { titulo: "Qué Hay de Malo", artista: "Jerry Rivera", youtubeId: "SUgQHe902yQ", nota: "video oficial completo" },
    { titulo: "Me Bebí Tu Recuerdo", artista: "Galy Galiano", youtubeId: "dmG4Y3652T4", nota: "audio oficial del canal de Galy Galiano" },
    { titulo: "Colapso", artista: "Kevin Kaarl", youtubeId: "Mz8n2prxhg8", nota: "audio completo del canal oficial; sugerida en las cartas" },
    { titulo: "Creep", artista: "Radiohead", youtubeId: "zFYEYRcjK2g", nota: "audio completo del canal oficial; sugerida en las cartas" },
    { titulo: "The Scientist", artista: "Coldplay", youtubeId: "RB-RcX5DS5A", nota: "video oficial completo; sugerida en varias cartas" },
    { titulo: "I Wanna Be Yours", artista: "Arctic Monkeys", youtubeId: "nyuo9-OjNNg", nota: "audio completo del álbum AM; sugerida en varias cartas" },
    { titulo: "Me Muero", artista: "La Quinta Estación", youtubeId: "k5k2XVKxznc", nota: "video oficial completo; canal oficial de La Quinta Estación" },
  ],

  hot: [
    { titulo: "Often", artista: "The Weeknd", youtubeId: "JPIhUaONiLU" },
    { titulo: "Wicked Games", artista: "The Weeknd", youtubeId: "O1OTWCd40bc" },
    { titulo: "Bellacoso", artista: "Residente & Bad Bunny", youtubeId: "46rJ4y2kdow" },
    { titulo: "Propuesta Indecente", artista: "Romeo Santos", youtubeId: "QFs3PIZb3js" },
    { titulo: "Versace on the Floor", artista: "Bruno Mars", youtubeId: "-FyjEnoIgTM" },
    { titulo: "Earned It", artista: "The Weeknd", youtubeId: "waU75jdUnYw" },
    { titulo: "Pillowtalk", artista: "ZAYN", youtubeId: "C_3d6GntKbk" },
    { titulo: "Streets", artista: "Doja Cat", youtubeId: "oqv35UZepIM" },
    { titulo: "Adorn", artista: "Miguel", youtubeId: "8dM5QYdTo08" },
    { titulo: "Call Out My Name", artista: "The Weeknd", youtubeId: "M4ZoCHID9GI", nota: "video oficial completo" },
    { titulo: "Positions", artista: "Ariana Grande", youtubeId: "tcYodQoapMg", nota: "video oficial completo" },
    { titulo: "Dile", artista: "Don Omar", youtubeId: "zODmu06pqvg", nota: "video oficial completo" },
    { titulo: "Sweater Weather", artista: "The Neighbourhood", youtubeId: "GCdwKhTtNNw", nota: "video oficial completo" },
    { titulo: "Do I Wanna Know?", artista: "Arctic Monkeys", youtubeId: "bpOSxM0rNPM", nota: "video oficial completo" }
  ],

  ambiente: [
    { titulo: "Moment Of Your Life", artista: "Brent Faiyaz feat. Coco Jones", youtubeId: "Jv17JsayCSI", nota: "R&B suave de la playlist de referencia" },
    { titulo: "Careless Whisper", artista: "George Michael", youtubeId: "izGwDsrQ1eQ", nota: "saxofón y nostalgia para una tarde tranquila" },
    { titulo: "Experience", artista: "Ludovico Einaudi", youtubeId: "l6E8QbsAAJ8" },
    { titulo: "Comptine d'un autre été", artista: "Yann Tiersen", youtubeId: "znfYwABeSZ0" },
    { titulo: "Una Mattina", artista: "Ludovico Einaudi", youtubeId: "94-PAIMDhaQ", nota: "audio oficial distribuido por Universal Music" },
    { titulo: "One Summer's Day", artista: "Joe Hisaishi", youtubeId: "TK1Ij_-mank", nota: "video oficial de Joe Hisaishi" },
    { titulo: "Talking to the Moon", artista: "Bruno Mars", youtubeId: "fXw0jcYbqdo", nota: "video oficial de letra" },
    { titulo: "Clair de Lune", artista: "Claude Debussy", youtubeId: "ZlM2EB9aE3A", nota: "pieza completa; sugerida en el día 317" }
  ]
};
