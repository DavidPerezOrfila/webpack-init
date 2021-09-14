const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    output: { clean: true },
    module: {
        rules: [{
            test: /\.html$/i,
            use: [{
                loader: 'html-loader',
                options: { sources: false, minimize: false }
            }]
        }, {
            test: /\.css$/i,
            exclude: /styles.css$/i,
            use: ['style-loader', 'css-loader']
        }, { test: /styles.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'] }],
    },
    optimization: {},
    plugins: [new HtmlWebpack({
        template: './src/index.html',
        filename: './index.html',
        inject: 'body'
    }), new MiniCssExtractPlugin({
        //filename: '[name].[fullhash].css', nombre en prod
        filename: '[name].css',
        ignoreOrder: false,
    })]
}