// 类的继承
// 定义一个类
/**
 * 以前 JS 里类和构造函数是一体的
 * 类里面可以定义构造函数，当你创建一个雷的实例的时候就会调用构造函数
 */
class Parent {
    constructor(name) {
        this.name = name;   //实例的私有属性
    }
    // 静态属性是类的属性
    static hello() {
        console.log('hello');
    }
    // 属于实例的共有属性，也就是相当于原型上的属性
    getName() {
        console.log(this.name);
    }
}
// Class constructor Parent cannot be invoked without 'new'
// 类的构造函数不能不通过 new 调用
Parent('alili')
let p = new Parent('alili');
p.getName();

class Child extends Parent{
    constructor(name, age) {
        // super 指父类的构造函数
        super(name);
        this.age = age;
    }
    getAge() {
        console.log(this.age);
    }
}