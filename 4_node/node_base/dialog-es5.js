// 写好的方法
// 公有私有区别，继承

function Dialog() {
    // 私有
    this.time = 3000;
}
Dialog.title = "弹框"; // 静态属性 只能类调用
// 公有
Dialog.prototype.$show = function(){
    console.log('show');
}

Dialog.prototype.$hide = function(){
    console.log('hide');
}
// 给 exports 赋予属性，可以导致 module.exports 对象变化
// exports.Dialog = Dialog; // 或者
// 直接给 module.exports 赋值
module.exports = Dialog;
