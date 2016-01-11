const gulp = require('gulp');
const bump = require('gulp-bump');
const fs = require('fs');
const path = require('path');
const prompt = require('gulp-prompt');
const semver = require('semver');
const git = require('gulp-git');
const webpack = require('webpack');
const filter = require('gulp-filter');
const gUtil = require('gulp-util');
const tagVersion = require('gulp-tag-version');

const runSequence = require('run-sequence').use(gulp);

const webpackConfig = require('../../webpack.config.production.babel');

let type = 'patch';
let loaded = false;

function pkg() {
  return JSON.parse(fs.readFileSync(path.join('./package.json'), 'utf8'));
}

gulp.task('release:sequence', () => {

  runSequence(
    'lint',
    ['clean'],
    'release:bump',
    ['release:lib'],
    'release:add',
    'release:tag'
  );
});

gulp.task('release:lib', (cb) => {

  webpack(webpackConfig, (err, stats) => {
    if (err) {
      throw new gUtil.PluginError('webpack', err);
    }

    var _stats = stats.toString({
      colors: true,
      cached: true,
      reasons: true,
      source: false,
      chunks: false
    });

    gUtil.log('[av:build]', _stats);

    if (!loaded) {
      cb();
      loaded = true;
    }

  });


});

gulp.task('release:add', () => {
  return gulp.src('./dist/*')
    .pipe(git.add({args: '-f'}));
});

gulp.task('release:tag', () => {

  return gulp.src(['./package.json', './bower.json', './dist/*', 'README.md'])
    .pipe(git.commit('bump package version v' + pkg.version)) // commit the changed version number
    .pipe(filter('package.json'))
    .pipe(tagVersion());
});

gulp.task('release:bump', () => {
  return gulp.src(['./package.json', './bower.json'])
    .pipe(bump({ type: type }))
    .pipe(gulp.dest('./'));
});

gulp.task('release', () => {


  var version = pkg().version;

  return gulp.src('')
    .pipe(prompt.prompt({
      type: 'rawlist',
      name: 'bump',
      message: 'What type of version bump would you like to do ? (current version is ' + pkg().version + ')',
      choices: [
        'patch (' + version + ' --> ' + semver.inc(version, 'patch') + ')',
        'minor (' + version + ' --> ' + semver.inc(version, 'minor') + ')',
        'major (' + version + ' --> ' + semver.inc(version, 'major') + ')',
        'none (exit)'
      ]
    }, function(res) {

      if (res.bump.match(/^patch/)) {
        type = 'patch';
      } else if (res.bump.match(/^minor/)) {
        type = 'minor';
      } else if (res.bump.match(/^major/)) {
        type = 'major';
      }

      gulp.start('release:sequence');

    }));

});
