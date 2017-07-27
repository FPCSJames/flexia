/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function( $ ) {

	// Site title and description.
	wp.customize( 'blogname', function( value ) {
		value.bind( function( to ) {
			$( '.site-title a' ).text( to );
		} );
	} );
	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( to ) {
			$( '.site-description' ).text( to );
		} );
	} );

	// Header text color.
	wp.customize( 'header_textcolor', function( value ) {
		value.bind( function( to ) {
			if ( 'blank' === to ) {
				$( '.site-title, .site-description' ).css( {
					'clip': 'rect(1px, 1px, 1px, 1px)',
					'position': 'absolute'
				} );
			} else {
				$( '.site-title, .site-description' ).css( {
					'clip': 'auto',
					'position': 'relative'
				} );
				$( '.site-title a, .site-description' ).css( {
					'color': to
				} );
			}
		} );
	} );

	// Container width 

    wp.customize( 'container_width', function( value ) {
        value.bind( function( to ) {            
            $( '.flexia-container.width' ).css( 'width', to + '%' );            
        } );
    });  

    wp.customize( 'container_max_width', function( value ) {
        value.bind( function( to ) {            
            $( '.flexia-container.max' ).css( 'max-width', to + 'px' );            
        } );
    });  

	// Post Container width 

    wp.customize( 'post_width', function( value ) {
        value.bind( function( to ) {            
            $( '.single-post .entry-content-wrapper' ).css( 'width', to + '%' );            
        } );
    });  

    wp.customize( 'post_max_width', function( value ) {
        value.bind( function( to ) {            
            $( '.single-post .entry-content-wrapper' ).css( 'max-width', to + 'px' );            
        } );
    });  

    wp.customize( 'blog_bg_color', function( value ) {
        value.bind( function( to ) {            
            $( 'body.blog, body.archive, body.single-post' ).css( 'background-color', to );            
        } );
    });  

    wp.customize( 'post_content_bg_color', function( value ) {
        value.bind( function( to ) {            
            $( 'body:not(.single-post) .flexia-wrapper > .content-area  article.hentry' ).css( 'background-color', to );            
            $( '.entry-content.single-post-entry' ).css( 'background-color', to );            
        } );
    });  

    wp.customize( 'post_meta_bg_color', function( value ) {
        value.bind( function( to ) {            
            $( '.single-post .entry-header.single-blog-meta' ).css( 'background-color', to );            
        } );
    });  

    wp.customize( 'sidebar_widget_bg_color', function( value ) {
        value.bind( function( to ) {            
            $( '.flexia-sidebar .widget' ).css( 'background-color', to );            
        } );
    });  

    // Blog logo width

    wp.customize( 'blog_logo_width', function( value ) {
        value.bind( function( to ) {            
            $( '.header-content .flexia-blog-logo' ).css( 'width', to + 'px' );            
        } );
    });  

    // Blog title and font size

    wp.customize( 'blog_title', function( value ) {
        value.bind( function( to ) {            
            $( '.blog-header .header-content > .page-title' ).text( to );            
          
        } );
    });  

    wp.customize( 'blog_title_font_size', function( value ) {
        value.bind( function( to ) {            
            $( '.blog-header .header-content > .page-title' ).css( 'font-size', to + 'px' );            
          
        } );
    });  

    // Blog description and font size

    wp.customize( 'blog_desc', function( value ) {
        value.bind( function( to ) {            
            $( '.header-content .blog-desc' ).text( to );            
          
        } );
    }); 

    wp.customize( 'blog_desc_font_size', function( value ) {
        value.bind( function( to ) {            
            $( '.header-content .blog-desc' ).css( 'font-size', to + 'px' );            
            $( '.header-content .archive-description > p' ).css( 'font-size', to + 'px' );            
        } );
    });  

    // Sidebars width 

    wp.customize( 'left_sidebar_width', function( value ) {
        value.bind( function( to ) {            
            $( '.flexia-sidebar-left' ).css( 'width', to + 'px' );            
        } );
    });  

    wp.customize( 'right_sidebar_width', function( value ) {
        value.bind( function( to ) {            
            $( '.flexia-sidebar-right' ).css( 'width', to + 'px' );            
        } );
    });  

    // Header Area 

    wp.customize( 'header_widget_area_bg_color', function( value ) {
        value.bind( function( to ) {            
            $( '.flexia-header-widget-area' ).css( 'background-color', to );            
        } );
    });  

    wp.customize( 'flexia_topbar_bg_color', function( value ) {
        value.bind( function( to ) {            
            $( '.flexia-topbar' ).css( 'background-color', to );            
        } );
    });  

    wp.customize( 'flexia_navbar_bg_color', function( value ) {
        value.bind( function( to ) {            
            $( '.flexia-navbar' ).css( 'background-color', to );            
        } );
    });  

    // Footer Area 

    wp.customize( 'footer_widget_area_bg_color', function( value ) {
        value.bind( function( to ) {            
            $( '.flexia-footer-widget-area' ).css( 'background-color', to );            
        } );
    });  

    wp.customize( 'flexia_footer_bg_color', function( value ) {
        value.bind( function( to ) {            
            $( '.flexia-site-footer' ).css( 'background-color', to );            
        } );
    });  

    wp.customize( 'flexia_footer_content_color', function( value ) {
        value.bind( function( to ) {            
            $( '.flexia-site-footer .site-info' ).css( 'color', to );            
        } );
    });  
    
    wp.customize( 'flexia_footer_link_color', function( value ) {
        value.bind( function( to ) {            
            $( '.flexia-site-footer .site-info a, .flexia-footer-menu li a' ).css( 'color', to );                      
        } );
    });  

    wp.customize( 'flexia_footer_link_hover_color', function( value ) {
        value.bind( function( to ) {       
		    var colorLink=$(".flexia-site-footer .site-info a, .flexia-footer-menu li a").css('color');
		    $(".flexia-site-footer .site-info a, .flexia-footer-menu li a").hover(
		    function() {
		        //mouse over
		        $(this).css('color', to)
		    }, function() {
		        //mouse out
		        $(this).css('color', colorLink)
		    });

        } );
    });  
 

} )( jQuery );
