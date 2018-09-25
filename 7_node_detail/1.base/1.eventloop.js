/**
 * 事件循环
 */
// function read() {
//     console.log(1);
//     setTimeout(function() {
//         console.log(2);
//     })
//     console.log(3);
// }
// read(); // 1 3 2


// function read() {
//     console.log(1);
//     setTimeout(function() {
//         console.log(2);
//         setTimeout(function() {
//             console.log(4);
//         })
//     })
//     setTimeout(function() {
//         console.log(5);
//     })
//     console.log(3);
// }
// read(); // 1 3 2 5 4

// process.nextTick() 把这个回调函数放在当前执行栈的尾部

function next() {
    console.log(1);
    setTimeout(() => {
        console.log(2);
    });
    process.nextTick(function(){
        console.log(3);
        process.nextTick(function(){
            console.log(4);
            process.nextTick(function(){
                console.log(5);
            })
        })
    })
}
next(); // 1 3 4 5 2