const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    `${path.resolve(__dirname, 'src')}/index.jsx`
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
      },
    ],
  },
}
