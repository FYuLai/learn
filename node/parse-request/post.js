// 自带
const http = require('http');
// 监听在8080 端口的服务
http.createServer((req,res)=>{
    // 向浏览器返回内容
    res.end('hello 8080');
}).listen(8080,()=>{
    console.log('server is running 8080');

})
