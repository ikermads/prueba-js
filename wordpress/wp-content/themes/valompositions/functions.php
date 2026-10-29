<?php
if (!defined('ABSPATH')) {
    exit;
}

function vm_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'gallery', 'caption', 'style', 'script'));
    register_nav_menus(array('primary' => 'Navegacion principal'));
}
add_action('after_setup_theme', 'vm_theme_setup');

function vm_theme_assets() {
    wp_enqueue_style('valompositions-theme', get_stylesheet_uri(), array(), '1.0.0');
}
add_action('wp_enqueue_scripts', 'vm_theme_assets');

function vm_core_plugin_notice() {
    if (!post_type_exists('vm_mapa') && current_user_can('activate_plugins')) {
        echo '<div class="notice notice-warning"><p>Activa el plugin Valompositions Core para gestionar mapas y composiciones.</p></div>';
    }
}
add_action('admin_notices', 'vm_core_plugin_notice');
