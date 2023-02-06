let $ = require("jquery");
let refreshCartProducts = require("../cartProducts/cartContainer");

module.exports = productElement = (
  productID,
  topBadgeType,
  imgSrc,
  starRate,
  commentCount,
  code,
  name,
  price,
  leftItem,
  isShippingToday
) => {
  return $("<div>")
    .addClass("product-container")
    .append(
      topBadgeType == "web-exclusive"
        ? $("<div>").addClass("web-exclusive-badge").text("WEB'E ÖZEL")
        : $("<div>").addClass("just-sold-badge").text("AZ ÖNCE 1 ADET SATILDI!")
    )
    .append($("<img>").attr("src", imgSrc))
    .append(
      $("<div>")
        .addClass("product-rank-container")
        .append(
          $("<div>")
            .addClass("product-star")
            .append(
              $("<span>").addClass("material-symbols-outlined").text("star")
            )
            .append($("<span>").text(starRate))
        )
        .append(
          $("<div>")
            .addClass("product-comments")
            .text(`(${commentCount}) Yorum`)
        )
    )
    .append($("<div>").addClass("product-code").text(code))
    .append($("<div>").addClass("product-name").text(name))
    .append($("<div>").addClass("product-price").text(`₺ ${price}`))
    .append(
      leftItem != null
        ? $("<div>")
            .addClass("items-left-badge")
            .text(`YALNIZCA ${leftItem} ÜRÜN KALDI!`)
        : ""
    )
    .append(
      isShippingToday == true
        ? $("<div>").addClass("shipping-today").text("BUGÜN KARGODA!")
        : ""
    )
    .append(
      $("<div>")
        .addClass("add-to-cart-container")
        .append(
          $("<div>")
            .addClass("compare-btn")
            .append(
              $("<span>")
                .addClass("material-symbols-outlined")
                .text("compare_arrows")
            )
        )
        .append(
          $("<div>")
            .addClass("add-to-cart-btn")
            .attr("data-product-id", productID)
            .text("SEPETE EKLE")
            .on("click", (event) => {
              let cartData = JSON.parse(window.localStorage.getItem("cart"));

              cartData.push({
                productID,
                name,
                price,
                imgSrc,
              });

              window.localStorage.setItem("cart", JSON.stringify(cartData));

              console.log("Current Cart : ", cartData);

              $(".cart-badge").text(cartData.length);
              refreshCartProducts();
            })
        )
    );
};
