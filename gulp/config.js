var path = require('path');

module.exports = {
  project: {
    path: path.resolve(__dirname, '..')
  },
  fonts: {
    src: 'fonts/**/*.{ttf,woff,eot,svg}',
    dest: 'build/guide/fonts',
    destDist: 'dist/fonts'
  },
  sync: {
    src: 'build/guide'
  },
  docs: {
    all: {
      src: [
        'docs/guide/pages/*.html',
        'docs/guide/pages/examples/*.html',
        'less/**/*.html',
        'js/**/*.html'
      ]
    },
    components: {
      src: 'less/*.html'
    },
    partials: {
      src: 'docs/guide/templates/partials/*.hbs',
      targets: 'docs/guide/templates/partials/**/*.hbs'
    },
    templates: {
      src: './docs/guide/templates',
      targets: 'docs/guide/templates/**/*.hbs',
      extension: '.hbs'
    },
    dest: 'build/guide',
    sort: {
      // sort order for components.  if the title changes we are toast!
      components: [
        'Colors',
        'Typography',
        'Buttons',
        'Cards',
        'Panels',
        'Containers',
        'App Icons',
        'Navbar',
        'Navs',
        'Mega Menu',
        'Forms',
        'Alerts and Warnings',
        'Badges',
        'Dropdowns',
        'Footer',
        'Labels',
        'Media Object',
        'List Groups',
        'Pagination',
        'Breadcrumbs',
        'Tables',
        'Progress Bar',
        'Wizard',
        'Wells'
      ]
    }
  },
  packages: {
    src: ['./package.json', './bower.json']
  }
};
