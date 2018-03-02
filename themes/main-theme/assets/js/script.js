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
    }else{
      $('.navbar__overlay').addClass('visible');
      
      if($('.single-work').length === 0){
        $('.navbar__logo').css('display', 'none');
      }
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

          if($('.single-work').length === 0){
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

  if($('.single-work').length !== 0){
    if($('.navbar').length !== 0){
      $('.navbar__logo').css('display', 'block');
    }
  }

})(jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEZpbGUgTmFtZTogbWFpbi5qc1xyXG4gKiBEZXNjcmlwdGlvbjogTWFpbiBzY3JpcHQgZmlsZSBmb3Igd2Vic2l0ZSBpbnRlcmFjdGlvbnNcclxuICovXHJcblxyXG4oZnVuY3Rpb24oJCl7XHJcblxyXG4gIC8vIE5hdmJhciBjbGljayBldmVudFxyXG4gICQoJy5uYXZiYXJfX21lbnUtaWNvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICBoaWRlTmF2YmFyKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIEFsbG93IG92ZXJsYXkgdG8gY291bnQgYXMgY2xvc2luZyBuYXZpZ2F0aW9uXHJcbiAgJCgnLm5hdmJhcl9fb3ZlcmxheScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICBoaWRlTmF2YmFyKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIE9wZW4gTmF2aWdhdGlvbiBDbG9zZSBCdXR0b25cclxuICAkKCcjbmF2YmFyX19jbG9zZScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcubmF2YmFyX19vdmVybGF5JykucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gaGlkZU5hdmJhcigpe1xyXG4gICAgaWYoJCgnLm5hdmJhcl9fb3ZlcmxheScpLmhhc0NsYXNzKCd2aXNpYmxlJykpe1xyXG4gICAgICAkKCcubmF2YmFyX19vdmVybGF5JykucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcclxuICAgICAgJCgnLm5hdmJhcl9fbWVudS1pY29uJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgJCgnLm5hdmJhcl9fb3ZlcmxheScpLmFkZENsYXNzKCd2aXNpYmxlJyk7XHJcbiAgICAgIFxyXG4gICAgICBpZigkKCcuc2luZ2xlLXdvcmsnKS5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICQoJy5uYXZiYXJfX2xvZ28nKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBZGp1c3RpbmcgTmF2YmFyIG9wYWNpdHlcclxuICB2YXIgaGFzU2Nyb2xsZWQgPSBmYWxzZTtcclxuICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuXHJcbiAgICBpZigkKCcud29ya19fd3JhcHBlcicpLmxlbmd0aCAhPT0gMCl7XHJcbiAgICAgIC8vIFNraXAgZnVuY3Rpb25hbGl0eSBvbiB3b3JrIHBhZ2VcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc1Njcm9sbGVkID0gdHJ1ZTtcclxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgIGlmKGhhc1Njcm9sbGVkKXtcclxuICAgICAgICBoYXNTY3JvbGxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBoZWlnaHQgb2Ygb3ZlcmxheVxyXG4gICAgICAgIHZhciBvdmVybGF5SGVpZ2h0ID0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgdmFyIHNjcm9sbExvY2F0aW9uID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgdmFyIG9mZnNldCA9ICQoJy5uYXZiYXInKS5vdXRlckhlaWdodCgpO1xyXG5cclxuICAgICAgICBpZigoc2Nyb2xsTG9jYXRpb24pID49IChvdmVybGF5SGVpZ2h0IC0gb2Zmc2V0KSl7XHJcbiAgICAgICAgICAkKCcubmF2YmFyJykuYWRkQ2xhc3MoJ25hdmJhcl9zb2xpZCcpO1xyXG4gICAgICAgICAgJCgnLm5hdmJhcl9fbG9nbycpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCduYXZiYXJfc29saWQnKTtcclxuXHJcbiAgICAgICAgICBpZigkKCcuc2luZ2xlLXdvcmsnKS5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyX19sb2dvJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSwgMTAwKTtcclxuICB9KTtcclxuXHJcbiAgaWYoJCgnLndvcmtfX3dyYXBwZXInKS5sZW5ndGggIT09IDApe1xyXG4gICAgaWYoJCgnLm5hdmJhcicpLmxlbmd0aCAhPT0gMCl7XHJcbiAgICAgICQoJy5uYXZiYXInKS5hZGRDbGFzcygnbmF2YmFyX3NvbGlkJyk7XHJcbiAgICAgICQoJy5uYXZiYXJfX2xvZ28nKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmKCQoJy5zaW5nbGUtd29yaycpLmxlbmd0aCAhPT0gMCl7XHJcbiAgICBpZigkKCcubmF2YmFyJykubGVuZ3RoICE9PSAwKXtcclxuICAgICAgJCgnLm5hdmJhcl9fbG9nbycpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pKGpRdWVyeSk7XHJcbiJdfQ==
