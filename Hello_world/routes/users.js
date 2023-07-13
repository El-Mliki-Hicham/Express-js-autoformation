var expressImport = require("express")

var router  = expressImport.Router()
var data = [{"id":1,"name":"hicham"},{"id":2,"name":"botaina"}]

router.get("/",(req,res)=>{
    res.send('user page')
})

router.get("/user_data",(req,res)=>{

    res.send(data)
})

router.get("/user/:id",(req,res)=>{
    var idParams =req.params.id
    var index  = data.findIndex(value=>value.id==idParams)
    res.send(data[index])
})

module.exports = router