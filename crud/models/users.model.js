// import mongoose library
var mongoose = require("mongoose")
//create shema for structure than mongodb document
var usersShema = mongoose.Schema({
    userId: Number,
    name: String,
    email: String
})
//create model for a user collection 
var userModel = mongoose.model("users", usersShema)

module.exports = userModel





