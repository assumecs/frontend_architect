// base64 进制转换  非加密
// 10 -> 16 2 8
// 16 2 8 -> 10
let buf = Buffer.from("啊");
// console.log(buf.toString("base64")); // 5ZWK
// 把一个汉字的24位 转换成4个字节，每个字节6位，不足的补0
console.log(buf);   // e5 95 8a
// 1.把16进制转化成2进制 toString()
console.log((0xe5).toString(2));
console.log((0x95).toString(2));
console.log((0x8a).toString(2));
// 11100101 10010101 10001010
// 分割成4
// 111001 011001 010110 001010
// 补 0 最大64 base64名称由来
// 00111001 00011001 00010110 00001010

// 2.将这些值转化成10进制 去可见编码中取值 parseInt
console.log(parseInt('00111001', 2))
console.log(parseInt('00011001', 2))
console.log(parseInt('00010110', 2))
console.log(parseInt('00001010', 2))
// 57 25 22 10
// 标准base64只有64个字符(英文大小写、数字和+、/)以及用作后缀等号
let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
console.log("str.length: ", str.length);
console.log(str[57] + str[25] + str[22] + str[10]);

// string 是快内存，不能根据索引修改内容