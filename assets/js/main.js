$(document).ready(function(){
/*-------------------------------
--------editable code ----------
------------------------------- */

	//  loder js ---------------
$(window).on("load", function () {
	$("#loader").fadeOut("10000");
});

//chat icon-------------
$('.cht-icon').click(function(){
	$('.cht-icon').fadeToggle(1000);
	$('.chat-form').fadeToggle(1000);
});

$('.cht-icon-close').click(function(){
	$('.cht-icon').fadeToggle(1000);
	$('.chat-form').fadeToggle(1000);
});
//  sticky nav js ---------------
window.onscroll = function () {
	stickyfunction();
};

var navbar = document.getElementById("sticky-nav");
var goTop = document.getElementById("goTop");

var sticky = navbar.offsetTop;

function stickyfunction() {
	if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    goTop.classList.add("a");
	} else {
    navbar.classList.remove("sticky");
    goTop.classList.remove("a");
	}
}
//dropdown menue-------------------
$('#ddb').click(function(){
	$('.dropdown').fadeToggle(1000);
});
$('#back').click(function(){
	$('.dropdown').fadeToggle(1000);
});
//scroll watch-----------
$(".scrollspy").scrollWatchMapTo("nav ul li");

//toggle menue-------------------
$('.toggle-manue').click(function(){
	$('.toggle-manue').toggleClass('toggled');
	$('nav').toggleClass('toggled');
});

//quote form for home page----------------------
$('.quote').click(function(){
	$('#quote-Form_area').fadeToggle(1000);
});
$('#quote-Close').click(function(){
	$('#quote-Form_area').fadeToggle(1000);
});

//counter-------------------
$('.counter').counterUp({
	time: 1000
});

//video popup-----
$('#vbtn').click(function(){
	$('.video-popup').fadeToggle(1000);
});
$('#video-Close').click(function(){
	$('.video-popup').fadeToggle(1000);
});

//silk slider for Home---------------
$('.homeslider').slick({
  dots: true,
  infinite: true,
  arrows: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
  
  
  {
    breakpoint: 577,
    settings: {
      slidesToShow: 1,
      arrows: false,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]

});
//silk slider for team---------------
$('.teamSlide').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
	autoplaySpeed: 4000
	
  });
//silk slider for testmonial---------------
$('.tslide').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
	autoplaySpeed: 4000
	
  });

//---------isotope---------
var mixer = mixitup('.container');
var mixer = mixitup(containerEl);
var mixer = mixitup(containerEl, {
  selectors: {
      target: '.blog-item'
  },
  animation: {
      duration: 300
  }
});

  //lightbox--------------------------
  
/*-------------------------------
--------editable code end -------
------------------------------- */
  });