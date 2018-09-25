/**
 * Promise
 */
// $.ajax('url', function () {
//     $.ajax('url2', function () {
//         $.ajax('url3', function () {
//             $.ajax('url4', function () {

//             });
//         });
//     });
// });

/**
 * Promise 是一个类，可以创建实例
 * 代表承诺，什么时候会用到承诺，一般是异步任务，就是需要很长时间执行的任务
 * 状态 pending fulfilled rejected
 */

 let Promise = require('./Promise');

 let p = new Promise(function(resolve, reject) {
    //  pending
    // 可能抛异常
    //  setTimeout(function() {
        let num = Math.random(); // 生成一个随机数
        if(num > 0.5) {
            resolve('大成功');
        } else {
            reject('小失败');
        }
    //  }, 500)
 });
 p.then(function(res){
     console.log(res);
 }).catch(function(err){
     console.log(err);
 });
 p.then(function(res){
     console.log(res);
 }).catch(function(err){
     console.log(err);
 });