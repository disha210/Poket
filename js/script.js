
$(document).ready(function(){
  
    $('#home_port').owlCarousel({
        loop:true,
        margin: 0,
        nav:false,
        items:4,
        dots:true,
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed:300,
        autoplaySpeed:500,
        navSpeed:100,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2,
            },
            991:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })
    $('#feature_testi').owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed:300,
        autoplaySpeed:500,
        navSpeed:100,
        navText:['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            991:{
                items:3
            }
        }
    })
    
    $('#company_brand_testi').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        infinite: true,
        autoplay: true,
        default: true,
        autoplaySpeed: 3000,
        speed: 1000,					
        slidesToShow: 5,
        responsive:{
            0:{
                items:2
            },
            768:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    $('#client_say').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        infinite: true,
        autoplay: true,
        default: true,
        autoplaySpeed: 3000,
        speed: 1000,					
        slidesToShow: 5,
        responsive:{
            0:{
                items:1
            },
            991:{
                items:2
            }
        }
    })
    $('#client_say2').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        infinite: true,
        autoplay: true,
        default: true,
        autoplaySpeed: 3000,
        speed: 1000,					
        slidesToShow: 5,
        responsive:{
            0:{
                items:1
            },
            991:{
                items:2
            }
        }
    })
    $('#latest_blog').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        infinite: true,
        autoplay: true,
        default: true,
        autoplaySpeed: 3000,
        speed: 1000,					
        slidesToShow: 3,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            991:{
                items:3
            }
        }
    })
    $('#company_member').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        infinite: true,
        autoplay: true,
        default: true,
        autoplaySpeed: 3000,
        speed: 1000,					
        slidesToShow: 3,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            991:{
                items:3
            }
        }
    })

    var counted = 0;
    $(window).scroll(function() {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
                }).animate({
                    countNum: countTo
                },

                {
                duration: 6000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                }
            });
        });
        counted = 1;
    }

    });    
    
});

setTimeout(function(){
    $('.preloader').fadeOut();
},1800);

var btn = $('.to_top');
btn.hide(); 
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.fadeIn();
    } else {
        btn.fadeOut();
    }
});

btn.on('click', function(e) {
e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});


$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 50) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});


function validation(){

    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var phone=document.getElementById('phone').value;
    var message=document.getElementById('message').value;

    if(name==""){
    document.getElementById('err1').innerText="*Name Must be Reqired...!";
    return false;
    }
    if(email=="") {
    document.getElementById('err2').innerText="*Email Must be Reqired...!";
    return false;
    }
    if(phone=="") {
    document.getElementById('err3').innerText="*Phone Number Must be Reqired...!";
    return false;
    }
    if(message=="") {
    document.getElementById('err').innerText="*Message Must be Reqired...!";
    return false;
    }

}
	var acc = document.getElementsByClassName("course-accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].onclick = function() {
		var panel = this.nextElementSibling;
		var coursePanel = document.getElementsByClassName("course-panel");
		var courseAccordion = document.getElementsByClassName("course-accordion");
		var courseAccordionActive = document.getElementsByClassName("course-accordion active");

		if (panel.style.maxHeight){
			panel.style.maxHeight = null;
			this.classList.remove("active");
		} else 
        { 
			for (var ii = 0; ii < courseAccordionActive.length; ii++) {
				courseAccordionActive[ii].classList.remove("active");
			}
			for (var iii = 0; iii < coursePanel.length; iii++) {
			  this.classList.remove("active");
			  coursePanel[iii].style.maxHeight = null;
			}
		  panel.style.maxHeight = panel.scrollHeight + "px";
		  this.classList.add("active");
		} 
	  }
	}
// --Isotop start-----------------------------------------------------------------
    
$('.filter-button-group > li').click(function(){
    $('.filter-button-group li').removeClass('active');
    $(this).addClass('active');
});

// filter items on button click
$('.filter-button-group').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});
        
$('.filter-button-group > li').click(function(){
    $('.filter-button-group li').removeClass('active');
    $(this).addClass('active');
});

// init Isotope
var $grid = $('.grid').isotope({
});

// filter items on button click
$('.choose-button-group').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
        });
// --Isotop end----------------------