const mapData = [
  {
    name: "Abyss",
    slug: "abyss",
    backgroundImage: "https://media.valorant-api.com/maps/224b0a95-48b9-f703-1bd8-67aca101a61f/splash.png",
    headline: "Rutas largas y control de cruces",
    overview: "En Champions 2026, Abyss favoreció quintetos con herramientas para controlar líneas largas, tomar espacio con movilidad y disputar el mapa mediante información.",
    tempo: "Por fases; confirma la ruta antes de comprometer el sitio",
    attack: "Obtén información antes de cruzar líneas largas y sincroniza la entrada móvil con humo y cobertura de flanco.",
    defense: "Evita duelos aislados en los bordes. Conserva una ruta de repliegue y reúne utilidad para la retoma.",
    areas: ["Cruces largos", "Accesos de sitio", "Zona central", "Rutas de rotación"],
    solo: "Comunica qué líneas están despejadas antes de cruzar; no persigas un contacto lejos del equipo.",
    premade: "Coordina información y humos antes de tomar espacio; asigna quién cubre las rotaciones largas.",
    mistake: "Cruzar sin información ni posibilidad de intercambio."
  },
  {
    name: "Ascent",
    slug: "ascent",
    backgroundImage: "https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png",
    headline: "Control de medio y timing de retención",
    overview: "Ascent recompensa el control del centro y la gestión paciente de la información. Sus rutas previsibles permiten preparar rotaciones, pero conceder medio facilita que el rival divida la defensa.",
    tempo: "Metódico; acelera tras ganar medio",
    attack: "Toma medio con utilidad, fuerza una rotación y ejecuta con una ruta de salida cubierta.",
    defense: "Evita sobre-rotar ante ruido. Mantén un jugador con opción de recuperar medio y coordina la retoma.",
    areas: ["Medio", "B Main", "A Main", "Mercado"],
    solo: "Prioriza intercambios y comunica si el centro queda libre antes de rotar.",
    premade: "Reparte utilidad de medio y sincroniza la presión de Main con la segunda oleada.",
    mistake: "Regalar medio al inicio y rotar por una señal aislada."
  },
  {
    name: "Haven",
    slug: "haven",
    backgroundImage: "https://media.valorant-api.com/maps/2bee0dc9-4ffe-519b-1cbd-7fbe763a6047/splash.png",
    headline: "Tres sitios y defensa distribuida",
    overview: "Los tres sitios estiran las rotaciones y premian la información temprana. La composición debe poder retrasar una ejecución sin abandonar el mapa completo.",
    tempo: "Lectura y respuesta; las rotaciones definen la ronda",
    attack: "Presiona una zona para fijar defensores y cambia de sitio con tiempo suficiente para reagruparte.",
    defense: "Retrasa el avance y comunica el número de rivales antes de comprometer la rotación completa.",
    areas: ["A Long", "Garaje", "Medio", "C Long"],
    solo: "Da información concreta de número y ubicación; evita rotar solo por utilidad vista.",
    premade: "Establece una cadena de información entre los tres puntos y asigna quién cubre el flanco.",
    mistake: "Rotar a todos los defensores con la primera señal de presión."
  },
  {
    name: "Lotus",
    slug: "lotus",
    backgroundImage: "https://media.valorant-api.com/maps/2fe4ed3a-450a-948b-6d6b-e89a78e680a9/splash.png",
    headline: "Rotaciones y rutas alternativas",
    overview: "Lotus ofrece tres sitios y puertas que alteran el flujo de la ronda. El equipo que conserva opciones de rotación puede castigar defensas demasiado comprometidas.",
    tempo: "Flexible; cambia de plan según la respuesta rival",
    attack: "Toma espacio en dos zonas antes de comprometerse y reserva utilidad para cruzar los accesos finales.",
    defense: "Usa la información para decidir entre disputar el espacio y reagrupar; evita perseguir una rotación ya iniciada.",
    areas: ["A Main", "Árbol", "Medio", "B Main", "C Main"],
    solo: "Anuncia el uso de puertas y conserva una ruta de retirada después del primer contacto.",
    premade: "Crea presión en dos sitios y ejecuta cuando la defensa revele su distribución.",
    mistake: "Separarse demasiado entre los tres sitios y perder capacidad de intercambio."
  },
  {
    name: "Sunset",
    slug: "sunset",
    backgroundImage: "https://media.valorant-api.com/maps/92584fbe-486a-b1b2-9faa-39b0f486b498/splash.png",
    headline: "Control de medio y presión por zonas",
    overview: "El control del centro conecta las rutas de ataque y condiciona las rotaciones. Las composiciones necesitan información fiable para no ceder espacio en los laterales.",
    tempo: "Por fases; disputa medio antes de ejecutar",
    attack: "Despeja el centro por capas, ocupa una salida y evita gastar toda la utilidad antes de entrar al sitio.",
    defense: "Protege los cruces de medio y rota con confirmación; conserva recursos para disputar la entrada final.",
    areas: ["Medio", "B Main", "A Main", "Mercado"],
    solo: "Asegura que alguien vigile el flanco al ejecutar y comparte la información de medio.",
    premade: "Sincroniza la toma de medio con la presión del sitio para limitar la rotación defensiva.",
    mistake: "Forzar una entrada lateral sin control del centro ni cobertura de flanco."
  },
  {
    name: "Split",
    slug: "split",
    backgroundImage: "https://media.valorant-api.com/maps/d960549e-485c-e861-8d71-aa9d1aed12a2/splash.png",
    headline: "Verticalidad y control del punto medio",
    overview: "La altura y los accesos estrechos convierten el control de medio en una condición para dividir la defensa. La utilidad de despeje debe acompañar cada avance.",
    tempo: "Gradual; gana espacio vertical antes de acelerar",
    attack: "Disputa medio y conecta la presión de arriba con una entrada desde Main para abrir dos ángulos.",
    defense: "Evita ceder las alturas sin información y prepara una retoma con utilidad coordinada.",
    areas: ["Medio", "Ventana", "A Main", "B Main"],
    solo: "No dueles en pasillos estrechos sin apoyo; espera el intercambio y cubre la subida rival.",
    premade: "Combina presión alta y baja con una señal común para entrar o retroceder.",
    mistake: "Atacar un único acceso mientras la defensa conserva todas las alturas."
  },
  {
    name: "Summit",
    slug: "summit",
    backgroundImage: "https://media.valorant-api.com/maps/756da597-416b-c0f2-f47b-afbdf28670bc/splash.png",
    headline: "Espacio, utilidad y entradas coordinadas",
    overview: "Summit fue el mapa con más partidas en Champions 2026: 18 mapas disputados. Las composiciones líderes combinaron movilidad, iniciación y control de visión.",
    tempo: "Controla primero el espacio; acelera cuando la utilidad abra una ventana",
    attack: "Escalona información, humo y entrada para que la primera baja o el espacio ganado se puedan intercambiar.",
    defense: "Usa movilidad y utilidad para disputar una zona sin comprometer todos los recursos en el primer contacto.",
    areas: ["Accesos de sitio", "Zona central", "Rutas de rotación", "Espacio de post-plant"],
    solo: "Avisa cuándo vas a entrar y conserva una habilidad para salir o permitir el intercambio.",
    premade: "Marca una señal común de ejecución y reparte la utilidad para entrada, apoyo y post-plant.",
    mistake: "Acelerar con la primera habilidad y dejar al resto del equipo sin una segunda oleada."
  }
];

const agents = [
  {
    name: "Astra",
    role: "Controlador",
    icon: "A",
    strength: "Control de visión y ritmo",
    summary: "Astra domina el mapa con estrellas que bloquean ángulos y restructuran la posición defensiva del equipo.",
    tier: "Control",
    format: "Premade",
    bio: "Astra transforma la información del mapa en presión constante. Su juego se basa en anticipar la ruta del rival y forzar decisiones con poco margen.",
    label: "Apertura global",
    style: "Temporal",
    risk: "Medio",
    map: "Lotus",
    synergy: "Omen",
    traits: ["Paredes de mapa", "Control temporal", "Rejilla de presión"]
  },
  {
    name: "Breach",
    role: "Iniciador",
    icon: "B",
    strength: "Ruptura y disturbio",
    summary: "Breach gana rondas forzando la reacción del enemigo y aprovechando momentos en los que el rival está desordenado.",
    tier: "Apertura",
    format: "Premade",
    bio: "Breach funciona mejor cuando sabe golpear antes del duelo. Su presión se construye con utilidades de bloqueo y caos.",
    label: "Utility de entrada",
    style: "Agresivo",
    risk: "Alto",
    map: "Bind",
    synergy: "Raze",
    traits: ["Entrada temprana", "Control de foco", "Ruptura de línea"]
  },
  {
    name: "Brimstone",
    role: "Controlador",
    icon: "BR",
    strength: "Mapa completo y control",
    summary: "Brimstone aporta presión sostenida y convierte la ejecución del equipo en una estructura más fácil de defender.",
    tier: "Estratégico",
    format: "Premade",
    bio: "Brimstone es la alternativa de control cuando el equipo necesita equilibrar riesgo, presión y coordinación de sitio.",
    label: "Mando táctico",
    style: "Estructural",
    risk: "Medio",
    map: "Ascent",
    synergy: "Sova",
    traits: ["Líneas de humo", "Apoyo de sitio", "Cobertura de presión"]
  },
  {
    name: "Chamber",
    role: "Centinela",
    icon: "C",
    strength: "Punto muerto y precisión",
    summary: "Chamber empuja la ronda con precisión, control de ángulo y capacidad para abrir la partida con mucho valor personal.",
    tier: "Puntero",
    format: "Solo Queue",
    bio: "Chamber se beneficia del ángulo limpio, la información previa y la capacidad de doblegar un punto con control de tiro.",
    label: "Apertura controlada",
    style: "Preciso",
    risk: "Medio",
    map: "Haven",
    synergy: "Jett",
    traits: ["Ángulos vivos", "Disparo preciso", "Fijación de pelea"]
  },
  {
    name: "Clove",
    role: "Controlador",
    icon: "CL",
    strength: "Doblete de presión",
    summary: "Clove combina control de área con seguridad defensiva, jugando bien en rondas de retoma y espacio largo.",
    tier: "Flex",
    format: "Versátil",
    bio: "Su juego se apoya en seguir siendo valioso tanto en defensa como en la segunda oleada de presión.",
    label: "Presión sostenida",
    style: "Flexible",
    risk: "Medio",
    map: "Icebox",
    synergy: "Killjoy",
    traits: ["Cobertura con humo", "Retoma reforzada", "Apertura de línea"]
  },
  {
    name: "Cypher",
    role: "Centinela",
    icon: "CY",
    strength: "Información y retoma",
    summary: "Aporta información de espacios laterales y posicionamiento defensivo para ralentizar la ejecución del rival.",
    tier: "Retención",
    format: "Premade",
    bio: "Cypher ofrece un valor enorme si el equipo quiere cerrar espacios y convertir cada detalle de la ronda en una ventaja sistémica.",
    label: "Control de ángulos",
    style: "Defensivo",
    risk: "Bajo",
    map: "Split",
    synergy: "Sova",
    traits: ["Covertura de ángulo", "Información constante", "Retoma defensiva"]
  },
  {
    name: "Deadlock",
    role: "Centinela",
    icon: "D",
    strength: "Bloqueo y control",
    summary: "Deadlock constriñe el avance rival con una estructura sólida y áreas de amenaza claramente redefinidas.",
    tier: "Control",
    format: "Premade",
    bio: "Su utilidad funciona mejor cuando el equipo quiere cerrar una ruta y hacer que la presión del rival se desmorone por pasos.",
    label: "Trinchera",
    style: "Defensivo",
    risk: "Medio",
    map: "Icebox",
    synergy: "Viper",
    traits: ["Bloqueo visual", "Instalación defensiva", "Líneas de retraso"]
  },
  {
    name: "Fade",
    role: "Iniciador",
    icon: "F",
    strength: "Peligro oculto",
    summary: "Fade construye la ronda con información angular y presión de espacio para hacer que el rival se equivoque.",
    tier: "Control",
    format: "Premade",
    bio: "Fade es difícil de leer porque convierte cada información de mapa en presión real: a veces rompe la ronda por una mala posición.",
    label: "Presión de entorno",
    style: "Sutil",
    risk: "Medio",
    map: "Sunset",
    synergy: "Raze",
    traits: ["Presa psicológica", "Control del sitio", "Información durante presión"]
  },
  {
    name: "Gekko",
    role: "Iniciador",
    icon: "G",
    strength: "Apoyo de entrada",
    summary: "Gekko convive muy bien con composiciones de control y adaptación, incorporando despliegue de utilidad en varias rutas.",
    tier: "Flex",
    format: "Versátil",
    bio: "Gekko aporta mucha libertad para ejecutar rutas sin perder organización. El valor no está solo en disparar, sino en decidir cuándo entrar.",
    label: "Adaptación",
    style: "Flexible",
    risk: "Medio",
    map: "Lotus",
    synergy: "Jett",
    traits: ["Entrada flexible", "Apoyo a ruta", "Presión por elecciones"]
  },
  {
    name: "Harbor",
    role: "Controlador",
    icon: "H",
    strength: "Cobertura y bloqueo",
    summary: "Harbor construye espacios de defensa más estables y convierte ciertas rutas en un problema para el rival.",
    tier: "Estructural",
    format: "Premade",
    bio: "Su valor aumenta cuando el equipo quiere ralentizar una entrada y obligar a la reacción con ventaja de información.",
    label: "Bloqueo de ruta",
    style: "Defensivo",
    risk: "Bajo",
    map: "Pearl",
    synergy: "Sage",
    traits: ["Bloqueo de flujo", "Retención táctica", "Control de espacio"]
  },
  {
    name: "Iso",
    role: "Duelista",
    icon: "I",
    strength: "Despeje y duelos",
    summary: "Iso genera valor individual cuando todos los demás mantienen un orden claro de presión y entradas laterales.",
    tier: "Precisión",
    format: "Solo Queue",
    bio: "Iso funciona mejor como factor de decisión; si el equipo se mantiene ordenado, su presión encaja en la estructura del mapa.",
    label: "Duelista de margen",
    style: "Agresivo",
    risk: "Alto",
    map: "Ascent",
    synergy: "Sova",
    traits: ["Pelea directa", "Cambio de ritmo", "Presión aislada"]
  },
  {
    name: "Jett",
    role: "Duelista",
    icon: "J",
    strength: "Entrada y control de espacio",
    summary: "Ideal para cambiar el ritmo de la ronda con presión rápida, decisión de ángulo y manipulación del tiempo del enemigo.",
    tier: "Solo Queue",
    format: "Premade",
    bio: "Jett consigue generar valor cuando sabe mezclarse con la información del rival y ofrecer entradas con menos riesgo para el resto del equipo.",
    label: "Entrada explosiva",
    style: "Agresivo",
    risk: "Alto",
    map: "Bind",
    synergy: "Sova",
    traits: ["Aceleración de ronda", "Salida limpia", "Cambio de ritmo"]
  },
  {
    name: "KAY/O",
    role: "Iniciador",
    icon: "K",
    strength: "Desorden y control de información",
    summary: "KAY/O exige presión con ratos bien ejecutados y hace que el rival reaccione a su control de mapa.",
    tier: "Control",
    format: "Premade",
    bio: "Su utilidad es muy valiosa cuando el equipo quiere obligar a los rivales a reaccionar sin perder el control del sitio.",
    label: "Punta de entrada",
    style: "Disruptivo",
    risk: "Medio",
    map: "Split",
    synergy: "Viper",
    traits: ["Supresión", "Apertura estructural", "Ruido de información"]
  },
  {
    name: "Killjoy",
    role: "Centinela",
    icon: "KJ",
    strength: "Retoma y control de zonas",
    summary: "Excelente para bloquear rutas, redefinir la retoma y ganar valor con una estructura defensiva estable.",
    tier: "Defensivo",
    format: "Premade",
    bio: "Killjoy se siente mejor cuando el equipo quiere cerrar un punto y hacer que la segunda parte de la ronda sea más larga y más segura.",
    label: "Retoma defensiva",
    style: "Defensivo",
    risk: "Bajo",
    map: "Ascent",
    synergy: "Raze",
    traits: ["Mina de control", "Retoma pesada", "Barrera de entrada"]
  },
  {
    name: "Neon",
    role: "Duelista",
    icon: "N",
    strength: "Velocidad y movilidad",
    summary: "Neon exige que el equipo la siga con una estructura clara, porque su presión genera rápido espacio y miedo.",
    tier: "Agresivo",
    format: "Solo Queue",
    bio: "Neon funciona mejor cuando la presión y la movilidad se coordinan con un punto de entrada definido y una idea clara de la ruta.",
    label: "Temporizador alto",
    style: "Agresivo",
    risk: "Alto",
    map: "Sunset",
    synergy: "Sova",
    traits: ["Fase rápida", "Pase de presión", "Velocidad de entrada"]
  },
  {
    name: "Omen",
    role: "Controlador",
    icon: "O",
    strength: "Información y presión",
    summary: "Se aprovecha de la información, la asimetría de visión y la rotación temprana para abrir puertas sin perder ritmo.",
    tier: "Flex",
    format: "Versátil",
    bio: "Omen destaca por convertir los espacios vacíos en decisiones difíciles y por abrir caminos sin revelar la intención del equipo.",
    label: "Rota y controla",
    style: "Flex",
    risk: "Medio",
    map: "Lotus",
    synergy: "Jett",
    traits: ["Sombra de mapa", "Cambio de ángulo", "Manipulación de espacio"]
  },
  {
    name: "Phoenix",
    role: "Duelista",
    icon: "P",
    strength: "Entrada en fuego",
    summary: "Phoenix aprovecha la presión simple y la empuje de fuego para abrir la partida con mínima necesidad de coordinación excesiva.",
    tier: "Agresivo",
    format: "Solo Queue",
    bio: "Phoenix ofrece valor claro cuando el equipo necesita más confianza en la entrada directa sin perder la capacidad de reenganchar la ronda.",
    label: "Resistencia en fuego",
    style: "Agresivo",
    risk: "Alto",
    map: "Haven",
    synergy: "Sova",
    traits: ["Entrada directa", "Fuego sostenido", "Confianza de equipo"]
  },
  {
    name: "Raze",
    role: "Duelista",
    icon: "R",
    strength: "Entradas explosivas",
    summary: "Fuerza la entrada con utilidades de preparación, empuje directo y presión de mapa con poco margen de respuesta.",
    tier: "Entrador",
    format: "Agresivo",
    bio: "Raze prospera en rondas donde el equipo sabe forzar el choque y luego transformar esa entrada en una ventaja clara de espacio.",
    label: "Presión explosiva",
    style: "Agresivo",
    risk: "Alto",
    map: "Bind",
    synergy: "Sova",
    traits: ["Puerta visual", "Entrada de altísimo riesgo", "Pérdida de control del primer choque"]
  },
  {
    name: "Reyna",
    role: "Duelista",
    icon: "RY",
    strength: "Puntualidad de duel",
    summary: "Reyna se entrega a la ideología de cerrar la pelea y sacar valor del intercambio más rápido posible.",
    tier: "Duelista",
    format: "Solo Queue",
    bio: "El valor de Reyna depende mucho del contexto: si entra en el momento correcto, el equipo se beneficia de su fuerza en el duelo.",
    label: "Fuego puntual",
    style: "Agresivo",
    risk: "Alto",
    map: "Ascent",
    synergy: "Killjoy",
    traits: ["Duel bajo presión", "Foco en ventaja", "Cobertura mínima"]
  },
  {
    name: "Sage",
    role: "Centinela",
    icon: "S",
    strength: "Soporte y recuperación",
    summary: "Estabiliza la estructura defensiva y permite recuperar el ritmo cuando la ronda empieza a girar en torno a la retoma.",
    tier: "Soporte",
    format: "Versátil",
    bio: "Sage ofrece una base muy útil para actuar como eje de la retoma y construir rondas con más control y menos improvisación.",
    label: "Fuerza de retoma",
    style: "Defensivo",
    risk: "Bajo",
    map: "Pearl",
    synergy: "Omen",
    traits: ["Bloqueo de daño", "Reseteo de ronda", "Retoma segura"]
  },
  {
    name: "Skye",
    role: "Iniciador",
    icon: "SK",
    strength: "Exploración y presión",
    summary: "Skye hace más fácil la fase de contacto gracias a la información y al control de distancia flexible.",
    tier: "Flex",
    format: "Premade",
    bio: "La utilidad de Skye es clara cuando el equipo quiere crear un bloqueo de información y luego entrar con valor real.",
    label: "Revelación",
    style: "Flex",
    risk: "Medio",
    map: "Split",
    synergy: "Jett",
    traits: ["Información de ruta", "Presión con control", "Mando de sitio"]
  },
  {
    name: "Sova",
    role: "Iniciador",
    icon: "SO",
    strength: "Información y apoyo",
    summary: "Transforma la ronda con información previa, control de ángulos y capacidad para coordinar la entrada con mayor precisión.",
    tier: "Control",
    format: "Premade",
    bio: "Sova crea el contraste entre la ronda y la ejecución: la información que genera puede decidir si tu equipo entra demasiado pronto o demasiado tarde.",
    label: "Lector de mapa",
    style: "Racional",
    risk: "Medio",
    map: "Ascent",
    synergy: "Jett",
    traits: ["Información ligera", "Apertura de sitio", "Preparación de entrada"]
  },
  {
    name: "Viper",
    role: "Controlador",
    icon: "V",
    strength: "Aislamiento y bloqueo",
    summary: "Controla el mapa a través de zonas de amenaza, bloqueo de rutas y presión de sitio bien cronificada.",
    tier: "Pestaña",
    format: "Estructural",
    bio: "Viper se vuelve muy fuerte cuando el equipo quiere cerrar el camino y forzar la decisión del rival con poco margen para reaccionar.",
    label: "Control de áreas",
    style: "Estructural",
    risk: "Medio",
    map: "Icebox",
    synergy: "Deadlock",
    traits: ["Bloqueo de rutas", "Control de área", "Puntualidad de sitio"]
  },
  {
    name: "Yoru",
    role: "Duelista",
    icon: "Y",
    strength: "Manipulación de información",
    summary: "Yoru hace que el rival se equivoque en la lectura del mapa y luego pone la presión en el momento exacto.",
    tier: "Flex",
    format: "Solo Queue",
    bio: "El valor de Yoru deriva de la idea de engañar y luego adoptar la pelea en la dirección correcta, con margen para la sorpresa.",
    label: "Falsa intención",
    style: "Flexible",
    risk: "Alto",
    map: "Sunset",
    synergy: "Omen",
    traits: ["Falsas rutas", "Manipulación de información", "Presión ofensiva"]
  },
  {
    name: "Hush",
    role: "Duelista",
    icon: "HU",
    strength: "Desplazamiento y disrupción",
    summary: "Hush genera aperturas con desplazamiento y habilidades que interrumpen la posición rival.",
    tier: "Entrada",
    format: "Solo Queue",
    bio: "Coordina su entrada con el equipo: primero fuerza al rival a moverse y luego toma el espacio que queda libre.",
    label: "Desplazamiento",
    style: "Agresivo",
    risk: "Alto",
    map: "Abyss",
    synergy: "Sova",
    traits: ["Apertura de ángulos", "Desplazamiento rival", "Entrada por oleadas"]
  },
  {
    name: "Miks",
    role: "Controlador",
    icon: "MI",
    strength: "Humo y tempo de equipo",
    summary: "Miks mezcla cobertura y apoyo para sincronizar la entrada del equipo.",
    tier: "Soporte",
    format: "Premade",
    bio: "Alinea sus humos y mejoras con la señal de entrada para que el equipo pueda cruzar y tradear junto.",
    label: "Aceleración de equipo",
    style: "Flexible",
    risk: "Medio",
    map: "Summit",
    synergy: "Neon",
    traits: ["Cobertura de cruce", "Tempo compartido", "Apoyo a la entrada"]
  },
  {
    name: "Tejo",
    role: "Iniciador",
    icon: "TE",
    strength: "Presión a distancia",
    summary: "Tejo puede obligar a los defensores a abandonar posiciones antes de que el equipo avance.",
    tier: "Preparación",
    format: "Premade",
    bio: "Usa la utilidad para despejar o desplazar al rival y coordina la entrada con el duelista cuando termina la presión.",
    label: "Despeje de sitio",
    style: "Táctico",
    risk: "Medio",
    map: "Ascent",
    synergy: "Jett",
    traits: ["Presión de zona", "Despeje previo", "Ventana de entrada"]
  },
  {
    name: "Veto",
    role: "Centinela",
    icon: "VE",
    strength: "Intercepción y control de flanco",
    summary: "Veto protege el espacio ganado y ayuda a limitar la utilidad con la que el rival puede retomar.",
    tier: "Control",
    format: "Premade",
    bio: "Coloca sus herramientas para detectar o interrumpir el avance y juega cerca de un compañero que pueda tradear.",
    label: "Intercepción",
    style: "Defensivo",
    risk: "Medio",
    map: "Haven",
    synergy: "Omen",
    traits: ["Cobertura de retaguardia", "Negación de utilidad", "Retoma ordenada"]
  },
  {
    name: "Vyse",
    role: "Centinela",
    icon: "VY",
    strength: "Aislamiento de accesos",
    summary: "Vyse puede separar a los rivales y forzar duelos favorables cerca de sus herramientas.",
    tier: "Control",
    format: "Premade",
    bio: "Coordina sus trampas con el fuego de apoyo; su valor está en aislar un cruce y castigar a quien entre primero.",
    label: "Aislamiento",
    style: "Defensivo",
    risk: "Medio",
    map: "Lotus",
    synergy: "Raze",
    traits: ["Control de acceso", "Duelos aislados", "Cobertura de flanco"]
  },
  {
    name: "Waylay",
    role: "Duelista",
    icon: "WA",
    strength: "Movilidad y entrada",
    summary: "Waylay aporta velocidad para tomar espacio y dificultar que el rival mantenga ángulos estáticos.",
    tier: "Entrada",
    format: "Solo Queue",
    bio: "Entra después del despeje del iniciador y usa su movilidad para abrir una segunda línea de presión.",
    label: "Velocidad de entrada",
    style: "Agresivo",
    risk: "Alto",
    map: "Abyss",
    synergy: "Astra",
    traits: ["Cambio de ritmo", "Toma de espacio", "Segunda oleada"]
  }
];

const professionalPickRates = {
  "Astra": 10,
  "Breach": 1,
  "Brimstone": 2,
  "Chamber": 52,
  "Clove": 0,
  "Cypher": 22,
  "Deadlock": 1,
  "Fade": 51,
  "Gekko": 0,
  "Harbor": 17,
  "Hush": null,
  "Iso": 0,
  "Jett": 9,
  "KAY/O": 4,
  "Killjoy": 2,
  "Miks": 0,
  "Neon": 65,
  "Omen": 77,
  "Phoenix": 17,
  "Raze": 15,
  "Reyna": 0,
  "Sage": 22,
  "Skye": 9,
  "Sova": 40,
  "Tejo": 1,
  "Veto": 1,
  "Viper": 30,
  "Vyse": 9,
  "Waylay": 13,
  "Yoru": 31
};

const soloQueueStats = [
  { name: "Clove", tier: "S", pickRate: 9.5, winRate: 52.4, nonMirrorWinRate: 54.9, kd: 0.96 },
  { name: "Sage", tier: "S", pickRate: 6.8, winRate: 51.9, nonMirrorWinRate: 53.3, kd: 0.93 },
  { name: "Killjoy", tier: "A", pickRate: 1.9, winRate: 51.4, nonMirrorWinRate: 51.6, kd: 1.00 },
  { name: "Sova", tier: "A", pickRate: 5.2, winRate: 50.6, nonMirrorWinRate: 51.1, kd: 0.98 },
  { name: "Phoenix", tier: "A", pickRate: 5.1, winRate: 50.6, nonMirrorWinRate: 50.8, kd: 1.04 },
  { name: "Raze", tier: "A", pickRate: 4.2, winRate: 50.3, nonMirrorWinRate: 50.5, kd: 1.02 },
  { name: "Fade", tier: "A", pickRate: 4.5, winRate: 50.3, nonMirrorWinRate: 50.5, kd: 0.93 },
  { name: "Cypher", tier: "A", pickRate: 3.8, winRate: 50.3, nonMirrorWinRate: 50.4, kd: 1.00 },
  { name: "Gekko", tier: "B", pickRate: 2.0, winRate: 50.2, nonMirrorWinRate: 50.2, kd: 0.89 },
  { name: "Vyse", tier: "B", pickRate: 1.0, winRate: 50.0, nonMirrorWinRate: 50.0, kd: 1.01 },
  { name: "Jett", tier: "B", pickRate: 9.3, winRate: 49.9, nonMirrorWinRate: 49.9, kd: 1.06 },
  { name: "Neon", tier: "B", pickRate: 3.7, winRate: 49.9, nonMirrorWinRate: 49.8, kd: 0.98 },
  { name: "Reyna", tier: "B", pickRate: 9.0, winRate: 49.9, nonMirrorWinRate: 49.8, kd: 1.07 },
  { name: "Deadlock", tier: "B", pickRate: 1.6, winRate: 49.7, nonMirrorWinRate: 49.7, kd: 0.97 },
  { name: "Brimstone", tier: "B", pickRate: 1.8, winRate: 49.7, nonMirrorWinRate: 49.6, kd: 0.96 },
  { name: "Skye", tier: "B", pickRate: 3.0, winRate: 49.7, nonMirrorWinRate: 49.6, kd: 0.92 },
  { name: "Tejo", tier: "B", pickRate: 1.5, winRate: 49.5, nonMirrorWinRate: 49.5, kd: 0.94 },
  { name: "Veto", tier: "B", pickRate: 0.7, winRate: 49.1, nonMirrorWinRate: 49.0, kd: 1.02 },
  { name: "Chamber", tier: "B", pickRate: 8.2, winRate: 49.4, nonMirrorWinRate: 48.8, kd: 1.10 },
  { name: "Breach", tier: "B", pickRate: 1.4, winRate: 48.8, nonMirrorWinRate: 48.7, kd: 0.93 },
  { name: "Waylay", tier: "B", pickRate: 1.9, winRate: 48.6, nonMirrorWinRate: 48.4, kd: 0.99 },
  { name: "Miks", tier: "B", pickRate: 3.2, winRate: 48.7, nonMirrorWinRate: 48.4, kd: 0.92 },
  { name: "Iso", tier: "B", pickRate: 1.6, winRate: 48.4, nonMirrorWinRate: 48.2, kd: 0.99 },
  { name: "Viper", tier: "C", pickRate: 0.4, winRate: 48.0, nonMirrorWinRate: 47.9, kd: 0.99 },
  { name: "Astra", tier: "C", pickRate: 0.7, winRate: 47.5, nonMirrorWinRate: 47.4, kd: 1.02 },
  { name: "Yoru", tier: "C", pickRate: 1.6, winRate: 47.5, nonMirrorWinRate: 47.3, kd: 0.99 },
  { name: "KAY/O", tier: "C", pickRate: 1.4, winRate: 46.8, nonMirrorWinRate: 46.5, kd: 0.89 },
  { name: "Omen", tier: "C", pickRate: 4.7, winRate: 46.9, nonMirrorWinRate: 45.9, kd: 0.98 },
  { name: "Harbor", tier: "C", pickRate: 0.4, winRate: 45.8, nonMirrorWinRate: 45.7, kd: 0.94 },
  { name: "Hush", tier: "D", pickRate: 0.0, winRate: 45.8, nonMirrorWinRate: 43.4, kd: 0.91 }
];

const compositions = [
  {
    name: "G2 · doble entrada y control",
    map: "Abyss",
    summary: "Quinteto de G2 repetido cuatro veces en Abyss durante Champions 2026.",
    agents: ["Neon", "Sova", "Harbor", "Waylay", "Astra"],
    style: "Agresiva",
    uses: 4,
    sampleSize: 16,
    teams: ["G2 Esports"],
    plan: "Aprovecha dos duelistas para reclamar espacio mientras Sova informa y Astra con Harbor controla las líneas de ayuda.",
    attack: "Sova despeja primero; Neon y Waylay ocupan espacio por oleadas. Harbor y Astra sincronizan cobertura para que la entrada no quede aislada.",
    defense: "Usa la movilidad para disputar y salir, no para tomar dos duelos separados. Conserva controladores para retrasar el segundo avance.",
    playAround: "Juega alrededor de la doble entrada: una duelista crea espacio y la otra intercambia; la utilidad de Sova y los controladores marca la señal."
  },
  {
    name: "Vitality · doble humo y ruptura",
    map: "Abyss",
    summary: "Quinteto de Team Vitality repetido tres veces en Abyss durante Champions 2026.",
    agents: ["Sova", "Yoru", "Harbor", "Astra", "Jett"],
    style: "Flexible",
    uses: 3,
    sampleSize: 16,
    teams: ["Team Vitality"],
    plan: "Combina información con dos controladores y dos duelistas para alternar entre toma directa y cambio de lado.",
    attack: "Sova recoge información, Harbor y Astra cortan líneas y Jett o Yoru toma la primera pelea con apoyo cercano.",
    defense: "Retrasa el avance con doble control y evita exponer ambas entradas. Yoru y Jett pueden recuperar espacio tras una señal clara.",
    playAround: "Juega alrededor de la información de Sova y del cambio de ritmo de Yoru; reserva una ruta de salida para Jett."
  },
  {
    name: "Control de medio · intercambio rápido",
    map: "Ascent",
    summary: "El quinteto más repetido de Ascent: nueve apariciones en 26 alineaciones de equipo por mapa.",
    agents: ["Omen", "Sova", "Cypher", "Phoenix", "Jett"],
    style: "Control",
    uses: 9,
    sampleSize: 26,
    teams: ["100 Thieves", "NRG", "Team Liquid", "FUT Esports"],
    plan: "Juega medio con información y prepara una entrada intercambiable; Phoenix aporta una segunda herramienta de contacto junto a Jett.",
    attack: "Sova despeja y Omen corta la ayuda. Jett toma el espacio inicial y Phoenix sigue para tradear o asegurar la plantación.",
    defense: "Cypher vigila el flanco y medio. Usa la información para decidir entre retener el espacio o juntarte para una retoma.",
    playAround: "Juega alrededor de medio y de las dos oleadas de duelista; no envíes a Jett sin que Phoenix pueda intercambiarla."
  },
  {
    name: "Neon · control y anclaje",
    map: "Ascent",
    summary: "Segundo quinteto más repetido en Ascent: seis apariciones en 26 alineaciones.",
    agents: ["Omen", "Neon", "Chamber", "Sova", "Sage"],
    style: "Agresiva",
    uses: 6,
    sampleSize: 26,
    teams: ["T1", "Nongshim RedForce", "Global Esports"],
    plan: "Neon acelera la toma mientras Chamber y Sage ayudan a mantener posiciones y Sova habilita los cruces.",
    attack: "Sova obtiene información; Omen cubre el paso y Neon inicia. Chamber vigila la ruta secundaria y Sage acompaña el post-plant.",
    defense: "Chamber controla un ángulo de largo alcance y Sage ayuda a retrasar. Neon disputa espacio cuando Sova confirma apoyo cercano.",
    playAround: "Juega alrededor del tempo de Neon con apoyo de Sova; Chamber cubre el espacio que el equipo deja atrás."
  },
  {
    name: "Doble controlador · Yoru y Neon",
    map: "Split",
    summary: "Composición líder de Split: ocho apariciones en 20 alineaciones de equipo.",
    agents: ["Omen", "Neon", "Fade", "Yoru", "Viper"],
    style: "Agresiva",
    uses: 8,
    sampleSize: 20,
    teams: ["Team Vitality", "LOUD", "Nongshim RedForce", "Global Esports"],
    plan: "Dos duelistas amenazan rutas distintas mientras Fade busca información y los controladores limitan los ángulos de respuesta.",
    attack: "Fade obtiene contacto; Viper y Omen aíslan cruces. Neon entra primero y Yoru conserva una segunda amenaza o una ruta de engaño.",
    defense: "Juega por capas: Viper retrasa y Omen guarda humo para el retake. Yoru y Neon buscan intercambios, no duelos aislados.",
    playAround: "Juega alrededor de la presión doble de Neon y Yoru; la entrada debe ocurrir cuando Fade y los humos hayan reducido los ángulos."
  },
  {
    name: "Control doble · Neon y Skye",
    map: "Split",
    summary: "Segundo quinteto de Split: cuatro apariciones en 20 alineaciones, compartido por dos equipos.",
    agents: ["Omen", "Neon", "Chamber", "Viper", "Skye"],
    style: "Control",
    uses: 4,
    sampleSize: 20,
    teams: ["100 Thieves", "G2 Esports"],
    plan: "Skye informa y permite que Neon tome espacio; Chamber cubre las líneas largas mientras los controladores preparan el cruce.",
    attack: "Usa la información de Skye antes de acelerar con Neon. Omen y Viper separan ángulos y Chamber vigila la rotación.",
    defense: "Chamber y las trampas de Viper ralentizan el avance. Skye ayuda a recuperar espacio con una retoma coordinada.",
    playAround: "Juega alrededor de la información de Skye y el espacio que toma Neon; Chamber evita que la retaguardia quede libre."
  },
  {
    name: "Haven · movilidad e información",
    map: "Haven",
    summary: "Empate en el primer puesto de Haven: tres apariciones en 20 alineaciones de equipo.",
    agents: ["Neon", "Chamber", "Sova", "Yoru", "Astra"],
    style: "Flexible",
    uses: 3,
    sampleSize: 20,
    teams: ["Team Vitality"],
    plan: "La movilidad y la información ayudan a rotar entre tres sitios sin revelar la decisión demasiado pronto.",
    attack: "Sova explora una ruta; Neon ocupa espacio y Yoru amenaza una segunda entrada. Astra corta líneas cuando la defensa rota.",
    defense: "Chamber y Sova detectan el contacto. Usa Astra para retrasar y rota solo con información suficiente.",
    playAround: "Juega alrededor de la movilidad de Neon y la amenaza lateral de Yoru; Chamber cubre el espacio cedido."
  },
  {
    name: "Triple sitio · presión central",
    map: "Haven",
    summary: "Empate en el primer puesto de Haven: tres apariciones en 20 alineaciones.",
    agents: ["Omen", "Neon", "Sova", "Cypher", "Phoenix"],
    style: "Agresiva",
    uses: 3,
    sampleSize: 20,
    teams: ["100 Thieves", "Karmine Corp"],
    plan: "Combina información, vigilancia y dos duelistas para elegir el sitio con menos defensores.",
    attack: "Sova informa, Cypher cubre el flanco y Omen corta ayuda. Neon o Phoenix toma el primer duelo y el otro queda listo para intercambiar.",
    defense: "Cypher detecta rotaciones. Omen retrasa y los duelistas juegan cerca para recuperar un acceso juntos.",
    playAround: "Juega alrededor de la información sobre el número de defensores; no dividas a los duelistas entre sitios sin apoyo."
  },
  {
    name: "Haven · doble controlador",
    map: "Haven",
    summary: "Empate en el primer puesto de Haven: tres apariciones en 20 alineaciones.",
    agents: ["Omen", "Neon", "Chamber", "Sova", "Viper"],
    style: "Control",
    uses: 3,
    sampleSize: 20,
    teams: ["LOUD"],
    plan: "Sova identifica el sitio y dos controladores preparan el cruce; Neon transforma esa ventana en espacio.",
    attack: "Usa la información de Sova, corta líneas con Omen y Viper y entra con Neon mientras Chamber protege la ruta de salida.",
    defense: "Chamber mantiene un ángulo y Sova identifica la ejecución. Los humos retrasan la entrada antes de rotar.",
    playAround: "Juega alrededor del acceso que confirme Sova y de la movilidad de Neon; evita gastar ambos humos antes de conocer el sitio."
  },
  {
    name: "Haven · presión con Phoenix",
    map: "Haven",
    summary: "Empate en el primer puesto de Haven: tres apariciones en 20 alineaciones.",
    agents: ["Omen", "Neon", "Chamber", "Sova", "Phoenix"],
    style: "Agresiva",
    uses: 3,
    sampleSize: 20,
    teams: ["NRG"],
    plan: "Mantén flexibilidad entre sitios; Sova da la señal y las dos entradas atacan en secuencia.",
    attack: "Sova despeja; Omen corta la rotación; Neon y Phoenix alternan primera entrada e intercambio. Chamber vigila el flanco.",
    defense: "Chamber mantiene un ángulo seguro y Omen retrasa. Phoenix y Neon pueden recuperar terreno si Sova confirma apoyo.",
    playAround: "Juega alrededor de una entrada por oleadas, no simultánea: usa la primera para forzar recursos y la segunda para tradear."
  },
  {
    name: "Lotus · doble iniciador y control",
    map: "Lotus",
    summary: "Quinteto más repetido de Lotus: diez apariciones en 30 alineaciones, utilizado por cinco equipos.",
    agents: ["Omen", "Neon", "Chamber", "Fade", "Viper"],
    style: "Control",
    uses: 10,
    sampleSize: 30,
    teams: ["LOUD", "T1", "Nongshim RedForce", "TYLOO", "EDward Gaming"],
    plan: "Composición de control flexible: Fade genera contacto, los dos controladores aíslan zonas y Neon presiona la entrada.",
    attack: "Fade obtiene información; Viper y Omen cortan apoyos. Neon toma espacio mientras Chamber protege rotaciones y flanco.",
    defense: "Chamber vigila un acceso y Fade recoge información. Viper conserva recursos para retrasar el sitio comprometido.",
    playAround: "Juega alrededor de la información de Fade y las ventanas de Neon; conserva un controlador para el post-plant o la retoma."
  },
  {
    name: "G2 · doble controlador y Raze",
    map: "Lotus",
    summary: "Segundo quinteto de Lotus: cuatro apariciones en 30 alineaciones de equipo.",
    agents: ["Omen", "Viper", "Raze", "Vyse", "Skye"],
    style: "Agresiva",
    uses: 4,
    sampleSize: 30,
    teams: ["G2 Esports"],
    plan: "Raze fuerza la entrada mientras Skye informa y Vyse protege la zona tomada; Omen y Viper cubren los cruces.",
    attack: "Skye despeja el acceso, Raze inicia y los controladores cortan ayuda. Vyse cubre la ruta secundaria durante la plantación.",
    defense: "Vyse y Viper preparan el acceso; Omen mantiene humo para frenar la ejecución y Skye ayuda a retomar.",
    playAround: "Juega alrededor del espacio que abre Raze y de la información de Skye; usa Vyse para asegurar el terreno ganado."
  },
  {
    name: "Summit · doble duelista y control",
    map: "Summit",
    summary: "Quinteto más repetido de Summit: ocho apariciones en 36 alineaciones, visto en tres equipos.",
    agents: ["Neon", "Chamber", "Fade", "Sage", "Harbor"],
    style: "Agresiva",
    uses: 8,
    sampleSize: 36,
    teams: ["100 Thieves", "T1", "Nongshim RedForce"],
    plan: "Neon aporta el tempo; Fade encuentra el contacto y Sage con Harbor preparan la cobertura de entrada.",
    attack: "Fade informa, Harbor corta visión y Neon entra. Chamber asegura el ángulo de salida y Sage apoya el intercambio.",
    defense: "Chamber vigila un acceso y Fade informa la rotación. Conserva el control de Harbor y Sage para retrasar o retomar.",
    playAround: "Juega alrededor de la velocidad de Neon con una segunda oleada lista para tradear; no gastes ambos recursos de control al inicio."
  },
  {
    name: "Doble controlador · Fade y Sage",
    map: "Summit",
    summary: "Segundo quinteto de Summit: siete apariciones en 36 alineaciones, usado por LOUD y T1.",
    agents: ["Omen", "Neon", "Chamber", "Fade", "Sage"],
    style: "Flexible",
    uses: 7,
    sampleSize: 36,
    teams: ["LOUD", "T1"],
    plan: "Mantén dos ritmos de ejecución: Neon crea el espacio rápido y Fade con Sage permiten reagrupar o recuperar.",
    attack: "Fade consigue información, Omen corta el apoyo y Neon toma el primer espacio; Chamber guarda el flanco.",
    defense: "Chamber cubre una línea; Sage y Omen retrasan y Fade prepara la información para la retoma.",
    playAround: "Juega alrededor de la entrada de Neon y la utilidad de retoma de Sage; deja a Chamber un ángulo de cobertura."
  },
  {
    name: "LOUD · doble controlador y Sova",
    map: "Sunset",
    summary: "Empate en el primer puesto de Sunset: cuatro apariciones en 24 alineaciones.",
    agents: ["Omen", "Neon", "Chamber", "Sova", "Sage"],
    style: "Control",
    uses: 4,
    sampleSize: 24,
    teams: ["LOUD"],
    plan: "Sova prepara la toma de medio y Neon marca el tempo; Sage permite sostener o recuperar el espacio.",
    attack: "Sova obtiene información, Omen corta el cruce y Neon entra. Chamber controla la ruta de flanco y Sage acompaña el post-plant.",
    defense: "Chamber informa sobre flancos; Sova ayuda a confirmar el sitio y Omen conserva humo para retrasar la rotación.",
    playAround: "Juega alrededor del control de medio con una entrada de Neon respaldada por Sova y la utilidad de Sage."
  },
  {
    name: "Nongshim · doble iniciador y engaño",
    map: "Sunset",
    summary: "Empate en el primer puesto de Sunset: cuatro apariciones en 24 alineaciones.",
    agents: ["Omen", "Fade", "Yoru", "Cypher", "Waylay"],
    style: "Agresiva",
    uses: 4,
    sampleSize: 24,
    teams: ["Nongshim RedForce", "Xi Lai Gaming"],
    plan: "Combina información y engaño para provocar rotaciones y castigar al rival que abandona medio.",
    attack: "Fade y Cypher recogen información; Yoru amenaza una ruta y Waylay toma el espacio que queda abierto.",
    defense: "Cypher mantiene vigilancia y Omen retrasa. Guarda la movilidad de Waylay para recuperar terreno en la retoma.",
    playAround: "Juega alrededor de la confusión de Yoru y la información de Fade; no gastes ambas entradas antes de que el rival rote."
  }
];

const verifiedVctLineups = [
  { map: "Abyss", agents: ["Astra", "Harbor", "Neon", "Sova", "Waylay"], uses: 4, teams: ["G2 Esports"] },
  { map: "Abyss", agents: ["Astra", "Harbor", "Jett", "Sova", "Yoru"], uses: 3, teams: ["Team Vitality"] },
  { map: "Abyss", agents: ["Harbor", "Omen", "Sova", "Waylay", "Yoru"], uses: 2, teams: ["JD Gaming", "T1"] },
  { map: "Abyss", agents: ["Cypher", "Omen", "Sova", "Waylay", "Yoru"], uses: 1, teams: ["Karmine Corp"] },
  { map: "Abyss", agents: ["Astra", "Omen", "Sova", "Waylay", "Yoru"], uses: 1, teams: ["Global Esports"] },
  { map: "Abyss", agents: ["Brimstone", "Omen", "Sova", "Waylay", "Yoru"], uses: 1, teams: ["T1"] },
  { map: "Ascent", agents: ["Cypher", "Jett", "Omen", "Phoenix", "Sova"], uses: 9, teams: ["100 Thieves", "FUT Esports", "NRG", "Team Liquid"] },
  { map: "Ascent", agents: ["Chamber", "Omen", "Sage", "Sova", "Yoru"], uses: 5, teams: ["Paper Rex", "Team Vitality"] },
  { map: "Ascent", agents: ["Chamber", "Neon", "Omen", "Sage", "Sova"], uses: 2, teams: ["Global Esports", "T1"] },
  { map: "Ascent", agents: ["Chamber", "Neon", "Omen", "Sova", "Vyse"], uses: 2, teams: ["G2 Esports"] },
  { map: "Ascent", agents: ["Cypher", "Deadlock", "Omen", "Sova", "Yoru"], uses: 1, teams: ["JD Gaming"] },
  { map: "Ascent", agents: ["Cypher", "Neon", "Omen", "Phoenix", "Sova"], uses: 1, teams: ["Karmine Corp"] },
  { map: "Haven", agents: ["Astra", "Chamber", "Fade", "Phoenix", "Yoru"], uses: 2, teams: ["Paper Rex"] },
  { map: "Haven", agents: ["Cypher", "Neon", "Omen", "Phoenix", "Sova"], uses: 2, teams: ["Karmine Corp"] },
  { map: "Haven", agents: ["Astra", "Chamber", "Neon", "Sova", "Yoru"], uses: 2, teams: ["Team Vitality"] },
  { map: "Haven", agents: ["Chamber", "Neon", "Omen", "Phoenix", "Sova"], uses: 2, teams: ["NRG"] },
  { map: "Haven", agents: ["Chamber", "Neon", "Omen", "Sova", "Viper"], uses: 2, teams: ["LOUD"] },
  { map: "Haven", agents: ["Fade", "Harbor", "Killjoy", "Raze", "Yoru"], uses: 1, teams: ["Team Liquid"] },
  { map: "Lotus", agents: ["Chamber", "Fade", "Neon", "Omen", "Viper"], uses: 10, teams: ["EDward Gaming", "LOUD", "Nongshim RedForce", "T1", "TYLOO"] },
  { map: "Lotus", agents: ["Omen", "Raze", "Skye", "Viper", "Vyse"], uses: 4, teams: ["G2 Esports"] },
  { map: "Lotus", agents: ["Chamber", "Neon", "Omen", "Skye", "Viper"], uses: 3, teams: ["100 Thieves"] },
  { map: "Lotus", agents: ["Chamber", "Fade", "Omen", "Raze", "Viper"], uses: 3, teams: ["Team Vitality"] },
  { map: "Lotus", agents: ["Fade", "Omen", "Raze", "Viper", "Vyse"], uses: 2, teams: ["NRG"] },
  { map: "Lotus", agents: ["Cypher", "Fade", "Omen", "Raze", "Yoru"], uses: 1, teams: ["Team Liquid"] },
  { map: "Split", agents: ["Fade", "Neon", "Omen", "Viper", "Yoru"], uses: 7, teams: ["Global Esports", "LOUD", "Nongshim RedForce", "Team Vitality"] },
  { map: "Split", agents: ["Chamber", "Neon", "Omen", "Skye", "Viper"], uses: 4, teams: ["100 Thieves", "G2 Esports"] },
  { map: "Split", agents: ["Fade", "Omen", "Raze", "Viper", "Yoru"], uses: 2, teams: ["Paper Rex"] },
  { map: "Split", agents: ["Astra", "Fade", "Raze", "Viper", "Yoru"], uses: 2, teams: ["Team Liquid"] },
  { map: "Split", agents: ["Neon", "Omen", "Raze", "Skye", "Viper"], uses: 1, teams: ["FUT Esports"] },
  { map: "Split", agents: ["Jett", "Omen", "Raze", "Skye", "Viper"], uses: 1, teams: ["TYLOO"] },
  { map: "Summit", agents: ["Chamber", "Fade", "Harbor", "Neon", "Sage"], uses: 6, teams: ["100 Thieves", "Nongshim RedForce"] },
  { map: "Summit", agents: ["Chamber", "Fade", "Neon", "Omen", "Sage"], uses: 5, teams: ["LOUD", "T1"] },
  { map: "Summit", agents: ["Chamber", "Fade", "Harbor", "Neon", "Phoenix"], uses: 4, teams: ["Team Vitality"] },
  { map: "Summit", agents: ["Brimstone", "Cypher", "KAY/O", "Neon", "Sova"], uses: 3, teams: ["NRG"] },
  { map: "Summit", agents: ["Chamber", "Fade", "Neon", "Omen", "Viper"], uses: 2, teams: ["Karmine Corp"] },
  { map: "Summit", agents: ["Astra", "Raze", "Skye", "Tejo", "Veto"], uses: 1, teams: ["Global Esports"] },
  { map: "Sunset", agents: ["Cypher", "Fade", "Omen", "Waylay", "Yoru"], uses: 3, teams: ["Nongshim RedForce", "Xi Lai Gaming"] },
  { map: "Sunset", agents: ["Chamber", "Neon", "Omen", "Sage", "Sova"], uses: 3, teams: ["LOUD"] },
  { map: "Sunset", agents: ["Chamber", "Fade", "KAY/O", "Neon", "Omen"], uses: 3, teams: ["NRG", "Team Vitality"] },
  { map: "Sunset", agents: ["Chamber", "Fade", "Neon", "Omen", "Sage"], uses: 2, teams: ["T1", "TYLOO"] },
  { map: "Sunset", agents: ["Chamber", "Fade", "Neon", "Omen", "Viper"], uses: 2, teams: ["Karmine Corp"] },
  { map: "Sunset", agents: ["Chamber", "Fade", "Neon", "Omen", "Yoru"], uses: 1, teams: ["Global Esports"] }
];

const lineupSampleSizes = {
  Abyss: 16,
  Ascent: 26,
  Haven: 20,
  Lotus: 30,
  Split: 20,
  Summit: 36,
  Sunset: 24
};
const curatedLineups = new Map(
  compositions.map((composition) => [
    `${composition.map}:${[...composition.agents].sort().join("|")}`,
    composition
  ])
);

compositions.splice(0, compositions.length, ...verifiedVctLineups.map((lineup) => {
  const curated = curatedLineups.get(`${lineup.map}:${[...lineup.agents].sort().join("|")}`);
  const map = mapData.find((entry) => entry.name === lineup.map);
  const teamLabel = lineup.teams.join(", ");
  const usageLabel = lineup.uses === 1 ? "una aparición" : `${lineup.uses} apariciones`;

  return {
    ...curated,
    name: curated?.name || `${lineup.teams[0]} · ${lineup.agents.slice(0, 3).join(", ")}`,
    map: lineup.map,
    summary: `Quinteto de ${teamLabel}: ${usageLabel} en VCT Champions 2026.`,
    agents: lineup.agents,
    style: curated?.style || "VCT",
    uses: lineup.uses,
    sampleSize: lineupSampleSizes[lineup.map],
    teams: lineup.teams,
    plan: curated?.plan || `Esta alineación apareció ${usageLabel} en el torneo. ${map.tempo}.`,
    attack: curated?.attack || map.attack,
    defense: curated?.defense || map.defense,
    playAround: curated?.playAround || map.premade
  };
}));

const compositionSource = {
  name: "VCT Champions 2026",
  url: "https://www.vlr.gg/event/agents/2766/valorant-champions-2026",
  sample: 86,
  period: "24 sep. – 18 oct. 2026"
};

const teamLogoSources = {
  "100 Thieves": "assets/team-logos/100-thieves.png",
  "EDward Gaming": "assets/team-logos/edward-gaming.png",
  "FUT Esports": "assets/team-logos/fut-esports.png",
  "G2 Esports": "assets/team-logos/g2-esports.png",
  "Global Esports": "assets/team-logos/global-esports.png",
  "JD Gaming": "assets/team-logos/jd-gaming.png",
  "Karmine Corp": "assets/team-logos/karmine-corp.png",
  LOUD: "assets/team-logos/loud.png",
  "Nongshim RedForce": "assets/team-logos/nongshim-redforce.png",
  NRG: "assets/team-logos/nrg.png",
  "Paper Rex": "assets/team-logos/paper-rex.png",
  "Team Liquid": "assets/team-logos/team-liquid.png",
  "Team Vitality": "assets/team-logos/team-vitality.png",
  T1: "assets/team-logos/t1.png",
  TYLOO: "assets/team-logos/tyloo.png",
  "Xi Lai Gaming": "assets/team-logos/xi-lai-gaming.png"
};

function normalizeTeamQuery(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function getTeamMonogram(team) {
  return team
    .split(/\s+/)
    .map((word) => word.replace(/[^a-z0-9]/gi, ""))
    .filter(Boolean)
    .slice(0, 3)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function renderTeamBadges(teams) {
  return teams.map((team) => `
    <span class="team-badge" title="${team}">
      <span class="team-logo" aria-hidden="true">
        <span class="team-logo-fallback">${getTeamMonogram(team)}</span>
        ${teamLogoSources[team] ? `<img src="${teamLogoSources[team]}" alt="" loading="lazy" decoding="async">` : ""}
      </span>
      <span>${team}</span>
    </span>
  `).join("");
}

function bindTeamLogoFallbacks(container) {
  container.querySelectorAll(".team-logo img").forEach((image) => {
    image.addEventListener("load", () => image.parentElement.classList.add("has-image"), { once: true });
    image.addEventListener("error", () => image.remove(), { once: true });
  });
}

const soloQueueSource = {
  name: "Tracker.gg",
  url: "https://tracker.gg/valorant/insights/agents",
  period: "últimas 2 semanas",
  filters: "todos los rangos · todos los mapas · todas las regiones",
  limitation: "Tracker no separa las partidas en solitario de las partidas en grupo."
};

window.valompositionsData = { agents, compositions, maps: mapData, compositionSource };

const agentGrid = document.getElementById("agentGrid");
const agentSearch = document.getElementById("agentSearch");
const agentFilterButtons = document.querySelectorAll(".filter-btn");
const compositionGrid = document.getElementById("compositionGrid");
const teamCompositionSearch = document.getElementById("teamCompositionSearch");
const compositionFilterButtons = document.querySelectorAll(".composition-filter");
const tierListGrid = document.getElementById("agentTierList");
const tierModeButtons = document.querySelectorAll(".tier-mode-btn");
const tierRoleButtons = document.querySelectorAll(".tier-role-btn");
const tierSourceNote = document.getElementById("tierSourceNote");
const tierSourceLink = document.getElementById("tierSourceLink");
const cookieBanner = document.getElementById("cookieBanner");
const acceptCookies = document.getElementById("acceptCookies");
const rejectCookies = document.getElementById("rejectCookies");
const modal = document.getElementById("agentModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalAvatar = document.getElementById("modalAvatar");
const modalRole = document.getElementById("modalRole");
const modalLabel = document.getElementById("modalLabel");
const modalName = document.getElementById("modalName");
const modalBio = document.getElementById("modalBio");
const modalStyle = document.getElementById("modalStyle");
const modalRisk = document.getElementById("modalRisk");
const modalMap = document.getElementById("modalMap");
const modalSynergy = document.getElementById("modalSynergy");
const modalTraits = document.getElementById("modalTraits");
const modalAbilities = document.getElementById("modalAbilities");

let activeRole = "all";
let activeMap = "all";
let activeTeamQuery = "";
let activeTierMode = "vct";
let activeTierRole = "all";
let revealObserver = null;
let agentAbilitiesLoaded = false;

function observePageReveals(root = document) {
  if (!revealObserver) return;

  const revealSelectors = [
    ".section-head",
    ".featured-strip",
    ".agent-card[data-agent]",
    ".tier-agent-card",
    ".composition-card",
    ".map-card",
    ".patch-card",
    ".tech-card",
    ".map-analysis-panel",
    ".map-composition-card",
    ".pricing-card",
    ".community-card"
  ].join(",");
  const elements = [];

  if (root instanceof Element && root.matches(revealSelectors)) elements.push(root);
  if ("querySelectorAll" in root) elements.push(...root.querySelectorAll(revealSelectors));

  elements.forEach((element, index) => {
    if (element.hasAttribute("data-scroll-reveal")) return;
    element.setAttribute("data-scroll-reveal", "");
    element.style.setProperty("--reveal-delay", `${(index % 4) * 55}ms`);
    revealObserver.observe(element);
  });
}

function initPageInteractions() {
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  document.body.prepend(progress);

  const backToTop = document.createElement("button");
  backToTop.className = "back-to-top";
  backToTop.type = "button";
  backToTop.setAttribute("aria-label", "Volver al principio");
  backToTop.innerHTML = '<span aria-hidden="true">↑</span>';
  document.body.append(backToTop);
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const updateScrollUI = () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progressPercent = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
    progress.style.transform = `scaleX(${progressPercent / 100})`;
    backToTop.classList.toggle("is-visible", window.scrollY > 560);

    if (cookieBanner && !cookieBanner.classList.contains("hidden")) {
      const gap = window.matchMedia("(max-width: 760px)").matches ? 12 : 16;
      backToTop.style.bottom = `${Math.max(16, window.innerHeight - cookieBanner.getBoundingClientRect().top + gap)}px`;
    } else {
      backToTop.style.removeProperty("bottom");
    }
  };
  let scrollUpdateScheduled = false;
  window.addEventListener("scroll", () => {
    if (scrollUpdateScheduled) return;
    scrollUpdateScheduled = true;
    window.requestAnimationFrame(() => {
      updateScrollUI();
      scrollUpdateScheduled = false;
    });
  }, { passive: true });
  window.addEventListener("resize", updateScrollUI, { passive: true });
  updateScrollUI();
  if (cookieBanner && "MutationObserver" in window) {
    new MutationObserver(updateScrollUI).observe(cookieBanner, {
      attributes: true,
      attributeFilter: ["class"]
    });
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  if ("IntersectionObserver" in window) {
    document.body.classList.add("motion-enabled");
    revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });
    observePageReveals();

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => mutation.addedNodes.forEach((node) => {
        if (node instanceof Element) observePageReveals(node);
      }));
    });
    mutationObserver.observe(document.querySelector("main") || document.body, {
      childList: true,
      subtree: true
    });

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        document.querySelectorAll(`.main-nav a[href="#${entry.target.id}"]`).forEach((link) => {
          link.classList.toggle("is-current", link.hash === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: "-30% 0px -58% 0px" });
    document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));
  }

  const hero = document.querySelector(".hero-editorial");
  if (hero && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    let pointerFrame = null;
    hero.addEventListener("pointermove", (event) => {
      if (pointerFrame !== null) return;
      pointerFrame = window.requestAnimationFrame(() => {
        const bounds = hero.getBoundingClientRect();
        hero.style.setProperty("--hero-pointer-x", `${event.clientX - bounds.left}px`);
        hero.style.setProperty("--hero-pointer-y", `${event.clientY - bounds.top}px`);
        pointerFrame = null;
      });
    });
    hero.addEventListener("pointerleave", () => {
      hero.style.removeProperty("--hero-pointer-x");
      hero.style.removeProperty("--hero-pointer-y");
    });
  }
}

function getRoleToneClass(role) {
  return {
    Duelista: "role-duelist",
    Iniciador: "role-initiator",
    Controlador: "role-controller",
    Centinela: "role-sentinel"
  }[role] || "";
}

function openAgentModal(agentName) {
  const selectedAgent = agents.find((agent) => agent.name === agentName);
  if (!selectedAgent) return;

  modalAvatar.replaceChildren();
  if (selectedAgent.image) {
    const portrait = document.createElement("img");
    portrait.src = selectedAgent.image;
    portrait.alt = `Retrato de ${selectedAgent.name}`;
    const fallback = document.createElement("span");
    fallback.textContent = selectedAgent.icon;
    fallback.style.opacity = "0";
    portrait.addEventListener("error", () => {
      portrait.remove();
      fallback.style.opacity = "1";
    }, { once: true });
    modalAvatar.append(portrait, fallback);
  } else {
    modalAvatar.textContent = selectedAgent.icon;
  }
  modalRole.textContent = selectedAgent.role;
  modalRole.className = `modal-role ${getRoleToneClass(selectedAgent.role)}`;
  modalLabel.textContent = selectedAgent.label;
  modalName.textContent = selectedAgent.name;
  modalBio.textContent = selectedAgent.bio;
  modalStyle.textContent = selectedAgent.style;
  modalRisk.textContent = selectedAgent.risk;
  modalMap.textContent = selectedAgent.map;
  modalSynergy.textContent = selectedAgent.synergy;
  modalTraits.innerHTML = selectedAgent.traits.map((trait) => `<li>${trait}</li>`).join("");
  renderAgentAbilities(selectedAgent);

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function cleanAbilityDescription(description) {
  const plainText = description
    .replace(/<[^>]*>/g, "")
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{2,}/g, "\n")
    .trim();

  return plainText;
}

function renderAgentAbilities(agent) {
  if (!modalAbilities) return;

  const keyBySlot = {
    Ability1: "Q",
    Ability2: "E",
    Grenade: "C",
    Ultimate: "X"
  };
  const slotOrder = ["Ability1", "Ability2", "Grenade", "Ultimate"];
  const abilities = slotOrder
    .map((slot) => agent.abilities?.find((ability) => ability.slot === slot))
    .filter(Boolean);

  if (!abilities.length) {
    modalAbilities.textContent = "";
    const message = document.createElement("p");
    message.className = "modal-abilities-loading";
    message.textContent = agentAbilitiesLoaded
      ? "No se pudieron cargar las habilidades oficiales. Inténtalo de nuevo más tarde."
      : "Cargando habilidades oficiales…";
    modalAbilities.append(message);
    return;
  }

  modalAbilities.replaceChildren();
  abilities.forEach((ability) => {
    const isUltimate = ability.slot === "Ultimate";
    const card = document.createElement("article");
    card.className = `modal-ability-card${isUltimate ? " is-ultimate" : ""}`;

    const icon = document.createElement("div");
    icon.className = "modal-ability-icon";
    if (ability.displayIcon) {
      const image = document.createElement("img");
      image.src = ability.displayIcon;
      image.alt = "";
      image.loading = "lazy";
      image.addEventListener("error", () => {
        image.remove();
        icon.classList.add("has-fallback");
        icon.textContent = ability.displayName.slice(0, 1);
      }, { once: true });
      icon.append(image);
    } else {
      icon.classList.add("has-fallback");
      icon.textContent = ability.displayName.slice(0, 1);
    }

    const copy = document.createElement("div");
    copy.className = "modal-ability-copy";
    const title = document.createElement("h5");
    title.textContent = ability.displayName;
    const description = document.createElement("p");
    description.textContent = cleanAbilityDescription(ability.description);
    const key = document.createElement("kbd");
    key.textContent = keyBySlot[ability.slot];
    key.setAttribute("aria-label", `Tecla habitual ${keyBySlot[ability.slot]}`);

    copy.append(title, description);
    card.append(icon, copy, key);
    if (isUltimate) {
      const ultimateBadge = document.createElement("span");
      ultimateBadge.className = "ultimate-badge";
      ultimateBadge.textContent = "DEFINITIVA";
      card.append(ultimateBadge);
    }
    modalAbilities.append(card);
  });
}

function closeAgentModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

function renderAgents() {
  if (!agentGrid || !agentSearch) return;

  const query = agentSearch.value.trim().toLowerCase();

  const filteredAgents = agents.filter((agent) => {
    const matchesRole = activeRole === "all" || agent.role === activeRole;
    const matchesQuery =
      !query ||
      agent.name.toLowerCase().includes(query) ||
      agent.role.toLowerCase().includes(query) ||
      agent.strength.toLowerCase().includes(query);

    return matchesRole && matchesQuery;
  });

  if (!filteredAgents.length) {
    agentGrid.innerHTML = `
      <article class="agent-card">
        <h3>No hay coincidencias</h3>
        <p>Prueba con otro término o cambia el filtro de rol.</p>
      </article>
    `;
    return;
  }

  agentGrid.innerHTML = filteredAgents
    .map(
      (agent) => `
        <article class="agent-card ${getRoleToneClass(agent.role)}" data-agent="${agent.name}">
          <div class="agent-portrait">
            ${agent.image ? `<img class="agent-portrait-image" src="${agent.image}" alt="Retrato de ${agent.name}" loading="lazy" decoding="async">` : ""}
            <span class="agent-initial">${agent.icon}</span>
          </div>
          <div class="agent-card-top">
            <span class="role-badge ${getRoleToneClass(agent.role)}">${agent.role}</span>
          </div>
          <h3>${agent.name}</h3>
          <p>${agent.summary}</p>
          <div class="agent-meta">
            <span>${agent.strength}</span>
            <span>${agent.tier}</span>
          </div>
          <button class="mini-action" data-agent-name="${agent.name}" type="button">Ver ficha</button>
        </article>
      `
    )
    .join("");

  agentGrid.querySelectorAll(".agent-portrait-image").forEach((image) => {
    image.addEventListener("load", () => image.parentElement.classList.add("has-image"), { once: true });
    image.addEventListener("error", () => image.remove(), { once: true });
  });
  bindAgentCardMotion();
}

function bindAgentCardMotion() {
  if (!agentGrid || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  agentGrid.querySelectorAll(".agent-card[data-agent]").forEach((card) => {
    card.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "mouse" || event.pointerType === "pen") {
        card.classList.add("is-pointer-hovered");
      }
    });

    card.addEventListener("pointermove", (event) => {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;

      card.style.setProperty("--tilt-x", `${-y * 5}deg`);
      card.style.setProperty("--tilt-y", `${x * 5}deg`);
      card.style.setProperty("--pointer-x", `${(x + 0.5) * 100}%`);
      card.style.setProperty("--pointer-y", `${(y + 0.5) * 100}%`);
    });

    card.addEventListener("pointerleave", () => {
      card.classList.remove("is-pointer-hovered");
      card.style.removeProperty("--tilt-x");
      card.style.removeProperty("--tilt-y");
      card.style.removeProperty("--pointer-x");
      card.style.removeProperty("--pointer-y");
    });
  });
}

function renderTierList() {
  if (!tierListGrid) return;

  const soloStats = new Map(soloQueueStats.map((stats) => [stats.name, stats]));
  const tierOrder = { S: 0, A: 1, B: 2, C: 3, D: 4 };
  const rankedAgents = agents
    .filter((agent) => activeTierRole === "all" || agent.role === activeTierRole)
    .map((agent) => {
      if (activeTierMode === "soloq") {
        return { agent, stats: soloStats.get(agent.name) };
      }

      const pickRate = professionalPickRates[agent.name];
      const tier = pickRate === null ? "—" : pickRate >= 50 ? "S" : pickRate >= 20 ? "A" : pickRate >= 5 ? "B" : "C";
      return { agent, stats: { tier, pickRate } };
    })
    .filter((entry) => entry.stats)
    .sort((left, right) => {
      if (activeTierMode === "soloq") {
        return tierOrder[left.stats.tier] - tierOrder[right.stats.tier]
          || right.stats.winRate - left.stats.winRate
          || right.stats.pickRate - left.stats.pickRate;
      }
      return (right.stats.pickRate ?? -1) - (left.stats.pickRate ?? -1);
    });

  const isSoloQueue = activeTierMode === "soloq";
  tierSourceNote.textContent = isSoloQueue
    ? `Ranked competitivo · ${soloQueueSource.filters} · ${soloQueueSource.period}. Referencia para solo queue; ${soloQueueSource.limitation}`
    : `${compositionSource.name} · ${compositionSource.sample} mapas. Tier calculado por pick rate VLR.gg: S ≥ 50%, A ≥ 20%, B ≥ 5%, C < 5%.`;
  tierSourceLink.href = isSoloQueue ? soloQueueSource.url : compositionSource.url;
  tierSourceLink.textContent = `Fuente: ${isSoloQueue ? soloQueueSource.name : "VLR.gg"}`;

  tierListGrid.innerHTML = rankedAgents.map(({ agent, stats }) => `
    <article class="tier-agent-card ${getRoleToneClass(agent.role)}">
      <div class="tier-agent-visual">
        ${agent.image ? `<img src="${agent.image}" alt="Retrato de ${agent.name}" loading="lazy" decoding="async">` : ""}
        <span>${agent.icon}</span>
        <strong class="tier-grade tier-${stats.tier.toLowerCase()}">${stats.tier}</strong>
      </div>
      <div class="tier-agent-content">
        <span class="role-badge ${getRoleToneClass(agent.role)}">${agent.role}</span>
        <h3>${agent.name}</h3>
        <div class="tier-agent-stats">
          ${isSoloQueue ? `
            <div><strong>${stats.winRate.toFixed(1)}%</strong><span>win rate</span></div>
            <div><strong>${stats.pickRate.toFixed(1)}%</strong><span>pick rate</span></div>
            <div><strong>${stats.kd.toFixed(2)}</strong><span>K/D</span></div>
            <div><strong>${stats.nonMirrorWinRate.toFixed(1)}%</strong><span>sin espejo</span></div>
          ` : `
            <div><strong>${stats.pickRate === null ? "Sin muestra" : `${stats.pickRate}%`}</strong><span>pick rate VCT</span></div>
            <div><strong>${agent.strength}</strong><span>función</span></div>
          `}
        </div>
      </div>
    </article>
  `).join("");

  tierListGrid.querySelectorAll(".tier-agent-visual img").forEach((image) => {
    image.addEventListener("load", () => image.parentElement.classList.add("has-image"), { once: true });
    image.addEventListener("error", () => image.remove(), { once: true });
  });
}

async function loadAgentPortraits() {
  try {
    const response = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=es-ES");
    if (!response.ok) {
      throw new Error(`VALORANT API respondió con estado ${response.status}`);
    }

    const payload = await response.json();
    const apiAgentsByName = new Map(payload.data.map((agent) => [
      agent.displayName.toLowerCase().replace(/[^a-z0-9]/g, ""),
      agent
    ]));

    agents.forEach((agent) => {
      const apiAgent = apiAgentsByName.get(agent.name.toLowerCase().replace(/[^a-z0-9]/g, ""));
      if (!apiAgent) return;

      if (apiAgent.fullPortrait && new URL(apiAgent.fullPortrait).origin === "https://media.valorant-api.com") {
        agent.image = apiAgent.fullPortrait;
      }
      agent.abilities = apiAgent.abilities.filter((ability) =>
        ["Ability1", "Ability2", "Grenade", "Ultimate"].includes(ability.slot)
      );
    });
    agentAbilitiesLoaded = true;

    if (agentGrid) renderAgents();
    renderTierList();
    if (!modal.classList.contains("hidden")) {
      const selectedAgent = agents.find((agent) => agent.name === modalName.textContent);
      if (selectedAgent) renderAgentAbilities(selectedAgent);
    }
    window.dispatchEvent(new Event("agentportraitsloaded"));
  } catch (error) {
    agentAbilitiesLoaded = true;
    if (!modal.classList.contains("hidden")) {
      const selectedAgent = agents.find((agent) => agent.name === modalName.textContent);
      if (selectedAgent) renderAgentAbilities(selectedAgent);
    }
    console.error("No se pudieron cargar los retratos y las habilidades de VALORANT API.", error);
  }
}

function renderMapCards() {
  const mapGrid = document.getElementById("mapGrid");
  if (!mapGrid) return;

  mapGrid.innerHTML = mapData
    .map((map) => `
      <a class="map-card" href="mapa.html?map=${map.slug}">
        <span class="map-badge">${map.name}</span>
        <h3>${map.headline}</h3>
        <p>${map.overview}</p>
        <span class="map-card-link">Ver análisis del mapa <span aria-hidden="true">→</span></span>
      </a>
    `)
    .join("");
}

function renderCompositions() {
  const query = normalizeTeamQuery(activeTeamQuery);
  const filteredCompositions = compositions.filter((composition) => {
    const matchesMap = activeMap === "all" || composition.map === activeMap;
    const matchesTeam = !query || composition.teams.some((team) => normalizeTeamQuery(team).includes(query));
    return matchesMap && matchesTeam;
  });

  compositionGrid.innerHTML = filteredCompositions
    .map(
      (composition) => `
        <article class="composition-card">
          <div class="meta-row">
            <span class="role-badge">${composition.map}</span>
            <span class="role-badge">${composition.style}</span>
          </div>
          <h3>${composition.name}</h3>
          <p>${composition.summary}</p>
          <div class="agent-meta">
            <span>${composition.agents.join(" • ")}</span>
          </div>
          <div class="composition-evidence">
            <strong>${composition.uses}/${composition.sampleSize} apariciones de equipo · ${Math.round((composition.uses / composition.sampleSize) * 100)}%</strong>
            <div class="team-badges">${renderTeamBadges(composition.teams.filter((team) => !query || normalizeTeamQuery(team).includes(query)))}</div>
          </div>
        </article>
      `
    )
    .join("");

  if (!filteredCompositions.length) {
    compositionGrid.innerHTML = '<p class="composition-empty-state">No hay composiciones para ese equipo con el mapa seleccionado.</p>';
  }
  bindTeamLogoFallbacks(compositionGrid);
}

agentFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeRole = button.dataset.role;
    agentFilterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderAgents();
  });
});

compositionFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeMap = button.dataset.map;
    compositionFilterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderCompositions();
  });
});

tierModeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeTierMode = button.dataset.tierMode;
    tierModeButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    renderTierList();
  });
});

tierRoleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeTierRole = button.dataset.tierRole;
    tierRoleButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderTierList();
  });
});

if (agentSearch) agentSearch.addEventListener("input", renderAgents);
if (teamCompositionSearch) {
  teamCompositionSearch.addEventListener("input", () => {
    activeTeamQuery = teamCompositionSearch.value;
    renderCompositions();
  });
}

if (agentGrid) {
  agentGrid.addEventListener("click", (event) => {
    const target = event.target.closest("[data-agent-name]");
    if (!target) return;
    openAgentModal(target.dataset.agentName);
  });
}

if (modalBackdrop) modalBackdrop.addEventListener("click", closeAgentModal);
if (modalClose) modalClose.addEventListener("click", closeAgentModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal && !modal.classList.contains("hidden")) {
    closeAgentModal();
  }
});

function initCookieBanner() {
  if (!cookieBanner || !acceptCookies || !rejectCookies) return;
  const cookiePreference = localStorage.getItem("cookiePreference");
  if (!cookiePreference) {
    cookieBanner.classList.remove("hidden");
  }

  acceptCookies.addEventListener("click", () => {
    localStorage.setItem("cookiePreference", "accepted");
    cookieBanner.classList.add("hidden");
  });

  rejectCookies.addEventListener("click", () => {
    localStorage.setItem("cookiePreference", "rejected");
    cookieBanner.classList.add("hidden");
  });
}

if (agentGrid) {
  renderAgents();
}
renderTierList();
loadAgentPortraits();
if (compositionGrid) renderCompositions();
renderMapCards();
initCookieBanner();
initPageInteractions();
