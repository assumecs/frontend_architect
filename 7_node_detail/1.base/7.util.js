let util = require('util');
let obj = {name: 'alili', home: {
    city: {name: 'beijing'}
}}
console.log(util.inspect(obj, {depth:2}),);
// util.is 类型判断