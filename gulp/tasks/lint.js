var gulp = require('gulp');
var eslint = require('gulp-eslint');
var using = require('gulp-using');
var gulpif = require('gulp-if');

var config = require('../config');

gulp.task('lint', ['lint:js', 'lint:lib']);

gulp.task('lint:js', function() {

  gulp.src(config.js.src)
    .pipe(gulpif(config.args.verbose, using({
      prefix: 'Task [lint:js] using'
    })))
    .pipe(eslint('.eslintrc'))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lint:js:guide', function() {

  gulp.src(config.jsGuide.src)
    .pipe(gulpif(config.args.verbose, using({
      prefix: 'Task [lint:js:guide] using'
    })))
    .pipe(eslint('./js/.eslintrc'))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lint:lib', function() {

  gulp.src(config.lib.targets)
    .pipe(gulpif(config.args.verbose, using({
      prefix: 'Task [lint:lib] using'
    })))
    .pipe(eslint('./js/.eslintrc'))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
