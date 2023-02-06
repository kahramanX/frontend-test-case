let $ = require("jquery");
let mainSliderProducts = require("../../data/mainSliderProducts.json");
let mainSliderElement = require("./mainSliderElement");

$(function () {
  $(".MainSlider>.swiper-wrapper").append(
    mainSliderProducts.map((product, index) => {
      return mainSliderElement(
        product.ID,
        product.itemType,
        product.name,
        product.price,
        product.code,
        product.img,
        product.attributes
      );
    })
  );
});
