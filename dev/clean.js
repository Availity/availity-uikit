'use strict';

const del = require('del');
const Logger = require('./logger');

function clean() {

  const directory = process.env.NODE_ENV === 'development' ? ['build/*'] : ['dist/*', 'lib/*'];
  del.sync(directory);

  Logger.ok(`Finished cleaning ${directory.toString()}`);

  return Promise.resolve(true);
}

module.exports = clean;
