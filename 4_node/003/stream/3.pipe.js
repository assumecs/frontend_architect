// 30b； 读取 4b 5次； 读取第一次就开始写 只能写 1b，暂停读取，当 drain 后恢复读取
let fs = require('fs');
function pipe(source, target) {
    let rs = fs.createReadStream(source, {highWaterMark: 4});
    let ws = fs.createWriteStream(target, {highWaterMark: 1});
    rs.pipe(ws); // 可读流.pipe(可写流),会自动调用 write 和 end 方法
    // 流里面最重要的方法
}

pipe('1.txt', '2.txt');
// 通过流可以实现分段 但是 不关心文件中的内容，readFile 可以看到文件中的具体内容