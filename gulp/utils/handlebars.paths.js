var path = require('path');

module.exports = function(current, target) {
  // normalize and remove starting slash
  current = path.normalize(current).slice(0);
  target = path.normalize(target).slice(0);

  current = path.dirname(current);
  var out = path.relative(current, target);
  return out;
};
