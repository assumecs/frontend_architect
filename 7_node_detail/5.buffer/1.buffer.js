// 表示分配一个长度为 6 个字节的 Buffer
// 会把所有字节设置为 0
// 可以提供默认值
// let buf1 = Buffer.alloc(6, 2);
// console.log(buf1);

/* // 分配一块没有初始化的内存
let buf2 = Buffer.allocUnsafe(6);
console.log(buf2)
// 从一个字符串分配一个 buffer
let buf3 = Buffer.from('阿里里');
console.log(buf3); */

/* let buf4 = Buffer.alloc(6);
console.log(buf4);
// fill 三个参数: 1.填充的值 2.填充的开始索引 3.结束索引
buf4.fill(3, 1, 3);
console.log(buf4);
// 1.写入字符串 2.开始索引 3.填充的字节长度 4.编码
buf4.write('阿里', 0, 3, 'utf8');
console.log(buf4);
buf4.write('里', 3, 3, 'utf8');
console.log(buf4); */

/* let buf5 = Buffer.alloc(6);
buf5.writeInt8(0, 0);
buf5.writeInt8(16, 1);
buf5.writeInt8(32, 2);
console.log(buf5); // [0, 16, 32, 0, 0, 0] */

// 字节序
let buf6 = Buffer.alloc(4);
// Big Endian 高位在前
// Little Endian 低位在前
buf6.writeInt16BE(256, 0);
console.log(buf6);
buf6.writeInt16LE(256, 2);
console.log(buf6);
let s1 = buf6.readInt16BE(0);
let s2 = buf6.readInt16LE(2);
console.log(s1, s2);
console.log(0x10, 0o10, 10, 0b10); // 永远输出十进制
// Buffer 转字符串
console.log(buf6.toString());

let buf7 = Buffer.alloc(6, 1);
let buf8 = buf7.slice(2, 6); // 浅拷贝
console.log(buf8);
buf8.fill(4);
console.log(buf7);

/**
 * string_decoder
 * 解决乱码问题
 */
let buf9 = Buffer.from('阿里里啊');
let buf10 = buf9.slice(0, 5);
let buf11 = buf9.slice(5, 7);
let buf12 = buf9.slice(7);
let {StringDecoder} = require('string_decoder');
let sd = new StringDecoder();
// write 就是读取 buffer 内容，返回一个字符串
console.log(sd.write(buf10)); // 判断是不是一个字符，多余的部分缓存起来
console.log(sd.write(buf11)); // 把前面缓存的字符加到开头
console.log(sd.write(buf12)); // 把前面缓存的字符加到开头

// console.log(buf10.toString());
// console.log(buf11.toString());