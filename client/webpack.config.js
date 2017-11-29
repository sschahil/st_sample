const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname, // always run from root directory
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://127.0.0.0:8080',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './client/ClientApp.jsx'
  ], // this is the front door to the project
  devtool: 'cheap-eval-source-map', // shows only my code
  output: {
    path: path.join(__dirname, 'public'), // path is a node module, its always going to land on public directory
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    hot: true,
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'] //
  },
  stats: {
    colors: true,
    reasons: true, // useful errors
    chunks: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
    // new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.svg$/,
        loaders: [
          'babel-loader',
          {
            loader: 'react-svg-loader',
            query: {
              jsx: true
            }
          }
        ]
      },
      { test: /.css$/, loader: 'style-loader!css-loader' },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      // rules to apply loaders
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, // this is regex, must be js or jsx, run through babel
        loader: 'babel-loader' // this can be given an array of loaders as well
      }
    ]
  }
};
