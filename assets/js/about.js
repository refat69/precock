$(document).ready(function ($) {
   $(".slider_item").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
       smartSpeed: 500,
    nav: true,
    navText: [
     '<i class="fa-solid fa-arrow-left ar_lf"></i>',
     '<i class="fa-solid fa-arrow-right ar_rit"></i>',
    ],
    margin: 0,
    responsiveClass: true,
    responsive: {
     0: {
      items: 1,
      nav: true,
     },
     600: {
      items: 1,
     },
     1000: {
      items: 1,
     },
     1200: {
      items: 1,
     },
    },
   });
});
