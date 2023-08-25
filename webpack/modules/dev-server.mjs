import path from 'path';

const __dirname = path.resolve();

export default {
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
};
