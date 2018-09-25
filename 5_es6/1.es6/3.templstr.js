/**
 * 模板字符串   video 1 30:00
 */
let name = 'alili', age = 8;
// let desc = name + " 今年 " + age + " 岁了";
// console.log(desc);

// // 模板字符串
// // 1.字符串里可以嵌套变量
// // 模板语言很多就是这样的原理   模板引擎会有些差异
// let desc2 = "${name} 今年 ${age} 岁了"
// function replace(desc) {
//     return desc.replace(/\$\{([^}]+)\}/g, function(matched, key){
//         return eval(key);
//     })
// }
// console.log(replace(desc2));

// 模板字符串可以 折行
// let users = [{id:1, name: 'alili1'}, {id:2, name: 'alili2'}]
/**
 * <ul>
 *  <li>1:alili1</li>
 *  <li>2:alili2</li>
 * </ul>
 */
// 映射，把老数组中的每一个元素映射为新数组得每一个元素
// let newLis = users.map(function(user, index) {
//     return `<li>${user.id}:${user.name}</li>`;
// }).join('');
// let ul = (
//     `
//     <ul>
//     ${newLis}
//     </ul>
//     `
// )
// console.log(ul);

// 其他运算符 ...args
// rest 其他运算符只能作为最后一个参数
// 因为有些时候我们希望有自己的拼接模板字符串逻辑
function desc(strings, ...args) {
    console.log(strings);
    console.log(args);
    let result = '';
    for(var i = 0; i < args.length; i++) {
        result += strings[i] + args[i];
    }
    result += strings[i];
    return result.toUpperCase();
}
// 带标签得模板字符串就想一个函数调用，参数
// 1参数是文本得数组
let str = desc`${name} 今年 ${age} 岁了`;
console.log(str);

let str3 = 'http://www.pics.com/abc.jpg';
console.log(str3.startsWith('http://'));
console.log(str3.endsWith('.png'));

let content = 'abc';
console.log(content.includes('c'));
console.log(content.indexOf('c')!=1);

let x = 'x';
console.log(x.repeat(3));

let str5 = 'abc';
console.log(str5.padStart(10, '0'));