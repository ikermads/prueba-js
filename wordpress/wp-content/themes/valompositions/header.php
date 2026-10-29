<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="<?php echo esc_url(home_url('/')); ?>" aria-label="Valompositions inicio">
      <span class="brand-mark">V</span><span>Valompositions</span>
    </a>
    <nav class="primary-nav" aria-label="Navegacion principal">
      <?php
      wp_nav_menu(array(
          'theme_location' => 'primary',
          'container' => false,
          'fallback_cb' => false,
          'depth' => 1,
      ));
      ?>
    </nav>
    <a class="button" href="<?php echo esc_url(get_post_type_archive_link('vm_mapa')); ?>">Explorar mapas</a>
  </div>
</header>
