/**
 * 可读流
 */
let fs = require('fs');
// 创建一个可读流
let rs = fs.createReadStream('./z.txt', {
  flags: 'r', // 我们要对文件进行何种操作 r读 w写
  mode: 0o666, // 权限位 一半写的时候用
  encoding: 'utf8', // 编码，可以放到options里，也可以放到函数参数位置，都不放，默认为Buffer
  start: 3, // 从索引为 3 开始读
  end: 8, // 读到索引为 8 结束， 包括结束索引
  highWaterMark: 3
});
// 监听它的 data 事件，当你一旦开始监听 data 事件的时候，流就开始读取文件的内容并且发射 data 
// 默认情况下，当你监听 data 事件后，会不停的读数据，然后触发 data 事件，触发完 data 事件后继续读
rs.on('open', function(data) {
  console.log('文件打开');
})
rs.on('data', function(data) {
  console.log(data);
  rs.pause();
  setTimeout(() => {
    rs.resume();
  }, 2000);
})
rs.on('error', function(err) {
  console.log('出错了', err)
})
rs.on('end', function() {
  console.log('读完了');
})
rs.on('close', function() {
  console.log('文件关闭');
})
// 12.stream_ 10:00