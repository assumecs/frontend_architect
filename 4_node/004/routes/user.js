let express = require('express');
let router = express.Router();  // 创建一个路由池
let path = require('path');
router.get('/login', function(req, resp) {
    resp.send('登录');
})
router.get('/reg', function(req, resp) {
    // path.resolve 是根据运行的文件的位置来解析的，所以此时不能用 resolve
    // resp.send('注册');
    // resp.sendFile(path.resolve('./views/reg.html'))
    resp.sendFile(path.join(__dirname, '../views/reg.html'))
})
router.post('/reg', function(req, resp) {
    // resp.send(req.body);
    resp.render('abc/result', {...req.body, arr:[1, 2, 3, 4, 5], html: '<h1>阿里</h1>'});
})
router.post('/login', (req, resp) => {

})

module.exports = router;

// 正则解析表单
/* let obj = {};
str.replace(/([^&=]+)=([^&=]+)/g, function() {
    obj[arguments[1]] = arguments[2];
})
console.log(obj); */