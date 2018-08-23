// use 原理，每次调用 use 方法都会讲方法存到数组中，默认调用第一项，将 next 方法传递给数组中的函数，如果调用此函数 会继续执行数组中的下一项
function app() {}
app.middleWare = [];
app.use = function(cb) {
    this.middleWare.push(cb); // [fn, fn, fn]
}
app.use(function(req, resp, next) {
    console.log(1);
    next();
})
app.use(function(req, resp, next) {
    console.log(2);
    next();
})
app.use(function(req, resp, next) {
    console.log(3);
})
let index = 0;
function next() {
    app.middleWare[index++](null, null, next)
}
next();