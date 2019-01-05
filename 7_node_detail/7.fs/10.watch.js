// 监控监视文件的变化，当文件发生变化后执行对应回调函数
let fs = require('fs');
// stat 文件状态
// 当前状态，前状态
fs.watchFile('a.txt', function(currStat, prevStat) {
  console.log(Date.parse(currStat.ctime), Date.parse(prevStat.ctime));
  if(Date.parse(prevStat.ctime) == Date.parse(currStat.ctime)) {
  } else if(Date.parse(prevStat.ctime) == 0) {
    console.log('新增加的文件');
  } else if(Date.parse(currStat.ctime) == 0) {
    console.log('删除了');
    fs.unwatchFile('a.txt');
  } else {
    console.log('文件被修改了');
  }
});
/**
  0 0
  1539699010000 0
  新增加的文件
  1539699018000 1539699010000
  文件被修改了
  1539699022000 1539699018000
  文件被修改了
  0 1539699022000
  删除了
 */