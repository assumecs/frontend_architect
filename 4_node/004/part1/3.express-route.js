let express = require('express');
let app = express();
app.listen(3000);
// app 监听函数上扩展了很多方法，包括 get post delete put,RESTful 风格中的动词
// app.方法名('路径名', fn)
// 从上到下匹配，如果匹配到了并且结束响应，就不会继续向下走；
// 路径指的是 pathname 没有问号后面的内容
// express 重点是扩展了 req 和 resp 的属性
app.get('/signin', (req, resp) => {
    resp.setHeader('Content-Type', 'text/plain;charset=utf-8');
    resp.end('登录')
})
app.post('/signin', (req, resp) => {
    resp.setHeader('Content-Type', 'text/plain;charset=utf-8');
    resp.end('post登录')
})
app.get('/signup', (req, resp) => {
    resp.setHeader('Content-Type', 'text/plain;charset=utf-8');
    resp.end('注册')
})
// all 表示所有方法；* 表示所有路径，放最后
app.all('*', (req, resp) => {
    resp.setHeader('Content-Type', 'text/plain;charset=utf-8');
    resp.end('404')
})