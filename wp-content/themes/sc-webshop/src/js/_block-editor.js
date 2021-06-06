wp.domReady( function () {
	/**
	 * Blocks to remove from the block editor.
	 */
	const disallowedBlocks = [
		'yoast/faq-block',
		'yoast/how-to-block',
		'yoast-seo/breadcrumbs',
		'core/archives',
		'core/audio',
		'core/calendar',
		'core/categories',
		'core/html',
		'core/latest-comments',
		'core/latest-posts',
		'core/missing',
		'core/more',
		'core/nextpage',
		'core/preformatted',
		'core/pullquote',
		'core/rss',
		'core/search',
		'core/social-links',
		'core/social-link',
		'core/tag-cloud',
		'core/verse',
	];

	/**
	 * Embed block variations to allow.
	 * All other variations will be removed from the block editor.
	 */
	const allowedEmbedBlocks = [ 'youtube', 'instagram', 'vimeo', 'twitter' ];

	/**
	 * Unregister blocks.
	 */
	wp.blocks.getBlockTypes().forEach( function ( blockType ) {
		if ( disallowedBlocks.indexOf( blockType.name ) !== -1 ) {
			wp.blocks.unregisterBlockType( blockType.name );
		}
	} );

	/**
	 * Unregister embed block variations.
	 */
	wp.blocks
		.getBlockType( 'core/embed' )
		.variations.forEach( function ( blockVariation ) {
			if ( allowedEmbedBlocks.indexOf( blockVariation.name ) === -1 ) {
				wp.blocks.unregisterBlockVariation(
					'core/embed',
					blockVariation.name
				);
			}
		} );
} );
