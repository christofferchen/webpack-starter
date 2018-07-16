/* eslint-disable no-undef */

const autoprefixer = require('autoprefixer');
const precss = require('precss');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

// module.exports = {
module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval',
    devServer: {
        contentBase: false,
        hot: true,
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.pcss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                precss(),
                                autoprefixer({ browsers: ['last 3 versions'], cascade: true })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['url-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['url-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
});
