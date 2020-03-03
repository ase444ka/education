const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev



module.exports = {
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    devServer: {
            contentBase: path.resolve(__dirname, 'dist'),
           //index: 'UIKit.html',
            hot: true
           
       },
    mode: 'development',
    entry: {
        pages: './src/layouts/UI kit/UIKit.js',
      /*  UIKit: './src/UI kit/UIKit.js'*/
    },
    devtool: 'source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: isDev? "" : 'https://ase444ka.github.io/Education/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {sourceMap: true}
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
                        name: './fonts/[name].[ext]'
                    }
            } 
        ]
    },
    plugins: [
/*         new CopyPlugin([
            { from: './src/layouts/UI kit/UIKit.js', to: path.resolve(__dirname, 'dist/fonts') },
          ]), */
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        // new HtmlWebpackPlugin({
        //     filename: "pages.html",
        //     template: './src/pages/pages.pug'
        // }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: './src/layouts/UI kit/index.pug'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": "jquery"
        }),

    ]
};