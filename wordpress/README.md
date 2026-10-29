# WordPress install

This folder contains an installable theme and its companion content plugin. The static HTML prototype remains at the project root.

## Install

1. Copy `wordpress/wp-content/plugins/valompositions-core` into the WordPress site's `wp-content/plugins/` directory.
2. Copy `wordpress/wp-content/themes/valompositions` into `wp-content/themes/`.
3. In the WordPress admin, activate **Valompositions Core** first, then activate the **Valompositions** theme.
4. Open **Settings > Permalinks** and save once if map or composition routes return a 404.
5. Set the site's front page to a static page only if you intend to use a separate page; otherwise the theme's `front-page.php` is used for the site home.

On first plugin activation, the plugin seeds eight map posts and two composition posts for each map. The posts and their tactical fields are editable in the admin. Composition records store a relationship to one map, a play style, and a comma-separated agent roster.

The theme expects the companion plugin because it owns the map and composition post types and their metadata. Do not remove the plugin after publishing content. The site currently has no payment processor, member login, consent-management platform, or Riot API integration; those require separate configuration and review before production.
