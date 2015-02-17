var fs = require('fs');
var path = require('path');
var utils = require('gulp-util');
var moment = require('moment');

var config = require('../config');

module.exports = function() {

  // Always get latest version for release task
  var pkg = JSON.parse(fs.readFileSync(path.join(config.project.path, 'package.json')));

  var banner = utils.template('/**\n' +
  ' * <%= pkg.name %> v<%= pkg.version %> -- <%= today %>\n' +
  ' * Copyright <%= copyright %> Availity, LLC \n' +
  ' */\n',
  {
    file: '',
    pkg: pkg,
    copyright: utils.date(new Date(), 'yyyy'),
    today: moment().format('MMMM-DD')
  });

  return banner;
};
