/**
 * 比如我现在要读取一个文件，异步读取
 */
let fs = require('fs');
/**
 * 回调的特点是 error first
 * 调用回调函数的时候第一个参数永远是错误对象
 */
/*
 fs.readFile('./1.txt', 'utf8', function(err, data) {
    if(err) {   // 如果 err 有值，就表示程序出错了
        console.log(err);
    } else {
        console.log(data);
    }
});*/
/**
 * 回调函数的问题 两个执行栈
 * 1. 无法捕获错误，try...catch 
 * 2. 不能 return 
 * 3. 回调地狱 难看，难维护，效率低(串行)
 */

//  如何结局回调嵌套的问题
// 1. 通过事件发布订阅来实现
// 这是 node 核心模块中的一个类，通过她可以创建时间发射器的实例，里面有两个核心方法，分别叫 on emit, on 表示注册监听，emit 表示发射事件
/*
let EventEmitter = require('events')
let eve = new EventEmitter();
// 
let html = {}
// 监听数据获取成功事件，当事件发生之后调用回调函数
eve.on('ready', function(key, value) {
    html[key] = value;
    if(Object.keys(html).length == 2) {
        console.log(html);
    }
})
fs.readFile('./template.txt', 'utf8', function(err, template) {
    // 1 事件名 ...2 传递给回调函数的参数
    eve.emit('ready', 'template', template);
})
fs.readFile('./data.txt', 'utf8', function(err, data) {
    eve.emit('ready', 'data', data);
})*/

// 2. 通过一个哨兵函数来处理
// let html = {};
/*function done(key, value) {
    html[key] = value;
    if(Object.keys(html).length === 2) {
        console.log(html);
    }
}*/
/*function render(length, cb) {
    let html = {};
    return function(key, value) {
        html[key] = value;
        if(Object.keys(html).length === length) {
            cb(html);
        }
    }
}
// 哨兵变量 2
let done = render(2, function(html) {
    console.log(html);
})
fs.readFile('./template.txt', 'utf8', function(err, template) {
    done('template', template);
})
fs.readFile('./data.txt', 'utf8', function(err, data) {
    done('data', data);
})*/

// Generator 01-generator_ 1:00:00
