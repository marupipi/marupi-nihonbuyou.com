$(function($) {
  $('.bg-switcher').bgSwitcher({
      images: ['images/switcher1.png','images/switcher2.png','images/switcher3.png','images/switcher4.png'],
      interval: 5000,
      loop: true
  });

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

