const http = require("http")
const modulo = require("./myFirstModule")
const express = require("express")
const app = express()

/* http.createServer((req, res)=>{
    
    res.writeHead(200)
    res.write("<p>a</p>")
    res.end()
}).listen(8080) 
 */

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(8080)
