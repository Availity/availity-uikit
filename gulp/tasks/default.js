var gulp = require('gulp');

gulp.task('default', [
  'concat:vendor',
  'concat:lib',
  'less:dev',
  'copy:images',
  'copy:images:vendor',
  'copy:fonts',
  'copy:js:guide',
  'build',
  'server:sync',
  'watch'
]);
