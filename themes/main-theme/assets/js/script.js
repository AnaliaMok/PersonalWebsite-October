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

  $(document).ready(function(){
    // Set transform attribute on svgs - precaution
    $('svg').each(function(){
      var transform = $(this).css('transform');
      $(this).attr('transform', transform);
    });
  });

})(jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEZpbGUgTmFtZTogbWFpbi5qc1xyXG4gKiBEZXNjcmlwdGlvbjogTWFpbiBzY3JpcHQgZmlsZSBmb3Igd2Vic2l0ZSBpbnRlcmFjdGlvbnNcclxuICovXHJcblxyXG4oZnVuY3Rpb24oJCl7XHJcblxyXG4gIC8vIE5hdmJhciBjbGljayBldmVudFxyXG4gICQoJy5uYXZiYXJfX21lbnUtaWNvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICBoaWRlTmF2YmFyKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIEFsbG93IG92ZXJsYXkgdG8gY291bnQgYXMgY2xvc2luZyBuYXZpZ2F0aW9uXHJcbiAgJCgnLm5hdmJhcl9fb3ZlcmxheScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICBoaWRlTmF2YmFyKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIE9wZW4gTmF2aWdhdGlvbiBDbG9zZSBCdXR0b25cclxuICAkKCcjbmF2YmFyX19jbG9zZScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcubmF2YmFyX19vdmVybGF5JykucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcclxuICAgIGNvbnNvbGUubG9nKCdTVkcgQ2xpY2tlZCcpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBoaWRlTmF2YmFyKCl7XHJcbiAgICBpZigkKCcubmF2YmFyX19vdmVybGF5JykuaGFzQ2xhc3MoJ3Zpc2libGUnKSl7XHJcbiAgICAgICQoJy5uYXZiYXJfX292ZXJsYXknKS5yZW1vdmVDbGFzcygndmlzaWJsZScpO1xyXG4gICAgICAkKCcubmF2YmFyX19tZW51LWljb24nKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgJCgnLm5hdmJhcl9fb3ZlcmxheScpLmFkZENsYXNzKCd2aXNpYmxlJyk7XHJcbiAgICAgICQoJy5uYXZiYXJfX21lbnUtaWNvbicpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBZGp1c3RpbmcgTmF2YmFyIG9wYWNpdHlcclxuICB2YXIgaGFzU2Nyb2xsZWQgPSBmYWxzZTtcclxuICAkKCdib2R5Jykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbiAgICBoYXNTY3JvbGxlZCA9IHRydWU7XHJcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICBpZihoYXNTY3JvbGxlZCl7XHJcbiAgICAgICAgaGFzU2Nyb2xsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaGVpZ2h0IG9mIG92ZXJsYXlcclxuICAgICAgICB2YXIgb3ZlcmxheUhlaWdodCA9ICQoJy5oZWFkZXInKS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgIHZhciBzY3JvbGxMb2NhdGlvbiA9ICQoJ2JvZHknKS5zY3JvbGxUb3AoKTtcclxuICAgICAgICB2YXIgb2Zmc2V0ID0gJCgnLm5hdmJhcicpLm91dGVySGVpZ2h0KCk7XHJcblxyXG4gICAgICAgIGlmKChzY3JvbGxMb2NhdGlvbikgPj0gKG92ZXJsYXlIZWlnaHQgLSBvZmZzZXQpKXtcclxuICAgICAgICAgICQoJy5uYXZiYXInKS5hZGRDbGFzcygnbmF2YmFyX3NvbGlkJyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAkKCcubmF2YmFyJykucmVtb3ZlQ2xhc3MoJ25hdmJhcl9zb2xpZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9LCAxMDApO1xyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgLy8gU2V0IHRyYW5zZm9ybSBhdHRyaWJ1dGUgb24gc3ZncyAtIHByZWNhdXRpb25cclxuICAgICQoJ3N2ZycpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgdmFyIHRyYW5zZm9ybSA9ICQodGhpcykuY3NzKCd0cmFuc2Zvcm0nKTtcclxuICAgICAgJCh0aGlzKS5hdHRyKCd0cmFuc2Zvcm0nLCB0cmFuc2Zvcm0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG59KShqUXVlcnkpO1xyXG4iXX0=
