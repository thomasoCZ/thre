jQuery(document).ready(function ($) {


	   var mobile = window.matchMedia( "(max-width: 767px)" );

            if (mobile.matches) {

            }


        $('#fullpage').fullpage({


        scrollingSpeed: 700,
        menu: '.fullpage-menu',
      // scrollOverflow:true,
       // mouseWheelSpeed: 6


        });


          var mySwiper = new Swiper ('.swiper-container', {
              // Optional parameters
             // direction: 'vertical',
              loop: false,
              speed: 800,
              //pagination: '.swiper-pagination',
        });



});