var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);
var ghPages = require('gulp-gh-pages');
var os = require('os');
var path = require('path');
var fs = require('fs');

var config = require('../config');

gulp.task('deploy', ['deploy:sequence']);

var getName = function() {
  var pkg = JSON.parse(fs.readFileSync(path.join(config.project.path, 'package.json'), 'utf8'));
  return pkg.name;
};

gulp.task('deploy:github:pages', function () {
  return gulp.src('./build/guide/**/*')
    .pipe(ghPages({
      cacheDir: path.join(os.tmpdir(), getName())
    }));
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
