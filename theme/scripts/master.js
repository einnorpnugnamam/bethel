var load = (function() {
	'use strict';

	function init() {
		// Your code here
		if($(".main .home").length > 0) {
			home.init();
		}
	}

	return {
		init: init
	};
}());

jQuery(document).ready(function($) { load.init(); });
