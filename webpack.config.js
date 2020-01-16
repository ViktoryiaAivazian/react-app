// Webpack v4
let webpack = require('webpack');
let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let WebpackMd5Hash = require('webpack-md5-hash');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let fs = require('fs');

let browserConfig = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.[chunkhash].js',
        publicPath: '/'
    },
    devServer: {
        overlay: true,
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.pcss$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                sourceMap: true
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {sourceMap: 'inline'}
                        }
                    ]
                }),
                exclude: /node_modules/
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: '',
                            name: '[path][name].[ext]',
                            outputPath: '/',
                            publicPath: '../',
                            useRelativePaths: true,
                            fallback: 'file-loader'
                        },
                    },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path]/[name].[ext]',
                        outputPath: '/',
                        publicPath: '../',
                    },
                }]
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin(
            {filename: 'css/bundle.[hash].css', disable: false, allChunks: true}
        ),
        new WebpackMd5Hash(),
        new CleanWebpackPlugin('dist', {} ),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};

module.exports = (env, options) => {
    let production = options.mode === 'production';

    browserConfig.devtool = production
        ? false
        : 'eval-sourcemap';
    return browserConfig;
};
