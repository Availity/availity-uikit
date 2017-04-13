'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const autoprefixer = require('autoprefixer');
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

  devtool: 'cheap-module-eval-source-map',

  output: {
    // if path is not set to '/build' => Error invalid argument in MemoryFileSystem.js
    path: path.join(__dirname, 'build'),
    // publicPath: '../',
    filename: 'js/[name].js',
    library: 'availity-uikit',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  resolve: {
    extensions: ['.js']
  },

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
    rules: [

      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /(bower_components|node_modules)/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?limit=32768?name=images/[name].[ext]',
            'postcss-loader'
          ],
          publicPath: '../'
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?limit=32768?name=images/[name].[ext]',
            'postcss-loader',
            'sass-loader?sourceMap'
          ],
          publicPath: '../'
        })
      },
      {
        // test should match the following:
        //
        //  '../fonts/availity-font.eot?18704236'
        //  '../fonts/availity-font.eot'
        //
        test: /\.(otf|ttf|woff2?|eot|svg)(\?.*)?$/,
        use: [
          'file-loader?name=fonts/[name].[ext]'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?name=images/[name].[ext]&limit=10000'
        ]
      }
    ]
  },

  plugins: [

    new webpack.BannerPlugin({
      banner: banner(),
      exclude: ['vendor']
    }),

    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),

    new ExtractTextPlugin('css/[name].css'),

    new webpack.LoaderOptionsPlugin(
      {
        test: /\.s?css$/,
        debug: false,
        options: {
          postcss: [
            autoprefixer(
              {
                browsers: [
                  'last 5 versions',
                  'Firefox ESR',
                  'not ie < 9'
                ]
              }
            )
          ],
          context: __dirname,
          output: { path: '/build' }
        }
      }
    ),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),

    new WebpackNotifierPlugin({ excludeWarnings: true }),

    new webpack.DefinePlugin(ENV_VAR),

    new CommonsChunkPlugin({
      name: ['vendor'],
      minChunks: Infinity
    })

  ]
};

module.exports = config;

