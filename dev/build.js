'use strict';

const bundle = require('./bundle');
const Logger = require('./logger');

function build() {

  return bundle({optimize: true, production: true})
    .then( () => {
      return bundle({optimize: false, production: true});
    })
    .catch( (err) => {
      Logger.error(err);
    });

}

module.exports = build;
