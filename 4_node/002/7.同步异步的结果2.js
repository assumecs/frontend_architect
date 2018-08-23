let fs = require('fs')
let {promisify} = require('util')
let read = promisify(fs.readFile)

// let school = {};
// read('./x.txt', 'utf8').then( data => {
//     school.name = data;
// }, err => {
// })

// read('./y.txt', 'utf8').then( data => {
//     school.age = data;
// }, err => {
// })

// 调用 all 方法后，会返回一个新的 promise 的实例
// Promise.all([read('./x.txt', 'utf8'), read('./y.txt', 'utf8')]).then(function(data) { // data 是一个数组类型，对应的是和前面请求的顺序相同（会把成功后的结果放到数组中）,假如说有一个失败了，走错误
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

async function result() {
    let [name, age] = await Promise.all([read('./x.txt', 'utf8'), read('./y.txt', 'utf8')])
    console.log(name, age);
}
result();

// promise 解决的问题 1.回调地狱 2.同步(合并)异步的返回结果 3. async await 简化 promise 写法的 (语法糖) 