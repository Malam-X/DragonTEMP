/*******************************************
        Author   : DR4G0N5
        Version  : 0.2
        Team     : Cyber Dakwah Jatim
        Whatsapp : +62 85731246143
        "Thanks you!"
        main.js *backup*
********************************************/
!(function($) {
  "use strict";
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });
  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }
  $(window).on('load', function() {
    $('.venobox').venobox();
  });
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);
