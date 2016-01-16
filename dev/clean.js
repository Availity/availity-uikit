import del from 'del';
import Logger from './logger';

function clean() {

  const directory = process.env.NODE_ENV !== 'development' ? 'build/*' : 'dist/*';
  del.sync([directory]);

  Logger.ok('clean');

  return Promise.resolve(true);
}

export default clean;
