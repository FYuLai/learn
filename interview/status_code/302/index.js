const http = require('http')
const port = 3000;


const server = http.createServer((req,res) => {
  res.writeHead(302,{'location': 'http://itbilu.com/'})
  console.log(res._header);
  res.end();


})
server.listen(port)