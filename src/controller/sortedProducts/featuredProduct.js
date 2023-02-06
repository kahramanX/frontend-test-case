let $ = require("jquery");
let featuredProducts = require("../../data/featuredProducts.json");
let productElement = require("./productElement");

$(function () {
  $(".widget.sorted-grid-products").append(
    featuredProducts.map((product, index) => {
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
