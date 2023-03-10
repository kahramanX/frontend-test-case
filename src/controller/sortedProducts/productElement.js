let $ = require("jquery");
let refreshCartProducts = require("../cartProducts/cartContainer");

let productSkeleton = (
  productID,
  itemType,
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
              // lcoalstorage'den sepet veriler getiliyor
              let cartData = JSON.parse(window.localStorage.getItem("cart"));

              // veriler localstorage'a pushlanıyor
              cartData.push({
                productID,
                name,
                price,
                imgSrc,
              });

              //localstorage'a string olarak aktarılıyor
              window.localStorage.setItem("cart", JSON.stringify(cartData));

              console.log("Current Cart : ", cartData);

              // sepet iconu yanında sepette bulunan ürünlerin adeti yazdırılıyor
              $(".cart-badge").text(cartData.length);
              // sepet sayfasının tekrar renderlanması için refreshCartProducts invoke ediliyor
              refreshCartProducts();
            })
        )
    );
};

module.exports = productElement = (
  productID,
  itemType,
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
  if (itemType == "grid") {
    return productSkeleton(
      productID,
      itemType,
      topBadgeType,
      imgSrc,
      starRate,
      commentCount,
      code,
      name,
      price,
      leftItem,
      isShippingToday
    );
  }
  if (itemType == "slider") {
    return $("<div>")
      .addClass("swiper-slide")
      .append(
        productSkeleton(
          productID,
          itemType,
          topBadgeType,
          imgSrc,
          starRate,
          commentCount,
          code,
          name,
          price,
          leftItem,
          isShippingToday
        )
      );
  }
};
