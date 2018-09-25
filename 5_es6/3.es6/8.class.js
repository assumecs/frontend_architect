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
// Parent('alili')
let p = new Parent('alili');
p.getName();
Parent.hello();

// 类 和 类的实例
// 一个属性如果放在原型上的话，是可能通过实例来调用的
// 但是放在类上的，不能通过实例来调用，只能通过类名来调用