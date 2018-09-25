/**
 * 箭头函数
 * 1.声明函数更简单的方法
 */

//  let sum = function(a, b) {
//      return a + b;
//  }
//  let sum = (a, b) => {
//      return a + b;
//  }
//  console.log(sum(1, 2))

//  如果有且只有一个参数，可以省略小括号
// 如果只有返回值，没有别的函数体代码，则可以省略{}
// let double = num => num*2
// console.log(double(2))

// 剪头函数没有自己的 this， 它会使用上层得 this
// let obj = {
//     name: 'alili',
//     getName () {
//         setTimeout(() => {
//             console.log(this.name);
//         }, 1000);
//         return this.name;
//     }
// }
// obj.getName();

// 剪头函数 this 是定死的，指向外层的 this
// 箭头函数虽然好，但不能应用到所有的情况
let obj8 = {
    name: 'alili',
    getName: () => {
        // module 外层 this
        console.log(this.name);
    }
}
let obj9 = {
    name: '9',
    gN: obj8.getName
}

obj9.gN();
