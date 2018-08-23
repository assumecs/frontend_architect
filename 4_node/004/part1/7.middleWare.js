// 中间件 当我们访问到最终目标之前执行的内容

let express = require('express');
let app = express();
app.listen(3000);

// 1.中间件第一个功能 可以进行权限判断
// 2.可以进行对 req 和 res 的属性进行扩充
// 3.中间件放到要执行路径的上面
// 4.中间件默认情况下都匹配，可以指定匹配什么开头的
app.use('/water', (req, resp, next) => { // 不调用 next 就不继续往下走
    console.log('过滤石头');
    // resp.end('too big');
    req.stone = 'too big';
    next('错误');
})
app.use('/water', (req, resp, next) => { // 不调用 next 就不继续往下走
    console.log('过滤沙子');
    req.sand = 'too small';
    next();
})
app.use((req, resp, next) => { // 不调用 next 就不继续往下走
    resp.header('Content-Type', 'text/plain;charset=utf-8')
    next();
})

app.get('/water', (req, resp) => {
    console.log(req.stone, req.sand);
    resp.end('喝水');
})
app.get('/food', (req, resp) => {
    console.log(req.stone, req.sand);
    resp.end('吃');
})
app.use((err, req, resp, next) => { // 错误中间件拥有四个参数 fn.length == 4
    console.log(err);
})