let fs = require('fs'); // filesystem 文件系统
let util = require('util')

// resolve 和 reject 都是函数
// function read(path) {
//     return new Promise((resolve, reject)=>{
//         fs.readFile(path, 'utf8', function(err, data){
//             if(err){
//                 reject(err); return;
//             }
//             resolve(data);
//         });
//     })
// }

// promise 用法，promise 的实例就具备了 then 方法
let read = util.promisify(fs.readFile);
read('core/2.es6.js', "utf8").then(function(data){
    console.log(data);
}, function(err){
    console.log(err);
});   // promise 用法