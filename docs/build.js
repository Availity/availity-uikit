import Metalsmith from 'metalsmith';
import layouts from 'metalsmith-layouts';
import prism from 'metalsmith-prism';
import marked from 'marked';
import markdown from 'metalsmith-markdown';
import headings from 'metalsmith-headings';
import inPlace from 'metalsmith-in-place';
import permalinks from 'metalsmith-permalinks';
import nunjucks from 'nunjucks';
import nunjucksDate from 'nunjucks-date';
import path from 'path';
import collections from 'metalsmith-collections';
import anchorMarkdownHeadings from './plugins/anchor.js';

import pkg from '../package.json';

const renderer = new marked.Renderer();

renderer.heading = anchorMarkdownHeadings;
const markedOptions = {
  langPrefix: 'language-',
  renderer: renderer,
  gfm: true,
  tables: true
};

nunjucks
  .configure('docs/layouts', {watch: false, noCache: true})
  .addFilter('date', nunjucksDate);

nunjucksDate
  .setDefaultFormat('MMMM Do, YYYY');

export default function build(done) {

  const metalsmith = new Metalsmith(__dirname);

  metalsmith
    .metadata({
      site: {
        title: 'Availity UIKit'
      },
      pkg: pkg
    })
    .source(path.join(process.cwd(), 'docs', 'content'))
    .use(markdown(markedOptions))
    .use(prism({
      decode: true
    }))
    .use(collections({
      pages: {
        pattern: 'pages/**/*.html',
        reverse: false
      },
      components: {
        pattern: 'components/**/*.html',
        sortBy: 'title',
        refer: false
      },
      examples: {
        pattern: 'examples/**/*.html',
        sortBy: 'title',
        reverse: true,
        refer: false
      },
      javascript: {
        pattern: 'javascript/**/*.html',
        sortBy: 'title',
        reverse: true,
        refer: false
      }
    }))
    .use(headings('.guide-section-header'))
    .use(permalinks({
      relative: false
    }))
    .use(inPlace({
      engine: 'nunjucks',
      partials: 'layouts/partials'
    }))
    //.use(function(files, metalsmith, done) {
    //  debugger;
    //  done();
    //})
    .use(layouts({
      engine: 'nunjucks',
      directory: 'layouts'
    }))
    .destination(path.join(process.cwd(), 'build'));

  metalsmith.build( (err) => {

    if (err) {
      throw err;
    }

    if (done) {
      done();
    }
  });

}
