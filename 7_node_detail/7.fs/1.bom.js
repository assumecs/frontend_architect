let fs = require('fs');
fs.readFile('1.txt', function(err, data) {
  console.log(data.toString());
});
let iconv = require('iconv-lite');
fs.readFile('2.txt', function(err, data) {
  // GBK Unknown encoding: gbk
  // 实现转码操作，把一个GBK编码的Buffer转变成UTF8字符串
  let str = iconv.decode(data, 'gbk');
  console.log(str);
});