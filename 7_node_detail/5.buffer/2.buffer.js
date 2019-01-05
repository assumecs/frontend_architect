/* // copy
let buf1 = Buffer.from("阿里里");
let buf2 = Buffer.alloc(9);
buf1.copy(buf2, 0, 0, 3);
console.log(buf2); */

// concat 连接 buffer
let buf3 = Buffer.from('阿');
let buf4 = Buffer.from('里');
Buffer.concat2 = function(list, total=list.reduce((len,item) => len+item.length, 0)) {
    if(list.length==1) {
        return list[0];
    }
    let result = Buffer.alloc(total);
    let index = 0;
    for(let buf of list) { // list 迭代器
        for(let b of buf) { // buf 迭代器
            if(index >= total) {
                return result;
            } else {
                result[index++] = b;
            }
        }
    }
    return result;
}
let buf5 = Buffer.concat2([buf3, buf4], 5); // 长度可选
console.log(buf5.toString());
console.log(buf5.length);
console.log(Buffer.byteLength('阿里'));