/**
 * 学习一个 node 中非常重要的模块 events
 * 在 node 中，是基于事件驱动
 */
// let EventEmitter = require('events').EventEmitter; // old
let EventEmitter = require('./events');
let util = require('util');
// console.log(util);
// 这是一个类
function Bell() {
    EventEmitter.call(this); // 继承私有属性
}
// 进行原型继承 子类原型指向父类，继承公有属性
// Object.setPrototypeOf(ctor.prototype, superCtor.prototype);
// ctor.prototype.__prototype__ = superCtor.prototype
util.inherits(Bell, EventEmitter);

let bell = new Bell();
function studentInClassroom(roomNum, things) {
    console.log(`学生带着${things}进${roomNum}教室`);
    console.log(this);
}
function teacherInClassroom(roomNum, things) {
    console.log(`老师带着${things}进${roomNum}教室`);
}
function masterInClassroom(roomNum, things) {
    console.log(`校长带着${things}进${roomNum}教室`);
}
bell.setMaxListeners(6); // 不做限制
bell.on('响', studentInClassroom);
// bell.on('响', teacherInClassroom);
// bell.once('响', masterInClassroom);
// 第一个参数是事件类型，第二个参数和以后的参数会传递给监听函数
bell.emit('响', '301', '书');
console.log('----------------')
// bell.emit('响', '301', '书');