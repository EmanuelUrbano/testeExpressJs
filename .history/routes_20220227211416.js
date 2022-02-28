const modulo = require("./myFirstModule")
const path = require("fs")
const express = require("express")
const app = express()

app.get('/', (req, res) => {
   path.readFile("./views/index.html",(err,data)=>{
       if(err){
           throw err
       }else{
           res.end(data)
       }
   })
})
 
app.get('/servicos', (req,res)=> {
    path.readFile("./views/servicos.html",(err,data)=>{
        if(err){
            throw err
        }else{
            res.end(data)
        }
    })
 })

app.listen(8080)
