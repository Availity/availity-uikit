module.exports = {
  siteMetadata: {
    title: 'UIkit',
    description: 'Availity UIKit powered by Bootstrap 4',
    keywords: 'css, bootstrap, uikit',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/bootstrap-components`,
        name: 'components',
      },
    },
    'gatsby-transformer-remark',
  ],
};

