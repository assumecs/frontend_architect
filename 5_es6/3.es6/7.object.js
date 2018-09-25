let name = 'alili';
let age = 9;
// 如果对象的属性名和变量名一样的话，可以二合一
let obj = {name, age}
console.log(obj);

let obj1 = {age: 1, getFood() {
    return '面包';
}};
let obj3 = {
    // __proto__: obj1
    getFood() {
        // super 可以调用父亲方法
        return '牛奶' + super.getFood();
    }
};
// 设置 obj3 的原型为 obj1
// 原型链，__proto__
Object.setPrototypeOf(obj3, obj1);
// obj3.__proto__ = obj1;
console.log(obj3.getFood());

// super