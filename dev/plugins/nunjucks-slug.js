'use strict';

const slug = require('slug');

let options = {
  mode: 'rfc3986'
};

function slugify(name) {
  return slug(name, options);
}

function setOptions(opts) {
  options = opts;
}

function install(env, customName) {
  env.addFilter(customName || 'slug', slugify);
}


module.exports = {
  slugify,
  setOptions,
  install
};

