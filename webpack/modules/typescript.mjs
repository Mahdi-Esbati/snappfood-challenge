export default {
  test: /\.(ts|tsx)$/,
  use: {
    loader: 'ts-loader',
  },
  exclude: /node_modules/,
};
