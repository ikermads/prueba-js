<?php
get_header();
the_post();
$map_id = get_the_ID();
$map_fields = array(
    'tempo' => 'Ritmo recomendado',
    'areas' => 'Zonas clave',
    'attack' => 'Plan de ataque',
    'defense' => 'Plan de defensa',
    'solo' => 'Solo queue',
    'premade' => 'Equipo premade',
    'mistake' => 'Error frecuente',
);
?>
<main>
  <section class="detail-hero">
    <div class="container">
      <a class="card-meta" href="<?php echo esc_url(get_post_type_archive_link('vm_mapa')); ?>">&larr; Todos los mapas</a>
      <p class="taxonomy">Analisis tactico del mapa</p>
      <h1 class="page-title"><?php the_title(); ?></h1>
      <p class="intro"><?php echo esc_html(get_the_excerpt()); ?></p>
    </div>
  </section>
  <section class="section">
    <div class="container detail-grid">
      <?php foreach ($map_fields as $key => $label) : $value = get_post_meta($map_id, '_vm_' . $key, true); if (!$value) { continue; } ?>
        <article class="detail-panel">
          <span class="eyebrow"><?php echo esc_html($label); ?></span>
          <?php if ($key === 'areas') : ?>
            <ul class="chip-list">
              <?php foreach (array_filter(array_map('trim', explode(',', $value))) as $area) : ?><li><?php echo esc_html($area); ?></li><?php endforeach; ?>
            </ul>
          <?php else : ?><p><?php echo esc_html($value); ?></p><?php endif; ?>
        </article>
      <?php endforeach; ?>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="section-heading"><h2>Composiciones para <?php the_title(); ?></h2></div>
      <?php $compositions = new WP_Query(array('post_type' => 'vm_composicion', 'posts_per_page' => -1, 'meta_key' => '_vm_map_id', 'meta_value' => $map_id, 'orderby' => 'title', 'order' => 'ASC')); ?>
      <?php if ($compositions->have_posts()) : ?>
        <div class="composition-grid">
          <?php while ($compositions->have_posts()) : $compositions->the_post(); $style = get_post_meta(get_the_ID(), '_vm_style', true); $agents = array_filter(array_map('trim', explode(',', (string) get_post_meta(get_the_ID(), '_vm_agents', true)))); ?>
            <article class="detail-panel">
              <span class="taxonomy"><?php echo esc_html($style); ?></span>
              <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
              <p><?php echo esc_html(get_the_excerpt()); ?></p>
              <div class="composition-agents agent-list" aria-label="Agentes de la composicion">
                <?php foreach ($agents as $agent) : ?><span><?php echo esc_html($agent); ?></span><?php endforeach; ?>
              </div>
            </article>
          <?php endwhile; wp_reset_postdata(); ?>
        </div>
      <?php else : ?>
        <p class="empty-state">Todavia no hay composiciones vinculadas a este mapa.</p>
      <?php endif; ?>
    </div>
  </section>
</main>
<?php get_footer(); ?>
