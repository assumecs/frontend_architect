let calc = require('./calc');
// require 方法具有缓存功能，多次引用只执行一次
console.log(calc(1, 2, 3, 4, 5));
