/*!
 * This function extends jQuery functionality to create an array of unique items from an
 * array of not (necessarily) unique items.
 * @anArray: function input, must be a JS array
 * @result: function output, it is a JS array
 * TODO: insert verification for array (handle case if @anArray is not a JS array)
 * TODO: make it function with JSON, jQuery objects, and enable it to output JSON (and / or jQuery objects)
 * this should be done with a second parameter (so calling the function would require the type of the output:
 * array, JSON, obj)
 */

$.extend({
	distinct : function(anArray) {
	   var result = [];
	   $.each(anArray, function(i,v){
		   if ($.inArray(v, result) == -1) result.push(v);
	   });
	   return result;
	}
});
