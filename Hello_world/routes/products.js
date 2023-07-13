var expressImport = require("express")

var router  = expressImport.Router()

router.get("/",(req,res)=>{
    res.send('product page')
})
router.get("/product_data",(req,res)=>{
    var data = [{"name":"product 1"},{"name":"product 2"}]
    res.send(data)
})
module.exports = router