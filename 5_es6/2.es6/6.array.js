let arr1 = [24, 56, 88, 90, 5];
// filter 返回 true 次元素保留在新数组，返回 false 则删除
// Array.prototype.filter = function(fn) {
//     let newArray = [];
//     for(let i = 0; i<this.length; i++) {
//         if(fn(this[i])){
//             newArray.push(this[i]);
//         }
//     }
//     return newArray;
// }
// let arr2 = arr1.filter(function(item) {
//     return item > 50;
// });
// console.log(arr2);

// let arr3 = Array(3);
// console.log(arr3);
// arr3.fill(1);
// console.log(arr3);

// map reduce reduceRight filter forEach
// some find findIndex every

let arr4 = [1, 2, 3];
let result = arr4.find(function(item) {
    return item === 2;
})
console.log(result);

function sum(a, b) {
    return a+b;
}
// 希望把一个类数组变成一个数组
function print() {
    // let arr = Array.prototype.slice.call(arguments);
    // arr.forEach(item => {
    //     console.log(item);
    // });
    // Array.prototype.forEach.call(arguments, function(item){
    //     console.log(item);
    // })
    Array.from(arguments).forEach(function(item) {
        console.log(item);
    })
}
print('a', 'b', 'c');

// let arr6 = Array(3);
let arr6 = Array.of(3);
console.log(arr6);