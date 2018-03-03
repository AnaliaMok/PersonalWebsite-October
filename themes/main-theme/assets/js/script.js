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
  });

  function hideNavbar(){
    if($('.navbar__overlay').hasClass('visible')){
      $('.navbar__overlay').removeClass('visible');
      $('.navbar__menu-icon').css('display', 'block');

      // Re-display logo if on the work page
      if($('.work__wrapper').length !== 0 || $('.single-work').length !== 0 || $('.general__header').length !== 0){
        $('.navbar__logo').css('display', 'block');
      }
    }else{
      // Turn on overlay
      $('.navbar__overlay').addClass('visible');

      // Hide background stuff
      $('.navbar__logo').css('display', 'none');
    }
  }

  // Adjusting Navbar opacity
  var hasScrolled = false;
  $(document).scroll(function(){

    if($('.work__wrapper').length !== 0){
      // Skip functionality on work page
      return;
    }

    hasScrolled = true;
    setInterval(function(){
      if(hasScrolled){
        hasScrolled = false;

        // Check height of overlay
        var overlayHeight = $('.header').outerHeight();
        var scrollLocation = $(document).scrollTop();
        var offset = $('.navbar').outerHeight();

        if((scrollLocation) >= (overlayHeight - offset)){
          $('.navbar').addClass('navbar_solid');
          $('.navbar__logo').css('display', 'block');
        }else{
          $('.navbar').removeClass('navbar_solid');

          if($('.single-work').length === 0 && $('.general__header').length === 0){
            $('.navbar__logo').css('display', 'none');
          }
        }

      }

    }, 100);
  });

  if($('.work__wrapper').length !== 0){
    if($('.navbar').length !== 0){
      $('.navbar').addClass('navbar_solid');
      $('.navbar__logo').css('display', 'block');
    }
  }

  if($('.single-work').length !== 0 || $('.general__header').length !== 0){
    if($('.navbar').length !== 0){
      $('.navbar__logo').css('display', 'block');
    }
  }

})(jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBGaWxlIE5hbWU6IG1haW4uanNcclxuICogRGVzY3JpcHRpb246IE1haW4gc2NyaXB0IGZpbGUgZm9yIHdlYnNpdGUgaW50ZXJhY3Rpb25zXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uKCQpe1xyXG5cclxuICAvLyBOYXZiYXIgY2xpY2sgZXZlbnRcclxuICAkKCcubmF2YmFyX19tZW51LWljb24nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgaGlkZU5hdmJhcigpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBBbGxvdyBvdmVybGF5IHRvIGNvdW50IGFzIGNsb3NpbmcgbmF2aWdhdGlvblxyXG4gICQoJy5uYXZiYXJfX292ZXJsYXknKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgaGlkZU5hdmJhcigpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBPcGVuIE5hdmlnYXRpb24gQ2xvc2UgQnV0dG9uXHJcbiAgJCgnI25hdmJhcl9fY2xvc2UnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgJCgnLm5hdmJhcl9fb3ZlcmxheScpLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhpZGVOYXZiYXIoKXtcclxuICAgIGlmKCQoJy5uYXZiYXJfX292ZXJsYXknKS5oYXNDbGFzcygndmlzaWJsZScpKXtcclxuICAgICAgJCgnLm5hdmJhcl9fb3ZlcmxheScpLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XHJcbiAgICAgICQoJy5uYXZiYXJfX21lbnUtaWNvbicpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG5cclxuICAgICAgLy8gUmUtZGlzcGxheSBsb2dvIGlmIG9uIHRoZSB3b3JrIHBhZ2VcclxuICAgICAgaWYoJCgnLndvcmtfX3dyYXBwZXInKS5sZW5ndGggIT09IDAgfHwgJCgnLnNpbmdsZS13b3JrJykubGVuZ3RoICE9PSAwIHx8ICQoJy5nZW5lcmFsX19oZWFkZXInKS5sZW5ndGggIT09IDApe1xyXG4gICAgICAgICQoJy5uYXZiYXJfX2xvZ28nKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIC8vIFR1cm4gb24gb3ZlcmxheVxyXG4gICAgICAkKCcubmF2YmFyX19vdmVybGF5JykuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcclxuXHJcbiAgICAgIC8vIEhpZGUgYmFja2dyb3VuZCBzdHVmZlxyXG4gICAgICAkKCcubmF2YmFyX19sb2dvJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEFkanVzdGluZyBOYXZiYXIgb3BhY2l0eVxyXG4gIHZhciBoYXNTY3JvbGxlZCA9IGZhbHNlO1xyXG4gICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpe1xyXG5cclxuICAgIGlmKCQoJy53b3JrX193cmFwcGVyJykubGVuZ3RoICE9PSAwKXtcclxuICAgICAgLy8gU2tpcCBmdW5jdGlvbmFsaXR5IG9uIHdvcmsgcGFnZVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaGFzU2Nyb2xsZWQgPSB0cnVlO1xyXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgaWYoaGFzU2Nyb2xsZWQpe1xyXG4gICAgICAgIGhhc1Njcm9sbGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGhlaWdodCBvZiBvdmVybGF5XHJcbiAgICAgICAgdmFyIG92ZXJsYXlIZWlnaHQgPSAkKCcuaGVhZGVyJykub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICB2YXIgc2Nyb2xsTG9jYXRpb24gPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKTtcclxuICAgICAgICB2YXIgb2Zmc2V0ID0gJCgnLm5hdmJhcicpLm91dGVySGVpZ2h0KCk7XHJcblxyXG4gICAgICAgIGlmKChzY3JvbGxMb2NhdGlvbikgPj0gKG92ZXJsYXlIZWlnaHQgLSBvZmZzZXQpKXtcclxuICAgICAgICAgICQoJy5uYXZiYXInKS5hZGRDbGFzcygnbmF2YmFyX3NvbGlkJyk7XHJcbiAgICAgICAgICAkKCcubmF2YmFyX19sb2dvJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAkKCcubmF2YmFyJykucmVtb3ZlQ2xhc3MoJ25hdmJhcl9zb2xpZCcpO1xyXG5cclxuICAgICAgICAgIGlmKCQoJy5zaW5nbGUtd29yaycpLmxlbmd0aCA9PT0gMCAmJiAkKCcuZ2VuZXJhbF9faGVhZGVyJykubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fbG9nbycpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0sIDEwMCk7XHJcbiAgfSk7XHJcblxyXG4gIGlmKCQoJy53b3JrX193cmFwcGVyJykubGVuZ3RoICE9PSAwKXtcclxuICAgIGlmKCQoJy5uYXZiYXInKS5sZW5ndGggIT09IDApe1xyXG4gICAgICAkKCcubmF2YmFyJykuYWRkQ2xhc3MoJ25hdmJhcl9zb2xpZCcpO1xyXG4gICAgICAkKCcubmF2YmFyX19sb2dvJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZigkKCcuc2luZ2xlLXdvcmsnKS5sZW5ndGggIT09IDAgfHwgJCgnLmdlbmVyYWxfX2hlYWRlcicpLmxlbmd0aCAhPT0gMCl7XHJcbiAgICBpZigkKCcubmF2YmFyJykubGVuZ3RoICE9PSAwKXtcclxuICAgICAgJCgnLm5hdmJhcl9fbG9nbycpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pKGpRdWVyeSk7XHJcbiJdfQ==
