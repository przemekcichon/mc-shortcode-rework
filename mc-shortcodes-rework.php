<?php
/*
Plugin Name: MC Shortcodes Rework
*/ 

// Service Highlight =========================================================================== >	
if( !function_exists( 'mediaconsult_service_highlight_rework' ) ) {
	function mediaconsult_service_highlight_rework( $atts, $content = null ) {
		extract( shortcode_atts( array(
			'class'			=> '',
			'title'			=> '',
			'icon'			=> '',
			'icon_type'		=> '',
			'background'	=> '',
      'url'     => '',
      'link'    => ''
		  ),
		  $atts ) );
		
		$mediaconsult_url = '';
    
    if ( 1 == $link ) {
      $mediaconsult_url = ' href="' . esc_url( $url ) . '"';
    }
		
    $mediaconsult_background = '';
		
		if ( $background ) {
			$mediaconsult_background = ' style="background-color: ' . esc_attr( $background ) . '; "';
		}
		
		
		$output = '';
		
      
		
      $output .= '<div class="cel-service-highlight ' .  esc_attr( $class ) . '">';

	$output .= '<a ' . $mediaconsult_url . ' class="celestial-button-fill celestial-button-skin" >';

          $output .= '<div class="serh-title-wrapper" ' . $mediaconsult_background . '>';

            if( $icon ) {
              if( $icon_type == 'icon' ) {
                $output .= '<i class="serh-icon ' . esc_attr( $icon ) . '"></i>';
              } else {
                $output .= '<img src="' . esc_url( $icon ) . '" class="serh-icon" alt="' . esc_attr( $title ) . '" />';
              }
            }
            if( $title ) {
              $output .= '<h4 class="serh-title">' . esc_html( $title ) . '</h4>';
            }

          $output .= '</div>';
	
	$output .= '</a>';
		
        $output .= '<div class="serh-content">' . do_shortcode( $content ) . '</div>';
     
     $output .= '</div>';
    
    
		
		
		return $output;
	 
	}
	add_shortcode( 'service_highlight_rework', 'mediaconsult_service_highlight_rework' );
} 
