function Clock() {
    this.listener;
    // 直接执行会报错
    // this.listener();
    // 找到合适的执行时间
    process.nextTick(() => {
        this.listener();
    })
}
Clock.prototype.add = function (listener) {
    this.listener = listener;
}
let c = new Clock();
c.add(() => {console.log('ok')})