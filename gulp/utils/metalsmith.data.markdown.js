// Modified from: https://github.com/majodev/metalsmith-data-markdown

var MarkdownIt = require('markdown-it');
var md = new MarkdownIt();
var cheerio = require('cheerio');
var he = require('he');
var _ = require('lodash');

var extname = require('path').extname;

/**
 * Check if a `file` is html.
 *
 * @param {String} file
 * @return {Boolean}
 */

var isHtmlFile = function(file) {
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

  var opts = options || {};

  opts.removeAttributeAfterwards = opts.removeAttributeAfterwards || false;

  // hand opts to marked

  return function(files, metalsmith, done) {
    setImmediate(done);

    _.each(files, function(file, name) {

      if(!isHtmlFile(file.path || name)) {
        return;
      }

      var contents = file.contents.toString();
      var foundMatches = false;

      // parse html content in cheerio to query it
      var $ = cheerio.load(contents);

      $('[data-markdown]').each(function() {

        // grab the html of the node and
        // decode all html entities
        // decoding fixes problems with smartypants
        var markedText = md.render(he.decode($(this).html()));

        // set compiled markdown content to node
        $(this).html(markedText);
        foundMatches = true;

        // remove attr if configured
        if(opts.removeAttributeAfterwards) {
          $(this).removeAttr('data-markdown');
        }

      });

      if(foundMatches) { // only do anything to contents, if matches were found
        file.contents = new Buffer($.html());
      }

    });
  };
}

/**
 * Expose `plugin`.
 */

module.exports = plugin;
