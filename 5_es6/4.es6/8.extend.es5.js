function Parent() {
    this.name = 'alili';
}
function Child () {

}
// Child.prototype = new Parent();
// child.__proto__.__proto__ = Parent.prototype
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
let child = new Child();
console.log(child.constructor);
console.log(child.name);

// 静态属性：不需要通过实例来调用，是属于类的
class Hello {
    static defaultProps = {}
    static propTypes = {}
}

// .__proto__ setPrototypeOf 和 .prototype 有区别吗？
// 继承是通过 __proto__ 来关联的
// setPrototypeOf 就是给 __proto__ 赋值