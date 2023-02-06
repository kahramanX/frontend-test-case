let $ = require("jquery");
let mainSliderProducts = require("../../data/mainSliderProducts.json");
let mainSliderElement = require("./mainSliderElement");

$(".MainSlider>.swiper-wrapper").append(
  // Json dosyasından alınan veriler mainSliderElement komponentine gönderiliyor
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
