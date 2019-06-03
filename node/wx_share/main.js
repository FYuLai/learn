// live-server
{/* <script src="./fs.js"></script>  */}
// require 进来  COMMONJS 模块化方案
const https = require('https');
const http = require('http');
let i = 0;

// 创建一个http服务  首先要支持这个服务  提供web访问机制


http
    .createServer(function(request, response){
        i++;
    console.log(i);
    response.end(`Hello World${i}`);
})
    .listen(3000);
// Web 服务 在软件上理解就是一个HTTP访问的服务