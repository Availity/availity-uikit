import chokidar from 'chokidar';
import metalsmith from './metalsmith';
import Logger from './logger';

function watch() {

  const watcher = chokidar.watch('docs', {
    ignored: /[\/\\]\./,
    persistent: true
  });

  watcher.on('change', path => {
    metalsmith();
    Logger.log(`File ${path} has been added`);
  });

  return Promise.resolve(true);

}

export default watch;
