jQuery(document).ready(function() {
	
	"use strict";
	
	jQuery( '.magnific-popup' ).magnificPopup({
		type:'image',
		gallery:{ enabled: true },
		zoom: {
			enabled: true, // By default it's false, so don't forget to enable it
			duration: 300, // duration of the effect, in milliseconds
			easing: 'ease-in-out', // CSS transition easing function 
		
			// The "opener" function should return the element from which popup will be zoomed in
			// and to which popup will be scaled down
			// By defailt it looks for an image tag:
			opener: function(openerElement) {
		  	// openerElement is the element on which popup was initialized, in this case its <a> tag
		  	// you don't need to add "opener" option if this code matches your needs, it's defailt one.
		  	return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		}		
		
		
	});
	
	jQuery( '.magnific-popup-single' ).magnificPopup({
		type:'image',
		gallery:{ enabled: false },
		zoom: {
			enabled: true, // By default it's false, so don't forget to enable it
			duration: 300, // duration of the effect, in milliseconds
			easing: 'ease-in-out', // CSS transition easing function 
		
			// The "opener" function should return the element from which popup will be zoomed in
			// and to which popup will be scaled down
			// By defailt it looks for an image tag:
			opener: function(openerElement) {
		  	// openerElement is the element on which popup was initialized, in this case its <a> tag
		  	// you don't need to add "opener" option if this code matches your needs, it's defailt one.
		  	return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		}		
		
		
	});	
	
	jQuery( '.magnific-popup-video' ).magnificPopup({
		type: 'iframe',
		gallery:{ enabled:true }
		
	});
	
	jQuery( '.magnific-popup-animation' ).magnificPopup({
	  type: 'inline',

	  fixedContentPos: false,
	  fixedBgPos: true,

	  overflowY: 'auto',

	  closeBtnInside: true,
	  preloader: false,

	  midClick: true,
	  removalDelay: 300,
	  mainClass: 'cel-mfp-slide-bottom'
	});	
	
	
});