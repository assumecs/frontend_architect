let express = require('express');
let app = express();
app.listen(3000);

// 不能直接返回对象 resp.json() // 返回 json
// 返回 html 页面 resp.sendFile()
// resp.statusCode res.end => res.sendStatus();
// resp.end() resp.header() => res.send();
app.get('/json', function(req, resp) {
    resp.json({name:'xx', age:9}); // 响应 json
})
app.get('/', function(req, resp) {  // 不能通过 ../ 查找(root是不支持的) 想读取确切的文件 用 path 模块进行拼接
    resp.sendFile('./index.html', {root: __dirname});
    resp.sendFile(require('path').join(__dirname, '..', 'index.html'));
    // resp.sendFile(__dirname + '/index.html');
})
app.get('/status', function(req, resp) {
    resp.sendStatus(500);
})
app.use(function(req, resp, next) {
    resp.mySend = function(data) {
        if(typeof data === 'object') {
            resp.setHeader('Content-Type', 'application/json;charset=utf-8')
            resp.end(JSON.stringify(data))
        }
        if(typeof data === 'string') {
            resp.setHeader('Content-Type', 'text/plain;charset=utf-8');
            resp.end(data);
        }
        if(typeof data === 'number') {
            resp.statusCode = data;
            resp.end(require('_http_server').STATUS_CODES[data]);
        }

    }
    next();
})
app.get('/send', function(req, resp) {
    // json statusCode 中文... 自动识别
    // resp.send({name:"alili", age: 20})
    resp.mySend('500');
})