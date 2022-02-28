const modulo = require("./myFirstModule")
const path = require("fs")
const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.send(path.readFile((err)=>{
        if (err) {
            throw err
        }else{
            return "./views/index.html"
        }
    }))
})
  
app.listen(8080)
