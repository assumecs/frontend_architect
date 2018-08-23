const webpack = require('webpack');

module.exports = {
    entry: __dirname + "/app/main.js",  // 入口源文件
    output: {
        path: __dirname + "/public",    // 目的路径
        filename: "bundle.js"   // 目的文件名
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: "./public",    //本地服务器加载的页面所在目录
        historyApiFallback: true,   //不跳转(单页)
        inline: true    // 实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /mode_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true,  // 指定启用 css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]'  //指定 css 的类名格式
                        }
                    }, {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究')
    ]
}