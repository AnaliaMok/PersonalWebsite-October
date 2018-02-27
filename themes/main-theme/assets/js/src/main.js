/**
 * File Name: main.js
 * Description: Main script file for website interactions
 */

(function($){
  $(document).ready(function(){

    // Add scroll event to navbar
    $(window).scroll(function(){
      // Size of hero header
      var headerHeight = $("header").height;
      console.log(headerHeight);
    });
    
    console.log($(window));

  });
})(jQuery);
