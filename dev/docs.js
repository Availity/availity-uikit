'use strict';

const clean = require('./clean');
const bundle = require('./bundle');
const Logger = require('./logger');
const metalsmith = require('./metalsmith');

function docs() {

  return clean()
    .then(metalsmith)
    .then(() => {
      return bundle({
        optimize: false,
        production: false
      });
    })
    .catch( (err) => {
      Logger.error(err);
    });
}

module.exports = docs;
