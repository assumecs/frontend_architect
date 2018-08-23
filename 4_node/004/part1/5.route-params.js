let express = require('express');
let app = express();
app.listen(3000);

// /user?id=1 查一个    /user 查所有    路径都是 /user
// /user/1 查一个   /user 查所有  区分查多个还是查一个
app.get('/user', (req, resp) => {
    resp.end('select all');
})
// 表示 id 是占位符 必须有 但是可以随机
// /user/1/2 => {id:1, name:2} = params 一一对应关系
app.get('/user/:id/:name', (req, resp) => {
    resp.end('select one' + req.params.id + req.params.name)
})
let url = '/user/1/2/a';
let url2 = '/user/:id/:name/a'; // => {id:1, name:2} [id, name]

// 将 url2 转化成一个可以匹配 url 的正则
let paramArr = []
let newStr = url2.replace(/:[^\/]+/g, function() {
    paramArr.push(arguments[0].slice(1));
    return '([^\/]+)'
})
let reg = new RegExp(newStr);
let newArr = reg.exec(url);
let result = {}
paramArr.forEach((item, index) => {
    result[item] = newArr[index+1];
})
console.log(result);