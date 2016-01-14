import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

import metalsmith from './metalsmith';
import Logger from './logger';
import watch from './watch';
import webpackConfig from '../webpack.config.babel';

function serv() {

  return new Promise(resolve => {

    var compiler = webpack(webpackConfig);
    var server = new WebpackDevServer(compiler, {
      contentBase: './build',
      noInfo: false, // display no info to console (only warnings and errors)
      quiet: false, // display nothing to the console
      colors: true,
      stats: { colors: true },
      watchOptions: {
        aggregateTimeout: 1200,
        poll: 1000
      }
    });

    server.listen(3000, () => {
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

export default start;
