import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';

const __dirname = path.resolve();

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, './public/index.html'),
  filename: './index.html',
  inject: 'body',
});

export default {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  plugins: [htmlWebpackPlugin],
};
