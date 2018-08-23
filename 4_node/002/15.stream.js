// 35:45
// 流 可读流和可写流
// 流：边读边写 不是疯狂的读，避免内存淹没
let fs = require('fs');
// highWaterMark 每次能读取多少 默认64k 一般不需要更改
// 读取时默认是 buffer 类型
let rs = fs.createReadStream('1.txt', {highWaterMark: 1});
// console.log(rs);
// 需要监听事件 数据到来的事件 rs.emit('data', data);
// 默认叫非流动模式 => 流动模式
// let str = '';
let arr = [];
rs.on('data', (chunk) => {
    // str += chunk; // 中文乱码
    arr.push(chunk);
    console.log(chunk);
    rs.pause(); // 暂停 暂停 on('data') 的触发
    setTimeout(() => {
        rs.resume();    // 恢复 data 事件的触发
    }, 1000);
})
// 默认 data 时间是不停的触发，直到文件中的数据全部读出来
rs.on('end', () => {
    let str = Buffer.concat(arr).toString();
    console.log('end', str);
})
rs.on('error', err => {
    // 文件不存在 错误
})
// on('data') on('err') on('end') resume() pause()