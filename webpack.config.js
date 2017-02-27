module.exports = {

    entry: ["babel-polyfill", "./src/main.js"],

    output: {
        filename: "build/bundle.js"
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
        ]/*,

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
            }
        ]*/
    }/*,

    plugins: [
        new ExtractTextPlugin({
            filename: "build/[name]/style.css"
        })
    ]*/
};