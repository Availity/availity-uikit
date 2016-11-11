'use strict';

const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

const config = merge(webpackConfig, {
  output: {
    // do not add slash else => Error: EACCES: permission denied, mkdir '/build'
    path: 'build'
  }
});

module.exports = config;
