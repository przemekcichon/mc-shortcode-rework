;(function($) { 

	"use strict";

	$(document).ready(function(){
		
		
		$('.celestial-carousel[id^="celestial-carousel-"]').each( function() {

			
  			var $div = $(this);
  			var token = $div.data('token');
			var settingObj = window['slick_carousel_data_' + token];
			
			
			var slick_nav_dots_eval = ( settingObj.slick_nav_dots === 'true' );
			var slick_nav_arrows_eval = ( settingObj.slick_nav_arrows === 'true' );
			var slick_loop_eval = ( settingObj.slick_loop === 'true' );
			var slick_autoplay_eval = ( settingObj.slick_autoplay === 'true' );
			
				  
			$( ".cc-class-" + settingObj.slick_id ).slick({
				dots: 				slick_nav_dots_eval,
				arrows: 			slick_nav_arrows_eval,
				infinite: 			slick_loop_eval,
				autoplay: 			slick_autoplay_eval,
				slidesToShow: 		settingObj.slick_visible_items,
				slidesToScroll: 	1,
				speed: 				1000,
				appendArrows: 		$(".cc-parent-class-" + settingObj.slick_id),
				appendDots: 		$(".cc-parent-class-" + settingObj.slick_id),
				responsive: 		[
					{
						breakpoint: 1440,
					  	settings: {
							slidesToShow: settingObj.slick_visible_items_ss
					  	}
							
					},					
					{
						breakpoint: 991,
					  	settings: {
							slidesToShow: settingObj.slick_visible_items_ss2
					  	}
							
					},
					{
						breakpoint: 767,
					  	settings: {
							slidesToShow: 1
					  	}
							
					}					
					
					
				]
			});
		

		});
		
		
		
		if( typeof slick_carousel_port_data !== 'undefined' ) {
			
			$(".celestial-portfolio-posts").slick({
				dots: 				slick_nav_dots_eval,
				arrows: 			slick_nav_arrows_eval,
				infinite: 			slick_loop_eval,
				centerMode: 		false,
				slidesToShow: 		slick_carousel_port_data.slick_visible_items,
				slidesToScroll: 	1,
				speed: 				500,
				appendArrows: 		$(".celestial-portfolio-posts-parent"),
				appendDots: 		$(".celestial-portfolio-posts-parent"),
				responsive: [
					{
						breakpoint: 1440,
					  	settings: {
							slidesToShow: 3,
							infinite: true,
							dots: false,
							arrows: true
					  	}
							
					},					
					{
						breakpoint: 991,
					  	settings: {
							slidesToShow: 1,
							infinite: true,
							dots: false,
							arrows: true
					  	}
							
					},
					{
						breakpoint: 767,
					  	settings: {
							slidesToShow: 1,
							infinite: true,
							dots: false,
							arrows: true
					  	}
							
					}					
					
					
				]
			});
			
		}
		
		
		if( typeof slick_carousel_blog_data !== 'undefined' ) {
			
			$( ".celestial-blog-posts" ).slick({
				dots: 				slick_nav_dots_eval,
				arrows: 			slick_nav_arrows_eval,
				infinite:			slick_loop_eval,
				centerMode: 		false,
				slidesToShow: 		slick_carousel_blog_data.slick_visible_items,
				slidesToScroll: 	1,
				speed: 				500,
				appendArrows: 		$(".celestial-blog-posts-parent"),
				appendDots: 		$(".celestial-blog-posts-parent"),
				responsive: [
					{
						breakpoint: 1440,
					  	settings: {
							slidesToShow: 3,
							infinite: true,
							dots: false,
							arrows: true
					  	}
							
					},					
					{
						breakpoint: 991,
					  	settings: {
							slidesToShow: 1,
							infinite: true,
							dots: false,
							arrows: true
					  	}
							
					},
					{
						breakpoint: 767,
					  	settings: {
							slidesToShow: 1,
							infinite: true,
							dots: false,
							arrows: true
					  	}
							
					}					
					
					
				]
			});
			
		}
		
		
		

		//if( typeof slick_featured_posts_data !== 'undefined' ) {
			
			$( '.cel-slick-featured-single' ).slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				fade: false,
				adaptiveHeight: true,
				infinite: false,
				useTransform: true,
				speed: 400,
				cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
			});

			$('.cel-slick-featured-nav > div')
			.on('init', function(event, slick) {
				$('.cel-slick-featured-nav .slick-slide.slick-current').addClass('is-active');
			})
			.slick({
				slidesToShow: 4,
				slidesToScroll: 4,
				dots: false,
				focusOnSelect: false,
				infinite: false,
				/*
				responsive: [{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				}, {
					breakpoint: 640,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
					}
				}, {
					breakpoint: 420,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
				}
				}]*/
			});

			$('.cel-slick-featured-single').on('afterChange', function(event, slick, currentSlide) {
				
				$( '.cel-slick-featured-nav > div' ).slick('slickGoTo', currentSlide);
				var currrentNavSlideElem = '.cel-slick-featured-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
				$('.cel-slick-featured-nav .slick-slide.is-active').removeClass('is-active');
				$(currrentNavSlideElem).addClass('is-active');
				
			});

			$('.cel-slick-featured-nav > div').on('click', '.slick-slide', function(event) {
				
				event.preventDefault();
				var goToSingleSlide = $(this).data('slick-index');

				$('.cel-slick-featured-single').slick('slickGoTo', goToSingleSlide);
				
			});
			
		//}		
		
		
		
	});	
	
})(jQuery);