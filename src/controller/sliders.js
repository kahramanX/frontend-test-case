let Swiper = require("swiper/swiper-bundle");
let $ = require("jquery");

// Main Slider
$(function () {
  // BestSeller Slider
  let bestSellerSlider = new Swiper(".BestsellerSlider", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 2,
    loop: true,
    centeredSlides: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      1440: {
        slidesPerView: 5,
      },
      1024: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 4,
      },
    },
  });

  let mainSlider = new Swiper(".MainSlider", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
