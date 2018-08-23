// 拆分路由
let express = require('express');
let app = express();
app.listen(3000);
// 自己写的中间件，解决参数解析问题
function bodyParser() {
    return function(req, resp, next){
        let str = '';
        req.on('data', chunk => {
            str += chunk;
        });
        req.on('end', () => {
            req.body = require('querystring').parse(str);
            next();
        })
    }
}
app.use(bodyParser());

// /user/login
let user = require('./routes/user');
app.use('/user', user);
// /article/post
let article = require('./routes/article');
app.use('/article', article);