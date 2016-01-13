require('babel-register');

var nconf = require('nconf');

var run = require('./run').default;
var start = require('./start').default;
var build = require('./build').default;
var clean = require('./clean').default;

nconf.argv().env();

switch (nconf.get('command')) {

  case 'start':
    run(start);
    break;
  case 'build':
    run(build);
    break;
  case 'clean':
    run(clean);
    break;
  default:
    start();

}
