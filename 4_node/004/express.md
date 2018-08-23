## Express
Express 是一个简洁、灵活的 node.js Web 应用开发框架，是目前最流行的基于 Node.js 的 Web 开发框架。它提供一系列强大的功能，比如：
- 1.路由控制
- 2.参数获取
- 3.中间件
- 4.send 和 sendFile
- 5.静态文件服务
- 6.模板解析
- 7.重定向
还可以使用其他模块来帮你创建各种 Web 和移动设备应用

## express 搭建服务
``` javascript
let express = require('express');
let app = express();
app.listen(3000);
```

## express 路由
- 必须 method 和 path 全都匹配上 执行对应的 function
``` JavaScript
app[method]('path', function(req, resp) {});
app.all('*', function(){});
```

## 路径参数路由
- 姜匹配到的结果生成一个对象放到 req.params 上
``` JavaScript
app.get('/user/:id/name', function(req, resp){})
```

## req 上的属性
``` JavaScript
req.params 路径参数
req.url 整个路径
req.path pathname路径
req.headers 请求头
req.method 请求方法
req.query 获取请求的参数 问号后面的参数
```

## middleWare 
- 中间件的作用
    - 处理公共逻辑，扩展 req, res
    - 可以决定是否继续执行
    - 开头匹配到就会执行中间件
    - 错误中间件，在页面的最后，参数是四个，第一个参数是错误

## res 新增的方法
- res.json()
- res.sendFile() 绝对路径 path.join/path.resolve
- res.sendStatus();
- res.send();

## 用户管理模块
- 登录  /login
- 注册  /reg
## 文章管理模块
- 发表文章  /post
- 删除文章  /delete

## 路由拆分
``` JavaScript
let express = require('express');
let app = express();
let router = express.Router();
router.get('/login', fn);
app.use('/user', router)
```

## bodyParser
``` JavaScript
app.use(bodyParser.json()); // 解析 json
app.use(bodyParser.urlencoded({extended:true})); // 解析表单 application/x-www-form-urlencoded
```

## ejs (前后端分离不使用 ejs )
``` JavaScript
app.set('view engine', 'html');
app.set('views', 'static');
app.engine('html', require('ejs').__express)
resp.render('index', 渲染的数据)
```
- ejs 用法
``` ejs
<%include '文件名'%>
<%=变量%>
<%-转义变量%>
<%for(var i = 0; i < 10; i++){%>
    <li><%=i%> </li>
<%}%>
```

## 静态服务中间件
``` JavaScript
app.use(express.static('文件夹'))
```

## 重定向
``` JavaScript
resp.redirect('url')
```