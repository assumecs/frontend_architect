// 30b； 读取 4b 5次； 读取第一次就开始写 只能写 1b，暂停读取，当 drain 后恢复读取
let fs = require('fs');
function pipe(source, target) {
    let rs = fs.createReadStream(source, {highWaterMark: 4});
    let ws = fs.createWriteStream(target, {highWaterMark: 1});
    // 开启可读流
    rs.on('data', (chunk) => {
        if(ws.write(chunk) == false){   // 可写流不能再继续写入了
            rs.pause();
        }
    });
    ws.on('drain', () => {
        console.log('干了');
        rs.resume(); // 当当前读入的内容都写入到文件中 调用继续读取
    })
    rs.on('end', () => {
        ws.end();
    })
}

pipe('1.txt', '2.txt');
// 通过流可以实现分段 但是 不关心文件中的内容，readFile 可以看到文件中的具体内容