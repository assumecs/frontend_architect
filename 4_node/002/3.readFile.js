// fileSystem 文件系统 内置模块
// 文件的读写
let fs = require('fs');
// 既有同步又有异步方法, 异步有 callback

// 同步读取
// 1.读取文件 文件必须存在。/ 表示根目录。一般用相对路径
// let result = fs.readF
// let content1 = fs.readFileSync('./1.txt', 'utf8');
// let content2 = fs.readFileSync(content1, 'utf8');
// console.log(conteileSync('3.fs.js', 'utf8')
// console.log(result);nt2);

// 异步的方案，会导致回调地狱，不方便维护
fs.readFile('./1.txt', 'utf8', function(err, data){ // err 错误第一
    if(err) return console.log(err);
    fs.readFile(data, 'utf8', function(err, data) {
        if(err) return console.log(err);
        console.log("result", data);
        // ... 回调地狱
    })
})