// webpack.config.js
const path = require("path");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // Used for images in the JavaScript
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: "babel-loader",
      },
    ],
  },
};
