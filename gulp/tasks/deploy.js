var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', ['deploy:sequence']);

gulp.task('deploy:github:pages', function () {
  return gulp.src('./build/guide/**/*')
    .pipe(ghPages());
});

var tasks = [
  'concat:vendor',
  'concat:lib',
  'less:dev',
  'copy:images',
  'copy:images:vendor',
  'copy:fonts',
  'copy:polyfills',
  'copy:js:guide',
  'build'
];

gulp.task('deploy:sequence', function() {
  runSequence(
    'lint',
    ['clean:css', 'clean:js', 'clean:fonts', 'clean:images'],
    tasks,
    'deploy:github:pages'
  );
});
