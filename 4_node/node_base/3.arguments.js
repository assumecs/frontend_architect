console.log(arguments);

// exports require module __filename __dirname
// 模块化 低耦合 高内聚，方便维护，防止代码冲突（命名冲突）
// （闭包） 单例（不能保证一定不冲突）
// CMD:seajs-就近依赖 AMD:requirejs-依赖前置 （浏览器端模块化）

// node 基于规范 commonJS 文件的读写，node 天生自带模块化
// 1.定义如何创建一个模块 一个 js 文件就是一个模块
// 2.如何使用   require 你要使用一个文件只需要 require 它
// 3.如何导出   exports / module.exports