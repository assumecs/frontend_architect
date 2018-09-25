/**
 * 生成器是一个函数，可以用来生成迭代器
 * 生成器函数和普通函数不一样，普通函数时一单调用一定会执行完
 * 但是生成器函数中间可以暂停，可以执行一会歇一会
 */
// 生成器函数有一个特点，需要加个*
// 生成器有若干个阶段，如何划分这些阶段呢？
function *go() {
    console.log(1);
    // 此处的 b 是用来供外界输入用的，
    // 这一行代码实现输入和输出，本次的输出放在 yield 后面，下次的输出放在 yield 前面
    let b = yield 'a';
    console.log(2);
    let c = yield b;
    console.log(3);
    return c;
}
// 生成器函数和普通的函数不一样，调用它的话函数并不会立即执行
// 它会返回一个此生成器的迭代器，迭代器时一个对象，没调用一次 next 就可以返回一个值对象
let it = go();
// next 第一次执行不需要传参，传参没有意义
let r1 = it.next();
// 第一次调用 next 回返回一个对象，此对象有两个属性，一个是 value 就是 yield 后面那个值，一个是 done 表示是否迭代完成
console.log(r1); // {value: "a", done: false}
let r2 = it.next('B值');
console.log(r2); // {value: "B值", done: false}
let r3 = it.next('c');
console.log(r3);
// console.log(it.next())