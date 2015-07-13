'use strict';

var app = (function(document, $) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();

			_userAgentInit();

			// Custom JS place here
			
			// Datepicker
			$('#date').datepicker();

		};
	return {
		init: _init
	};
})(document, jQuery);

(function() {
	app.init();
})();
