const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  // entry is where, say, your app starts - it can be called main.ts, index.ts, app.ts, whatever
  entry: ['./src/index.ts'],

  // This forces webpack not to compile TypeScript for one time, but to stay running, watch for file changes in project directory and re-compile if needed


  // Is needed to have in compiled output imports Node.JS can understand. Quick search gives you more info
  target: 'node',

  // Prevents warnings from TypeScript compiler
  externals: [
    nodeExternals({
      whitelist: [
        'webpack/hot/poll?100',
        'node_modules/discord.js',
        'node_modules/winston',
        'node_modules/firebase-admin'
      ],
    }),
  ],

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
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
  },
};
