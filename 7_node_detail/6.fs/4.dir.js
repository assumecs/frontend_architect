// 如何创建目录
let fs = require('fs');
// 当创建目录的时候，要求父目录是存在的
fs.mkdir('a', 0o755, function(err) {
  console.log(err)
});
// 判断一个文件或目录是否存在 过期 fs.exists
/* fs.access('a', fs.constants.R_OK, function(err) {
  console.log(err);
}) */
// 递归异步创建目录
function mkdirp(path) {
  let paths = path.split('/'); // [a, b, c]
  !function next(index) {
    if(index > paths.length){
      return;
    }
    let current = paths.slice(0, index).join('/');
    fs.access(current, fs.constants.R_OK, function(err) {
      if(err) {
        // fs.mkdir(current, 0o755, () => next(index+1));
        fs.mkdir(current, 0o755, next.bind(null, index+1));
      } else {
        next(index + 1);
      }
    })
  }(1);
}
mkdirp('a/b/c');