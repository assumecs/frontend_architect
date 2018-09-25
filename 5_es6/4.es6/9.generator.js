/**
 * 生成器(Generator) 与迭代器 (Iterator)
 * 它是理解 koa 的基础，另外也是现代异步解决方案 async await 的基础
 */

 /**
  * read 生成器 用来生成迭代器
  * @param {Array} books 
  */
 function read(books) {
    let index = 0;
    return {
        next () {
            let done = index == books.length - 1;
            let value = books[index++];
            return {
                value,
                done
            }
        }
    }
 }
//  迭代器 可以不停的调用 next 方法，得到一个结果{value, done}
// 当 done 为 true 就表示取完了
 let it = read(['js', 'node']);
//  it 有一个方法 next 每次调用 next 都会返回一个结果 {value, done}
let r1;
do {
    r1 = it.next();
    console.log(r1.value);
} while(!r1.done)
// console.log(r1.value);
console.log('end');