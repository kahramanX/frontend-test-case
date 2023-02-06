let $ = require("jquery");

// sepet sayfası için açma ve kapama aksiyonları
$(".cart-box").on("click", function () {
  $(".side-cart-container").addClass("open-cart");
  $(".side-cart-container").removeClass("close-cart");
});

$(".close-cart-btn").on("click", function () {
  $(".side-cart-container").addClass("close-cart");
  $(".side-cart-container").removeClass("open-cart");
});
