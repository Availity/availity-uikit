'use strict';

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

const isHtmlFile = function(file) {
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

function plugin(options) {

  const opts = options || {};

  opts.removeAttributeAfterwards = opts.removeAttributeAfterwards || false;

  // hand opts to marked

  return function(files, metalsmith, done) {

    setImmediate(done);

    _.each(files, function(file, name) {

      if (!isHtmlFile(file.path || name)) {
        return;
      }

      const contents = file.contents.toString();
      let foundMatches = false;

      // parse html content in cheerio to query it
      const $ = cheerio.load(contents);

      $(opts.selector || '[data-markdown]').each(function() {

        foundMatches = true;

        const $el = $(this);

        // grab the html of the node and
        // decode all html entities
        // decoding fixes problems with smartypants
        const _html = $el.html();
        const _class = $el.attr('class');

        const markedText = marked(he.decode(_html));
        const $$el = $(markedText);

        // set compiled markdown content to node
        if (_class) {
          $$el.attr('class', _class);
        }

        $el.replaceWith($$el);

        // remove attr if configured
        if (opts.removeAttributeAfterwards) {
          $el.removeAttr('data-markdown');
        }

      });

      if (foundMatches) { // only do anything to contents, if matches were found
        file.contents = new Buffer($.html());
      }

    });
  };
}


module.exports = plugin;
