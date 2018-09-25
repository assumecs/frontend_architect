// 只想知道模块的路径，但又不想加载这个模块
console.log(require.resolve('./school'));
// main 主要的，其实指的就是入口模块
// console.log(require.main);
/**
 * 在 node 里，模块的类型又三种
 * 1. JS 模块
 * 2. json 模块
 *    找到文件，读取内容，JSON.parse 转成对象返回
 * 3. node C++ 扩展二进制模块
 *    这属于二进制模块
 * 当require加载一个模块时，会按照 user -> user.js -> user.json -> user.node 这个顺序找文件。
 */
let user = require('./user.json');
console.log(user);
console.log(require.extensions);