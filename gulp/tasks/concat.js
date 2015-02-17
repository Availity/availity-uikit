var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('../config');
var gulpif = require('gulp-if');
var using = require('gulp-using');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('concat:vendor', function() {
  gulp.src(config.vendor.src)
    .pipe(gulpif(config.args.verbose, using({prefix:'Task [concat:vendor] using'})))
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(config.vendor.dest));
});

gulp.task('concat:lib', function() {
  gulp.src(config.lib.src)
    .pipe(gulpif(config.args.verbose, using({prefix:'Task [concat:js] using'})))
    .pipe(concat(config.lib.name))
    .pipe(gulp.dest(config.lib.dest))
    .pipe(reload({ stream:true }));
});

gulp.task('concat:vendor', function() {
  gulp.src(config.vendor.src)
    .pipe(gulpif(config.args.verbose, using({prefix:'Task [concat:vendor] using'})))
    .pipe(concat(config.vendor.name))
    .pipe(gulp.dest(config.vendor.dest))
    .pipe(reload({ stream:true }));
});
