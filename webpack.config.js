var path = require( 'path' );
var UglifyJSPlugin = require( 'uglifyjs-webpack-plugin' );

module.exports = {

  context: path.resolve( __dirname, 'js' ),
  entry: './App.js',
  output: {
    path: path.resolve( __dirname, 'dist' ),
    filename: 'bundle.js'
  },
  module: {
    rules: [ {
      test: /\.html$/,
      use: 'webpack-compile-templates'
    }, {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [ 'env' ]
        }
      }
    } ],
    loaders: [
      { test: /\.css$/, loader: 'style!css?modules' },
      { test: /\.html$/, loader: 'babel!es6-template-string' }
    ]
  },
  plugins: [
    new UglifyJSPlugin( {
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      }
    } )
  ]
};
