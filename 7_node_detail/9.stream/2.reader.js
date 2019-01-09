/**
 * 我们现在讲一个案例 流的用法
 */
// let fs = require('fs');
// fs.readFile('./9.stream/1.txt', function(err, data) {
    //     // windows 回车换行 \r\n 13 10 0d 0a
    //     // mac \r
    //     // linux \n
    //     console.log(data);
    // })

let LinerReader = require('./LineReader');
let reader = new LinerReader('./9.stream/1.txt', 'utf8');
reader.on('newLine', data => {
    console.log(data);
})
reader.on('end', () => {
    console.log('over');
});

// 14-stream.js 32:32 