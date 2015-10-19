var path = require('path');

module.exports = function(_current, _target) {
  // normalize and remove starting slash
  var current = path.normalize(_current).slice(0);
  var target = path.normalize(_target).slice(0);

  current = path.dirname(current);
  var out = path.relative(current, target);
  return out;
};
