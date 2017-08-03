const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    resolve(__dirname, './App'),
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname),
    publicPath: '/',
  },
  context: resolve(__dirname),
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    contentBase: resolve(__dirname),
    publicPath: '/',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [resolve(__dirname, '../src'), resolve(__dirname)],
        use: 'babel-loader',
      },
    ],
  },
  performance: { hints: false },
}