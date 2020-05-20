const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
const fs = require('fs');
const PAGES_DIR = path.resolve(__dirname, 'src/pages');
const PAGES = fs.readdirSync(PAGES_DIR);



module.exports = {
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    resolve: {
        alias: {
            Blocks: path.resolve(__dirname, 'src/blocks'),
            Common: path.resolve(__dirname, 'src/common'),
            Icons: path.resolve(__dirname, 'src/icons'),
            Fonts: path.resolve(__dirname, 'src/fonts'),
            Images: path.resolve(__dirname, 'src/images'),
            Modules: path.resolve(__dirname, 'node_modules'),
            Pages: path.resolve(__dirname, 'src/pages'),
        }
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        //index: 'UIKit.html',
        hot: true

    },
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
        'entry': './entry.js',
        /*  UIKit: './src/UI kit/UIKit.js'*/
    },
    devtool: 'source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: isDev ? "" : 'https://ase444ka.github.io/Education/'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        sourceMap: true
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { sourceMap: true }
                    },
                    {
                        loader: "sass-loader",
                        options: { sourceMap: true }
                    }
                ]
            },

            {
                test: /\.pug$/,
                loader: 'pug-loader',
                query: {
                    pretty: true
                }


            }, {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: "file-loader",
                options:
                {
                    name: 'images/[name].[ext]'
                }
            },
            {
                test: /\.svg$/,
                exclude: [/fonts/],
                loader: "file-loader",
                options:
                {
                    name: 'icons/[name].[ext]'
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                include: [/fonts/],
                loader: "file-loader",
                options:
                {
                    name: 'fonts/[name].[ext]'
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
        ...PAGES.map((page) => new HtmlWebpackPlugin({
            filename: `${page}.html`,
            template: `${PAGES_DIR}/${page}/${page}.pug`,
          })),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": "jquery"
        }),

    ]
};