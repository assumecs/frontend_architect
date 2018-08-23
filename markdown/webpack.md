## 1. 模块化
模块化是指把一个复杂的系统分解到多个模块以方便编码。

### 1.1 命名空间
开发网页要通过命名空间的方式来组织代码
- 命名空间冲突，两个库可能会使用同一个名称
- 无法合理地管理项目的依赖和版本；
- 无法方便地控制依赖的加载顺序

### 1.2 CommonJS
CommonJS 是一种使用广泛的 'JavaScript' 模块化规范，核心思想是通过 'require' 方法来同步地加载依赖的其他模块，通过 module.exports 导出需要暴露的接口。
#### 1.2.1 用法
采用 CommonJS 导入及导出时的代码如下：
```javascript
// 导入
const moduleA = require('./moduleA');

// 导出
module.exports = moduleA.someFunc; 
```

#### 1.2.2 原理
```javascript
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
```


### 1.3 AMD
AMD 也是一种 JavaScript 模块化规范，与 CommonJS 最大的不同在于它采用异步的方式去加载依赖的模块。AMD 规范主要是为了解决针对浏览器环境的模块化问题，最具代表性的实现是 requirejs。

AMD 的优点
- 可在不转换代码的情况下直接在浏览器中运行。
- 可加载多个依赖
- 代码可运行在浏览器环境和 Node.js 环境下

AMD 的缺点
- JavaScript 运行环境没有原生支持 AMD，需要先导入实现了 AMD 的库后才能正常使用。

#### 1.3.1 用法
```javascript
// 定义一个模块
define('name', [], function(){
    return '珠峰';
})
define('age', ['name'], function(name){
    return name + 9;
})
// 导入和使用
require(['age'], function(age){
    console.log(age);
})
```

#### 1.3.2 原理
```javascript
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
```



### 1.4 ES6 模块化
ES6 模块化是 'ECMA' 提出的 'JavaScript' 模块化规范，它在语言层面上实现了模块化。浏览器厂商和 'Node.js' 都宣布要原生支持该规范。它将逐渐取代 'CommonJS' 和 'AMD' 规范，成为浏览器和服务器通用的模块解决方案。
采用 ES6 模块化导入及导出时的代码如下
```javascript
// 导入
import { name } from './person.js';

// 导出
export const name = 'zfpx';
```

ES6 模块虽然是终极模块化方案，但它的缺点在于目前无法直接运行在大部分 JavaScript 运行环境下，必须通过工具转换成标准的 ES5 后才能正常运行。


## 2. 自动化构建
构建就是做这件事情，把源码转换成发布到线上的可执行 JavaScript、css、HTML 代码，包括如下内容

- 代码转换：ECMASCRIPT6 编译成 ECMASCRIPT5、LESS 编译成 CSS 等。
- 文件优化：压缩 JavaScript、CSS、HTML 代码，压缩合并图片等。
- 代码分割：提取多个页面的公共代码、提取首屏不需要执行部分的代码让其异步加载。
- 模块合并：在采用模块化的项目里会有很多个模块和文件，需要构建功能把模块分类合并成一个文件。
- 自动刷新：监听本地源代码的变化，自动重新构建、刷新浏览器。
- 代码校验：在代码被提交到仓库前需要校验代码是否符合规范，以及单元测试是否通过
- 自动发布：更新万代码后，自动构建出线上发布代码并传输给发布系统。

## 3. Webpack
Webpack 是一个打包模块化 JavaScript 的工具，在 Webpack 里一切文件皆模块，通过 Loader 转换文件，通过 Plugin 注入钩子，最后输出由多个模块组合成的文件。Webpack 专注于构建模块化项目。

一切文件：JavaScript、CSS、SCSS、图片、模板，在 Webpack 眼中都是一个个模块，这样的好处是能清晰的描述出各个模块之间的依赖关系，以方便 Webpack 对模块进行组合和打包。经过 Webpack 的处理，最终会输出浏览器能使用的静态资源。

## 3.1 安装 Webpack
可执行文件

## 3.1.1 到项目
```
npm init -y
npm install webpack webpack-cli -D
```

### 3.1.2 全局
```
npm install webpack webpack-cli -g
```

## 4. 自建一个打包工具
```sh
mkdir linpack
# ./linpack/bin/linpack.js
cd linpack
npm init -y
# edit package.json "linpack.js" --> "bin/linpack.js"
npm link
# npm notice created a lockfile as package-lock.json. You should commit this fil
# e.
# npm WARN linpack@1.0.0 No description
# npm WARN linpack@1.0.0 No repository field.

# up to date in 0.059s
# /usr/local/bin/linpack -> /usr/local/lib/node_modules/linpack/bin/linpack.js
# /usr/local/lib/node_modules/linpack -> /Users/lin/Stu/Webpack/webpack-public/linpack
vim bin/linpack.js #! /usr/bin/env node
```