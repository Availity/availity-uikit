var gulp = require('gulp');
var config = require('../config');
require('availity-limo')(gulp, config);

gulp.task('default', [
  'concat:vendor',
  'concat:lib',
  'less:dev',
  'copy:images',
  'copy:images:vendor',
  'copy:fonts',
  'copy:polyfills',
  'copy:js:guide',
  'build',
  'server:sync',
  'watch'
]);
