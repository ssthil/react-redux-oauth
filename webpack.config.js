var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    context: path.resolve(__dirname, 'src'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'stage-0', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },

    devServer: {
        contentBase: path.resolve(__dirname, './src'),
        open: true,
        port: 8080,
        compress: true
    }
}