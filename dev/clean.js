'use strict';

const del = require('del');
const Logger = require('./logger');

function clean() {

  const directory = process.env.NODE_ENV !== 'development' ? 'build/*' : 'dist/*';
  del.sync([directory]);

  Logger.ok('clean');

  return Promise.resolve(true);
}

module.exports = clean;
