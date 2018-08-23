## http
- 服务器可以是 专业 服务器 也可以是 个人 电脑
- 能在 特定IP 的 特定端口 上监听客户端的请求，并根据请求的路径返回相应结果都叫服务器
- 客户端：只要能向 特定IP 的 特定端口 发起请求并接受响应的都叫客户端

- 本机地址：127.0.0.1 == localhost 
- IP <==> domainname
- DNS 解析 缓存
- 端口： http 默认 80; https 默认 443
- 客户端发请求 request;服务端可以响应 response 
- 根据路径返回不同结果：路由

## 请求
### 请求行
- 方法：POST 
- URL：/node/index.html 
- 协议版本：HTTP/1.1
### 请求头
- Host
- Connection:keep-alive
- Content-Type:application/json(x-www-form-urlencoded/xml...)
- Content-Length:16
### 请求体
name=zfpx&age=6

## 响应
### 响应行
- 协议版本：HTTP/1.1
- 状态码头：200
- 状态码原因短语：OK
### 响应头
- Date: Tue...
- Content-Length: 362
- Content-Type: text/html
### 响应体
``` html
<html>
    ...
</html>
```

## 优化
- 减少请求：雪碧图，base64


## 请求流程
