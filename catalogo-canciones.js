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
  "amor": [
    {
      "titulo": "I Know What You Want (feat. Flipmode Squad)",
      "artista": "Busta Rhymes; Mariah Carey; Flipmode Squad",
      "youtubeId": "WDaNJW_jEBo"
    },
    {
      "titulo": "TWENTIES",
      "artista": "GIVĒON",
      "youtubeId": "Tot_8TrFIEQ"
    },
    {
      "titulo": "Stuck On You",
      "artista": "GIVĒON",
      "youtubeId": "UlIgAGotomM"
    },
    {
      "titulo": "Be Without You",
      "artista": "Mary J. Blige",
      "youtubeId": "8XNaPX6MKlU"
    },
    {
      "titulo": "Get You",
      "artista": "Daniel Caesar; Kali Uchis",
      "youtubeId": "uQFVqltOXRg"
    },
    {
      "titulo": "Love",
      "artista": "Keyshia Cole",
      "youtubeId": "9PBZy9j3H3I"
    },
    {
      "titulo": "Moment Of Your Life (feat. Coco Jones)",
      "artista": "Brent Faiyaz; Coco Jones",
      "youtubeId": "Jv17JsayCSI",
      "nota": "canción de entrada que se conserva por petición expresa"
    },
    {
      "titulo": "Dilemma",
      "artista": "Nelly; Kelly Rowland",
      "youtubeId": "8WYHDfJDPDc"
    },
    {
      "titulo": "I Think I Love You Again",
      "artista": "Aaron Taylor",
      "youtubeId": "diAiHP1K-g0"
    },
    {
      "titulo": "Trato de Olvidarte",
      "artista": "Gonzalo Genek; Micro TDH; Lui5",
      "youtubeId": "Z66Bv_N55zQ"
    },
    {
      "titulo": "No quiero acostumbrarme",
      "artista": "A.C.O",
      "youtubeId": "iJy6xE17h-g"
    },
    {
      "titulo": "The Way I Love You",
      "artista": "Jorja Smith",
      "youtubeId": "R25qYkkv_t8"
    },
    {
      "titulo": "Antes de Morir (Scratches Dj Pho)",
      "artista": "LosPetitFellas; Denise Gutiérrez; Dj Pho",
      "youtubeId": "2vdIWr1TCBI"
    },
    {
      "titulo": "Solo Tú",
      "artista": "Macha y el Bloque Depresivo; Álvaro Henríquez",
      "youtubeId": "lxPDvuV9Z88"
    },
    {
      "titulo": "My Boo",
      "artista": "USHER; Alicia Keys",
      "youtubeId": "fPgf2meEX1w"
    },
    {
      "titulo": "Like I Want You",
      "artista": "GIVĒON",
      "youtubeId": "yNNMKN9BUmU"
    },
    {
      "titulo": "Try Me",
      "artista": "Jorja Smith",
      "youtubeId": "gUn6i9bfdRA"
    },
    {
      "titulo": "Are You That Somebody?",
      "artista": "Aaliyah",
      "youtubeId": "uTMuqL0qx08"
    },
    {
      "titulo": "Dime Si Valio la Pena",
      "artista": "Gonzalo Genek; Don-J HH; A.C.O",
      "youtubeId": "Ar6VVj4FUPQ"
    },
    {
      "titulo": "Hold Up",
      "artista": "Sasha Keable",
      "youtubeId": "Igk6n0j1GBQ"
    },
    {
      "titulo": "I Need Your Love",
      "artista": "Calvin Harris; Ellie Goulding",
      "youtubeId": "AtKZKl7Bgu0"
    },
    {
      "titulo": "Say My Name",
      "artista": "Destiny's Child",
      "youtubeId": "sQgd6MccwZc"
    },
    {
      "titulo": "U Remind Me",
      "artista": "USHER",
      "youtubeId": "Bxau9B3jOHM"
    },
    {
      "titulo": "No Letting Go",
      "artista": "Wayne Wonder",
      "youtubeId": "7g3gV4H6j4c"
    },
    {
      "titulo": "Beautiful",
      "artista": "Snoop Dogg; Pharrell Williams; Charlie Wilson",
      "youtubeId": "_FE194VN6c4"
    },
    {
      "titulo": "Ex-Factor",
      "artista": "Ms. Lauryn Hill",
      "youtubeId": "cE-bnWqLqxE"
    },
    {
      "titulo": "telepatía",
      "artista": "Kali Uchis",
      "youtubeId": "bn_p95HbHoQ"
    },
    {
      "titulo": "Yellow",
      "artista": "Coldplay",
      "youtubeId": "yKNxeF4KMsY"
    },
    {
      "titulo": "Thinkin Bout You",
      "artista": "Frank Ocean",
      "youtubeId": "6JHu3b-pbh8"
    },
    {
      "titulo": "Leave the Door Open",
      "artista": "Silk Sonic; Bruno Mars; Anderson .Paak",
      "youtubeId": "adY7vQ3Y9Kw"
    },
    {
      "titulo": "Three Little Birds",
      "artista": "Bob Marley & The Wailers",
      "youtubeId": "LanCLS_hIo4"
    },
    {
      "titulo": "A Dios le Pido",
      "artista": "Juanes",
      "youtubeId": "kMIaYXxLnUA"
    },
    {
      "titulo": "No Ordinary Love",
      "artista": "Sade",
      "youtubeId": "_WcWHZc8s2I"
    },
    {
      "titulo": "The Sweetest Taboo",
      "artista": "Sade",
      "youtubeId": "kcPc18SG6uA"
    },
    {
      "titulo": "Always Be My Baby",
      "artista": "Mariah Carey",
      "youtubeId": "LfRNRymrv9k"
    },
    {
      "titulo": "You Don't Know My Name",
      "artista": "Alicia Keys",
      "youtubeId": "_ST6ZRbhGiA"
    },
    {
      "titulo": "No One",
      "artista": "Alicia Keys",
      "youtubeId": "rywUS-ohqeE"
    },
    {
      "titulo": "Versace on the Floor",
      "artista": "Bruno Mars",
      "youtubeId": "-FyjEnoIgTM"
    },
    {
      "titulo": "Burn",
      "artista": "USHER",
      "youtubeId": "4I2GmRDL4pE"
    },
    {
      "titulo": "Irreplaceable",
      "artista": "Beyoncé",
      "youtubeId": "2EwViQxSJJQ"
    },
    {
      "titulo": "Love on Top",
      "artista": "Beyoncé",
      "youtubeId": "Ob7vObnFUJc"
    },
    {
      "titulo": "Un-thinkable (I'm Ready)",
      "artista": "Alicia Keys",
      "youtubeId": "HhuGQUZJot8"
    },
    {
      "titulo": "Love Galore",
      "artista": "SZA; Travis Scott",
      "youtubeId": "hHXfCOjb3fk"
    },
    {
      "titulo": "Good Days",
      "artista": "SZA",
      "youtubeId": "2p3zZoraK9g"
    },
    {
      "titulo": "Damage",
      "artista": "H.E.R.",
      "youtubeId": "EDZ25mol6tY"
    },
    {
      "titulo": "Best Part",
      "artista": "Daniel Caesar; H.E.R.",
      "youtubeId": "vBy7FaapGRo"
    },
    {
      "titulo": "Ascension (Don't Ever Wonder)",
      "artista": "Maxwell",
      "youtubeId": "D7rm9t5S4uE"
    },
    {
      "titulo": "Just the Two of Us",
      "artista": "Grover Washington, Jr.; Bill Withers",
      "youtubeId": "6POZlJAZsok"
    },
    {
      "titulo": "Let's Stay Together",
      "artista": "Al Green",
      "youtubeId": "COiIC3A0ROM"
    },
    {
      "titulo": "Careless Whisper",
      "artista": "George Michael",
      "youtubeId": "izGwDsrQ1eQ"
    },
    {
      "titulo": "Just the Way You Are",
      "artista": "Bruno Mars",
      "youtubeId": "LjhCEhWiKXk"
    },
    {
      "titulo": "Robarte un Beso",
      "artista": "Carlos Vives; Sebastián Yatra",
      "youtubeId": "Mtau4v6foHA"
    },
    {
      "titulo": "Secreto",
      "artista": "Anuel AA; KAROL G",
      "youtubeId": "gFZfwWZV074"
    },
    {
      "titulo": "Tusa",
      "artista": "KAROL G; Nicki Minaj",
      "youtubeId": "tbneQDc2H3I"
    },
    {
      "titulo": "Cómo Te Atreves",
      "artista": "Morat",
      "youtubeId": "_gm5piKnrS4"
    },
    {
      "titulo": "Eres",
      "artista": "Café Tacvba",
      "youtubeId": "98Akpf1ph2o"
    },
    {
      "titulo": "Adorn",
      "artista": "Miguel",
      "youtubeId": "8dM5QYdTo08"
    },
    {
      "titulo": "Me Rehúso",
      "artista": "Danny Ocean",
      "youtubeId": "aDCcLQto5BM"
    },
    {
      "titulo": "Limón y Sal",
      "artista": "Julieta Venegas",
      "youtubeId": "tIpzfs5tBJU"
    },
    {
      "titulo": "Linger",
      "artista": "The Cranberries",
      "youtubeId": "G6Kspj3OO0s"
    },
    {
      "titulo": "Antología",
      "artista": "Shakira",
      "youtubeId": "pWgVRK_Ggww"
    },
    {
      "titulo": "Make You Feel My Love",
      "artista": "Adele",
      "youtubeId": "0put0_a--Ng"
    },
    {
      "titulo": "The Scientist",
      "artista": "Coldplay",
      "youtubeId": "RB-RcX5DS5A"
    },
    {
      "titulo": "Bendita Tu Luz",
      "artista": "Maná; Juan Luis Guerra",
      "youtubeId": "44kityInDvM"
    },
    {
      "titulo": "Stay (feat. Mikky Ekko)",
      "artista": "Rihanna; Mikky Ekko",
      "youtubeId": "JF8BRvqGCNs"
    },
    {
      "titulo": "Hasta la Raíz",
      "artista": "Natalia Lafourcade",
      "youtubeId": "IKmPci5VXz0"
    },
    {
      "titulo": "Disfruto",
      "artista": "Carla Morrison",
      "youtubeId": "_ruEj-XK1lA"
    },
    {
      "titulo": "Lo Que Construimos",
      "artista": "Natalia Lafourcade",
      "youtubeId": "RS6CRP_OoQA"
    },
    {
      "titulo": "Tú Sí Sabes Quererme",
      "artista": "Natalia Lafourcade; Los Macorinos",
      "youtubeId": "a8eDeLKWx74"
    },
    {
      "titulo": "Nunca Es Suficiente",
      "artista": "Natalia Lafourcade; Los Ángeles Azules",
      "youtubeId": "k76BgIb89-s"
    },
    {
      "titulo": "Es Por Ti",
      "artista": "Juanes",
      "youtubeId": "9hI7Qk5Z4v8"
    }
  ],
  "filosofica": [
    {
      "titulo": "ATLiens",
      "artista": "Outkast",
      "youtubeId": "ktc9hsSfUck"
    },
    {
      "titulo": "Straight Outta Compton",
      "artista": "N.W.A.",
      "youtubeId": "TMZi25Pq3T8"
    },
    {
      "titulo": "Keep Ya Head Up",
      "artista": "2Pac",
      "youtubeId": "HfXwmDGJAB8"
    },
    {
      "titulo": "Hail Mary",
      "artista": "2Pac",
      "youtubeId": "K1u7l5tXnVw"
    },
    {
      "titulo": "You Got Me",
      "artista": "The Roots; Tariq Trotter; Erykah Badu; Eve",
      "youtubeId": "MJCHeEQV454"
    },
    {
      "titulo": "Insane in the Brain",
      "artista": "Cypress Hill",
      "youtubeId": "RijB8wnJCN0"
    },
    {
      "titulo": "Cleanin' Out My Closet",
      "artista": "Eminem",
      "youtubeId": "YVkUvmDQ3HY"
    },
    {
      "titulo": "Let Me Blow Ya Mind",
      "artista": "Eve; Gwen Stefani",
      "youtubeId": "Wt88GMJmVk0"
    },
    {
      "titulo": "What's The Difference",
      "artista": "Dr. Dre; Eminem; Xzibit",
      "youtubeId": "-Ubyt7iWJ8Q"
    },
    {
      "titulo": "Drop It Like It's Hot",
      "artista": "Snoop Dogg; Pharrell Williams",
      "youtubeId": "wQV7jNOVRtY"
    },
    {
      "titulo": "a lot",
      "artista": "21 Savage",
      "youtubeId": "DmWWqogr_r8"
    },
    {
      "titulo": "N.Y. State of Mind",
      "artista": "Nas",
      "youtubeId": "hl8A14Qcv68"
    },
    {
      "titulo": "Doomsday",
      "artista": "MF DOOM; Pebbles The Invisible Girl",
      "youtubeId": "kHBHDWpK1yo"
    },
    {
      "titulo": "St. Chroma (feat. Daniel Caesar)",
      "artista": "Tyler, The Creator; Daniel Caesar",
      "youtubeId": "hCcwCv3G1FQ"
    },
    {
      "titulo": "Like That",
      "artista": "Future; Metro Boomin; Kendrick Lamar",
      "youtubeId": "Rr1Cdli5nE8"
    },
    {
      "titulo": "Many Men (Wish Death)",
      "artista": "50 Cent",
      "youtubeId": "5D3crqpClPY"
    },
    {
      "titulo": "Through The Wire",
      "artista": "Kanye West",
      "youtubeId": "uvb-1wjAtk4"
    },
    {
      "titulo": "Hit 'Em Up - Single Version",
      "artista": "2Pac; Outlawz",
      "youtubeId": "fSq-4Dhwugg"
    },
    {
      "titulo": "Otra Canción Larga",
      "artista": "Alcolirykoz",
      "youtubeId": "aAwXhAV3LPE"
    },
    {
      "titulo": "Feliz Si Es Raro",
      "artista": "Alcolirykoz",
      "youtubeId": "rTv5pNLz9IU"
    },
    {
      "titulo": "Centro de Acopio",
      "artista": "Anyone/Cualkiera; Rapiphero",
      "youtubeId": "iN4JYAXgqzY"
    },
    {
      "titulo": "Ojos de Diablo",
      "artista": "Zof Ziro; ZetaZeta",
      "youtubeId": "DnETeFkRvHk"
    },
    {
      "titulo": "No Copio",
      "artista": "Crudo Means Raw",
      "youtubeId": "OV4hbqYxRh0"
    },
    {
      "titulo": "Es Épico",
      "artista": "Canserbero",
      "youtubeId": "bB8MTYLR1_w"
    },
    {
      "titulo": "Stupid Love Story",
      "artista": "Canserbero; Apache",
      "youtubeId": "wmef2TEPGgo"
    },
    {
      "titulo": "Mama Dejame Fumar",
      "artista": "Asilo 38",
      "youtubeId": "i3dCS-s0LBQ"
    },
    {
      "titulo": "Retina Floja",
      "artista": "Bubaseta; Movimiento Original",
      "youtubeId": "tdah2a4aKQ8"
    },
    {
      "titulo": "Anestesia Local - Episodio 2",
      "artista": "Alcolirykoz",
      "youtubeId": "MRyZ6faVKWQ"
    },
    {
      "titulo": "El Despilfarro",
      "artista": "Alcolirykoz",
      "youtubeId": "iKvJo5Vs244"
    },
    {
      "titulo": "Noicanicula",
      "artista": "La Etnnia",
      "youtubeId": "z3ru8GXgHJE"
    },
    {
      "titulo": "Nrs In Da Area",
      "artista": "No Rules Clan; Ignorancia Sofisticada",
      "youtubeId": "O4pIfDuLk_k"
    },
    {
      "titulo": "De Pe a Pa",
      "artista": "Granuja",
      "youtubeId": "auAIsRn0mPM"
    },
    {
      "titulo": "Quien Va",
      "artista": "No Rules Clan; Alcolirykoz; El Arkeologo",
      "youtubeId": "mF_8BMwhH5A"
    },
    {
      "titulo": "Murderah",
      "artista": "Rap Bang Club; Norick",
      "youtubeId": "6Xw1_Kuv9ac"
    },
    {
      "titulo": "La Jungla",
      "artista": "Flaco Flow y Melanina",
      "youtubeId": "NcUvzYvGO2U"
    },
    {
      "titulo": "Bogotá Mi Barrio",
      "artista": "Todo Copas",
      "youtubeId": "jj8ZIUfWCMM"
    },
    {
      "titulo": "Algo Anda Mal",
      "artista": "Clan Hueso Duro",
      "youtubeId": "nFCFxtW8Fww"
    },
    {
      "titulo": "Qué Hay Pa' Hacer",
      "artista": "Granuja",
      "youtubeId": "M6CG-CU07n4"
    },
    {
      "titulo": "No Está en Venta",
      "artista": "Alcolirykoz",
      "youtubeId": "Se6Cd4sW3ks"
    },
    {
      "titulo": "Balada para No Dormir - Bonus Track",
      "artista": "Alcolirykoz",
      "youtubeId": "h1p0N9s5YJw"
    },
    {
      "titulo": "En Tono Sepia",
      "artista": "No Rules Clan",
      "youtubeId": "y6Uf9bi_Mtk"
    },
    {
      "titulo": "Tararea",
      "artista": "Alcolirykoz",
      "youtubeId": "nmFdyBUAsfQ"
    },
    {
      "titulo": "Discúlpame",
      "artista": "Ali Aka Mind",
      "youtubeId": "sqzdMYQKCdU"
    },
    {
      "titulo": "Falsedades",
      "artista": "Tres Coronas",
      "youtubeId": "n1dgZ5xnQWY"
    },
    {
      "titulo": "Envidias",
      "artista": "Tres Coronas",
      "youtubeId": "KRS0wPv9esQ"
    },
    {
      "titulo": "El Imaginario",
      "artista": "Alcolirykoz",
      "youtubeId": "VBnufgtjtxU"
    },
    {
      "titulo": "Coctel Espacial",
      "artista": "Lianna; Gambeta",
      "youtubeId": "McpW-vn070k"
    },
    {
      "titulo": "Mi Barrio Es Mi Estado",
      "artista": "Alcolirykoz",
      "youtubeId": "UFmV2yg6Oao"
    },
    {
      "titulo": "El Barman y el Chef",
      "artista": "Alcolirykoz",
      "youtubeId": "2fGU7PJCTpk"
    },
    {
      "titulo": "La Eterna - Remix",
      "artista": "Alcolirykoz",
      "youtubeId": "SBOcJT0BeJA"
    },
    {
      "titulo": "Házmelo Rap",
      "artista": "Alcolirykoz",
      "youtubeId": "P1qamoOHLYM"
    },
    {
      "titulo": "Laura Ronda",
      "artista": "Alcolirykoz",
      "youtubeId": "1v14wNlGjdM"
    },
    {
      "titulo": "El Tour de Sing Sing",
      "artista": "Alcolirykoz; ToteKing",
      "youtubeId": "b05PzMJqiaw"
    },
    {
      "titulo": "Música para Planchar",
      "artista": "Alcolirykoz; Sadat X",
      "youtubeId": "t9mtMVfD6u4"
    },
    {
      "titulo": "Trabajo Sucio",
      "artista": "Lianna",
      "youtubeId": "eKGrgYjeCNM"
    },
    {
      "titulo": "Esta Va",
      "artista": "Realidad Mental",
      "youtubeId": "JVEN7Quzpeg"
    },
    {
      "titulo": "A Veces",
      "artista": "Al2 El Aldeano",
      "youtubeId": "LQYOZFO5aB4"
    },
    {
      "titulo": "Qué Tú Quieres?",
      "artista": "Mabiland",
      "youtubeId": "7C4t_d898_Q"
    },
    {
      "titulo": "Bacatá",
      "artista": "1703; El Kalvo; $trasse",
      "youtubeId": "QF2M5IWCJNQ"
    },
    {
      "titulo": "Vital (Téngase)",
      "artista": "Crudo Means Raw",
      "youtubeId": "cgJvtgZ7rBk"
    },
    {
      "titulo": "Malpensante",
      "artista": "Noiseferatu",
      "youtubeId": "rThYUXZyTeA"
    },
    {
      "titulo": "De la Cuna al Ataud",
      "artista": "La Etnnia; Full Nelson",
      "youtubeId": "iNL9MXulJCY"
    },
    {
      "titulo": "Jaula de Oro - Original",
      "artista": "Laberinto ELC",
      "youtubeId": "BNLL8DJgkfI"
    },
    {
      "titulo": "El Día de Mi Suerte",
      "artista": "El Redcode",
      "youtubeId": "ApqRPZ8xO6g"
    },
    {
      "titulo": "Rifo los Lunes",
      "artista": "Alcolirykoz; Gordo Sarkasmus",
      "youtubeId": "Z6vTjCPva5Q"
    },
    {
      "titulo": "Clapzz",
      "artista": "Alcolirykoz",
      "youtubeId": "W486I2dtYA8"
    },
    {
      "titulo": "El Sexto Sentido",
      "artista": "Alcolirykoz",
      "youtubeId": "tjHgj-p_XiI"
    },
    {
      "titulo": "La Revancha de los Timidos",
      "artista": "Alcolirykoz; Jannyval",
      "youtubeId": "SFMtkR0iSj0"
    },
    {
      "titulo": "Let My People",
      "artista": "Alcolirykoz",
      "youtubeId": "Kjbc9C9ZQAA"
    },
    {
      "titulo": "El Toque Personal",
      "artista": "Alcolirykoz",
      "youtubeId": "Ml_6S52AEFc"
    },
    {
      "titulo": "Aero-Soul",
      "artista": "Alcolirykoz",
      "youtubeId": "jk9S5ca0Oh0"
    },
    {
      "titulo": "Así No Más",
      "artista": "Alcolirykoz",
      "youtubeId": "phFWgKphgc0"
    },
    {
      "titulo": "El Silencio Es Mio",
      "artista": "Métricas Frías; Doble Porción",
      "youtubeId": "HngH70vOsJs"
    },
    {
      "titulo": "Fatality",
      "artista": "Zof Ziro; ZetaZeta",
      "youtubeId": "_14iDOtdS7M"
    },
    {
      "titulo": "El Show Debe Continuar",
      "artista": "Alcolirykoz",
      "youtubeId": "yCYQY7sObG8"
    },
    {
      "titulo": "Comediantes de Velorio",
      "artista": "Alcolirykoz",
      "youtubeId": "eP7W_YwWN28"
    },
    {
      "titulo": "La Danza del Miedo",
      "artista": "Alcolirykoz",
      "youtubeId": "kR-rKKZuLl8"
    },
    {
      "titulo": "Ultraresistente",
      "artista": "Alcolirykoz",
      "youtubeId": "K7SkeVKW7uA"
    },
    {
      "titulo": "Ateo",
      "artista": "Granuja",
      "youtubeId": "wCeWcWCC0vA"
    },
    {
      "titulo": "Los Genios de la Botella - Remix Kaztro",
      "artista": "Alcolirykoz; Kaztro",
      "youtubeId": "kfKJQaJ5O9w"
    },
    {
      "titulo": "Todo Bien Todo Bien",
      "artista": "JHT",
      "youtubeId": "YKP-wTi6zAI"
    },
    {
      "titulo": "Síndrome de Estocolmo",
      "artista": "Zof Ziro; ZetaZeta; Gambeta",
      "youtubeId": "cqBtc0KN6RM"
    },
    {
      "titulo": "Punto Rojo",
      "artista": "Granuja; Mañas Ru-Fino",
      "youtubeId": "_LxBM6wpgLU"
    },
    {
      "titulo": "C.R.E.A.M. (Cash Rules Everything Around Me)",
      "artista": "Wu-Tang Clan",
      "youtubeId": "4yNQ7_7I5aE"
    },
    {
      "titulo": "It Was A Good Day",
      "artista": "Ice Cube",
      "youtubeId": "h4UqMyldS7Q"
    },
    {
      "titulo": "Gangsta's Paradise",
      "artista": "Coolio; L.V.",
      "youtubeId": "SQCSxqScSVQ"
    },
    {
      "titulo": "Regulate",
      "artista": "Warren G; Nate Dogg",
      "youtubeId": "1plPyJdXKIY"
    },
    {
      "titulo": "Can I Kick It?",
      "artista": "A Tribe Called Quest",
      "youtubeId": "O3pyCGnZzYA"
    },
    {
      "titulo": "Juicy - 2005 Remaster",
      "artista": "The Notorious B.I.G.",
      "youtubeId": "_JZom_gVfuw"
    },
    {
      "titulo": "6 30",
      "artista": "Métricas Frías; Doble Porción",
      "youtubeId": "vcdt4RdTc1g"
    },
    {
      "titulo": "Mil y una Vez",
      "artista": "Métricas Frías; Doble Porción",
      "youtubeId": "dwyeCQjNDcQ"
    },
    {
      "titulo": "Antes del Meridiano",
      "artista": "Alcolirykoz",
      "youtubeId": "Y4pCA91F4Uw"
    },
    {
      "titulo": "La Típica (2.018)",
      "artista": "Alcolirykoz",
      "youtubeId": "LqoVJPFAbf4"
    },
    {
      "titulo": "Equipo de Carretera",
      "artista": "Alcolirykoz",
      "youtubeId": "D7EthypSEF4"
    },
    {
      "titulo": "La Penúltima Cena",
      "artista": "Alcolirykoz; Rocca",
      "youtubeId": "4qzlwLeYG70"
    },
    {
      "titulo": "Artes Verbales",
      "artista": "Alcolirykoz",
      "youtubeId": "JlzEDJrOjLI"
    },
    {
      "titulo": "Changó",
      "artista": "Alcolirykoz",
      "youtubeId": "C2_WOBYxweE"
    },
    {
      "titulo": "Los Genios de la Botella - Remix Gambeta",
      "artista": "Alcolirykoz; Gambeta",
      "youtubeId": "9BcpsAIRYyQ"
    },
    {
      "titulo": "93 'Til Infinity",
      "artista": "Souls of Mischief",
      "youtubeId": "fXJc2NYwHjw"
    },
    {
      "titulo": "Electric Relaxation",
      "artista": "A Tribe Called Quest",
      "youtubeId": "WHRnvjCkTsw"
    },
    {
      "titulo": "Put It On",
      "artista": "Big L",
      "youtubeId": "WWMjRMJ0dTI"
    },
    {
      "titulo": "When I B On Tha Mic",
      "artista": "Rakim",
      "youtubeId": "M34OelgSlKI"
    },
    {
      "titulo": "Full Clip",
      "artista": "Gang Starr",
      "youtubeId": "qmj1q67NDAk"
    },
    {
      "titulo": "Fu-Gee-La",
      "artista": "Fugees; Ms. Lauryn Hill; Wyclef Jean; Pras",
      "youtubeId": "MPlb9HoOCxs"
    },
    {
      "titulo": "Mind Playing Tricks on Me",
      "artista": "Geto Boys",
      "youtubeId": "IJtHdkyo0hc"
    },
    {
      "titulo": "I Got 5 On It",
      "artista": "Luniz; Michael Marshall",
      "youtubeId": "agJ6zyTB5ng"
    },
    {
      "titulo": "Shook Ones, Pt. II",
      "artista": "Mobb Deep",
      "youtubeId": "yoYZf-lBF_U"
    },
    {
      "titulo": "Hypnotize - 2014 Remaster",
      "artista": "The Notorious B.I.G.",
      "youtubeId": "glEiPXAYE-U"
    },
    {
      "titulo": "Venganza",
      "artista": "Doble Porción; Métricas Frías; Mañas Ru-Fino; Granuja",
      "youtubeId": "kl7n-qCrunU"
    },
    {
      "titulo": "Mientras Duermen",
      "artista": "Rapper School; Samurai; Negro Gonzáles; Bman",
      "youtubeId": "ZDmn487A_Dk"
    },
    {
      "titulo": "Reina",
      "artista": "Cejaz Negraz",
      "youtubeId": "7OPEvfL4Wes"
    },
    {
      "titulo": "No Hay Flores en Venus",
      "artista": "Alcolirykoz; Lianna",
      "youtubeId": "LyhNWGcSVew"
    },
    {
      "titulo": "Me Volví Loco",
      "artista": "King Kong Click; Bubaseta; Subwoffer",
      "youtubeId": "MsnJzE8Cbw0"
    },
    {
      "titulo": "Tuyo",
      "artista": "Credo V Daniels",
      "youtubeId": "8onYUmsBMxs"
    },
    {
      "titulo": "Partículas",
      "artista": "Granuja",
      "youtubeId": "E6oZorQDiN0"
    },
    {
      "titulo": "Aguanilé",
      "artista": "Alcolirykoz",
      "youtubeId": "983zfhMym8Q"
    },
    {
      "titulo": "I Get Money",
      "artista": "50 Cent",
      "youtubeId": "GO22Z0T3qPE"
    },
    {
      "titulo": "Síntomas de Popeye",
      "artista": "Alcolirykoz; Titó; DJ Skizz",
      "youtubeId": "PuIsNyrutFk"
    },
    {
      "titulo": "Efectos Secundarios",
      "artista": "Alcolirykoz",
      "youtubeId": "MCynfdfmFSM"
    },
    {
      "titulo": "El Remate",
      "artista": "Alcolirykoz; Armando Hernandez",
      "youtubeId": "91MpFsZI9VA"
    },
    {
      "titulo": "Los Legendarios",
      "artista": "Alcolirykoz; Laberinto ELC",
      "youtubeId": "vKd_CIhzoCY"
    },
    {
      "titulo": "Suero Casero",
      "artista": "Alcolirykoz",
      "youtubeId": "_5Ypj8L7faU"
    },
    {
      "titulo": "Round 30",
      "artista": "Pielroja; Alcolirykoz",
      "youtubeId": "UpCpadNeY0M"
    },
    {
      "titulo": "Nothin'",
      "artista": "N.O.R.E.",
      "youtubeId": "sul16s0VSzs"
    },
    {
      "titulo": "La Salsa",
      "artista": "McKlopedia; Rapsusklei; Zxmyr",
      "youtubeId": "yonwHLj58Wc"
    },
    {
      "titulo": "Coming Home (feat. Ms. Lauryn Hill)",
      "artista": "Pusha T; Ms. Lauryn Hill",
      "youtubeId": "9bx_r7H7eF8"
    },
    {
      "titulo": "Dele la Cara (Bendiciones)",
      "artista": "Crudo Means Raw",
      "youtubeId": "7v5r61PK_4c"
    },
    {
      "titulo": "Horas Extras",
      "artista": "Crudo Means Raw; DJ Dmoe",
      "youtubeId": "R5mHN8suqV8"
    },
    {
      "titulo": "El Estrén - Versión álbum",
      "artista": "Crudo Means Raw",
      "youtubeId": "xrQBpf_yfTc"
    },
    {
      "titulo": "See You Again (feat. Kali Uchis)",
      "artista": "Tyler, The Creator; Kali Uchis",
      "youtubeId": "TGgcC5xg9YI"
    },
    {
      "titulo": "If I Ain't Got You",
      "artista": "Alicia Keys",
      "youtubeId": "Ju8Hr50Ckwk"
    },
    {
      "titulo": "Ms. Jackson",
      "artista": "Outkast",
      "youtubeId": "MYxAiK6VnXw"
    },
    {
      "titulo": "Where Is The Love?",
      "artista": "Black Eyed Peas",
      "youtubeId": "WpYeekQkAdc"
    },
    {
      "titulo": "Still D.R.E.",
      "artista": "Dr. Dre; Snoop Dogg",
      "youtubeId": "_CL6n0FJZpk"
    },
    {
      "titulo": "Family Affair",
      "artista": "Mary J. Blige",
      "youtubeId": "znlFu_lemsU"
    },
    {
      "titulo": "Fallin'",
      "artista": "Alicia Keys",
      "youtubeId": "Urdlvw0SSEc"
    },
    {
      "titulo": "Redbone",
      "artista": "Childish Gambino",
      "youtubeId": "Kp7eSUU9oy8"
    },
    {
      "titulo": "Big Poppa - 2005 Remaster",
      "artista": "The Notorious B.I.G.",
      "youtubeId": "phaJXp_zMYM"
    },
    {
      "titulo": "Is This Love",
      "artista": "Bob Marley & The Wailers",
      "youtubeId": "CHekNnySAfM"
    },
    {
      "titulo": "Can't Tell Me Nothing",
      "artista": "Kanye West",
      "youtubeId": "hqvcww4ydh8"
    },
    {
      "titulo": "Just Can’t Get Enough",
      "artista": "Black Eyed Peas",
      "youtubeId": "OrTyD7rjBpw"
    },
    {
      "titulo": "Do For Love",
      "artista": "2Pac",
      "youtubeId": "VjJpf_5FFJo"
    },
    {
      "titulo": "All Eyez On Me (ft. Big Syke)",
      "artista": "2Pac; Big Syke",
      "youtubeId": "zgZ52M4a_R0"
    },
    {
      "titulo": "Money Trees",
      "artista": "Kendrick Lamar; Jay Rock",
      "youtubeId": "bBNpSXAYteM"
    },
    {
      "titulo": "Loose",
      "artista": "Daniel Caesar",
      "youtubeId": "gRL_PCOPF-A"
    },
    {
      "titulo": "Passin' Me By",
      "artista": "The Pharcyde",
      "youtubeId": "a-mAK3uB2_0"
    },
    {
      "titulo": "Keep Their Heads Ringin'",
      "artista": "Dr. Dre",
      "youtubeId": "TE891IHxyV8"
    },
    {
      "titulo": "Mmhmm",
      "artista": "BigXthaPlug",
      "youtubeId": "x_WayannFys"
    },
    {
      "titulo": "Doo Wop (That Thing)",
      "artista": "Ms. Lauryn Hill",
      "youtubeId": "T6QKqFPRZSA"
    },
    {
      "titulo": "Bang Bang",
      "artista": "K'NAAN; Adam Levine",
      "youtubeId": "bFoFN9Sbk2w"
    },
    {
      "titulo": "Ambitionz Az A Ridah",
      "artista": "2Pac",
      "youtubeId": "6glk4oMbgKE"
    },
    {
      "titulo": "Gil",
      "artista": "Milo j; Trueno",
      "youtubeId": "2ezVj9wLr5U"
    },
    {
      "titulo": "Everything Is Everything",
      "artista": "Ms. Lauryn Hill",
      "youtubeId": "i3_dOWYHS7I"
    },
    {
      "titulo": "Waterfalls",
      "artista": "TLC",
      "youtubeId": "8WEtxJ4-sh4"
    },
    {
      "titulo": "Back to Black",
      "artista": "Amy Winehouse",
      "youtubeId": "TJAfLE39ZZ8"
    },
    {
      "titulo": "Survivor",
      "artista": "Destiny's Child",
      "youtubeId": "Wmc8bQoL-J0"
    },
    {
      "titulo": "Cry Me a River",
      "artista": "Justin Timberlake",
      "youtubeId": "DksSPZTZES0"
    },
    {
      "titulo": "Rehab",
      "artista": "Amy Winehouse",
      "youtubeId": "KUmZp8pR1uc"
    },
    {
      "titulo": "Everybody Wants to Rule the World",
      "artista": "Tears for Fears",
      "youtubeId": "aGCdLKXNF3w"
    },
    {
      "titulo": "Crazy",
      "artista": "Gnarls Barkley",
      "youtubeId": "bd2B6SjMh_w"
    },
    {
      "titulo": "Love Yourself",
      "artista": "Justin Bieber",
      "youtubeId": "oyEuk8j8imI"
    },
    {
      "titulo": "Fix You",
      "artista": "Coldplay",
      "youtubeId": "k4V3Mo61fJM"
    },
    {
      "titulo": "El Baile de los Que Sobran",
      "artista": "Los Prisioneros",
      "youtubeId": "OG2VEI0yPW8"
    },
    {
      "titulo": "Sólo le pido a Dios",
      "artista": "Mercedes Sosa",
      "youtubeId": "vzQIwFPyEc4"
    }
  ],
  "hot": [
    {
      "titulo": "Get Low",
      "artista": "Lil Jon & The East Side Boyz; Ying Yang Twins",
      "youtubeId": "yUZeZNxiD-M"
    },
    {
      "titulo": "Las Tetas D.",
      "artista": "Crack Family",
      "youtubeId": "LQhERHd-k0E"
    },
    {
      "titulo": "Parla Pura",
      "artista": "Rap Bang Club",
      "youtubeId": "9Ulu3Ysg6uw"
    },
    {
      "titulo": "Queen Tings (Santi Remix)",
      "artista": "Masego; Cruel Santino; Santi",
      "youtubeId": "UntyHH7Pfs0"
    },
    {
      "titulo": "Between the Sheets",
      "artista": "The Isley Brothers",
      "youtubeId": "TNDb8qKZEX8"
    },
    {
      "titulo": "Boombastic",
      "artista": "Shaggy",
      "youtubeId": "f0sVDGFoIOI"
    },
    {
      "titulo": "POP DAT THANG",
      "artista": "DaBaby",
      "youtubeId": "syc4SzrubKY"
    },
    {
      "titulo": "Pony",
      "artista": "Ginuwine",
      "youtubeId": "lbnoG2dsUk0"
    },
    {
      "titulo": "Ain't Shit",
      "artista": "Doja Cat",
      "youtubeId": "13MvatpPQv4"
    },
    {
      "titulo": "Needed Me",
      "artista": "Rihanna",
      "youtubeId": "6BdUCcZwb8U"
    }
  ],
  "ambiente": [
    {
      "titulo": "Will I See You Again?",
      "artista": "Thee Sacred Souls",
      "youtubeId": "IGgb10A_2c8"
    },
    {
      "titulo": "You Rock My World",
      "artista": "Michael Jackson",
      "youtubeId": "1-7ABIM2qjU"
    },
    {
      "titulo": "Bills, Bills, Bills",
      "artista": "Destiny's Child",
      "youtubeId": "NiF6-0UTqtc"
    },
    {
      "titulo": "On & On",
      "artista": "Erykah Badu",
      "youtubeId": "-CPCs7vVz6s"
    },
    {
      "titulo": "Shoop",
      "artista": "Salt-N-Pepa",
      "youtubeId": "4vaN01VLYSQ"
    },
    {
      "titulo": "Give It Up to Me",
      "artista": "Sean Paul",
      "youtubeId": "kdzGENHQ-rk"
    },
    {
      "titulo": "Shut Up",
      "artista": "Black Eyed Peas",
      "youtubeId": "KRzMtlZjXpU"
    },
    {
      "titulo": "Ring My Bell",
      "artista": "Anita Ward",
      "youtubeId": "URAqnM1PP5E"
    },
    {
      "titulo": "Freedom",
      "artista": "Pharrell Williams",
      "youtubeId": "LlY90lG_Fuw"
    },
    {
      "titulo": "Blue World",
      "artista": "Mac Miller",
      "youtubeId": "aIHF7u9Wwiw"
    },
    {
      "titulo": "Didn't Cha Know",
      "artista": "Erykah Badu",
      "youtubeId": "b4fCymLkgOQ"
    },
    {
      "titulo": "Let's Get It Started - Spike Mix",
      "artista": "Black Eyed Peas",
      "youtubeId": "mRaQAdynxto"
    },
    {
      "titulo": "Virtual Insanity - Remastered 2006",
      "artista": "Jamiroquai",
      "youtubeId": "4JkIs37a2JE"
    },
    {
      "titulo": "Nuthin' But A \"G\" Thang",
      "artista": "Dr. Dre; Snoop Dogg",
      "youtubeId": "8GliyDgAGQI"
    },
    {
      "titulo": "You Know How We Do It",
      "artista": "Ice Cube",
      "youtubeId": "FXTh4XLm2VE"
    },
    {
      "titulo": "Japanese Denim",
      "artista": "Daniel Caesar",
      "youtubeId": "6OkneaH-eTA"
    },
    {
      "titulo": "La Noche y Tú",
      "artista": "Barbaro el Urbano Vargas",
      "youtubeId": "XSN_8UblItk"
    },
    {
      "titulo": "Déjame Entrar",
      "artista": "Cultura Profética",
      "youtubeId": "IAhVESdwvIU"
    },
    {
      "titulo": "good denim",
      "artista": "jalen chords",
      "youtubeId": "_2Lnj5N9lCM"
    },
    {
      "titulo": "Antonia",
      "artista": "Gondwana",
      "youtubeId": "exxkGyu3G1Q"
    },
    {
      "titulo": "Fui Silencio",
      "artista": "Sofía Gabanna; Jazzmind",
      "youtubeId": "KV2ECDqPyuY"
    },
    {
      "titulo": "Keep Your Worries",
      "artista": "Guru; Angie Stone",
      "youtubeId": "7R0D6ryRUqQ"
    },
    {
      "titulo": "I Gotta Find Peace of Mind - Live",
      "artista": "Ms. Lauryn Hill",
      "youtubeId": "b2IbsMCgz4A"
    },
    {
      "titulo": "Ella",
      "artista": "Kafu Banton; Almirante",
      "youtubeId": "quToM5By41k"
    },
    {
      "titulo": "Escapism.",
      "artista": "RAYE; 070 Shake",
      "youtubeId": "Dll6VJ2C7wo"
    },
    {
      "titulo": "Ride Wit Me",
      "artista": "Nelly; City Spud",
      "youtubeId": "RtSDWq6HsJE"
    },
    {
      "titulo": "Not Afraid",
      "artista": "Eminem",
      "youtubeId": "j5-yKhDd64s"
    },
    {
      "titulo": "Baby, I Love Your Way",
      "artista": "Big Mountain",
      "youtubeId": "utXwIqQj7oE"
    },
    {
      "titulo": "ROXANNE",
      "artista": "Arizona Zervas",
      "youtubeId": "16YnOUnbE6s"
    },
    {
      "titulo": "Temperature",
      "artista": "Sean Paul",
      "youtubeId": "dW2MmuA1nI4"
    },
    {
      "titulo": "It Wasn't Me",
      "artista": "Shaggy; Rik Rok",
      "youtubeId": "2g5Hz17C4is"
    },
    {
      "titulo": "No Scrubs",
      "artista": "TLC",
      "youtubeId": "FrLequ6dUfE"
    },
    {
      "titulo": "Rock the Boat",
      "artista": "Aaliyah",
      "youtubeId": "3HSJU5fDg0I"
    },
    {
      "titulo": "Return of the Mack",
      "artista": "Mark Morrison",
      "youtubeId": "uB1D9wWxd2w"
    },
    {
      "titulo": "Smooth Operator",
      "artista": "Sade",
      "youtubeId": "4TYv2PhG89A"
    },
    {
      "titulo": "Whenever, Wherever",
      "artista": "Shakira",
      "youtubeId": "weRHyjj34ZE"
    },
    {
      "titulo": "Blinding Lights",
      "artista": "The Weeknd",
      "youtubeId": "4NRXx6U8ABQ"
    },
    {
      "titulo": "Feel Good Inc.",
      "artista": "Gorillaz",
      "youtubeId": "HyHNuVaZJ-k"
    },
    {
      "titulo": "Get Lucky",
      "artista": "Daft Punk; Pharrell Williams; Nile Rodgers",
      "youtubeId": "5NV6Rdv1a3I"
    },
    {
      "titulo": "Treasure",
      "artista": "Bruno Mars",
      "youtubeId": "nPvuNsRccVw"
    },
    {
      "titulo": "Roses",
      "artista": "Outkast",
      "youtubeId": "gWju37TZfo0"
    },
    {
      "titulo": "Get Busy",
      "artista": "Sean Paul",
      "youtubeId": "oPQ3o14najg"
    },
    {
      "titulo": "Todo de Ti",
      "artista": "Rauw Alejandro",
      "youtubeId": "GUcz2y6e6yM"
    },
    {
      "titulo": "Rock Your Body",
      "artista": "Justin Timberlake",
      "youtubeId": "TSVHoHyErBQ"
    },
    {
      "titulo": "Sorry",
      "artista": "Justin Bieber",
      "youtubeId": "fRh_vgS2dFE"
    },
    {
      "titulo": "Say It Right",
      "artista": "Nelly Furtado",
      "youtubeId": "6JnGBs88sL0"
    },
    {
      "titulo": "Like I Love You",
      "artista": "Justin Timberlake",
      "youtubeId": "FQ3slUz7Jo8"
    },
    {
      "titulo": "Crazy in Love",
      "artista": "Beyoncé; Jay-Z",
      "youtubeId": "ViwtNLUqkMY"
    },
    {
      "titulo": "Umbrella",
      "artista": "Rihanna; JAY-Z",
      "youtubeId": "CvBfHwUxHIk"
    },
    {
      "titulo": "Love Like This",
      "artista": "Faith Evans",
      "youtubeId": "w1QzBQKYbag"
    },
    {
      "titulo": "September",
      "artista": "Earth, Wind & Fire",
      "youtubeId": "Gs069dndIYk"
    },
    {
      "titulo": "Smooth",
      "artista": "Santana; Rob Thomas",
      "youtubeId": "6Whgn_iE5uc"
    },
    {
      "titulo": "Locked Out of Heaven",
      "artista": "Bruno Mars",
      "youtubeId": "e-fA-gBCkj0"
    },
    {
      "titulo": "24K Magic",
      "artista": "Bruno Mars",
      "youtubeId": "UqyT8IEBkvY"
    },
    {
      "titulo": "Shape of You",
      "artista": "Ed Sheeran",
      "youtubeId": "JGwWNGJdvx8"
    },
    {
      "titulo": "Watermelon Sugar",
      "artista": "Harry Styles",
      "youtubeId": "E07s5ZYygMg"
    },
    {
      "titulo": "Can't Feel My Face",
      "artista": "The Weeknd",
      "youtubeId": "KEI4qSrkPAs"
    },
    {
      "titulo": "Hips Don't Lie",
      "artista": "Shakira; Wyclef Jean",
      "youtubeId": "DUT5rEU6pqM"
    },
    {
      "titulo": "Beautiful Liar",
      "artista": "Beyoncé; Shakira",
      "youtubeId": "QrOe2h9RtWI"
    },
    {
      "titulo": "La Bicicleta",
      "artista": "Carlos Vives; Shakira",
      "youtubeId": "-UV0QGLmYys"
    },
    {
      "titulo": "Provenza",
      "artista": "KAROL G",
      "youtubeId": "ca48oMV59LU"
    },
    {
      "titulo": "Ay Vamos",
      "artista": "J Balvin",
      "youtubeId": "TapXs54Ah3E"
    },
    {
      "titulo": "China",
      "artista": "Anuel AA; Daddy Yankee; KAROL G; Ozuna; J Balvin",
      "youtubeId": "0VR3dfZf9Yg"
    },
    {
      "titulo": "Can't Remember to Forget You",
      "artista": "Shakira; Rihanna",
      "youtubeId": "o3mP3mJDL2k"
    },
    {
      "titulo": "X (Spanglish Version)",
      "artista": "Nicky Jam; J Balvin",
      "youtubeId": "_I_D_8Z4sJE"
    },
    {
      "titulo": "Waka Waka (This Time for Africa)",
      "artista": "Shakira; Freshlyground",
      "youtubeId": "pRpeEdMmmQ0"
    },
    {
      "titulo": "La Tortura",
      "artista": "Shakira; Alejandro Sanz",
      "youtubeId": "Dsp_8Lm1eSk"
    },
    {
      "titulo": "Chantaje",
      "artista": "Shakira; Maluma",
      "youtubeId": "6Mgqbai3fKo"
    },
    {
      "titulo": "Mi Gente",
      "artista": "J Balvin; Willy William",
      "youtubeId": "wnj6luufpmo"
    },
    {
      "titulo": "Traicionera",
      "artista": "Sebastián Yatra",
      "youtubeId": "NE3IkFadCHM"
    },
    {
      "titulo": "Danza Kuduro",
      "artista": "Don Omar; Lucenzo",
      "youtubeId": "7zp1TbLFPp8"
    },
    {
      "titulo": "Despacito",
      "artista": "Luis Fonsi; Daddy Yankee",
      "youtubeId": "kJQP7kiw5Fk"
    },
    {
      "titulo": "Bailando",
      "artista": "Enrique Iglesias; Descemer Bueno; Gente de Zona",
      "youtubeId": "NUsoVlDFqZg"
    },
    {
      "titulo": "Vivir Mi Vida",
      "artista": "Marc Anthony",
      "youtubeId": "YXnjy5YlDwk"
    },
    {
      "titulo": "La Flaca",
      "artista": "Jarabe de Palo",
      "youtubeId": "R2rP8ZU52gU"
    },
    {
      "titulo": "Corazón Espinado",
      "artista": "Santana; Maná",
      "youtubeId": "t6omUxqhG78"
    },
    {
      "titulo": "Mr. Brightside",
      "artista": "The Killers",
      "youtubeId": "gGdGFtwCNBE"
    },
    {
      "titulo": "Somewhere Only We Know",
      "artista": "Keane",
      "youtubeId": "Oextk-If8HQ"
    },
    {
      "titulo": "A Sky Full of Stars",
      "artista": "Coldplay",
      "youtubeId": "VPRjCeoBqrI"
    },
    {
      "titulo": "Everybody's Changing",
      "artista": "Keane",
      "youtubeId": "Zx4Hjq6KwO0"
    },
    {
      "titulo": "Dreams",
      "artista": "The Cranberries",
      "youtubeId": "Yam5uK6e-bQ"
    },
    {
      "titulo": "Cuando Nadie Ve",
      "artista": "Morat",
      "youtubeId": "K9V8b9d9wYQ"
    }
  ]
};

if (typeof window !== "undefined") window.CATALOGO_CANCIONES = CATALOGO_CANCIONES;
