# Valompositions

Prototipo estático y base de tema WordPress para contenido táctico de VALORANT.

## Vista estática

Abre `index.html` con un servidor local. Las tarjetas de mapas enlazan a `mapa.html?map=<slug>` y cada ficha muestra el análisis y las composiciones del mapa.
Las seis alineaciones VCT más repetidas por mapa se pueden filtrar por equipo en el explorador y en cada ficha de mapa. Los escudos de VLR.gg están empaquetados localmente en `assets/team-logos/` y las estadísticas enlazan a la fuente VCT correspondiente.
Las fichas de agentes cargan sus retratos e iconos/descripciones de habilidades en español desde VALORANT API. Las teclas C, Q, E y X representan los controles predeterminados de PC; la definitiva aparece destacada.

## Tema WordPress

El tema instalable y su plugin de tipos de contenido están en `wordpress/`. Consulta `wordpress/README.md` para instalación, activación y edición de mapas/composiciones.

El prototipo estático no procesa pagos ni inicia sesión; Premium y coaching siguen siendo elementos de presentación hasta integrar un proveedor de pagos y membresías.
