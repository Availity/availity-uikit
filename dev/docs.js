'use strict';

const webpack = require('webpack');

const Logger = require('./logger');
const metalsmith = require('./metalsmith');
const wepackConfig = require('../webpack.config');

function bundle() {

  return new Promise((resolve, reject) => {

    Logger.info('Started webpack compiling');

    // If path is not set to 'build' => Error: EACCES: permission denied, mkdir '/build'
    wepackConfig.output.path = 'build';

    webpack(wepackConfig).run((err, stats) => {

      if (err) {
        Logger.failed('Failed webpack compiling');
        return reject(err);
      }

      const statistics = stats.toString({
        colors: true,
        cached: true,
        reasons: false,
        source: false,
        chunks: false,
        children: false
      });

      Logger.info(statistics);
      Logger.ok('Finished webpack compiling');
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
