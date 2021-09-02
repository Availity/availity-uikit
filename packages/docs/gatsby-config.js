const Pkg = require('./package.json');

module.exports = {
  pathPrefix: '/availity-uikit/v4/',
  siteMetadata: {
    v1: '/availity-uikit/v1/',
    v2: '/availity-uikit/v2/',
    v3: '/availity-uikit/v3/',
    title: 'UIkit',
    description: 'Availity UI Kit powered by Bootstrap 4',
    keywords: 'css, bootstrap, uikit',
    version: Pkg.version,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/bootstrap-components`,
        name: 'components',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-prismjs'],
      },
    },
    {
      resolve: `gatsby-plugin-accessibilityjs`,
      options: {
        injectStyles: false,
        errorClassName: false,
      },
    },
  ],
};
