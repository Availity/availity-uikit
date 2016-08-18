'use strict';

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const _ = require('lodash');
const chalk = require('chalk');

const metalsmith = require('./metalsmith');
const Logger = require('./logger');

const watch = require('./watch');
const webpackConfig = require('../webpack.config');

const PORT = 9100;

function serv() {

  Logger.info('Starting development server');

  return new Promise( (resolve, reject) => {

    const compiler = webpack(webpackConfig);

    compiler.plugin('compile', () => {
      Logger.info('Started compiling');
    });

    const message = _.once(stats => {

      const hasErrors = stats.hasErrors();
      const hasWarnings = stats.hasWarnings();

      if (!hasErrors && !hasWarnings) {

        const statistics = stats.toString({
          colors: true,
          cached: true,
          reasons: false,
          source: false,
          chunks: false,
          children: false
        });

        const uri = `http://localhost:${PORT}/`;

        Logger.info(statistics);
        Logger.ok('Finished compiling');
        Logger.log(`The app is running at ${chalk.magenta(uri)}`);

        return;

      }

      if (hasErrors) {
        Logger.failed('Failed compiling');
        Logger.info(stats.compilation.errors);
        reject('Failed compiling');
      }

    });

    compiler.plugin('done', stats => {

      // The bless-webpack-plugin listens on the "optimize-assets" and triggers an "emit" event if changes are
      // made to any css chunks.  This makes it appear that Webpack is bundling everything twice in the logs.
      // Removing the bless-webpack-plugin resolves the issue but then we run the risk of creating css bundles
      // great than the IE9 limit.
      //
      // https://blogs.msdn.microsoft.com/ieinternals/2011/05/14/stylesheet-limits-in-internet-explorer
      //
      message(stats);

    });

    const server = new WebpackDevServer(compiler, {
      contentBase: './build',
      noInfo: true, // display no info to console (only warnings and errors)
      quiet: true, // display nothing to the console
      compress: true,
      hot: true,
      watchOptions: {
        ignored: /node_modules/
      }
    });

    server.listen(PORT, (err) => {

      if (err) {
        Logger.failed(err);
        reject(err);
      }

      Logger.ok('Finished development server');
      resolve();
    });

  });

}

function start() {

  return metalsmith()
    .then(serv)
    .then(watch)
    .catch( (err) => {
      Logger.error(err);
    });
}

module.exports = start;
