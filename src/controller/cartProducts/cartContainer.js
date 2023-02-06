let $ = require("jquery");
let cartProductElement = require("./cartProductElement");

const productsFromStorage = JSON.parse(window.localStorage.getItem("cart"));

function refreshCartProducts() {
  // Localstorage'den sepete eklenen ürünler ekleniyor
  const productsFromStorage = JSON.parse(window.localStorage.getItem("cart"));

  // İlk başta cart container boşaltılıyor,böylelikle varolan elementlerin tekrar yazdırılması engelleniyor
  $(".side-cart-container>.cart-container").empty();
  // cartProductElement fonksyionuna localstorage'den alınan veriler gönderiliyor
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
}

// her "sepete ekle" butonuna tıklandığında sepetin tetiklenmesi için export ediliyor
module.exports = refreshCartProducts;
