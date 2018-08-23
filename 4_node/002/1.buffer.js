// 1.通过长度创建 
var buffer = Buffer.alloc(6);
// 相对这种方法比较耗性能
console.log(buffer);
var buffer = Buffer.allocUnsafe(6);
// 不清空，快，不安全
console.log(buffer);

var buffer = Buffer.from([17,18,19, 0x15, 257]);
// 会自动把10进制转换为16进制(vscode调试不会) (超过 255 溢出求余)
console.log(buffer);

var buffer = Buffer.from('阿里里')
console.log(buffer.length); // 转换为 buffer 后长度为 buffer 的长度
console.log(buffer.toString());


// fill
var buffer = Buffer.allocUnsafe(100);
buffer.fill(0);
console.log(buffer);
// slice    截取，克隆(浅)
// 深拷贝 两个不同对象，(递归循环)，序列化(不支持函数)
// 浅拷贝：两个引用指向同一个对象
// var obj = {name: 'xxx'}
// var arr = [obj, 2, 3];
// var newArr = arr.slice(0);
// arr[0].name = 'hello'
// console.log(newArr);
// var obj = {name: {name: 'xxx'}}
// var newObj = Object.assign({}, obj);   // assign 浅拷贝
// obj.name.name = 'bye'
// console.log(newObj);

var buffer = Buffer.from([1, 2, 3]);
var newBuffer = buffer.slice(0, 1); // 拷贝出来存放的是内存地址空间
buffer[0] = 100
console.log(newBuffer);

// copy
var buf1 = Buffer.from('阿里里')
var buf2 = Buffer.from('哦勒勒')
var buf = Buffer.allocUnsafe(18);
// 拷贝 buffer
// 参数：targetBuffer,targetStart,sourceStart,sourceEnd
buf1.copy(buf,0)
buf2.copy(buf,buf1.length)
console.log(buf.toString());

// concat
console.log(Buffer.concat([buf1, buf2]).toString())

console.log("---------- myConcat------------");

// 自己实现 concat
// buffer 数组各项长度求和，
// list.reduce((prev, next)=>prev+next.length,0)
// 0为初始，第一次的表达式结果作为下一次的 prev
Buffer.myConcat = function(list, length) {
    let totalLength = list.reduce((prev, next)=>prev+next.length,0);
    if(typeof length != "undefined"){
        length = Math.min(length, totalLength);
    } else {
        length = totalLength;
    }
    let buffer = Buffer.alloc(length);
    let offset = 0;
    list.forEach(buff => {
        if(!Buffer.isBuffer(buff)){
            throw Error("not a buffer");
        }
        buff.copy(buffer, offset);
        offset += buff.length;
        // if(offset >= length){
        //     console.log("inner return");
        //     return buffer;
        // }
    });
    console.log("outer return");
    return buffer;
}
var buff1 = Buffer.from("alili");
var buff2 = Buffer.from("olele");
var buff3 = Buffer.from("ululu");
var offset;
offset = 11;
console.log(Buffer.myConcat([buff1, buff2, buff3], offset).toString());
