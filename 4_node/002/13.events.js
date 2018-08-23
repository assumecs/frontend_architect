// 发布订阅
let EventEmitter = require('events');
let {inherits} = require('util');
function Girl() {
    // constructor
}
let girl = new Girl();
inherits(Girl, EventEmitter);   // {'失恋':[cry,eat]}
let cry = function (param) {
    console.log('ಥ_ಥ', param);
}
girl.once('失恋', cry)   // 订阅
let eat = function (param) {
    console.log('吃', param);
}
girl.on('失恋', eat)   // 订阅

girl.off('失恋', cry);
girl.emit('失恋', '我');  // 发布
girl.removeAllListeners('失恋');
girl.emit('失恋', '我');  // 发布
// remove one on emit