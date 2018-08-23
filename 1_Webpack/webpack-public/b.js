// let str = require('./a.js');
let fs = require('fs')
// CommonJS
function req(moduleName) {
    let content = fs.readFileSync(moduleName, 'utf8');
    // 最后一个参数是函数的内容体
    let fn = new Function('exports', 'module', 'require', '__dirname', '__filename', content + '\n return module.exports');
    let module = {
        exports: {}
    }
    return fn(module.exports, module, req, __dirname, __dirname);
}
let str = req('./a.js');
console.log(str)

/*
    function(exports, module, require, __dirname, __filename){
        module.exports = '欢迎欢迎'
        return module.exports
    }
*/