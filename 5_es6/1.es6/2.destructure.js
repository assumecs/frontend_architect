/**
 * 解构 分解一个对象的结构
 */
// let arr = [1, 2, 3]
// /* let a = arr[0];
// let b = arr[1];
// let c = arr[2]; */
// // 结构的时候，等号的两边结构类似。右边必须是一个真实的值
// let [a, b, c] = arr;
// console.log(a, b, c);

/* let arr2 = [{name: 'ali', age: 8}, [1, 2], 3];
// let [{name, age}, [d, e], f] = arr2;
let [obj, arr3, f] = arr2;
console.log(obj, arr3, f); */

/* let obj1 = {name: 'ali', age: 8};
// let {name, age} = obj1;
let {name:myname, age:myage} = obj1;
console.log(myname, myage); */

// 默认解构，如果能取出来值就用取出来的，如果取不出来就用默认值
let obj2 = {name: 'zlili'}
let {name, age=8} = obj2;
console.log(name, age);

let arr4 = [1, 2, 3]
// 省略赋值
let [,,j] = arr4;