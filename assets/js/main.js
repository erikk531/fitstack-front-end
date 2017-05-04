$(document).ready(function() {
 
  $("#bg-slider").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 100,
      autoPlay: 5000,
      paginationSpeed : 100,
      singleItem:true,
      mouseDrag: false,
      transitionStyle : "fade"
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false 
  });

  $("#testimonial-slider").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 100,
      pagination : true,
      paginationSpeed : 100,
      singleItem:true,
      mouseDrag: false,
      transitionStyle : "goDown"
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false 
  });

    $('.more-tech a').click(function(e){
      e.preventDefault();
      var $this = $(this);
      $this.toggleClass('more-tech a');
      if($this.hasClass('more-tech a')){
        $this.text('View less technology');     
      } else {
        $this.text('View more technology');
      }
    });

    $('.more-tech a').click(function(){
      $('.table tr.hide-tech').toggle();
    });

    /**
     * Match Height
     */
     $(function() {
      $('.single-tech').matchHeight();
    });

 
})

// Initializing WOW.JS

 new WOW().init();