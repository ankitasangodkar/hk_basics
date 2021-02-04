
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