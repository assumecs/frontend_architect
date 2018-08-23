// 需求：路由访问时长统计 
// 装饰模式
let express = require('express');
let app = express();
app.listen(3000);

app.use((req, resp, next) => {
    let t = new Date().getTime();   // 访问最初的时间
    let end = resp.end;
    resp.end = function(...arg) {
        console.log(new Date().getTime() - t);
        end.call(resp, ...arg);
    }
    next();
})

app.get('/water', (req, resp) => {
    for(let i = 0; i < 1000000; i++) {
    }
    resp.end('water');  // 装饰模式
})
app.get('/food', (req, resp) => {
    for(let i = 0; i < 100000000; i++) {
    }
    resp.end('food');
})