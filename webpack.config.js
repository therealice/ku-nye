const path = require('path');

const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
const webpack = require('webpack');

const criticalCSS = new ExtractTextPlugin('critical.css');
const internalCSS = new ExtractTextPlugin('internal.[contenthash].css');

const extractTextPluginConfig = {
    fallback: 'style-loader',
    use: [
        {
            loader: 'css-loader',
            query: {
                sourceMap: true,
                importLoaders: 1,
                minimize: true                            
            }
        },
        {
            loader: 'postcss-loader'
        }
    ]
};

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'internal.[hash].js'
    },
    module: {
        rules: [
            {
                test    : /critical.css$/,
                loader: criticalCSS.extract(extractTextPluginConfig)
            },
            {
                test    : /\.css$/,
                exclude : /critical.css/,
                loader: internalCSS.extract(extractTextPluginConfig)
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader?name=[name].[hash].[ext]'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['es2015', { modules: false }]
                    ]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        criticalCSS,
        internalCSS,
        new StyleExtHtmlWebpackPlugin('critical.css'),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        }),
        new OfflinePlugin({
            ServiceWorker: {
                events: true
            }
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "src"),
        compress: true,
        port: 8080,
        https: false
    }
};