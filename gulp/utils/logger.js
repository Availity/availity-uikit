var gUtil = require('gulp-util');
var chalk = require('chalk');
var util = require('util');
var config = require('../config');

var prefix = chalk.yellow('[availity]');

var log = function(color, args) {
  var message = util.format.apply(util, args);
  message = chalk[color](message);
  message = [prefix, message].join(' ');
  gUtil.log(message);
};

var logger = {

  info: function() {
    if (!config.args.verbose) {
      return;
    }
    var args = Array.prototype.slice.call(arguments);
    log('blue', args);
  },

  error: function() {
    var args = Array.prototype.slice.call(arguments);
    log('red', args);
  }

};

module.exports = logger;
