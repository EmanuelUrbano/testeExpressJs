const http = require("http2")
const modulo = require("./myFirstModule")



http.createServer((req, res)=>{
    
    res.writeHead(200)
    res.write("<p>as</p>")
    res.end()
}).listen(8080)