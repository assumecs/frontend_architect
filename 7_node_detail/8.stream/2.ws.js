/**
 * 可写流 往里面写
 * 当你王可写流里写数据的时候，不是会立刻写入文件的，而是会先写入缓存区，缓存区的大小就是highWaterMark，默认值是16K。然后等缓存区满了之后再真正的写入文件里。
 */
let fs = require('fs');
let ws = fs.createWriteStream('./2.txt', {
    flags: 'w',
    mode: 0o666,
    start: 0,
    highWaterMark: 3
})
// 如果缓存区已满，返回 false，如果缓存区未满，返回 true
// 如果能接着写，返回 true，如果不能接着写，返回 false
// 按理说如果返回了 false，就不能往里面写了，但是如果继续写，数据也不会丢失，而是缓存在内存里。等缓存区清空后再从内存里读出来
let flag = ws.write('1');
console.log(flag);
flag = ws.write('2');
console.log(flag);
flag = ws.write('3');
console.log(flag);
flag = ws.write('4');
console.log(flag);