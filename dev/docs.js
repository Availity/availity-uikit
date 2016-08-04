'use strict';
const bundle = require('./bundle');
const Logger = require('./logger');
const metalsmith = require('./metalsmith');

function docs() {

  return metalsmith()
    .then(bundle({optimize: false}))
    .catch( (err) => {
      Logger.error(err);
    });
}

module.exports = docs;
