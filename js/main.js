$(function($) {
  

  $('.slider').slick({
    arrows:true,
    slidesToShow:4,
    slidesToScroll:1,
    dots:true,
    responsive : [{
      breakpoint: 480,
      settings: {
        arrows: true,
        slidesToShow: 1,
        dots: true,
      }
    }]
  });


  
});
	
$(document).ready(function(){
  $('.fuwat').css('visibility','hidden');
  $(window).scroll(function(){
   var windowHeight = $(window).height(),
       topWindow = $(window).scrollTop();
   $('.fuwat').each(function(){
    var objectPosition = $(this).offset().top;
    if(topWindow > objectPosition - windowHeight + 200){
     $(this).addClass("fuwatAnime");
    }
   });
  });
});

