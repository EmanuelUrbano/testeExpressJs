const modulo = require("./myFirstModule")
const path = require("fs")
const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.send(path.readFile("./views/index.html",(err, data)=>{
        if (err) {
            throw err
        }else{
            console.log(data)
        }
    }))
})
  
app.listen(8080)
