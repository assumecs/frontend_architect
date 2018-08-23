let path = require('path')

// 拼一个路径出来
console.log(path.join(__dirname, './a', './b'))

// 解析一个绝对路径出来
console.log(path.resolve('./a', './b'));

console.log(path.delimiter);    // 环境变量分割符
console.log(path.posix.delimiter);
console.log(path.win32.delimiter);
// 看一下系统分隔符
console.log(path.win32.sep);
console.log(path.posix.sep);

// 流是基于事件的