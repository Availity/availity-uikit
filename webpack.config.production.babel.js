import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const nconf  = require('nconf');
nconf.use('memory').defaults({
  'optimize': true
});

import banner from './dev/banner';
const VERSION = require('./package.json').version;

export default function getConfig() {

  const optimize = nconf.get('optimize');
  const minimize = optimize ? 'minimize' : '-minimize';
  let cssQuery = `css?limit=32768?sourceMap&${minimize}&name=images/[name].[ext]!autoprefixer?{browsers: ["last 3 versions", "ie 9", "> 1%"]}!less`;

  let ENV_VAR = {
    'process.env': {
      'VERSION': JSON.stringify(VERSION),
      'process.env.NODE_ENV': JSON.stringify('production')
    }
  };

  let config = {

    context: __dirname,

    entry: {
      'availity-uikit': './index.js'
    },

    output: {
      path: 'dist',
      publicPath: '/',
      filename: optimize ? 'js/[name].min.js' : 'js/[name].js',
      library: 'availity',
      libraryTarget: 'umd'
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
            cssQuery

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


