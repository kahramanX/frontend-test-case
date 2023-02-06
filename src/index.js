// stiller import ediliyor
require("./assets/styles/widgets.scss");
require("./assets/styles/index.scss");
require("./assets/styles/header.scss");
require("./assets/styles/mainSlider.scss");
require("./assets/styles/bestSellerSlider.scss");
require("./assets/styles/variables.scss");

// sepet sayfası için localstorage'den alan açılıyor
window.localStorage.setItem("cart", JSON.stringify([]));
