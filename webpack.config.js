const webpack = require('webpack');

module.exports = {
  entry: "./client/main.js",
  output: {
    path: __dirname + '/public/build/',
    publicPath: "build/",
    filename: "build.js"
  },
  module: {
    noParse: /node_modules\/localforage\/dist\/localforage.js/,
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!autoprefixer-loader!less",
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.jsx$/,
        loader: "react-hot!babel",
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
    node: {
        net: "empty",
        dns: "empty"
    }
}