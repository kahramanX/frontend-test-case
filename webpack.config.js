const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: [
    "./src/index.js",
    "./src/controller/sliders.js",
    "./src/controller/sortedProducts/featuredProduct.js",
    "./src/controller/sortedProducts/bestSellerProduct.js",
    "./src/controller/mainSlider/mainSlider.js",
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
};
