require('babel-register');

var argv = require('yargs').argv;

var start = require('./start').default;

switch (argv.command) {

  case 's':
    start();
    break;
  default:
    start();
}
