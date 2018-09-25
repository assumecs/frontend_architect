/**
 * 1.如何把一个 unicode 码转成 utf8 编码
 * 传入一个 unicode 码，返回一个 utf8 编码 万 4E07
 */
/*
//  0x 16 进制
// 十六进制只是一种表示方式，本质就是一个数字，
// utf8 所有的汉字都是三个字节
// unicode 万 0x4E07
 let b = 0x4E07.toString(2);
 console.log(b); // 100 111000 000111
//  1110xxxx 10xxxxxx 10xxxxxx
//  11100100 10111000 10000111
console.log(0b11100100.toString(16));
console.log(0b10111000.toString(16));
console.log(0b10000111.toString(16)); // e4 b8 87
console.log(Buffer.from('万')); // <Buffer e4 b8 87>
*/
// utf8 是 unicode 的一种存储方式，是一种实现
function transfer(number) {
    if(number < 0x7F) {
        return '0' + number.toString(2).padStart(7, '0');
    } else if (number < 0x7FFF) {
        // 2 字节
    } else if (number < 0x7FFFFF) {
        let arr = ["1110", "10", "10"];
        let str = number.toString(2); // 100 111000 000111
        arr[2] += str.substring(str.length - 6);
        arr[1] += str.substring(str.length - 12, str.length - 6);
        arr[0] += str.substring(0, str.length - 12).padStart(4, '0');
        // return parseInt(arr.join(''),2).toString(16);
        return arr.map(item=>parseInt(item,2).toString(16));
    } else {
        // 4 字节
    }
}
function transfer2 (number) {
    let ary = ['1110', '10', '10'];
    let binary = number.toString(2);
    ary[2] += binary.slice(binary.length - 6);
    ary[1] += binary.slice(binary.length - 12, binary.length - 6);
    ary[0] += binary.slice(0, binary.length - 12).padStart(4, '0');
    let result = ary.join('');
    return parseInt(result, 2).toString(16);
}
let r = transfer2(0x4E07);
console.log(r);
