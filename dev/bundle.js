import webpack from 'webpack';
import Logger from './logger';
import webpackConfig from '../webpack.config.production.babel';

export default function bundle() {

  return new Promise((resolve, reject) => {

    webpack(webpackConfig()).run((err, stats) => {

      if (err) {
        return reject(err);
      }

      Logger.log(stats.toString(webpackConfig.stats));
      resolve();

    });


  });

}
