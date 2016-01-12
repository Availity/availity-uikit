import del from 'del';

function clean() {

  const directory = process.env.NODE_ENV !== 'production' ? 'dist/*' : 'build/*';
  del.sync([directory]);

  return Promise.resolve(true);
}

export default clean;
