'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const autoprefixer = require('autoprefixer');
const NpmImportPlugin = require('less-plugin-npm-import');
const banner = require('./dev/banner');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

const VERSION = require('./package.json').version;

const ENV_VAR = {
  'process.env': {
    'VERSION': JSON.stringify(VERSION),
    'process.env.NODE_ENV': JSON.stringify('development')
  }
};

const config = {

  context: __dirname,

  entry: {
    'availity-uikit': './js/index.js',
    'vendor': './docs/js/vendor',
    'docs': './docs/js'
  },

  devtool: 'source-map',

  output: {
    // if path is not set to '/build' => Error invalid argument in MemoryFileSystem.js.  Also,
    // `output.path` needs to be an absolute path or `/` else error
    path: '/build',
    // publicPath: '../',
    filename: 'js/[name].js',
    library: 'availity-uikit',
    libraryTarget: 'umd',
    umdNamedDefine: true
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
          'css?limit=32768?name=images/[name].[ext]!postcss!less',
          {
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

  postcss() {
    return [autoprefixer({browsers: ['last 2 versions', 'ie 9-11']})];
  },

  lessLoader: {
    lessPlugins: [
      new NpmImportPlugin({
        prefix: '~'
      })
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

module.exports = config;

