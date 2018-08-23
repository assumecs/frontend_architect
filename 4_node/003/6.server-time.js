let http = require('http'); // http 模块
let port = 3000;
let fs = require('fs');
let url = require('url'); // 把一个路径解析成一个对象
let path = require('path') // 处理路径
// let mime = require('mime'); // 实现类型转化 三方库，需要安装
http.createServer((req, resp)=>{ // 监听函数, 当请求到来时，会执行回调函数
    let {pathname, query} = url.parse(req.url, true);  // true 将query转化成一个对象

    // /clock
    if(pathname === '/clock') {
        let date = new Date();
        resp.setHeader('Content-Type', 'text/plain;charset=utf-8');
        resp.end(JSON.stringify({time:date.toLocaleString()}));
        return;
    }
    
    // 处理静态文件
    fs.stat('.'+pathname, (err, stats) => {
        if(err) {
            resp.statusCode = 404;   // 找不到就是 404
            resp.end(`${pathname} not found`)
        } else if(stats.isFile()) { // 是文件
            // resp.setHeader('Content-Type', mime.getType(pathname)+';charset=utf-8');
            fs.createReadStream('.'+pathname).pipe(resp);
        } else if(stats.isDirectory()){ // 如果是文件夹默认查找index.html
            let p = path.join('.' + pathname, './index.html'); // 拼路径
            // 需判断路径是否存在
            resp.setHeader('Content-Type', 'text/html;charset=utf-8');
            fs.createReadStream(p).pipe(resp);
        }
    })
}).listen(port, () => {
    console.log(`服务已启动在${port}上`);
});
// 端口号尽量使用 3000 以上