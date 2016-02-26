import Metalsmith from 'metalsmith';
import layouts from 'metalsmith-layouts';
import prism from 'metalsmith-prism';
import marked from 'marked';
import markdown from 'metalsmith-markdown';
import inPlace from 'metalsmith-in-place';
import mock from 'metalsmith-mock';
import permalinks from 'metalsmith-permalinks';
import nunjucks from 'nunjucks';
import nunjucksDate from 'nunjucks-date';
import path from 'path';
import collections from 'metalsmith-collections';
import filter from 'metalsmith-filter';
import relative from 'metalsmith-rootpath';

import dataMarkdown from './plugins/metalsmith-data-markdown';
import slug from './plugins/nunjucks-slug';
import tocify from './plugins/metalsmith-tocify';
import Logger from './logger';

import pkg from '../package.json';

const markedOptions = {
  langPrefix: 'language-',
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true
};

nunjucksDate
  .setDefaultFormat('YYYY');

nunjucks
  .configure('docs/layouts', {watch: false, noCache: true})
  .addFilter('year', nunjucksDate)
  .addFilter('slug', slug);

function build() {

  return new Promise((resolve, reject) => {

    const metalsmith = new Metalsmith(path.join(process.cwd(), 'docs'));

    metalsmith
      .metadata({
        site: {
          title: 'Availity UIKit'
        },
        today: new Date(),
        pkg: pkg
      })
      .ignore('**/.DS_Store')
      .source(path.join(process.cwd(), 'docs', 'content'))
      .use(markdown(markedOptions))
      .use(dataMarkdown({
        selector: '[data-markdown]'
      }))
      .use(prism({
        decode: true
      }))
      .use(mock())
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
      .use(permalinks({
        relative: false
      }))
      .use(relative())
      .use(inPlace({
        engine: 'nunjucks',
        partials: 'layouts/partials'
      }))
      .use(tocify({selector: '.docs-section-header, .docs-subsection-title'}))
      .use(layouts({
        engine: 'nunjucks',
        directory: 'layouts'
      }))
      .use(filter(['index.html', 'pages/**/*.html', 'examples/**/*.html']))
      .destination(path.join(process.cwd(), 'build'));

    metalsmith.build( (err) => {

      if (err) {
        reject(err);
      } else {
        Logger.ok('metalsmith');
        resolve();
      }

    });

  });

}

export default build;
