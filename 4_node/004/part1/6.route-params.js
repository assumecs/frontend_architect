let express = require('express');
let app = express();
app.listen(3000);

// 拦截功能 参数操作和路由操作分离
app.param('id', (req, resp, next) => {
    req.params.id = `你的学号是${req.params.id}`;
    next(); // 调用了 next 就可以向下匹配，如果在这里结束了请求，就不走了
})
app.param('name', (req, resp, next) => {
    req.params.name = `你的姓名是${req.params.name}`;
    next(); // 调用了 next 就可以向下匹配，如果在这里结束了请求，就不走了
})

app.get('/user/:id/:name', (req, resp) => {
    resp.header('Content-Type', 'text/plain;charset=utf-8');
    resp.end(`${req.params.id}${req.params.name}`);
});