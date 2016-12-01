'use strict';

let path = require('path');
let webpack = require('webpack');

// TODO: dist and dev builds, eslint, live reload, sass

module.exports = {
  entry: path.join(process.cwd(), 'source/client/app.js'),
  output: {
    path: './dist/client/',
    filename: 'build.js'
  },
  devtool: 'sourcemap',
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
