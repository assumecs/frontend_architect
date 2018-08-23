## Buffer （16进制）
- 缓冲区 Buffer 是暂时存放输入输出数据的一段内存
- JS 语言没有二进制数据类型，而在处理 TCP 和文件流的时候，必须要处理二进制数据
- NodeJS 提供了一个 Buffer 对象来提供对二进制数据的操作
- 是一个表示固定内存分配的全局对象，也就是说要放到缓存区中的字节数需要提前确定
- Buffer 好比由一个多位字节元素组成的数组，可以有效的在 javascript 中表示二进制数据


## 什么是字节
- 字节(Byte)是计算机存储时的一种计量单位，一个字节等于8位二进制数
- 一个位就代表一个0或1，每8个为(bit)组成一个字节(Byte)
- 字节是通过网络传输信息的单位
- 一个字节最大值十进制数是 255

- 1024b = 1k
- 8bit(8个二进制) = 1b
- 1个汉字(3个b)
- 一个字节最大转化成十进制是 255
- 一个字节最大转换成16进制是 ff


## 定义 Buffer 的三种方式
### 通过长度定义 buffer
``` JavaScript
let buffer = Buffer.alloc('6');
let buffer = Buffer.allocUnsafe(6);
```
### 通过数组定义 buffer
``` JavaScript
let buffer = Buffer.from([1, 2, 3, 4]);
```
### 字符串创建 buffer
``` JavaScript
let buffer = Buffer.from('阿里里')
```

## Buffer 常用方法
- buffer.fill   填充 buffer 中的内容
- buffer.toString   将 buffer 转化成字符串
- buffer.slice  截取想要的 buffer
- buffer.copy   拷贝
- Buffer.concat 拼接
- Buffer.isBuffer   判断是否是 buffer类型