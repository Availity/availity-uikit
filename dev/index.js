#! /usr/bin/env node
'use strict';

const yargs = require('yargs');
const chalk = require('chalk');

const lint = require('./lint');
const start = require('./start');
const docs = require('./docs');
const build = require('./build');

yargs
  .usage(`Usage: ${chalk.yellow('$0')} ${chalk.green('<command>')} ${chalk.magenta('[options]')}`)

  .command('start', `${chalk.dim('Start the development server')}`, () => { start() })
  .command('lint', `${chalk.dim('Lint you source files using ESLint')}`, () => { lint() })
  .command('docs', `${chalk.dim('Builds documentation examples')}`, () => { docs() })
  .command('build', `${chalk.dim('Builds UMD and NPM versions of the library')}`, () => { build() })

  .demand(1, chalk.red('Must provide a valid command'))

  .help('help')
  .alias('h', 'help')
  .showHelpOnFail(true, 'Specify --help for available options')

  .example(chalk.yellow('$0 start'))
  .example(chalk.yellow('$0 lint'))

  .argv;
