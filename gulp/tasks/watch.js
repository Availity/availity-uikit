var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['watch:less', 'watch:js', 'watch:js:guide', 'watch:partials', 'watch:docs', 'watch:images']);

gulp.task('watch:less', function() {
  gulp.watch(config.less.targets, ['less:dev']);
});

gulp.task('watch:css', function() {
  gulp.watch(config.css.src, ['sync:css']);
});

gulp.task('watch:js', function() {
  gulp.watch(config.lib.src, ['concat:lib']);
});

gulp.task('watch:js:guide', function() {
  gulp.watch(config.jsGuide.src, ['copy:js:guide']);
});

gulp.task('watch:images', function() {
  gulp.watch(config.images.src, ['copy:images']);
});

gulp.task('watch:partials', function() {
  gulp.watch(config.docs.partials.src, ['build:handlebars:partials', 'build:docs']);
});

gulp.task('watch:docs', function() {
  gulp.watch([
    config.docs.all.src,
    config.docs.templates.targets,
    config.docs.partials.targets],
    ['build:docs']);
});
