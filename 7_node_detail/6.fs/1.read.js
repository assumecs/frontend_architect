/**
 * fs 核心模块来读写文件
 */
let fs = require('fs');
// flag 你将要对该文件进行何种操作
/* fs.readFile('./1.txt', {encoding: 'utf8', flag: 'r'}, function(err, data) {
    if(err){
        console.error(err);
    } else {
        console.log(data);
    }
}); */
// mode 权限位 
/* fs.writeFile('./2.txt', 'data', {encoding: 'utf8', flag: 'a', mode: 0o666}, function(err) {
    console.log(err);
}) */

// 作用同上
/* fs.appendFile('./2.txt', 'data', function(err) {
    console.log(err);
}) */

// 上述方法都是把文件当成一个整体来操作
// 当文件特别大，大于内存是无法执行这样的操作的
// 我们需要精确的控制读取的字节
// fd file descriptor 文件描述符
// 0 标准输入 stdin
// 1 标准输出 stdout
// 2 错误输出 stderr
/* process.stdin.on('data', function (data) {
    console.log(data);
}) */
/* console.log('hello'); // 标准输出
process.stdout.write('hello'); */
/* console.error('hello');
process.stderr.write('hello\n'); */
// w 清空并写入 a 追加写入
fs.open('./2.txt', 'a+', 0o666, function(err, fd) {
    console.log(fd);
    // fd offset length position
    fs.write(fd, Buffer.from('阿里'), 0, 3, 9, function(err) {
        console.log(err);
    })
    
    // let buff = Buffer.alloc(4);
    // 描述符 buf 写入索引 读取几个字节 文件读取位置
    // position 不传表示当前位置
    /* fs.read(fd, buff, 0, 3, null, function(err, bytesRead, buf) {
        console.log(buf.toString());
        let buff2 = Buffer.alloc(4);
        fs.read(fd, buff2, 1, 3, null, function(err, bytesRead, buf2) {
            console.log(buf2.toString());
        })
    }) */
})