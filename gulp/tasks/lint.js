var gulp = require('gulp');
var eslint = require('gulp-eslint');
var using = require('gulp-using');
var gulpif = require('gulp-if');

var args = require('yargs').argv;

gulp.task('lint', ['lint:web', 'lint:node']);

gulp.task('lint:web', () => {

  gulp.src('*.js')
    .pipe(gulpif(args.args.verbose, using({
      prefix: 'Task [lint:js] using'
    })))
    .pipe(eslint('.eslintrc'))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lint:node', () => {

  gulp.src(['*.js', '!./js/**.js'])
    .pipe(gulpif(args.args.verbose, using({
      prefix: 'Task [lint:js] using'
    })))
    .pipe(eslint('.eslintrc'))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
