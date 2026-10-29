<?php
/**
 * Plugin Name: Valompositions Core
 * Description: Map and team-composition content types for the Valompositions theme.
 * Version: 1.0.0
 * Text Domain: valompositions
 */

if (!defined('ABSPATH')) {
    exit;
}

function vm_register_content_types() {
    register_post_type('vm_mapa', array(
        'labels' => array(
            'name' => 'Mapas',
            'singular_name' => 'Mapa',
            'add_new_item' => 'Anadir mapa',
            'edit_item' => 'Editar mapa',
        ),
        'public' => true,
        'has_archive' => 'mapas',
        'rewrite' => array('slug' => 'mapas', 'with_front' => false),
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-location-alt',
        'supports' => array('title', 'editor', 'excerpt', 'thumbnail'),
    ));

    register_post_type('vm_composicion', array(
        'labels' => array(
            'name' => 'Composiciones',
            'singular_name' => 'Composicion',
            'add_new_item' => 'Anadir composicion',
            'edit_item' => 'Editar composicion',
        ),
        'public' => true,
        'has_archive' => 'composiciones',
        'rewrite' => array('slug' => 'composiciones', 'with_front' => false),
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-groups',
        'supports' => array('title', 'editor', 'excerpt', 'thumbnail'),
    ));
}
add_action('init', 'vm_register_content_types');

function vm_add_meta_boxes() {
    add_meta_box('vm_map_tactics', 'Datos tacticos', 'vm_render_map_meta_box', 'vm_mapa', 'normal', 'high');
    add_meta_box('vm_composition_details', 'Composicion', 'vm_render_composition_meta_box', 'vm_composicion', 'normal', 'high');
}
add_action('add_meta_boxes', 'vm_add_meta_boxes');

function vm_render_map_meta_box($post) {
    wp_nonce_field('vm_save_map', 'vm_map_nonce');
    $fields = array(
        'tempo' => 'Ritmo recomendado',
        'attack' => 'Plan de ataque',
        'defense' => 'Plan de defensa',
        'areas' => 'Zonas clave (separadas por coma)',
        'solo' => 'Consejo para solo queue',
        'premade' => 'Consejo para equipo premade',
        'mistake' => 'Error frecuente',
    );
    foreach ($fields as $key => $label) {
        $value = get_post_meta($post->ID, '_vm_' . $key, true);
        echo '<p><label for="vm_' . esc_attr($key) . '"><strong>' . esc_html($label) . '</strong></label><br>';
        if (in_array($key, array('attack', 'defense', 'solo', 'premade', 'mistake'), true)) {
            echo '<textarea class="widefat" rows="3" id="vm_' . esc_attr($key) . '" name="vm_' . esc_attr($key) . '">' . esc_textarea($value) . '</textarea></p>';
        } else {
            echo '<input class="widefat" id="vm_' . esc_attr($key) . '" name="vm_' . esc_attr($key) . '" value="' . esc_attr($value) . '"></p>';
        }
    }
}

function vm_render_composition_meta_box($post) {
    wp_nonce_field('vm_save_composition', 'vm_composition_nonce');
    $maps = get_posts(array('post_type' => 'vm_mapa', 'numberposts' => -1, 'orderby' => 'title', 'order' => 'ASC'));
    $map_id = (int) get_post_meta($post->ID, '_vm_map_id', true);
    $style = get_post_meta($post->ID, '_vm_style', true);
    $agents = get_post_meta($post->ID, '_vm_agents', true);
    echo '<p><label for="vm_map_id"><strong>Mapa</strong></label><br><select class="widefat" id="vm_map_id" name="vm_map_id"><option value="0">Selecciona un mapa</option>';
    foreach ($maps as $map) {
        echo '<option value="' . esc_attr($map->ID) . '" ' . selected($map_id, $map->ID, false) . '>' . esc_html($map->post_title) . '</option>';
    }
    echo '</select></p>';
    echo '<p><label for="vm_style"><strong>Estilo</strong></label><br><input class="widefat" id="vm_style" name="vm_style" value="' . esc_attr($style) . '"></p>';
    echo '<p><label for="vm_agents"><strong>Agentes (separados por coma)</strong></label><br><input class="widefat" id="vm_agents" name="vm_agents" value="' . esc_attr($agents) . '"></p>';
}

function vm_save_map_meta($post_id) {
    if (!isset($_POST['vm_map_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['vm_map_nonce'])), 'vm_save_map')) {
        return;
    }
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    $keys = array('tempo', 'attack', 'defense', 'areas', 'solo', 'premade', 'mistake');
    foreach ($keys as $key) {
        if (isset($_POST['vm_' . $key])) {
            update_post_meta($post_id, '_vm_' . $key, sanitize_textarea_field(wp_unslash($_POST['vm_' . $key])));
        }
    }
}
add_action('save_post_vm_mapa', 'vm_save_map_meta');

function vm_save_composition_meta($post_id) {
    if (!isset($_POST['vm_composition_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['vm_composition_nonce'])), 'vm_save_composition')) {
        return;
    }
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    $map_id = isset($_POST['vm_map_id']) ? absint($_POST['vm_map_id']) : 0;
    if ($map_id && get_post_type($map_id) === 'vm_mapa') {
        update_post_meta($post_id, '_vm_map_id', $map_id);
    } else {
        delete_post_meta($post_id, '_vm_map_id');
    }
    if (isset($_POST['vm_style'])) {
        update_post_meta($post_id, '_vm_style', sanitize_text_field(wp_unslash($_POST['vm_style'])));
    }
    if (isset($_POST['vm_agents'])) {
        update_post_meta($post_id, '_vm_agents', sanitize_text_field(wp_unslash($_POST['vm_agents'])));
    }
}
add_action('save_post_vm_composicion', 'vm_save_composition_meta');

function vm_seed_initial_content() {
    if (get_option('vm_initial_content_seeded')) {
        return;
    }

    $maps = array(
        array('Ascent', 'Control de medio y timing de retencion', 'Ascent recompensa el control del centro y la gestion paciente de la informacion. Sus rutas previsibles permiten preparar rotaciones, pero conceder medio facilita que el rival divida la defensa.', 'Metodico; acelera tras ganar medio', 'Toma medio con utilidad, fuerza una rotacion y ejecuta con una ruta de salida cubierta.', 'Evita sobre-rotar ante ruido. Manten un jugador con opcion de recuperar medio y coordina la retoma.', 'Medio, B Main, A Main, Mercado', 'Prioriza intercambios y comunica si el centro queda libre antes de rotar.', 'Reparte utilidad de medio y sincroniza la presion de Main con la segunda oleada.', 'Regalar medio al inicio y rotar por una senal aislada.'),
        array('Bind', 'Rutas rapidas y presion directa', 'Los teleportadores acortan las rotaciones y hacen valiosa la amenaza de cambiar de lado. La informacion sobre ambos sitios importa tanto como el primer contacto.', 'Variable; alterna presion y cambio de lado', 'Muestra presencia en una ruta, conserva utilidad para disputar el sitio y usa el teletransportador para castigar rotaciones.', 'Protege los accesos sin apilar recursos demasiado pronto. Guarda una herramienta para frenar la segunda entrada.', 'A Short, Hookah, Showers, B Long', 'Evita cruzar el teletransportador sin avisar y confirma que zonas siguen bajo control.', 'Coordina amagos entre sitios y define quien cubre la salida tras cada rotacion.', 'Confundir una rotacion rapida con una rotacion segura.'),
        array('Lotus', 'Rotaciones y rutas alternativas', 'Lotus ofrece tres sitios y puertas que alteran el flujo de la ronda. El equipo que conserva opciones de rotacion puede castigar defensas demasiado comprometidas.', 'Flexible; cambia de plan segun la respuesta rival', 'Toma espacio en dos zonas antes de comprometerse y reserva utilidad para cruzar los accesos finales.', 'Usa la informacion para decidir entre disputar el espacio y reagrupar; evita perseguir una rotacion ya iniciada.', 'A Main, Arbol, Medio, B Main, C Main', 'Anuncia el uso de puertas y conserva una ruta de retirada despues del primer contacto.', 'Crea presion en dos sitios y ejecuta cuando la defensa revele su distribucion.', 'Separarse demasiado entre los tres sitios y perder capacidad de intercambio.'),
        array('Sunset', 'Control de medio y presion por zonas', 'El control del centro conecta las rutas de ataque y condiciona las rotaciones. Las composiciones necesitan informacion fiable para no ceder espacio en los laterales.', 'Por fases; disputa medio antes de ejecutar', 'Despeja el centro por capas, ocupa una salida y evita gastar toda la utilidad antes de entrar al sitio.', 'Protege los cruces de medio y rota con confirmacion; conserva recursos para disputar la entrada final.', 'Medio, B Main, A Main, Mercado', 'Asegura que alguien vigile el flanco al ejecutar y comparte la informacion de medio.', 'Sincroniza la toma de medio con la presion del sitio para limitar la rotacion defensiva.', 'Forzar una entrada lateral sin control del centro ni cobertura de flanco.'),
        array('Split', 'Verticalidad y control del punto medio', 'La altura y los accesos estrechos convierten el control de medio en una condicion para dividir la defensa. La utilidad de despeje debe acompañar cada avance.', 'Gradual; gana espacio vertical antes de acelerar', 'Disputa medio y conecta la presion de arriba con una entrada desde Main para abrir dos angulos.', 'Evita ceder las alturas sin informacion y prepara una retoma con utilidad coordinada.', 'Medio, Ventana, A Main, B Main', 'No dueles en pasillos estrechos sin apoyo; espera el intercambio y cubre la subida rival.', 'Combina presion alta y baja con una senal comun para entrar o retroceder.', 'Atacar un unico acceso mientras la defensa conserva todas las alturas.'),
        array('Haven', 'Tres sitios y defensa distribuida', 'Los tres sitios estiran las rotaciones y premian la informacion temprana. La composicion debe poder retrasar una ejecucion sin abandonar el mapa completo.', 'Lectura y respuesta; las rotaciones definen la ronda', 'Presiona una zona para fijar defensores y cambia de sitio con tiempo suficiente para reagruparte.', 'Retrasa el avance y comunica el numero de rivales antes de comprometer la rotacion completa.', 'A Long, Garaje, Medio, C Long', 'Da informacion concreta de numero y ubicacion; evita rotar solo por utilidad vista.', 'Establece una cadena de informacion entre los tres puntos y asigna quien cubre el flanco.', 'Rotar a todos los defensores con la primera senal de presion.'),
        array('Icebox', 'Lineas largas y toma de altura', 'Los cambios de altura y los angulos largos hacen importante despejar el sitio por capas. La utilidad que permite cruzar o aislar lineas tiene alto valor.', 'Explosivo tras conseguir una posicion elevada', 'Asegura una altura con apoyo, despeja los angulos cercanos y reserva recursos para el post-plant.', 'Mezcla posiciones para evitar patrones previsibles y conserva una ruta de retoma segura.', 'A Rafters, A Pipes, Medio, B Green', 'Comprueba las alturas antes de cruzar y no abandones la cobertura del flanco en post-plant.', 'Sincroniza la toma de altura con el despeje de angulos y prepara una salida de retoma.', 'Entrar al sitio sin limpiar posiciones elevadas ni asegurar el espacio de plantado.'),
        array('Pearl', 'Estructura posicional y control de medio', 'Pearl combina recorridos largos con conexiones por el centro. La informacion y el control de cruces permiten cambiar de sitio sin perder la estructura del equipo.', 'Controlado; prioriza la toma de espacio util', 'Abre una ruta de medio y fuerza al rival a elegir que acceso defender antes de comprometer el sitio.', 'Manten opciones de repliegue y usa la informacion de cruces para coordinar una retoma conjunta.', 'Medio, A Art, A Main, B Long', 'Evita avanzar sin intercambio por los recorridos largos y comunica las rutas que quedan abiertas.', 'Usa una presion secundaria para fijar defensores mientras el grupo principal toma el espacio clave.', 'Ejecutar por una sola ruta sin comprobar las rotaciones ni cubrir la retaguardia.'),
    );

    $composition_sets = array(
        'Ascent' => array(array('Control + Entry', 'Agresiva', 'Controla medio y crea una ventana segura para la entrada.', 'Jett, Sova, Omen, Killjoy, Viper'), array('Retoma por los laterales', 'Defensiva', 'Cubre las rutas laterales y conserva utilidad para recuperar el sitio.', 'Raze, Sova, Cypher, Sage, Viper')),
        'Bind' => array(array('Stack de retoma', 'Defensiva', 'Lee las rutas rivales y prepara una retoma por capas.', 'Raze, Sova, Cypher, Sage, Omen'), array('Ruta corta y presion', 'Agresiva', 'Presiona un acceso con apoyo de informacion y una segunda oleada.', 'Jett, Omen, Sova, Killjoy, Raze')),
        'Lotus' => array(array('Flex de mapa', 'Flexible', 'Alterna presion directa y control de distancia segun la respuesta rival.', 'Jett, Raze, Viper, Killjoy, Sova'), array('Cruce de doble camino', 'Control', 'Controla dos corredores para estirar la defensa antes de ejecutar.', 'Omen, Sova, Killjoy, Raze, Viper')),
        'Sunset' => array(array('Punta de control', 'Estructural', 'Asegura el transito y la informacion antes de abrir el sitio.', 'Omen, Jett, Sage, Killjoy, Cypher'), array('Presion por medio', 'Agresiva', 'Disputa medio con informacion para abrir una ruta de entrada.', 'Raze, Sova, Viper, Cypher, Jett')),
        'Split' => array(array('Vertical + vigilancia', 'Control', 'Coordina vigilancia alta, medio y las rutas de entrada.', 'Jett, Sova, Killjoy, Omen, Cypher'), array('Entrada fugaz', 'Agresiva', 'Combina entrada rapida con apoyo para despejar el acceso.', 'Raze, Sova, Viper, Sage, Jett')),
        'Haven' => array(array('Punto de presion', 'Control', 'Fuerza un sitio concreto con informacion y cobertura de rotacion.', 'Jett, Sova, Cypher, Viper, Killjoy'), array('Triforce equilibrada', 'Flexible', 'Permite variar el punto de contacto segun la respuesta defensiva.', 'Raze, Omen, Sage, Killjoy, Sova')),
        'Icebox' => array(array('Ruptura de linea', 'Agresiva', 'Abre el mapa con utilidad y presion sobre los angulos elevados.', 'Raze, Viper, Killjoy, Sova, Jett'), array('Control de angulos', 'Defensiva', 'Prioriza vigilancia y una estructura estable para frenar la entrada.', 'Omen, Cypher, Sage, Killjoy, Viper')),
        'Pearl' => array(array('Post-plant controlado', 'Estructural', 'Organiza el post-plant con cobertura de rutas y utilidad de bloqueo.', 'Jett, Omen, Killjoy, Sage, Viper'), array('Tension por mitad', 'Agresiva', 'Busca un primer contacto y cambia de direccion con informacion.', 'Raze, Sova, Cypher, Omen, Sage')),
    );

    $map_ids = array();
    foreach ($maps as $map) {
        $post_id = wp_insert_post(array(
            'post_type' => 'vm_mapa',
            'post_status' => 'publish',
            'post_title' => $map[0],
            'post_name' => sanitize_title($map[0]),
            'post_content' => $map[2],
            'post_excerpt' => $map[1],
        ));
        if (is_wp_error($post_id)) {
            continue;
        }
        $map_ids[$map[0]] = $post_id;
        $meta_keys = array('tempo', 'attack', 'defense', 'areas', 'solo', 'premade', 'mistake');
        for ($index = 0; $index < count($meta_keys); $index++) {
            update_post_meta($post_id, '_vm_' . $meta_keys[$index], $map[$index + 3]);
        }
    }

    foreach ($composition_sets as $map_name => $items) {
        if (empty($map_ids[$map_name])) {
            continue;
        }
        foreach ($items as $item) {
            $post_id = wp_insert_post(array(
                'post_type' => 'vm_composicion',
                'post_status' => 'publish',
                'post_title' => $item[0],
                'post_content' => $item[2],
                'post_excerpt' => $item[2],
            ));
            if (is_wp_error($post_id)) {
                continue;
            }
            update_post_meta($post_id, '_vm_map_id', $map_ids[$map_name]);
            update_post_meta($post_id, '_vm_style', $item[1]);
            update_post_meta($post_id, '_vm_agents', $item[3]);
        }
    }

    update_option('vm_initial_content_seeded', 1);
}

function vm_activate_plugin() {
    vm_register_content_types();
    vm_seed_initial_content();
    flush_rewrite_rules();
}
register_activation_hook(__FILE__, 'vm_activate_plugin');

function vm_deactivate_plugin() {
    flush_rewrite_rules();
}
register_deactivation_hook(__FILE__, 'vm_deactivate_plugin');
