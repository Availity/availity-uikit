var gulp = require('gulp');
var gulpif = require('gulp-if');
var browserSync = require('browser-sync');
var using = require('gulp-using');
var reload = browserSync.reload;

var config = require('../config');

gulp.task('sync:css', function() {

  return gulp.src(config.css.src)
    .pipe(gulpif(config.args.verbose, using({prefix:'Task [sync:css] using'})))
    .pipe(reload({stream:true}));
});
