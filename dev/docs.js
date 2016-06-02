'use strict';

const webpack = require('webpack');

const Logger = require('./logger');
const metalsmith = require('./metalsmith');
const wepackConfig = require('../webpack.config');

function bundle() {

  return new Promise((resolve, reject) => {

    // If path is not set to 'build' => Error: EACCES: permission denied, mkdir '/build'
    wepackConfig.output.path = 'build';

    webpack(wepackConfig).run((err, stats) => {

      if (err) {
        Logger.failed('webpack bundle');
        return reject(err);
      }

      Logger.log(stats.toString(wepackConfig.stats));
      Logger.ok('webpack bundle');
      resolve();

    });


  });

}


function docs() {

  return metalsmith()
    .then(bundle)
    .catch( (err) => {
      Logger.error(err);
    });
}

module.exports = docs;
