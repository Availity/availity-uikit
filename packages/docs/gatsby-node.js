exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config.loader('null', {
      test: /holder|bootstrap/,
      loader: 'null-loader',
    });
  }

  config.loader('jquery', {
    test: require.resolve('jquery'),
    loader: 'expose-loader?$!expose-loader?jQuery',
  });

  config.loader('holder', {
    test: require.resolve('holderjs'),
    loader: 'expose-loader?holder.js',
  });

  config.loader('popper', {
    test: require.resolve('popper.js'),
    loader: 'expose-loader?Popper',
  });

  return config;
};
