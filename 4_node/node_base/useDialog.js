// 调用写好的方法
// 调用自己写的方法需要 ./moduleFile ,如果是 js node json 后缀，可以省略，会依次匹配
// require 同步加载，如果异步方法，一般会有回调
// let Dialog = require('./dialog-es5')
let Dialog = require('./dialog-es6')
let dialog = new Dialog()
console.log(Dialog);

dialog.$show();
