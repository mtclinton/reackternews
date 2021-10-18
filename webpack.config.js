const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[fullhash].bundle.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'dist'),
        publicPath: '/',
        hot: true,
        port: 3000,
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html',
            favicon: path.resolve(__dirname, 'public/favicon.ico'),
        }),
        new CopyPlugin({
            patterns: [
                { from: 'public/css/style.css', to: 'css' },
            ],
        }),
    ],
    target: 'web',
};
