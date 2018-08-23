## RESTful
 接口设计风格
- 每一个 URI 代表一种资源；
- 客户端和服务器之间，传递这种资源的某种表现层；
- 客户端通过四个 HTTP 动词，对服务器端资源进行操作，实现"表现层状态转化"

旧：
/getUser
/setOneUser
/removeUser
/addUser
/updateUser
RESTful 风格
统一的 path
/user   根据 method 区分操作 GET POST PUT DELETE(OPTIONS)
/user?id=1 GET
/user?id=1 DELETE
查询一个，得到一项 {username:xx}
查询所有，返回数组[]
添加，返回添加的那项
修改，返回修改的那项
删除，返回空对象