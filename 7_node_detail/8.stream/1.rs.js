/**
 * 可读流
 */
let fs = require('fs');
// 创建一个可读流
let rs = fs.createReadStream('./z.txt', {
  highWaterMark: 3
});
// 监听它的 data 事件，当你一旦开始监听 data 事件的时候，流就开始读取文件的内容并且发射 data 
rs.on('data', function(data) {
  
})
// 12.stream_ 10:00