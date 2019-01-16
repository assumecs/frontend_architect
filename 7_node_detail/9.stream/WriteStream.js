let fs = require('fs');
let EventEmitter = require('events');

class WriteStream {
    constructor(path, options) {
        super(path, options);
        this.path = path;
        this.flags = options.flags || 'w';
        this.start = options.start || 0;
        this.pos = this.start; // 文件的写入索引
        this.encoding = options.encoding || 'utf8';
        this.autoClose = options.autoClose;
        this.highWaterMark = this.highWaterMark || 16*1024;
        this.buffer = []; // 缓存区
        this.writing = false; // 表示内部正在写入数据
        this.length = 0; // 表示缓存区字节的长度
        this.open();
    }
    open () {
        fs.open(this.path, this.flags, this.mode, (err, fd) => {
            if(err) {
                if(this.autoClose) {
                    this.destroy();
                }
                this.emit('error', err);
            }
            this.fd = fd;
        })
    }
    // 如果底层已经在写入数据的话，则必须将当前要写入的数据放入缓冲区
    write(chunk, encoding, cb) {
        if(this.writing) {
            // 放缓存区
            chunk = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk, encoding);
            this.buffers.push({
                chunk,
                encoding,
                cb
            })
        } else {
            // 在底层写完当前数据后要清空缓存区
            this.writing = true;
            this._write(chunk, encoding, () => this.clearBuffer());
        }
    }
    destroy () {
        fs.close(this.fd, () => {
            this.emit('close');
        })
    }
}

// 14 stream_ 01:10:30