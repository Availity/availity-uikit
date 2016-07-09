'use strict';

const webpack = require('webpack');
const nconf = require('nconf');
const ora = require('ora');

const Logger = require('./logger');
const webpackConfig = require('../webpack.config.production');

function bundle() {

  return new Promise((resolve, reject) => {

    const optimized = nconf.get('optimize') ? 'minified' : 'regular';

    Logger.info(`Started ${optimized} bundling`);
    const spinner = ora('Running webpack');
    spinner.color = 'yellow';
    spinner.start();

    webpack(webpackConfig()).run((err, stats) => {

      spinner.stop();

      if (err) {
        Logger.failed('webpack bundle');
        return reject(err);
      }

      Logger.log(stats.toString(webpackConfig.stats));
      Logger.ok('Finished bundling');
      resolve();

    });


  });

}

module.exports = bundle;
