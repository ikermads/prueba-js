<footer class="site-footer">
  <div class="container site-footer-inner">
    <a class="brand" href="<?php echo esc_url(home_url('/')); ?>"><span class="brand-mark">V</span><span>Valompositions</span></a>
    <nav class="footer-nav" aria-label="Navegacion secundaria">
      <a href="<?php echo esc_url(get_post_type_archive_link('vm_mapa')); ?>">Mapas</a>
      <a href="<?php echo esc_url(get_post_type_archive_link('vm_composicion')); ?>">Composiciones</a>
    </nav>
    <span>&copy; <?php echo esc_html(wp_date('Y')); ?> Valompositions</span>
  </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
