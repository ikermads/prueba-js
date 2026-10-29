<?php get_header(); ?>
<main>
  <section class="hero">
    <div class="container">
      <span class="eyebrow">Analisis tactico · Metajuego · Posicionamiento</span>
      <h1>Valompositions: decisiones claras para cada ronda.</h1>
      <p>Analisis de mapas, composiciones y estructuras de equipo para convertir la lectura del juego en decisiones aplicables.</p>
      <div class="hero-actions">
        <a class="button" href="<?php echo esc_url(get_post_type_archive_link('vm_mapa')); ?>">Explorar mapas</a>
        <a class="button button-secondary" href="<?php echo esc_url(get_post_type_archive_link('vm_composicion')); ?>">Ver composiciones</a>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="section-heading"><h2>Analisis por mapa</h2><a href="<?php echo esc_url(get_post_type_archive_link('vm_mapa')); ?>">Ver todos los mapas &rarr;</a></div>
      <?php $maps = new WP_Query(array('post_type' => 'vm_mapa', 'posts_per_page' => 8, 'orderby' => 'title', 'order' => 'ASC')); ?>
      <?php if ($maps->have_posts()) : ?>
        <div class="grid">
          <?php while ($maps->have_posts()) : $maps->the_post(); ?>
            <a class="card" href="<?php the_permalink(); ?>">
              <span class="taxonomy">Mapa</span>
              <h3><?php the_title(); ?></h3>
              <p><?php echo esc_html(get_the_excerpt()); ?></p>
              <span class="card-meta">Leer analisis &rarr;</span>
            </a>
          <?php endwhile; wp_reset_postdata(); ?>
        </div>
      <?php else : ?>
        <p class="empty-state">Todavia no hay mapas publicados.</p>
      <?php endif; ?>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="section-heading"><h2>Composiciones destacadas</h2><a href="<?php echo esc_url(get_post_type_archive_link('vm_composicion')); ?>">Ver todas &rarr;</a></div>
      <?php $compositions = new WP_Query(array('post_type' => 'vm_composicion', 'posts_per_page' => 4, 'orderby' => 'title', 'order' => 'ASC')); ?>
      <?php if ($compositions->have_posts()) : ?>
        <div class="grid">
          <?php while ($compositions->have_posts()) : $compositions->the_post(); $map_id = (int) get_post_meta(get_the_ID(), '_vm_map_id', true); ?>
            <a class="card" href="<?php the_permalink(); ?>">
              <span class="taxonomy"><?php echo esc_html($map_id ? get_the_title($map_id) : 'Composicion'); ?></span>
              <h3><?php the_title(); ?></h3>
              <p><?php echo esc_html(get_the_excerpt()); ?></p>
              <span class="card-meta">Ver ficha &rarr;</span>
            </a>
          <?php endwhile; wp_reset_postdata(); ?>
        </div>
      <?php else : ?>
        <p class="empty-state">Todavia no hay composiciones publicadas.</p>
      <?php endif; ?>
    </div>
  </section>
</main>
<?php get_footer(); ?>
