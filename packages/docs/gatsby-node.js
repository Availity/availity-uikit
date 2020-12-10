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
        exposes: {
          globalName: 'jQuery',
          override: true,
        },
      },
    },
    {
      test: require.resolve('holderjs'),
      loader: 'expose-loader',
      options: {
        exposes: {
          globalName: 'holder.js',
          override: true,
        },
      },
    },
    {
      test: require.resolve('popper.js'),
      loader: 'expose-loader',
      options: {
        exposes: {
          globalName: 'Popper',
          override: true,
        },
      },
    },
  ];

  actions.setWebpackConfig({ module: { rules: [...buildHtmlRules, ...allRules] } });
};
