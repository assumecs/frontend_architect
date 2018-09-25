// 表示分配一个长度为 6 个字节的 Buffer
// 会把所有字节设置为 0
// 可以提供默认值
let buf1 = Buffer.alloc(6, 2);
console.log(buf1);

// 分配一块没有初始化的内存
let buf2 = Buffer.allocUnsafe(6);
console.log(buf2)
// 8-buffer 01:15:00
