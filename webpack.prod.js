const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: '/'
  },
  plugins: [
    new Dotenv({
      systemvars: true, // Load all system environment variables as well
      safe: true, // Load '.env.example' to verify the '.env' variables are all set
      silent: true,  // Hide any warnings
      defaults: false // Don't load '.env.defaults'
    })
  ]
});