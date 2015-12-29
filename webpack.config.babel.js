
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import BowerWebpackPlugin from 'bower-webpack-plugin';

const VERSION = require('./package.json').version;

const nodeEnv = process.env.NODE_ENV || 'development';
const production = (nodeEnv === 'production' ? true : false);
const development = !production;

let ENV_VAR = {
  'process.env': {
    'NODE_ENV': JSON.stringify(nodeEnv),
    'VERSION': JSON.stringify(VERSION)
  }
};

let config = {

  context: process.cwd(),

  entry: {
    'availity-uikit': './index.js',
    'vendor': './docs/js'
  },

  output: {
    path: production ? '/dist' : '/build',
    filename: production ? 'js/[name].min.js' : 'js/[name].js',
    library: 'availity',
    libraryTarget: 'umd'
  },

  // externals: {
  //   jquery: {
  //     root: 'jQuery',
  //     commonjs2: 'jQuery',
  //     commonjs: 'jQuery',
  //     amd: 'jQuery'
  //   }
  // },

  debug: development,
  cache: development,
  watch: development,

  noParse: [
    /.*bower_components.*/
  ],

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
          'css!autoprefixer?{browsers: ["last 3 versions", "ie 9", "> 1%"]}!less'
        )
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url?limit=32768?name=images/[name].[ext]?[hash]'
      },
      {
        // test should match the following:
        //
        //  '../fonts/availity-font.eot?18704236'
        //  '../fonts/availity-font.eot'
        //
        test: /\.(ttf|woff|eot|svg).*/,
        loader: 'file?name=fonts/[name].[ext]'
      }
    ]
  },
  plugins: [

    new webpack.optimize.OccurenceOrderPlugin(),

    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),

    new ExtractTextPlugin('css/[name].css', {
      disable: false,
      allChunks: true
    }),

    new BowerWebpackPlugin({
      excludes: [
        /.*\.(less|map)/,
        /glyphicons-.*\.(eot|svg|ttf|woff)/,
        /bootstrap.*\.css/,
        /.*\.min.*/
      ]
    }),

    new webpack.DefinePlugin(ENV_VAR)

  ],
  resolve: {
    extensions: ['', '.js']
  }
};

if (production) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    })
  );
}

export default config;

