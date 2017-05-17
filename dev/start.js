const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const _ = require('lodash');
const chalk = require('chalk');
const Logger = require('availity-workflow-logger');

const metalsmith = require('./metalsmith');

const watch = require('./watch');
const webpackConfig = require('../webpack.config');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');

const friendlySyntaxErrorLabel = 'Syntax error:';

function isLikelyASyntaxError(message) {
  return message.indexOf(friendlySyntaxErrorLabel) !== -1;
}

const PORT = 9100;

const startupMessage = _.once(() => {
  const uri = `http://localhost:${PORT}/`;
  Logger.box(`The app is running at ${chalk.green(uri)}`);
});

function formatMessage(message) {
  return message
    .replace(
      'Module build failed: SyntaxError:',
      friendlySyntaxErrorLabel
    )
    .replace(
      /Module not found: Error: Cannot resolve 'file' or 'directory'/,
      'Module not found:'
    )
    // Internal stacks are generally useless so we strip them
    .replace(/^\s*at\s((?!webpack:).)*:\d+:\d+[\s\)]*(\n|$)/gm, '') // at ... ...:x:y
    // Webpack loader names obscure CSS filenames
    .replace('./~/css-loader!./~/postcss-loader!', '')
    .replace(/\s@ multi .+/, '');
}

function compileMessage(stats) {

  const statistics = stats.toJson();
  Logger.success(`${chalk.gray('Compiled')} in ${chalk.magenta(statistics.time)} ms
`);
  startupMessage();
}

function serv() {

  Logger.info('Starting development server');

  return new Promise((resolve, reject) => {

    webpackConfig.plugins.push(new ProgressPlugin( (percentage, msg) => {

      const percent = percentage * 100;

      if (percent % 20 === 0 && msg !== null && msg !== undefined && msg.trim() !== '') {
        Logger.info(`${chalk.dim('Webpack')} ${Math.round(percent)}% ${msg}`);
      }

    }));

    const compiler = webpack(webpackConfig);

    compiler.plugin('compile', () => {
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

        let formattedErrors = json.errors.map(msg => {
          return 'Error in ' + formatMessage(msg);
        });

        if (formattedErrors.some(isLikelyASyntaxError)) {
          formattedErrors = formattedErrors.filter(isLikelyASyntaxError);
        }

        formattedErrors.forEach(error => {
          Logger.empty();
          Logger.simple(`${chalk.red(error)}`);
          Logger.empty();
        });

        Logger.failed('Failed compiling');
        reject('Failed compiling');
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
