const http = require('http')
const modulo = require("./myFirstModule")

http.createServer((req, res)=>{
    res.writeHead(200)
    res.write(modulo())
    res.end("<p>ye</p>")
}).listen(8080)