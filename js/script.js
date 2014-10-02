(function($,sr) {
  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
    var timeout;
    return function debounced () {
      var obj = this, args = arguments;
      function delayed () {
        if (!execAsap)
                          func.apply(obj, args);
        timeout = null;
      }
      ;
      if (timeout)
                    clearTimeout(timeout); else if (execAsap)
                    func.apply(obj, args);
      timeout = setTimeout(delayed, threshold || 100);
    }
    ;
  }
  // smartresize 
  jQuery.fn[sr] = function(fn) {
    return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
  }
  ;
}
)(jQuery,'smartresize');

$(document).ready(function(){
    new WOW().init();
		$("#client-speech").owlCarousel
		({
			autoPlay: 3000,
			navigation : false, // Show next and prev buttons
			slideSpeed : 700,
			paginationSpeed : 1000,
			singleItem:true
		});

    var setHomeBannerHeight = function(){
   var homeHeight= $(window).height();
   $('#overlay-1').height(homeHeight);
    }
    setHomeBannerHeight();  

     var $scrollDownArrow = $('.bottom > a');
  var animateScrollDownArrow = function() {
    $scrollDownArrow.animate( {
      top: 5,
    }
    , 400, "linear", function() {
      $scrollDownArrow.animate( {
        top: -5,
      }
      , 400, "linear", function() {
        animateScrollDownArrow();
      }
      );
    });
  }
  animateScrollDownArrow();  
	});

var menu = $('#navigation');


function scroll() 
{ var origOffsetY = menu.offset().top;
   if ($(window).scrollTop() >= origOffsetY) 
   {
       $('#navigation').addClass('nav-wrap');
       $('#about').addClass('exp');
       //$('.content').addClass('menu-padding');
   } 
   else 
   {
       $('#navigation').removeClass('nav-wrap');
       $('#about').removeClass('exp');
       //$('.content').removeClass('menu-padding');
    }
}

