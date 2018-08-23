// define 声明模块 通过 require 使用一个模块
let factories = {}
function define(moduleName, dependencies, factory){
    factory.dependencies = dependencies; // 将依赖记到 factory 上
    factories[moduleName] = factory;
}
function require(modules, callback){
    let result = modules.map(function(mod){ // name, age
        let factory = factories[mod]
        let exports;
        let dependencies = factory.dependencies; // ['name']
        // require(['name', 'xxx'], function(name, xxx){})
        require(dependencies, function(){
            exports = factory.apply(null, arguments);
        })
        // exports = factory();
        return exports;
    })
    callback.apply(null, result);
}

define('name', [], function(){
    return '珠峰';
})
define('age', ['name'], function(name){
    return name + 9;
})
require(['age'], function(age){
    console.log(age);
})