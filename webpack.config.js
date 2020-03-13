const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  watch: true,
  entry: "./src/components/index.tsx",
  output: {
    filename: "ui-components.js",
    path: __dirname + "/dist"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', {
          loader: "postcss-loader",
          options: {
            plugins: [
              require('cssnano')({ preset: 'default' })
            ],
          },
        }],
      },
      { test: /\.tsx?$/, loader: "babel-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "assets/[name].[hash:8].[ext]",
        },
      },
    ]
  },
  plugins: [new MiniCssExtractPlugin(), new ForkTsCheckerWebpackPlugin() ],
};