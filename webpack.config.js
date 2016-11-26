var path = require('path');
module.exports = {
  entry: path.join(process.cwd(), 'source/client/app.jsx'),
  output: {
    path: './dist/client/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx$/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
