export default {
    test: /\.(tsx|ts|js)$/,
    use: {
        loader: 'babel-loader',
        options: {
            cacheCompression: false,
            cacheDirectory: true,
        },
    },
    exclude: /node_modules/,
}
