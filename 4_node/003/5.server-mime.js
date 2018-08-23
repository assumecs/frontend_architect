let http = require('http'); // http 模块
let port = 3000;
let fs = require('fs');
let url = require('url'); // 把一个路径解析成一个对象
let path = require('path') // 处理路径
let mime = require('mime'); // 实现类型转化 三方库，需要安装
http.createServer((req, resp)=>{ // 监听函数, 当请求到来时，会执行回调函数
    let {pathname, query} = url.parse(req.url, true);  // true 将query转化成一个对象
    fs.stat('.'+pathname, (err, stats) => {
        if(err) {
            resp.statusCode = 404;   // 找不到就是 404
            resp.end(`${pathname} not found`)
        } else if(stats.isFile()) { // 是文件
            resp.setHeader('Content-Type', mime.getType(pathname)+';charset=utf-8');
            fs.createReadStream('.'+pathname).pipe(resp);
        } else if(stats.isDirectory()){ // 如果是文件夹默认查找index.html
            let p = path.join('.' + pathname, './index.html'); // 拼路径
            // 需判断路径是否存在
            resp.setHeader('Content-Type', 'text/html;charset=utf-8');
            fs.createReadStream(p).pipe(resp);
        }
    })
    // 根据不同路径返回不同文件
    // 1.如果访问的是 / 返回主页 html
    // 2.如果访问的是文件 将文件读取返回
    // 3.如果是文件夹，默认找 index.html 文件 (包含情况1)
    // 4.文件不存在，返回404
}).listen(port, () => {
    console.log(`服务已启动在${port}上`);
});
// 端口号尽量使用 3000 以上