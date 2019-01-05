let fs = require('fs');
let path = require('path');
/**
 * 同步的广度优先先序遍历
 * a a/b a/c a/h.txt a/b/d a/b/e a/c/f a/c/g a/b/d/d1
 */
function wide(dir) {
  let arr = [dir];
  while(arr.length>0) {
    let current = arr.shift(); // 取出队列最左边的元素 a
    console.log(current);
    let stat = fs.statSync(current);
    if(stat.isDirectory()) {
      let files = fs.readdirSync(current);
      files.forEach(item => {
        arr.push(path.join(current, item));
      })
    }
  }
}

wide('a');
// 异步广度优先先序遍历写出来，倒着删就可以实现异步递归删除文件夹
