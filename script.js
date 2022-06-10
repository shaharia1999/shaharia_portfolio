
$(document).ready(function(){
    $(".fa-bars").click(function(){
        $(".fa-times").show();
        $(".fa-bars").hide();
        $(".nav-item").show();
        $(".nav-item").css('right','0')
      
    
       });
    
    
       
       $(".fa-times").click(function(){
        $(".fa-times").hide();
        $(".nav-item").css('right','-120%')
        $(".fa-bars").show();
      });
    

      $(window).scroll(function(){
        $("header").toggleClass('sticky',$(this).scrollTop()>30)
      })
      
      $(".home1").click(function(){
        $(".nav-item").css('right','-120%')
        $(".fa-times").hide();
        $(".fa-bars").show();
      });
      $('.owl-carousel').owlCarousel({
        loop:true,
        nav:false,
        margin:10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    $(window).hover(function () {
        // $("center").css("bag", "none")
        $('.center').css('text-decoretion', 'none');
            
        }
    );

    //over here 
    });
 