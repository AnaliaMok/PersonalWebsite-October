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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogRmlsZSBOYW1lOiBtYWluLmpzXHJcbiAqIERlc2NyaXB0aW9uOiBNYWluIHNjcmlwdCBmaWxlIGZvciB3ZWJzaXRlIGludGVyYWN0aW9uc1xyXG4gKi9cclxuXHJcbihmdW5jdGlvbigkKXtcclxuXHJcbiAgLy8gTmF2YmFyIGNsaWNrIGV2ZW50XHJcbiAgJCgnLm5hdmJhcl9fbWVudS1pY29uJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgIGhpZGVOYXZiYXIoKTtcclxuICB9KTtcclxuXHJcbiAgLy8gQWxsb3cgb3ZlcmxheSB0byBjb3VudCBhcyBjbG9zaW5nIG5hdmlnYXRpb25cclxuICAkKCcubmF2YmFyX19vdmVybGF5JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgIGhpZGVOYXZiYXIoKTtcclxuICB9KTtcclxuXHJcbiAgLy8gT3BlbiBOYXZpZ2F0aW9uIENsb3NlIEJ1dHRvblxyXG4gICQoJyNuYXZiYXJfX2Nsb3NlJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICQoJy5uYXZiYXJfX292ZXJsYXknKS5yZW1vdmVDbGFzcygndmlzaWJsZScpO1xyXG4gICAgY29uc29sZS5sb2coJ1NWRyBDbGlja2VkJyk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhpZGVOYXZiYXIoKXtcclxuICAgIGlmKCQoJy5uYXZiYXJfX292ZXJsYXknKS5oYXNDbGFzcygndmlzaWJsZScpKXtcclxuICAgICAgJCgnLm5hdmJhcl9fb3ZlcmxheScpLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XHJcbiAgICAgICQoJy5uYXZiYXJfX21lbnUtaWNvbicpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAkKCcubmF2YmFyX19vdmVybGF5JykuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcclxuICAgICAgJCgnLm5hdmJhcl9fbWVudS1pY29uJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEFkanVzdGluZyBOYXZiYXIgb3BhY2l0eVxyXG4gIHZhciBoYXNTY3JvbGxlZCA9IGZhbHNlO1xyXG4gICQoJ2JvZHknKS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgIGhhc1Njcm9sbGVkID0gdHJ1ZTtcclxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgIGlmKGhhc1Njcm9sbGVkKXtcclxuICAgICAgICBoYXNTY3JvbGxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBoZWlnaHQgb2Ygb3ZlcmxheVxyXG4gICAgICAgIHZhciBvdmVybGF5SGVpZ2h0ID0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgdmFyIHNjcm9sbExvY2F0aW9uID0gJCgnYm9keScpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgIHZhciBvZmZzZXQgPSAkKCcubmF2YmFyJykub3V0ZXJIZWlnaHQoKTtcclxuXHJcbiAgICAgICAgaWYoKHNjcm9sbExvY2F0aW9uKSA+PSAob3ZlcmxheUhlaWdodCAtIG9mZnNldCkpe1xyXG4gICAgICAgICAgJCgnLm5hdmJhcicpLmFkZENsYXNzKCduYXZiYXJfc29saWQnKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICQoJy5uYXZiYXInKS5yZW1vdmVDbGFzcygnbmF2YmFyX3NvbGlkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0sIDEwMCk7XHJcbiAgfSk7XHJcblxyXG59KShqUXVlcnkpO1xyXG4iXX0=
