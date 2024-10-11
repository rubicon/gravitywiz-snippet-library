/**
 * Gravity Wiz // Gravity Forms // Preserve Datepicker Date Selection when Changing Months
 * https://gravitywiz.com/
 *
 * A small quality-of-life improvement that preserves the selected date when changing months via the Datepicker.
 * For example, if you selected October 16 and then used the Datepicker's "Month" dropdown to change the month to
 * December, the Datepicker would automatically select December 16.
 *
 * Instructions:
 *
 * 1. Install this snippet with our free Custom JavaScript plugin.
 *    https://gravitywiz.com/gravity-forms-custom-javascript/
 */
gform.addFilter( 'gform_datepicker_options_pre_init', function( optionsObj, formId, fieldId ) {

	optionsObj.onChangeMonthYear = function(year, month, inst) {
		// Get the currently selected day or default to the 1st if none is selected
		var selectedDate = $(this).datepicker('getDate');
		var day = selectedDate ? selectedDate.getDate() : 1;

		// Set the new date with the updated month and year
		$(this).datepicker('setDate', new Date(year, month - 1, day));
	}
  
    return optionsObj;
} );