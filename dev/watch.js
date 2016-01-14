import chokidar from 'chokidar';
import debounce from 'debounce-collect';
import metalsmith from './metalsmith';
import Logger from './logger';

function run(files) {
  Logger.log(`${files.length} file(s) changed`);
  metalsmith();
}

function watch() {

  const watcher = chokidar.watch('docs', {
    ignored: /[\/\\]\./,
    ignoreInitial: true,
    persistent: true
  });


  watcher.on('all', debounce(run, 50));

  return Promise.resolve(true);

}

export default watch;
