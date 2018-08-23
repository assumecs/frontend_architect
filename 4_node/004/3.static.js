let express = require('express');
let app = express();
app.listen(3000);
app.use(express.static('dist'))
app.use(express.static('public'))
// let fs = require('fs')
/* function static(p) {    // dist 静态资源目录
    return function (req, resp, next) {
        // req.path
        let path = require('path').join(p, req.path); // 要读取的文件
        fs.stat(path, function(err, stats) {
            if(err) {   // 文件不存在
                return next();
            }
            if(stats.isFile) {
                fs.createReadStream(path).pipe(resp);
                return;
            }
        })
    }
}
app.use(static('dist'));    // 自定义服务中间件
app.use(static('public'));    // 自定义服务中间件 */