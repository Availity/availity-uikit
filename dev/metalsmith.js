'use strict';

const Metalsmith = require('metalsmith');
const layouts = require('metalsmith-layouts');
const prism = require('metalsmith-prism');
const marked = require('marked');
const markdown = require('metalsmith-markdown');
const inPlace = require('metalsmith-in-place');
const mock = require('metalsmith-mock');
const permalinks = require('metalsmith-permalinks');
const nunjucks = require('nunjucks');
const nunjucksDate = require('nunjucks-date');
const path = require('path');
const collections = require('metalsmith-collections');
const filter = require('metalsmith-filter');
const relative = require('metalsmith-rootpath');
const _slugify = require('slugify');

const dataMarkdown = require('./plugins/metalsmith-data-markdown');
const tocify = require('./plugins/metalsmith-tocify');
const Logger = require('./logger');

const pkg = require('../package.json');

function slugify(tokens) {
  const slugged = _slugify(tokens).toLowerCase();
  return slugged;
}

const markedOptions = {
  langPrefix: 'language-',
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true
};

nunjucksDate
  .setDefaultFormat('YYYY');

const env = nunjucks.configure('docs/layouts', {
  watch: false,
  noCache: true
});
env.addFilter('year', nunjucksDate);
env.addFilter('slug', slugify);

function build() {

  Logger.info('Started docs');

  return new Promise((resolve, reject) => {

    const metalsmith = new Metalsmith(path.join(process.cwd(), 'docs'));

    metalsmith
      .metadata({
        site: {
          title: 'Availity UIKit'
        },
        today: new Date(),
        pkg
      })
      .ignore(['!**/*.html', 'node_modules', '_book', 'dev', 'dist', 'less', 'reports'])
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
        Logger.ok('Finished docs');
        resolve();
      }

    });

  });

}

module.exports = build;
