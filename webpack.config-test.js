var nodeExternals = require('webpack-node-externals');

module.exports = {
    externals: [nodeExternals()],
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
        ]
    }
};