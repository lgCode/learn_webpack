module.exports = {
    //入口
    entry:{
        //入口可以多个，可以一个，如果一个，默认从当下这个开始分析
        'main':'./main.js'
    },
    //输出
    output:{
        filename:'./build.js'
    },
    watch:true, //文件发生改动，自动监视，自动产出build.js
}