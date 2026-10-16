# Auditoría exhaustiva de enlaces musicales del calendario

**Fecha:** 15 de octubre de 2026  
**Alcance:** las 78 canciones asignadas a los días del calendario; 56 identificadores de YouTube distintos por las repeticiones intencionales.

## Resultado de la validación estructural

- Días en el calendario: **78**.
- Canciones en el catálogo: **360**.
- Asignaciones cuyo título, artista e ID no coinciden con el catálogo: **0**.
- Enlaces directos ausentes o desincronizados con el ID: **0**.
- Errores de sintaxis en los archivos JavaScript revisados: **0**.
- Los IDs repetidos se conservan en los días donde la canción se repite intencionalmente.

La comprobación estructural demuestra que cada día apunta a la entrada correcta del catálogo y tiene un enlace directo. No equivale a una prueba de reproducción de audio en un navegador real: YouTube puede bloquear una inserción por región, configuración del video, cookies, restricciones del dispositivo o políticas de reproducción automática. El entorno de revisión no permite pulsar el calendario publicado ni escuchar cada canción de extremo a extremo.

## Correcciones realizadas

1. **Día 2 — On & On, Erykah Badu:** se reemplazó una variante “Remix Edit” por el audio oficial de la canción.
2. **Días 7 y 31 — Blue World, Mac Miller:** el ID anterior llevaba a “Good News”; ahora se usa la referencia de “Blue World”.
3. **Días 9 y 34 — Didn't Cha Know, Erykah Badu:** se actualizó la referencia por el video oficial localizado.
4. **Día 24 — Humo, Rupatrupa:** se sustituyó el ID no corroborado por el enlace citado específicamente como “Rupatrupa — Humo (SDMA)” en [ElPrograMon, episodio 79](https://www.ivoox.com/programon-79-audios-mp3_rf_22360539_1.html).

## Cambios técnicos del reproductor

- Se eliminó la reproducción desde un iframe de 1 × 1 píxel y se incorporó un reproductor visible de 320 × 200 px con controles.
- La tarjeta del día se abre antes de solicitar la reproducción, para que el reproductor esté visible cuando recibe la orden.
- Al cerrar la tarjeta, la canción se pausa y los controles del reproductor se ocultan; los eventos de pausa tardíos no deben volver a mostrar controles de audio oculto.
- Si YouTube devuelve un error, se muestra un enlace directo al mismo video en lugar de cambiar la canción por otra.
- Cada día incluye el enlace directo en “Canción de hoy”.

## Inventario de las 78 asignaciones

| Día | Canción | Artista | YouTube ID | Enlace directo |
|---:|---|---|---|---|
| 1 | Three Little Birds | Bob Marley & The Wailers | `HNBCVM4KbUM` | [Abrir canción](https://www.youtube.com/watch?v=HNBCVM4KbUM) |
| 2 | On & On | Erykah Badu | `j-yh7sGQe2Q` | [Abrir canción](https://www.youtube.com/watch?v=j-yh7sGQe2Q) |
| 3 | Put Your Records On | Corinne Bailey Rae | `oWQl00LWEwE` | [Abrir canción](https://www.youtube.com/watch?v=oWQl00LWEwE) |
| 4 | Show Me How | Men I Trust | `OZRYzH0Q0pU` | [Abrir canción](https://www.youtube.com/watch?v=OZRYzH0Q0pU) |
| 5 | Rara Bien | Rupatrupa | `15ws-oAh3G0` | [Abrir canción](https://www.youtube.com/watch?v=15ws-oAh3G0) |
| 6 | I Gotta Find Peace of Mind - Live | Ms. Lauryn Hill | `b2IbsMCgz4A` | [Abrir canción](https://www.youtube.com/watch?v=b2IbsMCgz4A) |
| 7 | Blue World | Mac Miller | `_GC2wFTCAGY` | [Abrir canción](https://www.youtube.com/watch?v=_GC2wFTCAGY) |
| 8 | Solo Tú | Macha y el Bloque Depresivo; Álvaro Henríquez | `lxPDvuV9Z88` | [Abrir canción](https://www.youtube.com/watch?v=lxPDvuV9Z88) |
| 9 | Didn't Cha Know | Erykah Badu | `Np21rH7Ldto` | [Abrir canción](https://www.youtube.com/watch?v=Np21rH7Ldto) |
| 10 | Japanese Denim | Daniel Caesar | `6OkneaH-eTA` | [Abrir canción](https://www.youtube.com/watch?v=6OkneaH-eTA) |
| 11 | I Want You Around | Snoh Aalegra | `4976Fgvf5Ps` | [Abrir canción](https://www.youtube.com/watch?v=4976Fgvf5Ps) |
| 12 | Kiss Of Life | Sade | `MmOau-PMWJk` | [Abrir canción](https://www.youtube.com/watch?v=MmOau-PMWJk) |
| 13 | El Sexto Sentido | Alcolirykoz | `tjHgj-p_XiI` | [Abrir canción](https://www.youtube.com/watch?v=tjHgj-p_XiI) |
| 14 | Esta Va | Realidad Mental | `JVEN7Quzpeg` | [Abrir canción](https://www.youtube.com/watch?v=JVEN7Quzpeg) |
| 15 | Feliz Si Es Raro | Alcolirykoz | `rTv5pNLz9IU` | [Abrir canción](https://www.youtube.com/watch?v=rTv5pNLz9IU) |
| 16 | Otra Canción Larga | Alcolirykoz | `aAwXhAV3LPE` | [Abrir canción](https://www.youtube.com/watch?v=aAwXhAV3LPE) |
| 17 | Ride Wit Me | Nelly; City Spud | `RtSDWq6HsJE` | [Abrir canción](https://www.youtube.com/watch?v=RtSDWq6HsJE) |
| 18 | A Veces | Al2 El Aldeano | `LQYOZFO5aB4` | [Abrir canción](https://www.youtube.com/watch?v=LQYOZFO5aB4) |
| 19 | I'll Be Seeing You | Billie Holiday | `3C5zYKIuoxg` | [Abrir canción](https://www.youtube.com/watch?v=3C5zYKIuoxg) |
| 20 | The One | Jorja Smith | `80J2YroXH3g` | [Abrir canción](https://www.youtube.com/watch?v=80J2YroXH3g) |
| 21 | Házmelo Rap | Alcolirykoz | `P1qamoOHLYM` | [Abrir canción](https://www.youtube.com/watch?v=P1qamoOHLYM) |
| 22 | Love | Keyshia Cole | `9PBZy9j3H3I` | [Abrir canción](https://www.youtube.com/watch?v=9PBZy9j3H3I) |
| 23 | Electric Relaxation | A Tribe Called Quest | `WHRnvjCkTsw` | [Abrir canción](https://www.youtube.com/watch?v=WHRnvjCkTsw) |
| 24 | Humo | Rupatrupa | `Vs8EsCVEpsI` | [Abrir canción](https://www.youtube.com/watch?v=Vs8EsCVEpsI) |
| 25 | Best Part (feat. H.E.R.) | Daniel Caesar; H.E.R. | `vBy7FaapGRo` | [Abrir canción](https://www.youtube.com/watch?v=vBy7FaapGRo) |
| 26 | You Got Me | The Roots; Tariq Trotter; Erykah Badu; Eve | `MJCHeEQV454` | [Abrir canción](https://www.youtube.com/watch?v=MJCHeEQV454) |
| 27 | Keep Your Worries | Guru; Angie Stone | `7R0D6ryRUqQ` | [Abrir canción](https://www.youtube.com/watch?v=7R0D6ryRUqQ) |
| 28 | You Rock My World | Michael Jackson | `1-7ABIM2qjU` | [Abrir canción](https://www.youtube.com/watch?v=1-7ABIM2qjU) |
| 29 | If I Ain't Got You | Alicia Keys | `Ju8Hr50Ckwk` | [Abrir canción](https://www.youtube.com/watch?v=Ju8Hr50Ckwk) |
| 30 | Tomorrow | Jorja Smith | `zMC5-M15je0` | [Abrir canción](https://www.youtube.com/watch?v=zMC5-M15je0) |
| 31 | Blue World | Mac Miller | `_GC2wFTCAGY` | [Abrir canción](https://www.youtube.com/watch?v=_GC2wFTCAGY) |
| 32 | Apocalypse | Cigarettes After Sex | `sElE_BfQ67s` | [Abrir canción](https://www.youtube.com/watch?v=sElE_BfQ67s) |
| 33 | Tararea | Alcolirykoz | `nmFdyBUAsfQ` | [Abrir canción](https://www.youtube.com/watch?v=nmFdyBUAsfQ) |
| 34 | Didn't Cha Know | Erykah Badu | `Np21rH7Ldto` | [Abrir canción](https://www.youtube.com/watch?v=Np21rH7Ldto) |
| 35 | good denim | jalen chords | `_2Lnj5N9lCM` | [Abrir canción](https://www.youtube.com/watch?v=_2Lnj5N9lCM) |
| 36 | Ring My Bell | Anita Ward | `URAqnM1PP5E` | [Abrir canción](https://www.youtube.com/watch?v=URAqnM1PP5E) |
| 37 | Beautiful | Snoop Dogg; Pharrell Williams; Charlie Wilson | `_FE194VN6c4` | [Abrir canción](https://www.youtube.com/watch?v=_FE194VN6c4) |
| 38 | 93 'Til Infinity | Souls of Mischief | `fXJc2NYwHjw` | [Abrir canción](https://www.youtube.com/watch?v=fXJc2NYwHjw) |
| 39 | El Día de Mi Suerte | El Redcode | `ApqRPZ8xO6g` | [Abrir canción](https://www.youtube.com/watch?v=ApqRPZ8xO6g) |
| 40 | Insane in the Brain | Cypress Hill | `RijB8wnJCN0` | [Abrir canción](https://www.youtube.com/watch?v=RijB8wnJCN0) |
| 41 | Put Your Records On | Corinne Bailey Rae | `oWQl00LWEwE` | [Abrir canción](https://www.youtube.com/watch?v=oWQl00LWEwE) |
| 42 | Feel So Good | Mase | `rIvEiTrq9kk` | [Abrir canción](https://www.youtube.com/watch?v=rIvEiTrq9kk) |
| 43 | Best Part (feat. H.E.R.) | Daniel Caesar; H.E.R. | `vBy7FaapGRo` | [Abrir canción](https://www.youtube.com/watch?v=vBy7FaapGRo) |
| 44 | By Your Side | Sade | `C8QJmI_V3j4` | [Abrir canción](https://www.youtube.com/watch?v=C8QJmI_V3j4) |
| 45 | Stuck On You | GIVĒON | `UlIgAGotomM` | [Abrir canción](https://www.youtube.com/watch?v=UlIgAGotomM) |
| 46 | Déjame Entrar | Cultura Profética | `IAhVESdwvIU` | [Abrir canción](https://www.youtube.com/watch?v=IAhVESdwvIU) |
| 47 | No Está en Venta | Alcolirykoz | `Se6Cd4sW3ks` | [Abrir canción](https://www.youtube.com/watch?v=Se6Cd4sW3ks) |
| 48 | Antonia | Gondwana | `exxkGyu3G1Q` | [Abrir canción](https://www.youtube.com/watch?v=exxkGyu3G1Q) |
| 49 | La Noche y Tú | Barbaro el Urbano Vargas | `XSN_8UblItk` | [Abrir canción](https://www.youtube.com/watch?v=XSN_8UblItk) |
| 50 | Moment Of Your Life (feat. Coco Jones) | Brent Faiyaz; Coco Jones | `Jv17JsayCSI` | [Abrir canción](https://www.youtube.com/watch?v=Jv17JsayCSI) |
| 51 | Will I See You Again? | Thee Sacred Souls | `IGgb10A_2c8` | [Abrir canción](https://www.youtube.com/watch?v=IGgb10A_2c8) |
| 52 | I'll Be Seeing You | Billie Holiday | `3C5zYKIuoxg` | [Abrir canción](https://www.youtube.com/watch?v=3C5zYKIuoxg) |
| 53 | Put Your Records On | Corinne Bailey Rae | `oWQl00LWEwE` | [Abrir canción](https://www.youtube.com/watch?v=oWQl00LWEwE) |
| 54 | Three Little Birds | Bob Marley & The Wailers | `HNBCVM4KbUM` | [Abrir canción](https://www.youtube.com/watch?v=HNBCVM4KbUM) |
| 55 | La Terrera | Rupatrupa | `2BW92cCp0T4` | [Abrir canción](https://www.youtube.com/watch?v=2BW92cCp0T4) |
| 56 | Virtual Insanity - Remastered 2006 | Jamiroquai | `4JkIs37a2JE` | [Abrir canción](https://www.youtube.com/watch?v=4JkIs37a2JE) |
| 57 | Apocalypse | Cigarettes After Sex | `sElE_BfQ67s` | [Abrir canción](https://www.youtube.com/watch?v=sElE_BfQ67s) |
| 58 | By Your Side | Sade | `C8QJmI_V3j4` | [Abrir canción](https://www.youtube.com/watch?v=C8QJmI_V3j4) |
| 59 | Lost & Found | Jorja Smith | `9xZ6P4Sinvw` | [Abrir canción](https://www.youtube.com/watch?v=9xZ6P4Sinvw) |
| 60 | good denim | jalen chords | `_2Lnj5N9lCM` | [Abrir canción](https://www.youtube.com/watch?v=_2Lnj5N9lCM) |
| 61 | I Want You Around | Snoh Aalegra | `4976Fgvf5Ps` | [Abrir canción](https://www.youtube.com/watch?v=4976Fgvf5Ps) |
| 62 | Kiss Of Life | Sade | `MmOau-PMWJk` | [Abrir canción](https://www.youtube.com/watch?v=MmOau-PMWJk) |
| 63 | Three Little Birds | Bob Marley & The Wailers | `HNBCVM4KbUM` | [Abrir canción](https://www.youtube.com/watch?v=HNBCVM4KbUM) |
| 64 | Tomorrow | Jorja Smith | `zMC5-M15je0` | [Abrir canción](https://www.youtube.com/watch?v=zMC5-M15je0) |
| 65 | Let's Get It Started - Spike Mix | Black Eyed Peas | `mRaQAdynxto` | [Abrir canción](https://www.youtube.com/watch?v=mRaQAdynxto) |
| 66 | I Want You Around | Snoh Aalegra | `4976Fgvf5Ps` | [Abrir canción](https://www.youtube.com/watch?v=4976Fgvf5Ps) |
| 67 | You Know How We Do It | Ice Cube | `FXTh4XLm2VE` | [Abrir canción](https://www.youtube.com/watch?v=FXTh4XLm2VE) |
| 68 | Best Part (feat. H.E.R.) | Daniel Caesar; H.E.R. | `vBy7FaapGRo` | [Abrir canción](https://www.youtube.com/watch?v=vBy7FaapGRo) |
| 69 | Fui Silencio | Sofía Gabanna; Jazzmind | `KV2ECDqPyuY` | [Abrir canción](https://www.youtube.com/watch?v=KV2ECDqPyuY) |
| 70 | Best Part (feat. H.E.R.) | Daniel Caesar; H.E.R. | `vBy7FaapGRo` | [Abrir canción](https://www.youtube.com/watch?v=vBy7FaapGRo) |
| 71 | Aero-Soul | Alcolirykoz | `jk9S5ca0Oh0` | [Abrir canción](https://www.youtube.com/watch?v=jk9S5ca0Oh0) |
| 72 | No Está en Venta | Alcolirykoz | `Se6Cd4sW3ks` | [Abrir canción](https://www.youtube.com/watch?v=Se6Cd4sW3ks) |
| 73 | Don't Know Why | Norah Jones | `tO4dxvguQDk` | [Abrir canción](https://www.youtube.com/watch?v=tO4dxvguQDk) |
| 74 | Kiss Of Life | Sade | `MmOau-PMWJk` | [Abrir canción](https://www.youtube.com/watch?v=MmOau-PMWJk) |
| 75 | By Your Side | Sade | `C8QJmI_V3j4` | [Abrir canción](https://www.youtube.com/watch?v=C8QJmI_V3j4) |
| 76 | Three Little Birds | Bob Marley & The Wailers | `HNBCVM4KbUM` | [Abrir canción](https://www.youtube.com/watch?v=HNBCVM4KbUM) |
| 77 | I'll Be Seeing You | Billie Holiday | `3C5zYKIuoxg` | [Abrir canción](https://www.youtube.com/watch?v=3C5zYKIuoxg) |
| 78 | Freedom | Pharrell Williams | `LlY90lG_Fuw` | [Abrir canción](https://www.youtube.com/watch?v=LlY90lG_Fuw) |

## Prueba final antes de entregar

En el sitio publicado, abre varios días con canciones distintas y confirma que el video aparece y suena. Si aparece un error del reproductor, usa el enlace “Abrir la canción en YouTube”; si el enlace directo también falla, esa canción requiere una nueva referencia. No se debe considerar una canción “probada” solo porque el ID tenga el formato correcto o porque aparezca en el catálogo.
