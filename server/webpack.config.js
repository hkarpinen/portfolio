// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// eslint-disable-next-line @typescript-eslint/no-var-requires
//const webpack = require('webpack');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodeExternals = require('webpack-node-externals')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.ts', // Entry point for your application
  target: 'node', // Indicate that the build is for Node.js
  externals: [nodeExternals()], // Exclude node_modules from the bundle
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/, // Exclude node_modules from being processed by ts-loader
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2', // Ensure output is in CommonJS format for Node.js
  },
  plugins: [
    new CleanWebpackPlugin(), // Clean the output directory before each build
  ],
  optimization: {
    minimize: process.env.NODE_ENV === 'production', // Minimize code in production
  },
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map', // Source map configuration
}