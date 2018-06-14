jQuery(document).ready(function($) {
    "use strict";

// <!-- js ripon -->

	function closeNav() {
		document.getElementById("sear_mobi1").style.visibility = "hidden";}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px" ;
    document.getElementById("baselMobile").style.visibility = "visible";
    document.getElementById("baselMobile").style.opacity = "1"

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("baselMobile").style.visibility = "hidden";
    document.getElementById("baselMobile").style.opacity = "0";
}
function btnMenu1(){
    var x= document.getElementById("btn1").getAttribute("aria-expanded");
    if(x=="true"){
        $(".up1").css("display","none");
        $(".down1").css("display","inline-block");
    }
    else{
         $(".down1").css("display","none");
         $(".up1").css("display","inline-block");
    }
}
function btnMenu2(){
    var x= document.getElementById("btn2").getAttribute("aria-expanded");
    if(x=="true"){
        $(".up2").css("display","none");
        $(".down2").css("display","inline-block");
    }
    else{
         $(".down2").css("display","none");
         $(".up2").css("display","inline-block");
    }
}
function btnMenu3(){
    var x= document.getElementById("btn3").getAttribute("aria-expanded");
    if(x=="true"){
        $(".up3").css("display","none");
        $(".down3").css("display","inline-block");
    }
    else{
         $(".down3").css("display","none");
         $(".up3").css("display","inline-block");
    }
}
// ưsssssssssssssssssssss
function openNav2() {
    document.getElementById("mySidenavv").style.width = "317px";
    $(".collapsee").css("visibility","visible");
       document.getElementById("baselMobile").style.visibility = "visible";
    document.getElementById("baselMobile").style.opacity = "1"
}

function closeNav2() {
    document.getElementById("mySidenavv").style.width = "0";
    $(".collapsee").css("visibility","hidden");
       document.getElementById("baselMobile").style.visibility = "hidden";
    document.getElementById("baselMobile").style.opacity = "0"
}


// sssssssssssssssssssssssss
         $(function() {
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
// llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll

				// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// List View
function gridView(){
            $(".product-item").css("width","");
            $(".description").css("visibility","hidden");
            $(".btn-add").css("transform","");
            $(".icon-wishlist").css("transform","");
            $(".product-item").css("margin-bottom","0");
            $(".produc").css("float","none");
            $(".produc").css("padding","0");
            }
function listView(){
            $(".description").css("visibility","visible");
            $(".product-item").css("width","100%");
            $(".img").css("float","left");
            $(".produc").css("float","left");
            $(".produc").css("padding","15px");
            $(".produc").css("margin-top","30px");
            $(".btn-add").css("transform","scale(1)");
            $(".icon-wishlist").css("transform","scale(1)");
            $(".product-item").css("margin-bottom","100px");

            }
