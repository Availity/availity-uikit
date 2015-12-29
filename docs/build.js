import Metalsmith from 'metalsmith';
import layouts from 'metalsmith-layouts';
import prism from 'metalsmith-prism';
import marked from 'marked';
import markdown from 'metalsmith-markdown';
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
  renderer: renderer
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
    // .use(permalinks({
    //   relative: false
    // }))
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
    .use(layouts({
      engine: 'nunjucks',
      directory: 'layouts'
    }))
    .use(markdown(markedOptions))
    .use(prism({
      decode: true
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
