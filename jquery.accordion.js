 /*
 * jQuery accordion plugin v 0.5 beta
 * author: Marcin Kumorek
 * author's URI: qmmr.pl
 * get latest version from github.com
 * git@github.com:qmmr/accordion.git
 */
(function($) {
	// plugin definition
	$.fn.accordion = function($$options) {
		// triple semicolon is to hide it from reular users
		;;;_debug(this);
		
		// build main options before element iteration
		var $settings = $.extend({}, $.fn.accordion.defaults, $$options);
		
		// iterate and reformat each matched element
		return this.each(function() {
		
			var o = $.metadata ? $.extend({}, $settings, $(this).metadata()) : $settings, // build element specific options
              $parent = $(this),
			  $pic    = $parent.find(o.pic),
			  $link   = $parent.find(o.link),
			  $target = $parent.next();
			
			$parent.bind('click', function(e) {
                e.preventDefault();
			    $target.slideToggle(1000, function() {
                    if($parent.hasClass('open')) {
                      $pic.removeClass().addClass('icon e-arrow');
                    } else {
                      $pic.removeClass().addClass('icon s-arrow');
                    }
                    $parent.toggleClass('open');
                });
			}).bind('mouseover', function(e) {
                e.preventDefault();
                if($parent.hasClass('open')) {
                  $pic.toggleClass('ne-arrow').removeClass('s-arrow');
                } else {
                  $pic.toggleClass('se-arrow').removeClass('e-arrow');
                }
            }).bind('mouseout', function(e) {
                e.preventDefault();
                if($parent.hasClass('open')) {
                  $pic.removeClass().addClass('icon s-arrow');
                } else {
                  $pic.removeClass().addClass('icon e-arrow');
                }
            });
			
			//var $markup = $this.html();
			//$markup = $.fn.accordion.format($markup);
			//$this.html($markup);
		});
	};
	
	// private function for debugging
	function _debug($obj) {
		if (window.console && window.console.log)
		window.console.log('accordion selection count: ' + $obj.size());
	};
	
	// define and expose our format function
	$.fn.accordion.format = function($txt) {
		return '<span class="bold">' + $txt + '</span>';
	};
	
	// plugin defaults
	$.fn.accordion.defaults = {
		// default container is set to h4.accordion
		link:		'a',
		pic:		'span'
	};
	
})(jQuery);
