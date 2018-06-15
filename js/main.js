jQuery(document).ready(function($) {
    "use strict";
// Fiter......................................................................................
    $('.button2').on('click', function(){
    $("#mySidenavv").css("width","317px");
    $(".collapsee").css("visibility","visible");
    $("#baselMobile").css("visibility","visible");
    $("#baselMobile").css("opacity","1");
});

$('.closebtn').on('click', function(){
    $("#mySidenavv").css("width","0");
    $(".collapsee").css("visibility","hidden");
    $("#baselMobile").css("visibility","hidden");
    $("#baselMobile").css("opacity","0");
});

// and Fiter......................................................................................
// 
// 
// 
// price....................................................................................
            $( "#slider-3" ).slider({
               range:true,
               min: 0,
               max: 500,
               values: [ 50, 350 ],
               slide: function( event, ui ) {
                  $( "#price" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
               }
            });
            $( "#price" ).val( "$" + $( "#slider-3" ).slider( "values", 0 ) +
               " - $" + $( "#slider-3" ).slider( "values", 1 ) );
         });
// end price....................................................................................
// 
// List View
    $('#gridview').on('click', function(){
            $(".product-item").css("width","");
            $(".description").css("visibility","hidden");
            $(".btn-add").css("transform","");
            $(".icon-wishlist").css("transform","");
            $(".product-item").css("margin-bottom","0");
            $(".produc").css("float","none");
            $(".description").css("position","fixed");
            $(".sao i").css("float","right");
            $(".produc").css("width","100%");
            });
    $('#listview').on('click', function(){
            $(".description").css("visibility","visible");
            $(".description").css("position","inherit");
            $(".product-item").css("width","100%");
            $(".img").css("float","left");
            $(".sao i").css("float","none");
            $(".produc").css("float","left");
            $(".produc").css("width","54%");
            $(".produc").css("margin-top","30px");
            $(".btn-add").css("transform","scale(1)");
            $(".icon-wishlist").css("transform","scale(1)");

            });
    // end List View..................................................................................
    // sidenav mobi..................................................................................
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

$('#btn1').on('click', function(){
    var x= $("#btn1").attr("aria-expanded");
if(x=="true"){
         $(".up1").css("display","none");
     $(".down1").css("display","inline-block");
       
    }
     else{
        $(".down1").css("display","none");
          $(".up1").css("display","inline-block");
     }
   
});
$('#btn2').on('click', function(){
    x= $("#btn2").attr("aria-expanded");
    if(x=="true"){
        $(".up2").css("display","none");
        $(".down2").css("display","inline-block");
    }
    else{
         $(".down2").css("display","none");
         $(".up2").css("display","inline-block");
    }
});

$('#btn3').on('click', function(){
    var x= $("#btn3").attr("aria-expanded");
    if(x=="true"){
        $(".up3").css("display","none");
        $(".down3").css("display","inline-block");
    }
    else{
         $(".down3").css("display","none");
         $(".up3").css("display","inline-block");
    }
});
$('#btn4').on('click', function(){
    var x= $("#btn4").attr("aria-expanded");
    if(x=="true"){
        $(".up4").css("display","none");
        $(".down4").css("display","inline-block");
    }
    else{
         $(".down4").css("display","none");
         $(".up4").css("display","inline-block");
    }
});
$('#btn5').on('click', function(){
    var x= $("#btn5").attr("aria-expanded");
    if(x=="true"){
        $(".up5").css("display","none");
        $(".down5").css("display","inline-block");
    }
    else{
         $(".down5").css("display","none");
         $(".up5").css("display","inline-block");
    }
});
$('#btn11').on('click', function(){
    x= $("#btn11").attr("aria-expanded");
    if(x=="true"){
        $(".up11").css("display","none");
        $(".down11").css("display","inline-block");
    }
    else{
         $(".down11").css("display","none");
         $(".up11").css("display","inline-block");
    }
});$('#btn21').on('click', function(){
    x= $("#btn21").attr("aria-expanded");
    if(x=="true"){
        $(".up21").css("display","none");
        $(".down21").css("display","inline-block");
    }
    else{
         $(".down21").css("display","none");
         $(".up21").css("display","inline-block");
    }
});$('#btn31').on('click', function(){
    x= $("#btn31").attr("aria-expanded");
    if(x=="true"){
        $(".up31").css("display","none");
        $(".down31").css("display","inline-block");
    }
    else{
         $(".down31").css("display","none");
         $(".up31").css("display","inline-block");
    }
});
 // and sidenav mobi..................................................................................