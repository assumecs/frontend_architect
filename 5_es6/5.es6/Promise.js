function Promise(task) {
    let that = this;    // 缓存 this
    that.status = 'pending'; //默认状态 pending
    // 此变量放着此 promise 的结果
    that.value = undefined;
    // 成功，失败的回调
    that.onResolvedCallbacks = [];
    that.onRejectedCallbacks = [];
    // 调用此方法把状态变成成功态
    function resolve(value) {
        if(that.status === 'pending') {
            that.status = 'fulfilled';
            that.value = value;
            that.onResolvedCallbacks.forEach(item => {
                item(value);
            });
        }
    }
    // 调用此方法把状态变为失败态
    function reject(reason) {
        // 
        if(that.status === 'pending') {
            that.status = 'rejected';
            that.value = reason;
            that.onRejectedCallbacks.forEach(item => {
                item(reason);
            });
        }
    }
    try {
        task(resolve, reject);
    } catch (error) {
        reject(error);
    }
}

function resolvePromise (promise2, x, resolve, reject) {
    // 如果x就是promise2 会死循环
    let then;
    if(promise2 === x){
        return reject(new TypeError('循环引用'));
    }
    if(x instanceof Promise) {
        if(x.status == 'pending') {
            x.then(function(y) {
                resolvePromise(promise2, y, resolve, reject);
            }, reject);
        } else if(x.status === 'fulfilled') {
            resolve(x.value);
        } else if (x.status === 'rejected') {
            reject(x.value);
        }
    } else if (x != null && (typeof x == 'object' || typeof x == 'function')) {
        try {
            then = x.then;
            if(typeof then == 'function') {
                then.call(x, function(y){
                    resolvePromise(promise2, y, resolve,reject)
                }, reject);
            }
        } catch (err) {
            reject(err);
        }
    } else {
        resolve(x);
    }
}

// 两个参数：成功回调，失败回调
Promise.prototype.then = function(onFulFilled, onReject) {
    onFulFilled = typeof onFulFilled == 'function'?onFulFilled:function(value){return value};
    onReject = typeof onReject == 'function'?onReject:function(error){throw error};
    let that = this;
    let promise2;
    if(that.status === 'fulfilled') {
        promise2 = new Promise((resolve, reject) => {
            let x = onFulFilled(that.value);
            // resolve(x);
            resolvePromise(promise2, x, resolve, reject);
        });
        // onFulFilled(that.value);
    } else if (that.status === 'rejected') {
        promise2 = new Promise((resolve, reject) => {
            let x = onReject(that.value);
            // resolve(x);
            resolvePromise(promise2, x, resolve, reject);
        });
    } else if(that.status === 'pending') {
        promise2 = new Promise((resolve, reject) => {
            that.onResolvedCallbacks.push(function(){
                let x = onFulFilled(that.value);
                // resolve(x);
                resolvePromise(promise2, x, resolve, reject);
            })
            that.onRejectedCallbacks.push(function(){
                let x = onReject(that.value);
                // resolve(x);
                resolvePromise(promise2, x, resolve, reject);
            })
        })
        // onFulFilled && that.onResolvedCallbacks.push(onFulFilled);
        // onReject && that.onRejectedCallbacks.push(onReject);
    }
    return promise2;
}
Promise.prototype.catch = function (onReject) {
    let that = this;
    if(that.status === 'rejected') {
        onReject(that.value);
    } else if(that.status === 'pending') {
        onReject && that.onRejectedCallbacks.push(onReject);
    }
    return that;
}
module.exports = Promise;