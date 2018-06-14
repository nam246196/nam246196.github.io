 
$(document).ready(function(){

// -------------chạy slide banner ------------------
		$('#main_slide').owlCarousel({
		    // loop:true,
		    margin:0,
		    // responsiveClass:true,
		    nav:false,
		    autoplay:true,
		    rewind:true,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        1000:{
		            items:1,
		            nav:true,		        
		        }
		    }
		})

// ---------------------------------
        $('#content1_list').owlCarousel({
		    // loop:true,
		    margin:15,
		    // responsiveClass:true,
		    nav:false,
		    autoplay:false, //	tự chạy	    
		    rewind:false,	//tua lại khi chạy hết
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        320:{	//xs
		            items:1,
		            nav:false
		        },
		        480:{	//xs
		            items:2,
		            nav:false
		        },
		        767:{	//sm
		            items:3,
		            nav:false
		        },
		        992:{	//sm
		            items:3,
		            nav:false
		        },
		        1000:{	//md
		            items:4,
		            nav:true,		        
		        }
		    }
		})
        $("#content1_next").click(function () {
        	$('#content1_list').trigger('next.owl.carousel');
        });
        $("#content1_prev").click(function () {
        	$('#content1_list').trigger('prev.owl.carousel');
        });

// ---------------------------------
        $('#content2_list_left').owlCarousel({
		    // loop:true,
		    margin:15,
		    // responsiveClass:true,
		    nav:false,
		    autoplay:false, //	tự chạy	    
		    rewind:false,	//tua lại khi chạy hết
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        320:{	//xs
		            items:1,
		            nav:false
		        },
		        480:{	//xs
		            items:2,
		            nav:false
		        },
		        767:{	//sm
		            items:3,
		            nav:false
		        },
		        992:{	//sm
		            items:3,
		            nav:false
		        },
		        1000:{	//md
		            items:3,
		            nav:true,		        
		        }
		    }
		})
		$("#content2_next").click(function () {
        	$('#content2_list_left').trigger('next.owl.carousel');
        });
        $("#content2_prev").click(function () {
        	$('#content2_list_left').trigger('prev.owl.carousel');
        });
// ------------------------------------------
		     $('#content3_list_left').owlCarousel({
		    // loop:true,
		    margin:15,
		    // responsiveClass:true,
		    nav:false,
		    autoplay:false, //	tự chạy	    
		    rewind:false,	//tua lại khi chạy hết
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        320:{	//xs
		            items:1,
		            nav:false
		        },
		        480:{	//xs
		            items:2,
		            nav:false
		        },
		        767:{	//sm
		            items:3,
		            nav:false
		        },
		        992:{	//sm
		            items:3,
		            nav:false
		        },
		        1000:{	//md
		            items:3,
		            nav:true,		        
		        }
		    }
		})
		$("#content3_next").click(function () {
        	$('#content3_list_left').trigger('next.owl.carousel');
        });
        $("#content3_prev").click(function () {
        	$('#content3_list_left').trigger('prev.owl.carousel');
        });
// ------------------------------------------
		     $('#content4_list_left').owlCarousel({
		    // loop:true,
		    margin:15,
		    // responsiveClass:true,
		    nav:false,
		    autoplay:false, //	tự chạy	    
		    rewind:false,	//tua lại khi chạy hết
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        320:{	//xs
		            items:1,
		            nav:false
		        },
		        480:{	//xs
		            items:2,
		            nav:false
		        },
		        767:{	//sm
		            items:3,
		            nav:false
		        },
		        992:{	//sm
		            items:3,
		            nav:false
		        },
		        1000:{	//md
		            items:3,
		            nav:true,		        
		        }
		    }
		})
		$("#content4_next").click(function () {
        	$('#content4_list_left').trigger('next.owl.carousel');
        });
        $("#content4_prev").click(function () {
        	$('#content4_list_left').trigger('prev.owl.carousel');
        });
// -----------
// -----------------------------------------------
$('#thuonghieu_list').owlCarousel({
		    // loop:true,
		    margin:15,
		    // responsiveClass:true,
		    nav:false,
		    autoplay:true, //	tự chạy	    
		    rewind:true,	//tua lại khi chạy hết
		    responsive:{
		        0:{
		            items:2,
		            nav:true
		        },
		        320:{	//xs
		            items:2,
		            nav:false
		        },
		        480:{	//xs
		            items:3,
		            nav:false
		        },
		        767:{	//sm
		            items:3,
		            nav:false
		        },
		        992:{	//sm
		            items:4,
		            nav:false
		        },
		        1000:{	//md
		            items:4,
		            nav:true,		        
		        }
		    }
		})
        $("#thuonghieu_next").click(function () {
            $('#thuonghieu_list').trigger('next.owl.carousel');
        });
        $("#thuonghieu_prev").click(function () {
            $('#thuonghieu_list').trigger('prev.owl.carousel');
        });
 // -------------chạy reponsive mobile --------------------
		// $('.content2_left_list li i').click(function(){
		// 	$(this).next().slideToggle('fast');
		// });

		// $(window).scroll(function () { 
		// if ($(window).scrollTop() > 0) { $('.header_bottom').addClass('header_fixed');
		// } 
		// else { $('.header_bottom').removeClass('header_fixed');
		// } 
		// });

         // chạy menu con
        $("#menu").mmenu();

        $('#slider').nivoSlider({
        prevText: '<i class="fa fa-arrow-circle-left"></i>',                 // Prev directionNav text 
    	nextText: '<i class="fa fa-arrow-circle-right"></i>',      
        });
         
});
