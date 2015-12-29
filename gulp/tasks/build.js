import gulp from 'gulp';
import build from '../../docs/build';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import webpackConfig from '../../webpack.config.babel';

gulp.task('build', ['build:docs', 'build:lib']);

gulp.task('build:docs', () => {
  build();
});

gulp.task('build:lib', () => {

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

  server.listen(3000);

});
