// 在文件中打印， this 不是 global 属性，node 自带模块化功能 一个 js 文件就是一个模块，模块中 this 不是 global （闭包）
console.log(this);  // {}
a = 1; // 每个文件都有局部作用域，不会将属性挂载在 global 上
console.log(global.a);


// 全局变量 不需要声明，直接使用
console.log(global);
// console // log warn error info time timeEnd
// process // 进程  设置环境变量
// Buffer // 缓存区 文件读写
// clearImmediate setImmediate
// clearTimeout setTimeout xxInterval
console.time('start');  //打印时差
for (let i = 0; i < 10000; i++) {
}
console.timeEnd('start')