const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const _ = require('lodash');
const chalk = require('chalk');
const Logger = require('availity-workflow-logger');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');

const metalsmith = require('./metalsmith');

const watch = require('./watch');
const webpackConfig = require('../webpack.config');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');

const PORT = 9100;

const startupMessage = _.once(() => {
  const uri = `http://localhost:${PORT}/`;
  Logger.box(`The app is running at ${chalk.green(uri)}`);
});

function compileMessage(stats) {

  const statistics = stats.toJson();
  Logger.success(`${chalk.gray('Compiled')} in ${chalk.magenta(statistics.time)} ms
`);
  startupMessage();
}

function serv() {

  Logger.info('Starting development server');

  return new Promise((resolve, reject) => {

    let previousPercent;

    webpackConfig.plugins.push(new ProgressPlugin( (percentage, msg) => {

      const percent = Math.round(percentage * 100);

      if (previousPercent !== percent && percent % 10 === 0 && msg !== null && msg !== undefined && msg.trim() !== '') {
        Logger.info(`${chalk.dim('Webpack')} ${percent}% ${msg}`);
        previousPercent = percent;
      }

    }));

    const compiler = webpack(webpackConfig);

    compiler.plugin('invalid', () => {
      Logger.info('Started compiling');
    });

    const message = _.debounce(compileMessage, 500);

    compiler.plugin('done', stats => {

      const hasErrors = stats.hasErrors();
      const hasWarnings = stats.hasWarnings();

      if (!hasErrors && !hasWarnings) {
        message(stats);
      }

      if (hasErrors) {

        // https://webpack.js.org/configuration/stats/
        const json = stats.toJson({
          assets: false,
          colors: true,
          version: false,
          hash: false,
          timings: false,
          chunks: false,
          chunkModules: false,
          errorDetails: true
        });

        const messages = formatWebpackMessages(json);

        messages.errors.forEach(error => {
          Logger.empty();
          Logger.simple(`${chalk.red(error)}`);
          Logger.empty();
        });

        Logger.failed('Failed compiling');
        Logger.empty();
        reject(json.errors);
      }

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

      Logger.success('Finished development server');
      resolve();
    });

  });

}

function start() {

  return metalsmith()
    .then(serv)
    .then(watch)
    .catch((err) => {
      Logger.error(err);
    });
}

module.exports = start;
