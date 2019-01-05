let path = require('path');
// 连接两个目录
console.log(path.join('a', 'b'));
console.log(__dirname)
console.log(__filename)
// 从当前路径出发，解析出一个绝对路径
// .. 上级目录
// . 当前目录
// 字符串 a 当前目录下的 a 目录(子目录)
console.log(path.resolve('..', '.', 'a'));
// 在不同操作系统中，分隔符不一样
/**
 * 环境变量路径分隔符 
 * Windows ;
 * Unix like :
 */
console.log(path.delimiter);
console.log(path.win32.delimiter);
console.log(path.posix.delimiter);
/**
 * 文件路径分隔符
 * Windows \
 * Unix like /
 */
console.log(path.sep);
console.log(path.win32.sep);
console.log(path.posix.sep);

// 不常用
// path.relative 获得两个路径之间的相对路径
// basename 获取文件名
console.log(path.basename('aa.jpg'));
console.log(path.basename('aa.jpg', '.jpg'));
// extname 获取文件名
console.log(path.extname('aa.jpg'));