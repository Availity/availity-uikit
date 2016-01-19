import nconf from 'nconf';
nconf.use('memory');

import clean from './clean';
import bundle from './bundle';
import Logger from './logger';

function build() {

  return clean()
    .then( () => {
      nconf.set('optimize', true);
      return bundle();
    })
    .then( () => {
      nconf.set('optimize', false);
      return bundle();
    })
    .catch( (err) => {
      Logger.log(err);
    });

}

export default build;
