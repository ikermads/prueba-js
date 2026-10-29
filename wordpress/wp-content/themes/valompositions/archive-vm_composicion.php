<?php get_header(); ?>
<main class="section">
  <div class="container">
    <span class="eyebrow">Biblioteca tactica</span>
    <h1 class="page-title">Composiciones</h1>
    <p class="intro">Cinco agentes, un plan compartido y una lectura concreta del mapa.</p>
    <?php if (have_posts()) : ?>
      <div class="grid">
        <?php while (have_posts()) : the_post(); $map_id = (int) get_post_meta(get_the_ID(), '_vm_map_id', true); $agents = get_post_meta(get_the_ID(), '_vm_agents', true); ?>
          <a class="card" href="<?php the_permalink(); ?>">
            <span class="taxonomy"><?php echo esc_html($map_id ? get_the_title($map_id) : 'Sin mapa'); ?></span>
            <h2><?php the_title(); ?></h2>
            <p><?php echo esc_html(get_the_excerpt()); ?></p>
            <span class="card-meta"><?php echo esc_html($agents); ?></span>
          </a>
        <?php endwhile; ?>
      </div>
      <?php the_posts_pagination(); ?>
    <?php else : ?>
      <p class="empty-state">No hay composiciones publicadas.</p>
    <?php endif; ?>
  </div>
</main>
<?php get_footer(); ?>
