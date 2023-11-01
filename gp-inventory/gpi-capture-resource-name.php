<?php
/**
 * Gravity Perks // Inventory // Capture Resource Name (as Field Value)
 * https://gravitywiz.com/documentation/gravity-forms-inventory/
 *
 * Instruction Video: https://www.loom.com/share/064577f9491a487d84e6bb594d3fd578
 *
 * If you intend to map different Resources to different fields throughout the life of your form, you may wish to capture
 * the current Resource at the time of submission and save that value to a field. This snippet can help.
 */
// Update "123" to your form ID.
add_action( 'gform_after_submission_123', function( $entry, $form ) {

	// Update "4" to your Product field ID.
	$product_field_id = 4;

	// Update "5" to a Hidden field ID that will capture the resource name.
	$resource_field_id = 5;

	$product_field = GFAPI::get_field( $form, $product_field_id );
	$resource      = get_post( $product_field->gpiResource );

	GFAPI::update_entry_field( $entry['id'], $resource_field_id, $resource->post_title );

}, 10, 2 );
