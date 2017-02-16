'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const banner = require('./dev/banner');
const VERSION = require('./package.json').version;

function getConfig(options) {

  const optimize = options.optimize || false;
  const minimize = optimize ? 'minimize' : '-minimize';

  const ENV_VAR = {
    'process.env': {
      'VERSION': JSON.stringify(VERSION),
      'process.env.NODE_ENV': JSON.stringify('production')
    }
  };

  const config = {

    context: __dirname,

    entry: {
      'availity-uikit': './js/index.js'
    },

    resolve: {
      extensions: ['.js']
    },

    output: {
      path: 'dist',
      filename: optimize ? 'js/[name].min.js' : 'js/[name].js',
      library: 'availity-uikit',
      libraryTarget: 'umd',
      umdNamedDefine: true
    },

    externals: {
      'jquery': 'jQuery'
    },

    devtool: 'source-map',

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
          use: 'babel-loader',
          exclude: /(bower_components|node_modules)/
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              `css-loader?sourceMap&${minimize}?limit=32768?name=images/[name].[ext]`,
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
              `css-loader?sourceMap&${minimize}?limit=32768?name=images/[name].[ext]`,
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

      new webpack.DefinePlugin(ENV_VAR),

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
      )

    ]

  };

  if (optimize) {
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        mangle: false,
        output: {
          comments: false
        },
        compressor: {
          screw_ie8: true,
          warnings: false
        }
      })
    );
  }

  return config;
}

module.exports = getConfig;


