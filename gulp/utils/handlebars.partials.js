var glob = require('glob');
var path = require('path');
var config = require('../config');
var logger = require('../utils/logger');
var _s = require('underscore.string');

module.exports = function(target) {

  var partials = {};

  // Scan for partials relative to the project root path
  var partialPaths = glob.sync(path.join(config.project.path, target));

  // Fill partials object
  for(var i = 0; i < partialPaths.length; i++) {
    var partialName = path.basename(partialPaths[i], config.docs.templates.extension);
    var _partialName = _s.camelize(partialName);
    partials[_partialName] = partialPaths[i];
    logger.info('Handlebars partial name converted from %s => %s', partialName, _partialName);
  }

  return partials;
};
