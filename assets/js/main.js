var typed = new Typed(".type", {
  strings: ["Employees", "Marketing exhibitions", "Events"],
  typeSpeed: 100,
  backSpeed: 60,
  smartBackspace: false,
  loop: true,
});

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

$(".counter").counterUp({
  delay: 10,
  time: 2000,
});
$(".counter").addClass("animated fadeInDownBig");
$("h3").addClass("animated fadeIn");
