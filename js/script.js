new WOW().init();
	$(document).ready(function(){
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
var origOffsetY = menu.offset().top;

function scroll() 
{
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
