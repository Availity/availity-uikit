var gulp = require('gulp');

gulp.task('clean', ['clean:docs']);
gulp.task('clean:dist', ['clean:css', 'clean:js', 'clean:fonts', 'clean:images']);

gulp.task('clean:docs', function(cb) {
  var config = require('../config');
  var del = require('del');

  del([config.docs.dest], function() {
    cb();
  });
});

gulp.task('clean:css', function(cb) {
  var config = require('../config');
  var del = require('del');

  del([config.css.dest], function() {
    cb();
  });
});

gulp.task('clean:fonts', function(cb) {
  var config = require('../config');
  var del = require('del');

  del([config.fonts.destDist], function() {
    cb();
  });
});

gulp.task('clean:js', function(cb) {
  var config = require('../config');
  var del = require('del');

  del([config.lib.destDist], function() {
    cb();
  });
});

gulp.task('clean:images', function(cb) {
  var config = require('../config');
  var del = require('del');

  del([config.images.destDist], function() {
    cb();
  });
});
