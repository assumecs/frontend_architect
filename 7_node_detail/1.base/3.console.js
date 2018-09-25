// 标准输出 1
console.log(1);
console.info(1);
// 错误输出 2
console.warn(2);
console.error(2);
// node 3.console.js > a.log 
// 省略了默认，等同于
// node 3.console.js 1> a.log 
// 只会写入log和info，
// node 3.console.js > a.log 2>&1
// 将2重定向到1

// 用来统计两段代码之间执行事件的,参数一致为一对
// Warning: No such label 'cost1' for console.timeEnd()
console.time('cost');
let i = 0;
while(i++<10000000) {

}
console.timeEnd('cost');

// 高手进阶的非常重要标志就是写代码会有完善的测试，包括单元测试 集成测试 持续集成 TDD(测试驱动开发) BDD(行为驱动开发) 
// 以后回让大家造轮子，写开源项目，写项目严格按照开源项目规范来做，其中一个就是要有严格的单元测试
// CMMI5级水平 能力成熟度集成模型
// 断言
// 如果表达式结果为真的话就什么也不发生
// 如果表达式结果为假的话会报错
// Assertion failed: 报错
function sum(a, b) {
    return a + b;
}
console.assert(sum(1, 2) === 3, '报错');

let a = {name: 'alili', home:{name:'beijing'}}
// 可以列出对象的机构
console.dir(global);
// 跟踪当前代码的调用栈
console.trace();
/**
 * Trace
    at Object.<anonymous> (/Users/lin/Stu/frontend_architect/7_node_detail/3.console.js:39:9)
    at Module._compile (internal/modules/cjs/loader.js:689:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
    at Module.load (internal/modules/cjs/loader.js:599:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
    at Function.Module._load (internal/modules/cjs/loader.js:530:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:742:12)
    at startup (internal/bootstrap/node.js:266:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:596:3)
 */

//  栈是先进后出，但程序顺序是从上往下执行的，难道放的时候是从下往上放的？