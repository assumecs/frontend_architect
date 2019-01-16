let fs = require('fs');
let rs = fs.createReadStream('3.txt', {
    highWaterMark:3
});
// 立刻从文件中读取 highWaterMark(3字节)数据，读完之后填充缓存区，然后出发发射 readable
rs.on('readable', () => {
    let ch = rs.read(1);
    console.log(ch);
    // 当你读了一个字节后，发现只剩下2个，不够 highWaterMark，会再次读取 highWaterMark 个字节，填充到缓存区内
    setTimeout(() => {
        console.log(rs._readableState.length);
        let ch = rs.read(1);
        console.log(ch);
        // 当你读了一个字节后，发现只剩下2个，不够 highWaterMark，会再次读取 highWaterMark 个字节，填充到缓存区内
        // 所以缓存区大小范围是 n~2n-1(n=highWaterMark)
        setTimeout(() => {
            console.log(rs._readableState.length);
            
        }, 200)
    }, 200)
});