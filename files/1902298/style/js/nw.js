jQuery(document).ready(function($){

  $(function(){
  
  /* Fade-Out Languages Höhe Content
  ----------------------------------------- */
    $(window).scroll(function(){
      if ($(window).scrollTop() > 50 ) {
          $('.languages').fadeOut('slow');
      } else if ($(window).scrollTop() < 100) {
          $('.languages').fadeIn('slow');
      }
    });

    
    /* Lightbox
    ------------------------------------------ */

    if(document.getElementById('lightbox')){
      $( function(){
      
        var overlayOn = function()
              {
                $( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
                $(".meanmenu-reveal").hide();
              },
            overlayOff = function()
              {
                $( '#imagelightbox-overlay' ).remove();
                $(".meanmenu-reveal").show();
              },
            activityIndicatorOn = function()
              {
                $( '<div id="imagelightbox-loading"><div></div></div>' ).appendTo( 'body' );
              },
            activityIndicatorOff = function()
              {
                $( '#imagelightbox-loading' ).remove();
              },
            captionOn = function()
              {
                var description = $( 'a[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"] img' ).attr( 'alt' );
                if( description.length > 0 && description != "/" )
                  $( '<div id="imagelightbox-caption">' + description + '</div>' ).appendTo( 'body' );
              },
            captionOff = function()
              {
                $( '#imagelightbox-caption' ).remove();
              },
            closeButtonOff = function()
              {
                $( '#imagelightbox-close' ).remove();
              },
            closeButtonOn = function( instance )
              {
                $( '<a href="#" id="imagelightbox-close">Close</a>' ).appendTo( 'body' ).on( 'click touchend', function(){ $( this ).remove(); instance.quitImageLightbox(); return false; });
              };

            // ARROWS

            arrowsOn = function( instance, selector )
            {
              var $arrows = $( '<button type="button" class="imagelightbox-arrow imagelightbox-arrow-left"></button><button type="button" class="imagelightbox-arrow imagelightbox-arrow-right"></button>' );

              $arrows.appendTo( 'body' );

              $arrows.on( 'click touchend', function( e )
              {
                e.preventDefault();

                var $this = $( this ),
                  $target = $( selector + '[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"]' ),
                  index = $target.index( selector );

                if( $this.hasClass( 'imagelightbox-arrow-left' ) )
                {
                  index = index - 1;
                  if( !$( selector ).eq( index ).length )
                    index = $( selector ).length;
                }
                else
                {
                  index = index + 1;
                  if( !$( selector ).eq( index ).length )
                    index = 0;
                }

                instance.switchImageLightbox( index );
                return false;
              });
            },
            arrowsOff = function()
            {
              $( '.imagelightbox-arrow' ).remove();
            };

            if($('ul').find('.lightbox').length) {
              $('.lightbox').each(function() {
                $(this).on('click', function() {
                  var randomNumber = Math.random().toString(36).slice(-8);
                    
                  $(this).closest('ul').attr('rel', randomNumber);

                  var newRel = $(this).closest('ul').attr('rel');
                  var selectorF = 'ul[rel="' + newRel + '"] a';
                  var instanceF = $( selectorF ).off().imageLightbox(
                    {
                      onStart: function() { overlayOn(); closeButtonOn( instanceF ); arrowsOn( instanceF, selectorF ); },
                      onEnd: function() { overlayOff(); arrowsOff(); captionOff(); closeButtonOff(); activityIndicatorOff(); },
                      onLoadStart: function() { captionOff(); activityIndicatorOn(); },
                      onLoadEnd: function() { $( '.imagelightbox-arrow' ).css( 'display', 'block' ); captionOn(); activityIndicatorOff(); }
                    }
                  );
                });
              });
            } 
            else {
              var selectorF = 'a.lightbox';
              var instanceF = $( selectorF ).off().imageLightbox(
                {
                  onStart: function() { overlayOn(); closeButtonOn( instanceF ); arrowsOn( instanceF, selectorF ); },
                  onEnd: function() { overlayOff(); arrowsOff(); captionOff(); closeButtonOff(); activityIndicatorOff(); },
                  onLoadStart: function() { captionOff(); activityIndicatorOn(); },
                  onLoadEnd: function() { $( '.imagelightbox-arrow' ).css( 'display', 'block' ); captionOn(); activityIndicatorOff(); }
                }
              );
            }
      
      });
    }
    
    
    /* Slideshow
    ------------------------------------------ */

    if(document.getElementById('rslides')){
      jQuery( function(){
        jQuery(".rslides").responsiveSlides();
      });
    };
    
  });
});