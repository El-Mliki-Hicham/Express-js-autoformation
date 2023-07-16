var express = require('express');
var router = express.Router();


var mongoose = require("mongoose")
var dbUrl = require('../connection').DB_URL
mongoose.connect(dbUrl)
mongoose.connection.on("connected",(data)=>{
  console.log('DB it connected')
  console.log(data)
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name:"hicham", title: 'express' });
});

module.exports = router;
