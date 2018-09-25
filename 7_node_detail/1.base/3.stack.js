// 执行上下文环境栈
// 私有闭包 this arguments 私有变量 上级作用域变量
// 全局上下文
function one() {
    // one 的上下文
    console.log(1);
    let a = 'a';
    function two() {
        // two 的上下文
        console.log(2);
        let b = 'b';
        function three() {
            // three 的上下文
            console.log(3);
        }
    }
}

// 04-global_ 26:00