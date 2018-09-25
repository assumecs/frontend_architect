/**
 * 我们可以通过代码进入 repl 创建一个 repl 环境
 */
let repl = require('repl');
// 上下文，就是它运行时的环境，repl 可以从环境中拿到一些变量
let context = repl.start().context;
context.msg = 'hello';
context.hello = function() {
    console.log(context.msg);
}
// ➜  7_node_detail git:(master) ✗ node 2.repl.js
// > msg
// 'hello'
// > hello()
// hello
// undefined
// > .clear
// Clearing context...
// > msg
// ReferenceError: msg is not defined
// >