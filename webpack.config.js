var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    "./src/index"
  ],

  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: "babel" }
    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Pair TodoList',
      filename: 'index.html',
      template: 'src/index.template.html'
    })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
