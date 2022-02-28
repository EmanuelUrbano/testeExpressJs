const http = require("http")
const modulo = require("./myFirstModule")

http.createServer((req, res)=>{
    
    res.writeHead(200)
    res.write("<p>"+res.sendDate()+"</p>")
    res.end()
}).listen(8080)