let fs = require('fs');
// 读取类型都是 buffer 写入的时候都是 utf8
// 读取的文件必须存在，写的时候文件不存在会自动创建，里面有内容会覆盖掉
// fs.writeFile('1.txt', 1, {}, function(){})
// fs.writeFile('1.txt', Buffer.from('阿里里'), {}, function(){})
// 默认会调用 tostring 方法
fs.writeFile('1.txt', '阿里里', function(err){
    console.log(err);
})
fs.writeFileSync('1.txt', '哦勒勒')