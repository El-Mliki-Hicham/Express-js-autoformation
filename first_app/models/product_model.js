
var mongoose = require('mongoose')

var productShema =  mongoose.Schema({
    name:String,
    price:Number
});

var productsModel = mongoose.model('products',productShema)


module.exports = productsModel