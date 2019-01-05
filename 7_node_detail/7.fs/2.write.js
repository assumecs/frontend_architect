let str = '阿里';
let fs = require('fs');
fs.open('./1.txt', 'w', 0o655, (err, fd) => {
  let buff = Buffer.from(str);
  // 当我们调用 write 方法写入文件的时候，并不会直接写入物理文件，二是会先写如缓存区，再批量写入物理文件
  fs.write(fd, buff, 0, 3, null, (err, bytesWritten) => {
    console.log(bytesWritten);
    fs.write(fd, buff, 3, 3, null, (err2, bytesWritten2) => {
      // console.log(bytesWritten2);
      fs.fsync(fd, (err) => {
        fs.close(fd, () => {
          console.log('关闭文件完成');
        });
      })
    })
  })
})