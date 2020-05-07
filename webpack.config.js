var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './src/index.jsx',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:'babel-loader'
            },
            {
                test : /\.css$/,
                exclude: /node_modules/,
                use:['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use: [
                    'file-loader',
                ],
            }
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'src/index.html'
        })
    ],
    resolve: {
        extensions: [".js", ".jsx", ".css"]
    },
}