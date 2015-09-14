var gulp = require('gulp');

gulp.task('clean', ['clean:docs']);
gulp.task('clean:dist', ['clean:css', 'clean:js', 'clean:fonts', 'clean:images']);

gulp.task('clean:docs', function() {
  var config = require('../config');
  var del = require('del');

  return del([config.docs.dest]);
});

gulp.task('clean:css', function() {
  var config = require('../config');
  var del = require('del');

  return del([config.css.dest]);
});

gulp.task('clean:fonts', function() {
  var config = require('../config');
  var del = require('del');

  return del([config.fonts.destDist]);
});

gulp.task('clean:js', function() {
  var config = require('../config');
  var del = require('del');

  return del([config.lib.destDist]);
});

gulp.task('clean:images', function() {
  var config = require('../config');
  var del = require('del');

  return del([config.images.destDist]);
});
