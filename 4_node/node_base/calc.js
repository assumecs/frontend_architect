function add(...args){
    return eval(args.join('+'));
}
// function sum(...args) {
//     // return eval(args.join('+'));
//     return args.reduce((prev, next) => {
//         return prev + next
//     })
// }
let sum = (...args) => args.reduce((prev, next) => prev + next);
// module.exports = add;
module.exports = sum;