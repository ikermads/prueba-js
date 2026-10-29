# Valompositions

Prototipo estático y base de tema WordPress para contenido táctico de VALORANT.

## Vista estática

Abre `index.html` con un servidor local. Las tarjetas de mapas enlazan a `mapa.html?map=<slug>` y cada ficha muestra el análisis y las composiciones del mapa.
Las seis alineaciones VCT más repetidas por mapa se pueden filtrar por equipo en el explorador y en cada ficha de mapa. Los escudos de VLR.gg están empaquetados localmente en `assets/team-logos/` y las estadísticas enlazan a la fuente VCT correspondiente.
Las fichas de agentes cargan sus retratos e iconos/descripciones de habilidades en español desde VALORANT API. Las teclas C, Q, E y X representan los controles predeterminados de PC; la definitiva aparece destacada.

## Publicación en GitHub Pages

El workflow de GitHub Actions publica automáticamente el sitio estático al hacer push a `main` (o al ejecutarlo manualmente desde la pestaña **Actions**). En GitHub, abre **Settings → Pages** y selecciona **GitHub Actions** como origen de publicación.

El artefacto publicado incluye las páginas HTML, CSS, JavaScript y `assets/`; no incluye `wordpress/`, ya que GitHub Pages no ejecuta PHP ni WordPress. La URL del sitio aparece en el resultado del workflow cuando termina el despliegue.

## Tema WordPress

El tema instalable y su plugin de tipos de contenido están en `wordpress/`. Consulta `wordpress/README.md` para instalación, activación y edición de mapas/composiciones.

El prototipo estático no procesa pagos ni inicia sesión; Premium y coaching siguen siendo elementos de presentación hasta integrar un proveedor de pagos y membresías.
