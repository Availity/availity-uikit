/* eslint no-console:0 */
const chalk = require('chalk');
const figures = require('figures');
const boxen = require('boxen');

class Logger {

  constructor(options) {
    this.options = options;
  }

  static warn(entry) {
    this.record(entry, 'yellow');
  }

  static error(entry) {
    this.record(entry, 'red');
  }

  static info(entry) {
    this.record(entry);
  }

  static debug(entry) {
    this.record(entry);
  }

  static log(entry) {
    this.record(entry);
  }

  // › Started dev server
  static record(entry, color) {

    const defaultColor = entry instanceof Error ? 'red' : 'gray';
    const crayoloa = color || defaultColor;

    // Determine color of prefix log
    let delimeter = chalk.bold[crayoloa](figures.pointerSmall);
    delimeter = `${delimeter}`;

    console.log(`${delimeter} ${chalk[crayoloa](entry) }` );

  }

  static simple(entry) {
    console.log(entry);
  }

  static empty() {
    console.log('');
  }

  // ✖ [ ERROR] Failed linting
  static failed(entry) {
    const prefix = chalk.red(figures.cross);
    const label = chalk.white.bold(' ERROR ');
    console.log(`${prefix} ${chalk.bgRed(label)} ${chalk.red(entry)}`);
  }

  // ✔︎ Finished linting
  static success(entry) {

    const prefix = chalk.green.bold(figures.tick);
    console.log(`${prefix} ${chalk.gray(entry)}` );

  }

  static box(entry) {
    console.log(boxen(`${chalk.gray(entry)}`, {padding: 1, borderColor: 'yellow', borderStyle: 'classic', dimBorder: true}));
  }

}

module.exports = Logger;
