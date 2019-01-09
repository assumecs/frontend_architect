/**
 * 写一个类，传入一个文件路径的到类的实例
 * 然后监听它的 newLine 事件，当这个行读取器每读到一行的时候，就会向外发射 newLine 事件，当读到结束的时候，就会发射 end 事件
 */
let fs = require('fs');
let EventEmitter = require('events');
let util = require('util');
const NEW_LINE = 0x0A; // /n 换行
const RETURN = 0x0D; // /r 回车
function LineReader(path, encoding) {
    EventEmitter.call(this);
    this._reader = fs.createReadStream(path);
    this._encoding = encoding;
    // 当给一个对象添加一个新的监听函数的时候会触发 newListener 事件
    let buffers = []; // 字节数组
    this.on('newListener', (type, listener) => {
        // 如果你添加了 newLine 监听，那就开始读取文件内容并发射数据
        if(type == 'newLine') {
            // 当我们监听了一个可读流的 readable 事件，流会调用底层的读取文件的 API 方法填充缓存区，填充完之后向外发射 readable 事件 供读取
            this._reader.on('readable', () => { // 暂停模式
                let char; // 是一个只有一个字节的 Buffer
                while(null != (char = this._reader.read(1))) {
                    switch (char[0]) {
                        case NEW_LINE:
                            this.emit('newLine', Buffer.from(buffers).toString(this._encoding));
                            buffers.length = 0;
                            break;
                        case RETURN:
                            this.emit('newLine', Buffer.from(buffers).toString(this._encoding));
                            buffers.length = 0;
                            // 往后再读一个字节
                            let nChar = this._reader.read(1);
                            if(nChar[0] != NEW_LINE) {
                                buffers.push(nChar[0]);
                            }
                            break;
                        default:
                            buffers.push(char[0]);
                            break;
                    }
                }
            });
            // 
        }
    });

    this._reader.on('end', () => {
        this.emit('newLine', Buffer.from(buffers).toString(this._encoding))
        this.emit('end');
    })
}
util.inherits(LineReader, EventEmitter);
module.exports = LineReader;