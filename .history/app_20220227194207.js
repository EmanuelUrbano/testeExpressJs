const http = require("http2")
const modulo = require("./myFirstModule")


http.createServer((req, res)=>{
    
    res.writeHead(200)
    res.write("<p>"+res+"</p>")
    res.end()
}).listen(8080)