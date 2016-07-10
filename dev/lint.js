'use strict';

const eslint = require('eslint');
const globby = require('globby');
const ora = require('ora');

const Logger = require('./logger');

function lint() {

  const engine = new eslint.CLIEngine({
    useEslintrc: true
  });

  return new Promise((resolve, reject) => {

    Logger.info('Started linting');
    const spinner = ora('running linter rules');
    spinner.color = 'yellow';
    spinner.start();

    globby([
      '**/**.js',
      '!node_modules/**',
      '!bower_components/**',
      '!build/**',
      '!dist/**',
      '!docs/**',
      '!fonts/**',
      '!images/**',
      '!less/**'
    ]).then( paths => {

      const report = engine.executeOnFiles(paths.slice(2));
      const formatter = engine.getFormatter();

      if (report.errorCount || report.warningCount) {
        Logger.failed('Failed linting');
        Logger.info(`${formatter(report.results)}`);
        reject();
      } else {
        Logger.ok('Finished linting');
        resolve();
      }


    });

  });

}

module.exports = lint;
