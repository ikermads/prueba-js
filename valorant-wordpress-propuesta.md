# Proyecto: web profesional sobre VALORANT con WordPress, AdSense y monetización sostenible

## 1. Primera fase obligatoria: investigación y cumplimiento

### 1.1 Fuentes oficiales consultadas y actualizadas

Se verificaron las fuentes oficiales y la documentación pública relevante aplicable a la fecha actual (28/10/2026):

- Google AdSense Help / Program policies: https://support.google.com/adsense/answer/48182
- Google Publisher Policies: https://support.google.com/adsense/answer/9335564
- Google Publisher Restrictions: https://support.google.com/adsense/answer/9335567
- Google Search Central / People-first content: https://developers.google.com/search/docs/fundamentals/people-first-content
- Google Privacy & Messaging / CMP guidance: https://support.google.com/adsense/answer/11133218 (si está disponible en la versión que publique Google en el momento) y la sección de políticas y privacidad de AdSense: https://support.google.com/adsense/topic/9886175
- WordPress.org: https://wordpress.org/
- WordPress plugin directory: https://wordpress.org/plugins/
- Site Kit by Google: https://wordpress.org/plugins/google-site-kit/
- Riot Games Developer Portal: https://developer.riotgames.com/
- Riot API docs: https://developer.riotgames.com/apis
- Riot API Terms: https://developer.riotgames.com/terms
- Riot privacy notice: https://www.riotgames.com/en/privacy-notice

### 1.2 Conclusiones clave de cumplimiento

#### A. Google AdSense y políticas editoriales

Requisitos obligatorios:

- El sitio debe cumplir las Google Publisher Policies y las AdSense Program policies.
- No se puede incentivar clics ni visualizaciones de anuncios.
- No se deben utilizar tráfico artificial, bots, clics manuales, programas pagados o adquisición de visitas fraudulenta.
- La publicidad no puede colocarse de forma que se confunda con navegación, botones o menús.
- La web debe tener contenido útil, original y no superficial.
- El contenido no debe aparentar ser de bajo valor ni ser meramente repetitivo, generado sin revisión humana o copiado.
- Los anuncios no deben dominar la experiencia de lectura ni degradar la legibilidad del contenido editorial.
- Los usuarios deben contar con una política de privacidad y un mecanismo de consentimiento adecuado para la región del visitante, especialmente en EEE/UK/CH y cuando se usan anuncios con personalización.

Buenas prácticas:

- Originalidad y análisis editorial propio.
- Páginas con estructura clara, enlaces internos relevantes, contenido útil y actualizado.
- Diseño limpio, navegación sin confusión y separación clara entre contenido editorial y publicidad.
- Uso prudente de anuncios: artículos y guías bien desarrolladas; no anuncios en páginas vacías o de utilidad marginal.
- Uso de un CMP certificado/compatible con Google y la IAB TCF cuando aplica.
- Monitoreo de rendimiento, flujo de usuarios y errores técnicos frecuentes.

Restricciones técnicas a respetar:

- No duplicar snippets de AdSense ni combinar varios sistemas de inserción del mismo código.
- No poner anuncios en páginas de error, páginas vacías, landing pages de poca utilidad, formularios sin contenido ni páginas de acceso.
- No poner anuncios cerca de botones, enlaces de descarga, controles del buscador, menús ni llamadas a la acción que puedan confundirse con publicidad.
- No activar anuncios reales antes de preparación técnica y verificación del dominio.

Riesgos y alternativas:

- No existe un número mágico universal de artículos, palabras o visitas que garantice aprobación. Si Google no fija un umbral universal, no se debe inventarlo.
- La aprobación no depende solo de un plugin, sino del contenido, la privacidad y el diseño del sitio.

#### B. Riot Games y VALORANT

Conclusiones principales:

- La API oficial de Riot es un conjunto de endpoints específicos, no una base de datos libre para cualquier caso de uso.
- El uso de datos de usuarios reales exige cumplir requisitos de registro, alcance, consentimiento, almacenamiento y privacidad.
- No se deben exponer datos personales de jugadores sin autorización y sin mecanismos adecuados de consentimiento.
- No se debe desarrollar ninguna funcionalidad relacionada con apuestas, manipulación de rango, boosting ni ventaja competitiva injusta.
- No se debe reutilizar ni redistribuir activos protegidos (gráficos, vídeos, textos, marcas) sin autorización.
- La web debe mantenerse como una plataforma independiente de la comunidad, no un clon ni una app que compita con Riot ni su ecosistema.

Para funciones con API/Riot Sign On:

- Si se usa RSO u otra autorización de cuenta, debe evaluarse la finalidad, el consentimiento explícito, el almacenamiento mínimo y la seguridad del token.
- Si la funcionalidad no está permitida o no puede implementarse legal/tecnicamente, debe proponerse una alternativa viable basada en contenido editorial, herramientas de utilidad sin acceso a cuentas reales y análisis de juego.
- Se debe evitar scrapeo automatizado de terceros como sustituto de API autorizada.

En cuanto a la documentación oficial visible:

- En la API pública se reflejan endpoints para datos del juego, no necesariamente para todas las funciones de comunidad que se quieran crear.
- Por tanto, la estrategia correcta es: construir primero una web útil con contenido y herramientas autorizadas, y añadir integraciones Riot solo cuando existan permisos claros, requisitos de registro y finalidad justificable.

#### C. WordPress y plugins

Observaciones:

- WordPress es una base muy adecuada, pero debe mantenerse simple y estable.
- El valor vendrá más de tipos de contenido, relaciones semánticas, velocidad, diseño y contenido útil que de acumular plugins.
- Se recomienda una solución de mínima complejidad: WordPress + un conjunto limitado de plugins esenciales + desarrollo de un pequeño plugin propio si hace falta.

Se deben priorizar funciones como:

- SEO: Rank Math o Yoast
- Consentimiento: CMP compatible con Google y TCF
- Rendimiento: caché y optimización de assets
- Seguridad: firewall y hardening
- Copias de seguridad: estrategia con backup automático
- Formularios: una solución robusta y segura
- Membresías y pagos: un plugin específico para suscripciones y cursos

### 1.3 Matriz de cumplimiento resumida

| Área | Qué exige Google/Riot/WordPress | Cómo se implementa en la web | Riesgos a evitar |
| --- | --- | --- | --- |
| AdSense | Cumplir políticas del programa y Publisher Policies | Contenido útil, anuncios bien ubicados, acceso claro y sin manipulación | Clics artificiales, anuncios en lugares engañosos, contenido superficial |
| Privacidad | Consentimiento para cookies/publicidad en EEE/UK/CH y tratamiento de datos | CMP validada, política de cookies, privacidad y consentimiento activo | Plugin de cookies “genérico” sin certificación y sin configuración correcta |
| SEO | Calidad editorial y contenido útil | Guías originales, estructura organizada, datos estructurados, enlaces internos | Contenido duplicado, páginas superficiales, canibalización |
| Riot | Cumplimiento de políticas de terceros y propiedad intelectual | Solo contenido y herramientas autorizadas; no scraping ni datos personales sin consentimiento | RSO, datos sensibles, boosting, exposiciones indebidas |
| WordPress | Estabilidad, seguridad y mantenibilidad | Plugins limitados, backups, caché, protección, roles de usuario | Plugins redundantes, compatibilidad conflictiva y sobrecarga |

---

## 2. Concepto de la web

### 2.1 Propuesta de valor

La web será una plataforma especializada en VALORANT orientada a la mejora del rendimiento táctico, la comprensión del metajuego y la comunidad competitiva hispana.

Su diferenciación no será “noticias rápidas”, sino un conjunto de herramientas y análisis que aporten valor real: guías originales, fichas de agentes, comparativas, composiciones, estrategias y análisis de contexto.

### 2.2 Identidad propuesta

- Nombre sugerido: “Valorant Tactics Lab” o similar, si se quiere mantener la marca sin apropiarse de elementos oficiales de Riot.
- Estilo: moderno, competitivo, sobrio, premium, orientado a análisis.
- Paleta: negro, grafito, verde militar, cyan, blanco, acentos naranjas suaves para llamados a la acción.
- Tipografía: sans-serif moderna para cuerpos; títulos con estilo editorial/competitivo.
- Estructura visual: enfoque en grids, tarjetas, paneles de análisis y jerarquía clara.

### 2.3 Objetivo principal

Crear una web útil para jugadores de habla hispana que busquen:

- comprender mejor el metajuego,
- mejorar su juego en solitario o premade,
- estudiar composiciones,
- acceder a análisis de parche,
- participar en comunidad de forma segura y útil,
- aprender tácticas reales y originalmente explicadas.

---

## 3. Arquitectura de la web y secciones

### 3.1 Estructura de páginas y navegación

Se recomienda una arquitectura escalable con estas secciones principales:

1. Inicio
2. Agentes
3. Explorar composiciones
4. Mapas
5. Armas y patches
6. Escena profesional
7. Coaching y cursos
8. Comunidad
9. Perfil del jugador
10. Blog / análisis editorial
11. Páginas legales
12. Soporte y contacto

### 3.2 Página de inicio

Debe servir como resumen del proyecto y atraer tanto a jugadores nuevos como a jugadores competitivos.

Elementos recomendados:

- Hero con CTA claro: “Explorar agentes”, “Ver composiciones”, “Guías tácticas”, “Cursos”
- Agentes destacados
- Explorador de composiciones
- Composiciones recomendadas por contexto (soloq, premade, competitivo)
- Últimos parches analizados
- Guías tácticas del momento
- Análisis de la escena competitiva
- Herramientas interactivas comunitarias
- Acceso a cursos/coaching
- Sección editorial con contenidos destacados

Importante: si la base de contenido aún no es amplia, la home debe estar preparada para crecer, no debe llenarse de tarjetas falsas o vacías.

### 3.3 Base de datos de agentes

Cada agente debe tener ficha individual con:

- nombre
- rol y función
- fortalezas y debilidades
- mapas donde destaca
- sinergias clave
- composición recomendada
- recomendaciones para solo queue y premade
- consejos tácticos y errores habituales
- fecha de actualización y parche asociado
- método de valoración y criterio editorial

Se debe separar la clasificación por:

- Solo Queue
- Premade / coordinación

No presentar opiniones como evidencia oficial. Cualquier “tier list” debe venir acompañada de una metodología clara.

### 3.4 Explorador y análisis de composiciones

Funcionalidad central:

- filtro por mapa
- agentes seleccionados
- funciones de cada integrante
- estilo de juego
- nivel de coordinación
- objetivo estratégico
- contexto competitivo si existe fuente verificable

Cada composición tendrá su propia página con:

- 5 agentes
- roles y distribución
- sinergias principales
- puntos fuertes y débiles
- estrategia de ataque
- estrategia de defensa
- alternativas
- cuándo usarla
- explicación táctica original
- fecha/parche de referencia
- análisis de equipos profesionales, si se verifican fuentes fiables

Regla: si no hay verificación, no se publicará como hecho.

### 3.5 Mapas

Cada mapa tendrá su propia ficha con:

- ritmo y estilo del mapa
- composiciones recomendadas
- agresividad/defensividad
- zonas clave
- ejecuciones y timings
- consejos para solo queue y premade
- análisis de errores frecuentes
- enlaces a guías relacionadas

### 3.6 Armas y parches

Sección imprescindible para mantener la web actualizada:

- comparativa de armas según uso y contexto
- cambios de balance por parche
- análisis del metajuego
- impacto en composiciones
- enlaces a fuentes oficiales de Riot

Cada artículo debe indicar claramente la versión/parche correspondiente.

### 3.7 Escena profesional

Se debe ofrecer una sección de análisis competitivo con:

- equipos
- mapas
- estrategias
- composiciones verificadas
- referencias a partidos y fuentes confiables

La clave es que sea análisis editorial original, no una copia de otras bases de datos.

### 3.8 Perfil del jugador y rol personal

Este sistema debe ser recreativo y descriptivo, no una simulación oficial de rango o MMR.

Ejemplos de perfiles:

- Instalocker
- OTP
- Flex
- Filler
- Duelista habitual
- Especialista en iniciadores
- Jugador orientado al apoyo
- Jugador versátil

Cálculo inicial sugerido:

- selección voluntaria de agentes, mapas y roles preferidos
- preguntas sencillas sobre estilo de juego
- cálculo basado en porcentaje de afinidad de estilo y composición
- resultado acompañado de una explicación de por qué refleja ese perfil

No debe depender de datos reales de Riot sin consentimiento explícito.

### 3.9 API oficial de Riot y tracker opcional

La API oficial puede ser útil para:

- buscar cuenta por nombre/tag
- consultar partidas relacionadas si se tienen permisos y consentimiento
- consultar perfiles si el usuario lo autoriza

No obstante, la integración no debe ser la base del proyecto en la fase inicial.

Recomendación técnica:

- todo acceso a Riot debe hacerse en el backend
- guardar solo datos mínimos
- usar caché con límites
- validar permisos
- no exponer secretos
- no utilizar el navegador para tokens o credenciales

El tracker es opcional y debe plantearse solo cuando exista una utilidad real, autorización y viabilidad técnica.

### 3.10 Comunidad y sorteos

Funciones sugeridas:

- perfiles de usuario
- guardar composiciones favoritas
- compartir análisis
- votar por contenido
- comentarios moderados
- listas de favoritos
- sorteo de premios no monetarios o materiales relacionados con la comunidad

Importante: cualquier sorteo debe ser transparente, legal y no depender de clics en anuncios ni de sistemas de recompensa engañosos.

### 3.11 Suscripciones, cursos y coaching

Modelo recomendado:

- gratuito: guías, fichas, composiciones, herramientas básicas, contenido editorial
- premium: análisis avanzados, contenido exclusivo, plantillas, guías por niveles, cursos, webinars
- coaching: sesiones pagadas con estructura clara y valor real

El contenido premium debe aportar valor adicional real y original, no duplicar contenido sin contexto ni vender ventajas competitivas injustas.

---

## 4. Arquitectura técnica en WordPress

### 4.1 Recomendación general

La web debe construirse con WordPress como CMS principal, con:

- tipos de contenido personalizados (CPT)
- taxonomías claras
- campos personalizados para relaciones y metadata
- plantillas dedicadas a cada tipo
- un plugin propio para lógica específica

### 4.2 Tipos de contenido sugeridos

1. Agente
   - nombre
   - rol
   - tipo
   - mapas recomendados
   - fortalezas
   - debilidades
   - perfil de solo queue
   - perfil de premade
   - parche de actualización

2. Mapa
   - nombre
   - tagline / descripción
   - estrategia de ataque/defensa
   - composiciones recomendadas
   - riesgos/errores habituales

3. Composición
   - agentes
   - roles
   - estilo de juego
   - objetivo
   - contexto
   - análisis
   - parche

4. Guía / análisis
   - temática
   - objetivo del contenido
   - duración estimada
   - nivel de dificultad
   - relación con agentes/mapas

5. Parches
   - versión/parche
   - resumen de cambios
   - impacto estratégico
   - agentes afectados

6. Equipo profesional
   - nombre
   - región
   - roster
   - contexto

7. Partido / torneo
   - fecha
   - equipo vs equipo
   - mapa
   - composición y contexto
   - fuente verificable

8. Curso / preparación
   - nivel
   - duración
   - contenido premium

9. Usuario / perfil
   - elecciones de juego
   - estilo del jugador
   - favoritos
   - comunidad

### 4.3 Plugin recomendado por categoría

#### 1) Integración con Google

- Site Kit by Google
  - Función: integración con Search Console, Analytics y AdSense cuando se necesite.
  - Tipo: gratuito; puede requerir licencias según servicios o configuración.
  - Ventajas: integración oficial, menos riesgo de configuración manual.
  - Limitaciones: no reemplaza por sí mismo la estrategia editorial ni la política de consentimiento.
  - Alternativa: integración manual de AdSense + Search Console si se prefiera control total.

#### 2) Consentimiento y privacidad

Se recomienda usar un CMP certificada/compatible con Google y con el marco del IAB TCF cuando el sitio sea monetizado con anuncios relevantes. Si se usa una CMP, debe verificarse que sea una solución certificada y compatible con el modelo publicitario real del sitio.

Opciones a evaluar:

- Google Privacy & Messaging (si está disponible y es compatible con el caso de uso)
- Complianz
- Cookiebot
- OneTrust / soluciones TCF, según el alcance real del proyecto

Importante: no asumir que “cualquier plugin de cookies” cumple automáticamente requisitos de AdSense.

#### 3) Gestión de anuncios

- Ad Inserter
- Advanced Ads

Recomendación práctica:

- si el sitio usa Site Kit y la implementación de AdSense es simple, un plugin de gestión de anuncios solo será necesario si se tienen inserciones complejas.
- no usar varios sistemas que inyecten el mismo código o se solapen.

#### 4) SEO

- Rank Math
- Yoast SEO

Recomendación:

- elegir una sola solución principal para no duplicar configuraciones.
- Rank Math ofrece buen control SEO y compatibilidad con contenido editorial; Yoast es muy extendido y también válido.

#### 5) Rendimiento

- caché del servidor (LiteSpeed Cache si el hosting usa LiteSpeed o NGINX con configuración adecuada)
- un plugin de optimización de imágenes
- minificación de CSS/JS solo si se usa de forma segura

Recomendación: evaluar primero la infraestructura de hosting y servidor. El hosting y la configuración del servidor tienen un peso mayor que el plugin por sí mismo.

#### 6) Seguridad

- Wordfence Security o solución equivalente
- hardening de WordPress
- protección de archivos / accesos / permisos de usuarios
- reglas de seguridad y monitoreo

#### 7) Copias de seguridad

- plugin de backup o estrategia del hosting
- backup automático con almacenamiento externo

Recomendación: no depender solo del plugin. El hosting debe ofrecer restauración y backups periódicos.

#### 8) Membresías y cursos

- MemberPress
- LearnDash
- WooCommerce + memberships

Debe elegirse según la complejidad de la estrategia premium:

- si requiere mucho contenido de curso y progresión, LearnDash o MemberPress con LMS
- si requiere ecommerce y pago por servicios, WooCommerce + extensions

#### 9) Coaching y formularios

- Gravity Forms o WPForms
- Calendly / reservas embebidas, si se usa un servicio externo con políticas adecuadas

Por seguridad y cumplimiento, conviene usar formularios con validación, protección anti-spam y almacenamiento mínimo.

### 4.4 Qué es imprescindible, recomendable y opcional

#### Imprescindible para arrancar

- WordPress base
- tema profesional
- SEO plugin
- caché
- seguridad
- backup
- CMP de consentimiento
- gestión básica de anuncios y AdSense

#### Recomendable

- Site Kit
- plugin de optimización de imágenes
- plugin de formularios y reservas
- plugin de membresía simple

#### Opcional / segunda fase

- integración de API Riot
- perfiles avanzados de usuario
- comunidades con votaciones complejas
- cursos/club premium formalizado
- analítica avanzada

---

## 5. Diseño visual y UX

### 5.1 Identidad visual

Se propone una estética de “analytical esports”:

- base: negro #0B0F12
- paneles: #121A21
- verde: #39D98A
- cyan: #5BCFF5
- blanco: #F4F7FA
- acento naranja: #FFB14A

### 5.2 Tipografía

- Headings: “Sora”, “Rajdhani”, “Orbitron” o alternativa premium similar
- Body: Inter, Manrope o Roboto

### 5.3 Componentes clave

- cards de agentes con iconografía y puntuaciones por rol
- listados de composiciones con badges por formato
- gráficos sencillos para estrategias y sinergias
- filtros de búsqueda claros
- listado de artículos con jerarquía editorial
- CTA a cursos y suscripciones con tratamiento visual distinto al anuncio

### 5.4 UX con móvil

- menú compacto
- tarjetas adaptativas
- filtros colapsables
- diseño limpio y rápido
- CTA bien diferenciados
- suprimir elementos pesados en dispositivos pequeños

### 5.5 Accesibilidad y salud visual

- contraste adecuado
- foco visible
- tamaños de tipografía legibles
- no depender de la apariencia de un anuncio para orientar a usuarios

---

## 6. Google AdSense: cumplimiento desde el diseño

### 6.1 Política editorial y contenido útil

La base del proyecto debe ser contenido útil, estructurado, verificable y original.

Ejemplos de contenido válido:

- análisis de agentes con contexto y argumentación
- comparativa de composiciones por mapa y objetivo
- guías originales de ataque/defensa
- resumen de parches con interpretación editorial
- análisis de escena profesional con fuentes verificables

Lo que evitar:

- artículos muy cortos y repetitivos
- descripciones genéricas sin valor
- páginas con contenido casi idéntico cambiando nombres
- uso de IA sin revisión humana ni criterio editorial

### 6.2 Estrategia de anuncios

Se recomienda la siguiente distribución:

- dentro de artículos largos: 1 anuncio de contenido en la parte central o tras intro con limpieza visual
- páginas de guías y fichas: anuncio discreto y bien separado del contenido principal
- no anuncios en páginas de perfil, login, formulario, checkout o búsqueda si no son necesidad clara
- vacío de anuncios en páginas de error, páginas de acceso y páginas mínimas

No se debe hacer de forma automatizada en cada tipo de página. Debe haber decisión editorial.

### 6.3 Privacidad y consentimiento

Debe existir:

- política de privacidad
- política de cookies
- gestión de preferencias
- consent log y recordatorio si aplica
- tratamiento de datos para formularios, analítica y publicidad

En EEE/UK/CH la web debe gestionar de forma adecuada el consentimiento antes de cargar herramientas de analítica o anuncios con personalización.

### 6.4 Implementación técnica de anuncios

Proceso recomendado:

1. Registrar y verificar el dominio
2. Preparar el sitio y garantizar páginas legales
3. Incorporar solo la integración necesaria de AdSense
4. Revisar consent manager y compatibilidad con anuncios
5. Comprobar que no hay duplicación de scripts ni conflicto entre plugins
6. Solicitar aprobación cuando la web esté lista
7. No activar tráfico real antes de la preparación del sitio

### 6.5 Lista de revisión previa a AdSense

Debe cubrir:

- contenido útil y original
- páginas legales completas
- diseño claro, sin confusión
- navegación normal y fácil
- sin spam ni contenido basura
- sin contenido protegido sin permisos
- consentimiento de cookies funcionando
- anuncios bien ubicados y no invasivos
- no hay páginas vacías o de pobre valor
- no hay SEO práctico ni práctico en páginas sin contenido

---

## 7. SEO y estrategia editorial

### 7.1 Objetivo

Construir una base editorial útil, no un contenido masivo sin valor.

### 7.2 Categorías principales

- agentes
- mapas
- composiciones
- análisis de parches
- guías tácticas
- escena profesional
- perfil del jugador
- comunidad

### 7.3 Recomendaciones de contenido

- usar URLs limpias y diferenciadas
- esquemas de navegación claros
- metas y títulos bien definidos
- enlaces internos y enlaces de cierre
- soporte con datos, gráficos y comparación
- actualizar contenido antiguo cuando cambie el metajuego

### 7.4 Reglas editoriales

- no publicar contenido repetitivo o casi duplicado
- no usar un mismo análisis para múltiples páginas con ligeros cambios
- cada pieza debe tener valor real, contexto y origen
- no mantener páginas que hayan quedado obsoletas sin actualizar

---

## 8. Modelo de monetización

### 8.1 Fuentes previstas

- Google AdSense
- membresías premium
- cursos y profundidad editorial
- coaching y análisis de partidas
- patrocinio compatible con la identidad de la comunidad
- acceso premium a herramientas y contenido avanzado

### 8.2 Fases de lanzamiento

- Fase 1: base útil, contenido editorial y estructura estable
- Fase 2: SEO, comunidad y contenido más profundo
- Fase 3: herramientas y comunidad interactiva con control de calidad
- Fase 4: premium, cursos y coaching cuando la audiencia lo soporte

### 8.3 Indicadores de éxito

- visitantes orgánicos
- retención por tipo de contenido
- tiempo en página en guías y análisis
- tasa de interacción con herramientas
- conversión a membresía premium
- calidad de experiencia de usuario y tiempo de carga

No se deben presentar ingresos o cifras “garantizadas”.

---

## 9. Seguridad, privacidad y calidad del código

En WordPress debe respetarse:

- sanitización y validación de entradas
- escape de salidas
- uso correcto de nonces
- comprobación de permisos por usuario
- limitación de accesos a contenido sensible
- almacenamiento mínimo de datos
- HTTPS obligatorio
- control de errores y logs adecuados
- no exponer claves ni tokens
- no modificar el core de WordPress ni insertar funciones críticas en el tema si pueden moverse o destruirse con un cambio de tema

Todo desarrollo personalizado debe ir en un plugin propio o en un área de custom code documentada.

---

## 10. Entregas requeridas

### ENTREGA 1. Informe de cumplimiento

Se ha preparado la visión general de cumplimiento de AdSense y Riot, separando:

- requisitos obligatorios
- buenas prácticas
- restricciones técnicas
- permisos y autorizaciones pendientes
- riesgos y alternativas

### ENTREGA 2. Arquitectura completa de la web

Se propone una estructura con:

- Inicio
- Agentes
- Composiciones
- Mapas
- Armas y parches
- Escena profesional
- Perfil del jugador
- Comunidad
- cursos y coaching
- páginas legales y soporte

### ENTREGA 3. Diseño y experiencia de usuario

Se contempla una identidad premium, tipo análisis competitivo, con diseño robusto para escritorio y móvil, jerarquía clara, CTA estratégicos y visual minimalista.

### ENTREGA 4. WordPress y plugins

Se recomienda una configuración mínima y mantenible con una selección concreta de plugins esenciales y secundarios según la fase.

### ENTREGA 5. Implementación técnica

Se aconseja:

- WordPress + CPTs + taxonomías
- campos personalizados para relaciones entre entidades
- plugin propio para lógica de cálculo del perfil y herramientas interactivas
- sitio preparado para crecer sin reconstruirlo todo

### ENTREGA 6. Preparación para AdSense

Debe hacerse una comprobación de contenido, navegación, consentimiento, diseño, legalidad y configuración previa a la solicitud.

### ENTREGA 7. Plan de lanzamiento por fases

#### Fase 1: MVP

Objetivos:

- estructura base
- diseño visual
- páginas clave
- legal y privacidad
- contenido inicial útil
- SEO mínimo

Criterio de finalización:

- sitio vivo con contenido original y navegable
- sin confusión en anuncios ni contenido vacío

#### Fase 2: SEO y contenido

Objetivos:

- ampliar guías, fichas, composiciones y análisis
- mejorar enlaces internos
- controlar contenido obsoleto
- medir rendimiento orgánico

Criterio de finalización:

- índice de contenido útil y estable
- posición competitiva en búsquedas relevantes

#### Fase 3: Comunidad y datos

Objetivos:

- perfiles de usuario
- favoritos y comunidad
- herramientas interactivas
- integración de Riot solo si tiene licitud y permisos

Criterio de finalización:

- comunidad funcional, segura y moderada
- sin riesgos para privacidad ni propiedad intelectual

#### Fase 4: Monetización avanzada

Objetivos:

- cursos
- membresías
- coaching
- anuncios optimizados

Criterio de finalización:

- modelo de ingresos validado con uso real y valor real para la comunidad

---

## 11. Recomendación final

La estrategia más sólida para este proyecto es construir una web de valor real, con contenido original y útil, diseño premium, arquitectura WordPress mantenible y un enfoque muy prudente en AdSense, privacidad y uso de Riot.

La prioridad debe ser:

1. contenido útil y original
2. estructura sólida y navegación intuitiva
3. cumplimiento de AdSense y privacidad
4. WordPress estable y simple
5. integración con Riot solo cuando exista permiso real y justificación técnica
6. monetización gradual y no agresiva

En resumen, el sitio no debería “vivir de la publicidad” de forma prematura ni depender de una API que aún no esté legal y técnicamente disponible. Debe ser una plataforma útil y respetuosa con las condiciones de Google y Riot que pueda crecer con el tiempo.

---

## 12. Fuentes arquitectónicas y referencias útiles

- AdSense policies: https://support.google.com/adsense/answer/48182
- Google Publisher Policies: https://support.google.com/adsense/answer/9335564
- Google Publisher Restrictions: https://support.google.com/adsense/answer/9335567
- Search Central – people-first: https://developers.google.com/search/docs/fundamentals/people-first-content
- Riot Developer Portal: https://developer.riotgames.com/
- Riot API docs: https://developer.riotgames.com/apis
- Riot terms: https://developer.riotgames.com/terms
- Riot privacy notice: https://www.riotgames.com/en/privacy-notice
- WordPress: https://wordpress.org/
- Site Kit by Google: https://wordpress.org/plugins/google-site-kit/

## 13. Observación importante sobre legalidad y verificación

Este documento es una propuesta estratégica basada en documentación pública oficial y buenas prácticas. Las aprobaciones de Google, Riot, CMPs, licencias y uso de APIs deben verificarse en el momento del lanzamiento real y durante la implementación técnica. No se debe asumir que cualquier integración o plugin ofrece cumplimiento automático.
