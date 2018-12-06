const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //入口
    entry: {
        //入口可以多个，可以一个，如果一个，默认从当下这个开始分析
        'main': './src/main.js'
    },
    //输出
    output: {
        //指定产出的目录
        path: path.resolve('./dist'), //相对路径转绝对路径
        filename: 'build.js'
    },
    //生命模块,
    //包含着各个loader
    module: {
        loaders: [
            //webpack后面版本可以叫做roles
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                loader: 'url-loader?limit=9510'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            //处理ES6,7,8
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['env'], //处理关键词
                    plugins: ['transform-runtime'], //处理函数
                }
            }
        ]
    },
    // watch: true, //文件发生改动，自动监视，自动产出build.js
    plugins: [
        //插件的执行顺序与元素索引有关
        new HtmlWebpackPlugin({
            template: './src/index.html', //参照物
        })
    ]
}