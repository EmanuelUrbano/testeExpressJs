const modulo = require("./myFirstModule")
const path = require("fs")
const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.send(req.params)
})
  
app.listen(8080)
