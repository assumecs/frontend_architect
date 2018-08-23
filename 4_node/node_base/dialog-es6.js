class Dialog {
    constructor() {
        this.time = 3000; // 私有属性
    }
    static title(){ // 静态属性
        '弹框'
    }
    $show() {   // 方法
        console.log('show');
    }
    $hide() {
        console.log('hide');
    }
}
module.exports = Dialog;