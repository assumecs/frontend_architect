## 1.流的概念
- 流是一组有序的，有起点和终点的字节数据传输手段
- 他不关心文件的整体内容，只关注是否从文件中读到了数据，以及读到数据之后的处理
- 流是一个抽象接口，被 Node 中的很多对象所实现。比如 HTTP 服务器 request 和 response 对象都是流。
- gulp webpack http socket 压缩 加密 gzip crypto