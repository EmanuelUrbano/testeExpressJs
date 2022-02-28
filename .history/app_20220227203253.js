const http = require("http")
const modulo = require("./myFirstModule")
const app = require("express")

http.createServer((req, res)=>{
    
    res.writeHead(200)
    res.write("<p>a</p>")
    res.end()
}).listen(8080)