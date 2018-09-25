/**
 * I/O callback I/O 循环
 * 这个代码输出顺序
 */
 console.log("main1-1");

 setTimeout(function() {
     console.log("setTimeout-3");
     process.nextTick(function() {
         console.log("process.nextTick2-5");
     })
 }, 0)

 new Promise(function(resolve, reject) {
    //  同步，栈内
     console.log('promise-4');
     resolve();
 }).then(function(){
    //  promise 微任务
     console.log("resolve-6");
 })

 process.nextTick(function() {
    //  nextTick 优先级比 promise 高
     console.log("process.nextTick1-2");
 });
// 输出顺序
// 1 4 2 6 3 5
// main1-1
// promise-4
// process.nextTick1-2
// resolve-6
// setTimeout-3
// process.nextTick2-5

// 8-buffer 06:32