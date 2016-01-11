const gulp = require('gulp');
const rimraf = require('rimraf');

gulp.task('clean', (cb) => {
  rimraf('./dist', cb);
});

