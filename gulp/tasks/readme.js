// https://github.com/assemble/gulp-verb

var gulp = require('gulp');

gulp.task('readme', function() {

  var verb = require('gulp-verb');
  var config = require('../config').readme;

  return gulp.src(config.src)
    .pipe(verb({dest: config.name}))
    .pipe(gulp.dest(config.dest));
});
