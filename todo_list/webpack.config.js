const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant Page",
      filename: "index.html",
      template: "src/index.html",
    }),
    new miniCssExtractPlugin(),
  ],
  module: {
    rules: [
      { test: /\.css$/i, use: [miniCssExtractPlugin.loader, "css-loader"] },
      {
        test: /\.scss$/,
        use: [
          miniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: function () {
                  return require("autoprefixer");
                },
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,

        type: "asset/resource",
      },
    ],
  },
};
