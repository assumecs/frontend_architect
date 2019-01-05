let fs = require('fs');
// fs.rename();
// 截断文件 truncate 
fs.truncate('./1.txt', 5, ()=> {
  console.log('截断文件');
})