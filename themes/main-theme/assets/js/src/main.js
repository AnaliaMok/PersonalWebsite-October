/**
 * File Name: main.js
 * Description: Main script file for website interactions
 */

(function($){

  // Navbar click event
  $('.navbar__menu-icon').click(function(){
    hideNavbar();
  });

  // Allow overlay to count as closing navigation
  $('.navbar__overlay').click(function(){
    hideNavbar();
  });

  // Open Navigation Close Button
  $('#navbar__close').click(function(){
    $('.navbar__overlay').removeClass('visible');
    console.log('SVG Clicked');
  });

  function hideNavbar(){
    if($('.navbar__overlay').hasClass('visible')){
      $('.navbar__overlay').removeClass('visible');
      $('.navbar__menu-icon').css('display', 'inline-block');
    }else{
      $('.navbar__overlay').addClass('visible');
      $('.navbar__menu-icon').css('display', 'none');
    }
  }

  // Adjusting Navbar opacity
  var hasScrolled = false;
  $('body').scroll(function(){
    hasScrolled = true;
    setInterval(function(){
      if(hasScrolled){
        hasScrolled = false;

        // Check height of overlay
        var overlayHeight = $('.header').outerHeight();
        var scrollLocation = $('body').scrollTop();
        var offset = $('.navbar').outerHeight();

        if((scrollLocation) >= (overlayHeight - offset)){
          $('.navbar').addClass('navbar_solid');
        }else{
          $('.navbar').removeClass('navbar_solid');
        }

      }

    }, 100);
  });

})(jQuery);
