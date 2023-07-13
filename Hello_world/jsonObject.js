var express = require("express")

var app = express()

app.get('/',(req,res)=>{
    var data = [{"name":"hicham"},{"name":"botaina"}]
    res.send(data)
})

app.get("/hello",(req,ress)=>{
    
})

app.listen(3000)