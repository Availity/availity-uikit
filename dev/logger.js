/* eslint no-console:0 */

import chalk from 'chalk';
import dateformat from 'dateformat';

export default class Logger {

  constructor(options) {
    this.options = options;
  }

  get canLog() {
    return process.env.NODE_ENV !== 'testing';
  }

  static log(entry) {

    let now = dateformat(new Date(), 'HH:MM:ss');

    if (this.canLog) {
      console.log(`[${ chalk.gray(now) } ${ entry }` );
    }

  }

}
