var express = require('express');
var router = express.Router();

/* GET users listing. */

var data=  [{"id":1,"name":"hicham"},{"id":2,"name":"yahya"}]

var i = data.findIndex(value=>value.id === 2 )
 console.log(data[i])

router.get('/table', function(req, res, next) {
  res.render('users_table',{data:data});

});

router.get('/:id', function(req, res, next) {
  var idParams=  parseInt( req.params.id)

  var i = data.findIndex(value=>value.id === idParams )
  var newData =  data[i]
  res.render('users',{data:newData});

});


module.exports = router;
