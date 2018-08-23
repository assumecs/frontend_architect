// 拆分路由
let express = require('express');
let app = express();
app.listen(3000);
// 自己写的中间件，解决参数解析问题
let bodyParser = require('body-parser');
// 解析表单格式，把表单内的数据解析后放在 req.body 上
app.use(bodyParser.urlencoded({extended: false}));
// 解析 json 格式，把 json 转化成对象后放在 req.body 上
app.use(bodyParser.json());
// 页面上所有的 render 方法中 html 都用 ejs 模板来渲染
app.engine('html', require('ejs').__express);
// 更改模板路径，默认叫 views
app.set('views', 'static');
// 配置默认模板后缀名
app.set('view engine', 'html');

// /user/login
let user = require('./routes/user');
app.use('/user', user);
// /article/post
let article = require('./routes/article');
app.use('/article', article);