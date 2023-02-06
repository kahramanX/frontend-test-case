let $ = require("jquery");
let bestSellerProducts = require("../../data/bestSellerProducts.json");
let productElement = require("./productElement");

$(function () {
  // Json dosyasından alınan veriler productElement komponentine gönderiliyor
  $(".BestsellerSlider>.swiper-wrapper").append(
    bestSellerProducts.map((product, index) => {
      return productElement(
        product.ID,
        product.topBadgeType,
        product.img,
        product.starRate,
        product.commentCount,
        product.code,
        product.name,
        product.price,
        product.leftItem,
        product.isShippingToday
      );
    })
  );
});
