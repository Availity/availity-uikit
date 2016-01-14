/* eslint no-console:0 */

import chalk from 'chalk';
import dateformat from 'dateformat';
import symbols from 'log-symbols';

export default class Logger {

  constructor(options) {
    this.options = options;
  }

  static ok(entry) {
    this._log(`${symbols.success} ${entry}`, 'green');
  }

  static warning(entry) {
    this._log(entry, 'yellow');
  }

  static error(entry) {
    this._log(entry, 'red');
  }

  static _log(entry, _color) {

    let now = dateformat(new Date(), 'HH:MM:ss');
    let defaultColor = entry instanceof Error ? 'red' : 'gray';

    let color = _color || defaultColor;

    console.log(`[${ chalk.cyan(now) }] ${ chalk[color](entry) }` );

  }

  static log(entry) {
    this._log(entry);
  }

}
