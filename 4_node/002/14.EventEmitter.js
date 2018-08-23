class EventEmitter {    // {'失恋':[eat, cry, shopping]}
    constructor () {
        this._events = {};
    }
    on(eventName, callback) {
        if(!this._events[eventName]){
            this._events[eventName] = [callback]
        } else {
            this._events[eventName].push(callback);
        }
    }
    emit(eventName) {
        if(this._events[eventName]){
            this._events[eventName].forEach(cb => {
                cb();
            });
        }
    }
    removeListener (eventName, callback) {
        if(this._events[eventName]) {
            this._events[eventName] = this._events[eventName].filter(cb => cb != callback)
        }
    }
    once(eventName, callback) {
        let cb = () =>{ // 绑定的是 cb 执行的时候会触发 cb
            callback(); // cb 函数中调用原有的 callback
            this.removeListener(eventName, cb); // 删除，只执行一次
        }
        this.on(eventName, cb); // 先绑定 要在 callback 中删除绑定
    }
}

let e = new EventEmitter();
let cry = () => {console.log('cry')};
e.on('失恋', cry);
e.on('失恋', cry);
e.removeListener('失恋', cry);
e.emit('失恋');