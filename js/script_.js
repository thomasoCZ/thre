jQuery(document).ready(function ($) {


	   var mobile = window.matchMedia( "(max-width: 767px)" );

            if (mobile.matches) {

            }
    

    
    $('#fullpage').fullpage({



        menu: '.fullpage-menu',
     //   easingcss3: 'cubic-bezier(0.65, 0.12, 0.17, 0.96)',
        scrollingSpeed: 1000,

        afterRender: function(){
              TweenMax.set('.section .section-left span', {y: 30, ease: Power4.easeOut})
            TweenMax.set('.section .section-right .rblock',  {x: '100%', ease: Power4.easeOut})
            TweenMax.set('.section .section-title',  {autoAlpha: 0, ease: Power4.easeOut})
        },

        onLeave: function(index, nextIndex, direction){

            var homeDownAnim = new TimelineMax({

                paused: true

            })
            .to('.home-section span', 0.9, {y:  '-100%', ease: Power4.easeInOut})



            var homeUpAnim = new TimelineMax({

                paused: true

            })
           
            
            .to('.home-section span', 0.9, {y:  '0%', ease: Power4.easeOut}, '+=0.7');





            if(index == 1 && direction =='down'){

                console.log("Going to projects");
                homeDownAnim.play()
            }

            if(nextIndex == 1 && direction =='up'){ 

                console.log("Going back home");
                homeUpAnim.play()

                TweenMax.to('.section .section-left span', 0.9, {y: 30, ease: Power4.easeInOut})    
                TweenMax.to('.section .section-right .rblock', 0.9,  {x: '100%', ease: Power4.easeInOut})
                TweenMax.to('.section .section-title', 0.9,  {autoAlpha: 0, scale: 0.8, ease: Power4.easeInOut},0)
            }

            else {

                TweenMax.to('.section .section-left span', 0.9, {y: 30, ease: Power4.easeInOut},0)    
                TweenMax.to('.section .section-right .rblock', 0.9,  {x: '100%', ease: Power4.easeInOut}, 0)
                TweenMax.to('.section .section-title', 0.9,  {autoAlpha: 0, scale: 0.8, ease: Power4.easeInOut},0)
                

            }

            


        },

        afterLoad: function(anchorLink, index){
                       
            TweenMax.to('.section.active .section-left span',  0.9, {y: 0, ease: Power4.easeOut, delay: 2})
             TweenMax.to('.section.active .section-right .rblock', 2, {autoAlpha: 1, x: '0%', ease: Power4.easeInOut, delay: 0.5})
              TweenMax.to('.section.active .section-title', 5,  {autoAlpha: 1, scale: 1, ease: Power2.easeOut}, 0)
        },
    });




});