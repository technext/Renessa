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
