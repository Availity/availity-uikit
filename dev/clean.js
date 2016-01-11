import del from 'del';

function clean() {
  const directory = process.env.NODE_ENV !== 'production' ? '/dist/*' : 'build/*';
  return del([directory], { dot: true });
}

export default clean;
