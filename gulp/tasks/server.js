var gulp = require('gulp');

gulp.task('server:sync', function() {
  var browserSync = require('browser-sync');
  var url = require('url');
  var path = require('path');
  var fs = require('fs');
  var config = require('../config');

  browserSync({
    notify: true,
    ghostMode: false,
    logPrefix: 'browersync',
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    // will present a certificate warning in the browser.
    // https: true,
    server: {
      baseDir: config.sync.src,
      // Allow web page requests without .html file extension in URLs
      middleware: function(req, res, cb) {
        var uri = url.parse(req.url);
        if (uri.pathname.length > 1 &&
          path.extname(uri.pathname) === '' &&
          fs.existsSync('./dest' + uri.pathname + '.html')) {
          req.url = uri.pathname + '.html' + (uri.search || '');
        }
        cb();
      }
    }
  });
});
