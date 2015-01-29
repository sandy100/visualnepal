$(document).ready(function(){

            $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 50) {
             $('#mainmenu').addClass('navbar-fixed-top');
         }
         else {
             $('#mainmenu').removeClass('navbar-fixed-top');
         }
    });
  });


