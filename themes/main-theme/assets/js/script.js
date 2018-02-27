/**
 * File Name: main.js
 * Description: Main script file for website interactions
 */

(function($){

  // Navbar click event
  $('.navbar__menu-icon').click(function(){
    hideNavbar();
  });

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

})(jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEZpbGUgTmFtZTogbWFpbi5qc1xyXG4gKiBEZXNjcmlwdGlvbjogTWFpbiBzY3JpcHQgZmlsZSBmb3Igd2Vic2l0ZSBpbnRlcmFjdGlvbnNcclxuICovXHJcblxyXG4oZnVuY3Rpb24oJCl7XHJcblxyXG4gIC8vIE5hdmJhciBjbGljayBldmVudFxyXG4gICQoJy5uYXZiYXJfX21lbnUtaWNvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICBoaWRlTmF2YmFyKCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5uYXZiYXJfX292ZXJsYXknKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgaGlkZU5hdmJhcigpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBPcGVuIE5hdmlnYXRpb24gQ2xvc2UgQnV0dG9uXHJcbiAgJCgnI25hdmJhcl9fY2xvc2UnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgJCgnLm5hdmJhcl9fb3ZlcmxheScpLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XHJcbiAgICBjb25zb2xlLmxvZygnU1ZHIENsaWNrZWQnKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gaGlkZU5hdmJhcigpe1xyXG4gICAgaWYoJCgnLm5hdmJhcl9fb3ZlcmxheScpLmhhc0NsYXNzKCd2aXNpYmxlJykpe1xyXG4gICAgICAkKCcubmF2YmFyX19vdmVybGF5JykucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcclxuICAgICAgJCgnLm5hdmJhcl9fbWVudS1pY29uJykuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICQoJy5uYXZiYXJfX292ZXJsYXknKS5hZGRDbGFzcygndmlzaWJsZScpO1xyXG4gICAgICAkKCcubmF2YmFyX19tZW51LWljb24nKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pKGpRdWVyeSk7XHJcbiJdfQ==
