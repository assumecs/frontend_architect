/**
 * linux 经典的管道的概念
 * 前者的输出是后者的输入
 */
let fs = require('fs');
let rs = fs.createReadStream('./1.txt', {
    highWaterMark: 3
});
let ws = fs.createWriteStream('./2.txt', {
    highWaterMark: 3
});
rs.pipe(ws);
// 当监听可读流 data 事件的时候会触发回调函数的执行
// 可以实现数据的生产者和消费者速度的均衡
// tcp http 网络层
/*
rs.on('data', function (data) {
    console.log(data);
    let flag = ws.write(data);
    if(!flag) {
        rs.pause();
    }
})
ws.on('drain', function() {
    console.log('drain');
    rs.resume();
})
*/
