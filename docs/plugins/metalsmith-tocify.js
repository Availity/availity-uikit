// https://github.com/segmentio/metalsmith-headings/blob/master/lib/index.js
//
const cheerio = require('cheerio');
const extname = require('path').extname;
const slug = require('slug');
const _ = require('lodash');

/**
 * - Find all the heading in the documents
 * -
 *
 * @param {String or Object} options (optional)
 *   @property {Array} selectors
 */

export default function plugin(_options) {

  let options = _options;

  if (typeof options === 'string') {
    options = { selectors: [options] };
  }

  options = options || {};
  let selectors = options.selectors || ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  return function(files, metalsmith, done) {

    setImmediate(done);

    _.each(files, function(file, key) {

      if (extname(key) !== '.html') {
        return;
      }

      const contents = file.contents.toString();
      const $ = cheerio.load(contents);
      file.headings = [];

      // Collect all the selectors
      selectors.forEach(function(selector) {

        $(selector).each(function() {

          let id = $(this).attr('id');
          if (!id) {
            var slugId = slug($(this).text(), {'mode': 'rfc3986'});
            id = slugId;
            $(this).attr('id', id); // add ID to dom if missing
          }
          const level = parseInt($(this)[0].name.match(/^h([123456])$/i)[1], 10);
          const text = $(this).text();
          const tag = $(this)[0].name;

          file.headings.push({
            id: id,
            tag: tag,
            text: text,
            level: level
          });

          options.previousLevel = level;

        });
      });

      file.contents = new Buffer($.html());
    });
  };
}
