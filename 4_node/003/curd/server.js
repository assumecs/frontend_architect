let http = require('http'); // http 模块
let port = 3000;
let fs = require('fs');
let url = require('url'); // 把一个路径解析成一个对象
let path = require('path') // 处理路径
// let mime = require('mime'); // 实现类型转化 三方库，需要安装
let users = [{id:1, username:'用户名', password:'olele'}, {id:2, username:'ali', password:'ole'}];
http.createServer((req, resp)=>{ // 监听函数, 当请求到来时，会执行回调函数
    let {pathname, query} = url.parse(req.url, true);  // true 将query转化成一个对象
    if(pathname === '/user') { // 如果是访问 /user 就是对用户的增删改查
        let id = query.id;  // 查询参数中取出 id 看是否有值，有值表示操作一个
        console.log(req.method);    // method 方法全部大写
        console.log(req.headers);   // 获取请求头 小写的 
        resp.setHeader('Content-Type', 'application/json;charset=utf-8');
        switch(req.method) {
            case 'GET':
                if(!id) {    // 查询所有
                    resp.end(JSON.stringify(users));
                }
                break;
            case 'POST': // 添加的逻辑
                let str = '';
                req.on('data', chunk => {
                    str += chunk;   // 拼接后的结果是一个字符串
                });
                req.on('end', () => {
                    let user =  JSON.parse(str);
                    // 如果有数据 去最后一项的 id+1 没数据 默认1
                    user.id = users.length?users[users.length-1].id+1:1;
                    users.push(user);
                    resp.end(JSON.stringify(user));
                });
                break;
            case 'DELETE':
                if(id) {
                    users = users.filter(item=> item.id != id);
                }
                resp.end(JSON.stringify({}));
                break;
            case 'PUT':
                break;
        }
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