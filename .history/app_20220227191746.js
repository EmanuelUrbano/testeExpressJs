const http = require('http')

http.createServer((req, res)=>{
    res.writeHead(200,"<p>ye</p>")
    res.end()
}).listen(8080)