const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [
                        '@babel/preset-react',
                        '@babel/preset-env'
                    ]
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
