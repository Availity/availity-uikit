import Metalsmith from 'metalsmith';
import permalinks from 'metalsmith-permalinks';
import layouts from 'metalsmith-layouts';
import prism from 'metalsmith-prism';
import marked from 'marked';
import markdown from 'metalsmith-markdown';
import path from 'path';
import collections from 'metalsmith-collections';
import anchorMarkdownHeadings from './plugins/anchor.js';

const renderer = new marked.Renderer();
renderer.heading = anchorMarkdownHeadings;
const markedOptions = {
  langPrefix: 'language-',
  renderer: renderer
};

export default function build(done) {

  const metalsmith = new Metalsmith(__dirname);

  metalsmith
    .source(path.join(process.cwd(), 'docs', 'content'))
    .use(prism())
    .use(permalinks({
      relative: false
    }))
    .use(collections({
      pages: {
        sortBy: 'menu',
        reverse: false
      },
      components: {
        pattern: 'content/components/**/*.md',
        sortBy: 'title',
        reverse: true,
        refer: true
      }
    }))
    .use(markdown(markedOptions))
    .use(prism())
    .use(layouts({
      engine: 'handlebars',
      pattern: '**/*.md',
      directory: './templates',
      partials: './partials',
      helpers: {
        is: require('./helpers/is.js'),
        grouped: require('./helpers/grouped.js'),
        date: require('./helpers/date.js')
      }
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

