// Inspiration:
//  - https://github.com/anatoo/metalsmith-autotoc
//
// Modifications:
//  - use https://github.com/cheeriojs/cheerio
//  - use rfc3986 compliant slugs
//  - ensure ids are unique

const cheerio = require('cheerio');
const extname = require('path').extname;
const slug = require('slug');
const _ = require('lodash');

const cacheIds = [];

class TocItem {

  constructor(args) {
    this.init(args);
  }

  init(params) {

    let parameters = params || {};
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

function slugify($el) {

  let id = $el.attr('id');

  if (!id) {

    let slugId = slug($el.text(), {'mode': 'rfc3986'});
    if (cacheIds[slugId]) {
      slugId = slugId + _.uniqueId('-');
    }

    cacheIds[slugId] = slugId;

    id = slugId;
    $el.attr('id', id); // add ID to dom if missing
  }

  return id;

}

function buildToc($, _headers) {

  let headers = _headers;

  if (headers.length === 0) {
    return [];
  }

  let root = new TocItem();
  let toc = root;

  headers = headers.map(function() {

    let $el = $(this);

    let  id = slugify($el);

    return {
      id: id,
      text: $el.text(),
      level: parseInt($el.get(0).tagName.match(/^h([123456])$/i)[1], 10)
    };

  });

  let lastLevel = getRootLevel(headers);

  headers.each(function() {

    let header = this;

    let id = header.id;
    let text = header.text;
    let level = header.level;

    while (level !== 1 + lastLevel) {
      if (level < 1 + lastLevel) {
        toc = toc.parent;
        lastLevel--;
      } else if (level > 1 + lastLevel) {
        let emptyToc = new TocItem();
        toc.add(emptyToc);
        toc = emptyToc;
        lastLevel++;
      }
    }

    let newToc = new TocItem({
      text: text,
      id: id
    });

    toc.add(newToc);
    toc = newToc;
    lastLevel = level;
  });

  return root.children;
}

export default function plugin(_options) {

  let options = _options || {};
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

      let selector = file.tocifySelector || options.selector || 'h3, h4';
      let $headers = $(selector);

      let toc = buildToc($, $headers);

      file.contents = new Buffer($.html());
      file.toc = toc;

    });
  };
}
