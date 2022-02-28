const http = require('http')

http.createServer((req, res)=>{
    res.writeHead(200)
    res.end("hello word")
}).listen(8080)