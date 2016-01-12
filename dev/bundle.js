import webpack from 'webpack';
import webpackConfig from '../webpack.config.production.babel';
import Logger from './logger';

export default function bundle() {

  return new Promise((resolve, reject) => {

    webpack(webpackConfig).run((err, stats) => {

      if (err) {
        return reject(err);
      }

      Logger.log(stats.toString(webpackConfig.stats));
      resolve();

    });


  });

}
