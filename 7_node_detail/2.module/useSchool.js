// console.log(module);
/**
 * {
  id: '.',  // 模块ID 入口模块的ID永远为.
  exports: {}, // 导出对象，默认是一个空对象
  parent: null, // 父模块，加载当前模块的模块
  // 当前模块的绝对路径
  filename:
   '/Users/lin/Stu/frontend_architect/7_node_detail/2.module/useSchool.js',
  loaded: false,  // 是否加载完成
  children: [], // 此模块加载了哪些模块
  // 第三方模块的查找路径
  paths:
   [ '/Users/lin/Stu/frontend_architect/7_node_detail/2.module/node_modules',
     '/Users/lin/Stu/frontend_architect/7_node_detail/node_modules',
     '/Users/lin/Stu/frontend_architect/node_modules',
     '/Users/lin/Stu/node_modules',
     '/Users/lin/node_modules',
     '/Users/node_modules',
     '/node_modules' ] }
 */

/**
 * 在 node.js 里通过 require 方法加载其他模块
 * 这个加载是同步的, 有缓存
 * 1.找到这个文件
 * 2.读取此文件模块的内容
 * 3.把它封装在一个函数里立刻执行
 * 4.执行后把模块的 module.exports 对象赋值给 school
 */
/**
 * 模块实现缓存，当第一次加载一个模块之后，会缓存这个模块的 exports 对象，以后如果再次加载这个模块的话，则直接从缓存中取，不需要再次加载了
 */
/**
 * 缓存的 key 是 绝对路径
 */
// console.log(require);
/**
 * resolve 当你想知道一个模块的绝对路径的时候，但又不想真正加载它的时候，可以用 resolve
 * main
 * extensions
 * cache
 */
console.log(Object.keys(require.cache));
var school = require('./school');
console.log(Object.keys(require.cache));
var school = require('./school');
console.log(Object.keys(require.cache));
// console.log(module);
// !function(exports, require, module, __filename, __dirname) {
//     let name = 'alili';
//     let age = 9;
//     module.exports = {name, age};
//     // return module.exports;
// }
debugger;
console.log(school);
