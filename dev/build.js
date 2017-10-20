const Logger = require('availity-workflow-logger');
const bundle = require('./bundle');


function build() {
  return bundle({ optimize: true, production: true })
    .then(() => bundle({ optimize: false, production: true }))
    .catch(err => {
      Logger.error(err);
    });
}

module.exports = build;
