
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import BowerWebpackPlugin from 'bower-webpack-plugin';

const VERSION = require('./package.json').version;

const nodeEnv = process.env.NODE_ENV || 'development';
const optimize = (nodeEnv === 'production' ? true : false);

let config = {
  entry: {
    'availity-uikit': './js/index.js',
    'vendor': './js/vendor.js'
  },
  output: {
    path: './dist',
    filename: optimize ? 'js/[name].min.js' : 'js/[name].js',
    library: 'availity',
    libraryTarget: 'umd'
  },
  externals: {
    jquery: {
      root: 'jQuery',
      commonjs2: 'jQuery',
      commonjs: 'jQuery',
      amd: 'jQuery'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
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

    new webpack.DefinePlugin({
      'process.env': {'NODE_ENV': JSON.stringify(nodeEnv)},
      '__VERSION__': VERSION
    })
  ],
  resolve: {
    extensions: ['', '.js']
  }
};

if (optimize) {
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

