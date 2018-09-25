function EventEmitter() {
    this.events = {}; // 会把所有的事件监听函数放在这个对象里保存
    // this.onceEvents = {};
    // 给一个事件类型增加的监听函数数量做多多少个
    this._maxListeners = 10;
}
EventEmitter.prototype.setMaxListeners = function(num) {
    this._maxListeners = num;
}
EventEmitter.prototype.getListeners = function(event) {
    return this.events[event];
}
// 给指定的事件绑定事件处理函数，1参数是事件类型，2参数是事件监听函数
EventEmitter.prototype.on = EventEmitter.prototype.addListener = function(type, listener){
    if(this.events[type]){
        this.events[type].push(listener);
        if(this._maxListeners !== 0 && this.events[type].length > this._maxListeners) {
            console.error(`MaxListenersExceededWarning: Possible EventEmitter memory leak detected. ${this.events[type].length} ${type} listeners added. Use emitter.setMaxListeners() to increase limit`)
        }
    } else {
        this.events[type] = [listener];
    }
}
// EventEmitter.prototype.once = function(type, listener){
//     if(!this.onceEvents[type]){
//         this.onceEvents[type] = [];
//     }
//     this.onceEvents[type].push(listener);
// }
EventEmitter.prototype.once = function(type, listener) {
    let wrapper = (...rest) => {
        listener.apply(this, rest);//先让原始监听函数执行
        this.removeListener(type, wrapper);
    }
    this.on(type, wrapper);
}
EventEmitter.prototype.removeListener = function(type, listener){
    if(this.events[type]) {
        this.events[type] = this.events[type].filter(item => item != listener);
    }
}
EventEmitter.prototype.removeAllListener = function(type) {
    delete this.events[type];
}
EventEmitter.prototype.emit = function(type, ...args) {
    if(this.events[type]){
        // 这样 this 对象指向不对 ，指向了当前模块
        // this.events[type].forEach(listener => listener(...args));
        this.events[type].forEach(listener => listener.apply(this, args));
    }
    // if(this.onceEvents[type]) {
    //     this.onceEvents[type].forEach(listener => {
    //         listener.apply(this, args);
    //     });
    //     this.onceEvents[type] = [];
    // }
}

module.exports = EventEmitter;