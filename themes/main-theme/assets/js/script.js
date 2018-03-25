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

  // Project Carousel

  if($('.project-carousel').length != 0){
    // Switch current active image based on thumbnail click
    $('.project-carousel__image-container').click(changeCurrentImage);

    // Switch current active image based on arrows
    $('.project-carousel__active__left-arrow').click(prevProjectImage);
    $('.project-carousel__active__right-arrow').click(nextProjectImage);
  }

  function changeCurrentImage(e){
    var target = e.target,
        targetId = target.getAttribute('data-id');
    var image = target.querySelector('img'),
        imageSrc = image.src;
    
    // Change current image
    var activeItem = $('.project-carousel__active'),
        activeImage = activeItem.find('img');
    
    activeImage[0].src = imageSrc;
    activeItem[0].setAttribute('data-id', targetId);

    // Swap which thumbnail has the active-thumbnail class
    $('.project-carousel__active-thumbnail').removeClass('project-carousel__active-thumbnail');
    target.classList.add('project-carousel__active-thumbnail');
  }

  function prevProjectImage(){
    var activeItem = $('.project-carousel__active'),
        activeImage = activeItem.find('img'),
        currentSlide = parseInt(activeItem.attr('data-id')),
        totalSlides = parseInt($('.project-carousel').attr('data-total'));

    var prevSlideNumber;
    if(currentSlide == 1){
      prevSlideNumber = totalSlides;
    }else{
      prevSlideNumber = currentSlide - 1;
    }

    var prevImageItem = $('#image' + prevSlideNumber),
        prevImageSrc = prevImageItem[0].src;

    activeImage[0].src = prevImageSrc;
    activeItem[0].setAttribute('data-id', prevSlideNumber);

    // Swap which thumbnail has the active-thumbnail class
    $('.project-carousel__active-thumbnail').removeClass('project-carousel__active-thumbnail');
    prevImageItem[0].parentElement.classList.add('project-carousel__active-thumbnail');
  }

  function nextProjectImage(){
    var activeItem = $('.project-carousel__active'),
        activeImage = activeItem.find('img'),
        currentSlide = parseInt(activeItem.attr('data-id')),
        totalSlides = parseInt($('.project-carousel').attr('data-total'));

    var nextSlideNumber;
    if(currentSlide == totalSlides){
      nextSlideNumber = 1;
    }else{
      nextSlideNumber = currentSlide + 1;
    }
    
    var nextImageItem = $('#image' + nextSlideNumber),
        nextImageSrc = nextImageItem[0].src;

    activeImage[0].src = nextImageSrc;
    activeItem[0].setAttribute('data-id', nextSlideNumber);

    // Swap which thumbnail has the active-thumbnail class
    $('.project-carousel__active-thumbnail').removeClass('project-carousel__active-thumbnail');
    nextImageItem[0].parentElement.classList.add('project-carousel__active-thumbnail');
  }

})(jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogRmlsZSBOYW1lOiBtYWluLmpzXHJcbiAqIERlc2NyaXB0aW9uOiBNYWluIHNjcmlwdCBmaWxlIGZvciB3ZWJzaXRlIGludGVyYWN0aW9uc1xyXG4gKi9cclxuXHJcbihmdW5jdGlvbigkKXtcclxuXHJcbiAgLy8gTmF2YmFyIGNsaWNrIGV2ZW50XHJcbiAgJCgnLm5hdmJhcl9fbWVudS1pY29uJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgIGhpZGVOYXZiYXIoKTtcclxuICB9KTtcclxuXHJcbiAgLy8gQWxsb3cgb3ZlcmxheSB0byBjb3VudCBhcyBjbG9zaW5nIG5hdmlnYXRpb25cclxuICAkKCcubmF2YmFyX19vdmVybGF5JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgIGhpZGVOYXZiYXIoKTtcclxuICB9KTtcclxuXHJcbiAgLy8gT3BlbiBOYXZpZ2F0aW9uIENsb3NlIEJ1dHRvblxyXG4gICQoJyNuYXZiYXJfX2Nsb3NlJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICQoJy5uYXZiYXJfX292ZXJsYXknKS5yZW1vdmVDbGFzcygndmlzaWJsZScpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBoaWRlTmF2YmFyKCl7XHJcbiAgICBpZigkKCcubmF2YmFyX19vdmVybGF5JykuaGFzQ2xhc3MoJ3Zpc2libGUnKSl7XHJcbiAgICAgICQoJy5uYXZiYXJfX292ZXJsYXknKS5yZW1vdmVDbGFzcygndmlzaWJsZScpO1xyXG4gICAgICAkKCcubmF2YmFyX19tZW51LWljb24nKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuXHJcbiAgICAgIC8vIFJlLWRpc3BsYXkgbG9nbyBpZiBvbiB0aGUgd29yayBwYWdlXHJcbiAgICAgIGlmKCQoJy53b3JrX193cmFwcGVyJykubGVuZ3RoICE9PSAwIHx8ICQoJy5zaW5nbGUtd29yaycpLmxlbmd0aCAhPT0gMCB8fCAkKCcuZ2VuZXJhbF9faGVhZGVyJykubGVuZ3RoICE9PSAwKXtcclxuICAgICAgICAkKCcubmF2YmFyX19sb2dvJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICAvLyBUdXJuIG9uIG92ZXJsYXlcclxuICAgICAgJCgnLm5hdmJhcl9fb3ZlcmxheScpLmFkZENsYXNzKCd2aXNpYmxlJyk7XHJcblxyXG4gICAgICAvLyBIaWRlIGJhY2tncm91bmQgc3R1ZmZcclxuICAgICAgJCgnLm5hdmJhcl9fbG9nbycpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBZGp1c3RpbmcgTmF2YmFyIG9wYWNpdHlcclxuICB2YXIgaGFzU2Nyb2xsZWQgPSBmYWxzZTtcclxuICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuXHJcbiAgICBpZigkKCcud29ya19fd3JhcHBlcicpLmxlbmd0aCAhPT0gMCl7XHJcbiAgICAgIC8vIFNraXAgZnVuY3Rpb25hbGl0eSBvbiB3b3JrIHBhZ2VcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc1Njcm9sbGVkID0gdHJ1ZTtcclxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgIGlmKGhhc1Njcm9sbGVkKXtcclxuICAgICAgICBoYXNTY3JvbGxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBoZWlnaHQgb2Ygb3ZlcmxheVxyXG4gICAgICAgIHZhciBvdmVybGF5SGVpZ2h0ID0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgdmFyIHNjcm9sbExvY2F0aW9uID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgdmFyIG9mZnNldCA9ICQoJy5uYXZiYXInKS5vdXRlckhlaWdodCgpO1xyXG5cclxuICAgICAgICBpZigoc2Nyb2xsTG9jYXRpb24pID49IChvdmVybGF5SGVpZ2h0IC0gb2Zmc2V0KSl7XHJcbiAgICAgICAgICAkKCcubmF2YmFyJykuYWRkQ2xhc3MoJ25hdmJhcl9zb2xpZCcpO1xyXG4gICAgICAgICAgJCgnLm5hdmJhcl9fbG9nbycpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCduYXZiYXJfc29saWQnKTtcclxuXHJcbiAgICAgICAgICBpZigkKCcuc2luZ2xlLXdvcmsnKS5sZW5ndGggPT09IDAgJiYgJCgnLmdlbmVyYWxfX2hlYWRlcicpLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2xvZ28nKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9LCAxMDApO1xyXG4gIH0pO1xyXG5cclxuICBpZigkKCcud29ya19fd3JhcHBlcicpLmxlbmd0aCAhPT0gMCl7XHJcbiAgICBpZigkKCcubmF2YmFyJykubGVuZ3RoICE9PSAwKXtcclxuICAgICAgJCgnLm5hdmJhcicpLmFkZENsYXNzKCduYXZiYXJfc29saWQnKTtcclxuICAgICAgJCgnLm5hdmJhcl9fbG9nbycpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYoJCgnLnNpbmdsZS13b3JrJykubGVuZ3RoICE9PSAwIHx8ICQoJy5nZW5lcmFsX19oZWFkZXInKS5sZW5ndGggIT09IDApe1xyXG4gICAgaWYoJCgnLm5hdmJhcicpLmxlbmd0aCAhPT0gMCl7XHJcbiAgICAgICQoJy5uYXZiYXJfX2xvZ28nKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFByb2plY3QgQ2Fyb3VzZWxcclxuXHJcbiAgaWYoJCgnLnByb2plY3QtY2Fyb3VzZWwnKS5sZW5ndGggIT0gMCl7XHJcbiAgICAvLyBTd2l0Y2ggY3VycmVudCBhY3RpdmUgaW1hZ2UgYmFzZWQgb24gdGh1bWJuYWlsIGNsaWNrXHJcbiAgICAkKCcucHJvamVjdC1jYXJvdXNlbF9faW1hZ2UtY29udGFpbmVyJykuY2xpY2soY2hhbmdlQ3VycmVudEltYWdlKTtcclxuXHJcbiAgICAvLyBTd2l0Y2ggY3VycmVudCBhY3RpdmUgaW1hZ2UgYmFzZWQgb24gYXJyb3dzXHJcbiAgICAkKCcucHJvamVjdC1jYXJvdXNlbF9fYWN0aXZlX19sZWZ0LWFycm93JykuY2xpY2socHJldlByb2plY3RJbWFnZSk7XHJcbiAgICAkKCcucHJvamVjdC1jYXJvdXNlbF9fYWN0aXZlX19yaWdodC1hcnJvdycpLmNsaWNrKG5leHRQcm9qZWN0SW1hZ2UpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlQ3VycmVudEltYWdlKGUpe1xyXG4gICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0LFxyXG4gICAgICAgIHRhcmdldElkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgdmFyIGltYWdlID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLFxyXG4gICAgICAgIGltYWdlU3JjID0gaW1hZ2Uuc3JjO1xyXG4gICAgXHJcbiAgICAvLyBDaGFuZ2UgY3VycmVudCBpbWFnZVxyXG4gICAgdmFyIGFjdGl2ZUl0ZW0gPSAkKCcucHJvamVjdC1jYXJvdXNlbF9fYWN0aXZlJyksXHJcbiAgICAgICAgYWN0aXZlSW1hZ2UgPSBhY3RpdmVJdGVtLmZpbmQoJ2ltZycpO1xyXG4gICAgXHJcbiAgICBhY3RpdmVJbWFnZVswXS5zcmMgPSBpbWFnZVNyYztcclxuICAgIGFjdGl2ZUl0ZW1bMF0uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgdGFyZ2V0SWQpO1xyXG5cclxuICAgIC8vIFN3YXAgd2hpY2ggdGh1bWJuYWlsIGhhcyB0aGUgYWN0aXZlLXRodW1ibmFpbCBjbGFzc1xyXG4gICAgJCgnLnByb2plY3QtY2Fyb3VzZWxfX2FjdGl2ZS10aHVtYm5haWwnKS5yZW1vdmVDbGFzcygncHJvamVjdC1jYXJvdXNlbF9fYWN0aXZlLXRodW1ibmFpbCcpO1xyXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY2Fyb3VzZWxfX2FjdGl2ZS10aHVtYm5haWwnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHByZXZQcm9qZWN0SW1hZ2UoKXtcclxuICAgIHZhciBhY3RpdmVJdGVtID0gJCgnLnByb2plY3QtY2Fyb3VzZWxfX2FjdGl2ZScpLFxyXG4gICAgICAgIGFjdGl2ZUltYWdlID0gYWN0aXZlSXRlbS5maW5kKCdpbWcnKSxcclxuICAgICAgICBjdXJyZW50U2xpZGUgPSBwYXJzZUludChhY3RpdmVJdGVtLmF0dHIoJ2RhdGEtaWQnKSksXHJcbiAgICAgICAgdG90YWxTbGlkZXMgPSBwYXJzZUludCgkKCcucHJvamVjdC1jYXJvdXNlbCcpLmF0dHIoJ2RhdGEtdG90YWwnKSk7XHJcblxyXG4gICAgdmFyIHByZXZTbGlkZU51bWJlcjtcclxuICAgIGlmKGN1cnJlbnRTbGlkZSA9PSAxKXtcclxuICAgICAgcHJldlNsaWRlTnVtYmVyID0gdG90YWxTbGlkZXM7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgcHJldlNsaWRlTnVtYmVyID0gY3VycmVudFNsaWRlIC0gMTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcHJldkltYWdlSXRlbSA9ICQoJyNpbWFnZScgKyBwcmV2U2xpZGVOdW1iZXIpLFxyXG4gICAgICAgIHByZXZJbWFnZVNyYyA9IHByZXZJbWFnZUl0ZW1bMF0uc3JjO1xyXG5cclxuICAgIGFjdGl2ZUltYWdlWzBdLnNyYyA9IHByZXZJbWFnZVNyYztcclxuICAgIGFjdGl2ZUl0ZW1bMF0uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgcHJldlNsaWRlTnVtYmVyKTtcclxuXHJcbiAgICAvLyBTd2FwIHdoaWNoIHRodW1ibmFpbCBoYXMgdGhlIGFjdGl2ZS10aHVtYm5haWwgY2xhc3NcclxuICAgICQoJy5wcm9qZWN0LWNhcm91c2VsX19hY3RpdmUtdGh1bWJuYWlsJykucmVtb3ZlQ2xhc3MoJ3Byb2plY3QtY2Fyb3VzZWxfX2FjdGl2ZS10aHVtYm5haWwnKTtcclxuICAgIHByZXZJbWFnZUl0ZW1bMF0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNhcm91c2VsX19hY3RpdmUtdGh1bWJuYWlsJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBuZXh0UHJvamVjdEltYWdlKCl7XHJcbiAgICB2YXIgYWN0aXZlSXRlbSA9ICQoJy5wcm9qZWN0LWNhcm91c2VsX19hY3RpdmUnKSxcclxuICAgICAgICBhY3RpdmVJbWFnZSA9IGFjdGl2ZUl0ZW0uZmluZCgnaW1nJyksXHJcbiAgICAgICAgY3VycmVudFNsaWRlID0gcGFyc2VJbnQoYWN0aXZlSXRlbS5hdHRyKCdkYXRhLWlkJykpLFxyXG4gICAgICAgIHRvdGFsU2xpZGVzID0gcGFyc2VJbnQoJCgnLnByb2plY3QtY2Fyb3VzZWwnKS5hdHRyKCdkYXRhLXRvdGFsJykpO1xyXG5cclxuICAgIHZhciBuZXh0U2xpZGVOdW1iZXI7XHJcbiAgICBpZihjdXJyZW50U2xpZGUgPT0gdG90YWxTbGlkZXMpe1xyXG4gICAgICBuZXh0U2xpZGVOdW1iZXIgPSAxO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIG5leHRTbGlkZU51bWJlciA9IGN1cnJlbnRTbGlkZSArIDE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZhciBuZXh0SW1hZ2VJdGVtID0gJCgnI2ltYWdlJyArIG5leHRTbGlkZU51bWJlciksXHJcbiAgICAgICAgbmV4dEltYWdlU3JjID0gbmV4dEltYWdlSXRlbVswXS5zcmM7XHJcblxyXG4gICAgYWN0aXZlSW1hZ2VbMF0uc3JjID0gbmV4dEltYWdlU3JjO1xyXG4gICAgYWN0aXZlSXRlbVswXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBuZXh0U2xpZGVOdW1iZXIpO1xyXG5cclxuICAgIC8vIFN3YXAgd2hpY2ggdGh1bWJuYWlsIGhhcyB0aGUgYWN0aXZlLXRodW1ibmFpbCBjbGFzc1xyXG4gICAgJCgnLnByb2plY3QtY2Fyb3VzZWxfX2FjdGl2ZS10aHVtYm5haWwnKS5yZW1vdmVDbGFzcygncHJvamVjdC1jYXJvdXNlbF9fYWN0aXZlLXRodW1ibmFpbCcpO1xyXG4gICAgbmV4dEltYWdlSXRlbVswXS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY2Fyb3VzZWxfX2FjdGl2ZS10aHVtYm5haWwnKTtcclxuICB9XHJcblxyXG59KShqUXVlcnkpO1xyXG4iXX0=
