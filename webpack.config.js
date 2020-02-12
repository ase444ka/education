const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');



module.exports = {
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    mode: 'development',
    entry: {
        pages: './src/layouts/UI kit/UIKit.js',
      /*  UIKit: './src/UI kit/UIKit.js'*/
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        //publicPath: 'https://ase444ka.github.io/Education/'
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {sourceMap: true}
                    },
                    {
                        loader: "sass-loader",
                        options: {sourceMap: true}
                    }
                ]
            },

            {
                test: /\.pug$/,
                loaders: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: "pug-html-loader",
                        options: {
                            "pretty": true
                        }
                    }
                ]
            }, {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: "file-loader",
                options:
                    {
                        name: '/images/[name].[ext]'
                    }
            },
            {
                test: /\.svg$/,
                exclude: [/fonts/],
                loader: "file-loader",
                options:
                    {
                        name: '/icons/[name].[ext]'
                    }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                include: [/fonts/],
                loader: "file-loader",
                options:
                    {
                        name: '/fonts/[name].[ext]'
                    }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        // new HtmlWebpackPlugin({
        //     filename: "pages.html",
        //     template: './src/pages/pages.pug'
        // }),
        new HtmlWebpackPlugin({
            filename: "UIKit.html",
            template: './src/layouts/UI kit/UIKit.pug'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),

    ]
};