const http = require('http')

http.createServer((req, res)=>{
    res.writeHead(200)
    res.end("<p>ye</p>")
}).listen(8080)