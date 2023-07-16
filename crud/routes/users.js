var express = require('express');
const { default: mongoose } = require('mongoose');

const userModel = require('../models/users.model');

var router = express.Router();

/* GET users listing. */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
// route for add new  user 
router.post('/add', function (req, res, next) {
  //create new userModel
  let newUser = new userModel({
    userId: req.body.id,
    name: req.body.name,
    email: req.body.email
  })
  //save user in the database
  newUser.save()
    .then((newUser) => {
      res.send({ status: 200, message: "user has been added", userObj: newUser })
    })
    .catch((err) => {
      res.send(err)
    })
});

// route for get data 
router.get('/getAll', function (req, res, next) {
  //get all user 
  userModel.find()
    .then((data) => {
      res.send({ status: 200, userObj: data })
    })
    .catch((err) => {
      res.send(err)
    })
});

// route for searsh 
router.get('/searsh', function (req, res, next) {
  //regular expression  I = %
  const regex = new RegExp('^' + req.query.name, 'i'); 
  userModel.find({ name: regex })
    .then((data) => {
      res.send({ status: 200, userObj: data })
    })
    .catch((err) => {
      res.send(err)
    })
});
// route for get one element  
router.get('/getElementById/:id', function (req, res, next) {
  userModel.find({ userId: req.params.id })
    .then((data) => {
      res.send({ status: 200, userObj: data })
    })
    .catch((err) => {
      res.send(err)
    })
});
// route for update  
router.put('/update/:id', function (req, res, next) {
  var value = req.body
  var userId  ={userId: req.params.id}
  userModel.findOneAndUpdate(userId,value)
    .then((data) => {
      res.send({ status: 200, userObj: data })
    })
    .catch((err) => {
      res.send(err)
    })
});
// route for delete  
router.delete('/delete/:id', function (req, res, next) {
  var userId  ={userId: req.params.id}
  userModel.deleteOne(userId)
    .then((data) => {
      res.send({ status: 200, userObj: data })
    })
    .catch((err) => {
      res.send(err)
    })
});

module.exports = router;
