<?php
get_header();
the_post();
$map_id = (int) get_post_meta(get_the_ID(), '_vm_map_id', true);
$style = get_post_meta(get_the_ID(), '_vm_style', true);
$agents = array_filter(array_map('trim', explode(',', (string) get_post_meta(get_the_ID(), '_vm_agents', true))));
?>
<main>
  <section class="detail-hero">
    <div class="container">
      <?php if ($map_id) : ?><a class="card-meta" href="<?php echo esc_url(get_permalink($map_id)); ?>">&larr; <?php echo esc_html(get_the_title($map_id)); ?></a><?php endif; ?>
      <p class="taxonomy"><?php echo esc_html($style); ?></p>
      <h1 class="page-title"><?php the_title(); ?></h1>
      <p class="intro"><?php echo esc_html(get_the_excerpt()); ?></p>
    </div>
  </section>
  <section class="section">
    <div class="container detail-grid">
      <article class="detail-panel">
        <span class="eyebrow">Agentes</span>
        <div class="composition-agents agent-list">
          <?php foreach ($agents as $agent) : ?><span><?php echo esc_html($agent); ?></span><?php endforeach; ?>
        </div>
      </article>
      <article class="detail-panel">
        <span class="eyebrow">Plan de juego</span>
        <div><?php the_content(); ?></div>
      </article>
    </div>
  </section>
</main>
<?php get_footer(); ?>
