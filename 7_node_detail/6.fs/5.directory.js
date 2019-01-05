/**
 * 递归删除非空目录
 */
let path = require('path');
let fs = require('fs');
/* // 获取一个目录下的所有文件或目录
fs.readdir();
// 删除一个文件
fs.unlink(path);
// 删除一个空目录
fs.rmdir(path); */

function remdirp(dir) {
  let files = fs.readdirSync(dir);
  files.forEach(function(file) {
    let current = dir + '/' + file;
    let child = fs.statSync(current);
    if(child.isDirectory()) {
      remdirp(current);
    } else {
      fs.unlinkSync(current);
    }
  });
  // 目录删空后删除本身
  fs.rmdirSync(dir);
}
remdirp('a');

// 递归异步删除非空目录