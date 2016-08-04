'use strict';

const webpack = require('webpack');
const ora = require('ora');

const Logger = require('./logger');
const webpackConfig = require('../webpack.config.production');

function bundle(options) {

  return new Promise((resolve, reject) => {

    const optimized = options.optimize ? 'minified' : 'unminified';

    Logger.info(`Started ${optimized} webpack compiling`);
    const spinner = ora('Running webpack');
    spinner.color = 'yellow';
    spinner.start();

    webpack(webpackConfig()).run((err, stats) => {

      spinner.stop();

      if (err) {
        Logger.failed('Failed compiling');
        reject(err);
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
      Logger.ok(`Finished ${optimized} webpack compiling`);
      resolve();

    });


  });

}

module.exports = bundle;
