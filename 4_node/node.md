## mac homebrew
-brew install node

> 安装后重新启动cmd命令行
nvm-win

## 环境变量
- path

## 运行
``` shell
node filename.js
```
- 在编辑器中使用


## nodejs 
- 主线程是单线程(异步) callback,将后续逻辑以函数的形式，传入到当前执行的函数，当执行的函数得到了结果后，执行传入的函数(回调函数)。
- 五个人同时吃一碗饭，异步。
- 阻塞不能异步(阻塞是针对内核说的)
- I/O操作 读写，异步读写(能用异步绝不用同步)
- event-driven 事件驱动(发布订阅)

## web异步
- setTimeout
- callback
- onclick
- ajax

## global 全局变量
- console // log warn error info time timeEnd
- process // 进程  设置环境变量
- Buffer // 缓存区 文件读写
- clearImmediate setImmediate
- clearTimeout setTimeout xxInterval

## 伪全局变量 所有模块均可使用，但作用域只在模块内
- __dirname
- __filename
- exports
- module
- require()

## 模块化
- exports require module __filename __dirname
- 模块化 低耦合 高内聚，方便维护，防止代码冲突（命名冲突）
- （闭包） 单例（不能保证一定不冲突）
- CMD:seajs-就近依赖 AMD:requirejs-依赖前置 （浏览器端模块化）

### node 基于规范 commonJS 文件的读写，node 天生自带模块化
- 1.定义如何创建一个模块 一个 js 文件就是一个模块
- 2.如何使用   require 你要使用一个文件只需要 require 它
- 3.如何导出   exports / module.exports

### 模块模板
``` JavaScript
(function(exports, module, require, __dirname, __filename){
    module.exports = exports = this = {}
    // js 文件内容起
    function Clazz(){}
    module.exports = Clazz;
    // 或者
    exports.xxx = Clazz;
    // 或者
    gloabal.xxx = Clazz
    // js 文件内容止
    return module.exports
})()
```

### 模块导出
``` JavaScript

```