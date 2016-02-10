require('babel-register');

var nconf = require('nconf');

var run = require('./run');
var start = require('./start');
var build = require('./build');
var clean = require('./clean');
var lint = require('./lint');
var release = require('./release');
var docs = require('./docs');

nconf.argv().env();

switch (nconf.get('command')) {

  case 'start':
    run(start);
    break;
  case 'release':
    run(release);
    break;
  case 'build':
    run(build);
    break;
  case 'docs':
    run(docs);
    break;
  case 'lint':
    run(lint);
    break;
  case 'clean':
    run(clean);
    break;
  default:
    start();

}
