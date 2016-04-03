'use strict';

const eslint = require('eslint');
const globby = require('globby');

const Logger = require('./logger');

function lint() {

  const engine = new eslint.CLIEngine({
    useEslintrc: true
  });

  return new Promise((resolve, reject) => {

    globby(['**/**.js', '!node_modules/**', '!bower_components/**', '!dist/**', '!build/**']).then( paths => {

      const report = engine.executeOnFiles(paths.slice(2));
      const formatter = engine.getFormatter();

      if (report.errorCount || report.warningCount) {
        Logger.failed('eslint');
        Logger.simple(`${formatter(report.results)}`);
        reject();
      } else {
        Logger.ok('eslint');
        resolve();
      }


    });

  });

}

module.exports = lint;
