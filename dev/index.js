'use strict';

const nconf = require('nconf');

const commands = {
  run: require('./run'),
  start: require('./start'),
  build: require('./build'),
  clean: require('./clean'),
  lint: require('./lint'),
  release: require('./release'),
  docs: require('./docs')
};

nconf.argv().env();
const command = nconf.get('c');
commands[command]();
