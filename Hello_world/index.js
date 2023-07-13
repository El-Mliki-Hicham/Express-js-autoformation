var express = require("express")
var user = require("./routes/users")
var product = require("./routes/products")

var app = express();

app.use('/users',user)
app.use('/product',product)



app.listen(2200)