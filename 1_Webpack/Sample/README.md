# Webpack

## 安装
    npm init
    npm install --save-dev webpack webpack-cli
    项目结构 app public

## 使用 配置
    webpack.config.js
    
## 其他功能
    source-map  eval-source-map
    webpack-dev-server

### Loaders
    babel-loader,css-loader,style-loader

## 一切皆模块
    css
### css 预处理器
    Less Loader
    Sass Loader
    Stylus Loader
    -PostCSS
        postcss-loader autoprefixer postcss.config.js

## 插件
    npm 安装
    webpack.config.js 关键字部分添加一个实例
    banner
    HtmlWebpackPlugin   生成 index.html，用于动态带 hash 值 js
    Hot Module Replacement  调试修改代码实时刷新预览


## 产品阶段的构建
    优化，压缩，缓存，分离 css  和 js。
    大项目分解配置文件 webpack.production.config.js
    # package.json
    "build": "NODE_ENV=production webpack --config ./webpack.production.config.js --progress"
### 优化插件
    OccurenceOrderPlugin:   为组件分配 ID，使用多的模块分配最小 ID
    UglifyJsPlugin： 压缩 JS 代码
    ExtractTextPlugin: 分离 CSS 和 JS 文件

#### 插件版本 
    extract-text-webpack-plugin@next
    uglifyjs-webpack-plugin 替换 UglifyJsPlugin
        https://my.oschina.net/hyzccc/blog/1797358

## 缓存
    hash
        filename: "bundle-[hash].js"
### 去除残余
    clean-webpack-plugin