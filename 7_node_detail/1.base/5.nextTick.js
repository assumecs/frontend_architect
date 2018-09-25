/**
 * nextTick setImmediate 区别联系
 * nextTick 把回调函数放在当前执行栈底
 * setImmediate 把回调函数放在事件队列的尾部
 */

 function read() {
     setImmediate(function() {
         console.log(1);
         process.nextTick(function() {
            console.log(2);
            process.nextTick(function() {
               console.log(3);
           })
        })
        // 下面俩数序不一定
        setImmediate(function() {
            console.log(5);
        })
        setTimeout(function() {
            console.log(6);
        })
     })
     process.nextTick(function() {
         console.log(0);
     })
 }
 read(); // 0 1 2 3

//  node 推荐 setImmediate