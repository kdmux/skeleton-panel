var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/error', function(req,res,next){
  req.flash('error', 'Incorrect Username/Password');
  res.render('index');
});

module.exports = router;
