const path = require('path')
const webpack = require('webpack')

// TODO: dist and dev builds, eslint, live reload, sass

module.exports = {
  entry: path.join(process.cwd(), 'source/client/app.js'),
  output: {
    path: './static/js/',
    filename: 'client.js',
  },
  devtool: 'sourcemap',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
}
