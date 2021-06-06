import assign from 'lodash/assign';

// Group styles.
wp.blocks.registerBlockStyle( 'core/group', {
	name: 'full-screen',
	label: 'Full Screen Size',
} );

function addTableBlockClass( props, blockType ) {
	if ( blockType.name === 'core/table' ) {
		return assign( props, { className: 'table' } );
	}
	return props;
}

wp.hooks.addFilter(
	'blocks.getSaveContent.extraProps',
	'scWebshop/add-table-block-class',
	addTableBlockClass
);
