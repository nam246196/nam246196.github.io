jQuery(document).ready(function($) {
    "use strict";
// // and sidenav mobi..................................................................................
             $(".sear_mobi").css("visibility","hidden");
            $(".tim_mobi").css("color","#2b2b2b");

});
          $('#searc_mobi1').on('click', function(){
            $(".sear_mobi").css("visibility","visible");
             $(".tim_mobi").css("color","red");
             
 });
          // 22222222222222222222222222222222222222222222222222222222
           $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });
           // ...........................................................................
        $('.js-click-product').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.js-product-slider',
        asNavFor: '.js-product-slider2',
        dots: true,
        focusOnSelect: true,
        infinite: true,
        arrows: false,
        vertical: true,
         centerMode: true,
        responsive: [

            {
                breakpoint: 1367,
                settings: {
                    vertical: false
                }
            }
        ]
    });

    $('.js-product-slider').slick({
        slidesToShow: 3,	
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.js-click-product',
        asNavFor: '.js-product-slider2',
    });
    $('.js-product-slider2').slick({
        slidesToShow: 1,	
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.js-click-product',
        asNavFor: '.js-product-slider',
    });
    // ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

      
      // ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
       $('.closebtn').on('click', function(){
        $("#sear_mobi1").css("visibility","hidden");});
$('.button1').on('click', function(){
    $("#mySidenav").css("width","250px");
    $("#baselMobile").css("visibility","visible");
    $("#baselMobile").css("opacity","1");
    

});

$('.closebtn').on('click', function(){
    $("#mySidenav").css("width","0");
    $("#baselMobile").css("visibility","hidden");
    $("#baselMobile").css("opacity","0");
});
// sssssssssssssssssssssssssssssssssssssssssssss\

  // scrol1////////////////////////////////////////////////////
        window.onscroll = function() {scrollFunction()};
function scrollFunction() {
 
  if ($("body,html").scrollTop() > 60) {
    $(".affixx").css("transition","all .5s ease");
    $(".affixx").css("box-shadow","0 10px 10px rgba(0,0,0,0.05)");
    $(".affixx").css("position","fixed");
    $(".affixx").css("top","0px");
    $(".side").css("padding-top","150px;");
    $(".slide").css("padding-top","180px;");

  } else {
    $(".slide").css("padding-top","0px;");
      $(".affixx").css("box-shadow","unset");

   }
   
  }
  
 

  


  // sllick4{}
   $(".slick-centermode").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true
      });
   // mobi sidevar
   $('.closebtn').on('click', function(){
        $("#sear_mobi1").css("visibility","hidden");});
$('.butt').on('click', function(){
   $("#mySidenav").css("visibility","visible")
    $("#mySidenav").css("opacity","1");
     $("#mySidenav").css("display","inline-block");
     $(".vuong").css("display","inline-block");
     $("#child1").css("transform","translateY(8px) rotate(45deg"); 
      $(".child3").css("transform","translateY(-8px) rotate(-45deg"); 
       $(".child2").css("width","0");

});

$('.vuong').on('click', function(){
   $(".vuong").css("display","none");
  $(".child2").css("width","25px");
$("#child1").css("-webkit-transform","rotate(0deg)"); 
$(".child3").css("-webkit-transform","rotate(0deg)"); 
     $("#mySidenav").css("width","250px");
    $("#mySidenav").css("opacity","0");
    $("#mySidenav").css("visibility","hidden");
});
$('.filter-button').on('click', function(){
 $(".vuong").css("display","none");
  $(".child2").css("width","25px");
$("#child1").css("-webkit-transform","rotate(0deg)"); 
$(".child3").css("-webkit-transform","rotate(0deg)"); 
     $("#mySidenav").css("width","250px");
    $("#mySidenav").css("opacity","0");
    $("#mySidenav").css("visibility","hidden");
});
// thu>
$('.goto1').on('click', function(){

    $("html, body").animate({
            scrollTop: 0
        }, 1500);
        return false;
});

 $(".filter-button").click(function(){     
        var value = $(this).attr('data-filter');               
         if(value == "all")        {           
          $('.filter').show('1000');        }       
           else        {           
            $(".filter").not('.'+value).hide('3000');           
             $('.filter').filter('.'+value).show('3000');                    }    });





  $('.fiter').on('click', function(){
    $("#mySidenavv").css("left","0");
    $("#mySidenavv").css("opacity","1");
    $("#baselMobile").css("visibility","visible");
    $("#baselMobile").css("opacity","1");

});

$('.closebtn').on('click', function(){
    $("#mySidenavv").css("left","-317px");
   $("#mySidenavv").css("opacity","0");
       $("#baselMobile").css("visibility","hidden");
    $("#baselMobile").css("opacity","0");

});
$('.basel').on('click', function(){
    $("#mySidenavv").css("left","-317px");
   $("#mySidenavv").css("opacity","0");
       $("#baselMobile").css("visibility","hidden");
    $("#baselMobile").css("opacity","0");

});




// slick dodung
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });


