# MVVM

## 1.数据劫持
``` javascript
Object.setProperties(obj, key, {
    configurable: true,
    // writable: true, // 与 set 冲突
    enumerable: true,
    // value: 'zfpx', // 与 get 冲突
    get () {
        // 获取值调用
        return 'zfpx';
    },
    set (val) {
        // 赋值调用
        console.log(val);
    }
})
```

## 2.数据代理
``` javascript
    // ...
    for(let key in data){
        Object.defineProperty(this, key, {
            get(){
                return this._data[key];
            },
            set(newVal) {
                this._data[key] = newVal;
            }
        })
    }
```

## 3.编译模板
``` javascript
function Compile(el, vm) {
    // el 表示替换的范围
    vm.$el = document.querySelector(el);
    let fragment = document.createDocumentFragment();
    while(child = vm.$el.firstChild) { // 将 app 中的内容移入内存中
        fragment.appendChild(child);
    }
    replace(fragment);
    function replace(fragment) {
        Array.from(fragment.childNodes).forEach(function (node) { //循环每一层
            let text = node.textContent;
            let reg = /\{\{(.*)\}\}/;
            if(node.nodeType === 3 && reg.test(text)){
                console.log(RegExp.$1); // a.a b
                let arr = RegExp.$1.split('.');
                let val = vm;
                arr.forEach(function(k){
                    val = val[k];
                })
                node.textContent = text.replace(/\{\{(.*)\}\}/, val);
            }
            if(node.childNodes) {
                replace(node);
            }
        })
    }
    vm.$el.appendChild(fragment); // 将内存中的元素放回
}
```

## 4.发布订阅模式
``` JavaScript
// 发布订阅模式 订阅 发布 【fn1, fn2, fn3】

// 绑定的方法 都有一个 update 属性
function Dep() {
    this.subs = [];
}
Dep.prototype.addSub = function (sub) {
    this.subs.push(sub);
};

Dep.prototype.notify = function() {
    this.subs.forEach(sub => sub.update());
}

function Watcher(fn) { // Watcher 是一个类，通过这个类创建的实例都拥有 update 方法
    this.fn = fn;
}
Watcher.prototype.update = function() {
    this.fn();
}
let watcher = new Watcher(function() { // 监听函数
    console.log(1);
});
let dep = new Dep();
dep.addSub(watcher); // 将 watcher 放到了数组中 [watcher.update]
dep.addSub(watcher); // 将 watcher 放到了数组中 [watcher.update]
console.log(dep.subs);

dep.notify();
```

## 5. 单向绑定 v-bind
``` JavaScript
// Compile
    new Watcher(vm, RegExp.$1, function(newVal) { // 函数里需要接收一个新值
        node.textContent = text.replace(/\{\{(.*)\}\}/, newVal);
    })
// Observe
    let dep = new Dep();
    // ...
    get(){
        Dep.target && dep.addSub(Dep.target);
        // ...
    }
    set() {
        // ...
        dep.notify();
    }
// Watcher
    // ...
    this.vm = vm;
    this.esp = esp; // 添加到订阅中
    Dep.target = this;
    let val = vm;
    let arr = esp.split('.');
    arr.forEach(function(k){ // this.a.a 出发 get() 添加 Sub
        val = val[k];
    })
    Dep.target = null;
// Watcher.prototype.update
    // ...
    let val = this.vm;
    let arr = this.esp.split('.');
    arr.forEach(function(k){ // this.a.a 出发 get() 添加 Sub
        val = val[k];
    })
    this.fn(val); // newVal

```

## 6. 双向绑定 v-modal
``` JavaScript
// Compile
    // Array().forEach(...
    if(node.nodeType === 1) {
        let attrsArr = node.attributes;
        Array.from(attrsArr).forEach(function(attr){
            let name = attr.name;
            let exp = attr.value;
            if(name.indexOf('v-') === 0) {
                node.value = vm[exp];
                new Watcher(vm, exp, function(newVal){
                    node.value = newVal;
                })
                node.addEventListener('input', function(e){
                    vm[exp] = e.target.value;
                })
            }
        })
    }
```

## 7. 实现 computed
``` JavaScript
// Lin ...
    initComputed.call(this);
// 
function initComputed() {
    let vm = this;
    let computed = this.$options.computed;
    Object.keys(computed).forEach(function(key) {
        Object.defineProperty(vm, key, {
            get: typeof computed[key] === 'function'?computed[key]:computed[key].get,
            set(){}
        })
    })
}
```