require('babel-register');

var argv = require('yargs').argv;

var run = require('./run').default;
var start = require('./start').default;
var build = require('./build').default;

switch (argv.command) {

  case 'start':
    run(start);
    break;
  case 'build':
    run(build);
    break;
  default:
    start();

}
