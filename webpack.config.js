var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: ["babel-polyfill", "./src/main.js"],

    output: {
        path: 'build/',
        filename: "bundle.js"
    },

    module: {

        loaders: [
            {
                test: '/\.js$/',
                exclude: '/node_modules/',
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-2']
                }
            }
        ],

        rules: [
            {
                test: /\.scss|.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: "css-loader" }, 
                        { loader: "sass-loader" }
                    ] 
                })
            },
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=[name].[ext]&outputPath=resources/'},
            {test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[name].[ext]&outputPath=resources/'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=[name].[ext]&outputPath=resources/'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=[name].[ext]&outputPath=resources/'}
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: "resources/style.css"
        }),
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       })
    ]
};