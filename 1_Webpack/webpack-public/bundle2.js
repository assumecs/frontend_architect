 (function (modules) {
     function require(moduleId) {
         var module = {
             exports: {}
         };
         modules[moduleId].call(module.exports, module, module.exports, require);
         return module.exports;
     }
     return require("./src/index.js");
 })
 ({
    "./src/index.js":
    (function (module, exports, require) {
        eval("let str = require(/*! ./a.js */ \"./src/a.js\")\nconsole.log(str)\n\n//# sourceURL=webpack:///./src/index.js?");
    }),
    "./src/a.js":
    (function (module, exports) {
        eval("module.exports = '欢迎欢迎'\n\n//# sourceURL=webpack:///./src/a.js?");
    }),
 });