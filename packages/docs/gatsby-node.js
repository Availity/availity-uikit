const webpack = require('webpack');

exports.modifyWebpackConfig = ({ config }) => {
  config.loader('jquery', {
    test: require.resolve('jquery'),
    loader: 'expose-loader?$!expose-loader?jQuery',
  });

  config.loader('popper', {
    test: require.resolve('popper.js'),
    loader: 'expose-loader?Popper',
  });

  return config;
};
