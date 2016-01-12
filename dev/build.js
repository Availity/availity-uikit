import clean from './clean';
import bundle from './bundle';

import Logger from './logger';

function build() {
  return clean()
    .then(bundle)
    .catch( (err) => {
      Logger.log(err);
    });
}

export default build;
