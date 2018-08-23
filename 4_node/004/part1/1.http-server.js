let http = require('http');
// 1.当访问 /signin 返回登录
// 2.当访问 、signup 返回注册
// 3.访问其他 返回404
let url = require('url');
http.createServer((req, resp) => {
    // 路由：根据不同路径返回不同内容
    let {pathname, query} = url.parse(req.url, true);
    if(pathname === '/signin') {
        let str = '';
        req.on('data', chunk => {
            str += chunk;
        })
        req.on('end', () => {
            console.log(str);
        })
        resp.setHeader('Content-Type', 'text/plain;charset=utf-8');
        return resp.end('登录');
    }
    if(pathname === '/signup') {
        return resp.end('注册');
    }
    resp.end('404')
}).listen(3000);