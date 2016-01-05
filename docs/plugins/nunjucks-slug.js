import slug from 'slug';

let options = {};

function slugify(name) {
  return slug(name, options);
}

export default slugify;

export function setOptions(opts) {
  options = opts;
}

export function install(env, customName) {
  env.addFilter(customName || 'slug', slugify);
}
