const webpack = require('webpack');
const path = require('path');

module.exports = {
  node: {
    fs: "empty"
  },
  // entry is where, say, your app starts - it can be called main.ts, index.ts, app.ts, whatever
  entry: ['./src/index.ts'],

  // This forces webpack not to compile TypeScript for one time, but to stay running, watch for file changes in project directory and re-compile if needed


  // Is needed to have in compiled output imports Node.JS can understand. Quick search gives you more info
  target: 'node',

  // Prevents warnings from TypeScript compiler


  module: {
    rules: [{
      test: /.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    mainFields: ["main", "module"],
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
