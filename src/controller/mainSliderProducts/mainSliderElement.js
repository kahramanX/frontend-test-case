let $ = require("jquery");

module.exports = mainSliderElement = (
  productID,
  itemType,
  name,
  price,
  code,
  img,
  attributes
) => {
  if (itemType == "big") {
    return $("<div>")
      .addClass("swiper-slide big")
      .append(
        $("<div>")
          .addClass("slider-product-container")
          .append($("<img>").attr("src", img))
          .append(
            $("<div>")
              .addClass("product-contents")
              .append($("<div>").addClass("product-code").text(code))
              .append($("<div>").addClass("product-name").text(name))
              .append(
                $("<ul>")
                  .append($("<li>").text(attributes.attr1))
                  .append($("<li>").text(attributes.attr2))
                  .append($("<li>").text(attributes.attr3))
                  .append($("<li>").text(attributes.attr4))
              )
              .append(
                $("<div>")
                  .addClass("product-price-badge")
                  .append($("<span>").text(`₺ ${price}`))
              )
          )
      );
  }
  if (itemType == "small") {
    return $("<div>")
      .addClass("swiper-slide small")
      .append(
        $("<div>")
          .addClass("slider-product-container")
          .append($("<img>").attr("src", img))
          .append(
            $("<div>")
              .addClass("product-contents")
              .append($("<div>").addClass("product-name").text(name))
              .append(
                $("<div>")
                  .addClass("product-price-badge")
                  .append($("<span>").text(`₺ ${price}`))
              )
          )
      );
  }
};
