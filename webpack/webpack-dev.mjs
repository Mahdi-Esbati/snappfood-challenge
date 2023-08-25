import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';

const __dirname = path.resolve();

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, './public/index.html'),
  filename: './index.html',
  inject: 'body',
});

export default {
  mode: 'development',
  context: __dirname,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheCompression: false,
            cacheDirectory: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'ts-loader',
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
  },
};
