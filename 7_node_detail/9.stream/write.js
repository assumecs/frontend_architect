let fs = require('fs');
let ws = fs.createWriteStream('./1.txt', {
    flags: 'w',
    mode: 0o666,
    start: 0,
    encoding: 'utf8',
    autoClose: true, // 当流完成后自动关闭
    highWaterMark: 3
});
let n = 9;
ws.on('error', (err) => {
    console.log('error', err);
})
function write() {
    // console.log('write run');
    let flag = true;
    while(flag && n > 0) {
        flag = ws.write(n + "", 'utf8', () => {
            console.log('ok');
        });
        n--;
        console.log(flag);
    }
    ws.once('drain', write);
}
write();