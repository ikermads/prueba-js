<?php get_header(); ?>
<main class="section">
  <div class="container">
    <?php if (have_posts()) : ?>
      <div class="grid">
        <?php while (have_posts()) : the_post(); ?>
          <article class="card">
            <span class="taxonomy"><?php echo esc_html(get_post_type_object(get_post_type())->labels->singular_name); ?></span>
            <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
            <p><?php echo esc_html(get_the_excerpt()); ?></p>
          </article>
        <?php endwhile; ?>
      </div>
      <?php the_posts_pagination(); ?>
    <?php else : ?>
      <p class="empty-state">No hay contenido publicado.</p>
    <?php endif; ?>
  </div>
</main>
<?php get_footer(); ?>
