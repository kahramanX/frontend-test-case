const swiper = new Swiper(".MainSlider", {
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
