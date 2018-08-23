let fs = require('fs');
// stat
fs.stat('./1.txt', function(err, stats) {
    if(err) {/* 文件不存在 */}
    console.log(stats.isFile()); // 是不是文件
    console.log(stats.isDirectory()); // 是不是文件夹
    // console.log(err, stats);
})

function mkdirs(url, callback) { // 插入排序
    // a a/b a/b/c a/b/c/d
    let urlArr = url.split('/');
    let index = 0;
    function make(path) {
        if(urlArr.length < index) { // 终止循环
            return callback("创建成功");
        }
        fs.stat(path, function(err){
            if(err) {
                fs.mkdir(path, function(err){
                    if(err) return callback(err);
                    make(urlArr.slice(0, ++index+1).join('/'));
                })
            } else {
                make(urlArr.slice(0, ++index+1).join('/'));
            }
        })
    }
    make(urlArr[index]);
}
mkdirs('a/b/c/d', function(err) {
    console.log(err || "创建成功");
})

// fs.mkdir('a/b', function(err) {
//     console.log(err);
// });

// atime access time
// mtime modify time
// ctime change time
// birthtime