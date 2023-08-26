import path from 'path'
import HtmlWebPackPlugin from 'html-webpack-plugin'

const __dirname = path.resolve()

const html = new HtmlWebPackPlugin({
    template: path.resolve(__dirname, './public/index.html'),
    filename: './index.html',
    inject: 'body',
})

export default html
