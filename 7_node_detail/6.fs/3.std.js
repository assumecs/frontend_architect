// 在 linux 输入和输出都对应一个文件描述符， 它是一个数字
// 0 1 2
/* console.log('stdout')
console.error('stderr')
// process.stdin.on('data', function(data) {
//   console.log(data);
// })
let fs = require('fs');
fs.write(1, Buffer.from('a'), 0, 1, null, function(err, bytesWritten) {
  console.log(bytesWritten);
}) */

let fs = require('fs');
fs.open('./2.txt', 'w', 0o666, function(err, fd) {
  fs.write(fd, Buffer.from('a'), 0, 1, null, function(err, bytesWritten){
    console.log(bytesWritten);
    // 强行把缓存区的数据写入文件， 并且关闭
    fs.fsync(fd, function(err) {
      fs.close(function() {
        console.log('关闭');
      })
    })
  })
})