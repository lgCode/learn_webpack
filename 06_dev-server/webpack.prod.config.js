const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //入口
    entry:{
        //入口可以多个，可以一个，如果一个，默认从当下这个开始分析
        'main':'./src/main.js'
    },
    //输出
    output:{
        //指定产出的目录
        path:path.resolve('./dist'),//相对路径转绝对路径
        filename:'build.js'
    },
    //生命模块,
    //包含着各个loader
    module:{
        loaders:[
                //webpack后面版本可以叫做roles
                {
                    test:/\.css$/,loader:'style-loader!css-loader'
                },
                {
                    test:/\.(jpg|png|gif|svg)$/,loader:'url-loader?limit=249510'
                },
                {
                    test:/\.less$/,loader:'style-loader!css-loader!less-loader'
                }
        ]
    },
    plugins:[
        //插件的执行顺序与元素索引有关
        new HtmlWebpackPlugin({
            template:'./src/index.html',//参照物
        })
    ]
}