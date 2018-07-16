/* eslint-disable no-undef */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: {
        app: './src/js/app.js',
        print: './src/js/print.js',
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /.xml$/,
                use: ['xml-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new StylelintPlugin({
            files: '**/*.sass'
        })
    ]
};
