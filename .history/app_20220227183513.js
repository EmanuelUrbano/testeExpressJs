const http = require('http')

http.createServer((req, res)=>{
    res.writeHead(200,"hello word")
    res.end()
}).listen(8080)