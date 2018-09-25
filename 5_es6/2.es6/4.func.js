/**
 * 函数
 */
// 1 默认参数 1.必填项不填报错，2.有些参数没有给传参得话可以有默认值
//  function ajax(url, method, dataType) {
//      if(typeof url == 'undefined') throw Error('url 不能为空');
//      method = method||'GET';
//      console.log(url);
//      console.log(method);
//      console.log(dataType);
//  }
//  function ajax(url=new Error('url cannot be empty'), method='GET', dataType='json') {
//      if(typeof url == 'undefined') throw Error('url 不能为空');
//      method = method||'GET';
//      console.log(url);
//      console.log(method);
//      console.log(dataType);
//  }
//  ajax('/user');

// 2 剩余操作符 ...args
function sum(prefix, ...rest) {
    // 数组求和
    // 1.循环求和 rest.forEach((item) => result+item);
    // 2.reduce 计算 汇总 收敛 把一个数组中的一堆值计算出来一个值
    return prefix + eval(rest.join('+'));
}

console.log(sum('$', 1, 2, 3, 4));

// reduce
let arr4 = [1, 2, 3];
// 可以传一个参数，也可以传两个参数
// 第二个参数表示初始值
// 上一次的执行结果会成为下一次的初始值
// 如果没有给初始值，第一次执行函数的时候 val 等于第一个元素得值 item 等于第二个元素，相当于少执行一次
// reduceRight 从右往左
// Array.prototype.reduce1 = function(reducer, initialVal) {
//     for(let i=0; i<this.length; i++){
//         initialVal = reducer(initialVal, this[i])
//     }
//     return initialVal;
// }
// console.log(arr4.reduce1((val, item, index, origin) => {
//     return val + item;  // 返回值会成为下一次函数执行的时候的 val
// }, 0));

// 展开运算符
// let arr5 = [1, 2, 3];
// let arr6 = [4, 5, 6];
// // let arr7 = [].concat(arr5, arr6);
// let arr7 = [...arr5, ...arr6];
// console.log(arr7);

// // let max = Math.max(1, 2, 3);
// // let max = Math.max.apply(null, arr6);
// let max = Math.max(...arr6);
// // let max = Math.max.apply(Math, arr6);
// console.log(max);

let obj1 = {name: '1'};
let obj2 = {age: 2};
let obj3 = {};
// 1 循环赋值
// for(let key in obj1){obj3[key] = obj1[key];}
// 2 assign 1参数是 target 后面都是来源
// Object.assign(obj3, obj1, obj2);
// 3 对象解构
// obj3 = {...obj1, ...obj2}
// console.log(obj3);

// 深度拷贝
let obj5 = {name: 'alili', home: {city:'hz'}, hobby:['学习']};
// let obj6 = Object.assign({}, obj5);
// 1 json 浪费资源
// let obj6 = JSON.parse(JSON.stringify(obj5))
function clone(origin) {
    let newObj = {};
    for(let key in origin) {
        // 简单的 obj 还有别的类型判断
        if(typeof origin[key] == 'object') {
            newObj[key] = clone(origin[key]);
        } else {
            newObj[key] = origin[key];
        }
    }
    return newObj;
}
let obj6 = clone(obj5);
obj6.home.city = 'gz';
console.log(obj5.home);
obj6.hobby.push('吃饭')
console.log(obj5.hobby);