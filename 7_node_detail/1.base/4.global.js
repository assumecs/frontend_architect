/**
 * global 全局对象 
 * windows 里也有全局对象，但是不能直接访问，我们在浏览器访问 global 是通过 window 实现的
 * 1.global 的变量都是全局变量
 * 2.所有的全局变量都是 global 的属性
 * console
 * process  当前进程
 * chdir
 * cwd
 * nextTick
 * stdout stderr stdin
 * Buffer
 * clearImmediate clearInteval clearTimeout
 * setImmediate setInteval setTimeout
 */
// console.log(global);
//  argv 如何写一个 vue-cli 脚手架
//  chdir cwd memoryUsage
// console.log(process);
//  chdir change directory 改变当前的工作目录
//  cwd current working directory 当前工作目录
console.log(process.cwd());
process.chdir('..'); // 切换到上级目录
console.log(process.cwd());
/**
 * V8 引擎最大申请 1.8 G
 * { rss: 19357696, // 常驻内存
  heapTotal: 6062080, // 堆的总申请量
  heapUsed: 3699264, // 已经使用的量
  external: 8272 } // 外部内存使用量
 */
console.log(process.memoryUsage());