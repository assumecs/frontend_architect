// process 进程 设置环境变量
// 在命令行配置 NODE_ENV, mac export/windows set
// vs code 中配置环境变量 ./.vscode/launch.json configurations>env
console.log(process.env.NODE_ENV);

let url = '';
if(process.env.NODE_ENV == 'dev'){
    url = "http://localhost:3000";
} else {
    url = "http://www.liner.com";
}
console.log(url);

// 异步的，在当前队列的底部
process.nextTick(function() {
    console.log('nextTick')
})
// 下一队列
setImmediate(()=> {
    console.log('setImmediate');
})
// 形参(剩余运算符) 将剩余的内容放到一个数组中 ...
// 实参(拓展运算符) 展开运算符
console.log([...[1, 2, 3], ...[4, 5, 6]]); // ES6
console.log({...{name:'lin'}, ...{ach: 'xxx'}}); //ES7

setTimeout((...args) => { 
    // function 中 this 指向的是 timeout 自己，
    // 箭头函数中没有 this 指向 没有 arguments
    console.log('setTimeout', args.length);
}, 0, '去吃饭');