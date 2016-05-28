'use strict';

const chokidar = require('chokidar');
const debounce = require('debounce-collect');
const metalsmith = require('./metalsmith');
const Logger = require('./logger');

function run(files) {
  Logger.log(`${files.length} file(s) changed`);
  metalsmith();
}

function watch() {

  const watcher = chokidar.watch('docs', {
    ignored: /[\/\\]\./,
    ignoreInitial: true,
    persistent: true
  });

  watcher.on('all', debounce(run, 50));

  return Promise.resolve(true);

}

module.exports = watch;
