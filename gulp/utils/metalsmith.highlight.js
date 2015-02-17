var cheerio = require('cheerio');
var extname = require('path').extname;
var _ = require('lodash');
var Prism = require('prismjs');
var he = require('he');

module.exports = function() {

  Prism.languages.json = {
    'keys': /".+"(?=:)/g,
    'boolean': /\b(true|false)/g,
    'punctuation': /({|}|:|\[|\]|,)/g,
    'keyword': /\b(null)\b/g
  };

  return function(files, metalsmith, done) {
    setImmediate(done);

    _.each(files, function(file) {

      if (extname(file.path) !== '.html') {
        return;
      }

      var contents = file.contents.toString();
      var $ = cheerio.load(contents);
      var highlighted = false;

      $('code').each(function() {

        var $this = $(this);
        var className = $this.attr('class');

        var targets = className ? className.split('language-') : ['', 'markup'];

        if(targets.length > 1) {
          highlighted = true;

          var language = targets[1];

          var html = (language === 'markup') ? $this.html() : he.decode($this.html());
          var highlightedCode = Prism.highlight(html, Prism.languages[language]);
          $this.html(highlightedCode);
        }
      });

      if(highlighted) {
        file.contents = new Buffer($.html());
      }

    });
  };

};


