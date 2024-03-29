<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WordPress
 * @subpackage SC_Webshop_Theme
 */

get_header();
?>

	<div class="container-fluid">
		<div class="row">
			<main id="primary" class="site-main col">

			<?php
			while ( have_posts() ) :
				the_post();

				get_template_part( 'template-parts/content', get_post_type() );

				the_post_navigation();

				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;

			endwhile; // End of the loop.
			?>

			</main><!-- #primary -->
		</div><!-- .row -->
	</div><!-- .container-fluid -->

<?php
get_footer();
