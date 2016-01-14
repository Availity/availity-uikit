import del from 'del';
import Logger from './logger';

function clean() {

  const directory = process.env.NODE_ENV !== 'production' ? 'dist/*' : 'build/*';
  del.sync([directory]);

  Logger.ok('clean');

  return Promise.resolve(true);
}

export default clean;
