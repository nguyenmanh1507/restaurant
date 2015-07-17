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
			var now = new Date();
			var month = now.getMonth();
			var year = now.getFullYear();
			var date = now.getDate();
			var maxMonth = month + 3;
			var allowTimes = [
					'10:00', '11:00', '12:00', '13:00', '14:00', 
					'15:00', '20:00', '21:00', '22:00'
				];

			if(maxMonth > 12) {
				year += 1;
			} 

			if(date > 28) {
				date -= 3;
			}

			var maxDate = year + '/' + maxMonth + '/' + date;

			$('#date').datetimepicker({
				minDate: 0,
				maxDate: maxDate,
				minTime: 0,
				allowTimes: allowTimes
			});

			// Headroom
			var header = document.querySelector('.site-header');
			var headroom = new Headroom(header);

			headroom.init();

			// Animate signature
			new Vivus('signature', {
			  type: 'oneByOne', 
			  duration: 200
			});

			// Disable body scroll when
			// topbar expand
			$('.toggle-topbar').on('click', function() {
				$('body').toggleClass('no-scroll');
			});

		};
	return {
		init: _init
	};
})(document, jQuery);

(function() {
	app.init();
})();
