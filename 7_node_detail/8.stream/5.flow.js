let fs = require('fs');

/**
 * 监听 'data' 事件
 * 调用 stream.resume() 方法
 * 调用 stream.pipe() 方法将数据发送到 Writable
 */

 let rs = fs.createReadStream('./1.txt', {
     highWaterMark: 3
 })
 /*
 line 269
 stream.emit('data', chunk);
 stream.read(0);
rs.on('data', function (data) {
    console.log(data);
})
rs.on('end', function () {
    console.log('end');
})
*/

// 当监听 readable 事件的时候，会进入暂停模式
// 当监听 readable 事件的时候，可读流会马上去向底层读取文件，然后把读到的文件放在缓存区里
// self.read(0) 只填充缓存区，不会发射 data 事件，但是会发射 readable 事件
// this._read(state.highWaterMark); 每次调用底层的方法读取的时候是读取3个字节
rs.on('readable', function() {
    console.log(rs._readableState.length);
    // read 如果不加参数表示读取整个缓存区数据
    // 读取一个字段，如果可读流发现你要读的字节小于等于缓存的字节大小，则直接返回
    let ch = rs.read(1);
    console.log(ch);
    console.log(rs._readableState.length);
    let ch = rs.read(1);
    console.log(ch);
    console.log(rs._readableState.length);
    // 当你读完指定的字节后，如果可读流发现剩下的字节已经比最高水平线小了，则会立马再次读取填满水位线
    
});