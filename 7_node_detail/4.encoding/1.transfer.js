/**
 * 以前 JS 只需要处理字符
 * Node 需要处理二进制文件
 * 如何实现进制的转换
 */

 let a = 0b10100;   // 二进制
 console.log(a);
 let b = 0o24;  // 八进制
 console.log(b); 
 let c = 20;
 let d = 0x14;  // 十六进制
 console.log(d);
 console.log("=======");

// 如何把任意进制转成十进制
console.log(parseInt("10100", 2));
// 如何把十进制转成任意进制
console.log(c.toString(2));
// 八进制 转成 十六进制
