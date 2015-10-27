var gulp = require('gulp');
var config = require('../config');
var gulpif = require('gulp-if');
var using = require('gulp-using');

gulp.task('copy:fonts', function() {
  gulp.src(config.fonts.src)
    .pipe(gulpif(config.args.verbose, using({prefix: 'Task [copy:fonts] using'})))
    .pipe(gulp.dest(config.fonts.dest));
});

gulp.task('copy:images', function() {
  gulp.src(config.images.src)
    .pipe(gulpif(config.args.verbose, using({prefix: 'Task [copy:images] using'})))
    .pipe(gulp.dest(config.images.dest));
});

gulp.task('copy:images:vendor', function() {
  gulp.src(config.vendorImages.src)
    .pipe(gulpif(config.args.verbose, using({prefix: 'Task [copy:vendor:images] using'})))
    .pipe(gulp.dest(config.vendorImages.dest));
});

gulp.task('copy:js:guide', function() {
  gulp.src(config.jsGuide.src)
    .pipe(gulpif(config.args.verbose, using({prefix: 'Task [copy:js:guide] using'})))
    .pipe(gulp.dest(config.jsGuide.dest));
});
