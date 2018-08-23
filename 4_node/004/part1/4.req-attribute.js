let express = require('express');
let app = express();
app.listen(3000);

// 想区分是查询一个还是查询所有 query.id
app.get('/user', (req, resp) => {
    console.log(req.query.id); // express 扩展的
    console.log(req.url); // 获取整个路径包括问号
    console.log(req.path); // express 扩展的，获取路径不包括问号 /user
    console.log(req.headers); // 请求头：所有都是小写
    console.log(req.method); // 请求方法：大写
});