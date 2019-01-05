let fs = require('fs');
let path = require('path');
/**
 * 删除文件 fs.unlink
 * 删除文件夹 fs.rmdir 这一定得是一个空目录
 */
// 异步递归删除非空文件夹
function rmdirp(name) {
  return new Promise(function(resolve, reject) {
    fs.readdir(name, (err, files) => {
      if(err) {
        reject('read dir err', err);
        return;
      }
      let promises = [];
      files.forEach(file => {
        promises.push(new Promise(function(resolve2, reject2){
          let child = path.join(name, file);
          fs.stat(child, (err, stat) => {
            if(!err){
              if(stat.isDirectory()){
                rmdirp(child).then((resp)=>{
                  resolve2(resp);
                }).catch((err)=> {
                  reject2(err)
                });
              } else {
                fs.unlink(child, (err) => {
                  if(err) {
                    console.log(err);
                    reject2('删除 ' + child + ' 失败', err);
                  } else {
                    resolve2('删除 ' + child);
                  }
                });
              }
            }
          })
  
        }))
      });
      Promise.all(promises).then((resp)=>{
        fs.rmdir(name, function(err){
          if(err) {
            console.log(err);
            reject('删除 ' + name + ' 失败', err);
          } else {
            resolve('删除 ' + name, resp);
          }
        });
        // resolve(resp);
      }).catch((err)=> {
        reject(err)
      })
    })
  })
}
// rmdirp('a').then((result)=>{
//   console.log('删除成功', result);
// }, (err)=>{
//   console.log('删除失败', err);
// });

function rmdir(dir) {
  return new Promise(function(resolve, reject) {
    fs.stat(dir, function(err, stat) {
      if(stat.isDirectory()){
        fs.readdir(dir, (err, files) => {
          if(err) return reject(err);
          // 先删除当前目录的子文件夹或文件，再删除自己
          Promise.all(files.map(item => rmdir(path.join(dir, item)))).then(() => {
            fs.rmdir(dir, resolve);
          })
        })
      } else {
        fs.unlink(dir, function(err, file) {
          resolve();
        })
      }
    })
  })
}
rmdir('a');