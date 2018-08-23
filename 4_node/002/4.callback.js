let fs = require('fs');
// promise resolve 成功 reject 失败 实例上有个 then 方法，方法中有两个参数， success， error
let util = require('util');
let read = util.promisify(fs.readFile);
read('./1.txt', 'utf8').then(function(data) {
    // 如果第一个 promise 中返回了一个 promise 实例，会把当前执行的结果传到下一个 then 中
    return read(data, 'utf8');
}).then(function(data){
    // console.log('result', data);
    // 如果返回的不是 promise 会把结果继续向下传递
    return data + 'xxx'
}).then(function(data) {
    console.log('result2', data);
}).catch((err) => {
    // 处理错误，如果写了错误 callback 走自己的，没写统一走 catch
    console.log('error', err);
});
// 流程控制

// 自己封装 promise
// function read(path) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, 'utf8', function(err, data) {
//             if(err) return reject(err);
//             resolve(data);
//         });
//     })
// }


// fs.readFile('./1.txt', 'utf8', function(err, data){ // err 错误第一
//     if(err) return console.log(err);
//     fs.readFile(data, 'utf8', function(err, data) {
//         if(err) return console.log(err);
//         console.log("result", data);
//         // ... 回调地狱
//     })
// })