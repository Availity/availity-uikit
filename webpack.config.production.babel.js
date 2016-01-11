
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import banner from './dev/banner';
const VERSION = require('./package.json').version;


let ENV_VAR = {
  'process.env': {
    'VERSION': JSON.stringify(VERSION)
  }
};

let config = {

  context: process.cwd(),

  entry: {
    'availity-uikit': './index.js'
  },

  output: {
    path: '/dist',
    publicPath: '/',
    filename: 'js/[name].min.js',
    library: 'availity',
    libraryTarget: 'umd'
  },

  debug: false,
  cache: false,
  watch: false,

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
          'css?limit=32768?name=images/[name].[ext]!autoprefixer?{browsers: ["last 3 versions", "ie 9", "> 1%"]}!less'
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

    new webpack.optimize.OccurenceOrderPlugin(),

    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),

    new ExtractTextPlugin('css/[name].css', {
      disable: false,
      allChunks: true
    }),

    new webpack.DefinePlugin(ENV_VAR),

    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    })

  ],
  resolve: {
    extensions: ['', '.js']
  }
};

export default config;

