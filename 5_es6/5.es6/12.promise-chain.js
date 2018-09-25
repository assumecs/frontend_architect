let Promise1 = require('./Promise');
// 链式
let p1 = new Promise1((resolve, reject) => {
    resolve(100);
})

// 成功回调后的值会被用来 resolve 当前 promise
// 成功的回调里又返回了一个Promise，且是别人实现的 Promise。
// 那么 promise2 要以 promise 的 resolve 结果来 resolve 自己
let p2 = p1.then((data) => {
    // return data + 100;
    return new Promise((resolve, reject)=> {
        resolve(data + 100)
    })
}, err => {
    console.log(err);
})
p2.then((data) => {
    console.log('p2', data);
})