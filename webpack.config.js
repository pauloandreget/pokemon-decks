const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const { join } = require('path');

const PATHS = {
  src: join(__dirname, './src'),
  public: join(__dirname, './public'),
  dist: join(__dirname, './dist'),
};

module.exports = {
  context: __dirname,
  devtool: 'eval-source-map',
  entry: ['react-hot-loader/patch', join(PATHS.src, 'js')],
  devServer: {
    port: 9000,
    hot: true,
    compress: true,
    contentBase: PATHS.public,
    historyApiFallback: true,
    disableHostCheck: true,
    stats: 'minimal',
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  output: {
    path: PATHS.dist,
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new Dotenv(),
    new HtmlWebpackPlugin({
      title: 'Pokemon Decks',
      favicon: join(PATHS.public, 'favicon.ico'),
      template: join(PATHS.public, 'index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: join(PATHS.public, 'index.html'),
          to: join(PATHS.dist, 'index.html'),
        },
      ],
    }),
  ],
};
