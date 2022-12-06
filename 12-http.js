const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
//   res.write('welcome to our home page');
  res.end('welcome this is our home page 2')
}

if(req.url === '/about'){
    res.end('here is our short history')
}


})

server.listen(5000)