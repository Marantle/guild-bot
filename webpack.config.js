const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: ['./src/index.ts'],
  target: 'node',
  module: {
    rules: [{
      test: /.tsx?$/,
      use: 'ts-loader'
    }],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      Utility: path.resolve(__dirname, 'src/utility/'),
      Config: path.resolve(__dirname, 'config/'),
    },
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
  },
};
