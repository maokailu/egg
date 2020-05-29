// 打包成node能够执行的文件
const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

const config = webpackMerge(baseConfig, {
    mode: 'development',
    target: 'node',
    entry: {
        app: path.resolve(__dirname, '../client/src/index.jsx'),
        list: path.resolve(__dirname, '../client/src/controller/list/index.jsx')
    },
    output: {
        path: path.resolve(__dirname, '../client/dist'),
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    }
});

module.exports = config;
