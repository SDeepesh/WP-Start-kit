( function ( $ ) {
	const input = $( '.quantity input' );

	input.attr( 'type', 'text' );
	input.before(
		'<a href="#" class="btn btn-outline-secondary rounded-circle qty-decrease">-</a>'
	);
	input.after(
		'<a href="#" class="btn btn-outline-secondary rounded-circle qty-increase">+</a>'
	);

	// Increase quantity.
	$( document ).on( 'click', '.qty-increase', function ( e ) {
		e.preventDefault();
		const maxQty = input.attr( 'max' )
			? parseInt( input.attr( 'max' ) )
			: 1;

		if ( input.val() < maxQty ) {
			input.val( function ( i, oldval ) {
				return parseInt( oldval, 10 ) + 1;
			} );
		}
	} );

	// Decrease quantity.
	$( document ).on( 'click', '.qty-decrease', function ( e ) {
		e.preventDefault();
		const minQty = input.attr( 'min' )
			? parseInt( input.attr( 'min' ) )
			: 1;

		if ( input.val() > minQty ) {
			input.val( function ( i, oldval ) {
				return parseInt( oldval, 10 ) - 1;
			} );
		}
	} );
} )( jQuery );
