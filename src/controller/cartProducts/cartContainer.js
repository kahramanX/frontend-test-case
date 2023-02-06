let $ = require("jquery");
let cartProductElement = require("./cartProductElement");

let productsFromStorage = JSON.parse(window.localStorage.getItem("cart"));

$(".side-cart-container>.cart-container").append(
  productsFromStorage.map((product, index) => {
    return cartProductElement(
      product.productID,
      product.imgSrc,
      product.name,
      product.price
    );
  })
);
