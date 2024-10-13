const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: '/'
  },
  plugins: [
    new Dotenv({
      safe: true,
      systemvars: true,
      silent: true,
      defaults: false
    })
  ]
});