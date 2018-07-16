/* eslint-disable no-undef */

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
// module.exports = {
    mode: 'production',
    optimization: {
        minimize: true,
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            // cacheGroups: {
            //     vendor: {
            //         test: /[\\/]node_modules[\\/]/,
            //         name: 'vendors',
            //         chunks: 'all'
            //     }
            // }
        }
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        // publicPath: 'http://cdn.example.com/assets/[hash:7]',
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[name].[id].[chunkhash].js',
    },
    module: {
        rules: [
            {
                test: /\.pcss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
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
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'images/[name].[hash:7].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'fonts/[name].[hash:7].[ext]'
                        }
                    }
                ]
            },
        ]
    },
    devtool: 'source-maps',
    plugins: [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
        new CleanWebpackPlugin(['../dist'], { allowExternal: true }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].[id].css'
        })
    ]
});
