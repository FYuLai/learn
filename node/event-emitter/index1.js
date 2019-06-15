const EventEmitter = require('events');
class Ev extends EventEmitter{};


const ev = new Ev();
// 绑定事件
['search','choose'].forEach(key => {
  ev.on(key,async function(...args){
    // search
    // 把所有剩余的函数参数整理为数组
    //   args = []; 处理参数不固定
    // ...args 的作用 fn (arg1,arg2,arg3);
    const fn = require(`./lib/${key}`);
    const res = await fn(...args);
    console.log('res 执行的结果',res);
    ev.emit('hamdle',key,res,...args);
  })
})
ev.on('handle',function(key,res,...args) {
  switch (key) {
    case 'search':
      return ev.emit('afterSearch',res,args[0]);
  }
})
function main (arg) {
  let keyword = arg[2];
  // console.log(keyword);
  ev.emit('search',keyword)
}

main(process.argv);
