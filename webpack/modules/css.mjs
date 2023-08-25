import path from 'path'

/** @type {[Object]} */
export default [
    // Normal SASS/CSS Files
    {
        test: /\.scss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
            {
                loader: 'style-loader',
            },
            {
                loader: 'css-loader',
            },
            {
                loader: 'sass-loader',
                options: {
                    sassOptions: {
                        includePaths: [path.resolve('src')],
                    },
                },
            },
        ],
    },

    // SASS/CSS Modules
    {
        test: /\.module\.s(a|c)ss$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                    sourceMap: true,
                },
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true,
                },
            },
        ],
    },
]
