var expressImport = require("express")

var router  = expressImport.Router()

var data = [{"id":1,"name":"hicham"},{"id":2,"name":"botaina"}]

router.use('/', function(req,res,next){
    console.log('api is called')
    next()
})

router.get("/",(req,res)=>{
    res.send('user page')
})

router.use('/', function(req,res,next){
    console.log('api is ended')
    next()
})

router.get("/user_data",(req,res)=>{

    res.send(data)
})

router.get("/user/:id([1-9])",(req,res)=>{
    var idParams =req.params.id
    var index  = data.findIndex(value=>value.id==idParams)
    res.send(data[index])
})

// wild card : when route not exist go to route not found
/router.get('*',(req,res)=>{
    res.send("url not found")
})

module.exports = router