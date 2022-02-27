$(function () {
  'use strict'
   $('.banner_slider').slick({
      prevArrow: '<i class="fas fa-chevron-left banner_slider_icon"></i>',
      nextArrow: '<i class="fas fa-chevron-right banner_slider_icon"></i>',
      autoplay: true,
      autoplaySpeed: 1500,
      dots: true,
      dotsClass:'banner_slider_dots'
   });
})
