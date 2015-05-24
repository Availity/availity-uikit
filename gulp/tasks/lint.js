var gulp = require('gulp');

gulp.task('lint', ['lint:js', 'lint:lib'], function() {

});

gulp.task('lint:js', function() {

  var jshint = require('gulp-jshint');
  var stylish = require('jshint-stylish');
  var jscs = require('gulp-jscs');

  var config = require('../config');

  gulp.src(config.js.src)
    .pipe(jscs())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('lint:js:guide', function() {

  var jshint = require('gulp-jshint');
  var stylish = require('jshint-stylish');
  var jscs = require('gulp-jscs');

  var config = require('../config');

  gulp.src(config.jsGuide.src)
    .pipe(jscs())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('lint:lib', function() {

  var jshint = require('gulp-jshint');
  var stylish = require('jshint-stylish');
  var jscs = require('gulp-jscs');

  var config = require('../config');

  gulp.src(config.lib.targets)
    .pipe(jscs())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
