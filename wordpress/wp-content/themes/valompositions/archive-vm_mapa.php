<?php get_header(); ?>
<main class="section">
  <div class="container">
    <span class="eyebrow">Biblioteca tactica</span>
    <h1 class="page-title">Mapas</h1>
    <p class="intro">Analisis de ritmo, zonas clave y composiciones asociadas.</p>
    <?php if (have_posts()) : ?>
      <div class="grid">
        <?php while (have_posts()) : the_post(); ?>
          <a class="card" href="<?php the_permalink(); ?>">
            <span class="taxonomy">Mapa</span>
            <h2><?php the_title(); ?></h2>
            <p><?php echo esc_html(get_the_excerpt()); ?></p>
            <span class="card-meta">Abrir analisis &rarr;</span>
          </a>
        <?php endwhile; ?>
      </div>
      <?php the_posts_pagination(); ?>
    <?php else : ?>
      <p class="empty-state">No hay mapas publicados.</p>
    <?php endif; ?>
  </div>
</main>
<?php get_footer(); ?>
