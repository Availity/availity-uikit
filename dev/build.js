import clean from './clean';
import bundle from './bundle';

function build() {
  return clean()
    .then(bundle);
}

export default build;
