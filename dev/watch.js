import chokidar from 'chokidar';
import chalk from 'chalk';
import metalsmith from './metalsmith';
import Logger from './logger';

function watch() {

  const watcher = chokidar.watch('docs', {
    ignored: /[\/\\]\./,
    ignoreInitial: true,
    persistent: true
  });

  watcher.on('all', (event, path) => {
    metalsmith();
    Logger.log(`[${chalk.yellow(event)}] ${path} `);
  });

  return Promise.resolve(true);

}

export default watch;
