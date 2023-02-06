let $ = require("jquery");

module.exports = cartProductElement = (productID, imgSrc, name, price) => {
  return $("<div>")
    .addClass("cart-product-container")
    .append($("<p>").addClass("product-id").text(productID))
    .append($("<img>").attr("src", imgSrc))
    .append($("<p>").addClass("product-name").text(name))
    .append($("<p>").addClass("product-price").text(`₺ ${price}`));
};
