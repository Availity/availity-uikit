'use strict';

const webpack = require('webpack');
const Logger = require('./logger');
const webpackConfig = require('../webpack.config.production.babel');

function bundle() {

  return new Promise((resolve, reject) => {

    webpack(webpackConfig()).run((err, stats) => {

      if (err) {
        Logger.failed('webpack bundle');
        return reject(err);
      }

      Logger.log(stats.toString(webpackConfig.stats));
      Logger.ok('webpack bundle');
      resolve();

    });


  });

}

module.exports = bundle;
