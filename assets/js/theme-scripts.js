
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
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '60px',
  prevArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-arrow-left"></i></button>',
  nextArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-arrow-right"></i></button>',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: false,
    }
  }
  ]
});

$('.product-image-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-arrow-left"></i></button>',
  nextArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-arrow-right"></i></button>',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: true,
    }
  }
  ]
});

$('.product-tag-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToScroll: 3,
        slidesToShow: 3,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '60px',
        variableWidth: true,
    }
  }
  ]
});

$('.info-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  prevArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-arrow-left"></i></button>',
  nextArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-arrow-right"></i></button>',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        centerMode:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        cssEase: 'linear',
        variableHeight: true,
        arrows: false
      }
    }
  ]
});

$('.articles-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2,
        arrows: false,
        dots: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        dots: true,
    }
  }
  ]
});


$('.testimonials-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '30px',
  prevArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-arrow-left"></i></button>',
  nextArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-arrow-right"></i></button>',
  responsive: [
    {
      breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          centerMode: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: false,
    }
  }
  ]
});
