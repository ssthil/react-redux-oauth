var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    context: path.resolve(__dirname, 'src'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    
    devServer: {
        contentBase: path.resolve(__dirname, './src'),
        open: true,
        port: 8080,
        compress: true
    }
}