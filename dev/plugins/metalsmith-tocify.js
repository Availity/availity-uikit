'use strict';

// Inspiration:
//  - https://github.com/anatoo/metalsmith-autotoc
//
// Modifications:
//  - use https://github.com/cheeriojs/cheerio
//  - use rfc3986 compliant slugs
//  - ensure ids are unique

const cheerio = require('cheerio');
const extname = require('path').extname;
const _slugify = require('slugify');
const _ = require('lodash');

function slugify(tokens) {
  const slugged = _slugify(tokens).toLowerCase();
  return slugged;
}


const cacheIds = [];

class TocItem {

  constructor(args) {
    this.init(args);
  }

  init(params) {

    const parameters = params || {};
    this.id = parameters.id || '';
    this.text = parameters.text || '';
    this.children = [];
    this.parent = null;

  }

  add(tocItem) {
    if (tocItem.parent) {
      throw new Error('tocItem.parent exists');
    }
    tocItem.parent = this;
    this.children.push(tocItem);
  }

  toJSON() {
    return {
      id: this.id,
      text: this.text,
      children: this.children
    };
  }

}

function getRootLevel(headers) {

  return headers.map(function() {
    return this.level;
  })
    .toArray()
    .sort()[0] - 1 || 1;
}

function slugifi($el) {

  let id = $el.attr('id');

  if (!id) {

    let slugId = slugify($el.text());
    if (cacheIds[slugId]) {
      slugId = slugId + _.uniqueId('-');
    }

    cacheIds[slugId] = slugId;

    id = slugId;
    $el.attr('id', id); // add ID to dom if missing

  }

  $el.wrap(`<a class="docs-headings-anchor" href="#${id}"></a>`);

  return id;

}

function buildToc($, _headers) {

  let headers = _headers;

  if (headers.length === 0) {
    return [];
  }

  const root = new TocItem();
  let toc = root;

  headers = headers.map(function() {

    const $el = $(this);

    const id = slugifi($el);

    return {
      id,
      text: $el.text(),
      level: parseInt($el.get(0).tagName.match(/^h([123456])$/i)[1], 10)
    };

  });

  let lastLevel = getRootLevel(headers);

  headers.each(function() {

    const header = this;

    const id = header.id;
    const text = header.text;
    const level = header.level;

    while (level !== 1 + lastLevel) {
      if (level < 1 + lastLevel) {
        toc = toc.parent;
        lastLevel--;
      } else if (level > 1 + lastLevel) {
        const emptyToc = new TocItem();
        toc.add(emptyToc);
        toc = emptyToc;
        lastLevel++;
      }
    }

    const newToc = new TocItem({
      text,
      id
    });

    toc.add(newToc);
    toc = newToc;
    lastLevel = level;
  });

  return root.children;
}

function plugin(_options) {

  const options = _options || {};
  options.selector = options.selector || 'h2, h3, h4, h5, h6';

  return function(files, metalsmith, done) {

    setImmediate(done);

    _.each(files, function(file, key) {

      if (!file.toc) {
        return;
      }

      if (extname(key) !== '.html') {
        return;
      }

      const contents = file.contents.toString();
      const $ = cheerio.load(contents);

      const selector = file.tocifySelector || options.selector || 'h2, h3, h4';
      const $headers = $(selector);

      const toc = buildToc($, $headers);

      file.contents = new Buffer($.html());
      file.toc = toc;

    });
  };
}

module.exports = plugin;
