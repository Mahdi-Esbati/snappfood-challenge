import path from 'path';

import { css, typescript, babel, devServer } from './modules/index.mjs';
import { html } from './plugins/index.mjs';

const __dirname = path.resolve();

export default {
  mode: 'development',
  context: __dirname,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  devServer,
  module: {
    rules: [babel, typescript, css],
  },
  plugins: [html],
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
  },
};
