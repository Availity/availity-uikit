import slug from 'slug';

let options = {
  mode: 'rfc3986'
};

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
