const path = require('path')

module.exports = {
    entry: './src/index.js', // 入口文件
    // 出口配置
    output: {
        // 打包文件夹默认为 dist，必须是绝对路径
        path: path.resolve(__dirname, './build'),
        // 打包文件名称 默认为 main.js
        filename: 'index.js'
    }
}