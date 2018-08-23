let fs = require('fs');

function copySync(source, target) { // 带 sync 是同步 readFileSync + writeFileSync
    try {
        let result = fs.readSync(source);
        fs.writeFileSync(target, result);
    } catch (error) {
        console.log(error);
    }
}
// copySync('1.txt', '2.txt');

function copy(source, target, callback) { // readFile writeFile
    fs.readFile(source, function(err, data) {
        if(err) return callback(err);
        fs.writeFile(target, data, callback);
        // fs.appendFile(target, data, callback); // 追加
    })
}
copy('1.txt', '2.txt', function(err) {
    console.log(err || '拷贝成功')
})