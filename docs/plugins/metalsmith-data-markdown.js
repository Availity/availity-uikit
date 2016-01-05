// Modified from: https://github.com/majodev/metalsmith-data-markdown

const marked = require('marked');
const cheerio = require('cheerio');
const he = require('he');
const _ = require('lodash');

const extname = require('path').extname;

/**
 * Check if a `file` is html.
 *
 * @param {String} file
 * @return {Boolean}
 */

let isHtmlFile = function(file) {
  return /\.html?/.test(extname(file));
};

/**
 * A Metalsmith plugin to use markdown content within html tags (with data-markdown attribute)
 * parses markdown (via marked) and inserts html on all tags that have the data-markdown attribute set (via cheerio)
 * he is required to decode html entities
 *
 * Idea originally by Paul Irish, see https://gist.github.com/paulirish/1343518
 *
 * @param {Object} options
 * @return {Function}
 */

export default function plugin(options) {

  const opts = options || {};

  opts.removeAttributeAfterwards = opts.removeAttributeAfterwards || false;

  // hand opts to marked

  return function(files, metalsmith, done) {

    setImmediate(done);

    _.each(files, function(file, name) {

      if (!isHtmlFile(file.path || name)) {
        return;
      }

      let contents = file.contents.toString();
      let foundMatches = false;

      // parse html content in cheerio to query it
      let $ = cheerio.load(contents);

      $(opts.selector || '[data-markdown]').each(function() {

        // grab the html of the node and
        // decode all html entities
        // decoding fixes problems with smartypants
        let _html = $(this).html();
        const markedText = marked(he.decode(_html));

        // set compiled markdown content to node
        $(this).html(markedText);
        foundMatches = true;

        // remove attr if configured
        if (opts.removeAttributeAfterwards) {
          $(this).removeAttr('data-markdown');
        }

      });

      if (foundMatches) { // only do anything to contents, if matches were found
        file.contents = new Buffer($.html());
      }

    });
  };
}
