const path = require('path')

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: ' inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            plugins: ['transform-object-rest-spread']
          }
        }
      },
    ]
  },
  devServer: {
    contentBase: './src'
  }
}
