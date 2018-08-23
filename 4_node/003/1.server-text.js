let http = require('http'); // http 模块
let port = 3000;
http.createServer((req, resp)=>{ // 监听函数, 当请求到来时，会执行回调函数
    // req 代表客户端，可读流
    // resp 代表服务端，可写流
    console.log('start');
    // 设置响应头，指定类型和编码
    resp.setHeader('Content-Type', 'text/plain;charset=utf8')
    resp.end('你好');
}).listen(port, () => {
    console.log(`服务已启动在${port}上`);
});
// 端口号尽量使用 3000 以上