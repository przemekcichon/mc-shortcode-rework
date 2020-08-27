<?php
/*
Plugin Name: MC Shortcodes
Plugin URI: http://www.celestialthemes.com
Description: Shortcodes plugin built for Media Consult
Author: Celestial Themes
Author URI: http://www.celestialthemes.com
Version: 1.0
License: GNU General Public License version 2.0
License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/ 


if ( ! class_exists( 'MediaConsultShortcodes' ) ) {

	class MediaConsultShortcodes {


		/*
		 *
		 * Main Constructor
		 *
		 */
		public function __construct() {

			// Define path
			$this->dir_path = plugin_dir_path( __FILE__ );


			if ( !is_admin() ) {

				add_action( 'wp_enqueue_scripts', array( $this, 'load_scripts' ) );

			}

			// Test domain
			add_action( 'plugins_loaded', array( $this, 'load_text_domain' ) );


			// The actual shortcode functions
			require_once( $this -> dir_path . '/shortcodes/shortcodes.php' );

			
		}
		
		

		/*
		 *
		 * Load Text Domain for translations
		 *
		 */
		function load_text_domain() {
			load_plugin_textdomain( 'mediaconsult', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
		}


		
		/*
		 *
		 * Registers/Enqueues all scripts and styles
		 *
		 */
		function load_scripts() {


			// Define js directory
			$js_dir = plugin_dir_url( __FILE__ ) . 'shortcodes/js/';

			// Define CSS directory
			$css_dir = plugin_dir_url( __FILE__ ) . 'shortcodes/css/';

			// Core jQuery
			wp_enqueue_script( 'jquery' );
			
			
			// Slick Carousel
			wp_register_script( 'slick-carousel', $js_dir . 'slick.min.js', array ( 'jquery' ), '1.8', true );
			wp_register_script( 'slick-carousel-call', $js_dir . 'slick.call.js', array ( 'slick-carousel' ), '1.0', true );
			
			
			// Google Maps
			wp_register_script( 'googlemap_api', 'https://maps.googleapis.com/maps/api/js', array('jquery') );
      		wp_register_script( 'googlemap_api_call', $js_dir . 'googlemap_api_call.js', array('jquery') );
			
			
			// Magnific Popup
			wp_register_script( 'magnific-popup-js', plugin_dir_url( __FILE__ ) . 'shortcodes/js/magnific-popup.min.js', array('jquery'), false, true );	
			wp_register_script( 'magnific-popup-call-js', plugin_dir_url( __FILE__ ) . 'shortcodes/js/magnific.popup.call.js', array('jquery', 'magnific-popup-js'), false, true );	
			

			// Tabs
			wp_register_script( 'tabs-js', $js_dir . 'tabs.js', array('jquery'), false, true );
			wp_register_script( 'tabs-call', $js_dir . 'tabs.call.js', array('jquery', 'tabs-js'), false, true );
			
			
			// CSS
			wp_enqueue_style( 'mediaconsult_shortcodes_styles', $css_dir . 'mediaconsult_shortcodes_styles.css' );

		}


		
	}

	// Start things up
	$celestial_shortcodes = new MediaConsultShortcodes();

}


?>