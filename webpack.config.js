var path = require('path');
var webpack = require('webpack');

module.exports = {
  stats: {
    // Configure the console output
    errorDetails: true, //this does show errors
    colors: false,
    modules: true,
    reasons: true
  },
  entry: {
     app: ['./src/main.ts']
  },  
  resolve: {
        extensions: ['.webpack.js', '.web.js', '.js', '.ts']
  },
  module: {
   rules: [
     {
       test: /\.tsx?$/,
       loader: 'ts-loader',
       exclude: /node_modules/,
     }
   ]
 },
 output: {    
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'bundle.js'
 }, 
 // Enable sourcemaps for debugging webpack's output.
 devtool: 'source-map',
 
};