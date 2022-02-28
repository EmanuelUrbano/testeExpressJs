const http = require("https")
const modulo = require("./myFirstModule")

http.createServer((req, res)=>{
    res.writeHead(200)
    res.write("<p>"+http.Server+"</p>")
    res.end()
}).listen(8080)