let express = require('express');
// 引用 express 模块，express 是一个函数

let app = express();    // express 函数执行后，返回的是一个 http 的监听函数，就是 http.createServer 中的函数

// require('http').createServer(app).listen(3000);

// app.listen 就是基于以前封装的
// app.listen1 = function(...args){
//     require('http').createServer(app).listen(...args);
// };
// 此函数上扩展了一个 listen 可以监听端口
app.listen(3000, () => {
    console.log('started');
});