'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const NpmImportPlugin = require('less-plugin-npm-import');

const banner = require('./dev/banner');
const VERSION = require('./package.json').version;

function getConfig(options) {

  const optimize = options.optimize || false;
  const minimize = optimize ? 'minimize' : '-minimize';
  const cssQuery = `css?limit=32768?sourceMap&${minimize}&name=images/[name].[ext]!postcss!less`;

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

    debug: false,
    cache: false,
    watch: false,

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
            cssQuery,
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

      new webpack.BannerPlugin(banner()),

      new webpack.optimize.OccurenceOrderPlugin(true),

      new ExtractTextPlugin(optimize ? 'css/[name].min.css' : 'css/[name].css', {
        disable: false,
        allChunks: true
      }),

      new webpack.NoErrorsPlugin(),

      new webpack.DefinePlugin(ENV_VAR)

    ],
    resolve: {
      extensions: ['', '.js']
    }
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


