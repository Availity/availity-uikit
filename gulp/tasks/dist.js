var gulp = require('gulp');
var config = require('../config');
var banner = require('../utils/banner');
var logger = require('../utils/logger');

var less = require('gulp-less');
var insert = require('gulp-insert');
var prefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var gulpif = require('gulp-if');
var using = require('gulp-using');
var minifyCSS = require('gulp-minify-css');
var filter = require('gulp-filter');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var uglify = require('gulp-uglify');

var runSequence = require('run-sequence').use(gulp);

gulp.task('dist', function() {
  runSequence(
    ['clean:css', 'clean:js', 'clean:fonts', 'clean:images'],
    ['dist:css', 'dist:js', 'dist:fonts', 'dist:images']
  );
});

gulp.task('dist:css', function() {

  return gulp.src(config.less.src)
     .pipe(plumber(function(err) {
       logger.error(err.message);
       this.emit('end');
     }))
    .pipe(less())
    .pipe(replace(config.regex.select[0], config.regex.select[1]))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(prefixer({
      browsers: config.less.browsers
    }))
    .pipe(insert.prepend(banner() + '\n'))
    .pipe(sourcemaps.write(config.css.destMaps))
    .pipe(gulpif(config.args.verbose, using({prefix:'dist:css [dest] using'})))
    .pipe(gulp.dest(config.css.dest))
    .pipe(filter('**/*.css'))
    .pipe(minifyCSS({
      keepSpecialComments: 0,
      noAdvanced: true,
      compatibility: 'ie8'
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(insert.prepend(banner() + '\n'))
    .pipe(sourcemaps.write(config.css.destMaps))
    .pipe(gulp.dest(config.css.dest));
});

gulp.task('dist:fonts', function() {
  var flatten = require('gulp-flatten');

  return gulp.src(config.fonts.src)
    .pipe(gulpif(config.args.verbose, using({prefix:'Task [dist:fonts] using'})))
    .pipe(flatten())
    .pipe(gulp.dest(config.fonts.destDist));
});

gulp.task('dist:js', function() {

  return gulp.src(config.lib.src)
    .pipe(concat(config.lib.name))
    .pipe(insert.prepend(banner() + '\n'))
    .pipe(gulp.dest(config.lib.destDist))
    .pipe(uglify({
      mangle: false,
      preserveComments: false,
      compress: false
    }))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(insert.prepend(banner() + '\n'))
    .pipe(gulpif(config.args.verbose, using({prefix:'Task [dist:js] using'})))
    .pipe(gulp.dest(config.lib.destDist));

});

gulp.task('dist:images', function() {
  return gulp.src(config.images.src)
    .pipe(gulpif(config.args.verbose, using({prefix:'Task [dist:images] using'})))
    .pipe(gulp.dest(config.images.destDist));
});
