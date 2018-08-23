let fs = require('fs')
// 可写流默认要占用16384 16k
let ws = fs.createWriteStream('./1.txt', {highWaterMark:2})
// 可写流有两个方法 write end   res.write() res.end()
// 可写流来写数据必须是字符串类型或 Buffer 类型
var flag = ws.write(1 + '', () => {console.log('异步写入回调')});
console.log(flag);
var flag = ws.write(1 + '');
console.log(flag);
var flag = ws.write(1 + '');
console.log(flag);
// ws.end('\nwrite over.'); // end 调用后会把所有的 write 内容写入文件
// end 返回 ws 对象
// console.log(obj);
// ws.write('1'); // error :write after end
// flag 是否还有空闲缓存空间
ws.on("drain", () => {  // 当读入的文件全部写入后，恢复读取
    console.log('吃完了');
})

// 300k； 读取 64k 5次； 读取第一次就开始写 只能写 16k，暂停读取，当 drain 后恢复读取