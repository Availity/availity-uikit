exports.onCreateWebpackConfig = ({ stage, actions }) => {
  const buildHtmlRules = [];
  if (stage === 'build-html') {
    buildHtmlRules.push({ test: /holder|bootstrap/, use: [`null-loader`] });
  }

  const allRules = [
    {
      test: require.resolve('jquery'),
      loader: 'expose-loader',
      options: {
        exposes: ['$', 'jQuery']
      }
    },
    {
      test: require.resolve('holderjs'),
      loader: 'expose-loader',
      options: {
        exposes: ['holder.js']
      }
    },
    {
      test: require.resolve('popper.js'),
      loader: 'expose-loader',
      options: {
        exposes: ['Popper']
      }
    },
  ];

  actions.setWebpackConfig({ module: { rules: [...buildHtmlRules, ...allRules] } });
};
