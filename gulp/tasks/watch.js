import gulp from 'gulp';

gulp.task('watch', ['watch:docs']);

gulp.task('watch:docs', () => {
  gulp.watch(['docs/content/**/*', 'docs/layouts/**/*'], ['build:docs']);
});
