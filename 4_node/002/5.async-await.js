let fs = require('fs');
let util = require('util');
let read = util.promisify(fs.readFile);
// async await es7 语法 node 版本 7.9+
// read('./1.txt', 'utf8').then(function(data) {
//     return read(data, 'utf8');
// }).then(function(data){
//     return data + 'xxx'
// }).then(function(data) {
//     console.log('result2', data);
// }).catch((err) => {
//     console.log('error', err);
// });
// await 后面只能跟随 promise 终极解决方案
async function result() {
    let content1 = await read('./1.txt', 'utf8');
    let content2 = await read(content1, 'utf8')
    let str = content2 + 'xxx';
    console.log(str);
}
result();