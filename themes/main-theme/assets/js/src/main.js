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
