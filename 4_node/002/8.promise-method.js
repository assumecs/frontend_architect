// Promise 解决的问题
// 1.回调地狱 链式写法 then
// 2.解决同步异步的结果 Promise.all，如果都成功才算成功，Promise.race() 谁快以谁为准，得到结果以后就结束了。
let fs = require('fs');
let {promisify} = require('util');
let read = promisify(fs.readFile)

Promise.race([read('y.txt', 'utf8'), read('x.txt', 'utf8')]).then(data => {
    console.log(data);
}, err => {
    console.log(err);
});

// Promise 类上拥有两个方法可以把结果包装成 Promise 对象，resolve reject (上来就是失败或成功)
// Promise.resolve('123').then(data => {
Promise.reject('123').then(data => {
    return data + 456;
    // console.log(data);
}).then( data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})

// 如果程序 只初始执行一次 可以同步，readFile 会把内容读到内存中，用这种方式会导致淹没可用内存