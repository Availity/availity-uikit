const Logger = require('availity-workflow-logger');
const del = require('del');

function clean() {
  const directory = process.env.NODE_ENV === 'development' ? ['build/*'] : ['dist/*', 'lib/*'];
  del.sync(directory);

  Logger.success(`Finished cleaning ${directory.toString()}`);

  return Promise.resolve(true);
}

module.exports = clean;
