/* eslint no-console:0 */

import chalk from 'chalk';
import dateformat from 'dateformat';

export default class Logger {

  constructor(options) {
    this.options = options;
  }

  static log(entry) {

    let now = dateformat(new Date(), 'HH:MM:ss');
    let color = entry instanceof Error ? 'red' : 'gray';

    console.log(`[${ chalk.cyan(now) }] ${ chalk[color](entry) }` );

  }

}
