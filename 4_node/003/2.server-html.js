let http = require('http'); // http 模块
let port = 3000;
let fs = require('fs');
http.createServer((req, resp)=>{ // 监听函数, 当请求到来时，会执行回调函数
    resp.setHeader('Content-Type', 'text/html;charset=utf-8');
    // fs.readFile('index.html', (err, data) => {
    //     resp.end(data);
    // });
    fs.createReadStream('index.html').pipe(resp);
}).listen(port, () => {
    console.log(`服务已启动在${port}上`);
});
// 端口号尽量使用 3000 以上