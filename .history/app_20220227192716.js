const http = require('http')
const modulo = require("./myFirstModule")

http.createServer((req, res)=>{
    res.writeHead(200)
    res.write(modulo.meuModulo())
    res.end()
}).listen(8080)