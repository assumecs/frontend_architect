/**
 * var
 * 1.可以重复声明
 * 2.不能定义常量 var PI = 3.14
 * 3.不支持块级作用域 if(true){var a = 'a'}
 */
// 变量名 a 已经定义过了，不能重复声明
 /* let a = 10;
 let a = 20; */

/* const PI = 3.14;
//  试图给一个常量赋值 错误
PI = 3.1415; */

/* if(true) {
    let a = 10;
}
console.log(a); */

// 以前 JS 只有二个作用域，一个全局，一个函数级
// ;(function(){})();

// let a = 20;
// {
//     // a is not defined
//     // let 没有变量提升
//     console.log(a);
//     let a = 10;
// }

// for(let i=0;i<3;i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }
// for(var i=0;i<3;i++) {
//     ;(function(i){
//         setTimeout(() => {
//             console.log(i);
//         }, 1000);
//     })(i)
// }

const PI = 3.14;
console.log(PI);
// PI = 3.1415; 报错
// 虽然说常量不能再引用别的对象了，但是它的值如果是一个引用类型的话，引用属性是可以修改的
const USER = {name: 'alili'}
// USER = {};  // 报错
USER.name = 'olele';
{
    const PI = 3.1415;
}
// ES6 中新增加的二种变量声明方式，可以解决以前 var 的一些问题：预解释，变量提升