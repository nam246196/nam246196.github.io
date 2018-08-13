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
            $(".produc").css("float","none");
            $(".produc").css("padding","0");
            });
    $('#listview').on('click', function(){
           
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
 // and sidenav mobi..................................................................................