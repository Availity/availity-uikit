'use strict';

const nconf = require('nconf');
nconf.use('memory');

const clean = require('./clean');
const bundle = require('./bundle');
const Logger = require('./logger');

function build() {

  return clean()
    .then( () => {
      nconf.set('optimize', true);
      return bundle();
    })
    .then( () => {
      nconf.set('optimize', false);
      return bundle();
    })
    .catch( (err) => {
      Logger.log(err);
    });

}

module.exports = build;
