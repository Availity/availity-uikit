require('babel-register');

var argv = require('yargs').argv;

var run = require('./run').default;
var start = require('./start').default;

switch (argv.command) {
  case 's':
    run(start);
    break;
  default:
    start();
}
