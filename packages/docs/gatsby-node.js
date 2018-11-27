exports.onCreateWebpackConfig = ({ stage, actions }) => {
  const buildHtmlRules = [];
  if (stage === 'build-html') {
    buildHtmlRules.push({ test: /holder|bootstrap/, use: [`null-loader`] });
  }

  const allRules = [
    {
      test: require.resolve('jquery'),
      loader: 'expose-loader?$!expose-loader?jQuery',
    },
    {
      test: require.resolve('holderjs'),
      loader: 'expose-loader?holder.js',
    },
    {
      test: require.resolve('popper.js'),
      loader: 'expose-loader?Popper',
    },
  ];

  actions.setWebpackConfig({ module: { rules: [...buildHtmlRules, ...allRules] } });
};
