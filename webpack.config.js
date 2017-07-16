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
    } ]
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
