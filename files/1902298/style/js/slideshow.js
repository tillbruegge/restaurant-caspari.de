var slideshow = {
  
  /*
  *
  * Diese Typen sind momentan verfügbar:
  *
  * 'fade'   : Überblenden zwischen den Bildern
  * 'grow'   : Neues Bild wächst aus der Bildmitte heraus
  * 'center' : Bild schiebt sich aus der Mitte heraus
  * 'blinds' : Bild schiebt sich von oben über das vorherige Bild
  * 
  */
  type      : 'fade',
  
  /*
  *
  * Gesamtdauer der Slideshow in Sekunden
  *
  */
  duration  : 20,
  
  
  pictures  : $A,
  index     : 0,
  delay     : 0,
  lastframe : {},
  
  setPictures : function(pictures) {
    slideshow.pictures = pictures;
  },
  
  setType : function(type) {
    slideshow.type = type;
  },

  setDuration : function(duration) {
    slideshow.duration = duration;
  },
  
  initSlideshow : function() {
    for (i = 1; i < slideshow.pictures.length; i++) {
      var display = !i ? 'block' : 'none';
      
      $('slideshow').insert({bottom:'<div class="picture" style="display:none" id="slideshow_' + i + '"><img src="' + slideshow.pictures[i] + '" alt="" /></div>'});
    }
    
    slideshow.delay = (slideshow.duration / slideshow.pictures.length) * 1000;
    slideshow.index = slideshow.pictures.length;
  },
  
  startSlideshow : function() {
    switch (slideshow.type) {
      case 'grow':
        setTimeout("slideshow.growSlides(0, 'true')", slideshow.delay);
        break;
      case 'center':
        setTimeout("slideshow.blindSlides(0, 'true')", slideshow.delay);
        break;
      case 'blind':
      case 'blinds':
        setTimeout("slideshow.blindSlides(0, 'false')", slideshow.delay);
        break;
      default:
        setTimeout("slideshow.fadeSlides(0)", slideshow.delay);
    }
  },
  
  growSlides : function(frame, center) {
      slideshow.index++;
      frame = (frame == (slideshow.pictures.length - 1)) ? 0 : (frame + 1);
      
      $('slideshow_' + frame).style.zIndex = slideshow.index;
      
      setTimeout("Effect.Grow('slideshow_" + frame + "')", 1);
      setTimeout("slideshow.growSlides(" + frame + ")", (slideshow.delay * 2));
  },
  
  blindSlides : function(frame, center) {
      slideshow.index++;
      frame = (frame == (slideshow.pictures.length - 1)) ? 0 : (frame + 1);
      
      $('slideshow_' + frame).style.zIndex = slideshow.index;
      
      setTimeout("Effect.BlindDown('slideshow_" + frame + "', {scaleFromCenter :" + center + "})", 1);
      setTimeout("slideshow.blindSlides(" + frame + ", " + center + ")", (slideshow.delay * 2));
  },
  
  fadeSlides : function(frame) {
      Effect.Fade('slideshow_' + frame);
      frame = (frame == (slideshow.pictures.length - 1)) ? 0 : (frame + 1);
      
      setTimeout("Effect.Appear('slideshow_" + frame + "')", 0);
      setTimeout("slideshow.fadeSlides(" + frame + ")", (slideshow.delay * 2));
  }
}