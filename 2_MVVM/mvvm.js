function Lin(options = {}) {
    this.$options = options; // 将所有属性挂载在 $options;
    // this._data
    var data = this._data = this.$options.data;
    observe(data);
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
    initComputed.call(this);
    new Compile(options.el, this);
}
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
                new Watcher(vm, RegExp.$1, function(newVal) { // 函数里需要接收一个新值
                    node.textContent = text.replace(/\{\{(.*)\}\}/, newVal);
                })
                // 替换的逻辑
                node.textContent = text.replace(/\{\{(.*)\}\}/, val);
            }
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
            if(node.childNodes) {
                replace(node);
            }
        })
    }
    vm.$el.appendChild(fragment); // 将内存中的元素放回
}
// vm.$options
// 观察对象 给对象增加 ObjectDefineProperty
function Observe(data){ // 这里写主要逻辑
    let dep = new Dep();
    for(let key in data){ // 把 data 属性通过 Object.defineProperty 的方式定义属性
        let val = data[key];
        observe(val);
        Object.defineProperty(data, key, {
            enumerable: true,
            get() {
                Dep.target && dep.addSub(Dep.target);
                return val;
            },
            set(newVal) { // 更改值的时候
                if(newVal === val) { // 设置的值和以前的一样
                    return;
                }
                val = newVal; // 以后获取值的时候返回新值
                observe(val);
                dep.notify(); // 让所有的 watcher 的 update 方法执行
            }
        })
    }
}
function observe(data) {
    if(typeof data !== 'object') return;
    return new Observe(data);
}
// vue 特点：不能新增不存在的属性 不能存在的属性没有 get 和 set
// 深度响应 因为每次赋予一个新对象时会给这个新对象增加数据劫持


//发布订阅
function Dep() {
    this.subs = [];
}
Dep.prototype.addSub = function (sub) {
    this.subs.push(sub);
};

Dep.prototype.notify = function() {
    this.subs.forEach(sub => sub.update());
}

// Watcher
function Watcher(vm, exp, fn) {
    this.fn = fn;
    this.vm = vm;
    this.exp = exp; // 添加到订阅中
    Dep.target = this;
    let val = vm;
    let arr = exp.split('.');
    arr.forEach(function(k){ // this.a.a 出发 get() 添加 Sub
        val = val[k];
    })
    Dep.target = null;
}
Watcher.prototype.update = function() {
    let val = this.vm;
    let arr = this.exp.split('.');
    arr.forEach(function(k){ // this.a.a 出发 get() 添加 Sub
        val = val[k];
    })
    this.fn(val); // newVal
}