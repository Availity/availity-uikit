var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('tests', function() {
  return gulp.src('./tests/build.js', { read: false })
    .pipe(mocha({
      reporter: 'spec',
      globals: ['describe', 'before', 'after']
    }));
});
