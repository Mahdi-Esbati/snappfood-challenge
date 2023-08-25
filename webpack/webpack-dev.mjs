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
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    client: {
      reconnect: 5,
      overlay: true,
      progress: true,
      logging: 'none',
    },
    port: 3000,
    open: false,
    compress: false,
    historyApiFallback: true,
    hot: true,
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
