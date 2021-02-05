
$( document ).ready(function() {
  $('.dropdown-item').on('click',function (){
    if($(this).attr('href')){
      alert('redirect to '+$(this).attr('href'));
      window.location.replace($(this).attr('href'));
       }
  });
});

$(document).on('show','.accordion', function (e) {
     //$('.accordion-heading i').toggleClass(' ');
     $(e.target).prev('.accordion-heading').addClass('accordion-opened');
});

$(document).on('hide','.accordion', function (e) {
    $(this).find('.accordion-heading').not($(e.target)).removeClass('accordion-opened');
    //$('.accordion-heading i').toggleClass('fa-chevron-right fa-chevron-down');
});


$('.product-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  centerPadding: '60px',
  prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-arrow-right"></i></button>',
  nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-arrow-left"></i></button>',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
    }
  }
  ]
});

$('.product-image-slider').slick({
  dots: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-arrow-right"></i></button>',
  nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-arrow-left"></i></button>',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
    }
  }
  ]
});