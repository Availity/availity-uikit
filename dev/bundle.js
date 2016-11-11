'use strict';

const webpack = require('webpack');
const ora = require('ora');

const Logger = require('./logger');
const webpackConfig = require('../webpack.config.production');
const webpackDocsConfig = require('../webpack.config.docs');

const ProgressPlugin = require('webpack/lib/ProgressPlugin');

function bundle(options) {

  return new Promise((resolve, reject) => {

    const optimized = options.optimize ? 'with optimizations' : 'with no optimizations';

    Logger.info(`Started compiling ${optimized}`);
    const spinner = ora('Running webpack');
    spinner.color = 'yellow';
    spinner.start();

    const config = options.production ? webpackConfig(options) : webpackDocsConfig;

    config.plugins.push(new ProgressPlugin( (percentage, msg) => {

      const percent = percentage * 100;

      if (percent % 20 === 0 && msg !== null && msg !== undefined && msg !== ''){
        spinner.text = `webpack ${msg}`;
      }

    }));

    webpack(config).run((err, stats) => {

      if (err) {
        spinner.fail();
        Logger.failed('Failed compiling');
        reject(err);
        return;
      }

      spinner.stop();

      const statistics = stats.toString({
        colors: true,
        cached: true,
        reasons: false,
        source: false,
        chunks: false,
        children: false
      });

      Logger.info(statistics);
      Logger.ok(`Finished compiling ${optimized}`);
      resolve();

    });


  });

}

module.exports = bundle;
