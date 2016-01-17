import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';

import banner from './dev/banner';
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

const VERSION = require('./package.json').version;

let ENV_VAR = {
  'process.env': {
    'VERSION': JSON.stringify(VERSION),
    'process.env.NODE_ENV': JSON.stringify('development')
  }
};

let config = {

  context: __dirname,

  entry: {
    'availity-uikit': './index.js',
    'vendor': './docs/js/vendor',
    'docs': './docs/js'
  },

  devtool: 'cheap-module-eval-source-map',

  output: {
    // if path is not set to '/build' => Error invalid argument in MemoryFileSystem.js
    path: '/build',
    // publicPath: '../',
    filename: 'js/[name].js',
    library: 'availity',
    libraryTarget: 'umd'
  },

  debug: true,
  cache: true,
  watch: true,

  stats: {
    colors: true,
    reasons: true,
    hash: true,
    version: true,
    timings: true,
    chunks: true,
    chunkModules: true,
    cached: true,
    cachedAssets: true
  },

  module: {
    loaders: [

      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(bower_components|node_modules)/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?limit=32768?name=images/[name].[ext]!autoprefixer?{browsers: ["last 3 versions", "ie 9", "> 1%"]}!less', {
            publicPath: '../'
          }
        )
      },
      {
        // test should match the following:
        //
        //  '../fonts/availity-font.eot?18704236'
        //  '../fonts/availity-font.eot'
        //
        test: /\.(ttf|woff|eot|svg).*/,
        loader: 'file?name=fonts/[name].[ext]'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url?limit=32768?name=images/[name].[ext]'
      }
    ]
  },
  plugins: [

    new webpack.BannerPlugin(banner(), {
      exclude: ['vendor']
    }),

    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),

    new ExtractTextPlugin('css/[name].css', {
      disable: false,
      allChunks: true
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),

    new WebpackNotifierPlugin({excludeWarnings: true}),

    new webpack.DefinePlugin(ENV_VAR),

    new CommonsChunkPlugin({
      name: ['vendor'],
      minChunks: Infinity
    })

  ],
  resolve: {
    extensions: ['', '.js']
  }
};

export default config;

